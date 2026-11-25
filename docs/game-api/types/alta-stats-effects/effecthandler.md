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

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`PlayerEffectController`](/game-api/types/alta-stats-effects/playereffectcontroller)
- **Nested types** [`EffectOverTimeData`](/game-api/types/alta-stats-effects/effecthandler-effectovertimedata), [`EffectTypes`](/game-api/types/alta-stats-effects/effecthandler-effecttypes), [`TeleportType`](/game-api/types/alta-stats-effects/effecthandler-teleporttype)
- **Documented in** [Effects](/game-api/game-systems/effects#effecthandler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EffectHandler()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> |  |
| <Link id="m-health" /><code>{"private "}<Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" health"}</code> |  |
| <Link id="m-immuneto" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/effecthandler-effecttypes">{"EffectHandler.EffectTypes"}</Link>{" immuneTo"}</code> |  |
| <Link id="m-isteleportable" /><code>{"protected bool isTeleportable"}</code> | False during the teleport cooldown. |
| <Link id="m-poisoncoroutine" /><code>{"private Coroutine poisonCoroutine"}</code> |  |
| <Link id="m-poisonfrequency" /><code>{"private float poisonFrequency"}</code> |  |
| <Link id="m-poisonmultiplier" /><code>{"private float poisonMultiplier"}</code> |  |
| <Link id="m-poisonstrength" /><code>{"private float poisonStrength"}</code> |  |
| <Link id="m-statmanager" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" statManager"}</code> |  |
| <Link id="m-unitstoregen" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{", ValueTuple<Queue<"}<Link to="/game-api/types/alta-stats-effects/effecthandler-effectovertimedata">{"EffectHandler.EffectOverTimeData"}</Link>{">, "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{">> unitsToRegen"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity-2" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> | The `NetworkEntity` this handler belongs to. |
| <Link id="m-health-2" /><code><Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" Health { get; }"}</code> | The health object poison damages. |
| <Link id="m-poisonstacks" /><code>{"int PoisonStacks { get; protected set; }"}</code> | How many poison effects are active. Poison stops when it reaches 0. |
| <Link id="m-statmanager-2" /><code><Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" "}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" { get; }"}</code> | The stat manager that stat effects change. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onreveal" /><code>{"event Action OnReveal"}</code> | Raised by `Reveal`. Phantoms listen to it to become visible. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-poisonovertime" /><code>{"virtual void PoisonOverTime(float strength)"}</code> | A positive strength adds a poison stack (damage each second at the strongest strength so far); zero or less removes one. |
| <Link id="m-reveal" /><code>{"virtual void Reveal()"}</code> | Raises `OnReveal`, unless immune to reveal. |
| <Link id="m-teleport" /><code>{"virtual void Teleport(Vector3 position, float strength, "}<Link to="/game-api/types/alta-stats-effects/effecthandler-teleporttype">{"EffectHandler.TeleportType"}</Link>{" teleportType = 0)"}</code> | Moves the object to a position (the move happens on the server), then blocks further teleports for 2 seconds. Ignored if immune. |
| <Link id="m-effectovertime" /><code>{"internal void EffectOverTime("}<Link to="/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{" effectToModify, float strength, int duration, Action<"}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{", "}<Link to="/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{", float> handleUpdate)"}</code> |  |
| <Link id="m-effectovertimeloop" /><code>{"private IEnumerator EffectOverTimeLoop(Queue<"}<Link to="/game-api/types/alta-stats-effects/effecthandler-effectovertimedata">{"EffectHandler.EffectOverTimeData"}</Link>{"> queue) (iterator)"}</code> |  |
| <Link id="m-runpoison" /><code>{"private IEnumerator RunPoison() (iterator)"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |
| <Link id="m-teleportcooldown" /><code>{"protected IEnumerator TeleportCooldown() (iterator)"}</code> | Coroutine that re-enables teleporting after 2 seconds. |

## Used in

Members of other types that take, return or hold a `EffectHandler`:

[`BuildUpconcoctionEffect.buildupMap`](/game-api/types/alta-stats-effects/buildupconcoctioneffect#m-buildupmap), [`BuildUpconcoctionEffect.CheckApply`](/game-api/types/alta-stats-effects/buildupconcoctioneffect#m-checkapply), [`BuildUpconcoctionEffect.RunBuildup`](/game-api/types/alta-stats-effects/buildupconcoctioneffect#m-runbuildup), [`BuildupTeleportEffect.Apply`](/game-api/types/alta-stats-effects/buildupteleporteffect#m-apply), [`BurnEffect.Apply`](/game-api/types/alta-stats-effects/burneffect#m-apply), [`ChanceBasedEffectDefinition.CheckApply`](/game-api/types/alta-stats-effects/chancebasedeffectdefinition#m-checkapply), [`Effect.Apply`](/game-api/types/alta-stats-effects/effect#m-apply), [`Effect.Handler`](/game-api/types/alta-stats-effects/effect#m-handler), [`EffectArea.affecting`](/game-api/types/alta-stats-effects/effectarea#m-affecting), [`EffectArea.EnterObject`](/game-api/types/alta-stats-effects/effectarea#m-enterobject), [`EffectArea.GetHandler`](/game-api/types/alta-stats-effects/effectarea#m-gethandler), [`EffectArea.LeaveObject`](/game-api/types/alta-stats-effects/effectarea#m-leaveobject), [`EffectDefinition.Apply`](/game-api/types/alta-stats-effects/effectdefinition#m-apply), [`EffectDefinition.CheckApply`](/game-api/types/alta-stats-effects/effectdefinition#m-checkapply), [`EffectDefinitionApplication.Apply`](/game-api/types/alta-stats-effects/effectdefinitionapplication#m-apply), [`EffectDefinitionApplication.CheckApply`](/game-api/types/alta-stats-effects/effectdefinitionapplication#m-checkapply), [`EffectHandler.EffectOverTimeData.EffectOverTimeData`](/game-api/types/alta-stats-effects/effecthandler-effectovertimedata#m-ctor), [`EffectHandler.EffectOverTimeData.handleUpdate`](/game-api/types/alta-stats-effects/effecthandler-effectovertimedata#m-handleupdate), [`EffectHandler.EffectOverTimeData.HandleUpdate`](/game-api/types/alta-stats-effects/effecthandler-effectovertimedata#m-handleupdate-2), [`EffectVolumeTrigger.EffectHandlerEntered`](/game-api/types/alta-stats-effects/effectvolumetrigger#m-effecthandlerentered), [`EffectVolumeTrigger.EffectHandlerLeft`](/game-api/types/alta-stats-effects/effectvolumetrigger#m-effecthandlerleft), [`EffectVolumeTrigger.Effect.Apply`](/game-api/types/alta-stats-effects/effectvolumetrigger-effect#m-apply), [`EffectVolumeTrigger.Effect.Unapply`](/game-api/types/alta-stats-effects/effectvolumetrigger-effect#m-unapply), [`EnvironmentalEffect<T>.Apply`](/game-api/types/alta-stats-effects/environmentaleffect-t#m-apply), [`IEffectDefinition.CheckApply`](/game-api/types/alta-stats-effects/ieffectdefinition#m-checkapply), [`InateEffect.Apply`](/game-api/types/alta-stats-effects/inateeffect#m-apply), [`PoisonEffect.Apply`](/game-api/types/alta-stats-effects/poisoneffect#m-apply), [`PoisonEffect.CheckApply`](/game-api/types/alta-stats-effects/poisoneffect#m-checkapply), [`RevealEffect.Apply`](/game-api/types/alta-stats-effects/revealeffect#m-apply), [`StatEffect.Apply`](/game-api/types/alta-stats-effects/stateffect#m-apply), [`StatMultiplierEffect.Apply`](/game-api/types/alta-stats-effects/statmultipliereffect#m-apply), [`TeleportEffect.Apply`](/game-api/types/alta-stats-effects/teleporteffect#m-apply), [`LiquidData.Apply`](/game-api/types/alta-stats-effects/liquiddata#m-apply), [`IndirectStatModifierDefinition.Apply`](/game-api/types/alta-stats-effects/indirectstatmodifierdefinition#m-apply), [`ConsumptionManager.effectHandler`](/game-api/types/global-c-d/consumptionmanager#m-effecthandler), [`HealthObject.effectHandler`](/game-api/types/global-e-h/healthobject#m-effecthandler), [`HealthObject.EffectHandler`](/game-api/types/global-e-h/healthobject#m-effecthandler-2), [`VolumeTrigger.ActiveEffectTargets`](/game-api/types/global-t-x/volumetrigger#m-activeeffecttargets), [`VolumeTrigger.EffectHandlerEntered`](/game-api/types/global-t-x/volumetrigger#m-effecthandlerentered), [`VolumeTrigger.EffectHandlerLeft`](/game-api/types/global-t-x/volumetrigger#m-effecthandlerleft), [`VolumeTrigger.effectHandlers`](/game-api/types/global-t-x/volumetrigger#m-effecthandlers), [`VolumeTrigger.GetEffectHandler`](/game-api/types/global-t-x/volumetrigger#m-geteffecthandler).
