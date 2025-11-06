// 格式：{ id?: number, name: string, desc: string, category?: string }
const BONUSES = [
  { name: "bStr",        desc: "力量 +X（例：bonus bStr,10;）",           category: "能力值" },
  { name: "bAgi",        desc: "敏捷 +X",                                   category: "能力值" },
  { name: "bInt",        desc: "智力 +X",                                   category: "能力值" },
  { name: "bDex",        desc: "靈巧 +X",                                   category: "能力值" },
  { name: "bLuk",        desc: "幸運 +X",                                   category: "能力值" },
  { name: "bAtk",        desc: "物理攻擊 +X（裝備攻擊力補正）",             category: "攻擊" },
  { name: "bMatk",       desc: "魔法攻擊 +X（裝備魔攻補正）",               category: "攻擊" },
  { name: "bAspdRate",   desc: "ASPD 變動（%）",                             category: "速度" },
  { name: "bMaxHP",      desc: "最大 HP +X",                                 category: "生存" },
  { name: "bMaxSP",      desc: "最大 SP +X",                                 category: "生存" },
  { name: "bNoKnockback",desc: "免疫擊退（不被推退）",                       category: "特殊" },
  // …把你的完整清單接在這裡
];
