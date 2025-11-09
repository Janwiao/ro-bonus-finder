# ===============================================
# update_bonus.py
# -----------------------------------------------
# 功能：依據最新的 item_bonus(nori整理).txt 更新 bonus.js 的 desc
# 作者：Nori 專案用
# 日期：2025-11-09
# ===============================================

import re, pathlib, os

# === 設定檔名 ===
TXT_FILE = "BetterRa_item_bonus.txt"
JS_FILE = "bonus.js"
OUTPUT_DIR = "output"
OUTPUT_FILE = "bonus_updated.js"

# === 讀取檔案 ===
def read_file(path):
    return pathlib.Path(path).read_text(encoding="utf-8", errors="ignore")

def write_file(path, text):
    pathlib.Path(path).write_text(text, encoding="utf-8")

# === 從 TXT 生成 mapping ===
def build_mapping(txt_text):
    mapping = {}
    for line in txt_text.splitlines():
        if not line.strip().startswith("bonus"):
            continue
        m = re.match(r'(bonus\d*\s+[A-Za-z0-9_,]+;)\s*(.*)', line.strip())
        if m:
            name = m.group(1).strip()
            desc = m.group(2).strip()
            if desc:
                mapping[name] = desc
    return mapping

# === 依 mapping 替換 JS 內容 ===
def merge_descriptions(js_text, mapping):
    def replace_desc_block(match):
        block = match.group(0)
        name = match.group(1)
        if name in mapping:
            desc_new = mapping[name]
            block = re.sub(r'("desc":\s*")[^"]*(")', rf'\1{desc_new}\2', block)
        return block

    pattern = re.compile(r'"name":\s*"([^"]+)"[\s\S]*?\}', re.M)
    return pattern.sub(replace_desc_block, js_text)

# === 新增 JS 中沒有的 bonus ===
def append_missing(js_text, mapping):
    existing_names = set(re.findall(r'"name":\s*"([^"]+)"', js_text))
    new_entries = []
    for name, desc in mapping.items():
        if name not in existing_names:
            new_entries.append(f"// {name}\n{{\n  \"name\": \"{name}\",\n  \"desc\": \"{desc}\",\n  \"category\": \"未分類\",\n  \"source\": \"rAthena\"\n}},")
    if not new_entries:
        return js_text
    insert_pos = js_text.rfind("];")
    return js_text[:insert_pos] + "\n" + "\n".join(new_entries) + "\n];"

# === 主流程 ===
def main():
    if not pathlib.Path(TXT_FILE).exists() or not pathlib.Path(JS_FILE).exists():
        print("❌ 找不到 item_bonus(nori整理).txt 或 bonus.js，請確認放在同資料夾。")
        return

    txt_text = read_file(TXT_FILE)
    js_text = read_file(JS_FILE)

    print("🔍 解析翻譯資料中...")
    mapping = build_mapping(txt_text)
    print(f"共擷取 {len(mapping)} 條 bonus 翻譯。")

    print("🔧 正在更新 desc ...")
    merged = merge_descriptions(js_text, mapping)

    print("🧩 檢查新條目 ...")
    final_text = append_missing(merged, mapping)

    # 建立輸出資料夾
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    out_path = pathlib.Path(OUTPUT_DIR) / OUTPUT_FILE
    write_file(out_path, final_text)

    print(f"✅ 已完成更新！共輸出至： {out_path.absolute()}")

if __name__ == "__main__":
    main()
