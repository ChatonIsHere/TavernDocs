---
title: "ProgressionSettings"
description: "Global settings for XP, levels and skill points."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProgressionSettings

A **class** in `Root.Township`, no namespace.

Global settings for XP, levels and skill points. Get it with `GlobalSettings<ProgressionSettings>.Instance`.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`GlobalSettings<ProgressionSettings>`](/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`ProgressionSettings`](/game-api/types/global-p/progressionsettings), [`ProgressionSettings.Create`](/game-api/types/global-p/progressionsettings-create)
- **Nested types** [`Create`](/game-api/types/global-p/progressionsettings-create), [`InputSystemSound`](/game-api/types/global-p/progressionsettings-inputsystemsound), [`PathData`](/game-api/types/global-p/progressionsettings-pathdata), [`PathExperiencePerDamage`](/game-api/types/global-p/progressionsettings-pathexperienceperdamage), [`PathExperienceShare`](/game-api/types/global-p/progressionsettings-pathexperienceshare), [`PathImpactChannel`](/game-api/types/global-p/progressionsettings-pathimpactchannel)
- **Attributes** `GlobalSettings`
- **Documented in** [Progression](/game-api/game-systems/progression#progressionsettings)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ProgressionSettings()"}</code> |

## Fields

<details>
<summary>30 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bellowspumptoexperience" /><code>{"private float bellowsPumpToExperience"}</code> | Forging experience gained per bellows pump. |
| <Link id="m-bodylevelupeffect" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" bodyLevelUpEffect"}</code> | Event fired on the player's body target on a normal level up. |
| <Link id="m-bodylevelupeffecttopointcap" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" bodyLevelUpEffectToPointCap"}</code> | Event fired on the player's body target on a level up that reaches the point cap. |
| <Link id="m-destroyeffectdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" destroyEffectDefinition"}</code> | Pooled effect spawned when a skill orb is destroyed (see `OrbDestroyEffect`). |
| <Link id="m-dissipatetoolbasedeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" dissipateToolBasedEffect"}</code> | Pooled effect for a tool-based experience effect fading out. |
| <Link id="m-experiencebooststat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" experienceBoostStat"}</code> | Stat that boosts experience gain; read by `PlayerProgressionManager`. |
| <Link id="m-experienceperdamage" /><code>{"private "}<Link to="/game-api/types/global-p/progressionsettings-pathexperienceperdamage">{"ProgressionSettings.PathExperiencePerDamage"}</Link>{"[] experiencePerDamage"}</code> | Per-path experience gained for each point of damage dealt. |
| <Link id="m-experienceperdamagemap" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{", float> experiencePerDamageMap"}</code> | Lookup built from `experiencePerDamage`, keyed by path. |
| <Link id="m-experienceperlevelbasedonlevel" /><code>{"private AnimationCurve experiencePerLevelBasedOnLevel"}</code> | Curve giving the experience needed for a level, by current level. |
| <Link id="m-experienceshare" /><code>{"private "}<Link to="/game-api/types/global-p/progressionsettings-pathexperienceshare">{"ProgressionSettings.PathExperienceShare"}</Link>{"[] experienceShare"}</code> | Per-path multipliers for experience when holding an object yourself or supporting someone else's. |
| <Link id="m-experiencesharemap" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{", "}<Link to="/game-api/types/global-p/progressionsettings-pathexperienceshare">{"ProgressionSettings.PathExperienceShare"}</Link>{"> experienceShareMap"}</code> | Lookup built from `experienceShare`, keyed by path. |
| <Link id="m-garnishexperienceboost" /><code>{"private float garnishExperienceBoost"}</code> | Cooking experience multiplier when a stew has a garnish. |
| <Link id="m-get8skillsachievement" /><code>{"private "}<Link to="/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{" get8SkillsAchievement"}</code> | Achievement for owning eight skills. |
| <Link id="m-impactchannel" /><code>{"private "}<Link to="/game-api/types/global-a-b/baseimpactchannelprogressionfilter">{"BaseImpactChannelProgressionFilter"}</Link>{"[] impactChannel"}</code> | Filters that map an impact channel to the progression path it gives experience in. |
| <Link id="m-isclearingpracticeobjectsonfirstpractice" /><code>{"private bool isClearingPracticeObjectsOnFirstPractice"}</code> | Whether practice objects are cleared the first time a player practises. |
| <Link id="m-levelupaction" /><code>{"private "}<Link to="/game-api/types/global-e-h/gameaction">{"GameAction"}</Link>{" levelUpAction"}</code> | Game action recorded on level up. |
| <Link id="m-levelupeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" levelUpEffect"}</code> | Pooled effect spawned at the player's feet on a normal level up. |
| <Link id="m-levelupeffecttopointcap" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" levelUpEffectToPointCap"}</code> | Pooled effect spawned at the player's feet on a level up that reaches the point cap. |
| <Link id="m-maxboughtskills" /><code>{"private uint maxBoughtSkills"}</code> | Most skills a player can buy. `UncapSkillPoints` sets it to 0. |
| <Link id="m-maxfreepoints" /><code>{"private uint maxFreePoints"}</code> | Most unspent skill points a player can hold; 0 disables the cap. |
| <Link id="m-pathimpactchannelmap" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{", "}<Link to="/game-api/types/global-a-b/baseimpactchannelprogressionfilter">{"BaseImpactChannelProgressionFilter"}</Link>{"> pathImpactChannelMap"}</code> | Lookup built from `impactChannel`, keyed by impact channel. |
| <Link id="m-peringredientexperience" /><code>{"private int perIngredientExperience"}</code> | Cooking experience per stew ingredient. |
| <Link id="m-playercountexperienceshare" /><code>{"private float[] playerCountExperienceShare"}</code> | Cooking experience multiplier by how many players cooked together (index 0 is one player); the total is split between them. |
| <Link id="m-popcolors" /><code>{"private Color[] popColors"}</code> | Colour of the experience popup for each progression path. |
| <Link id="m-powerstrikeinput" /><code>{"private "}<Link to="/game-api/types/global-p/progressionsettings-inputsystemsound">{"ProgressionSettings.InputSystemSound"}</Link>{" powerStrikeInput"}</code> | Sounds for the power strike input turning on and off. Not read anywhere else in this build. |
| <Link id="m-raisehandinput" /><code>{"private "}<Link to="/game-api/types/global-p/progressionsettings-inputsystemsound">{"ProgressionSettings.InputSystemSound"}</Link>{" raiseHandInput"}</code> | Sounds for the raise hand input turning on and off. Not read anywhere else in this build. |
| <Link id="m-recipeexperiencebonus" /><code>{"private float recipeExperienceBonus"}</code> | Cooking experience multiplier when the stew matches a real recipe. |
| <Link id="m-sellingskillpointsrefundpercentage" /><code>{"private float sellingSkillPointsRefundPercentage"}</code> | Share (0 to 1) of a level's experience refunded when selling a skill. |
| <Link id="m-skillorbinteractioneffectdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" skillOrbInteractionEffectDefinition"}</code> | Pooled effect played when interacting with a skill orb (formerly the skill buy effect). |
| <Link id="m-toolbasedeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" toolBasedEffect"}</code> | Pooled effect shown when a tool hit gives experience. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bellowspumptoexperience-2" /><code>{"float BellowsPumpToExperience { get; }"}</code> | Forging XP per unit of bellows pumping (0 in the shipped asset). |
| <Link id="m-dissipatetoolbasedeffect-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" DissipateToolBasedEffect { get; }"}</code> | Pooled effect played when a profession skill's tool effect fades. |
| <Link id="m-experiencebooststat-2" /><code><Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" ExperienceBoostStat { get; }"}</code> | The stat that multiplies all XP a player gains. |
| <Link id="m-get8skillsachievement-2" /><code><Link to="/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{" Get8SkillsAchievement { get; }"}</code> | Achievement completed on the server when a player owns `MaxBoughtSkills` skills. |
| <Link id="m-isclearingpracticeobjectsonfirstpractice-2" /><code>{"bool IsClearingPracticeObjectsOnFirstPractice { get; }"}</code> | Whether a skill shrine clears practice objects once a slot is first practised. |
| <Link id="m-levelupaction-2" /><code><Link to="/game-api/types/global-e-h/gameaction">{"GameAction"}</Link>{" LevelUpAction { get; }"}</code> | Game action counted for the player each time they level up. |
| <Link id="m-maxboughtskills-2" /><code>{"uint MaxBoughtSkills { get; }"}</code> | How many skills a player may own. Below 1 means no limit. |
| <Link id="m-maxfreepoints-2" /><code>{"uint MaxFreePoints { get; }"}</code> | Most unspent points per path. XP stops at the cap. 0 means no cap. |
| <Link id="m-sellingskillpointsrefundpercentage-2" /><code>{"float SellingSkillPointsRefundPercentage { get; }"}</code> | Fraction of the levels' XP given back when a skill is sold. |
| <Link id="m-skillorbinteractioneffectdefinition-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" SkillOrbInteractionEffectDefinition { get; }"}</code> | Pooled effect for interacting with a skill orb. |
| <Link id="m-toolbasedeffect-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" ToolBasedEffect { get; }"}</code> | Pooled effect shown while a profession skill's tool effect is active. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-experienceperlevel" /><code>{"uint ExperiencePerLevel(uint currentLevel)"}</code> | XP needed to go from the given level to the next, from a step curve. |
| <Link id="m-gainstewingexperience" /><code>{"void GainStewingExperience(List<"}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{"> cookingPlayers, int ingredientCount, bool isRealRecipe, bool hasGarnish)"}</code> | Gives cooking XP to the cooking players based on ingredients, recipe and garnish, shared by player count. Not called in this build. |
| <Link id="m-getdamageexperience" /><code>{"float GetDamageExperience(float damage, "}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | XP for a hit on a path: the damage times that path's XP per damage (0 if not set). |
| <Link id="m-getexperiencesharedmultiplier" /><code>{"float GetExperienceSharedMultiplier(bool isSupport, "}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | The self or support share multiplier for a path, used when forging with a holder. 1 if the path has none. |
| <Link id="m-getpathpopupcolor" /><code>{"Color GetPathPopupColor("}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | Colour of the XP popup text for a path. White if none is set. |
| <Link id="m-levelupeffect-2" /><code>{"void LevelUpEffect("}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" character, bool isLevelCap)"}</code> | Plays the level up effect (or the point cap version) on a character's body and feet. |
| <Link id="m-orbdestroyeffect" /><code>{"void OrbDestroyEffect("}<Link to="/game-api/types/global-i-l/iskillorb">{"ISkillOrb"}</Link>{" orb)"}</code> | Spawns the skill orb destroy effect at an orb's position. |
| <Link id="m-uncapskillpoints" /><code>{"void UncapSkillPoints(out int maxXp)"}</code> | Sets `MaxFreePoints` and `MaxBoughtSkills` to 0 (no limits) on the shared asset and outputs the curve's last XP value. |
| <Link id="m-validatepathhit" /><code>{"bool ValidatePathHit("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, bool isGettingExperience, out "}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | Maps a tool hit to a progression path by its impact channel and applies that channel's filter. False if the channel is not mapped. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fillandvalidatemaps" /><code>{"private void FillAndValidateMaps()"}</code> | Rebuilds the per-path lookup maps (experience per damage, experience share, impact channel filters) from the serialized arrays. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Builds the lookup maps when the asset loads. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: rebuilds the maps and resizes `playerCountExperienceShare` when its length is off. |
| <Link id="m-populatemap" /><code>{"private void PopulateMap<T>(Dictionary<"}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{", T> map, T[] array)"}</code> | Fills a path-keyed map from an array of per-path entries and names each entry after its path. |

</details>
