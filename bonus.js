// 格式：{ id?: number, name: string, desc: string, category?: string, source?: string }
const BONUSES = [
// ====================
// 1. Base stats | 基本屬性
// ====================
// bonus bStr,n;			STR + n
{
  "name": "bonus bStr,n;",
  "desc": "力量 + n",
  "category": "基本屬性",
  "source": "rAthena"
},
// bonus bAgi,n;			AGI + n
{
  "name": "bonus bAgi,n;",
  "desc": "敏捷 + n",
  "category": "基本屬性",
  "source": "rAthena"
},
// bonus bVit,n;			VIT + n
{
  "name": "bonus bVit,n;",
  "desc": "體質 + n",
  "category": "基本屬性",
  "source": "rAthena"
},
// bonus bInt,n;			INT + n
{
  "name": "bonus bInt,n;",
  "desc": "智力 + n",
  "category": "基本屬性",
  "source": "rAthena"
},
// bonus bDex,n;			DEX + n
{
  "name": "bonus bDex,n;",
  "desc": "靈巧 + n",
  "category": "基本屬性",
  "source": "rAthena"
},
// bonus bLuk,n;			LUK + n
{
  "name": "bonus bLuk,n;",
  "desc": "幸運 + n",
  "category": "基本屬性",
  "source": "rAthena"
},
// bonus bAllStats,n;			STR + n, AGI + n, VIT + n, INT + n, DEX + n, LUK + n
{
  "name": "bonus bAllStats,n;",
  "desc": "力量 + n, 敏捷 + n, 體質 + n, 智力 + n, 靈巧 + n, 幸運 + n",
  "category": "基本屬性",
  "source": "rAthena"
},
// bonus bAgiVit,n;			AGI + n, VIT + n
{
  "name": "bonus bAgiVit,n;",
  "desc": "敏捷 + n, 體質 + n",
  "category": "基本屬性",
  "source": "rAthena"
},
// bonus bAgiDexStr,n;			STR + n, AGI + n, DEX + n
{
  "name": "bonus bAgiDexStr,n;",
  "desc": "力量 + n, 敏捷 + n, 靈巧 + n",
  "category": "基本屬性",
  "source": "rAthena"
},
// ====================
// 2. Trait Stats | 特性屬性
// ====================
// bonus bPow,n;			POW + n
{
  "name": "bonus bPow,n;",
  "desc": "POW + n",
  "category": "特性屬性",
  "source": "rAthena"
},
// bonus bSta,n;			STA + n
{
  "name": "bonus bSta,n;",
  "desc": "STA + n",
  "category": "特性屬性",
  "source": "rAthena"
},
// bonus bWis,n;			WIS + n
{
  "name": "bonus bWis,n;",
  "desc": "WIS + n",
  "category": "特性屬性",
  "source": "rAthena"
},
// bonus bSpl,n;			SPL + n
{
  "name": "bonus bSpl,n;",
  "desc": "SPL + n",
  "category": "特性屬性",
  "source": "rAthena"
},
// bonus bCon,n;			CON + n
{
  "name": "bonus bCon,n;",
  "desc": "CON + n",
  "category": "特性屬性",
  "source": "rAthena"
},
// bonus bCrt,n;			CRT + n
{
  "name": "bonus bCrt,n;",
  "desc": "CRT + n",
  "category": "特性屬性",
  "source": "rAthena"
},
// bonus bAllTraitStats,n;			POW + n, STA + n, WIS + n, SPL + n, CON + n, CRT + n
{
  "name": "bonus bAllTraitStats,n;",
  "desc": "POW + n, STA + n, WIS + n, SPL + n, CON + n, CRT + n",
  "category": "特性屬性",
  "source": "rAthena"
},
// ====================
// 3. HP/SP/AP | HP/SP/AP
// ====================
// bonus bMaxHP,n;			MaxHP + n
{
  "name": "bonus bMaxHP,n;",
  "desc": "最大HP + n",
  "category": "HP/SP/AP",
  "source": "rAthena"
},
// bonus bMaxHPrate,n;			MaxHP + n%
{
  "name": "bonus bMaxHPrate,n;",
  "desc": "最大HP + n%",
  "category": "HP/SP/AP",
  "source": "rAthena"
},
// bonus bMaxSP,n;			MaxSP + n
{
  "name": "bonus bMaxSP,n;",
  "desc": "最大SP + n",
  "category": "HP/SP/AP",
  "source": "rAthena"
},
// bonus bMaxSPrate,n;			MaxSP + n%
{
  "name": "bonus bMaxSPrate,n;",
  "desc": "最大SP + n%",
  "category": "HP/SP/AP",
  "source": "rAthena"
},
// bonus bMaxAP,n;			MaxAP + n
{
  "name": "bonus bMaxAP,n;",
  "desc": "最大AP + n",
  "category": "HP/SP/AP",
  "source": "rAthena"
},
// bonus bMaxAPrate,n;			MaxAP + n%
{
  "name": "bonus bMaxAPrate,n;",
  "desc": "最大AP + n%",
  "category": "HP/SP/AP",
  "source": "rAthena"
},
// ====================
// 4. Atk/Def | 攻擊與防禦
// ====================
// bonus bBaseAtk,n;			Basic attack power + n
{
  "name": "bonus bBaseAtk,n;",
  "desc": "基本攻擊力 + n",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// bonus bAtk,n;			ATK + n (unofficial)
{
  "name": "bonus bAtk,n;",
  "desc": "ATK + n",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// bonus bAtk2,n;			ATK2 + n
{
  "name": "bonus bAtk2,n;",
  "desc": "ATK2 + n",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// bonus bAtkRate,n;			ATK + n% that won't interfere with Damage modifier and SC_EDP (renewal mode only)
{
  "name": "bonus bAtkRate,n;",
  "desc": "攻擊力 + n% ",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// bonus bWeaponAtkRate,n;			Weapon ATK + n%
{
  "name": "bonus bWeaponAtkRate,n;",
  "desc": "武器攻擊力 + n%",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// bonus bMatk,n;			Magical attack power + n
{
  "name": "bonus bMatk,n;",
  "desc": "魔法攻擊力 + n",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// bonus bMatk2,n;			Magical attack power + n (not visible in status window)
{
  "name": "bonus bMatk2,n;",
  "desc": "魔法攻擊力 + n（狀態視窗中不顯示）",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// bonus bMatkRate,n;			Magical attack power + n%
{
  "name": "bonus bMatkRate,n;",
  "desc": "魔法攻擊力 + n%",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// bonus bWeaponMatkRate,n;			Weapon Magical ATK + n% (renewal mode only)
{
  "name": "bonus bWeaponMatkRate,n;",
  "desc": "武器魔法攻擊力 + n%",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// bonus bDef,n;			Equipment DEF + n
{
  "name": "bonus bDef,n;",
  "desc": "裝備防禦 + n",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// bonus bDefRate,n;			Equipment DEF + n%
{
  "name": "bonus bDefRate,n;",
  "desc": "裝備防禦 + n%",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// bonus bDef2,n;			VIT based DEF + n
{
  "name": "bonus bDef2,n;",
  "desc": "基於 VIT 的 DEF + n",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// bonus bDef2Rate,n;			VIT based DEF + n%
{
  "name": "bonus bDef2Rate,n;",
  "desc": "基於 VIT 的 DEF + n%",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// bonus bMdef,n;			Equipment MDEF + n
{
  "name": "bonus bMdef,n;",
  "desc": "裝備 MDEF + n",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// bonus bMdefRate,n;			Equipment MDEF + n%
{
  "name": "bonus bMdefRate,n;",
  "desc": "裝備 MDEF + n%",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// bonus bMdef2,n;			INT based MDEF + n
{
  "name": "bonus bMdef2,n;",
  "desc": "基於 INT 的 MDEF + n",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// bonus bMdef2Rate,n;			INT based MDEF + n%
{
  "name": "bonus bMdef2Rate,n;",
  "desc": "基於 INT 的 MDEF + n%",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// bonus2 bSkillAtk,sk,n;			Increases damage of skill sk by n%
{
  "name": "bonus2 bSkillAtk,sk,n;",
  "desc": "技能sk傷害增加n%",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// bonus bSkillRatio,n;			Adds n to the skillratio of all attacks/skills that use it
{
  "name": "bonus bSkillRatio,n;",
  "desc": "將該數值加到所有使用該技能的攻擊/技能的技能比率。",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// bonus bShortAtkRate,n;			Increases damage of short ranged attacks by n%
{
  "name": "bonus bShortAtkRate,n;",
  "desc": "近距離物理攻擊+%",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// bonus bLongAtkRate,n;			Increases damage of long ranged attacks by n%
{
  "name": "bonus bLongAtkRate,n;",
  "desc": "遠距離物理攻擊+%",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// bonus bCritAtkRate,n;			Increases critical damage by +n%
{
  "name": "bonus bCritAtkRate,n;",
  "desc": "暴擊傷害增加+n%",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// bonus bCritDefRate,n;			Decreases critical damage received by n%
{
  "name": "bonus bCritDefRate,n;",
  "desc": "受到的暴擊傷害減少 n%",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// bonus bCriticalDef,n;			Decreases the chance of being hit by critical hits by n%
{
  "name": "bonus bCriticalDef,n;",
  "desc": "被暴擊命中的機率降低 n%",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// bonus2 bWeaponAtk,w,n;			Adds n ATK when weapon of type w is equipped
{
  "name": "bonus2 bWeaponAtk,w,n;",
  "desc": "裝備w型武器時增加n個攻擊力",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// bonus2 bWeaponDamageRate,w,n;			Adds n% damage to normal attacks when weapon of type w is equipped
{
  "name": "bonus2 bWeaponDamageRate,w,n;",
  "desc": "裝備w型武器時，普通攻擊傷害增加n%",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// bonus bNearAtkDef,n;			Adds n% damage reduction against melee physical attacks
{
  "name": "bonus bNearAtkDef,n;",
  "desc": "受到近距離物理傷害-n%",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// bonus bLongAtkDef,n;			Adds n% damage reduction against ranged physical attacks
{
  "name": "bonus bLongAtkDef,n;",
  "desc": "受到遠距離物理傷害-n%",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// bonus bMagicAtkDef,n;			Adds n% damage reduction against magical attacks
{
  "name": "bonus bMagicAtkDef,n;",
  "desc": "受到魔法傷害-n%",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// bonus bMiscAtkDef,n;			Adds n% damage reduction against MISC attacks (traps, falcon, ...)
{
  "name": "bonus bMiscAtkDef,n;",
  "desc": "受到Misc(陷阱、獵鷹等)傷害-n%",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// bonus bNoWeaponDamage,n;			Adds n% reduction to received physical damage
{
  "name": "bonus bNoWeaponDamage,n;",
  "desc": "對受到的物理傷害增加 n% 減免",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// bonus bNoMagicDamage,n;			Adds n% reduction to received magical effect (attack, healing, support spells are all blocked)
{
  "name": "bonus bNoMagicDamage,n;",
  "desc": "對受到的魔法效果增加 n% 減少（攻擊、治療、輔助法術都被阻止）",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// bonus bNoMiscDamage,n;			Adds n% reduction to received misc damage
{
  "name": "bonus bNoMiscDamage,n;",
  "desc": "對受到的雜項傷害增加 n% 減少",
  "category": "攻擊與防禦",
  "source": "rAthena"
},



// bonus bAtkEle,e;			Gives the player's attacks element e
{
  "name": "bonus bAtkEle,e;",
  "desc": "賦予玩家的攻擊元素屬性 e",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// bonus bDefEle,e;			Gives the player's defense element e
{
  "name": "bonus bDefEle,e;",
  "desc": "賦予玩家的防禦元素屬性 e",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// bonus2 bMagicAtkEle,e,x;			Increases damage of e element magic by x%
{
  "name": "bonus2 bMagicAtkEle,e,x;",
  "desc": "使 e 元素魔法的傷害 +x%",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// bonus bDefRatioAtkRace,r;			Deals more damage to enemies of race r with higher defense
{
  "name": "bonus bDefRatioAtkRace,r;",
  "desc": "對防禦力較高的種族 r 敵人造成更多傷害",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// bonus bDefRatioAtkEle,e;			Deals more damage to enemies of element e with higher defense
{
  "name": "bonus bDefRatioAtkEle,e;",
  "desc": "對防禦力較高的元素 e 敵人造成更多傷害",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// bonus bDefRatioAtkClass,c;			Deals more damage to enemies of class c with higher defense
{
  "name": "bonus bDefRatioAtkClass,c;",
  "desc": "對防禦力較高的階級 C 敵人造成更多傷害",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// bonus4 bSetDefRace,r,n,t,y;			Set DEF to y of an enemy of race r at n% for t milliseconds with normal attack
{
  "name": "bonus4 bSetDefRace,r,n,t,y;",
  "desc": "使用普通攻擊，將種族為 r 的敵人的防禦力 y 值降低 n%，持續 t 毫秒",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// bonus4 bSetMDefRace,r,n,t,y;			Set MDEF to y of an enemy of race r at n% for t milliseconds with normal attack
{
  "name": "bonus4 bSetMDefRace,r,n,t,y;",
  "desc": "使用普通攻擊，將種族為 r 的敵人的魔法防禦力 y 設定為 n%，持續 t 毫秒",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// ====================
// 5. Additional stats | 附加能力
// ====================
// bonus bHit,n;			Hit + n
{
  "name": "bonus bHit,n;",
  "desc": "命中 + n",
  "category": "附加能力",
  "source": "rAthena"
},
// bonus bHitRate,n;			Hit + n%
{
  "name": "bonus bHitRate,n;",
  "desc": "命中 + n%",
  "category": "附加能力",
  "source": "rAthena"
},
// bonus bCritical,n;			Critical + n
{
  "name": "bonus bCritical,n;",
  "desc": "爆擊 + n",
  "category": "附加能力",
  "source": "rAthena"
},
// bonus bCriticalLong,n;			Critical + n for normal long ranged attack (won't be shown in status window)
{
  "name": "bonus bCriticalLong,n;",
  "desc": "爆擊 + n 對於普通的遠程攻擊（不會在狀態窗口中顯示）",
  "category": "附加能力",
  "source": "rAthena"
},
// bonus2 bCriticalAddRace,r,n;			Critical + n against enemies of race r
{
  "name": "bonus2 bCriticalAddRace,r,n;",
  "desc": "爆擊 + n 對抗r種族的敵人",
  "category": "附加能力",
  "source": "rAthena"
},
// bonus bCriticalRate,n;			Critical + n%
{
  "name": "bonus bCriticalRate,n;",
  "desc": "爆擊 + n%",
  "category": "附加能力",
  "source": "rAthena"
},
// bonus bFlee,n;			Flee + n
{
  "name": "bonus bFlee,n;",
  "desc": "閃避 + n",
  "category": "附加能力",
  "source": "rAthena"
},
// bonus bFleeRate,n;			Flee + n%
{
  "name": "bonus bFleeRate,n;",
  "desc": "閃避 + n%",
  "category": "附加能力",
  "source": "rAthena"
},
// bonus bFlee2,n;			Perfect Dodge + n
{
  "name": "bonus bFlee2,n;",
  "desc": "完美迴避 + n",
  "category": "附加能力",
  "source": "rAthena"
},
// bonus bFlee2Rate,n;			Perfect Dodge + n%
{
  "name": "bonus bFlee2Rate,n;",
  "desc": "完美迴避 + n%",
  "category": "附加能力",
  "source": "rAthena"
},
// bonus bPerfectHitRate,n;			On-target impact attack probability n% (only the highest among all is applied)
{
  "name": "bonus bPerfectHitRate,n;",
  "desc": "對目標衝擊攻擊概率n%（只應用最高的）",
  "category": "附加能力",
  "source": "rAthena"
},
// bonus bPerfectHitAddRate,n;			On-target impact attack probability + n%
{
  "name": "bonus bPerfectHitAddRate,n;",
  "desc": "命中命中概率 + n% (誘導攻擊)",
  "category": "附加能力",
  "source": "rAthena"
},
// bonus bSpeedRate,n;			Movement speed + n% (only the highest among all is applied, won't be stacked with SC_SPEEDUP0, SC_SPEEDUP1)
{
  "name": "bonus bSpeedRate,n;",
  "desc": "移動速度+n%（只應用最高的，不會與SC_SPEEDUP0、SC_SPEEDUP1疊加）",
  "category": "附加能力",
  "source": "rAthena"
},
// bonus bSpeedAddRate,n;			Movement speed + n%
{
  "name": "bonus bSpeedAddRate,n;",
  "desc": "移動速度 + n%",
  "category": "附加能力",
  "source": "rAthena"
},
// bonus bAspd,n;			Attack speed + n
{
  "name": "bonus bAspd,n;",
  "desc": "攻擊速度 + n",
  "category": "附加能力",
  "source": "rAthena"
},
// bonus bAspdRate,n;			Attack speed + n%
{
  "name": "bonus bAspdRate,n;",
  "desc": "攻擊速度 + n%",
  "category": "附加能力",
  "source": "rAthena"
},
// bonus bAtkRange,n;			Attack range + n
{
  "name": "bonus bAtkRange,n;",
  "desc": "射程距離 +n",
  "category": "附加能力",
  "source": "rAthena"
},
// bonus bAddMaxWeight,n;			MaxWeight + n (in units of 0.1)
{
  "name": "bonus bAddMaxWeight,n;",
  "desc": "最大重量 + n (in units of 0.1)",
  "category": "附加能力",
  "source": "rAthena"
},
// bonus bPAtk,n;			PAtk + n
{
  "name": "bonus bPAtk,n;",
  "desc": "PAtk + n",
  "category": "附加能力",
  "source": "rAthena"
},
// bonus bPAtkRate,n;			PAtk + n%
{
  "name": "bonus bPAtkRate,n;",
  "desc": "PAtk + n%",
  "category": "附加能力",
  "source": "rAthena"
},
// bonus bSMatk,n;			SMatk + n
{
  "name": "bonus bSMatk,n;",
  "desc": "SMatk + n",
  "category": "附加能力",
  "source": "rAthena"
},
// bonus bSMatkRate,n;			SMatk + n%
{
  "name": "bonus bSMatkRate,n;",
  "desc": "SMatk + n%",
  "category": "附加能力",
  "source": "rAthena"
},
// bonus bRes,n;			Res + n
{
  "name": "bonus bRes,n;",
  "desc": "Res + n",
  "category": "附加能力",
  "source": "rAthena"
},
// bonus bResRate,n;			Res + n%
{
  "name": "bonus bResRate,n;",
  "desc": "Res + n%",
  "category": "附加能力",
  "source": "rAthena"
},
// bonus bMRes,n;			MRes + n
{
  "name": "bonus bMRes,n;",
  "desc": "MRes + n",
  "category": "附加能力",
  "source": "rAthena"
},
// bonus bMResRate,n;			MRes + n%
{
  "name": "bonus bMResRate,n;",
  "desc": "MRes + n%",
  "category": "附加能力",
  "source": "rAthena"
},
// bonus bHPlus,n;			HPlus + n
{
  "name": "bonus bHPlus,n;",
  "desc": "HPlus + n",
  "category": "附加能力",
  "source": "rAthena"
},
// bonus bHPlusRate,n;			HPlus + n%
{
  "name": "bonus bHPlusRate,n;",
  "desc": "HPlus + n%",
  "category": "附加能力",
  "source": "rAthena"
},
// bonus bCRate,n;			CRate + n
{
  "name": "bonus bCRate,n;",
  "desc": "CRate + n",
  "category": "附加能力",
  "source": "rAthena"
},
// bonus bCRateRate,n;			CRate + n%
{
  "name": "bonus bCRateRate,n;",
  "desc": "CRate + n%",
  "category": "附加能力",
  "source": "rAthena"
},
// ====================
// 6. HP/SP | HP/SP
// ====================
// bonus bHPrecovRate,n;			Natural HP recovery ratio + n%
{
  "name": "bonus bHPrecovRate,n;",
  "desc": "自然HP恢復率+n%",
  "category": "HP/SP",
  "source": "rAthena"
},
// bonus bSPrecovRate,n;			Natural SP recovery ratio + n%
{
  "name": "bonus bSPrecovRate,n;",
  "desc": "自然 SP 恢復率 + n%",
  "category": "HP/SP",
  "source": "rAthena"
},
// bonus2 bHPRegenRate,n,t;			Gain n HP every t milliseconds
{
  "name": "bonus2 bHPRegenRate,n,t;",
  "desc": "每 t 毫秒獲得 n HP",
  "category": "HP/SP",
  "source": "rAthena"
},
// bonus2 bHPLossRate,n,t;			Lose n HP every t milliseconds
{
  "name": "bonus2 bHPLossRate,n,t;",
  "desc": "每 t 毫秒損失 n HP",
  "category": "HP/SP",
  "source": "rAthena"
},
// bonus2 bSPRegenRate,n,t;			Gain n SP every t milliseconds
{
  "name": "bonus2 bSPRegenRate,n,t;",
  "desc": "每 t 毫秒獲得 n SP",
  "category": "HP/SP",
  "source": "rAthena"
},
// bonus2 bSPLossRate,n,t;			Lose n SP every t milliseconds
{
  "name": "bonus2 bSPLossRate,n,t;",
  "desc": "每 t 毫秒失去 n SP",
  "category": "HP/SP",
  "source": "rAthena"
},
// bonus2 bRegenPercentHP,n,t;			Gain n% of max HP every t milliseconds
{
  "name": "bonus2 bRegenPercentHP,n,t;",
  "desc": "每 t 毫秒獲得最大生命值的 n%",
  "category": "HP/SP",
  "source": "rAthena"
},
// bonus2 bRegenPercentSP,n,t;			Gain n% of max SP every t milliseconds
{
  "name": "bonus2 bRegenPercentSP,n,t;",
  "desc": "每 t 毫秒獲得最大 SP 的 n%",
  "category": "HP/SP",
  "source": "rAthena"
},
// bonus bNoRegen,x;			Stops HP or SP regeneration (x: 1=HP, 2=SP)
{
  "name": "bonus bNoRegen,x;",
  "desc": "停止 HP 或 SP 再生 (x: 1=HP, 2=SP)",
  "category": "HP/SP",
  "source": "rAthena"
},
// bonus bUseSPrate,n;			SP consumption + n%
{
  "name": "bonus bUseSPrate,n;",
  "desc": "SP消耗+n%",
  "category": "HP/SP",
  "source": "rAthena"
},
// bonus2 bSkillUseSP,sk,n;			Decreases SP consumption of skill sk by n
{
  "name": "bonus2 bSkillUseSP,sk,n;",
  "desc": "技能sk的SP消耗減少n",
  "category": "HP/SP",
  "source": "rAthena"
},
// bonus2 bSkillUseSPrate,sk,n;			Decreases SP consumption of skill sk by n%
{
  "name": "bonus2 bSkillUseSPrate,sk,n;",
  "desc": "技能sk的SP消耗減少n%",
  "category": "HP/SP",
  "source": "rAthena"
},
// ====================
// 8. Healing | 恢復治癒
// ====================
// bonus bHealPower,n;			Increases heal amount of all heal skills by n%
{
  "name": "bonus bHealPower,n;",
  "desc": "所有治療技能的治療量增加 n%",
  "category": "恢復治癒",
  "source": "rAthena"
},
// bonus bHealPower2,n;			Increases heal amount if you are healed by any skills by n%
{
  "name": "bonus bHealPower2,n;",
  "desc": "如果你被任何技能治療，治療量增加 n%",
  "category": "恢復治癒",
  "source": "rAthena"
},
// bonus2 bSkillHeal,sk,n;			Increases heal amount of skill sk by n%
{
  "name": "bonus2 bSkillHeal,sk,n;",
  "desc": "技能 sk 的治療量增加 n%",
  "category": "恢復治癒",
  "source": "rAthena"
},
// bonus2 bSkillHeal2,sk,n;			Increases heal amount if you are healed by skill sk by n%
{
  "name": "bonus2 bSkillHeal2,sk,n;",
  "desc": "如果你被技能 sk 治療，治療量增加 n%",
  "category": "恢復治癒",
  "source": "rAthena"
},
// bonus bAddItemHealRate,n;			Increases HP recovered by n% for healing items
{
  "name": "bonus bAddItemHealRate,n;",
  "desc": "治療物品的 HP 恢復量增加 n%",
  "category": "恢復治癒",
  "source": "rAthena"
},
// bonus2 bAddItemHealRate,iid,n;			Increases HP recovered by n% for item iid
{
  "name": "bonus2 bAddItemHealRate,iid,n;",
  "desc": "物品 iid 恢復的 HP 增加 n%",
  "category": "恢復治癒",
  "source": "rAthena"
},
// bonus2 bAddItemGroupHealRate,ig,n;			Increases HP recovered by n% for items of item group ig
{
  "name": "bonus2 bAddItemGroupHealRate,ig,n;",
  "desc": "為物品組ig的物品增加n%的HP恢復",
  "category": "恢復治癒",
  "source": "rAthena"
},
// bonus bAddItemSPHealRate,n;			Increases SP recovered by n% for healing items
{
  "name": "bonus bAddItemSPHealRate,n;",
  "desc": "治療物品的 SP 恢復量增加 n%",
  "category": "恢復治癒",
  "source": "rAthena"
},
// bonus2 bAddItemSPHealRate,iid,n;			Increases SP recovered by n% for item iid
{
  "name": "bonus2 bAddItemSPHealRate,iid,n;",
  "desc": "物品 iid 恢復的 SP 增加 n%",
  "category": "恢復治癒",
  "source": "rAthena"
},
// bonus2 bAddItemGroupSPHealRate,ig,n;			Increases SP recovered by n% for items of item group ig
{
  "name": "bonus2 bAddItemGroupSPHealRate,ig,n;",
  "desc": "為物品組ig的物品增加n%的SP恢復",
  "category": "恢復治癒",
  "source": "rAthena"
},
// ====================
// 9. Cast time/delay | 施法與延遲
// ====================
// bonus bCastrate,n;			Skill cast time rate + n%. (If RENEWAL_CAST is defined, this bonus is equal to bVariableCastrate)
{
  "name": "bonus bCastrate,n;",
  "desc": "變動詠唱 增加減少n%",
  "category": "施法與延遲",
  "source": "rAthena"
},
// bonus2 bCastrate,sk,n;			Adjust casting time of skill sk by n%.(If RENEWAL_CAST is defined, this bonus is equal to bVariableCastrate)
{
  "name": "bonus2 bCastrate,sk,n;",
  "desc": "將技能sk的施法時間調整n%。（如果定義了RENEWAL_CAST，這個加成等於bVariableCastrate）",
  "category": "施法與延遲",
  "source": "rAthena"
},
// bonus bFixedCastrate,n;			Increases fixed cast time of all skills by n% (has effect in RENEWAL_CAST only)
{
  "name": "bonus bFixedCastrate,n;",
  "desc": "將所有技能的固定施法時間增加 n%（僅在 RENEWAL_CAST 中有效）",
  "category": "施法與延遲",
  "source": "rAthena"
},
// bonus2 bFixedCastrate,sk,n;			Increases fixed cast time of skill sk by n% (has effect in RENEWAL_CAST only)
{
  "name": "bonus2 bFixedCastrate,sk,n;",
  "desc": "增加技能 sk 的固定施法時間 n%（僅在 RENEWAL_CAST 中有效）",
  "category": "施法與延遲",
  "source": "rAthena"
},
// bonus bVariableCastrate,n;			Increases variable cast time of all skills by n%. (If RENEWAL_CAST is NOT defined, this bonus is equal to bCastrate)
{
  "name": "bonus bVariableCastrate,n;",
  "desc": "所有技能的可變施法時間增加 n%。 （如果未定義 RENEWAL_CAST，則此獎勵等於 bCastrate）",
  "category": "施法與延遲",
  "source": "rAthena"
},
// bonus2 bVariableCastrate,sk,n;			Increases variable cast time of skill sk by n% (If RENEWAL_CAST is NOT defined, this bonus is equal to bCastrate)
{
  "name": "bonus2 bVariableCastrate,sk,n;",
  "desc": "增加技能 sk 的可變施法時間 n%（如果未定義 RENEWAL_CAST，此加成等於 bCastrate）",
  "category": "施法與延遲",
  "source": "rAthena"
},
// bonus bFixedCast,t;			Increases fixed cast time of all skills by t milliseconds (has effect in RENEWAL_CAST only)
{
  "name": "bonus bFixedCast,t;",
  "desc": "固定詠唱 增加減少n%",
  "category": "施法與延遲",
  "source": "rAthena"
},
// bonus2 bSkillFixedCast,sk,t;			Increases fixed cast time of skill sk by t milliseconds (has effect in RENEWAL_CAST only)
{
  "name": "bonus2 bSkillFixedCast,sk,t;",
  "desc": "增加技能 sk 的固定施法時間 t 毫秒（僅在 RENEWAL_CAST 中有效）",
  "category": "施法與延遲",
  "source": "rAthena"
},
// bonus bVariableCast,t;			Increases variable cast time of all skills by t milliseconds
{
  "name": "bonus bVariableCast,t;",
  "desc": "將所有技能的可變施法時間增加 t 毫秒",
  "category": "施法與延遲",
  "source": "rAthena"
},
// bonus2 bSkillVariableCast,sk,t;			Increases variable cast time of skill sk by t milliseconds
{
  "name": "bonus2 bSkillVariableCast,sk,t;",
  "desc": "增加技能 sk 的可變施法時間 t 毫秒",
  "category": "施法與延遲",
  "source": "rAthena"
},
// bonus bNoCastCancel;			Prevents casting from being interrupted when hit (does not work in GvG)
{
  "name": "bonus bNoCastCancel;",
  "desc": "防止施法在被擊中時被打斷（在 GvG 中不起作用）",
  "category": "施法與延遲",
  "source": "rAthena"
},
// bonus bNoCastCancel2;			Prevents casting from being interrupted when hit (works even in GvG)
{
  "name": "bonus bNoCastCancel2;",
  "desc": "防止施法在被擊中時被打斷（即使在 GvG 中也有效）",
  "category": "施法與延遲",
  "source": "rAthena"
},
// bonus bDelayrate,n;			Increases skill delay by n%
{
  "name": "bonus bDelayrate,n;",
  "desc": "技能延遲增加 n%",
  "category": "施法與延遲",
  "source": "rAthena"
},
// bonus2 bSkillDelay,sk,t;			Increases delay of skill sk by t milliseconds
{
  "name": "bonus2 bSkillDelay,sk,t;",
  "desc": "技能 sk 延遲增加 t 毫秒",
  "category": "施法與延遲",
  "source": "rAthena"
},
// bonus2 bSkillCooldown,sk,t;			Increases cooldown of skill sk by t milliseconds
{
  "name": "bonus2 bSkillCooldown,sk,t;",
  "desc": "技能 sk 的冷卻時間增加 t 毫秒",
  "category": "施法與延遲",
  "source": "rAthena"
},
// ====================
// 10. Damage modifiers | 屬性與種族修正
// ====================
// bonus2 bAddEle,e,x;			+x% physical damage against element e
{
  "name": "bonus2 bAddEle,e,x;",
  "desc": "+x% 對元素 e 的物理傷害",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus3 bAddEle,e,x,bf;			+x% physical damage against element e with trigger criteria bf
{
  "name": "bonus3 bAddEle,e,x,bf;",
  "desc": "+x% 對元素 e 的物理傷害，觸發條件為 bf",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bMagicAddEle,e,x;			+x% magical damage against element e
{
  "name": "bonus2 bMagicAddEle,e,x;",
  "desc": "+x% 對元素 e 的魔法傷害",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bSubEle,e,x;			+x% damage reduction against attack element e
{
  "name": "bonus2 bSubEle,e,x;",
  "desc": "+x% 對攻擊元素 e 的傷害減免",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus3 bSubEle,e,x,bf;			+x% damage reduction against attack element e with trigger criteria bf
{
  "name": "bonus3 bSubEle,e,x,bf;",
  "desc": "+x% 對具有觸發條件 bf 的攻擊元素 e 的傷害減免",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bSubDefEle,e,x;			+x% physical damage reduction from enemy with defense element e
{
  "name": "bonus2 bSubDefEle,e,x;",
  "desc": "+x% 來自具有防禦元素 e 的敵人的物理傷害減免",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bMagicSubDefEle,e,x;			+x% magic damage reduction from enemy with defense element e
{
  "name": "bonus2 bMagicSubDefEle,e,x;",
  "desc": "+x% 來自具有防禦元素 e 的敵人的魔法傷害減免",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bAddRace,r,x;			+x% physical damage against race r
{
  "name": "bonus2 bAddRace,r,x;",
  "desc": "+x% 對種族 r 的物理傷害",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bMagicAddRace,r,x;			+x% magical damage against race r
{
  "name": "bonus2 bMagicAddRace,r,x;",
  "desc": "+x% 對種族 r 的魔法傷害",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bSubRace,r,x;			+x% damage reduction against race r
{
  "name": "bonus2 bSubRace,r,x;",
  "desc": "+x% 對種族 r 的傷害減免",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus3 bSubRace,r,x,bf;			+x% damage reduction against race r with trigger criteria bf
{
  "name": "bonus3 bSubRace,r,x,bf;",
  "desc": "+x% 對種族 r 的傷害減免，觸發條件為 bf",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bAddClass,c,x;			+x% physical damage against class c
{
  "name": "bonus2 bAddClass,c,x;",
  "desc": "+x% 對階級 c 的物理傷害",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bMagicAddClass,c,x;			+x% magical damage against class c
{
  "name": "bonus2 bMagicAddClass,c,x;",
  "desc": "+x% 對階級 c 的魔法傷害",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bSubClass,c,x;			+x% damage reduction against class c
{
  "name": "bonus2 bSubClass,c,x;",
  "desc": "+x% 對階級 c 的傷害減免",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bAddSize,s,x;			+x% physical damage against size s
{
  "name": "bonus2 bAddSize,s,x;",
  "desc": "+x% 對體型 s 敵人的物理傷害",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bMagicAddSize,s,x;			+x% magical damage against size s
{
  "name": "bonus2 bMagicAddSize,s,x;",
  "desc": "+x% 對體型 s 敵人的魔法傷害",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bSubSize,s,x;			+x% damage reduction against size s
{
  "name": "bonus2 bSubSize,s,x;",
  "desc": "+x% 對體型 s 敵人的傷害減免",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bWeaponSubSize,s,x;			+x% physical damage reduction against size s
{
  "name": "bonus2 bWeaponSubSize,s,x;",
  "desc": "+x% 受到 s 體型敵人的物理傷害",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bMagicSubSize,s,x;			+x% magic damage reduction against size s
{
  "name": "bonus2 bMagicSubSize,s,x;",
  "desc": "+x% 受到 s 體型敵人的魔法傷害",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus bNoSizeFix;			Ignores the size modifier when calculating damage
{
  "name": "bonus bNoSizeFix;",
  "desc": "計算傷害無視體型修正(雷同海盗之王卡片)",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bAddDamageClass,mid,x;			+x% physical damage against monster mid
{
  "name": "bonus2 bAddDamageClass,mid,x;",
  "desc": "對 指定職業 造成+x%物理傷害",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bAddMagicDamageClass,mid,x;			+x% magical damage against monster mid
{
  "name": "bonus2 bAddMagicDamageClass,mid,x;",
  "desc": "對 指定職業 造成+x%魔法傷害",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bAddDefMonster,mid,x;			+x% physical damage reduction against monster mid
{
  "name": "bonus2 bAddDefMonster,mid,x;",
  "desc": "受到 指定職業 造成物理傷害 +x% 物理傷害減免",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bAddMDefMonster,mid,x;			+x% magical damage reduction against monster mid
{
  "name": "bonus2 bAddMDefMonster,mid,x;",
  "desc": "受到 指定職業 造成魔法傷害 +x% 魔法傷害減免",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bAddRace2,mr,x;			+x% damage against monster race mr
{
  "name": "bonus2 bAddRace2,mr,x;",
  "desc": "+x% 對怪物種族 mr 的物理傷害",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bSubRace2,mr,x;			+x% damage reduction against monster race mr
{
  "name": "bonus2 bSubRace2,mr,x;",
  "desc": "+x% 對怪物種族 mr 的傷害減免",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bMagicAddRace2,mr,x;			+x% magic damage against monster race mr
{
  "name": "bonus2 bMagicAddRace2,mr,x;",
  "desc": "+x% 對怪物種族 mr 的魔法傷害",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bSubSkill,sk,n;			Reduces n% damage received from skill sk
{
  "name": "bonus2 bSubSkill,sk,n;",
  "desc": "減少來自技能技能的 n% 傷害",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus bAbsorbDmgMaxHP,n;			If the damage received is more than n% of Max HP, the damage received is [TotalDamage] - [n% of MaxHP] (Doesn't stack, will use the highest value) (Legacy rAthena behavior)
{
  "name": "bonus bAbsorbDmgMaxHP,n;",
  "desc": "如果受到的傷害超過最大生命值的 n%，則受到的傷害為 [總傷害] - [n% 最大生命值]（不疊加，取最高值）",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus bAbsorbDmgMaxHP2,n;			If the damage received is more than n% of Max HP, the damage received is reduced to n% of MaxHP (Doesn't stack, will use the highest value) (Official behavior)
{
  "name": "bonus bAbsorbDmgMaxHP2,n;",
  "desc": "如果受到的傷害超過最大生命值的 n%，則受到的傷害減少至最大生命值的 n%（不疊加，取最高值）（官方行為）",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// ====================
// 12. Ignore Def | 屬性與種族修正
// ====================
// bonus bIgnoreDefEle,e;			Disregard DEF against enemies of element e
{
  "name": "bonus bIgnoreDefEle,e;",
  "desc": "對元素 e 的敵人無視 DEF",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus bIgnoreDefRace,r;			Disregard DEF against enemies of race r
{
  "name": "bonus bIgnoreDefRace,r;",
  "desc": "對種族 r 的敵人無視 DEF",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus bIgnoreDefClass,c;			Disregard DEF against enemies of class c
{
  "name": "bonus bIgnoreDefClass,c;",
  "desc": "對階級 c 的敵人無視 DEF",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus bIgnoreMDefRace,r;			Disregard MDEF against enemies of race r
{
  "name": "bonus bIgnoreMDefRace,r;",
  "desc": "對種族 r 的敵人無視 MDEF",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bIgnoreDefRaceRate,r,n;			Disregard n% of the target's DEF if the target belongs to race r
{
  "name": "bonus2 bIgnoreDefRaceRate,r,n;",
  "desc": "如果目標屬於種族 r，則忽略目標物理防禦力的 n%",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bIgnoreMdefRaceRate,r,n;			Disregard n% of the target's MDEF if the target belongs to race r
{
  "name": "bonus2 bIgnoreMdefRaceRate,r,n;",
  "desc": "如果目標屬於種族 r，則忽略目標魔法防禦力的 n%",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bIgnoreMdefRace2Rate,mr,n;			Disregard n% of the target's MDEF if the target belongs to monster race mr
{
  "name": "bonus2 bIgnoreMdefRace2Rate,mr,n;",
  "desc": "如果目標屬於怪物種族 mr，則忽略目標魔法防禦力的 n%",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus bIgnoreMDefEle,e;			Disregard MDEF against enemies of element e
{
  "name": "bonus bIgnoreMDefEle,e;",
  "desc": "對元素 e 的敵人無視 MDEF",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bIgnoreDefClassRate,c,n;			Disregard n% of the target's DEF if the target belongs to class c
{
  "name": "bonus2 bIgnoreDefClassRate,c,n;",
  "desc": "如果目標屬於階級 c，則忽略目標物理防禦力的 n%",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bIgnoreMdefClassRate,c,n;			Disregard n% of the target's MDEF if the target belongs to class c
{
  "name": "bonus2 bIgnoreMdefClassRate,c,n;",
  "desc": "如果目標屬於階級 c，則忽略目標魔法防禦力的 n%",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// ====================
// 13. Ignore Res | 屬性與種族修正
// ====================
// bonus2 bIgnoreResRaceRate,r,n;			Disregard n% of the target's Res if the target belongs to race r
{
  "name": "bonus2 bIgnoreResRaceRate,r,n;",
  "desc": "如果目標屬於種族 r，則忽略目標 Res 的 n%",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bIgnoreMResRaceRate,r,n;			Disregard n% of the target's MRes if the target belongs to race r
{
  "name": "bonus2 bIgnoreMResRaceRate,r,n;",
  "desc": "如果目標屬於種族 r，則忽略目標 MRes 的 n%",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// ====================
// 14. Experience | 屬性與種族修正
// ====================
// bonus2 bExpAddRace,r,x;			Increase exp gained by x% against enemies of race r
{
  "name": "bonus2 bExpAddRace,r,x;",
  "desc": "對種族 r 的敵人攻擊時，所獲得的經驗值增加 x%",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bExpAddClass,c,x;			Increase exp gained by x% against enemies of class c
{
  "name": "bonus2 bExpAddClass,c,x;",
  "desc": "對階級 c 的敵人攻擊時，所獲得的經驗值增加 x%",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bAddEff,eff,n;			Adds a n/100% chance to cause status eff on the target when attacking
{
  "name": "bonus2 bAddEff,eff,n;",
  "desc": "攻擊時有 n/100% 的幾率使目標獲得異常狀態效果",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bAddEff2,eff,n;			Adds a n/100% chance to cause status eff on self when attacking
{
  "name": "bonus2 bAddEff2,eff,n;",
  "desc": "攻擊時有 n/100% 的幾率使自身獲得異常狀態效果",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bAddEffWhenHit,eff,n;			Adds a n/100% chance to cause status eff on the enemy when being hit by physical damage
{
  "name": "bonus2 bAddEffWhenHit,eff,n;",
  "desc": "受到物理傷害時，有 n/100% 的幾率使敵人獲得異常狀態效果",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bResEff,eff,n;			Adds a n/100% tolerance to status eff
{
  "name": "bonus2 bResEff,eff,n;",
  "desc": "對 eff 異常狀態抗性增加 n%",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus3 bAddEff,eff,n,atf;			Adds a n/100% chance to cause status eff on the target when attacking
{
  "name": "bonus3 bAddEff,eff,n,atf;",
  "desc": "攻擊類型為AFT時 有 n/100% 的幾率使目標獲得異常狀態效果",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus4 bAddEff,eff,n,atf,t;			Adds a n/100% chance to cause status eff for t milliseconds on the target when attacking
{
  "name": "bonus4 bAddEff,eff,n,atf,t;",
  "desc": "攻擊類型為AFT時 有 n/100% 的幾率使目標獲得持續 t 毫秒的異常狀態效果",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus3 bAddEffWhenHit,eff,n,atf;			Adds a n/100% chance to cause status eff on the target when being hit by physical damage
{
  "name": "bonus3 bAddEffWhenHit,eff,n,atf;",
  "desc": "受到攻擊類型為AFT時，有 n/100% 的幾率使敵人獲得異常狀態效果",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus4 bAddEffWhenHit,eff,n,atf,t;			Adds a n/100% chance to cause status eff for t milliseconds on the target when being hit by physical damage
{
  "name": "bonus4 bAddEffWhenHit,eff,n,atf,t;",
  "desc": "受到攻擊類型為AFT時，有 n/100% 的幾率使敵人獲得持續 t 毫秒的異常狀態效果",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus3 bAddEffOnSkill,sk,eff,n;			Adds a n/100% chance to cause status eff on enemy when using skill sk
{
  "name": "bonus3 bAddEffOnSkill,sk,eff,n;",
  "desc": "使用 sk 技能時，有 n/100% 的幾率使敵人獲得狀態效果",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus4 bAddEffOnSkill,sk,eff,n,atf;			Adds a n/100% chance to cause status eff on the target when using skill sk
{
  "name": "bonus4 bAddEffOnSkill,sk,eff,n,atf;",
  "desc": "攻擊類型為 AFT 且使用 sk 技能時，有 n/100% 的幾率使敵人獲得狀態效果",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus5 bAddEffOnSkill,sk,eff,n,atf,t;			Adds a n/100% chance to cause status eff for t milliseconds on the target when using skill sk
{
  "name": "bonus5 bAddEffOnSkill,sk,eff,n,atf,t;",
  "desc": "攻擊類型為 AFT 且使用 sk 技能時，有 n/100% 的幾率使敵人獲得持續 t 毫秒的狀態效果",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bComaClass,c,n;			Adds a n/100% chance to cause Coma when attacking a target of class c (regardless the type of attack)
{
  "name": "bonus2 bComaClass,c,n;",
  "desc": "攻擊 c 階級目標時，有 n/100% 的幾率使其昏迷（無論攻擊類型為何）",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bComaRace,r,n;			Adds a n/100% chance to cause Coma when attacking a target of race r (regardless the type of attack)
{
  "name": "bonus2 bComaRace,r,n;",
  "desc": "攻擊 r 種族目標時，有 n/100% 的幾率使其昏迷（無論攻擊類型為何）",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bWeaponComaEle,e,n;			Adds a n/100% chance to cause Coma when attacking a target of element e with a normal attack
{
  "name": "bonus2 bWeaponComaEle,e,n;",
  "desc": "使用普通攻擊攻擊元素為e的目標時，有n/100%的幾率使其昏迷",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bWeaponComaClass,c,n;			Adds a n/100% chance to cause Coma when attacking a target of class c with a normal attack
{
  "name": "bonus2 bWeaponComaClass,c,n;",
  "desc": "使用普通攻擊攻擊階級為c的目標時，有n/100%的幾率使其昏迷",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bWeaponComaRace,r,n;			Adds a n/100% chance to cause Coma when attacking a target of race r with a normal attack
{
  "name": "bonus2 bWeaponComaRace,r,n;",
  "desc": "使用普通攻擊攻擊種族為r的目標時，有n/100%的幾率使其昏迷",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus3 bAutoSpell,sk,y,n;			Adds a n/10% chance to cast skill sk of level y when attacking
{
  "name": "bonus3 bAutoSpell,sk,y,n;",
  "desc": "攻擊時 n/10% 機率自動詠唱等级 y 的技能 sk (支持技能名)",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus3 bAutoSpellWhenHit,sk,y,n;			Adds a n/10% chance to cast skill sk of level y when being hit by a direct attack
{
  "name": "bonus3 bAutoSpellWhenHit,sk,y,n;",
  "desc": "被攻擊時 n/10% 機率自動詠唱等级 y 的技能 sk (支持技能名)",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus4 bAutoSpell,sk,y,n,i;			Adds a n/10% chance to cast skill sk of level y when attacking
{
  "name": "bonus4 bAutoSpell,sk,y,n,i;",
  "desc": "攻擊時 n/10% 機率在 i 條件下自動詠唱等级 y 的技能 sk (支持技能名)",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus5 bAutoSpell,sk,y,n,bf,i;			Adds a n/10% chance to cast skill sk of level y when attacking with trigger criteria bf
{
  "name": "bonus5 bAutoSpell,sk,y,n,bf,i;",
  "desc": "攻擊時 n/10% 機率在 i 和 bf 條件下自動詠唱等级 y 的技能 sk (支持技能名)",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus4 bAutoSpellWhenHit,sk,y,n,i;			Adds a n/10% chance to cast skill sk of level y when being hit by a direct attack
{
  "name": "bonus4 bAutoSpellWhenHit,sk,y,n,i;",
  "desc": "被攻擊時 n/10% 機率在 i 條件下自動詠唱等级 y 的技能 sk",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus5 bAutoSpellWhenHit,sk,y,n,bf,i;			Adds a n/10% chance to cast skill sk of level y when being hit by a direct attack with trigger criteria bf
{
  "name": "bonus5 bAutoSpellWhenHit,sk,y,n,bf,i;",
  "desc": "被攻擊時 n/10% 機率在 i 和 bf 條件下自動詠唱等级 y 的技能 sk",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus4 bAutoSpellOnSkill,sk,x,y,n;			Adds a n/10% chance to autospell skill x at level y when using skill sk
{
  "name": "bonus4 bAutoSpellOnSkill,sk,x,y,n;",
  "desc": "n/10% 機率在使用 sk 技能時對技能對像自動詠唱 x 技能 y 级",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus5 bAutoSpellOnSkill,sk,x,y,n,i;			Adds a n/10% chance to autospell skill x at level y when using skill sk
{
  "name": "bonus5 bAutoSpellOnSkill,sk,x,y,n,i;",
  "desc": "n/10% 機率在使用 sk 技能時在 i 條件下自動詠唱 x 技能 y 级 (支持技能名，技能id為負數對自己使用)",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// ====================
// 15. HP/SP drain | HP/SP攻擊恢復
// ====================
// bonus bHPDrainValue,n;			Heals +n HP with a normal attack
{
  "name": "bonus bHPDrainValue,n;",
  "desc": "攻擊都會將對目標造成的傷害的 n% 轉換為HP",
  "category": "HP/SP攻擊恢復",
  "source": "rAthena"
},
// bonus2 bHPDrainValueRace,r,n;			Heals +n HP when attacking a monster of race r with normal attack
{
  "name": "bonus2 bHPDrainValueRace,r,n;",
  "desc": "攻擊都會將對 種族r 造成的傷害的 n% 轉換為HP",
  "category": "HP/SP攻擊恢復",
  "source": "rAthena"
},
// bonus2 bHpDrainValueClass,c,n;			Heals +n HP when attacking a monster of class c with normal attack
{
  "name": "bonus2 bHpDrainValueClass,c,n;",
  "desc": "攻擊都會將對 階級c 造成的傷害的 n% 轉換為HP",
  "category": "HP/SP攻擊恢復",
  "source": "rAthena"
},
// bonus bSPDrainValue,n;			Heals +n SP with a normal attack
{
  "name": "bonus bSPDrainValue,n;",
  "desc": "攻擊都會將對目標造成的傷害的 n% 轉換為SP",
  "category": "HP/SP攻擊恢復",
  "source": "rAthena"
},
// bonus2 bSPDrainValueRace,r,n;			Heals +n SP when attacking a monster of race r with normal attack
{
  "name": "bonus2 bSPDrainValueRace,r,n;",
  "desc": "攻擊都會將對 種族r 造成的傷害的 n% 轉換為SP",
  "category": "HP/SP攻擊恢復",
  "source": "rAthena"
},
// bonus2 bSpDrainValueClass,c,n;			Heals +n SP when attacking a monster of class c with normal attack
{
  "name": "bonus2 bSpDrainValueClass,c,n;",
  "desc": "攻擊都會將對 階級c 造成的傷害的 n% 轉換為SP",
  "category": "HP/SP攻擊恢復",
  "source": "rAthena"
},
// bonus2 bHPDrainRate,x,n;			Adds a x/10% chance to drain n% HP from inflicted damage when attacking
{
  "name": "bonus2 bHPDrainRate,x,n;",
  "desc": "攻擊時有 x/10% 的幾率從造成的傷害中吸取 n% 的HP",
  "category": "HP/SP攻擊恢復",
  "source": "rAthena"
},
// bonus2 bSPDrainRate,x,n;			Adds a x/10% chance to drain n% SP from inflicted damage when attacking
{
  "name": "bonus2 bSPDrainRate,x,n;",
  "desc": "攻擊時有 x/10% 的幾率從造成的傷害中吸取 n% 的SP",
  "category": "HP/SP攻擊恢復",
  "source": "rAthena"
},
// ====================
// 16. HP/SP vanish | HP/SP攻擊減少
// ====================
// bonus2 bHPVanishRate,x,n;			Add a x/10% chance of decreasing enemy's HP amount by n% with a normal attack
{
  "name": "bonus2 bHPVanishRate,x,n;",
  "desc": "普通攻擊有 x/10% 的幾率減少敵人 n% 的HP",
  "category": "HP/SP攻擊減少",
  "source": "rAthena"
},
// bonus3 bHPVanishRaceRate,r,x,n;			Add a x/10% chance of decreasing enemy's HP amount by n% when attacking, depends on enemy race r
{
  "name": "bonus3 bHPVanishRaceRate,r,x,n;",
  "desc": "攻擊時有 x/10% 的幾率減少敵人種族 r 的 n% 的HP",
  "category": "HP/SP攻擊減少",
  "source": "rAthena"
},
// bonus3 bHPVanishRate,x,n,bf;			Add a x/10% chance of decreasing enemy's HP amount by n% when attacking with trigger criteria bf
{
  "name": "bonus3 bHPVanishRate,x,n,bf;",
  "desc": "攻擊時，觸發條件為bf時，有 x/10% 的幾率使敵人HP減少 n%",
  "category": "HP/SP攻擊減少",
  "source": "rAthena"
},
// bonus2 bSPVanishRate,x,n;			Add a x/10% chance of decreasing enemy's SP amount by n% with a normal attack
{
  "name": "bonus2 bSPVanishRate,x,n;",
  "desc": "普通攻擊有 x/10% 的幾率減少敵人 n% 的SP",
  "category": "HP/SP攻擊減少",
  "source": "rAthena"
},
// bonus3 bSPVanishRaceRate,r,x,n;			Add a x/10% chance of decreasing enemy's SP amount by n% when attacking, depends on enemy race r
{
  "name": "bonus3 bSPVanishRaceRate,r,x,n;",
  "desc": "攻擊時有 x/10% 的幾率減少敵人種族 r 的 n% 的SP",
  "category": "HP/SP攻擊減少",
  "source": "rAthena"
},
// bonus3 bSPVanishRate,x,n,bf;			Add a x/10% chance of decreasing enemy's SP amount by n% when attacking with trigger criteria bf
{
  "name": "bonus3 bSPVanishRate,x,n,bf;",
  "desc": "攻擊時，觸發條件為bf時，有 x/10% 的幾率使敵人SP減少 n%",
  "category": "HP/SP攻擊減少",
  "source": "rAthena"
},
// bonus3 bStateNoRecoverRace,r,x,t;			Set a no recovery state of an enemy of race r at x/100% for t milliseconds with normal attack.
{
  "name": "bonus3 bStateNoRecoverRace,r,x,t;",
  "desc": "對種族 r 的敵人施加普通攻擊，使其在 t 毫秒內無法恢復，恢復率為 x/100%.",
  "category": "HP/SP攻擊減少",
  "source": "rAthena"
},
// ====================
// 17. HP/SP gain | HP/SP攻擊增益
// ====================
// bonus bHPGainValue,n;			Heals +n HP when killing an enemy with a melee-physical attack
{
  "name": "bonus bHPGainValue,n;",
  "desc": "使用近戰物理攻擊擊殺敵人時恢復 +n 點HP",
  "category": "HP/SP攻擊增益",
  "source": "rAthena"
},
// bonus bSPGainValue,n;			Heals +n SP when killing an enemy with a melee-physical attack
{
  "name": "bonus bSPGainValue,n;",
  "desc": "使用近戰物理攻擊擊殺敵人時恢復 +n 點SP",
  "category": "HP/SP攻擊增益",
  "source": "rAthena"
},
// bonus2 bSPGainRace,r,n;			Heals +n SP when killing an enemy of race r with a melee-physical attack
{
  "name": "bonus2 bSPGainRace,r,n;",
  "desc": "使用近戰物理攻擊擊殺種族為r的敵人時，恢復+n SP",
  "category": "HP/SP攻擊增益",
  "source": "rAthena"
},
// bonus bLongHPGainValue,n;			Heals +n HP when killing an enemy with a range-physical attack
{
  "name": "bonus bLongHPGainValue,n;",
  "desc": "使用遠程物理攻擊擊殺敵人時恢復 +n 點HP",
  "category": "HP/SP攻擊增益",
  "source": "rAthena"
},
// bonus bLongSPGainValue,n;			Heals +n SP when killing an enemy with a range-physical attack
{
  "name": "bonus bLongSPGainValue,n;",
  "desc": "使用遠程物理攻擊擊殺敵人時恢復 +n 點SP",
  "category": "HP/SP攻擊增益",
  "source": "rAthena"
},
// bonus bMagicHPGainValue,n;			Heals +n HP when killing an enemy with a magical attack
{
  "name": "bonus bMagicHPGainValue,n;",
  "desc": "使用魔法攻擊擊殺敵人時恢復 +n 點HP",
  "category": "HP/SP攻擊增益",
  "source": "rAthena"
},
// bonus bMagicSPGainValue,n;			Heals +n SP when killing an enemy with a magical attack
{
  "name": "bonus bMagicSPGainValue,n;",
  "desc": "使用魔法攻擊擊殺敵人時恢復 +n 點SP",
  "category": "HP/SP攻擊增益",
  "source": "rAthena"
},
// ====================
// 18. Damage return | 傷害反彈
// ====================
// bonus bShortWeaponDamageReturn,n;			Reflects n% of received melee damage back to the enemy that caused it
{
  "name": "bonus bShortWeaponDamageReturn,n;",
  "desc": "將受到的近戰傷害的 n% 反彈給造成傷害的敵人",
  "category": "傷害反彈",
  "source": "rAthena"
},
// bonus bLongWeaponDamageReturn,n;			Reflects n% of received ranged damage back to the enemy that caused it
{
  "name": "bonus bLongWeaponDamageReturn,n;",
  "desc": "將受到的遠程傷害的 n% 反彈給造成傷害的敵人",
  "category": "傷害反彈",
  "source": "rAthena"
},
// bonus bMagicDamageReturn,n;			Adds a n% chance to reflect targetted magic spells back to the enemy that caused it
{
  "name": "bonus bMagicDamageReturn,n;",
  "desc": "增加 n% 的幾率將目標魔法反彈給施法者",
  "category": "傷害反彈",
  "source": "rAthena"
},
// bonus bReduceDamageReturn,n;			Reduces reflected damage (melee/ranged/magic) by n%
{
  "name": "bonus bReduceDamageReturn,n;",
  "desc": "減少反射傷害（近戰/遠程/魔法）n%",
  "category": "傷害反彈",
  "source": "rAthena"
},
// ====================
// 19. Strip/Break equipment | 卸除裝備
// ====================
// bonus bUnstripableWeapon;			Weapon cannot be taken off via Strip skills
{
  "name": "bonus bUnstripableWeapon;",
  "desc": "武器無法透過脫衣技能卸下",
  "category": "卸除裝備",
  "source": "rAthena"
},
// bonus bUnstripableArmor;			Armor cannot be taken off via Strip skills
{
  "name": "bonus bUnstripableArmor;",
  "desc": "盔甲無法透過剝離技能脫下",
  "category": "卸除裝備",
  "source": "rAthena"
},
// bonus bUnstripableHelm;			Helm cannot be taken off via Strip skills
{
  "name": "bonus bUnstripableHelm;",
  "desc": "頭盔無法透過剝離技能取下",
  "category": "卸除裝備",
  "source": "rAthena"
},
// bonus bUnstripableShield;			Shield cannot be taken off via Strip skills
{
  "name": "bonus bUnstripableShield;",
  "desc": "盾牌無法透過剝奪技能移除",
  "category": "卸除裝備",
  "source": "rAthena"
},
// bonus bUnstripable;			All equipment cannot be taken off via strip skills
{
  "name": "bonus bUnstripable;",
  "desc": "所有裝備都無法透過脫衣技巧卸下",
  "category": "卸除裝備",
  "source": "rAthena"
},
// bonus bUnbreakableGarment;			Garment cannot be damaged/broken by any means
{
  "name": "bonus bUnbreakableGarment;",
  "desc": "披肩不得以任何方式損壞/破損",
  "category": "卸除裝備",
  "source": "rAthena"
},
// bonus bUnbreakableWeapon;			Weapon cannot be damaged/broken by any means
{
  "name": "bonus bUnbreakableWeapon;",
  "desc": "武器不能以任何方式損壞/破壞",
  "category": "卸除裝備",
  "source": "rAthena"
},
// bonus bUnbreakableArmor;			Armor cannot be damaged/broken by any means
{
  "name": "bonus bUnbreakableArmor;",
  "desc": "盔甲無法以任何方式損壞/破壞",
  "category": "卸除裝備",
  "source": "rAthena"
},
// bonus bUnbreakableHelm;			Helm cannot be damaged/broken by any means
{
  "name": "bonus bUnbreakableHelm;",
  "desc": "頭盔不能以任何方式損壞/破損",
  "category": "卸除裝備",
  "source": "rAthena"
},
// bonus bUnbreakableShield;			Shield cannot be damaged/broken by any means
{
  "name": "bonus bUnbreakableShield;",
  "desc": "盾牌無法以任何方式損壞/打破",
  "category": "卸除裝備",
  "source": "rAthena"
},
// bonus bUnbreakableShoes;			Shoes cannot be damaged/broken by any means
{
  "name": "bonus bUnbreakableShoes;",
  "desc": "鞋子不能以任何方式損壞/破損",
  "category": "卸除裝備",
  "source": "rAthena"
},
// bonus bUnbreakable,n;			Reduces the break chance of all equipped equipment by n%
{
  "name": "bonus bUnbreakable,n;",
  "desc": "降低所有裝備的損壞幾率 n%",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus bBreakWeaponRate,n;			Adds a n/100% chance to break enemy's weapon while attacking (stacks with other break chances)
{
  "name": "bonus bBreakWeaponRate,n;",
  "desc": "攻擊時有 n/100% 的幾率破壞敵人的武器（可與其他破壞幾率疊加）",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus bBreakArmorRate,n;			Adds a n/100% chance to break enemy's armor while attacking (stacks with other break chances)
{
  "name": "bonus bBreakArmorRate,n;",
  "desc": "攻擊時有 n/100% 的幾率打破敵人的護甲（可與其他打破護甲的幾率疊加）",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// ====================
// 20. Monster drops | 魔物掉落
// ====================
// bonus2 bDropAddRace,r,x;			Adds x% to player's drop rate when killing a monster with race r.
{
  "name": "bonus2 bDropAddRace,r,x;",
  "desc": "擊殺擁有種族 r 的怪物時，玩家的掉落率增加 x%.",
  "category": "魔物掉落",
  "source": "rAthena"
},
// bonus2 bDropAddClass,c,x;			Adds x% to player's drop rate when killing a monster with class c.
{
  "name": "bonus2 bDropAddClass,c,x;",
  "desc": "擊殺擁有階級 c 的怪物時，玩家的掉落率增加 x%.",
  "category": "魔物掉落",
  "source": "rAthena"
},
// bonus3 bAddMonsterIdDropItem,iid,mid,n;			Adds a n/100% chance of dropping item iid when killing monster mid
{
  "name": "bonus3 bAddMonsterIdDropItem,iid,mid,n;",
  "desc": "擊殺指定 mid怪物 時，有 n/100% 的幾率掉落物品 iid。",
  "category": "魔物掉落",
  "source": "rAthena"
},
// bonus2 bAddMonsterDropItem,iid,n;			Adds a n/100% chance for item iid to be dropped when killing a monster
{
  "name": "bonus2 bAddMonsterDropItem,iid,n;",
  "desc": "擊殺怪物時，有 n/100% 的幾率掉落物品 iid。",
  "category": "魔物掉落",
  "source": "rAthena"
},
// bonus3 bAddMonsterDropItem,iid,r,n;			Adds a n/100% chance for item iid to be dropped when killing a monster of race r
{
  "name": "bonus3 bAddMonsterDropItem,iid,r,n;",
  "desc": "擊殺種族 r 怪物時，有 n/100% 的幾率掉落物品 iid。",
  "category": "魔物掉落",
  "source": "rAthena"
},
// bonus3 bAddClassDropItem,iid,c,n;			Adds a n/100% chance for item iid to be dropped when killing a monster of class c
{
  "name": "bonus3 bAddClassDropItem,iid,c,n;",
  "desc": "擊殺階級 c 怪物時，有 n/100% 的幾率掉落物品 iid。",
  "category": "魔物掉落",
  "source": "rAthena"
},
// bonus2 bAddMonsterDropItemGroup,ig,n;			Adds a n/100% chance to get an item of group type ig when killing a monster
{
  "name": "bonus2 bAddMonsterDropItemGroup,ig,n;",
  "desc": "擊殺怪物時，有 n/100% 的幾率掉落物品群組 ig。",
  "category": "魔物掉落",
  "source": "rAthena"
},
// bonus3 bAddMonsterDropItemGroup,ig,r,n;			Adds a n/100% chance to get an item of group type ig when killing a monster of race r
{
  "name": "bonus3 bAddMonsterDropItemGroup,ig,r,n;",
  "desc": "擊殺種族 r 怪物時，有 n/100% 的幾率掉落物品群組 ig。",
  "category": "魔物掉落",
  "source": "rAthena"
},
// bonus3 bAddClassDropItemGroup,ig,c,n;			Adds a n/100% chance to get an item of group type ig when killing a monster of class c
{
  "name": "bonus3 bAddClassDropItemGroup,ig,c,n;",
  "desc": "擊殺階級 c 怪物時，有 n/100% 的幾率掉落物品群組 ig。",
  "category": "魔物掉落",
  "source": "rAthena"
},
// bonus2 bGetZenyNum,x,n;			Adds a n% chance of gaining 1~x zeny when killing a monster (only the highest among all is applied)
{
  "name": "bonus2 bGetZenyNum,x,n;",
  "desc": "擊殺怪物時有 n% 的幾率獲得 1~x 個 Zeny（只取最高值）",
  "category": "魔物掉落",
  "source": "rAthena"
},
// bonus2 bAddGetZenyNum,x,n;			Adds a n% chance of gaining 1~x zeny when killing a monster
{
  "name": "bonus2 bAddGetZenyNum,x,n;",
  "desc": "擊殺怪物時有 n% 的幾率獲得 1~x 個金幣",
  "category": "魔物掉落",
  "source": "rAthena"
},
// ====================
// 21. Misc effects | 狀態與其他控制
// ====================
// bonus bDoubleRate,n;			Double Attack probability n% (works with all weapons | only the highest among all is applied)
{
  "name": "bonus bDoubleRate,n;",
  "desc": "雙重攻擊機率 n%（適用於所有武器 | 僅取最高值）",
  "category": "狀態與其他控制",
  "source": "rAthena"
},
// bonus bDoubleAddRate,n;			Double Attack probability + n% (works with all weapons)
{
  "name": "bonus bDoubleAddRate,n;",
  "desc": "雙重攻擊機率 + n%（適用於所有武器）",
  "category": "狀態與其他控制",
  "source": "rAthena"
},
// bonus bSplashRange,n;			Splash attack radius + n (only the highest among all is applied)
{
  "name": "bonus bSplashRange,n;",
  "desc": "濺射攻擊半徑 + n（僅取最大值）",
  "category": "狀態與其他控制",
  "source": "rAthena"
},
// bonus bSplashAddRange,n;			Splash attack radius + n
{
  "name": "bonus bSplashAddRange,n;",
  "desc": "濺射攻擊半徑 + n",
  "category": "狀態與其他控制",
  "source": "rAthena"
},
// bonus2 bAddSkillBlow,sk,n;			Knock back the target by n cells when using skill sk
{
  "name": "bonus2 bAddSkillBlow,sk,n;",
  "desc": "使用技能 sk 時，將目標擊退 n 格",
  "category": "狀態與其他控制",
  "source": "rAthena"
},
// bonus bNoKnockback;			Character is no longer knocked back by enemy skills with such effect
{
  "name": "bonus bNoKnockback;",
  "desc": "角色不會被敵人的技能擊退",
  "category": "狀態與其他控制",
  "source": "rAthena"
},
// bonus bNoGemStone;			Skills requiring Gemstones do not require them
{
  "name": "bonus bNoGemStone;",
  "desc": "需要寶石的技能並不需要它們",
  "category": "狀態與其他控制",
  "source": "rAthena"
},
// bonus bIntravision;			Always see Hiding and Cloaking players/mobs
{
  "name": "bonus bIntravision;",
  "desc": "隨時看到躲藏和隱身的玩家/怪物",
  "category": "狀態與其他控制",
  "source": "rAthena"
},
// bonus bPerfectHide;			Hidden/cloaked character is no longer detected by monsters with 'detector' mode
{
  "name": "bonus bPerfectHide;",
  "desc": "隱身/隱形角色不再會被擁有「偵測」模式的怪物偵測到",
  "category": "狀態與其他控制",
  "source": "rAthena"
},
// bonus bRestartFullRecover;			When reviving, HP and SP are fully healed
{
  "name": "bonus bRestartFullRecover;",
  "desc": "復活時，生命值和魔法值全部恢復",
  "category": "狀態與其他控制",
  "source": "rAthena"
},
// bonus bClassChange,n;			Gives a n/100% chance to change the attacked monster's class with normal attack
{
  "name": "bonus bClassChange,n;",
  "desc": "普通攻擊有 n/100% 的幾率讓怪物變換成其它的怪物 (比如兔斯拉卡片 4321)",
  "category": "狀態與其他控制",
  "source": "rAthena"
},
// bonus bAddStealRate,n;			Increases success rate of Steal skill by n/100%
{
  "name": "bonus bAddStealRate,n;",
  "desc": "提高偷竊技能的成功率 n/100%",
  "category": "狀態與其他控制",
  "source": "rAthena"
},
// bonus bNoMadoFuel;			Nullify Magic Gear Fuel requirement for skills.
{
  "name": "bonus bNoMadoFuel;",
  "desc": "取消技能所需的魔法裝備燃料.",
  "category": "狀態與其他控制",
  "source": "rAthena"
},
// bonus bNoWalkDelay;			Give infinite Endure.
{
  "name": "bonus bNoWalkDelay;",
  "desc": "給予無限的忍耐.",
  "category": "狀態與其他控制",
  "source": "rAthena"
},
];