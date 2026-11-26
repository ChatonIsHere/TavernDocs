---
title: "ConsumptionManager"
description: "Component on the player that decides whether they can eat or drink something (based on a stat such as Fullness) and applies the food's effects."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConsumptionManager

A **class** in `Root.Township`, the global namespace.

Component on the player that decides whether they can eat or drink something (based on a stat such as Fullness) and applies the food's effects. Used by `Eater`, `PlayerDrinkingMouth` and `EdibleObject`.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Hunger, eating and drinking](/mod/game-api/game-systems/hunger-and-eating#consumptionmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ConsumptionManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-canconsumewastefully" /><code>{"private bool canConsumeWastefully"}</code> | <span className="api-desc">If true, the player can consume whenever the stat is below maximum, even if the food would overflow it.</span> |
| <Link id="m-canconsumewhenstatisfull" /><code>{"private bool canConsumeWhenStatIsFull"}</code> | <span className="api-desc">If true, the stat check is skipped and the player can always consume.</span> |
| <Link id="m-eater" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/eater">{"Eater"}</Link>{" eater"}</code> | <span className="api-desc">The player's `Eater`. Not used by this class itself.</span> |
| <Link id="m-effecthandler" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" effectHandler"}</code> | <span className="api-desc">Effect handler that consumption effects are applied to.</span> |
| <Link id="m-effecthandlingstrength" /><code>{"private float effectHandlingStrength"}</code> | <span className="api-desc">Multiplier on consumed effects' strength, used both for applying them and for the fullness check.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-mouth" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerdrinkingmouth">{"PlayerDrinkingMouth"}</Link>{" mouth"}</code> | <span className="api-desc">The player's drinking mouth. Not used by this class itself.</span> |
| <Link id="m-player" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player"}</code> | <span className="api-desc">Backing field for `Player`.</span> |
| <Link id="m-rejectedibleconsumption" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" rejectEdibleConsumption"}</code> | <span className="api-desc">Event played when the player tries to eat while too full.</span> |
| <Link id="m-rejectliquidconsumption" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" rejectLiquidConsumption"}</code> | <span className="api-desc">Event played when the player tries to drink while too full.</span> |
| <Link id="m-stat" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat"}</code> | <span className="api-desc">The monitored stat instance from `statManager`.</span> |
| <Link id="m-statmanager" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" statManager"}</code> | <span className="api-desc">Stat manager the monitored stat is read from.</span> |
| <Link id="m-stattomonitor" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" statToMonitor"}</code> | <span className="api-desc">Stat definition that limits consumption (likely Fullness).</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-player-2" /><code><Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" Player { get; }"}</code> | <span className="api-desc">The `PlayerController` this manager belongs to.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-arevalideffects" /><code>{"bool AreValidEffects(IEnumerable<"}<Link to="/mod/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"> effects)"}</code> | <span className="api-desc">True if consuming these effects wouldn't push the monitored stat over its maximum (or always, with `canConsumeWhenStatIsFull`).</span> |
| <Link id="m-canconsumeedible" /><code>{"bool CanConsumeEdible("}<Link to="/mod/game-api/types/global-e-h/edibleobject">{"EdibleObject"}</Link>{" edible)"}</code> | <span className="api-desc">Whether the player can eat this food. False in spirit form; plays the reject event if the stat is too full.</span> |
| <Link id="m-canconsumeliquid" /><code>{"bool CanConsumeLiquid("}<Link to="/mod/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquid)"}</code> | <span className="api-desc">Whether the player can drink this liquid. False for null or in spirit form; plays the reject event if too full.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Looks up the monitored stat and the owning `PlayerController`.</span> |
| <Link id="m-handleconsumptioneffects" /><code>{"internal void HandleConsumptionEffects(IEnumerable<"}<Link to="/mod/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"> effects)"}</code> | <span className="api-desc">Applies each effect through the effect handler and forces a server update of any stat an indirect modifier targets. Called on the server.</span> |
| <Link id="m-handlefaileddrinking" /><code>{"internal void HandleFailedDrinking("}<Link to="/mod/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquid)"}</code> | <span className="api-desc">Client: fires the reject-drink event for the local player.</span> |
| <Link id="m-handlefailedeating" /><code>{"internal void HandleFailedEating("}<Link to="/mod/game-api/types/global-e-h/edibleobject">{"EdibleObject"}</Link>{" edible)"}</code> | <span className="api-desc">Client: fires the reject-eat event for the local player.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ConsumptionManager`:

<div className="api-used-in">

[`Eater.consumptionManager`](/mod/game-api/types/global-e-h/eater#m-consumptionmanager), [`EdibleObject.consumers`](/mod/game-api/types/global-e-h/edibleobject#m-consumers), [`EdibleObject.StartEat`](/mod/game-api/types/global-e-h/edibleobject#m-starteat), [`EdibleObject.StartEating`](/mod/game-api/types/global-e-h/edibleobject#m-starteating), [`EdibleObject.StopEat`](/mod/game-api/types/global-e-h/edibleobject#m-stopeat), [`PlayerDrinkingMouth.consumer`](/mod/game-api/types/global-p/playerdrinkingmouth#m-consumer).

</div>
