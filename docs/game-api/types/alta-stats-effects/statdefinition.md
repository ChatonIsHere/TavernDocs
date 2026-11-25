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

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`HashedGeneralValue<StatDefinition>`](/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`StatDefinitionConverter`](/game-api/types/alta-utilities/statdefinitionconverter), [`ControlledStat`](/game-api/types/alta-stats-effects/controlledstat), [`IncrementingStat`](/game-api/types/alta-stats-effects/incrementingstat), [`MaxStatDefinition`](/game-api/types/alta-stats-effects/maxstatdefinition), [`OnFullAffectTargetStatDefinition`](/game-api/types/alta-stats-effects/onfullaffecttargetstatdefinition), [`PlayerWeightStat`](/game-api/types/alta-stats-effects/playerweightstat), [`PoisonStat`](/game-api/types/alta-stats-effects/poisonstat), [`StatDefinition`](/game-api/types/alta-stats-effects/statdefinition), [`StatDefinition.Create`](/game-api/types/alta-stats-effects/statdefinition-create), [`ThresholdStat`](/game-api/types/alta-stats-effects/thresholdstat), [`CrippleStatDefinition`](/game-api/types/global-c-d/cripplestatdefinition)
- **Nested types** [`Create`](/game-api/types/alta-stats-effects/statdefinition-create), [`MinimumAndMaximumValues`](/game-api/types/alta-stats-effects/statdefinition-minimumandmaximumvalues)
- **Attributes** `TypeConverter`, `CreateAssetMenu`
- **Documented in** [Stats](/game-api/game-systems/stats#statdefinition), [Arguments and results](/game-api/console-and-utilities/arguments-and-results)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"StatDefinition()"}</code> |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-changetosync" /><code>{"private float changeToSync"}</code> |
| <Link id="m-commandminimumandmaximumvalues" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition-minimumandmaximumvalues">{"StatDefinition.MinimumAndMaximumValues"}</Link>{" commandMinimumAndMaximumValues"}</code> |
| <Link id="m-duration" /><code>{"private float duration"}</code> |
| <Link id="m-indirectmodificationcurve" /><code>{"private AnimationCurve indirectModificationCurve"}</code> |
| <Link id="m-isindirectusagemultiplier" /><code>{"private bool isIndirectUsageMultiplier"}</code> |
| <Link id="m-issaveserialized" /><code>{"private bool isSaveSerialized"}</code> |
| <Link id="m-majornotcheveryxnotches" /><code>{"private int majorNotchEveryXNotches"}</code> |
| <Link id="m-notchvalue" /><code>{"private float notchValue"}</code> |
| <Link id="m-particlescolor" /><code>{"private Color particlesColor"}</code> |
| <Link id="m-statname" /><code>{"private string statName"}</code> |

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
| <Link id="m-applied" /><code>{"virtual void Applied("}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager, "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | Virtual hook the `StatManager` calls for each stat after setting them up. Empty in the base; subclasses like hunger use it. |
| <Link id="m-checkserialize" /><code>{"virtual bool CheckSerialize(float oldValue, float newValue)"}</code> | Decides if a value change is big enough to send over the network. Default is a change greater than the asset's `changeToSync` (0.1). |
| <Link id="m-getnotchescount" /><code>{"virtual int GetNotchesCount(float statMaximum)"}</code> | How many notches the wrist band bar shows for a given maximum, from the asset's notch spacing. |
| <Link id="m-getnotchesposition" /><code>{"virtual void GetNotchesPosition(int notchesCount, float statMaximum, out float[] positions, out bool[] isMajor)"}</code> | Works out evenly spaced notch positions (0 to 1) and which of them are major notches. |
| <Link id="m-getstatonplayer" /><code><Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" GetStatOnPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Finds this stat on a player's health stat manager. Logs an error and returns null if missing. |
| <Link id="m-isvaluevalidforcommands" /><code>{"bool IsValueValidForCommands(float value)"}</code> | Checks a value against the optional min and max allowed when setting this stat by console command. |

## Used in

Members of other types that take, return or hold a `StatDefinition`:

[`StatEffect.statToAffect`](/game-api/types/alta-stats-effects/stateffect#m-stattoaffect), [`StatEffect.StatToAffect`](/game-api/types/alta-stats-effects/stateffect#m-stattoaffect-2), [`StatMultiplierEffect.statToAffect`](/game-api/types/alta-stats-effects/statmultipliereffect#m-stattoaffect), [`ImpactModifierStatAffect.targetStat`](/game-api/types/alta-items/impactmodifierstataffect#m-targetstat), [`CreateTargetOperation.Stat`](/game-api/types/alta-intelligence/createtargetoperation#m-stat), [`Phantom.materializedStatDefinition`](/game-api/types/alta-intelligence/phantom#m-materializedstatdefinition), [`Phantom.visibilityStatDefinition`](/game-api/types/alta-intelligence/phantom#m-visibilitystatdefinition), [`StatChangeHook.targetStat`](/game-api/types/alta-intelligence/statchangehook#m-targetstat), [`StatOperation.statDefinition`](/game-api/types/alta-intelligence/statoperation#m-statdefinition), [`StatValue.statDefinition`](/game-api/types/alta-intelligence/statvalue#m-statdefinition), [`StatValue.StatValue`](/game-api/types/alta-intelligence/statvalue#m-ctor), [`StatEffectHolder.statDefinition`](/game-api/types/alta-player/stateffectholder#m-statdefinition), [`StatEffectHolder.StatDefinition`](/game-api/types/alta-player/stateffectholder#m-statdefinition-2), [`StatEffectHolder.StatEffectHolder`](/game-api/types/alta-player/stateffectholder#m-ctor-2), [`DeadStateSettings.statsToResetOnDeath`](/game-api/types/alta-player/deadstatesettings#m-statstoresetondeath), [`DeadStateSettings.StatsToResetOnDeath`](/game-api/types/alta-player/deadstatesettings#m-statstoresetondeath-2), [`SpiritStateSettings.hungerStat`](/game-api/types/alta-player/spiritstatesettings#m-hungerstat), [`SpiritStateSettings.HungerStat`](/game-api/types/alta-player/spiritstatesettings#m-hungerstat-2), [`StatThresholdValue.secondaryStatDefinition`](/game-api/types/alta-player/statthresholdvalue#m-secondarystatdefinition), [`StatThresholdValue.statDefinition`](/game-api/types/alta-player/statthresholdvalue#m-statdefinition), [`ToggleEnemyHealthBars.statDefinition`](/game-api/types/alta-player/toggleenemyhealthbars#m-statdefinition), [`StatDefinitionConverter.GetFromString`](/game-api/types/alta-utilities/statdefinitionconverter#m-getfromstring), [`ControlledStat.controlledDefinition`](/game-api/types/alta-stats-effects/controlledstat#m-controlleddefinition), [`FullEmptyStatTrigger.targetStat`](/game-api/types/alta-stats-effects/fullemptystattrigger#m-targetstat), [`HealthValidation.healthStat`](/game-api/types/alta-stats-effects/healthvalidation#m-healthstat), [`HungerStat.fullnessStatDefinition`](/game-api/types/alta-stats-effects/hungerstat#m-fullnessstatdefinition), [`HungerStat.healthDefinition`](/game-api/types/alta-stats-effects/hungerstat#m-healthdefinition), [`HungerStat.recentDamageDefinition`](/game-api/types/alta-stats-effects/hungerstat#m-recentdamagedefinition), [`IndirectStatModifierDefinition.targetStat`](/game-api/types/alta-stats-effects/indirectstatmodifierdefinition#m-targetstat), [`IndirectStatModifierDefinition.TargetStat`](/game-api/types/alta-stats-effects/indirectstatmodifierdefinition#m-targetstat-2), [`Instance.Apply`](/game-api/types/alta-stats-effects/instance#m-apply), [`LevelStatModifier.targetStat`](/game-api/types/alta-stats-effects/levelstatmodifier#m-targetstat), [`MaxStatDefinition.controlDefinitions`](/game-api/types/alta-stats-effects/maxstatdefinition#m-controldefinitions), [`OnFullAffectTargetStatDefinition.affectedStatDefinition`](/game-api/types/alta-stats-effects/onfullaffecttargetstatdefinition#m-affectedstatdefinition), [`PlayerStatManager.definitionsToKeepOnDeath`](/game-api/types/alta-stats-effects/playerstatmanager#m-definitionstokeepondeath), [`PoisonStat.poisonedStatDefinition`](/game-api/types/alta-stats-effects/poisonstat#m-poisonedstatdefinition), [`Stat.Definition`](/game-api/types/alta-stats-effects/stat#m-definition), [`StatAffectingArea.targetStat`](/game-api/types/alta-stats-effects/stataffectingarea#m-targetstat), [`StatBar.DebugNotchVisibility`](/game-api/types/alta-stats-effects/statbar#m-debugnotchvisibility), [`StatBarBase.trackedStatDefinition`](/game-api/types/alta-stats-effects/statbarbase#m-trackedstatdefinition), [`StatDefinitionApplication.definition`](/game-api/types/alta-stats-effects/statdefinitionapplication#m-definition), [`StatDefinitionApplication.Definition`](/game-api/types/alta-stats-effects/statdefinitionapplication#m-definition-2), [`StatDefinitionApplication.StatDefinitionApplication`](/game-api/types/alta-stats-effects/statdefinitionapplication#m-ctor), [`StatManager.ApplyIndirectModifier`](/game-api/types/alta-stats-effects/statmanager#m-applyindirectmodifier-2), [`StatManager.DeathReset`](/game-api/types/alta-stats-effects/statmanager#m-deathreset), [`StatManager.GetStat`](/game-api/types/alta-stats-effects/statmanager#m-getstat), [`StatManager.Stats`](/game-api/types/alta-stats-effects/statmanager#m-stats), [`StatManagerSaveData.IndirectStatModifier.definition`](/game-api/types/alta-stats-effects/statmanagersavedata-indirectstatmodifier#m-definition), [`StatManagerSaveData.TimedModifier.definition`](/game-api/types/alta-stats-effects/statmanagersavedata-timedmodifier#m-definition), [`StatManagerSaveData1.IndirectStatModifier.definition`](/game-api/types/alta-stats-effects/statmanagersavedata1-indirectstatmodifier#m-definition), [`StatManagerSaveData1.TimedModifier.definition`](/game-api/types/alta-stats-effects/statmanagersavedata1-timedmodifier#m-definition), [`StatManagerSaveDataStat.definition`](/game-api/types/alta-stats-effects/statmanagersavedatastat#m-definition), [`StatModifier.StatDefinition`](/game-api/types/alta-stats-effects/statmodifier#m-statdefinition), [`StatModifier.StatModifier`](/game-api/types/alta-stats-effects/statmodifier#m-ctor), [`StatModifierConstructor.targetStat`](/game-api/types/alta-stats-effects/statmodifierconstructor#m-targetstat), [`StatTrigger.targetStat`](/game-api/types/alta-stats-effects/stattrigger#m-targetstat), [`StatUpgradeTarget.baseStat`](/game-api/types/alta-stats-effects/statupgradetarget#m-basestat), [`StatUpgradeTarget.targetStat`](/game-api/types/alta-stats-effects/statupgradetarget#m-targetstat), [`DownedStateSettings.healthStat`](/game-api/types/game-other-namespaces/downedstatesettings#m-healthstat), [`DownedStateSettings.HealthStat`](/game-api/types/game-other-namespaces/downedstatesettings#m-healthstat-2) and 37 more.
