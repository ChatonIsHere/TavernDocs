---
title: "StatDefinition"
description: "A stat asset (health, hunger, speed and so on), a hashed value looked up by hash or name."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatDefinition

A **class** in `Root.Township`, `Alta.StatSystem`.

A stat asset (health, hunger, speed and so on), a hashed value looked up by hash or name. Each `StatManager` makes a `Stat` per definition. Subclasses add special behaviour for some stats.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`HashedGeneralValue<StatDefinition>`](/mod/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`StatDefinitionConverter`](/mod/game-api/types/alta-utilities/statdefinitionconverter), [`ControlledStat`](/mod/game-api/types/alta-stats-effects/controlledstat), [`IncrementingStat`](/mod/game-api/types/alta-stats-effects/incrementingstat), [`MaxStatDefinition`](/mod/game-api/types/alta-stats-effects/maxstatdefinition), [`OnFullAffectTargetStatDefinition`](/mod/game-api/types/alta-stats-effects/onfullaffecttargetstatdefinition), [`PlayerWeightStat`](/mod/game-api/types/alta-stats-effects/playerweightstat), [`PoisonStat`](/mod/game-api/types/alta-stats-effects/poisonstat), [`StatDefinition`](/mod/game-api/types/alta-stats-effects/statdefinition), [`StatDefinition.Create`](/mod/game-api/types/alta-stats-effects/statdefinition-create), [`ThresholdStat`](/mod/game-api/types/alta-stats-effects/thresholdstat), [`CrippleStatDefinition`](/mod/game-api/types/global-c-d/cripplestatdefinition)
- **Nested types** [`Create`](/mod/game-api/types/alta-stats-effects/statdefinition-create), [`MinimumAndMaximumValues`](/mod/game-api/types/alta-stats-effects/statdefinition-minimumandmaximumvalues)
- **Attributes** `TypeConverter`, `CreateAssetMenu`
- **Documented in** [Stats](/mod/game-api/game-systems/stats#statdefinition), [Arguments and results](/mod/game-api/console-and-utilities/arguments-and-results)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatDefinition()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-changetosync" /><code>{"private float changeToSync"}</code> | How much the value must change (default 0.1) before `CheckSerialize` sends the stat to clients. |
| <Link id="m-commandminimumandmaximumvalues" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition-minimumandmaximumvalues">{"StatDefinition.MinimumAndMaximumValues"}</Link>{" commandMinimumAndMaximumValues"}</code> | Optional range that commands may set the stat to; checked by `IsValueValidForCommands`. |
| <Link id="m-duration" /><code>{"private float duration"}</code> | Backing field for `Duration`: how long the upgrade effect plays when this stat is upgraded. |
| <Link id="m-indirectmodificationcurve" /><code>{"private AnimationCurve indirectModificationCurve"}</code> | Curve that turns the total of indirect modifiers into the amount applied to the stat; exposed as `IndirectModificationCurve`. |
| <Link id="m-isindirectusagemultiplier" /><code>{"private bool isIndirectUsageMultiplier"}</code> | Whether indirect modifiers apply to this stat as a multiplier rather than a flat amount; exposed as `IsIndirectUsageMultiplier`. |
| <Link id="m-issaveserialized" /><code>{"private bool isSaveSerialized"}</code> | Backing field for `IsSaveSerialized`: whether the stat's base value is saved with the player. |
| <Link id="m-majornotcheveryxnotches" /><code>{"private int majorNotchEveryXNotches"}</code> | Every this many notches on the wrist band is a major notch. 0 makes every notch major. |
| <Link id="m-notchvalue" /><code>{"private float notchValue"}</code> | Stat amount (default 0.25) per notch on the wrist band; used by `GetNotchesCount`. |
| <Link id="m-particlescolor" /><code>{"private Color particlesColor"}</code> | Backing field for `ParticlesColor`: colour of the upgrade effect particles. |
| <Link id="m-statname" /><code>{"private string statName"}</code> | Backing field for `Name`, the name used to look the stat up with `StatManager.GetStat`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-duration-2" /><code>{"float Duration { get; }"}</code> | How long the upgrade particle effect plays when this stat is raised by an upgrade. |
| <Link id="m-indirectmodificationcurve-2" /><code>{"AnimationCurve IndirectModificationCurve { get; }"}</code> | Curve used by indirect stat modifiers to turn an input value into a modifier for this stat. |
| <Link id="m-isindirectusagemultiplier-2" /><code>{"bool IsIndirectUsageMultiplier { get; }"}</code> | Whether indirect modifiers on this stat are applied as multipliers rather than added. |
| <Link id="m-issaveserialized-2" /><code>{"bool IsSaveSerialized { get; }"}</code> | Whether the stat's value is written to the player save. |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | The stat's name as set on the asset. Used by `StatManager.GetStat` and console commands. |
| <Link id="m-particlescolor-2" /><code>{"Color ParticlesColor { get; }"}</code> | Colour of the upgrade particle effect for this stat. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applied" /><code>{"virtual void Applied("}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager, "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | Virtual hook the `StatManager` calls for each stat after setting them up. Empty in the base; subclasses like hunger use it. |
| <Link id="m-checkserialize" /><code>{"virtual bool CheckSerialize(float oldValue, float newValue)"}</code> | Decides if a value change is big enough to send over the network. Default is a change greater than the asset's `changeToSync` (0.1). |
| <Link id="m-getnotchescount" /><code>{"virtual int GetNotchesCount(float statMaximum)"}</code> | How many notches the wrist band bar shows for a given maximum, from the asset's notch spacing. |
| <Link id="m-getnotchesposition" /><code>{"virtual void GetNotchesPosition(int notchesCount, float statMaximum, out float[] positions, out bool[] isMajor)"}</code> | Works out evenly spaced notch positions (0 to 1) and which of them are major notches. |
| <Link id="m-getstatonplayer" /><code><Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" GetStatOnPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Finds this stat on a player's health stat manager. Logs an error and returns null if missing. |
| <Link id="m-isvaluevalidforcommands" /><code>{"bool IsValueValidForCommands(float value)"}</code> | Checks a value against the optional min and max allowed when setting this stat by console command. |

## Used in

Members of other types that take, return or hold a `StatDefinition`:

[`StatEffect.statToAffect`](/mod/game-api/types/alta-stats-effects/stateffect#m-stattoaffect), [`StatEffect.StatToAffect`](/mod/game-api/types/alta-stats-effects/stateffect#m-stattoaffect-2), [`StatMultiplierEffect.statToAffect`](/mod/game-api/types/alta-stats-effects/statmultipliereffect#m-stattoaffect), [`ImpactModifierStatAffect.targetStat`](/mod/game-api/types/alta-items/impactmodifierstataffect#m-targetstat), [`CreateTargetOperation.Stat`](/mod/game-api/types/alta-intelligence/createtargetoperation#m-stat), [`Phantom.materializedStatDefinition`](/mod/game-api/types/alta-intelligence/phantom#m-materializedstatdefinition), [`Phantom.visibilityStatDefinition`](/mod/game-api/types/alta-intelligence/phantom#m-visibilitystatdefinition), [`StatChangeHook.targetStat`](/mod/game-api/types/alta-intelligence/statchangehook#m-targetstat), [`StatOperation.statDefinition`](/mod/game-api/types/alta-intelligence/statoperation#m-statdefinition), [`StatValue.statDefinition`](/mod/game-api/types/alta-intelligence/statvalue#m-statdefinition), [`StatValue.StatValue`](/mod/game-api/types/alta-intelligence/statvalue#m-ctor), [`StatEffectHolder.statDefinition`](/mod/game-api/types/alta-player/stateffectholder#m-statdefinition), [`StatEffectHolder.StatDefinition`](/mod/game-api/types/alta-player/stateffectholder#m-statdefinition-2), [`StatEffectHolder.StatEffectHolder`](/mod/game-api/types/alta-player/stateffectholder#m-ctor-2), [`DeadStateSettings.statsToResetOnDeath`](/mod/game-api/types/alta-player/deadstatesettings#m-statstoresetondeath), [`DeadStateSettings.StatsToResetOnDeath`](/mod/game-api/types/alta-player/deadstatesettings#m-statstoresetondeath-2), [`SpiritStateSettings.hungerStat`](/mod/game-api/types/alta-player/spiritstatesettings#m-hungerstat), [`SpiritStateSettings.HungerStat`](/mod/game-api/types/alta-player/spiritstatesettings#m-hungerstat-2), [`StatThresholdValue.secondaryStatDefinition`](/mod/game-api/types/alta-player/statthresholdvalue#m-secondarystatdefinition), [`StatThresholdValue.statDefinition`](/mod/game-api/types/alta-player/statthresholdvalue#m-statdefinition), [`ToggleEnemyHealthBars.statDefinition`](/mod/game-api/types/alta-player/toggleenemyhealthbars#m-statdefinition), [`StatDefinitionConverter.GetFromString`](/mod/game-api/types/alta-utilities/statdefinitionconverter#m-getfromstring), [`ControlledStat.controlledDefinition`](/mod/game-api/types/alta-stats-effects/controlledstat#m-controlleddefinition), [`FullEmptyStatTrigger.targetStat`](/mod/game-api/types/alta-stats-effects/fullemptystattrigger#m-targetstat), [`HealthValidation.healthStat`](/mod/game-api/types/alta-stats-effects/healthvalidation#m-healthstat), [`HungerStat.fullnessStatDefinition`](/mod/game-api/types/alta-stats-effects/hungerstat#m-fullnessstatdefinition), [`HungerStat.healthDefinition`](/mod/game-api/types/alta-stats-effects/hungerstat#m-healthdefinition), [`HungerStat.recentDamageDefinition`](/mod/game-api/types/alta-stats-effects/hungerstat#m-recentdamagedefinition), [`IndirectStatModifierDefinition.targetStat`](/mod/game-api/types/alta-stats-effects/indirectstatmodifierdefinition#m-targetstat), [`IndirectStatModifierDefinition.TargetStat`](/mod/game-api/types/alta-stats-effects/indirectstatmodifierdefinition#m-targetstat-2), [`Instance.Apply`](/mod/game-api/types/alta-stats-effects/instance#m-apply), [`LevelStatModifier.targetStat`](/mod/game-api/types/alta-stats-effects/levelstatmodifier#m-targetstat), [`MaxStatDefinition.controlDefinitions`](/mod/game-api/types/alta-stats-effects/maxstatdefinition#m-controldefinitions), [`OnFullAffectTargetStatDefinition.affectedStatDefinition`](/mod/game-api/types/alta-stats-effects/onfullaffecttargetstatdefinition#m-affectedstatdefinition), [`PlayerStatManager.definitionsToKeepOnDeath`](/mod/game-api/types/alta-stats-effects/playerstatmanager#m-definitionstokeepondeath), [`PoisonStat.poisonedStatDefinition`](/mod/game-api/types/alta-stats-effects/poisonstat#m-poisonedstatdefinition), [`Stat.Definition`](/mod/game-api/types/alta-stats-effects/stat#m-definition), [`StatAffectingArea.targetStat`](/mod/game-api/types/alta-stats-effects/stataffectingarea#m-targetstat), [`StatBar.DebugNotchVisibility`](/mod/game-api/types/alta-stats-effects/statbar#m-debugnotchvisibility), [`StatBarBase.trackedStatDefinition`](/mod/game-api/types/alta-stats-effects/statbarbase#m-trackedstatdefinition), [`StatDefinitionApplication.definition`](/mod/game-api/types/alta-stats-effects/statdefinitionapplication#m-definition), [`StatDefinitionApplication.Definition`](/mod/game-api/types/alta-stats-effects/statdefinitionapplication#m-definition-2), [`StatDefinitionApplication.StatDefinitionApplication`](/mod/game-api/types/alta-stats-effects/statdefinitionapplication#m-ctor), [`StatManager.ApplyIndirectModifier`](/mod/game-api/types/alta-stats-effects/statmanager#m-applyindirectmodifier-2), [`StatManager.DeathReset`](/mod/game-api/types/alta-stats-effects/statmanager#m-deathreset), [`StatManager.GetStat`](/mod/game-api/types/alta-stats-effects/statmanager#m-getstat), [`StatManager.Stats`](/mod/game-api/types/alta-stats-effects/statmanager#m-stats), [`StatManagerSaveData.IndirectStatModifier.definition`](/mod/game-api/types/alta-stats-effects/statmanagersavedata-indirectstatmodifier#m-definition), [`StatManagerSaveData.TimedModifier.definition`](/mod/game-api/types/alta-stats-effects/statmanagersavedata-timedmodifier#m-definition), [`StatManagerSaveData1.IndirectStatModifier.definition`](/mod/game-api/types/alta-stats-effects/statmanagersavedata1-indirectstatmodifier#m-definition), [`StatManagerSaveData1.TimedModifier.definition`](/mod/game-api/types/alta-stats-effects/statmanagersavedata1-timedmodifier#m-definition), [`StatManagerSaveDataStat.definition`](/mod/game-api/types/alta-stats-effects/statmanagersavedatastat#m-definition), [`StatModifier.StatDefinition`](/mod/game-api/types/alta-stats-effects/statmodifier#m-statdefinition), [`StatModifier.StatModifier`](/mod/game-api/types/alta-stats-effects/statmodifier#m-ctor), [`StatModifierConstructor.targetStat`](/mod/game-api/types/alta-stats-effects/statmodifierconstructor#m-targetstat), [`StatTrigger.targetStat`](/mod/game-api/types/alta-stats-effects/stattrigger#m-targetstat), [`StatUpgradeTarget.baseStat`](/mod/game-api/types/alta-stats-effects/statupgradetarget#m-basestat), [`StatUpgradeTarget.targetStat`](/mod/game-api/types/alta-stats-effects/statupgradetarget#m-targetstat), [`DownedStateSettings.healthStat`](/mod/game-api/types/game-other-namespaces/downedstatesettings#m-healthstat), [`DownedStateSettings.HealthStat`](/mod/game-api/types/game-other-namespaces/downedstatesettings#m-healthstat-2) and 37 more.
