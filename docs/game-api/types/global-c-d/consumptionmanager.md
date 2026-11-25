---
title: "ConsumptionManager"
description: "ConsumptionManager : MonoBehaviour, top level, no namespace."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConsumptionManager

A **class** in `Root.Township`, no namespace.

`ConsumptionManager : MonoBehaviour`, top level, no namespace. One per player body. `Player` gives the body's `PlayerController`.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Hunger, eating and drinking](/game-api/game-systems/hunger-and-eating#consumptionmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ConsumptionManager()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-canconsumewastefully" /><code>{"private bool canConsumeWastefully"}</code> |  |
| <Link id="m-canconsumewhenstatisfull" /><code>{"private bool canConsumeWhenStatIsFull"}</code> |  |
| <Link id="m-eater" /><code>{"private "}<Link to="/game-api/types/global-e-h/eater">{"Eater"}</Link>{" eater"}</code> |  |
| <Link id="m-effecthandler" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" effectHandler"}</code> |  |
| <Link id="m-effecthandlingstrength" /><code>{"private float effectHandlingStrength"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-mouth" /><code>{"private "}<Link to="/game-api/types/global-p/playerdrinkingmouth">{"PlayerDrinkingMouth"}</Link>{" mouth"}</code> |  |
| <Link id="m-player" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player"}</code> |  |
| <Link id="m-rejectedibleconsumption" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" rejectEdibleConsumption"}</code> |  |
| <Link id="m-rejectliquidconsumption" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" rejectLiquidConsumption"}</code> |  |
| <Link id="m-stat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat"}</code> |  |
| <Link id="m-statmanager" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" statManager"}</code> |  |
| <Link id="m-stattomonitor" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" statToMonitor"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-player-2" /><code><Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" Player { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-arevalideffects" /><code>{"bool AreValidEffects(IEnumerable<"}<Link to="/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"> effects)"}</code> |  |
| <Link id="m-canconsumeedible" /><code>{"bool CanConsumeEdible("}<Link to="/game-api/types/global-e-h/edibleobject">{"EdibleObject"}</Link>{" edible)"}</code> |  |
| <Link id="m-canconsumeliquid" /><code>{"bool CanConsumeLiquid("}<Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquid)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-handleconsumptioneffects" /><code>{"internal void HandleConsumptionEffects(IEnumerable<"}<Link to="/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"> effects)"}</code> |  |
| <Link id="m-handlefaileddrinking" /><code>{"internal void HandleFailedDrinking("}<Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquid)"}</code> |  |
| <Link id="m-handlefailedeating" /><code>{"internal void HandleFailedEating("}<Link to="/game-api/types/global-e-h/edibleobject">{"EdibleObject"}</Link>{" edible)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ConsumptionManager`:

[`Eater.consumptionManager`](/game-api/types/global-e-h/eater#m-consumptionmanager), [`EdibleObject.consumers`](/game-api/types/global-e-h/edibleobject#m-consumers), [`EdibleObject.StartEat`](/game-api/types/global-e-h/edibleobject#m-starteat), [`EdibleObject.StartEating`](/game-api/types/global-e-h/edibleobject#m-starteating), [`EdibleObject.StopEat`](/game-api/types/global-e-h/edibleobject#m-stopeat), [`PlayerDrinkingMouth.consumer`](/game-api/types/global-p/playerdrinkingmouth#m-consumer).
