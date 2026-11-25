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

| Member |
| --- |
| <Link id="m-bellowspumptoexperience" /><code>{"private float bellowsPumpToExperience"}</code> |
| <Link id="m-bodylevelupeffect" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" bodyLevelUpEffect"}</code> |
| <Link id="m-bodylevelupeffecttopointcap" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" bodyLevelUpEffectToPointCap"}</code> |
| <Link id="m-destroyeffectdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" destroyEffectDefinition"}</code> |
| <Link id="m-dissipatetoolbasedeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" dissipateToolBasedEffect"}</code> |
| <Link id="m-experiencebooststat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" experienceBoostStat"}</code> |
| <Link id="m-experienceperdamage" /><code>{"private "}<Link to="/game-api/types/global-p/progressionsettings-pathexperienceperdamage">{"ProgressionSettings.PathExperiencePerDamage"}</Link>{"[] experiencePerDamage"}</code> |
| <Link id="m-experienceperdamagemap" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{", float> experiencePerDamageMap"}</code> |
| <Link id="m-experienceperlevelbasedonlevel" /><code>{"private AnimationCurve experiencePerLevelBasedOnLevel"}</code> |
| <Link id="m-experienceshare" /><code>{"private "}<Link to="/game-api/types/global-p/progressionsettings-pathexperienceshare">{"ProgressionSettings.PathExperienceShare"}</Link>{"[] experienceShare"}</code> |
| <Link id="m-experiencesharemap" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{", "}<Link to="/game-api/types/global-p/progressionsettings-pathexperienceshare">{"ProgressionSettings.PathExperienceShare"}</Link>{"> experienceShareMap"}</code> |
| <Link id="m-garnishexperienceboost" /><code>{"private float garnishExperienceBoost"}</code> |
| <Link id="m-get8skillsachievement" /><code>{"private "}<Link to="/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{" get8SkillsAchievement"}</code> |
| <Link id="m-impactchannel" /><code>{"private "}<Link to="/game-api/types/global-a-b/baseimpactchannelprogressionfilter">{"BaseImpactChannelProgressionFilter"}</Link>{"[] impactChannel"}</code> |
| <Link id="m-isclearingpracticeobjectsonfirstpractice" /><code>{"private bool isClearingPracticeObjectsOnFirstPractice"}</code> |
| <Link id="m-levelupaction" /><code>{"private "}<Link to="/game-api/types/global-e-h/gameaction">{"GameAction"}</Link>{" levelUpAction"}</code> |
| <Link id="m-levelupeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" levelUpEffect"}</code> |
| <Link id="m-levelupeffecttopointcap" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" levelUpEffectToPointCap"}</code> |
| <Link id="m-maxboughtskills" /><code>{"private uint maxBoughtSkills"}</code> |
| <Link id="m-maxfreepoints" /><code>{"private uint maxFreePoints"}</code> |
| <Link id="m-pathimpactchannelmap" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{", "}<Link to="/game-api/types/global-a-b/baseimpactchannelprogressionfilter">{"BaseImpactChannelProgressionFilter"}</Link>{"> pathImpactChannelMap"}</code> |
| <Link id="m-peringredientexperience" /><code>{"private int perIngredientExperience"}</code> |
| <Link id="m-playercountexperienceshare" /><code>{"private float[] playerCountExperienceShare"}</code> |
| <Link id="m-popcolors" /><code>{"private Color[] popColors"}</code> |
| <Link id="m-powerstrikeinput" /><code>{"private "}<Link to="/game-api/types/global-p/progressionsettings-inputsystemsound">{"ProgressionSettings.InputSystemSound"}</Link>{" powerStrikeInput"}</code> |
| <Link id="m-raisehandinput" /><code>{"private "}<Link to="/game-api/types/global-p/progressionsettings-inputsystemsound">{"ProgressionSettings.InputSystemSound"}</Link>{" raiseHandInput"}</code> |
| <Link id="m-recipeexperiencebonus" /><code>{"private float recipeExperienceBonus"}</code> |
| <Link id="m-sellingskillpointsrefundpercentage" /><code>{"private float sellingSkillPointsRefundPercentage"}</code> |
| <Link id="m-skillorbinteractioneffectdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" skillOrbInteractionEffectDefinition"}</code> |
| <Link id="m-toolbasedeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" toolBasedEffect"}</code> |

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

| Member |
| --- |
| <Link id="m-fillandvalidatemaps" /><code>{"private void FillAndValidateMaps()"}</code> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |
| <Link id="m-populatemap" /><code>{"private void PopulateMap<T>(Dictionary<"}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{", T> map, T[] array)"}</code> |

</details>
