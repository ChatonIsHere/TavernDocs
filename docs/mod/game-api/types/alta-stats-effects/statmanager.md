---
title: "StatManager"
description: "Holds an entity's stats (health, hunger, speed and so on), ticks them on the server, saves them, and syncs changed stats to clients."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatManager

A **class** in `Root.Township`, `Alta.StatSystem`.

Holds an entity's stats (health, hunger, speed and so on), ticks them on the server, saves them, and syncs changed stats to clients. A component on players and creatures.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), `IEnumerable`, [`ISavable<StatManagerSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<StatManagerSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`PlayerStatManager`](/mod/game-api/types/alta-stats-effects/playerstatmanager), [`StatManagerSaveData`](/mod/game-api/types/alta-stats-effects/statmanagersavedata)
- **Documented in** [Stats](/mod/game-api/game-systems/stats#statmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatManager()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-appliedmodifiers" /><code>{"private readonly List<"}<Link to="/mod/game-api/types/alta-stats-effects/timedstatmodifier">{"TimedStatModifier"}</Link>{"> appliedModifiers"}</code> | Timed modifiers currently on the stats; saved, and cancelled on `DeathReset`. |
| <Link id="m-definitionapplications" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-stats-effects/statdefinitionapplication">{"StatDefinitionApplication"}</Link>{"> definitionApplications"}</code> | The stats this manager has, with their defaults and ranges; backing field for `DefinitionApplications`. |
| <Link id="m-entry" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" entry"}</code> | Timeline entry for the repeating `Tick`. |
| <Link id="m-incrementalticktime" /><code>{"private float incrementalTickTime"}</code> | Seconds between incremental ticks; 0 turns them off. |
| <Link id="m-incrementalupdateentry" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" incrementalUpdateEntry"}</code> | Timeline entry for the repeating `TickIncremental`. |
| <Link id="m-indirectmodifiers" /><code>{"private readonly Dictionary<"}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{", "}<Link to="/mod/game-api/types/alta-stats-effects/indirectstatmodifier">{"IndirectStatModifier"}</Link>{"> indirectModifiers"}</code> | Indirect modifier stack for each stat that has one; saved and loaded with the manager. |
| <Link id="m-syncfull" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncFull"}</code> | Method sync for the full stat message. |
| <Link id="m-syncstat" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncStat"}</code> | Method sync for the single stat message. |
| <Link id="m-ticktime" /><code>{"private float tickTime"}</code> | Seconds between `Tick` calls (default 1); 0 turns ticking off. Server only. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-definitionapplications-2" /><code>{"List<"}<Link to="/mod/game-api/types/alta-stats-effects/statdefinitionapplication">{"StatDefinitionApplication"}</Link>{"> DefinitionApplications { get; }"}</code> | The stats this manager has, as set up on the prefab. Their order is the sync index. |
| <Link id="m-incrementalticktime-2" /><code>{"float IncrementalTickTime { get; }"}</code> | Seconds between incremental ticks for incrementing stats; 0 turns them off. |
| <Link id="m-stats" /><code>{"Dictionary<"}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{", "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{"> Stats { get; }"}</code> | All stats on this manager, keyed by definition. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-reset" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{"> Reset"}</code> | Raised after `DeathReset` runs. |
| <Link id="m-updated" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{"> Updated"}</code> | Raised on each tick. |
| <Link id="m-updatedincremental" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{"> UpdatedIncremental"}</code> | Raised on each incremental tick. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applyindirectmodifier" /><code>{"void ApplyIndirectModifier(string statName, "}<Link to="/mod/game-api/types/alta-stats-effects/indirectmodifier">{"IndirectModifier"}</Link>{" modifier)"}</code> | Adds an indirect modifier to a stat (found by stat, definition or name). Indirect modifiers are saved. |
| <Link id="m-applyindirectmodifier-2" /><code>{"void ApplyIndirectModifier("}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" statDefinition, "}<Link to="/mod/game-api/types/alta-stats-effects/indirectmodifier">{"IndirectModifier"}</Link>{" modifier)"}</code> | Adds an indirect modifier to a stat (found by stat, definition or name). Indirect modifiers are saved. |
| <Link id="m-applyindirectmodifier-3" /><code>{"void ApplyIndirectModifier("}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat, "}<Link to="/mod/game-api/types/alta-stats-effects/indirectmodifier">{"IndirectModifier"}</Link>{" modifier)"}</code> | Adds an indirect modifier to a stat (found by stat, definition or name). Indirect modifiers are saved. |
| <Link id="m-applytimedmodifier" /><code><Link to="/mod/game-api/types/alta-stats-effects/timedstatmodifier">{"TimedStatModifier"}</Link>{" ApplyTimedModifier("}<Link to="/mod/game-api/types/alta-stats-effects/statmodifier">{"StatModifier"}</Link>{" modifier, float duration)"}</code> | Applies a stat modifier now and removes it after the duration. Returns the timed modifier; it is saved with the entity. |
| <Link id="m-deathreset" /><code>{"void DeathReset(IEnumerable<"}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{"> statsToReset, IEnumerable<"}<Link to="/mod/game-api/types/alta-player/statthresholdvalue">{"StatThresholdValue"}</Link>{"> statsToModify)"}</code> | On death: resets some stats, sets others to threshold values, resets hunger if the server setting says so, and cancels timed modifiers. |
| <Link id="m-getenumerator" /><code>{"IEnumerator GetEnumerator() (iterator)"}</code> | Yields a single item, the whole `Stats.Values` collection, not each stat. Iterate `Stats` instead. |
| <Link id="m-getstat" /><code>{"bool GetStat("}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" definition, out "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | Finds a stat by definition, or by definition name ignoring case. Returns false if it is not on this manager. |
| <Link id="m-getstat-2" /><code>{"bool GetStat(string name, out "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | Finds a stat by definition, or by definition name ignoring case. Returns false if it is not on this manager. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up full and single stat sync. On the server, starts the tick timers and syncs each stat when it changes. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: forces every stat to push its value once. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends every stat to a newly connected player. |
| <Link id="m-tick" /><code>{"protected virtual void Tick()"}</code> | Server: runs every tick time (1 second by default). Raises `Updated`, then raises external change events for changed stats. |

<details>
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"private void Add("}<Link to="/mod/game-api/types/alta-stats-effects/statdefinitionapplication">{"StatDefinitionApplication"}</Link>{" application)"}</code> | Creates a `Stat` from a stat definition application and stores it in `Stats`; called for each entry in `Awake`. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Creates every stat from `definitionApplications`. On the server it then calls each definition's `Applied`. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: copies each definition's name onto its application entry. |
| <Link id="m-removetimedmodifier" /><code>{"private void RemoveTimedModifier("}<Link to="/mod/game-api/types/alta-stats-effects/timedstatmodifier">{"TimedStatModifier"}</Link>{" modifier)"}</code> | Removes a timed modifier from `appliedModifiers` when it ends. |
| <Link id="m-scenedestroy" /><code>{"private void SceneDestroy("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Cancels the tick timers when the entity is destroyed. |
| <Link id="m-syncfull-2" /><code>{"private void SyncFull("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Sends every stat with its full range and modifiers; sent to each player when they connect. Rejects the message if a client sends it. |
| <Link id="m-syncsinglestat" /><code>{"private void SyncSingleStat("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int definitionIndex)"}</code> | Sends one stat, by its index in `definitionApplications`, with its full data. Rejects the message if a client sends it. |
| <Link id="m-syncstat-2" /><code>{"private void SyncStat("}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | Server: listens to each stat's `NetworkChanged` and sends that stat to the chunk. |
| <Link id="m-tickincremental" /><code>{"private void TickIncremental()"}</code> | Runs every `incrementalTickTime`: raises `UpdatedIncremental` and fires the external change events of changed incrementing stats. |

</details>

## Used in

Members of other types that take, return or hold a `StatManager`:

[`BurnEffect.Burn`](/mod/game-api/types/alta-stats-effects/burneffect#m-burn), [`BurnEffect.burningManager`](/mod/game-api/types/alta-stats-effects/burneffect#m-burningmanager), [`EffectHandler.statManager`](/mod/game-api/types/alta-stats-effects/effecthandler#m-statmanager), [`EffectHandler.StatManager`](/mod/game-api/types/alta-stats-effects/effecthandler#m-statmanager-2), [`HeatManager.BurnUpdate`](/mod/game-api/types/alta-stats-effects/heatmanager#m-burnupdate), [`HeatManager.OnReset`](/mod/game-api/types/alta-stats-effects/heatmanager#m-onreset), [`FixedImpactor.damageManager`](/mod/game-api/types/alta-items/fixedimpactor#m-damagemanager), [`ImpactModifierStatAffect.AffectStatManager`](/mod/game-api/types/alta-items/impactmodifierstataffect#m-affectstatmanager), [`ITarget.StatManager`](/mod/game-api/types/alta-intelligence/itarget#m-statmanager), [`Target.StatManager`](/mod/game-api/types/alta-intelligence/target#m-statmanager), [`ToggleEnemyHealthBars.CheckEnemyNeedsHealthBar`](/mod/game-api/types/alta-player/toggleenemyhealthbars#m-checkenemyneedshealthbar), [`BurnStat.Applied`](/mod/game-api/types/alta-stats-effects/burnstat#m-applied), [`ControlledStat.Applied`](/mod/game-api/types/alta-stats-effects/controlledstat#m-applied), [`FullEmptyStatTrigger.targetManager`](/mod/game-api/types/alta-stats-effects/fullemptystattrigger#m-targetmanager), [`FullEmptyUpdateModifier.Initialize`](/mod/game-api/types/alta-stats-effects/fullemptyupdatemodifier#m-initialize), [`FullEmptyUpdateModifier.TickDown`](/mod/game-api/types/alta-stats-effects/fullemptyupdatemodifier#m-tickdown), [`FullnessStat.Applied`](/mod/game-api/types/alta-stats-effects/fullnessstat#m-applied), [`HungerStat.Applied`](/mod/game-api/types/alta-stats-effects/hungerstat#m-applied), [`HungerStat.GetSets`](/mod/game-api/types/alta-stats-effects/hungerstat#m-getsets), [`IncrementingStat.Applied`](/mod/game-api/types/alta-stats-effects/incrementingstat#m-applied), [`IndirectStatModifier.Clean`](/mod/game-api/types/alta-stats-effects/indirectstatmodifier#m-clean), [`IndirectStatModifier.IndirectStatModifier`](/mod/game-api/types/alta-stats-effects/indirectstatmodifier#m-ctor), [`IndirectStatModifier.manager`](/mod/game-api/types/alta-stats-effects/indirectstatmodifier#m-manager), [`IndirectStatModifier.Update`](/mod/game-api/types/alta-stats-effects/indirectstatmodifier#m-update), [`LevelStatModifier.targetManager`](/mod/game-api/types/alta-stats-effects/levelstatmodifier#m-targetmanager), [`MaxStatDefinition.Applied`](/mod/game-api/types/alta-stats-effects/maxstatdefinition#m-applied), [`MaxStatDefinition.endOfFrameBuffer`](/mod/game-api/types/alta-stats-effects/maxstatdefinition#m-endofframebuffer), [`MaxStatDefinition.IsValidForManager`](/mod/game-api/types/alta-stats-effects/maxstatdefinition#m-isvalidformanager), [`MaxStatDefinition.OnReset`](/mod/game-api/types/alta-stats-effects/maxstatdefinition#m-onreset), [`MaxStatDefinition.UpdateManager`](/mod/game-api/types/alta-stats-effects/maxstatdefinition#m-updatemanager), [`Modifier.Initialize`](/mod/game-api/types/alta-stats-effects/modifier#m-initialize), [`Modifier.Manager`](/mod/game-api/types/alta-stats-effects/modifier#m-manager), [`ModifierSet.Manager`](/mod/game-api/types/alta-stats-effects/modifierset#m-manager), [`ModifierSet.ModifierSet`](/mod/game-api/types/alta-stats-effects/modifierset#m-ctor), [`OnFullAffectTargetStatDefinition.Applied`](/mod/game-api/types/alta-stats-effects/onfullaffecttargetstatdefinition#m-applied), [`PlayerWeightStat.Applied`](/mod/game-api/types/alta-stats-effects/playerweightstat#m-applied), [`PoisonStat.Applied`](/mod/game-api/types/alta-stats-effects/poisonstat#m-applied), [`StatAffectAccessor.IsAffecting`](/mod/game-api/types/alta-stats-effects/stataffectaccessor#m-isaffecting), [`StatAffectAccessor.manager`](/mod/game-api/types/alta-stats-effects/stataffectaccessor#m-manager), [`StatAppliedHandler.BeginInvoke`](/mod/game-api/types/alta-stats-effects/statappliedhandler#m-begininvoke), [`StatAppliedHandler.Invoke`](/mod/game-api/types/alta-stats-effects/statappliedhandler#m-invoke), [`StatBarVisibilityGroup.StatManager`](/mod/game-api/types/alta-stats-effects/statbarvisibilitygroup#m-statmanager), [`StatDefinition.Applied`](/mod/game-api/types/alta-stats-effects/statdefinition#m-applied), [`StatModifier.Initialize`](/mod/game-api/types/alta-stats-effects/statmodifier#m-initialize), [`StatTrigger.targetManager`](/mod/game-api/types/alta-stats-effects/stattrigger#m-targetmanager), [`ThresholdStat.Applied`](/mod/game-api/types/alta-stats-effects/thresholdstat#m-applied), [`ThresholdStat.GetSets`](/mod/game-api/types/alta-stats-effects/thresholdstat#m-getsets), [`ThresholdStat.ThresholdLevel.GetSet`](/mod/game-api/types/alta-stats-effects/thresholdstat-thresholdlevel#m-getset), [`UpdateModifier.Update`](/mod/game-api/types/alta-stats-effects/updatemodifier#m-update), [`UpdateModifier.UpdateModifier`](/mod/game-api/types/alta-stats-effects/updatemodifier#m-ctor), [`ConsumptionManager.statManager`](/mod/game-api/types/global-c-d/consumptionmanager#m-statmanager), [`CrippleStatDefinition.Applied`](/mod/game-api/types/global-c-d/cripplestatdefinition#m-applied), [`HealthObject.statManager`](/mod/game-api/types/global-e-h/healthobject#m-statmanager), [`HealthObject.StatManager`](/mod/game-api/types/global-e-h/healthobject#m-statmanager-2), [`PlayerEffectManager.statManager`](/mod/game-api/types/global-p/playereffectmanager#m-statmanager), [`PlayerHealthVisualEffectsSettings.SetupNightmare`](/mod/game-api/types/global-p/playerhealthvisualeffectssettings#m-setupnightmare), [`PlayerHealthVisualEffectsSettings.NightmareEffectController.SetupNightmare`](/mod/game-api/types/global-p/playerhealthvisualeffectssettings-nightmareeffectcontroller#m-setupnightmare).
