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
| <Link id="m-ctor" /><code>{"ConsumptionManager()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-canconsumewastefully" /><code>{"private bool canConsumeWastefully"}</code> | If true, the player can consume whenever the stat is below maximum, even if the food would overflow it. |
| <Link id="m-canconsumewhenstatisfull" /><code>{"private bool canConsumeWhenStatIsFull"}</code> | If true, the stat check is skipped and the player can always consume. |
| <Link id="m-eater" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/eater">{"Eater"}</Link>{" eater"}</code> | The player's `Eater`. Not used by this class itself. |
| <Link id="m-effecthandler" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" effectHandler"}</code> | Effect handler that consumption effects are applied to. |
| <Link id="m-effecthandlingstrength" /><code>{"private float effectHandlingStrength"}</code> | Multiplier on consumed effects' strength, used both for applying them and for the fullness check. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-mouth" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerdrinkingmouth">{"PlayerDrinkingMouth"}</Link>{" mouth"}</code> | The player's drinking mouth. Not used by this class itself. |
| <Link id="m-player" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player"}</code> | Backing field for `Player`. |
| <Link id="m-rejectedibleconsumption" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" rejectEdibleConsumption"}</code> | Event played when the player tries to eat while too full. |
| <Link id="m-rejectliquidconsumption" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" rejectLiquidConsumption"}</code> | Event played when the player tries to drink while too full. |
| <Link id="m-stat" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat"}</code> | The monitored stat instance from `statManager`. |
| <Link id="m-statmanager" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" statManager"}</code> | Stat manager the monitored stat is read from. |
| <Link id="m-stattomonitor" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" statToMonitor"}</code> | Stat definition that limits consumption (likely Fullness). |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-player-2" /><code><Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" Player { get; }"}</code> | The `PlayerController` this manager belongs to. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-arevalideffects" /><code>{"bool AreValidEffects(IEnumerable<"}<Link to="/mod/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"> effects)"}</code> | True if consuming these effects wouldn't push the monitored stat over its maximum (or always, with `canConsumeWhenStatIsFull`). |
| <Link id="m-canconsumeedible" /><code>{"bool CanConsumeEdible("}<Link to="/mod/game-api/types/global-e-h/edibleobject">{"EdibleObject"}</Link>{" edible)"}</code> | Whether the player can eat this food. False in spirit form; plays the reject event if the stat is too full. |
| <Link id="m-canconsumeliquid" /><code>{"bool CanConsumeLiquid("}<Link to="/mod/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquid)"}</code> | Whether the player can drink this liquid. False for null or in spirit form; plays the reject event if too full. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Looks up the monitored stat and the owning `PlayerController`. |
| <Link id="m-handleconsumptioneffects" /><code>{"internal void HandleConsumptionEffects(IEnumerable<"}<Link to="/mod/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"> effects)"}</code> | Applies each effect through the effect handler and forces a server update of any stat an indirect modifier targets. Called on the server. |
| <Link id="m-handlefaileddrinking" /><code>{"internal void HandleFailedDrinking("}<Link to="/mod/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquid)"}</code> | Client: fires the reject-drink event for the local player. |
| <Link id="m-handlefailedeating" /><code>{"internal void HandleFailedEating("}<Link to="/mod/game-api/types/global-e-h/edibleobject">{"EdibleObject"}</Link>{" edible)"}</code> | Client: fires the reject-eat event for the local player. |

</details>

## Used in

Members of other types that take, return or hold a `ConsumptionManager`:

[`Eater.consumptionManager`](/mod/game-api/types/global-e-h/eater#m-consumptionmanager), [`EdibleObject.consumers`](/mod/game-api/types/global-e-h/edibleobject#m-consumers), [`EdibleObject.StartEat`](/mod/game-api/types/global-e-h/edibleobject#m-starteat), [`EdibleObject.StartEating`](/mod/game-api/types/global-e-h/edibleobject#m-starteating), [`EdibleObject.StopEat`](/mod/game-api/types/global-e-h/edibleobject#m-stopeat), [`PlayerDrinkingMouth.consumer`](/mod/game-api/types/global-p/playerdrinkingmouth#m-consumer).
