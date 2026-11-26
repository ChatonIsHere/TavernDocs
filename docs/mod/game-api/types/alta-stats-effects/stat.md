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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Attributes** `TypeConverter`
- **Documented in** [Stats](/mod/game-api/game-systems/stats#stat)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Stat(float value, float minimum, float maximum)"}</code> | <span className="api-desc">Creates a `Stat` from `application`.</span> |
| <Link id="m-ctor-2" /><code>{"Stat("}<Link to="/mod/game-api/types/alta-stats-effects/statdefinitionapplication">{"StatDefinitionApplication"}</Link>{" application)"}</code> | <span className="api-desc">Creates a `Stat` from `application`.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-baseflat" /><code>{"private float baseFlat"}</code> | <span className="api-desc">Backing field for `Base`: the stat's own value, kept within `minimum` and `maximum` and saved. Synced in the range 0 to 127.</span> |
| <Link id="m-buffmultiplier" /><code>{"private float buffMultiplier"}</code> | <span className="api-desc">Backing field for `BuffMultiplier` (default 1).</span> |
| <Link id="m-extraflat" /><code>{"private float extraFlat"}</code> | <span className="api-desc">Flat bonus set through `Extra`; `Extra` returns it plus `nonBuffExtra`.</span> |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> | <span className="api-desc">Backing field for `IsEnabled`. It doesn't change `Value`; stats like hunger check it themselves.</span> |
| <Link id="m-lastnetworkedvalue" /><code>{"private float lastNetworkedValue"}</code> | <span className="api-desc">`Value` when the stat was last serialized; compared with the new value to decide whether a change needs syncing.</span> |
| <Link id="m-maximum" /><code>{"private float maximum"}</code> | <span className="api-desc">Backing field for `Maximum`. The base is capped to it and the value is clamped to it before the multiplier.</span> |
| <Link id="m-minimum" /><code>{"private float minimum"}</code> | <span className="api-desc">Backing field for `Minimum`. The base is raised to it and the value is clamped to it before the multiplier.</span> |
| <Link id="m-nonbuffextra" /><code>{"private float nonBuffExtra"}</code> | <span className="api-desc">Backing field for `NonBuffExtra`, a flat bonus that isn't from a buff.</span> |
| <Link id="m-nonbuffmultiplier" /><code>{"private float nonBuffMultiplier"}</code> | <span className="api-desc">Backing field for `NonBuffMultiplier` (default 1); multiplied with `buffMultiplier` to give `Multiplier`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-application" /><code><Link to="/mod/game-api/types/alta-stats-effects/statdefinitionapplication">{"StatDefinitionApplication"}</Link>{" Application { get; private set; }"}</code> | <span className="api-desc">The `StatDefinitionApplication` this stat came from, holding its defaults.</span> |
| <Link id="m-base" /><code>{"float Base { get; set; }"}</code> | <span className="api-desc">The stat's own value. Setting it clamps to `Minimum` and `Maximum`. This is the part that is saved.</span> |
| <Link id="m-buffmultiplier-2" /><code>{"float BuffMultiplier { get; set; }"}</code> | <span className="api-desc">Multiplier from buffs. Part of `Multiplier`.</span> |
| <Link id="m-changedata" /><code>{"object ChangeData { get; set; }"}</code> | <span className="api-desc">Context for the change that is about to happen (for example the damage), read by `Changed` handlers. Cleared after each change.</span> |
| <Link id="m-definition" /><code><Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" Definition { get; private set; }"}</code> | <span className="api-desc">The `StatDefinition` this stat is for.</span> |
| <Link id="m-extra" /><code>{"float Extra { get; set; }"}</code> | <span className="api-desc">Flat bonus added to `Base`. Reading gives the buff extra plus `NonBuffExtra`; setting sets only the buff extra.</span> |
| <Link id="m-ischanged" /><code>{"bool IsChanged { get; private set; }"}</code> | <span className="api-desc">True after a change until the next `OnChangedExternal`.</span> |
| <Link id="m-isenabled-2" /><code>{"bool IsEnabled { get; set; }"}</code> | <span className="api-desc">Whether the stat is enabled. Setting it forces a network update.</span> |
| <Link id="m-lastvalue" /><code>{"float LastValue { get; private set; }"}</code> | <span className="api-desc">The value at the previous change.</span> |
| <Link id="m-maximum-2" /><code>{"float Maximum { get; set; }"}</code> | <span className="api-desc">Upper limit for `Base` plus extras. Lowering it pulls `Base` down.</span> |
| <Link id="m-minimum-2" /><code>{"float Minimum { get; set; }"}</code> | <span className="api-desc">Lower limit for `Base` plus extras. Raising it pushes `Base` up.</span> |
| <Link id="m-multiplier" /><code>{"float Multiplier { get; }"}</code> | <span className="api-desc">Total multiplier, `BuffMultiplier` times `NonBuffMultiplier`.</span> |
| <Link id="m-nonbuffextra-2" /><code>{"float NonBuffExtra { get; set; }"}</code> | <span className="api-desc">Flat bonus that does not come from buffs.</span> |
| <Link id="m-nonbuffmultiplier-2" /><code>{"float NonBuffMultiplier { get; set; }"}</code> | <span className="api-desc">Multiplier that does not come from buffs.</span> |
| <Link id="m-value" /><code>{"float Value { get; private set; }"}</code> | <span className="api-desc">The final calculated value.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-changed" /><code>{"event "}<Link to="/mod/game-api/types/alta-stats-effects/stathandler">{"StatHandler"}</Link>{" Changed"}</code> | <span className="api-desc">Raised whenever `Value` changes.</span> |
| <Link id="m-changedexternal" /><code>{"event "}<Link to="/mod/game-api/types/alta-stats-effects/stathandler">{"StatHandler"}</Link>{" ChangedExternal"}</code> | <span className="api-desc">Raised on the stat manager's tick for stats that changed since the last tick.</span> |
| <Link id="m-definitionevent" /><code>{"event "}<Link to="/mod/game-api/types/alta-stats-effects/stathandler">{"StatHandler"}</Link>{" DefinitionEvent"}</code> | <span className="api-desc">Raised by `RunEvent`; burn uses it to signal stat-specific events.</span> |
| <Link id="m-networkchanged" /><code>{"event "}<Link to="/mod/game-api/types/alta-stats-effects/stathandler">{"StatHandler"}</Link>{" NetworkChanged"}</code> | <span className="api-desc">Raised when a change passes the definition's sync threshold. The server's stat manager sends the stat to clients on it.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bind" /><code>{"void Bind("}<Link to="/mod/game-api/types/alta-stats-effects/stathandler">{"StatHandler"}</Link>{" handler)"}</code> | <span className="api-desc">Calls the handler once now, then on every `Changed`.</span> |
| <Link id="m-forceserverupdate" /><code>{"void ForceServerUpdate()"}</code> | <span className="api-desc">Recalculates and raises both `Changed` and `NetworkChanged` even if nothing changed.</span> |
| <Link id="m-load" /><code>{"void Load("}<Link to="/mod/game-api/types/alta-stats-effects/statmanagersavedatastat">{"StatManagerSaveDataStat"}</Link>{" data)"}</code> | <span className="api-desc">Restores `Base` from save data, rounded to 2 decimals.</span> |
| <Link id="m-onchangedexternal" /><code>{"void OnChangedExternal()"}</code> | <span className="api-desc">Clears `IsChanged` and raises `ChangedExternal`. The stat manager calls it on its tick.</span> |
| <Link id="m-reset" /><code>{"void Reset()"}</code> | <span className="api-desc">Sets min, max and base back to the defaults from `Application`.</span> |
| <Link id="m-runevent" /><code>{"void RunEvent()"}</code> | <span className="api-desc">Raises `DefinitionEvent`.</span> |
| <Link id="m-save" /><code><Link to="/mod/game-api/types/alta-stats-effects/statmanagersavedatastat">{"StatManagerSaveDataStat"}</Link>{" Save()"}</code> | <span className="api-desc">Returns save data holding the definition and `Base` only.</span> |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWritingFull)"}</code> | <span className="api-desc">Reads or writes the stat. Full writes include range, extras and multipliers. Values are packed to fixed ranges (base and range 0 to 127) and rounded to 0.01.</span> |
| <Link id="m-setrange" /><code>{"void SetRange(float minimum, float maximum)"}</code> | <span className="api-desc">Sets `Minimum` and `Maximum` together and forces a network update.</span> |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">The value with at most one decimal.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onchanged" /><code>{"private void OnChanged(bool forceNetwork = false, bool forceEvent = false)"}</code> | <span className="api-desc">Recalculates `Value` as (base plus extra, clamped to the range) times the multiplier. Raises `Changed`, and `NetworkChanged` when the change is big enough to sync.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Stat`:

<div className="api-used-in">

[`BurnEffect.burningManager`](/mod/game-api/types/alta-stats-effects/burneffect#m-burningmanager), [`StatChangeEffect.ModifyStat`](/mod/game-api/types/alta-stats-effects/statchangeeffect#m-modifystat), [`StatEffect.ModifyStat`](/mod/game-api/types/alta-stats-effects/stateffect#m-modifystat), [`StatSetEffect.ModifyStat`](/mod/game-api/types/alta-stats-effects/statseteffect#m-modifystat), [`FixedImpactor.damageStat`](/mod/game-api/types/alta-items/fixedimpactor#m-damagestat), [`Phantom.SpeedStat`](/mod/game-api/types/alta-intelligence/phantom#m-speedstat), [`Phantom.visibilityStat`](/mod/game-api/types/alta-intelligence/phantom#m-visibilitystat), [`ProgressStatChangeHook.TopicProgress.affectedStat`](/mod/game-api/types/alta-intelligence/progressstatchangehook-topicprogress#m-affectedstat), [`StatChangeHook.affectedStats`](/mod/game-api/types/alta-intelligence/statchangehook#m-affectedstats), [`HealthBar.HealthBar`](/mod/game-api/types/alta-player/healthbar#m-ctor), [`HealthBar.healthStat`](/mod/game-api/types/alta-player/healthbar#m-healthstat), [`HealthBar.UpdateHealthBar`](/mod/game-api/types/alta-player/healthbar#m-updatehealthbar), [`ToggleEnemyHealthBars.CheckEnemyNeedsHealthBar`](/mod/game-api/types/alta-player/toggleenemyhealthbars#m-checkenemyneedshealthbar), [`BurnStat.Applied`](/mod/game-api/types/alta-stats-effects/burnstat#m-applied), [`ControlledStat.Applied`](/mod/game-api/types/alta-stats-effects/controlledstat#m-applied), [`DiscreteStatBar.OnStatChanged`](/mod/game-api/types/alta-stats-effects/discretestatbar#m-onstatchanged), [`FullEmptyStatTrigger.OnStatChanged`](/mod/game-api/types/alta-stats-effects/fullemptystattrigger#m-onstatchanged), [`FullEmptyUpdateModifier.affectedStat`](/mod/game-api/types/alta-stats-effects/fullemptyupdatemodifier#m-affectedstat), [`FullEmptyUpdateModifier.CheckApply`](/mod/game-api/types/alta-stats-effects/fullemptyupdatemodifier#m-checkapply), [`FullEmptyUpdateModifier.FullEmptyUpdateModifier`](/mod/game-api/types/alta-stats-effects/fullemptyupdatemodifier#m-ctor), [`FullEmptyUpdateModifier.trackedStat`](/mod/game-api/types/alta-stats-effects/fullemptyupdatemodifier#m-trackedstat), [`FullnessStat.Applied`](/mod/game-api/types/alta-stats-effects/fullnessstat#m-applied), [`HungerStat.Applied`](/mod/game-api/types/alta-stats-effects/hungerstat#m-applied), [`HungerStat.GetSets`](/mod/game-api/types/alta-stats-effects/hungerstat#m-getsets), [`HungerStat.ProcessHealthRegen`](/mod/game-api/types/alta-stats-effects/hungerstat#m-processhealthregen), [`HungerStat.ProcessStarveDamage`](/mod/game-api/types/alta-stats-effects/hungerstat#m-processstarvedamage), [`IncrementingStat.Applied`](/mod/game-api/types/alta-stats-effects/incrementingstat#m-applied), [`IndirectStatModifier.IndirectStatModifier`](/mod/game-api/types/alta-stats-effects/indirectstatmodifier#m-ctor), [`IndirectStatModifier.targetStat`](/mod/game-api/types/alta-stats-effects/indirectstatmodifier#m-targetstat), [`LevelStatModifier.affectingStat`](/mod/game-api/types/alta-stats-effects/levelstatmodifier#m-affectingstat), [`MaxStatDefinition.Applied`](/mod/game-api/types/alta-stats-effects/maxstatdefinition#m-applied), [`MaxStatDefinition.endOfFrameBuffer`](/mod/game-api/types/alta-stats-effects/maxstatdefinition#m-endofframebuffer), [`MaxStatDefinition.UpdateManager`](/mod/game-api/types/alta-stats-effects/maxstatdefinition#m-updatemanager), [`OnFullAffectTargetStatDefinition.Applied`](/mod/game-api/types/alta-stats-effects/onfullaffecttargetstatdefinition#m-applied), [`PlayerWeightStat.Applied`](/mod/game-api/types/alta-stats-effects/playerweightstat#m-applied), [`PoisonStat.Applied`](/mod/game-api/types/alta-stats-effects/poisonstat#m-applied), [`StaminaBarVisibility.HandStaminaView.handStaminaStat`](/mod/game-api/types/alta-stats-effects/staminabarvisibility-handstaminaview#m-handstaminastat), [`StatAffectingArea.affectedStats`](/mod/game-api/types/alta-stats-effects/stataffectingarea#m-affectedstats), [`StatAppliedHandler.BeginInvoke`](/mod/game-api/types/alta-stats-effects/statappliedhandler#m-begininvoke), [`StatAppliedHandler.Invoke`](/mod/game-api/types/alta-stats-effects/statappliedhandler#m-invoke), [`StatBar.OnStatChanged`](/mod/game-api/types/alta-stats-effects/statbar#m-onstatchanged), [`StatBar.SetupNotches`](/mod/game-api/types/alta-stats-effects/statbar#m-setupnotches), [`StatBarBase.OnStatChanged`](/mod/game-api/types/alta-stats-effects/statbarbase#m-onstatchanged), [`StatBarBase.Stat`](/mod/game-api/types/alta-stats-effects/statbarbase#m-stat), [`StatBarBase.trackedStat`](/mod/game-api/types/alta-stats-effects/statbarbase#m-trackedstat), [`StatBarSimple.OnStatChanged`](/mod/game-api/types/alta-stats-effects/statbarsimple#m-onstatchanged), [`StatBarSimple.UpdateValue`](/mod/game-api/types/alta-stats-effects/statbarsimple#m-updatevalue), [`StatConverter.Last`](/mod/game-api/types/alta-stats-effects/statconverter#m-last), [`StatDefinition.Applied`](/mod/game-api/types/alta-stats-effects/statdefinition#m-applied), [`StatDefinition.GetStatOnPlayer`](/mod/game-api/types/alta-stats-effects/statdefinition#m-getstatonplayer), [`StatHandler.BeginInvoke`](/mod/game-api/types/alta-stats-effects/stathandler#m-begininvoke), [`StatHandler.Invoke`](/mod/game-api/types/alta-stats-effects/stathandler#m-invoke), [`StatListConverter.LastList`](/mod/game-api/types/alta-stats-effects/statlistconverter#m-lastlist), [`StatManager.ApplyIndirectModifier`](/mod/game-api/types/alta-stats-effects/statmanager#m-applyindirectmodifier-3), [`StatManager.GetStat`](/mod/game-api/types/alta-stats-effects/statmanager#m-getstat), [`StatManager.indirectModifiers`](/mod/game-api/types/alta-stats-effects/statmanager#m-indirectmodifiers), [`StatManager.Stats`](/mod/game-api/types/alta-stats-effects/statmanager#m-stats), [`StatManager.SyncStat`](/mod/game-api/types/alta-stats-effects/statmanager#m-syncstat-2), [`StatModifier.Stat`](/mod/game-api/types/alta-stats-effects/statmodifier#m-stat), [`StatModifier.StatModifier`](/mod/game-api/types/alta-stats-effects/statmodifier#m-ctor-2) and 38 more.

</div>
