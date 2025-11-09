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
  "desc": "魔法攻擊力 + n (沒顯示在狀態面板)",
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
  "desc": "將該數值加到所有使用該技能的攻擊/技能的技能比率",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// bonus bShortAtkRate,n;			Increases damage of short ranged attacks by n%
{
  "name": "bonus bShortAtkRate,n;",
  "desc": "增加 近距離物理傷害 n%",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// bonus bLongAtkRate,n;			Increases damage of long ranged attacks by n%
{
  "name": "bonus bLongAtkRate,n;",
  "desc": "增加 遠距離物理傷害 n%",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// bonus bCritAtkRate,n;			Increases critical damage by +n%
{
  "name": "bonus bCritAtkRate,n;",
  "desc": "增加 爆擊傷害 n%",
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
  "desc": "Gives the player's attacks element e",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// bonus bDefEle,e;			Gives the player's defense element e
{
  "name": "bonus bDefEle,e;",
  "desc": "Gives the player's 防禦 屬性 e",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// bonus2 bMagicAtkEle,e,x;			Increases damage of e element magic by x%
{
  "name": "bonus2 bMagicAtkEle,e,x;",
  "desc": "增加 傷害 of e element magic by x%",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// bonus bDefRatioAtkRace,r;			Deals more damage to enemies of race r with higher defense
{
  "name": "bonus bDefRatioAtkRace,r;",
  "desc": "Deals more 傷害 to enemies of race r with higher defense",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// bonus bDefRatioAtkEle,e;			Deals more damage to enemies of element e with higher defense
{
  "name": "bonus bDefRatioAtkEle,e;",
  "desc": "Deals more 傷害 to enemies of 屬性 e with higher 防禦",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// bonus bDefRatioAtkClass,c;			Deals more damage to enemies of class c with higher defense
{
  "name": "bonus bDefRatioAtkClass,c;",
  "desc": "Deals more 傷害 to enemies of 職業 c with higher 防禦",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// bonus4 bSetDefRace,r,n,t,y;			Set DEF to y of an enemy of race r at n% for t milliseconds with normal attack
{
  "name": "bonus4 bSetDefRace,r,n,t,y;",
  "desc": "Set DEF to y of an enemy of race r at n% for t milliseconds with normal attack",
  "category": "攻擊與防禦",
  "source": "rAthena"
},
// bonus4 bSetMDefRace,r,n,t,y;			Set MDEF to y of an enemy of race r at n% for t milliseconds with normal attack
{
  "name": "bonus4 bSetMDefRace,r,n,t,y;",
  "desc": "Set MDEF to y of an enemy of 種族 r at n% for t milliseconds with normal attack",
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
// 6. HP/SP | HP與SP
// ====================
// bonus bHPrecovRate,n;			Natural HP recovery ratio + n%
{
  "name": "bonus bHPrecovRate,n;",
  "desc": "HP 恢復速度增加 n%",
  "category": "HP與SP",
  "source": "rAthena"
},
// bonus bSPrecovRate,n;			Natural SP recovery ratio + n%
{
  "name": "bonus bSPrecovRate,n;",
  "desc": "SP 恢復速度增加 n%",
  "category": "HP與SP",
  "source": "rAthena"
},
// bonus2 bHPRegenRate,n,t;			Gain n HP every t milliseconds
{
  "name": "bonus2 bHPRegenRate,n,t;",
  "desc": "每 t 毫秒獲得 n HP",
  "category": "HP與SP",
  "source": "rAthena"
},
// bonus2 bHPLossRate,n,t;			Lose n HP every t milliseconds
{
  "name": "bonus2 bHPLossRate,n,t;",
  "desc": "每 t 毫秒損失 n HP",
  "category": "HP與SP",
  "source": "rAthena"
},
// bonus2 bSPRegenRate,n,t;			Gain n SP every t milliseconds
{
  "name": "bonus2 bSPRegenRate,n,t;",
  "desc": "每 t 毫秒獲得 n SP",
  "category": "HP與SP",
  "source": "rAthena"
},
// bonus2 bSPLossRate,n,t;			Lose n SP every t milliseconds
{
  "name": "bonus2 bSPLossRate,n,t;",
  "desc": "每 t 毫秒失去 n SP",
  "category": "HP與SP",
  "source": "rAthena"
},
// bonus2 bRegenPercentHP,n,t;			Gain n% of max HP every t milliseconds
{
  "name": "bonus2 bRegenPercentHP,n,t;",
  "desc": "每 t 毫秒獲得最大生命值的 n%",
  "category": "HP與SP",
  "source": "rAthena"
},
// bonus2 bRegenPercentSP,n,t;			Gain n% of max SP every t milliseconds
{
  "name": "bonus2 bRegenPercentSP,n,t;",
  "desc": "每 t 毫秒獲得最大 SP 的 n%",
  "category": "HP與SP",
  "source": "rAthena"
},
// bonus bNoRegen,x;			Stops HP or SP regeneration (x: 1=HP, 2=SP)
{
  "name": "bonus bNoRegen,x;",
  "desc": "停止 HP 或 SP 再生 (x: 1=HP, 2=SP)",
  "category": "HP與SP",
  "source": "rAthena"
},
// bonus bUseSPrate,n;			SP consumption + n%
{
  "name": "bonus bUseSPrate,n;",
  "desc": "SP消耗+n%",
  "category": "HP與SP",
  "source": "rAthena"
},
// bonus2 bSkillUseSP,sk,n;			Decreases SP consumption of skill sk by n
{
  "name": "bonus2 bSkillUseSP,sk,n;",
  "desc": "技能sk的SP消耗減少n",
  "category": "HP與SP",
  "source": "rAthena"
},
// bonus2 bSkillUseSPrate,sk,n;			Decreases SP consumption of skill sk by n%
{
  "name": "bonus2 bSkillUseSPrate,sk,n;",
  "desc": "技能sk的SP消耗減少n%",
  "category": "HP與SP",
  "source": "rAthena"
},
// ====================
// 8. Healing | 施法與延遲
// ====================
// bonus bHealPower,n;			Increases heal amount of all heal skills by n%
{
  "name": "bonus bHealPower,n;",
  "desc": "所有治療技能的治療量增加 n%",
  "category": "施法與延遲",
  "source": "rAthena"
},
// bonus bHealPower2,n;			Increases heal amount if you are healed by any skills by n%
{
  "name": "bonus bHealPower2,n;",
  "desc": "如果你被任何技能治療，治療量增加 n%",
  "category": "施法與延遲",
  "source": "rAthena"
},
// bonus2 bSkillHeal,sk,n;			Increases heal amount of skill sk by n%
{
  "name": "bonus2 bSkillHeal,sk,n;",
  "desc": "技能 sk 的治療量增加 n%",
  "category": "施法與延遲",
  "source": "rAthena"
},
// bonus2 bSkillHeal2,sk,n;			Increases heal amount if you are healed by skill sk by n%
{
  "name": "bonus2 bSkillHeal2,sk,n;",
  "desc": "增加 heal amount if you are healed by skill sk by n%",
  "category": "施法與延遲",
  "source": "rAthena"
},
// bonus bAddItemHealRate,n;			Increases HP recovered by n% for healing items
{
  "name": "bonus bAddItemHealRate,n;",
  "desc": "增加 HP 回復ered by n% for healing items",
  "category": "施法與延遲",
  "source": "rAthena"
},
// bonus2 bAddItemHealRate,iid,n;			Increases HP recovered by n% for item iid
{
  "name": "bonus2 bAddItemHealRate,iid,n;",
  "desc": "增加 HP 回復ered by n% for item iid",
  "category": "施法與延遲",
  "source": "rAthena"
},
// bonus2 bAddItemGroupHealRate,ig,n;			Increases HP recovered by n% for items of item group ig
{
  "name": "bonus2 bAddItemGroupHealRate,ig,n;",
  "desc": "增加 HP 回復ered by n% for items of item group ig",
  "category": "施法與延遲",
  "source": "rAthena"
},
// bonus bAddItemSPHealRate,n;			Increases SP recovered by n% for healing items
{
  "name": "bonus bAddItemSPHealRate,n;",
  "desc": "增加 SP 回復ered by n% for healing items",
  "category": "施法與延遲",
  "source": "rAthena"
},
// bonus2 bAddItemSPHealRate,iid,n;			Increases SP recovered by n% for item iid
{
  "name": "bonus2 bAddItemSPHealRate,iid,n;",
  "desc": "增加 SP 回復ered by n% for item iid",
  "category": "施法與延遲",
  "source": "rAthena"
},
// bonus2 bAddItemGroupSPHealRate,ig,n;			Increases SP recovered by n% for items of item group ig
{
  "name": "bonus2 bAddItemGroupSPHealRate,ig,n;",
  "desc": "增加 SP 回復ered by n% for items of item group ig",
  "category": "施法與延遲",
  "source": "rAthena"
},
// ====================
// 9. Cast time/delay | 施法與延遲
// ====================
// bonus bCastrate,n;			Skill cast time rate + n%. (If RENEWAL_CAST is defined, this bonus is equal to bVariableCastrate)
{
  "name": "bonus bCastrate,n;",
  "desc": "Skill 詠唱 time rate + n%. (If RENEWAL_CAST is defined, this bonus is equal to bVariable詠唱rate)",
  "category": "施法與延遲",
  "source": "rAthena"
},
// bonus2 bCastrate,sk,n;			Adjust casting time of skill sk by n%.(If RENEWAL_CAST is defined, this bonus is equal to bVariableCastrate)
{
  "name": "bonus2 bCastrate,sk,n;",
  "desc": "Adjust casting time of skill sk by n%.(If RENEWAL_CAST is defined, this bonus is equal to bVariableCastrate)",
  "category": "施法與延遲",
  "source": "rAthena"
},
// bonus bFixedCastrate,n;			Increases fixed cast time of all skills by n% (has effect in RENEWAL_CAST only)
{
  "name": "bonus bFixedCastrate,n;",
  "desc": "增加 fixed 詠唱 time of all skills+ n% (has effect in RENEWAL_CAST only)",
  "category": "施法與延遲",
  "source": "rAthena"
},
// bonus2 bFixedCastrate,sk,n;			Increases fixed cast time of skill sk by n% (has effect in RENEWAL_CAST only)
{
  "name": "bonus2 bFixedCastrate,sk,n;",
  "desc": "增加 fixed 詠唱時間 of skill sk by n% (has effect in RENEWAL_CAST only)",
  "category": "施法與延遲",
  "source": "rAthena"
},
// bonus bVariableCastrate,n;			Increases variable cast time of all skills by n%. (If RENEWAL_CAST is NOT defined, this bonus is equal to bCastrate)
{
  "name": "bonus bVariableCastrate,n;",
  "desc": "增加 variable 詠唱時間 of all skills by n%. (If RENEWAL_CAST is NOT defined, this bonus is equal to bCastrate)",
  "category": "施法與延遲",
  "source": "rAthena"
},
// bonus2 bVariableCastrate,sk,n;			Increases variable cast time of skill sk by n% (If RENEWAL_CAST is NOT defined, this bonus is equal to bCastrate)
{
  "name": "bonus2 bVariableCastrate,sk,n;",
  "desc": "增加 variable 詠唱時間 of skill sk by n% (If RENEWAL_CAST is NOT defined, this bonus is equal to bCastrate)",
  "category": "施法與延遲",
  "source": "rAthena"
},
// bonus bFixedCast,t;			Increases fixed cast time of all skills by t milliseconds (has effect in RENEWAL_CAST only)
{
  "name": "bonus bFixedCast,t;",
  "desc": "增加 fixed 詠唱 time of all skills by t milliseconds (has effect in RENEWAL_CAST only)",
  "category": "施法與延遲",
  "source": "rAthena"
},
// bonus2 bSkillFixedCast,sk,t;			Increases fixed cast time of skill sk by t milliseconds (has effect in RENEWAL_CAST only)
{
  "name": "bonus2 bSkillFixedCast,sk,t;",
  "desc": "增加 fixed 詠唱時間 of skill sk by t milliseconds (has effect in RENEWAL_CAST only)",
  "category": "施法與延遲",
  "source": "rAthena"
},
// bonus bVariableCast,t;			Increases variable cast time of all skills by t milliseconds
{
  "name": "bonus bVariableCast,t;",
  "desc": "增加 variable 詠唱時間 of all skills by t milliseconds",
  "category": "施法與延遲",
  "source": "rAthena"
},
// bonus2 bSkillVariableCast,sk,t;			Increases variable cast time of skill sk by t milliseconds
{
  "name": "bonus2 bSkillVariableCast,sk,t;",
  "desc": "增加 variable 詠唱時間 of skill sk by t milliseconds",
  "category": "施法與延遲",
  "source": "rAthena"
},
// bonus bNoCastCancel;			Prevents casting from being interrupted when hit (does not work in GvG)
{
  "name": "bonus bNoCastCancel;",
  "desc": "Prevents 詠唱ing from being interrupted when hit (does not work in GvG)",
  "category": "施法與延遲",
  "source": "rAthena"
},
// bonus bNoCastCancel2;			Prevents casting from being interrupted when hit (works even in GvG)
{
  "name": "bonus bNoCastCancel2;",
  "desc": "Prevents casting from being interrupted when hit (works even in GvG)",
  "category": "施法與延遲",
  "source": "rAthena"
},
// bonus bDelayrate,n;			Increases skill delay by n%
{
  "name": "bonus bDelayrate,n;",
  "desc": "增加 skill 延遲+ n%",
  "category": "施法與延遲",
  "source": "rAthena"
},
// bonus2 bSkillDelay,sk,t;			Increases delay of skill sk by t milliseconds
{
  "name": "bonus2 bSkillDelay,sk,t;",
  "desc": "增加 延遲 of skill sk by t milliseconds",
  "category": "施法與延遲",
  "source": "rAthena"
},
// bonus2 bSkillCooldown,sk,t;			Increases cooldown of skill sk by t milliseconds
{
  "name": "bonus2 bSkillCooldown,sk,t;",
  "desc": "增加 冷卻 of skill sk by t milliseconds",
  "category": "施法與延遲",
  "source": "rAthena"
},
// ====================
// 10. Damage modifiers | 屬性與種族修正
// ====================
// bonus2 bAddEle,e,x;			+x% physical damage against element e
{
  "name": "bonus2 bAddEle,e,x;",
  "desc": "+x% 物理 傷害 against element e",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus3 bAddEle,e,x,bf;			+x% physical damage against element e with trigger criteria bf
{
  "name": "bonus3 bAddEle,e,x,bf;",
  "desc": "+x% 物理 傷害 a獲得st 屬性 e with trigger criteria bf",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bMagicAddEle,e,x;			+x% magical damage against element e
{
  "name": "bonus2 bMagicAddEle,e,x;",
  "desc": "+x% magical 傷害 a獲得st 屬性 e",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bSubEle,e,x;			+x% damage reduction against attack element e
{
  "name": "bonus2 bSubEle,e,x;",
  "desc": "+x% 傷害減免 a獲得st attack 屬性 e",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus3 bSubEle,e,x,bf;			+x% damage reduction against attack element e with trigger criteria bf
{
  "name": "bonus3 bSubEle,e,x,bf;",
  "desc": "+x% 傷害減免 a獲得st attack 屬性 e with trigger criteria bf",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bSubDefEle,e,x;			+x% physical damage reduction from enemy with defense element e
{
  "name": "bonus2 bSubDefEle,e,x;",
  "desc": "+x% 物理 傷害減免 from enemy with 防禦 屬性 e",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bMagicSubDefEle,e,x;			+x% magic damage reduction from enemy with defense element e
{
  "name": "bonus2 bMagicSubDefEle,e,x;",
  "desc": "+x% magic 傷害減免 from enemy with 防禦 屬性 e",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bAddRace,r,x;			+x% physical damage against race r
{
  "name": "bonus2 bAddRace,r,x;",
  "desc": "+x% 物理 傷害 against race r",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bMagicAddRace,r,x;			+x% magical damage against race r
{
  "name": "bonus2 bMagicAddRace,r,x;",
  "desc": "+x% magical 傷害 a獲得st 種族 r",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bSubRace,r,x;			+x% damage reduction against race r
{
  "name": "bonus2 bSubRace,r,x;",
  "desc": "+x% 傷害減免 a獲得st 種族 r",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus3 bSubRace,r,x,bf;			+x% damage reduction against race r with trigger criteria bf
{
  "name": "bonus3 bSubRace,r,x,bf;",
  "desc": "+x% 傷害減免 a獲得st 種族 r with trigger criteria bf",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bAddClass,c,x;			+x% physical damage against class c
{
  "name": "bonus2 bAddClass,c,x;",
  "desc": "+x% 物理 傷害 against class c",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bMagicAddClass,c,x;			+x% magical damage against class c
{
  "name": "bonus2 bMagicAddClass,c,x;",
  "desc": "+x% magical 傷害 a獲得st 職業 c",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bSubClass,c,x;			+x% damage reduction against class c
{
  "name": "bonus2 bSubClass,c,x;",
  "desc": "+x% 傷害減免 a獲得st 職業 c",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bAddSize,s,x;			+x% physical damage against size s
{
  "name": "bonus2 bAddSize,s,x;",
  "desc": "+x% 物理 傷害 against size s",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bMagicAddSize,s,x;			+x% magical damage against size s
{
  "name": "bonus2 bMagicAddSize,s,x;",
  "desc": "+x% magical 傷害 a獲得st 體型 s",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bSubSize,s,x;			+x% damage reduction against size s
{
  "name": "bonus2 bSubSize,s,x;",
  "desc": "+x% 傷害減免 a獲得st 體型 s",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bWeaponSubSize,s,x;			+x% physical damage reduction against size s
{
  "name": "bonus2 bWeaponSubSize,s,x;",
  "desc": "+x% 物理 傷害減免 a獲得st 體型 s",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bMagicSubSize,s,x;			+x% magic damage reduction against size s
{
  "name": "bonus2 bMagicSubSize,s,x;",
  "desc": "+x% magic 傷害減免 a獲得st 體型 s",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus bNoSizeFix;			Ignores the size modifier when calculating damage
{
  "name": "bonus bNoSizeFix;",
  "desc": "Ignores the 體型 modifier when calculating 傷害",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bAddDamageClass,mid,x;			+x% physical damage against monster mid
{
  "name": "bonus2 bAddDamageClass,mid,x;",
  "desc": "+x% 物理 傷害 against monster mid",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bAddMagicDamageClass,mid,x;			+x% magical damage against monster mid
{
  "name": "bonus2 bAddMagicDamageClass,mid,x;",
  "desc": "+x% magical 傷害 a獲得st monster mid",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bAddDefMonster,mid,x;			+x% physical damage reduction against monster mid
{
  "name": "bonus2 bAddDefMonster,mid,x;",
  "desc": "+x% 物理 傷害 減免 against monster mid",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bAddMDefMonster,mid,x;			+x% magical damage reduction against monster mid
{
  "name": "bonus2 bAddMDefMonster,mid,x;",
  "desc": "+x% magical 傷害減免 a獲得st monster mid",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bAddRace2,mr,x;			+x% damage against monster race mr
{
  "name": "bonus2 bAddRace2,mr,x;",
  "desc": "+x% 傷害 against monster race mr",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bSubRace2,mr,x;			+x% damage reduction against monster race mr
{
  "name": "bonus2 bSubRace2,mr,x;",
  "desc": "+x% 傷害減免 a獲得st monster 種族 mr",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bMagicAddRace2,mr,x;			+x% magic damage against monster race mr
{
  "name": "bonus2 bMagicAddRace2,mr,x;",
  "desc": "+x% magic 傷害 a獲得st monster 種族 mr",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bSubSkill,sk,n;			Reduces n% damage received from skill sk
{
  "name": "bonus2 bSubSkill,sk,n;",
  "desc": "Reduces n% 傷害 received from skill sk",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus bAbsorbDmgMaxHP,n;			If the damage received is more than n% of Max HP, the damage received is [TotalDamage] - [n% of MaxHP] (Doesn't stack, will use the highest value) (Legacy rAthena behavior)
{
  "name": "bonus bAbsorbDmgMaxHP,n;",
  "desc": "If the 傷害 received is more than n% of 最大HP, the 傷害 received is [Total傷害] - [n% of 最大HP] (Doesn't stack, will use the highest value) (Legacy rAthena behavior)",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus bAbsorbDmgMaxHP2,n;			If the damage received is more than n% of Max HP, the damage received is reduced to n% of MaxHP (Doesn't stack, will use the highest value) (Official behavior)
{
  "name": "bonus bAbsorbDmgMaxHP2,n;",
  "desc": "If the 傷害 received is more than n% of Max HP, the 傷害 received is 降低d to n% of 最大HP (Doesn't stack, will use the highest value) (Official behavior)",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// ====================
// 12. Ignore Def | 屬性與種族修正
// ====================
// bonus bIgnoreDefEle,e;			Disregard DEF against enemies of element e
{
  "name": "bonus bIgnoreDefEle,e;",
  "desc": "Disregard DEF against enemies of element e",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus bIgnoreDefRace,r;			Disregard DEF against enemies of race r
{
  "name": "bonus bIgnoreDefRace,r;",
  "desc": "Disregard DEF a獲得st enemies of 種族 r",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus bIgnoreDefClass,c;			Disregard DEF against enemies of class c
{
  "name": "bonus bIgnoreDefClass,c;",
  "desc": "Disregard DEF a獲得st enemies of 職業 c",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus bIgnoreMDefRace,r;			Disregard MDEF against enemies of race r
{
  "name": "bonus bIgnoreMDefRace,r;",
  "desc": "Disregard MDEF a獲得st enemies of 種族 r",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bIgnoreDefRaceRate,r,n;			Disregard n% of the target's DEF if the target belongs to race r
{
  "name": "bonus2 bIgnoreDefRaceRate,r,n;",
  "desc": "Disregard n% of the target's DEF if the target belongs to 種族 r",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bIgnoreMdefRaceRate,r,n;			Disregard n% of the target's MDEF if the target belongs to race r
{
  "name": "bonus2 bIgnoreMdefRaceRate,r,n;",
  "desc": "Disregard n% of the target's MDEF if the target belongs to 種族 r",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bIgnoreMdefRace2Rate,mr,n;			Disregard n% of the target's MDEF if the target belongs to monster race mr
{
  "name": "bonus2 bIgnoreMdefRace2Rate,mr,n;",
  "desc": "Disregard n% of the target's MDEF if the target belongs to monster 種族 mr",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus bIgnoreMDefEle,e;			Disregard MDEF against enemies of element e
{
  "name": "bonus bIgnoreMDefEle,e;",
  "desc": "Disregard MDEF a獲得st enemies of 屬性 e",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bIgnoreDefClassRate,c,n;			Disregard n% of the target's DEF if the target belongs to class c
{
  "name": "bonus2 bIgnoreDefClassRate,c,n;",
  "desc": "Disregard n% of the target's DEF if the target belongs to 職業 c",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bIgnoreMdefClassRate,c,n;			Disregard n% of the target's MDEF if the target belongs to class c
{
  "name": "bonus2 bIgnoreMdefClassRate,c,n;",
  "desc": "Disregard n% of the target's MDEF if the target belongs to 職業 c",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// ====================
// 13. Ignore Res | 屬性與種族修正
// ====================
// bonus2 bIgnoreResRaceRate,r,n;			Disregard n% of the target's Res if the target belongs to race r
{
  "name": "bonus2 bIgnoreResRaceRate,r,n;",
  "desc": "Disregard n% of the target's Res if the target belongs to race r",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bIgnoreMResRaceRate,r,n;			Disregard n% of the target's MRes if the target belongs to race r
{
  "name": "bonus2 bIgnoreMResRaceRate,r,n;",
  "desc": "Disregard n% of the target's MRes if the target belongs to 種族 r",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// ====================
// 14. Experience | 屬性與種族修正
// ====================
// bonus2 bExpAddRace,r,x;			Increase exp gained by x% against enemies of race r
{
  "name": "bonus2 bExpAddRace,r,x;",
  "desc": "Increase exp gained by x% against enemies of race r",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bExpAddClass,c,x;			Increase exp gained by x% against enemies of class c
{
  "name": "bonus2 bExpAddClass,c,x;",
  "desc": "Increase exp 獲得ed by x% a獲得st enemies of 職業 c",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bAddEff,eff,n;			Adds a n/100% chance to cause status eff on the target when attacking
{
  "name": "bonus2 bAddEff,eff,n;",
  "desc": "Adds a n/100% chance to cause status eff on the target when attacking",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bAddEff2,eff,n;			Adds a n/100% chance to cause status eff on self when attacking
{
  "name": "bonus2 bAddEff2,eff,n;",
  "desc": "增加 a n/100% 機率 to cause 狀態 eff on self when attacking",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bAddEffWhenHit,eff,n;			Adds a n/100% chance to cause status eff on the enemy when being hit by physical damage
{
  "name": "bonus2 bAddEffWhenHit,eff,n;",
  "desc": "增加 a n/100% 機率 to cause 狀態 eff on the enemy when being hit by 物理 傷害",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bResEff,eff,n;			Adds a n/100% tolerance to status eff
{
  "name": "bonus2 bResEff,eff,n;",
  "desc": "增加 a n/100% tolerance to 狀態 eff",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus3 bAddEff,eff,n,atf;			Adds a n/100% chance to cause status eff on the target when attacking
{
  "name": "bonus3 bAddEff,eff,n,atf;",
  "desc": "Adds a n/100% chance to cause status eff on the target when attacking",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus4 bAddEff,eff,n,atf,t;			Adds a n/100% chance to cause status eff for t milliseconds on the target when attacking
{
  "name": "bonus4 bAddEff,eff,n,atf,t;",
  "desc": "增加 a n/100% 機率 to cause 狀態 eff for t milliseconds on the target when attacking",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus3 bAddEffWhenHit,eff,n,atf;			Adds a n/100% chance to cause status eff on the target when being hit by physical damage
{
  "name": "bonus3 bAddEffWhenHit,eff,n,atf;",
  "desc": "增加 a n/100% 機率 to cause 狀態 eff on the target when being hit by 物理 傷害",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus4 bAddEffWhenHit,eff,n,atf,t;			Adds a n/100% chance to cause status eff for t milliseconds on the target when being hit by physical damage
{
  "name": "bonus4 bAddEffWhenHit,eff,n,atf,t;",
  "desc": "增加 a n/100% 機率 to cause 狀態 eff for t milliseconds on the target when being hit by 物理 傷害",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus3 bAddEffOnSkill,sk,eff,n;			Adds a n/100% chance to cause status eff on enemy when using skill sk
{
  "name": "bonus3 bAddEffOnSkill,sk,eff,n;",
  "desc": "Adds a n/100% chance to cause status eff on enemy when using skill sk",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus4 bAddEffOnSkill,sk,eff,n,atf;			Adds a n/100% chance to cause status eff on the target when using skill sk
{
  "name": "bonus4 bAddEffOnSkill,sk,eff,n,atf;",
  "desc": "增加 a n/100% 機率 to cause 狀態 eff on the target when using skill sk",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus5 bAddEffOnSkill,sk,eff,n,atf,t;			Adds a n/100% chance to cause status eff for t milliseconds on the target when using skill sk
{
  "name": "bonus5 bAddEffOnSkill,sk,eff,n,atf,t;",
  "desc": "增加 a n/100% 機率 to cause 狀態 eff for t milliseconds on the target when using skill sk",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bComaClass,c,n;			Adds a n/100% chance to cause Coma when attacking a target of class c (regardless the type of attack)
{
  "name": "bonus2 bComaClass,c,n;",
  "desc": "Adds a n/100% chance to cause Coma when attacking a target of class c (regardless the type of attack)",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bComaRace,r,n;			Adds a n/100% chance to cause Coma when attacking a target of race r (regardless the type of attack)
{
  "name": "bonus2 bComaRace,r,n;",
  "desc": "增加 a n/100% 機率 to cause Coma when attacking a target of 種族 r (regardless the type of attack)",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bWeaponComaEle,e,n;			Adds a n/100% chance to cause Coma when attacking a target of element e with a normal attack
{
  "name": "bonus2 bWeaponComaEle,e,n;",
  "desc": "Adds a n/100% chance to cause Coma when attacking a target of element e with a normal attack",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bWeaponComaClass,c,n;			Adds a n/100% chance to cause Coma when attacking a target of class c with a normal attack
{
  "name": "bonus2 bWeaponComaClass,c,n;",
  "desc": "增加 a n/100% 機率 to cause Coma when attacking a target of 職業 c with a normal attack",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus2 bWeaponComaRace,r,n;			Adds a n/100% chance to cause Coma when attacking a target of race r with a normal attack
{
  "name": "bonus2 bWeaponComaRace,r,n;",
  "desc": "增加 a n/100% 機率 to cause Coma when attacking a target of 種族 r with a normal attack",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus3 bAutoSpell,sk,y,n;			Adds a n/10% chance to cast skill sk of level y when attacking
{
  "name": "bonus3 bAutoSpell,sk,y,n;",
  "desc": "Adds a n/10% chance to 詠唱 skill sk of level y when attacking",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus3 bAutoSpellWhenHit,sk,y,n;			Adds a n/10% chance to cast skill sk of level y when being hit by a direct attack
{
  "name": "bonus3 bAutoSpellWhenHit,sk,y,n;",
  "desc": "增加 a n/10% 機率 to cast skill sk of level y when being hit by a direct attack",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus4 bAutoSpell,sk,y,n,i;			Adds a n/10% chance to cast skill sk of level y when attacking
{
  "name": "bonus4 bAutoSpell,sk,y,n,i;",
  "desc": "Adds a n/10% chance to 詠唱 skill sk of level y when attacking",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus5 bAutoSpell,sk,y,n,bf,i;			Adds a n/10% chance to cast skill sk of level y when attacking with trigger criteria bf
{
  "name": "bonus5 bAutoSpell,sk,y,n,bf,i;",
  "desc": "增加 a n/10% 機率 to cast skill sk of level y when attacking with trigger criteria bf",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus4 bAutoSpellWhenHit,sk,y,n,i;			Adds a n/10% chance to cast skill sk of level y when being hit by a direct attack
{
  "name": "bonus4 bAutoSpellWhenHit,sk,y,n,i;",
  "desc": "增加 a n/10% 機率 to cast skill sk of level y when being hit by a direct attack",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus5 bAutoSpellWhenHit,sk,y,n,bf,i;			Adds a n/10% chance to cast skill sk of level y when being hit by a direct attack with trigger criteria bf
{
  "name": "bonus5 bAutoSpellWhenHit,sk,y,n,bf,i;",
  "desc": "增加 a n/10% 機率 to cast skill sk of level y when being hit by a direct attack with trigger criteria bf",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus4 bAutoSpellOnSkill,sk,x,y,n;			Adds a n/10% chance to autospell skill x at level y when using skill sk
{
  "name": "bonus4 bAutoSpellOnSkill,sk,x,y,n;",
  "desc": "Adds a n/10% chance to autospell skill x at level y when using skill sk",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// bonus5 bAutoSpellOnSkill,sk,x,y,n,i;			Adds a n/10% chance to autospell skill x at level y when using skill sk
{
  "name": "bonus5 bAutoSpellOnSkill,sk,x,y,n,i;",
  "desc": "增加 a n/10% 機率 to autospell skill x at level y when using skill sk",
  "category": "屬性與種族修正",
  "source": "rAthena"
},
// ====================
// 15. HP/SP drain | 防禦與免疫
// ====================
// bonus bHPDrainValue,n;			Heals +n HP with a normal attack
{
  "name": "bonus bHPDrainValue,n;",
  "desc": "Heals +n HP with a normal attack",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus2 bHPDrainValueRace,r,n;			Heals +n HP when attacking a monster of race r with normal attack
{
  "name": "bonus2 bHPDrainValueRace,r,n;",
  "desc": "治癒s +n HP when attacking a monster of 種族 r with normal attack",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus2 bHpDrainValueClass,c,n;			Heals +n HP when attacking a monster of class c with normal attack
{
  "name": "bonus2 bHpDrainValueClass,c,n;",
  "desc": "治癒s +n HP when attacking a monster of 職業 c with normal attack",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus bSPDrainValue,n;			Heals +n SP with a normal attack
{
  "name": "bonus bSPDrainValue,n;",
  "desc": "Heals +n SP with a normal attack",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus2 bSPDrainValueRace,r,n;			Heals +n SP when attacking a monster of race r with normal attack
{
  "name": "bonus2 bSPDrainValueRace,r,n;",
  "desc": "治癒s +n SP when attacking a monster of 種族 r with normal attack",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus2 bSpDrainValueClass,c,n;			Heals +n SP when attacking a monster of class c with normal attack
{
  "name": "bonus2 bSpDrainValueClass,c,n;",
  "desc": "治癒s +n SP when attacking a monster of 職業 c with normal attack",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus2 bHPDrainRate,x,n;			Adds a x/10% chance to drain n% HP from inflicted damage when attacking
{
  "name": "bonus2 bHPDrainRate,x,n;",
  "desc": "Adds a x/10% chance to drain n% HP from inflicted 傷害 when attacking",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus2 bSPDrainRate,x,n;			Adds a x/10% chance to drain n% SP from inflicted damage when attacking
{
  "name": "bonus2 bSPDrainRate,x,n;",
  "desc": "增加 a x/10% 機率 to 吸收 n% SP from inflicted 傷害 when attacking",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// ====================
// 16. HP/SP vanish | 防禦與免疫
// ====================
// bonus2 bHPVanishRate,x,n;			Add a x/10% chance of decreasing enemy's HP amount by n% with a normal attack
{
  "name": "bonus2 bHPVanishRate,x,n;",
  "desc": "Add a x/10% chance of decreasing enemy's HP amount+ n% with a normal attack",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus3 bHPVanishRaceRate,r,x,n;			Add a x/10% chance of decreasing enemy's HP amount by n% when attacking, depends on enemy race r
{
  "name": "bonus3 bHPVanishRaceRate,r,x,n;",
  "desc": "Add a x/10% 機率 of decreasing enemy's HP amount by n% when attacking, depends on enemy 種族 r",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus3 bHPVanishRate,x,n,bf;			Add a x/10% chance of decreasing enemy's HP amount by n% when attacking with trigger criteria bf
{
  "name": "bonus3 bHPVanishRate,x,n,bf;",
  "desc": "Add a x/10% 機率 of decreasing enemy's HP amount by n% when attacking with trigger criteria bf",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus2 bSPVanishRate,x,n;			Add a x/10% chance of decreasing enemy's SP amount by n% with a normal attack
{
  "name": "bonus2 bSPVanishRate,x,n;",
  "desc": "Add a x/10% chance of decreasing enemy's SP amount+ n% with a normal attack",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus3 bSPVanishRaceRate,r,x,n;			Add a x/10% chance of decreasing enemy's SP amount by n% when attacking, depends on enemy race r
{
  "name": "bonus3 bSPVanishRaceRate,r,x,n;",
  "desc": "Add a x/10% 機率 of decreasing enemy's SP amount by n% when attacking, depends on enemy 種族 r",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus3 bSPVanishRate,x,n,bf;			Add a x/10% chance of decreasing enemy's SP amount by n% when attacking with trigger criteria bf
{
  "name": "bonus3 bSPVanishRate,x,n,bf;",
  "desc": "Add a x/10% 機率 of decreasing enemy's SP amount by n% when attacking with trigger criteria bf",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus3 bStateNoRecoverRace,r,x,t;			Set a no recovery state of an enemy of race r at x/100% for t milliseconds with normal attack.
{
  "name": "bonus3 bStateNoRecoverRace,r,x,t;",
  "desc": "Set a no recovery state of an enemy of race r at x/100% for t milliseconds with normal attack.",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// ====================
// 17. HP/SP gain | 防禦與免疫
// ====================
// bonus bHPGainValue,n;			Heals +n HP when killing an enemy with a melee-physical attack
{
  "name": "bonus bHPGainValue,n;",
  "desc": "Heals +n HP when killing an enemy with a melee-物理 attack",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus bSPGainValue,n;			Heals +n SP when killing an enemy with a melee-physical attack
{
  "name": "bonus bSPGainValue,n;",
  "desc": "治癒s +n SP when killing an enemy with a melee-物理 attack",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus2 bSPGainRace,r,n;			Heals +n SP when killing an enemy of race r with a melee-physical attack
{
  "name": "bonus2 bSPGainRace,r,n;",
  "desc": "治癒s +n SP when killing an enemy of 種族 r with a melee-物理 attack",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus bLongHPGainValue,n;			Heals +n HP when killing an enemy with a range-physical attack
{
  "name": "bonus bLongHPGainValue,n;",
  "desc": "治癒s +n HP when killing an enemy with a range-物理 attack",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus bLongSPGainValue,n;			Heals +n SP when killing an enemy with a range-physical attack
{
  "name": "bonus bLongSPGainValue,n;",
  "desc": "治癒s +n SP when killing an enemy with a range-物理 attack",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus bMagicHPGainValue,n;			Heals +n HP when killing an enemy with a magical attack
{
  "name": "bonus bMagicHPGainValue,n;",
  "desc": "治癒s +n HP when killing an enemy with a magical attack",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus bMagicSPGainValue,n;			Heals +n SP when killing an enemy with a magical attack
{
  "name": "bonus bMagicSPGainValue,n;",
  "desc": "治癒s +n SP when killing an enemy with a magical attack",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// ====================
// 18. Damage return | 防禦與免疫
// ====================
// bonus bShortWeaponDamageReturn,n;			Reflects n% of received melee damage back to the enemy that caused it
{
  "name": "bonus bShortWeaponDamageReturn,n;",
  "desc": "Reflects n% of received melee 傷害 back to the enemy that caused it",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus bLongWeaponDamageReturn,n;			Reflects n% of received ranged damage back to the enemy that caused it
{
  "name": "bonus bLongWeaponDamageReturn,n;",
  "desc": "Reflects n% of received ranged 傷害 back to the enemy that caused it",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus bMagicDamageReturn,n;			Adds a n% chance to reflect targetted magic spells back to the enemy that caused it
{
  "name": "bonus bMagicDamageReturn,n;",
  "desc": "增加 a n% 機率 to 反射 targetted magic spells back to the enemy that caused it",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus bReduceDamageReturn,n;			Reduces reflected damage (melee/ranged/magic) by n%
{
  "name": "bonus bReduceDamageReturn,n;",
  "desc": "Reduces 反射ed 傷害 (melee/ranged/magic) by n%",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// ====================
// 19. Strip/Break equipment | 防禦與免疫
// ====================
// bonus bUnstripableWeapon;			Weapon cannot be taken off via Strip skills
{
  "name": "bonus bUnstripableWeapon;",
  "desc": "Weapon cannot be taken off via Strip skills",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus bUnstripableArmor;			Armor cannot be taken off via Strip skills
{
  "name": "bonus bUnstripableArmor;",
  "desc": "Armor cannot be taken off via Strip skills",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus bUnstripableHelm;			Helm cannot be taken off via Strip skills
{
  "name": "bonus bUnstripableHelm;",
  "desc": "Helm cannot be taken off via Strip skills",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus bUnstripableShield;			Shield cannot be taken off via Strip skills
{
  "name": "bonus bUnstripableShield;",
  "desc": "Shield cannot be taken off via Strip skills",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus bUnstripable;			All equipment cannot be taken off via strip skills
{
  "name": "bonus bUnstripable;",
  "desc": "All equipment cannot be taken off via strip skills",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus bUnbreakableGarment;			Garment cannot be damaged/broken by any means
{
  "name": "bonus bUnbreakableGarment;",
  "desc": "Garment cannot be 傷害d/broken by any means",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus bUnbreakableWeapon;			Weapon cannot be damaged/broken by any means
{
  "name": "bonus bUnbreakableWeapon;",
  "desc": "Weapon cannot be 傷害d/broken by any means",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus bUnbreakableArmor;			Armor cannot be damaged/broken by any means
{
  "name": "bonus bUnbreakableArmor;",
  "desc": "Armor cannot be 傷害d/broken by any means",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus bUnbreakableHelm;			Helm cannot be damaged/broken by any means
{
  "name": "bonus bUnbreakableHelm;",
  "desc": "Helm cannot be 傷害d/broken by any means",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus bUnbreakableShield;			Shield cannot be damaged/broken by any means
{
  "name": "bonus bUnbreakableShield;",
  "desc": "Shield cannot be 傷害d/broken by any means",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus bUnbreakableShoes;			Shoes cannot be damaged/broken by any means
{
  "name": "bonus bUnbreakableShoes;",
  "desc": "Shoes cannot be 傷害d/broken by any means",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus bUnbreakable,n;			Reduces the break chance of all equipped equipment by n%
{
  "name": "bonus bUnbreakable,n;",
  "desc": "Reduces the break 機率 of all equipped equipment by n%",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus bBreakWeaponRate,n;			Adds a n/100% chance to break enemy's weapon while attacking (stacks with other break chances)
{
  "name": "bonus bBreakWeaponRate,n;",
  "desc": "Adds a n/100% chance to break enemy's weapon while attacking (stacks with other break chances)",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus bBreakArmorRate,n;			Adds a n/100% chance to break enemy's armor while attacking (stacks with other break chances)
{
  "name": "bonus bBreakArmorRate,n;",
  "desc": "增加 a n/100% 機率 to break enemy's armor while attacking (stacks with other break 機率s)",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// ====================
// 20. Monster drops | 防禦與免疫
// ====================
// bonus2 bDropAddRace,r,x;			Adds x% to player's drop rate when killing a monster with race r.
{
  "name": "bonus2 bDropAddRace,r,x;",
  "desc": "Adds x% to player's drop rate when killing a monster with race r.",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus2 bDropAddClass,c,x;			Adds x% to player's drop rate when killing a monster with class c.
{
  "name": "bonus2 bDropAddClass,c,x;",
  "desc": "增加 x% to player's 掉落 rate when killing a monster with 職業 c.",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus3 bAddMonsterIdDropItem,iid,mid,n;			Adds a n/100% chance of dropping item iid when killing monster mid
{
  "name": "bonus3 bAddMonsterIdDropItem,iid,mid,n;",
  "desc": "Adds a n/100% chance of dropping item iid when killing monster mid",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus2 bAddMonsterDropItem,iid,n;			Adds a n/100% chance for item iid to be dropped when killing a monster
{
  "name": "bonus2 bAddMonsterDropItem,iid,n;",
  "desc": "Adds a n/100% chance for item iid to be dropped when killing a monster",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus3 bAddMonsterDropItem,iid,r,n;			Adds a n/100% chance for item iid to be dropped when killing a monster of race r
{
  "name": "bonus3 bAddMonsterDropItem,iid,r,n;",
  "desc": "增加 a n/100% 機率 for item iid to be 掉落ped when killing a monster of 種族 r",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus3 bAddClassDropItem,iid,c,n;			Adds a n/100% chance for item iid to be dropped when killing a monster of class c
{
  "name": "bonus3 bAddClassDropItem,iid,c,n;",
  "desc": "增加 a n/100% 機率 for item iid to be 掉落ped when killing a monster of 職業 c",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus2 bAddMonsterDropItemGroup,ig,n;			Adds a n/100% chance to get an item of group type ig when killing a monster
{
  "name": "bonus2 bAddMonsterDropItemGroup,ig,n;",
  "desc": "增加 a n/100% 機率 to get an item of group type ig when killing a monster",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus3 bAddMonsterDropItemGroup,ig,r,n;			Adds a n/100% chance to get an item of group type ig when killing a monster of race r
{
  "name": "bonus3 bAddMonsterDropItemGroup,ig,r,n;",
  "desc": "增加 a n/100% 機率 to get an item of group type ig when killing a monster of 種族 r",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus3 bAddClassDropItemGroup,ig,c,n;			Adds a n/100% chance to get an item of group type ig when killing a monster of class c
{
  "name": "bonus3 bAddClassDropItemGroup,ig,c,n;",
  "desc": "增加 a n/100% 機率 to get an item of group type ig when killing a monster of 職業 c",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus2 bGetZenyNum,x,n;			Adds a n% chance of gaining 1~x zeny when killing a monster (only the highest among all is applied)
{
  "name": "bonus2 bGetZenyNum,x,n;",
  "desc": "Adds a n% chance of gaining 1~x zeny when killing a monster (only the highest among all is applied)",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus2 bAddGetZenyNum,x,n;			Adds a n% chance of gaining 1~x zeny when killing a monster
{
  "name": "bonus2 bAddGetZenyNum,x,n;",
  "desc": "增加 a n% 機率 of 獲得ing 1~x zeny when killing a monster",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// ====================
// 21. Misc effects | 狀態與自動施法
// ====================
// bonus bDoubleRate,n;			Double Attack probability n% (works with all weapons | only the highest among all is applied)
{
  "name": "bonus bDoubleRate,n;",
  "desc": "Double Attack probability n% (works with all weapons | only the highest among all is applied)",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus bDoubleAddRate,n;			Double Attack probability + n% (works with all weapons)
{
  "name": "bonus bDoubleAddRate,n;",
  "desc": "Double 攻擊 機率 + n% (works with all weapons)",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus bSplashRange,n;			Splash attack radius + n (only the highest among all is applied)
{
  "name": "bonus bSplashRange,n;",
  "desc": "Splash attack radius + n (only the highest among all is applied)",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus bSplashAddRange,n;			Splash attack radius + n
{
  "name": "bonus bSplashAddRange,n;",
  "desc": "Splash attack radius + n",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus2 bAddSkillBlow,sk,n;			Knock back the target by n cells when using skill sk
{
  "name": "bonus2 bAddSkillBlow,sk,n;",
  "desc": "Knock back the target by n cells when using skill sk",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus bNoKnockback;			Character is no longer knocked back by enemy skills with such effect
{
  "name": "bonus bNoKnockback;",
  "desc": "Character is no longer knocked back by enemy skills with such effect",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus bNoGemStone;			Skills requiring Gemstones do not require them
{
  "name": "bonus bNoGemStone;",
  "desc": "Skills requiring Gemstones do not require them",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus bIntravision;			Always see Hiding and Cloaking players/mobs
{
  "name": "bonus bIntravision;",
  "desc": "Always see Hiding and Cloaking players/mobs",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus bPerfectHide;			Hidden/cloaked character is no longer detected by monsters with 'detector' mode
{
  "name": "bonus bPerfectHide;",
  "desc": "Hidden/cloaked character is no longer detected by monsters with 'detector' mode",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus bRestartFullRecover;			When reviving, HP and SP are fully healed
{
  "name": "bonus bRestartFullRecover;",
  "desc": "When reviving, HP and SP are fully healed",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus bClassChange,n;			Gives a n/100% chance to change the attacked monster's class with normal attack
{
  "name": "bonus bClassChange,n;",
  "desc": "Gives a n/100% 機率 to change the attacked monster's 職業 with normal attack",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus bAddStealRate,n;			Increases success rate of Steal skill by n/100%
{
  "name": "bonus bAddStealRate,n;",
  "desc": "增加 success rate of Steal skill by n/100%",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus bNoMadoFuel;			Nullify Magic Gear Fuel requirement for skills.
{
  "name": "bonus bNoMadoFuel;",
  "desc": "Nullify 魔法 Gear Fuel requirement for skills.",
  "category": "防禦與免疫",
  "source": "rAthena"
},
// bonus bNoWalkDelay;			Give infinite Endure.
{
  "name": "bonus bNoWalkDelay;",
  "desc": "Give infinite Endure.",
  "category": "防禦與免疫",
  "source": "rAthena"
},
];