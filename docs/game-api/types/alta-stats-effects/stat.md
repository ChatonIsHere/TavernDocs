---
title: "Stat"
description: "One stat's live value on a StatManager."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Stat

A **class** in `Root.Township`, `Alta.StatSystem`.

One stat's live value on a `StatManager`. The value is (base plus extras, clamped to min and max) times the multipliers. Changes raise `Changed` and, past the definition's threshold, `NetworkChanged`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Attributes** `TypeConverter`
- **Documented in** [Stats](/game-api/game-systems/stats#stat)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Stat(float value, float minimum, float maximum)"}</code> |
| <Link id="m-ctor-2" /><code>{"Stat("}<Link to="/game-api/types/alta-stats-effects/statdefinitionapplication">{"StatDefinitionApplication"}</Link>{" application)"}</code> |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-baseflat" /><code>{"private float baseFlat"}</code> |
| <Link id="m-buffmultiplier" /><code>{"private float buffMultiplier"}</code> |
| <Link id="m-extraflat" /><code>{"private float extraFlat"}</code> |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> |
| <Link id="m-lastnetworkedvalue" /><code>{"private float lastNetworkedValue"}</code> |
| <Link id="m-maximum" /><code>{"private float maximum"}</code> |
| <Link id="m-minimum" /><code>{"private float minimum"}</code> |
| <Link id="m-nonbuffextra" /><code>{"private float nonBuffExtra"}</code> |
| <Link id="m-nonbuffmultiplier" /><code>{"private float nonBuffMultiplier"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-application" /><code><Link to="/game-api/types/alta-stats-effects/statdefinitionapplication">{"StatDefinitionApplication"}</Link>{" Application { get; private set; }"}</code> | The `StatDefinitionApplication` this stat came from, holding its defaults. |
| <Link id="m-base" /><code>{"float Base { get; set; }"}</code> | The stat's own value. Setting it clamps to `Minimum` and `Maximum`. This is the part that is saved. |
| <Link id="m-buffmultiplier-2" /><code>{"float BuffMultiplier { get; set; }"}</code> | Multiplier from buffs. Part of `Multiplier`. |
| <Link id="m-changedata" /><code>{"object ChangeData { get; set; }"}</code> | Context for the change that is about to happen (for example the damage), read by `Changed` handlers. Cleared after each change. |
| <Link id="m-definition" /><code><Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" Definition { get; private set; }"}</code> | The `StatDefinition` this stat is for. |
| <Link id="m-extra" /><code>{"float Extra { get; set; }"}</code> | Flat bonus added to `Base`. Reading gives the buff extra plus `NonBuffExtra`; setting sets only the buff extra. |
| <Link id="m-ischanged" /><code>{"bool IsChanged { get; private set; }"}</code> | True after a change until the next `OnChangedExternal`. |
| <Link id="m-isenabled-2" /><code>{"bool IsEnabled { get; set; }"}</code> | Whether the stat is enabled. Setting it forces a network update. |
| <Link id="m-lastvalue" /><code>{"float LastValue { get; private set; }"}</code> | The value at the previous change. |
| <Link id="m-maximum-2" /><code>{"float Maximum { get; set; }"}</code> | Upper limit for `Base` plus extras. Lowering it pulls `Base` down. |
| <Link id="m-minimum-2" /><code>{"float Minimum { get; set; }"}</code> | Lower limit for `Base` plus extras. Raising it pushes `Base` up. |
| <Link id="m-multiplier" /><code>{"float Multiplier { get; }"}</code> | Total multiplier, `BuffMultiplier` times `NonBuffMultiplier`. |
| <Link id="m-nonbuffextra-2" /><code>{"float NonBuffExtra { get; set; }"}</code> | Flat bonus that does not come from buffs. |
| <Link id="m-nonbuffmultiplier-2" /><code>{"float NonBuffMultiplier { get; set; }"}</code> | Multiplier that does not come from buffs. |
| <Link id="m-value" /><code>{"float Value { get; private set; }"}</code> | The final calculated value. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-changed" /><code>{"event "}<Link to="/game-api/types/alta-stats-effects/stathandler">{"StatHandler"}</Link>{" Changed"}</code> | Raised whenever `Value` changes. |
| <Link id="m-changedexternal" /><code>{"event "}<Link to="/game-api/types/alta-stats-effects/stathandler">{"StatHandler"}</Link>{" ChangedExternal"}</code> | Raised on the stat manager's tick for stats that changed since the last tick. |
| <Link id="m-definitionevent" /><code>{"event "}<Link to="/game-api/types/alta-stats-effects/stathandler">{"StatHandler"}</Link>{" DefinitionEvent"}</code> | Raised by `RunEvent`; burn uses it to signal stat-specific events. |
| <Link id="m-networkchanged" /><code>{"event "}<Link to="/game-api/types/alta-stats-effects/stathandler">{"StatHandler"}</Link>{" NetworkChanged"}</code> | Raised when a change passes the definition's sync threshold. The server's stat manager sends the stat to clients on it. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bind" /><code>{"void Bind("}<Link to="/game-api/types/alta-stats-effects/stathandler">{"StatHandler"}</Link>{" handler)"}</code> | Calls the handler once now, then on every `Changed`. |
| <Link id="m-forceserverupdate" /><code>{"void ForceServerUpdate()"}</code> | Recalculates and raises both `Changed` and `NetworkChanged` even if nothing changed. |
| <Link id="m-load" /><code>{"void Load("}<Link to="/game-api/types/alta-stats-effects/statmanagersavedatastat">{"StatManagerSaveDataStat"}</Link>{" data)"}</code> | Restores `Base` from save data, rounded to 2 decimals. |
| <Link id="m-onchangedexternal" /><code>{"void OnChangedExternal()"}</code> | Clears `IsChanged` and raises `ChangedExternal`. The stat manager calls it on its tick. |
| <Link id="m-reset" /><code>{"void Reset()"}</code> | Sets min, max and base back to the defaults from `Application`. |
| <Link id="m-runevent" /><code>{"void RunEvent()"}</code> | Raises `DefinitionEvent`. |
| <Link id="m-save" /><code><Link to="/game-api/types/alta-stats-effects/statmanagersavedatastat">{"StatManagerSaveDataStat"}</Link>{" Save()"}</code> | Returns save data holding the definition and `Base` only. |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWritingFull)"}</code> | Reads or writes the stat. Full writes include range, extras and multipliers. Values are packed to fixed ranges (base and range 0 to 127) and rounded to 0.01. |
| <Link id="m-setrange" /><code>{"void SetRange(float minimum, float maximum)"}</code> | Sets `Minimum` and `Maximum` together and forces a network update. |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | The value with at most one decimal. |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-onchanged" /><code>{"private void OnChanged(bool forceNetwork = false, bool forceEvent = false)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `Stat`:

[`BurnEffect.burningManager`](/game-api/types/alta-stats-effects/burneffect#m-burningmanager), [`StatChangeEffect.ModifyStat`](/game-api/types/alta-stats-effects/statchangeeffect#m-modifystat), [`StatEffect.ModifyStat`](/game-api/types/alta-stats-effects/stateffect#m-modifystat), [`StatSetEffect.ModifyStat`](/game-api/types/alta-stats-effects/statseteffect#m-modifystat), [`FixedImpactor.damageStat`](/game-api/types/alta-items/fixedimpactor#m-damagestat), [`Phantom.SpeedStat`](/game-api/types/alta-intelligence/phantom#m-speedstat), [`Phantom.visibilityStat`](/game-api/types/alta-intelligence/phantom#m-visibilitystat), [`ProgressStatChangeHook.TopicProgress.affectedStat`](/game-api/types/alta-intelligence/progressstatchangehook-topicprogress#m-affectedstat), [`StatChangeHook.affectedStats`](/game-api/types/alta-intelligence/statchangehook#m-affectedstats), [`HealthBar.HealthBar`](/game-api/types/alta-player/healthbar#m-ctor), [`HealthBar.healthStat`](/game-api/types/alta-player/healthbar#m-healthstat), [`HealthBar.UpdateHealthBar`](/game-api/types/alta-player/healthbar#m-updatehealthbar), [`ToggleEnemyHealthBars.CheckEnemyNeedsHealthBar`](/game-api/types/alta-player/toggleenemyhealthbars#m-checkenemyneedshealthbar), [`BurnStat.Applied`](/game-api/types/alta-stats-effects/burnstat#m-applied), [`ControlledStat.Applied`](/game-api/types/alta-stats-effects/controlledstat#m-applied), [`DiscreteStatBar.OnStatChanged`](/game-api/types/alta-stats-effects/discretestatbar#m-onstatchanged), [`FullEmptyStatTrigger.OnStatChanged`](/game-api/types/alta-stats-effects/fullemptystattrigger#m-onstatchanged), [`FullEmptyUpdateModifier.affectedStat`](/game-api/types/alta-stats-effects/fullemptyupdatemodifier#m-affectedstat), [`FullEmptyUpdateModifier.CheckApply`](/game-api/types/alta-stats-effects/fullemptyupdatemodifier#m-checkapply), [`FullEmptyUpdateModifier.FullEmptyUpdateModifier`](/game-api/types/alta-stats-effects/fullemptyupdatemodifier#m-ctor), [`FullEmptyUpdateModifier.trackedStat`](/game-api/types/alta-stats-effects/fullemptyupdatemodifier#m-trackedstat), [`FullnessStat.Applied`](/game-api/types/alta-stats-effects/fullnessstat#m-applied), [`HungerStat.Applied`](/game-api/types/alta-stats-effects/hungerstat#m-applied), [`HungerStat.GetSets`](/game-api/types/alta-stats-effects/hungerstat#m-getsets), [`HungerStat.ProcessHealthRegen`](/game-api/types/alta-stats-effects/hungerstat#m-processhealthregen), [`HungerStat.ProcessStarveDamage`](/game-api/types/alta-stats-effects/hungerstat#m-processstarvedamage), [`IncrementingStat.Applied`](/game-api/types/alta-stats-effects/incrementingstat#m-applied), [`IndirectStatModifier.IndirectStatModifier`](/game-api/types/alta-stats-effects/indirectstatmodifier#m-ctor), [`IndirectStatModifier.targetStat`](/game-api/types/alta-stats-effects/indirectstatmodifier#m-targetstat), [`LevelStatModifier.affectingStat`](/game-api/types/alta-stats-effects/levelstatmodifier#m-affectingstat), [`MaxStatDefinition.Applied`](/game-api/types/alta-stats-effects/maxstatdefinition#m-applied), [`MaxStatDefinition.endOfFrameBuffer`](/game-api/types/alta-stats-effects/maxstatdefinition#m-endofframebuffer), [`MaxStatDefinition.UpdateManager`](/game-api/types/alta-stats-effects/maxstatdefinition#m-updatemanager), [`OnFullAffectTargetStatDefinition.Applied`](/game-api/types/alta-stats-effects/onfullaffecttargetstatdefinition#m-applied), [`PlayerWeightStat.Applied`](/game-api/types/alta-stats-effects/playerweightstat#m-applied), [`PoisonStat.Applied`](/game-api/types/alta-stats-effects/poisonstat#m-applied), [`StaminaBarVisibility.HandStaminaView.handStaminaStat`](/game-api/types/alta-stats-effects/staminabarvisibility-handstaminaview#m-handstaminastat), [`StatAffectingArea.affectedStats`](/game-api/types/alta-stats-effects/stataffectingarea#m-affectedstats), [`StatAppliedHandler.BeginInvoke`](/game-api/types/alta-stats-effects/statappliedhandler#m-begininvoke), [`StatAppliedHandler.Invoke`](/game-api/types/alta-stats-effects/statappliedhandler#m-invoke), [`StatBar.OnStatChanged`](/game-api/types/alta-stats-effects/statbar#m-onstatchanged), [`StatBar.SetupNotches`](/game-api/types/alta-stats-effects/statbar#m-setupnotches), [`StatBarBase.OnStatChanged`](/game-api/types/alta-stats-effects/statbarbase#m-onstatchanged), [`StatBarBase.Stat`](/game-api/types/alta-stats-effects/statbarbase#m-stat), [`StatBarBase.trackedStat`](/game-api/types/alta-stats-effects/statbarbase#m-trackedstat), [`StatBarSimple.OnStatChanged`](/game-api/types/alta-stats-effects/statbarsimple#m-onstatchanged), [`StatBarSimple.UpdateValue`](/game-api/types/alta-stats-effects/statbarsimple#m-updatevalue), [`StatConverter.Last`](/game-api/types/alta-stats-effects/statconverter#m-last), [`StatDefinition.Applied`](/game-api/types/alta-stats-effects/statdefinition#m-applied), [`StatDefinition.GetStatOnPlayer`](/game-api/types/alta-stats-effects/statdefinition#m-getstatonplayer), [`StatHandler.BeginInvoke`](/game-api/types/alta-stats-effects/stathandler#m-begininvoke), [`StatHandler.Invoke`](/game-api/types/alta-stats-effects/stathandler#m-invoke), [`StatListConverter.LastList`](/game-api/types/alta-stats-effects/statlistconverter#m-lastlist), [`StatManager.ApplyIndirectModifier`](/game-api/types/alta-stats-effects/statmanager#m-applyindirectmodifier-3), [`StatManager.GetStat`](/game-api/types/alta-stats-effects/statmanager#m-getstat), [`StatManager.indirectModifiers`](/game-api/types/alta-stats-effects/statmanager#m-indirectmodifiers), [`StatManager.Stats`](/game-api/types/alta-stats-effects/statmanager#m-stats), [`StatManager.SyncStat`](/game-api/types/alta-stats-effects/statmanager#m-syncstat-2), [`StatModifier.Stat`](/game-api/types/alta-stats-effects/statmodifier#m-stat), [`StatModifier.StatModifier`](/game-api/types/alta-stats-effects/statmodifier#m-ctor-2) and 38 more.
