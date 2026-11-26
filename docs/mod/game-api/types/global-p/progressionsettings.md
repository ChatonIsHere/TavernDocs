---
title: "ProgressionSettings"
description: "Global settings for XP, levels and skill points."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProgressionSettings

A **class** in `Root.Township`, the global namespace.

Global settings for XP, levels and skill points. Get it with `GlobalSettings<ProgressionSettings>.Instance`.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`GlobalSettings<ProgressionSettings>`](/mod/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`ProgressionSettings`](/mod/game-api/types/global-p/progressionsettings), [`ProgressionSettings.Create`](/mod/game-api/types/global-p/progressionsettings-create)
- **Nested types** [`Create`](/mod/game-api/types/global-p/progressionsettings-create), [`InputSystemSound`](/mod/game-api/types/global-p/progressionsettings-inputsystemsound), [`PathData`](/mod/game-api/types/global-p/progressionsettings-pathdata), [`PathExperiencePerDamage`](/mod/game-api/types/global-p/progressionsettings-pathexperienceperdamage), [`PathExperienceShare`](/mod/game-api/types/global-p/progressionsettings-pathexperienceshare), [`PathImpactChannel`](/mod/game-api/types/global-p/progressionsettings-pathimpactchannel)
- **Attributes** `GlobalSettings`
- **Documented in** [Progression](/mod/game-api/game-systems/progression#progressionsettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ProgressionSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>30 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bellowspumptoexperience" /><code>{"private float bellowsPumpToExperience"}</code> | <span className="api-desc">Forging experience gained per bellows pump.</span> |
| <Link id="m-bodylevelupeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" bodyLevelUpEffect"}</code> | <span className="api-desc">Event fired on the player's body target on a normal level up.</span> |
| <Link id="m-bodylevelupeffecttopointcap" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" bodyLevelUpEffectToPointCap"}</code> | <span className="api-desc">Event fired on the player's body target on a level up that reaches the point cap.</span> |
| <Link id="m-destroyeffectdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" destroyEffectDefinition"}</code> | <span className="api-desc">Pooled effect spawned when a skill orb is destroyed (see `OrbDestroyEffect`).</span> |
| <Link id="m-dissipatetoolbasedeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" dissipateToolBasedEffect"}</code> | <span className="api-desc">Pooled effect for a tool-based experience effect fading out.</span> |
| <Link id="m-experiencebooststat" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" experienceBoostStat"}</code> | <span className="api-desc">Stat that boosts experience gain; read by `PlayerProgressionManager`.</span> |
| <Link id="m-experienceperdamage" /><code>{"private "}<Link to="/mod/game-api/types/global-p/progressionsettings-pathexperienceperdamage">{"ProgressionSettings.PathExperiencePerDamage"}</Link>{"[] experiencePerDamage"}</code> | <span className="api-desc">Per-path experience gained for each point of damage dealt.</span> |
| <Link id="m-experienceperdamagemap" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{", float> experiencePerDamageMap"}</code> | <span className="api-desc">Lookup built from `experiencePerDamage`, keyed by path.</span> |
| <Link id="m-experienceperlevelbasedonlevel" /><code>{"private AnimationCurve experiencePerLevelBasedOnLevel"}</code> | <span className="api-desc">Curve giving the experience needed for a level, by current level.</span> |
| <Link id="m-experienceshare" /><code>{"private "}<Link to="/mod/game-api/types/global-p/progressionsettings-pathexperienceshare">{"ProgressionSettings.PathExperienceShare"}</Link>{"[] experienceShare"}</code> | <span className="api-desc">Per-path multipliers for experience when holding an object yourself or supporting someone else's.</span> |
| <Link id="m-experiencesharemap" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{", "}<Link to="/mod/game-api/types/global-p/progressionsettings-pathexperienceshare">{"ProgressionSettings.PathExperienceShare"}</Link>{"> experienceShareMap"}</code> | <span className="api-desc">Lookup built from `experienceShare`, keyed by path.</span> |
| <Link id="m-garnishexperienceboost" /><code>{"private float garnishExperienceBoost"}</code> | <span className="api-desc">Cooking experience multiplier when a stew has a garnish.</span> |
| <Link id="m-get8skillsachievement" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{" get8SkillsAchievement"}</code> | <span className="api-desc">Achievement for owning eight skills.</span> |
| <Link id="m-impactchannel" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/baseimpactchannelprogressionfilter">{"BaseImpactChannelProgressionFilter"}</Link>{"[] impactChannel"}</code> | <span className="api-desc">Filters that map an impact channel to the progression path it gives experience in.</span> |
| <Link id="m-isclearingpracticeobjectsonfirstpractice" /><code>{"private bool isClearingPracticeObjectsOnFirstPractice"}</code> | <span className="api-desc">Whether practice objects are cleared the first time a player practises.</span> |
| <Link id="m-levelupaction" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/gameaction">{"GameAction"}</Link>{" levelUpAction"}</code> | <span className="api-desc">Game action recorded on level up.</span> |
| <Link id="m-levelupeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" levelUpEffect"}</code> | <span className="api-desc">Pooled effect spawned at the player's feet on a normal level up.</span> |
| <Link id="m-levelupeffecttopointcap" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" levelUpEffectToPointCap"}</code> | <span className="api-desc">Pooled effect spawned at the player's feet on a level up that reaches the point cap.</span> |
| <Link id="m-maxboughtskills" /><code>{"private uint maxBoughtSkills"}</code> | <span className="api-desc">Most skills a player can buy. `UncapSkillPoints` sets it to 0.</span> |
| <Link id="m-maxfreepoints" /><code>{"private uint maxFreePoints"}</code> | <span className="api-desc">Most unspent skill points a player can hold; 0 disables the cap.</span> |
| <Link id="m-pathimpactchannelmap" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{", "}<Link to="/mod/game-api/types/global-a-b/baseimpactchannelprogressionfilter">{"BaseImpactChannelProgressionFilter"}</Link>{"> pathImpactChannelMap"}</code> | <span className="api-desc">Lookup built from `impactChannel`, keyed by impact channel.</span> |
| <Link id="m-peringredientexperience" /><code>{"private int perIngredientExperience"}</code> | <span className="api-desc">Cooking experience per stew ingredient.</span> |
| <Link id="m-playercountexperienceshare" /><code>{"private float[] playerCountExperienceShare"}</code> | <span className="api-desc">Cooking experience multiplier by how many players cooked together (index 0 is one player); the total is split between them.</span> |
| <Link id="m-popcolors" /><code>{"private Color[] popColors"}</code> | <span className="api-desc">Colour of the experience popup for each progression path.</span> |
| <Link id="m-powerstrikeinput" /><code>{"private "}<Link to="/mod/game-api/types/global-p/progressionsettings-inputsystemsound">{"ProgressionSettings.InputSystemSound"}</Link>{" powerStrikeInput"}</code> | <span className="api-desc">Sounds for the power strike input turning on and off. Not read anywhere else in this build.</span> |
| <Link id="m-raisehandinput" /><code>{"private "}<Link to="/mod/game-api/types/global-p/progressionsettings-inputsystemsound">{"ProgressionSettings.InputSystemSound"}</Link>{" raiseHandInput"}</code> | <span className="api-desc">Sounds for the raise hand input turning on and off. Not read anywhere else in this build.</span> |
| <Link id="m-recipeexperiencebonus" /><code>{"private float recipeExperienceBonus"}</code> | <span className="api-desc">Cooking experience multiplier when the stew matches a real recipe.</span> |
| <Link id="m-sellingskillpointsrefundpercentage" /><code>{"private float sellingSkillPointsRefundPercentage"}</code> | <span className="api-desc">Share (0 to 1) of a level's experience refunded when selling a skill.</span> |
| <Link id="m-skillorbinteractioneffectdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" skillOrbInteractionEffectDefinition"}</code> | <span className="api-desc">Pooled effect played when interacting with a skill orb (formerly the skill buy effect).</span> |
| <Link id="m-toolbasedeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" toolBasedEffect"}</code> | <span className="api-desc">Pooled effect shown when a tool hit gives experience.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bellowspumptoexperience-2" /><code>{"float BellowsPumpToExperience { get; }"}</code> | <span className="api-desc">Forging XP per unit of bellows pumping (0 in the shipped asset).</span> |
| <Link id="m-dissipatetoolbasedeffect-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" DissipateToolBasedEffect { get; }"}</code> | <span className="api-desc">Pooled effect played when a profession skill's tool effect fades.</span> |
| <Link id="m-experiencebooststat-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" ExperienceBoostStat { get; }"}</code> | <span className="api-desc">The stat that multiplies all XP a player gains.</span> |
| <Link id="m-get8skillsachievement-2" /><code><Link to="/mod/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{" Get8SkillsAchievement { get; }"}</code> | <span className="api-desc">Achievement completed on the server when a player owns `MaxBoughtSkills` skills.</span> |
| <Link id="m-isclearingpracticeobjectsonfirstpractice-2" /><code>{"bool IsClearingPracticeObjectsOnFirstPractice { get; }"}</code> | <span className="api-desc">Whether a skill shrine clears practice objects once a slot is first practised.</span> |
| <Link id="m-levelupaction-2" /><code><Link to="/mod/game-api/types/global-e-h/gameaction">{"GameAction"}</Link>{" LevelUpAction { get; }"}</code> | <span className="api-desc">Game action counted for the player each time they level up.</span> |
| <Link id="m-maxboughtskills-2" /><code>{"uint MaxBoughtSkills { get; }"}</code> | <span className="api-desc">How many skills a player may own. Below 1 means no limit.</span> |
| <Link id="m-maxfreepoints-2" /><code>{"uint MaxFreePoints { get; }"}</code> | <span className="api-desc">Most unspent points per path. XP stops at the cap. 0 means no cap.</span> |
| <Link id="m-sellingskillpointsrefundpercentage-2" /><code>{"float SellingSkillPointsRefundPercentage { get; }"}</code> | <span className="api-desc">Fraction of the levels' XP given back when a skill is sold.</span> |
| <Link id="m-skillorbinteractioneffectdefinition-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" SkillOrbInteractionEffectDefinition { get; }"}</code> | <span className="api-desc">Pooled effect for interacting with a skill orb.</span> |
| <Link id="m-toolbasedeffect-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" ToolBasedEffect { get; }"}</code> | <span className="api-desc">Pooled effect shown while a profession skill's tool effect is active.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-experienceperlevel" /><code>{"uint ExperiencePerLevel(uint currentLevel)"}</code> | <span className="api-desc">XP needed to go from the given level to the next, from a step curve.</span> |
| <Link id="m-gainstewingexperience" /><code>{"void GainStewingExperience(List<"}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{"> cookingPlayers, int ingredientCount, bool isRealRecipe, bool hasGarnish)"}</code> | <span className="api-desc">Gives cooking XP to the cooking players based on ingredients, recipe and garnish, shared by player count. Not called in this build.</span> |
| <Link id="m-getdamageexperience" /><code>{"float GetDamageExperience(float damage, "}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | <span className="api-desc">XP for a hit on a path: the damage times that path's XP per damage (0 if not set).</span> |
| <Link id="m-getexperiencesharedmultiplier" /><code>{"float GetExperienceSharedMultiplier(bool isSupport, "}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | <span className="api-desc">The self or support share multiplier for a path, used when forging with a holder. 1 if the path has none.</span> |
| <Link id="m-getpathpopupcolor" /><code>{"Color GetPathPopupColor("}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | <span className="api-desc">Colour of the XP popup text for a path. White if none is set.</span> |
| <Link id="m-levelupeffect-2" /><code>{"void LevelUpEffect("}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" character, bool isLevelCap)"}</code> | <span className="api-desc">Plays the level up effect (or the point cap version) on a character's body and feet.</span> |
| <Link id="m-orbdestroyeffect" /><code>{"void OrbDestroyEffect("}<Link to="/mod/game-api/types/global-i-l/iskillorb">{"ISkillOrb"}</Link>{" orb)"}</code> | <span className="api-desc">Spawns the skill orb destroy effect at an orb's position.</span> |
| <Link id="m-uncapskillpoints" /><code>{"void UncapSkillPoints(out int maxXp)"}</code> | <span className="api-desc">Sets `MaxFreePoints` and `MaxBoughtSkills` to 0 (no limits) on the shared asset and outputs the curve's last XP value.</span> |
| <Link id="m-validatepathhit" /><code>{"bool ValidatePathHit("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, bool isGettingExperience, out "}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | <span className="api-desc">Maps a tool hit to a progression path by its impact channel and applies that channel's filter. False if the channel is not mapped.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fillandvalidatemaps" /><code>{"private void FillAndValidateMaps()"}</code> | <span className="api-desc">Rebuilds the per-path lookup maps (experience per damage, experience share, impact channel filters) from the serialized arrays.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Builds the lookup maps when the asset loads.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: rebuilds the maps and resizes `playerCountExperienceShare` when its length is off.</span> |
| <Link id="m-populatemap" /><code>{"private void PopulateMap<T>(Dictionary<"}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{", T> map, T[] array)"}</code> | <span className="api-desc">Fills a path-keyed map from an array of per-path entries and names each entry after its path.</span> |

</details>
