---
title: "StatDefinition"
description: "A ScriptableObject asset. Get one with StatDefinition.All, StatDefinition.Get(hash), or from a stat's Definition."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatDefinition

A **class** in `Root.Township`, `Alta.StatSystem`.

A `ScriptableObject` asset. Get one with `StatDefinition.All`, `StatDefinition.Get(hash)`, or from a stat's `Definition`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`HashedGeneralValue<StatDefinition>`](/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`StatDefinitionConverter`](/game-api/types/alta-utilities/statdefinitionconverter), [`ControlledStat`](/game-api/types/alta-stats-effects/controlledstat), [`IncrementingStat`](/game-api/types/alta-stats-effects/incrementingstat), [`MaxStatDefinition`](/game-api/types/alta-stats-effects/maxstatdefinition), [`OnFullAffectTargetStatDefinition`](/game-api/types/alta-stats-effects/onfullaffecttargetstatdefinition), [`PlayerWeightStat`](/game-api/types/alta-stats-effects/playerweightstat), [`PoisonStat`](/game-api/types/alta-stats-effects/poisonstat), [`StatDefinition`](/game-api/types/alta-stats-effects/statdefinition), [`StatDefinition.Create`](/game-api/types/alta-stats-effects/statdefinition-create), [`ThresholdStat`](/game-api/types/alta-stats-effects/thresholdstat), [`CrippleStatDefinition`](/game-api/types/global-c-d/cripplestatdefinition)
- **Nested types** [`Create`](/game-api/types/alta-stats-effects/statdefinition-create), [`MinimumAndMaximumValues`](/game-api/types/alta-stats-effects/statdefinition-minimumandmaximumvalues)
- **Attributes** `TypeConverter`, `CreateAssetMenu`
- **Documented in** [Stats](/game-api/game-systems/stats#statdefinition), [Arguments and results](/game-api/console-and-utilities/arguments-and-results)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatDefinition()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-changetosync" /><code>{"private float changeToSync"}</code> |  |
| <Link id="m-commandminimumandmaximumvalues" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition-minimumandmaximumvalues">{"StatDefinition.MinimumAndMaximumValues"}</Link>{" commandMinimumAndMaximumValues"}</code> |  |
| <Link id="m-duration" /><code>{"private float duration"}</code> |  |
| <Link id="m-indirectmodificationcurve" /><code>{"private AnimationCurve indirectModificationCurve"}</code> |  |
| <Link id="m-isindirectusagemultiplier" /><code>{"private bool isIndirectUsageMultiplier"}</code> |  |
| <Link id="m-issaveserialized" /><code>{"private bool isSaveSerialized"}</code> |  |
| <Link id="m-majornotcheveryxnotches" /><code>{"private int majorNotchEveryXNotches"}</code> |  |
| <Link id="m-notchvalue" /><code>{"private float notchValue"}</code> |  |
| <Link id="m-particlescolor" /><code>{"private Color particlesColor"}</code> |  |
| <Link id="m-statname" /><code>{"private string statName"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-duration-2" /><code>{"float Duration { get; }"}</code> |  |
| <Link id="m-indirectmodificationcurve-2" /><code>{"AnimationCurve IndirectModificationCurve { get; }"}</code> |  |
| <Link id="m-isindirectusagemultiplier-2" /><code>{"bool IsIndirectUsageMultiplier { get; }"}</code> |  |
| <Link id="m-issaveserialized-2" /><code>{"bool IsSaveSerialized { get; }"}</code> |  |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> |  |
| <Link id="m-particlescolor-2" /><code>{"Color ParticlesColor { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applied" /><code>{"virtual void Applied("}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager, "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> |  |
| <Link id="m-checkserialize" /><code>{"virtual bool CheckSerialize(float oldValue, float newValue)"}</code> |  |
| <Link id="m-getnotchescount" /><code>{"virtual int GetNotchesCount(float statMaximum)"}</code> |  |
| <Link id="m-getnotchesposition" /><code>{"virtual void GetNotchesPosition(int notchesCount, float statMaximum, out float[] positions, out bool[] isMajor)"}</code> |  |
| <Link id="m-getstatonplayer" /><code><Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" GetStatOnPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-isvaluevalidforcommands" /><code>{"bool IsValueValidForCommands(float value)"}</code> |  |

## Used in

Members of other types that take, return or hold a `StatDefinition`:

[`StatEffect.statToAffect`](/game-api/types/alta-stats-effects/stateffect#m-stattoaffect), [`StatEffect.StatToAffect`](/game-api/types/alta-stats-effects/stateffect#m-stattoaffect-2), [`StatMultiplierEffect.statToAffect`](/game-api/types/alta-stats-effects/statmultipliereffect#m-stattoaffect), [`ImpactModifierStatAffect.targetStat`](/game-api/types/alta-items/impactmodifierstataffect#m-targetstat), [`CreateTargetOperation.Stat`](/game-api/types/alta-intelligence/createtargetoperation#m-stat), [`Phantom.materializedStatDefinition`](/game-api/types/alta-intelligence/phantom#m-materializedstatdefinition), [`Phantom.visibilityStatDefinition`](/game-api/types/alta-intelligence/phantom#m-visibilitystatdefinition), [`StatChangeHook.targetStat`](/game-api/types/alta-intelligence/statchangehook#m-targetstat), [`StatOperation.statDefinition`](/game-api/types/alta-intelligence/statoperation#m-statdefinition), [`StatValue.statDefinition`](/game-api/types/alta-intelligence/statvalue#m-statdefinition), [`StatValue.StatValue`](/game-api/types/alta-intelligence/statvalue#m-ctor), [`StatEffectHolder.statDefinition`](/game-api/types/alta-player/stateffectholder#m-statdefinition), [`StatEffectHolder.StatDefinition`](/game-api/types/alta-player/stateffectholder#m-statdefinition-2), [`StatEffectHolder.StatEffectHolder`](/game-api/types/alta-player/stateffectholder#m-ctor-2), [`DeadStateSettings.statsToResetOnDeath`](/game-api/types/alta-player/deadstatesettings#m-statstoresetondeath), [`DeadStateSettings.StatsToResetOnDeath`](/game-api/types/alta-player/deadstatesettings#m-statstoresetondeath-2), [`SpiritStateSettings.hungerStat`](/game-api/types/alta-player/spiritstatesettings#m-hungerstat), [`SpiritStateSettings.HungerStat`](/game-api/types/alta-player/spiritstatesettings#m-hungerstat-2), [`StatThresholdValue.secondaryStatDefinition`](/game-api/types/alta-player/statthresholdvalue#m-secondarystatdefinition), [`StatThresholdValue.statDefinition`](/game-api/types/alta-player/statthresholdvalue#m-statdefinition), [`ToggleEnemyHealthBars.statDefinition`](/game-api/types/alta-player/toggleenemyhealthbars#m-statdefinition), [`StatDefinitionConverter.GetFromString`](/game-api/types/alta-utilities/statdefinitionconverter#m-getfromstring), [`ControlledStat.controlledDefinition`](/game-api/types/alta-stats-effects/controlledstat#m-controlleddefinition), [`FullEmptyStatTrigger.targetStat`](/game-api/types/alta-stats-effects/fullemptystattrigger#m-targetstat), [`HealthValidation.healthStat`](/game-api/types/alta-stats-effects/healthvalidation#m-healthstat), [`HungerStat.fullnessStatDefinition`](/game-api/types/alta-stats-effects/hungerstat#m-fullnessstatdefinition), [`HungerStat.healthDefinition`](/game-api/types/alta-stats-effects/hungerstat#m-healthdefinition), [`HungerStat.recentDamageDefinition`](/game-api/types/alta-stats-effects/hungerstat#m-recentdamagedefinition), [`IndirectStatModifierDefinition.targetStat`](/game-api/types/alta-stats-effects/indirectstatmodifierdefinition#m-targetstat), [`IndirectStatModifierDefinition.TargetStat`](/game-api/types/alta-stats-effects/indirectstatmodifierdefinition#m-targetstat-2), [`Instance.Apply`](/game-api/types/alta-stats-effects/instance#m-apply), [`LevelStatModifier.targetStat`](/game-api/types/alta-stats-effects/levelstatmodifier#m-targetstat), [`MaxStatDefinition.controlDefinitions`](/game-api/types/alta-stats-effects/maxstatdefinition#m-controldefinitions), [`OnFullAffectTargetStatDefinition.affectedStatDefinition`](/game-api/types/alta-stats-effects/onfullaffecttargetstatdefinition#m-affectedstatdefinition), [`PlayerStatManager.definitionsToKeepOnDeath`](/game-api/types/alta-stats-effects/playerstatmanager#m-definitionstokeepondeath), [`PoisonStat.poisonedStatDefinition`](/game-api/types/alta-stats-effects/poisonstat#m-poisonedstatdefinition), [`Stat.Definition`](/game-api/types/alta-stats-effects/stat#m-definition), [`StatAffectingArea.targetStat`](/game-api/types/alta-stats-effects/stataffectingarea#m-targetstat), [`StatBar.DebugNotchVisibility`](/game-api/types/alta-stats-effects/statbar#m-debugnotchvisibility), [`StatBarBase.trackedStatDefinition`](/game-api/types/alta-stats-effects/statbarbase#m-trackedstatdefinition), [`StatDefinitionApplication.definition`](/game-api/types/alta-stats-effects/statdefinitionapplication#m-definition), [`StatDefinitionApplication.Definition`](/game-api/types/alta-stats-effects/statdefinitionapplication#m-definition-2), [`StatDefinitionApplication.StatDefinitionApplication`](/game-api/types/alta-stats-effects/statdefinitionapplication#m-ctor), [`StatManager.ApplyIndirectModifier`](/game-api/types/alta-stats-effects/statmanager#m-applyindirectmodifier-2), [`StatManager.DeathReset`](/game-api/types/alta-stats-effects/statmanager#m-deathreset), [`StatManager.GetStat`](/game-api/types/alta-stats-effects/statmanager#m-getstat), [`StatManager.Stats`](/game-api/types/alta-stats-effects/statmanager#m-stats), [`StatManagerSaveData.IndirectStatModifier.definition`](/game-api/types/alta-stats-effects/statmanagersavedata-indirectstatmodifier#m-definition), [`StatManagerSaveData.TimedModifier.definition`](/game-api/types/alta-stats-effects/statmanagersavedata-timedmodifier#m-definition), [`StatManagerSaveData1.IndirectStatModifier.definition`](/game-api/types/alta-stats-effects/statmanagersavedata1-indirectstatmodifier#m-definition), [`StatManagerSaveData1.TimedModifier.definition`](/game-api/types/alta-stats-effects/statmanagersavedata1-timedmodifier#m-definition), [`StatManagerSaveDataStat.definition`](/game-api/types/alta-stats-effects/statmanagersavedatastat#m-definition), [`StatModifier.StatDefinition`](/game-api/types/alta-stats-effects/statmodifier#m-statdefinition), [`StatModifier.StatModifier`](/game-api/types/alta-stats-effects/statmodifier#m-ctor), [`StatModifierConstructor.targetStat`](/game-api/types/alta-stats-effects/statmodifierconstructor#m-targetstat), [`StatTrigger.targetStat`](/game-api/types/alta-stats-effects/stattrigger#m-targetstat), [`StatUpgradeTarget.baseStat`](/game-api/types/alta-stats-effects/statupgradetarget#m-basestat), [`StatUpgradeTarget.targetStat`](/game-api/types/alta-stats-effects/statupgradetarget#m-targetstat), [`DownedStateSettings.healthStat`](/game-api/types/game-other-namespaces/downedstatesettings#m-healthstat), [`DownedStateSettings.HealthStat`](/game-api/types/game-other-namespaces/downedstatesettings#m-healthstat-2) and 37 more.
