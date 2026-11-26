---
title: "EffectHandler"
description: "Component next to a HealthObject that receives potion and alchemy effects: poison over time, teleporting and reveal."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EffectHandler

A **class** in `Root.Township`, `Alta.Alchemy`.

Component next to a `HealthObject` that receives potion and alchemy effects: poison over time, teleporting and reveal. Reach it through `HealthObject.EffectHandler`; players use the `PlayerEffectController` subclass.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`PlayerEffectController`](/mod/game-api/types/alta-stats-effects/playereffectcontroller)
- **Nested types** [`EffectOverTimeData`](/mod/game-api/types/alta-stats-effects/effecthandler-effectovertimedata), [`EffectTypes`](/mod/game-api/types/alta-stats-effects/effecthandler-effecttypes), [`TeleportType`](/mod/game-api/types/alta-stats-effects/effecthandler-teleporttype)
- **Documented in** [Effects](/mod/game-api/game-systems/effects#effecthandler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EffectHandler()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isteleportable" /><code>{"protected bool isTeleportable"}</code> | False during the teleport cooldown. |

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | Backing field for `Entity`. |
| <Link id="m-health" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" health"}</code> | Backing field for `Health`. |
| <Link id="m-immuneto" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/effecthandler-effecttypes">{"EffectHandler.EffectTypes"}</Link>{" immuneTo"}</code> | Flags for effects this handler ignores: poison, teleport and reveal. |
| <Link id="m-poisoncoroutine" /><code>{"private Coroutine poisonCoroutine"}</code> | The running `RunPoison` coroutine, or null when not poisoned. |
| <Link id="m-poisonfrequency" /><code>{"private float poisonFrequency"}</code> | Seconds between poison damage ticks. 1 by default. |
| <Link id="m-poisonmultiplier" /><code>{"private float poisonMultiplier"}</code> | Poison damage multiplier, taken from the health object's poison attack type multiplier. |
| <Link id="m-poisonstrength" /><code>{"private float poisonStrength"}</code> | Damage per poison tick: the highest strength among active stacks. Reset to 0 when the last stack ends. |
| <Link id="m-statmanager" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" statManager"}</code> | Backing field for `StatManager`. |
| <Link id="m-unitstoregen" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{", ValueTuple<Queue<"}<Link to="/mod/game-api/types/alta-stats-effects/effecthandler-effectovertimedata">{"EffectHandler.EffectOverTimeData"}</Link>{">, "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{">> unitsToRegen"}</code> | Per effect definition, the queue of pending over-time effects and the coroutine working through it. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity-2" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> | The `NetworkEntity` this handler belongs to. |
| <Link id="m-health-2" /><code><Link to="/mod/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" Health { get; }"}</code> | The health object poison damages. |
| <Link id="m-poisonstacks" /><code>{"int PoisonStacks { get; protected set; }"}</code> | How many poison effects are active. Poison stops when it reaches 0. |
| <Link id="m-statmanager-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" "}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" { get; }"}</code> | The stat manager that stat effects change. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onreveal" /><code>{"event Action OnReveal"}</code> | Raised by `Reveal`. Phantoms listen to it to become visible. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-poisonovertime" /><code>{"virtual void PoisonOverTime(float strength)"}</code> | A positive strength adds a poison stack (damage each second at the strongest strength so far); zero or less removes one. |
| <Link id="m-reveal" /><code>{"virtual void Reveal()"}</code> | Raises `OnReveal`, unless immune to reveal. |
| <Link id="m-teleport" /><code>{"virtual void Teleport(Vector3 position, float strength, "}<Link to="/mod/game-api/types/alta-stats-effects/effecthandler-teleporttype">{"EffectHandler.TeleportType"}</Link>{" teleportType = 0)"}</code> | Moves the object to a position (the move happens on the server), then blocks further teleports for 2 seconds. Ignored if immune. |
| <Link id="m-teleportcooldown" /><code>{"protected IEnumerator TeleportCooldown() (iterator)"}</code> | Coroutine that re-enables teleporting after 2 seconds. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-effectovertime" /><code>{"internal void EffectOverTime("}<Link to="/mod/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{" effectToModify, float strength, int duration, Action<"}<Link to="/mod/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{", "}<Link to="/mod/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{", float> handleUpdate)"}</code> | Queues an effect that applies its strength spread over `duration` seconds, starting the loop for that effect if needed. |
| <Link id="m-effectovertimeloop" /><code>{"private IEnumerator EffectOverTimeLoop(Queue<"}<Link to="/mod/game-api/types/alta-stats-effects/effecthandler-effectovertimedata">{"EffectHandler.EffectOverTimeData"}</Link>{"> queue) (iterator)"}</code> | Coroutine that works through queued over-time effects one at a time, ticking once a second. |
| <Link id="m-runpoison" /><code>{"private IEnumerator RunPoison() (iterator)"}</code> | Coroutine that deals poison damage every `poisonFrequency` seconds while health is above 0. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Reads the health object's poison multiplier into `poisonMultiplier`. |

</details>

## Used in

Members of other types that take, return or hold a `EffectHandler`:

[`BuildUpconcoctionEffect.buildupMap`](/mod/game-api/types/alta-stats-effects/buildupconcoctioneffect#m-buildupmap), [`BuildUpconcoctionEffect.CheckApply`](/mod/game-api/types/alta-stats-effects/buildupconcoctioneffect#m-checkapply), [`BuildUpconcoctionEffect.RunBuildup`](/mod/game-api/types/alta-stats-effects/buildupconcoctioneffect#m-runbuildup), [`BuildupTeleportEffect.Apply`](/mod/game-api/types/alta-stats-effects/buildupteleporteffect#m-apply), [`BurnEffect.Apply`](/mod/game-api/types/alta-stats-effects/burneffect#m-apply), [`ChanceBasedEffectDefinition.CheckApply`](/mod/game-api/types/alta-stats-effects/chancebasedeffectdefinition#m-checkapply), [`Effect.Apply`](/mod/game-api/types/alta-stats-effects/effect#m-apply), [`Effect.Handler`](/mod/game-api/types/alta-stats-effects/effect#m-handler), [`EffectArea.affecting`](/mod/game-api/types/alta-stats-effects/effectarea#m-affecting), [`EffectArea.EnterObject`](/mod/game-api/types/alta-stats-effects/effectarea#m-enterobject), [`EffectArea.GetHandler`](/mod/game-api/types/alta-stats-effects/effectarea#m-gethandler), [`EffectArea.LeaveObject`](/mod/game-api/types/alta-stats-effects/effectarea#m-leaveobject), [`EffectDefinition.Apply`](/mod/game-api/types/alta-stats-effects/effectdefinition#m-apply), [`EffectDefinition.CheckApply`](/mod/game-api/types/alta-stats-effects/effectdefinition#m-checkapply), [`EffectDefinitionApplication.Apply`](/mod/game-api/types/alta-stats-effects/effectdefinitionapplication#m-apply), [`EffectDefinitionApplication.CheckApply`](/mod/game-api/types/alta-stats-effects/effectdefinitionapplication#m-checkapply), [`EffectHandler.EffectOverTimeData.EffectOverTimeData`](/mod/game-api/types/alta-stats-effects/effecthandler-effectovertimedata#m-ctor), [`EffectHandler.EffectOverTimeData.handleUpdate`](/mod/game-api/types/alta-stats-effects/effecthandler-effectovertimedata#m-handleupdate), [`EffectHandler.EffectOverTimeData.HandleUpdate`](/mod/game-api/types/alta-stats-effects/effecthandler-effectovertimedata#m-handleupdate-2), [`EffectVolumeTrigger.EffectHandlerEntered`](/mod/game-api/types/alta-stats-effects/effectvolumetrigger#m-effecthandlerentered), [`EffectVolumeTrigger.EffectHandlerLeft`](/mod/game-api/types/alta-stats-effects/effectvolumetrigger#m-effecthandlerleft), [`EffectVolumeTrigger.Effect.Apply`](/mod/game-api/types/alta-stats-effects/effectvolumetrigger-effect#m-apply), [`EffectVolumeTrigger.Effect.Unapply`](/mod/game-api/types/alta-stats-effects/effectvolumetrigger-effect#m-unapply), [`EnvironmentalEffect<T>.Apply`](/mod/game-api/types/alta-stats-effects/environmentaleffect-t#m-apply), [`IEffectDefinition.CheckApply`](/mod/game-api/types/alta-stats-effects/ieffectdefinition#m-checkapply), [`InateEffect.Apply`](/mod/game-api/types/alta-stats-effects/inateeffect#m-apply), [`PoisonEffect.Apply`](/mod/game-api/types/alta-stats-effects/poisoneffect#m-apply), [`PoisonEffect.CheckApply`](/mod/game-api/types/alta-stats-effects/poisoneffect#m-checkapply), [`RevealEffect.Apply`](/mod/game-api/types/alta-stats-effects/revealeffect#m-apply), [`StatEffect.Apply`](/mod/game-api/types/alta-stats-effects/stateffect#m-apply), [`StatMultiplierEffect.Apply`](/mod/game-api/types/alta-stats-effects/statmultipliereffect#m-apply), [`TeleportEffect.Apply`](/mod/game-api/types/alta-stats-effects/teleporteffect#m-apply), [`LiquidData.Apply`](/mod/game-api/types/alta-stats-effects/liquiddata#m-apply), [`IndirectStatModifierDefinition.Apply`](/mod/game-api/types/alta-stats-effects/indirectstatmodifierdefinition#m-apply), [`ConsumptionManager.effectHandler`](/mod/game-api/types/global-c-d/consumptionmanager#m-effecthandler), [`HealthObject.effectHandler`](/mod/game-api/types/global-e-h/healthobject#m-effecthandler), [`HealthObject.EffectHandler`](/mod/game-api/types/global-e-h/healthobject#m-effecthandler-2), [`VolumeTrigger.ActiveEffectTargets`](/mod/game-api/types/global-t-x/volumetrigger#m-activeeffecttargets), [`VolumeTrigger.EffectHandlerEntered`](/mod/game-api/types/global-t-x/volumetrigger#m-effecthandlerentered), [`VolumeTrigger.EffectHandlerLeft`](/mod/game-api/types/global-t-x/volumetrigger#m-effecthandlerleft), [`VolumeTrigger.effectHandlers`](/mod/game-api/types/global-t-x/volumetrigger#m-effecthandlers), [`VolumeTrigger.GetEffectHandler`](/mod/game-api/types/global-t-x/volumetrigger#m-geteffecthandler).
