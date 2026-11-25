---
title: "StatManager"
description: "Instance, one per body. PlayerStatManager is a subclass that also lists stats to keep on death."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatManager

A **class** in `Root.Township`, `Alta.StatSystem`.

Instance, one per body. `PlayerStatManager` is a subclass that also lists stats to keep on death.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), `IEnumerable`, [`ISavable<StatManagerSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<StatManagerSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`PlayerStatManager`](/game-api/types/alta-stats-effects/playerstatmanager), [`StatManagerSaveData`](/game-api/types/alta-stats-effects/statmanagersavedata)
- **Documented in** [Stats](/game-api/game-systems/stats#statmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatManager()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-appliedmodifiers" /><code>{"private readonly List<"}<Link to="/game-api/types/alta-stats-effects/timedstatmodifier">{"TimedStatModifier"}</Link>{"> appliedModifiers"}</code> |  |
| <Link id="m-definitionapplications" /><code>{"private List<"}<Link to="/game-api/types/alta-stats-effects/statdefinitionapplication">{"StatDefinitionApplication"}</Link>{"> definitionApplications"}</code> |  |
| <Link id="m-entry" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" entry"}</code> |  |
| <Link id="m-incrementalticktime" /><code>{"private float incrementalTickTime"}</code> |  |
| <Link id="m-incrementalupdateentry" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" incrementalUpdateEntry"}</code> |  |
| <Link id="m-indirectmodifiers" /><code>{"private readonly Dictionary<"}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{", "}<Link to="/game-api/types/alta-stats-effects/indirectstatmodifier">{"IndirectStatModifier"}</Link>{"> indirectModifiers"}</code> |  |
| <Link id="m-syncfull" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncFull"}</code> |  |
| <Link id="m-syncstat" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncStat"}</code> |  |
| <Link id="m-ticktime" /><code>{"private float tickTime"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-definitionapplications-2" /><code>{"List<"}<Link to="/game-api/types/alta-stats-effects/statdefinitionapplication">{"StatDefinitionApplication"}</Link>{"> DefinitionApplications { get; }"}</code> |  |
| <Link id="m-incrementalticktime-2" /><code>{"float IncrementalTickTime { get; }"}</code> |  |
| <Link id="m-stats" /><code>{"Dictionary<"}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{", "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{"> Stats { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-reset" /><code>{"event Action<"}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{"> Reset"}</code> |  |
| <Link id="m-updated" /><code>{"event Action<"}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{"> Updated"}</code> |  |
| <Link id="m-updatedincremental" /><code>{"event Action<"}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{"> UpdatedIncremental"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applyindirectmodifier" /><code>{"void ApplyIndirectModifier(string statName, "}<Link to="/game-api/types/alta-stats-effects/indirectmodifier">{"IndirectModifier"}</Link>{" modifier)"}</code> |  |
| <Link id="m-applyindirectmodifier-2" /><code>{"void ApplyIndirectModifier("}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" statDefinition, "}<Link to="/game-api/types/alta-stats-effects/indirectmodifier">{"IndirectModifier"}</Link>{" modifier)"}</code> |  |
| <Link id="m-applyindirectmodifier-3" /><code>{"void ApplyIndirectModifier("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat, "}<Link to="/game-api/types/alta-stats-effects/indirectmodifier">{"IndirectModifier"}</Link>{" modifier)"}</code> |  |
| <Link id="m-applytimedmodifier" /><code><Link to="/game-api/types/alta-stats-effects/timedstatmodifier">{"TimedStatModifier"}</Link>{" ApplyTimedModifier("}<Link to="/game-api/types/alta-stats-effects/statmodifier">{"StatModifier"}</Link>{" modifier, float duration)"}</code> |  |
| <Link id="m-deathreset" /><code>{"void DeathReset(IEnumerable<"}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{"> statsToReset, IEnumerable<"}<Link to="/game-api/types/alta-player/statthresholdvalue">{"StatThresholdValue"}</Link>{"> statsToModify)"}</code> |  |
| <Link id="m-getenumerator" /><code>{"IEnumerator GetEnumerator() (iterator)"}</code> |  |
| <Link id="m-getstat" /><code>{"bool GetStat("}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" definition, out "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> |  |
| <Link id="m-getstat-2" /><code>{"bool GetStat(string name, out "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-add" /><code>{"private void Add("}<Link to="/game-api/types/alta-stats-effects/statdefinitionapplication">{"StatDefinitionApplication"}</Link>{" application)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |
| <Link id="m-removetimedmodifier" /><code>{"private void RemoveTimedModifier("}<Link to="/game-api/types/alta-stats-effects/timedstatmodifier">{"TimedStatModifier"}</Link>{" modifier)"}</code> |  |
| <Link id="m-scenedestroy" /><code>{"private void SceneDestroy("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-syncfull-2" /><code>{"private void SyncFull("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncsinglestat" /><code>{"private void SyncSingleStat("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int definitionIndex)"}</code> |  |
| <Link id="m-syncstat-2" /><code>{"private void SyncStat("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> |  |
| <Link id="m-tick" /><code>{"protected virtual void Tick()"}</code> |  |
| <Link id="m-tickincremental" /><code>{"private void TickIncremental()"}</code> |  |

## Used in

Members of other types that take, return or hold a `StatManager`:

[`BurnEffect.Burn`](/game-api/types/alta-stats-effects/burneffect#m-burn), [`BurnEffect.burningManager`](/game-api/types/alta-stats-effects/burneffect#m-burningmanager), [`EffectHandler.statManager`](/game-api/types/alta-stats-effects/effecthandler#m-statmanager), [`EffectHandler.StatManager`](/game-api/types/alta-stats-effects/effecthandler#m-statmanager-2), [`HeatManager.BurnUpdate`](/game-api/types/alta-stats-effects/heatmanager#m-burnupdate), [`HeatManager.OnReset`](/game-api/types/alta-stats-effects/heatmanager#m-onreset), [`FixedImpactor.damageManager`](/game-api/types/alta-items/fixedimpactor#m-damagemanager), [`ImpactModifierStatAffect.AffectStatManager`](/game-api/types/alta-items/impactmodifierstataffect#m-affectstatmanager), [`ITarget.StatManager`](/game-api/types/alta-intelligence/itarget#m-statmanager), [`Target.StatManager`](/game-api/types/alta-intelligence/target#m-statmanager), [`ToggleEnemyHealthBars.CheckEnemyNeedsHealthBar`](/game-api/types/alta-player/toggleenemyhealthbars#m-checkenemyneedshealthbar), [`BurnStat.Applied`](/game-api/types/alta-stats-effects/burnstat#m-applied), [`ControlledStat.Applied`](/game-api/types/alta-stats-effects/controlledstat#m-applied), [`FullEmptyStatTrigger.targetManager`](/game-api/types/alta-stats-effects/fullemptystattrigger#m-targetmanager), [`FullEmptyUpdateModifier.Initialize`](/game-api/types/alta-stats-effects/fullemptyupdatemodifier#m-initialize), [`FullEmptyUpdateModifier.TickDown`](/game-api/types/alta-stats-effects/fullemptyupdatemodifier#m-tickdown), [`FullnessStat.Applied`](/game-api/types/alta-stats-effects/fullnessstat#m-applied), [`HungerStat.Applied`](/game-api/types/alta-stats-effects/hungerstat#m-applied), [`HungerStat.GetSets`](/game-api/types/alta-stats-effects/hungerstat#m-getsets), [`IncrementingStat.Applied`](/game-api/types/alta-stats-effects/incrementingstat#m-applied), [`IndirectStatModifier.Clean`](/game-api/types/alta-stats-effects/indirectstatmodifier#m-clean), [`IndirectStatModifier.IndirectStatModifier`](/game-api/types/alta-stats-effects/indirectstatmodifier#m-ctor), [`IndirectStatModifier.manager`](/game-api/types/alta-stats-effects/indirectstatmodifier#m-manager), [`IndirectStatModifier.Update`](/game-api/types/alta-stats-effects/indirectstatmodifier#m-update), [`LevelStatModifier.targetManager`](/game-api/types/alta-stats-effects/levelstatmodifier#m-targetmanager), [`MaxStatDefinition.Applied`](/game-api/types/alta-stats-effects/maxstatdefinition#m-applied), [`MaxStatDefinition.endOfFrameBuffer`](/game-api/types/alta-stats-effects/maxstatdefinition#m-endofframebuffer), [`MaxStatDefinition.IsValidForManager`](/game-api/types/alta-stats-effects/maxstatdefinition#m-isvalidformanager), [`MaxStatDefinition.OnReset`](/game-api/types/alta-stats-effects/maxstatdefinition#m-onreset), [`MaxStatDefinition.UpdateManager`](/game-api/types/alta-stats-effects/maxstatdefinition#m-updatemanager), [`Modifier.Initialize`](/game-api/types/alta-stats-effects/modifier#m-initialize), [`Modifier.Manager`](/game-api/types/alta-stats-effects/modifier#m-manager), [`ModifierSet.Manager`](/game-api/types/alta-stats-effects/modifierset#m-manager), [`ModifierSet.ModifierSet`](/game-api/types/alta-stats-effects/modifierset#m-ctor), [`OnFullAffectTargetStatDefinition.Applied`](/game-api/types/alta-stats-effects/onfullaffecttargetstatdefinition#m-applied), [`PlayerWeightStat.Applied`](/game-api/types/alta-stats-effects/playerweightstat#m-applied), [`PoisonStat.Applied`](/game-api/types/alta-stats-effects/poisonstat#m-applied), [`StatAffectAccessor.IsAffecting`](/game-api/types/alta-stats-effects/stataffectaccessor#m-isaffecting), [`StatAffectAccessor.manager`](/game-api/types/alta-stats-effects/stataffectaccessor#m-manager), [`StatAppliedHandler.BeginInvoke`](/game-api/types/alta-stats-effects/statappliedhandler#m-begininvoke), [`StatAppliedHandler.Invoke`](/game-api/types/alta-stats-effects/statappliedhandler#m-invoke), [`StatBarVisibilityGroup.StatManager`](/game-api/types/alta-stats-effects/statbarvisibilitygroup#m-statmanager), [`StatDefinition.Applied`](/game-api/types/alta-stats-effects/statdefinition#m-applied), [`StatModifier.Initialize`](/game-api/types/alta-stats-effects/statmodifier#m-initialize), [`StatTrigger.targetManager`](/game-api/types/alta-stats-effects/stattrigger#m-targetmanager), [`ThresholdStat.Applied`](/game-api/types/alta-stats-effects/thresholdstat#m-applied), [`ThresholdStat.GetSets`](/game-api/types/alta-stats-effects/thresholdstat#m-getsets), [`ThresholdStat.ThresholdLevel.GetSet`](/game-api/types/alta-stats-effects/thresholdstat-thresholdlevel#m-getset), [`UpdateModifier.Update`](/game-api/types/alta-stats-effects/updatemodifier#m-update), [`UpdateModifier.UpdateModifier`](/game-api/types/alta-stats-effects/updatemodifier#m-ctor), [`ConsumptionManager.statManager`](/game-api/types/global-c-d/consumptionmanager#m-statmanager), [`CrippleStatDefinition.Applied`](/game-api/types/global-c-d/cripplestatdefinition#m-applied), [`HealthObject.statManager`](/game-api/types/global-e-h/healthobject#m-statmanager), [`HealthObject.StatManager`](/game-api/types/global-e-h/healthobject#m-statmanager-2), [`PlayerEffectManager.statManager`](/game-api/types/global-p/playereffectmanager#m-statmanager), [`PlayerHealthVisualEffectsSettings.SetupNightmare`](/game-api/types/global-p/playerhealthvisualeffectssettings#m-setupnightmare), [`PlayerHealthVisualEffectsSettings.NightmareEffectController.SetupNightmare`](/game-api/types/global-p/playerhealthvisualeffectssettings-nightmareeffectcontroller#m-setupnightmare).
