---
title: "HandStaminaManager"
description: "Per-hand climbing stamina: drains the hand's stamina stat while gripping and regenerates it while not, and asks for the hand shake-off detector while..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandStaminaManager

A **class** in `Root.Township`, `Features.Climbing`.

Per-hand climbing stamina: drains the hand's stamina stat while gripping and regenerates it while not, and asks for the hand shake-off detector while stamina is below full.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`IHandStaminaManager`](/mod/game-api/types/global-i-l/ihandstaminamanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HandStaminaManager("}<Link to="/mod/game-api/types/game-other-namespaces/climbinghand">{"ClimbingHand"}</Link>{" climbingHand, "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stamina, "}<Link to="/mod/game-api/types/game-other-namespaces/climbinghandler">{"ClimbingHandler"}</Link>{" climbingHandler)"}</code> | <span className="api-desc">Creates a `HandStaminaManager` from `climbingHand`, `stamina` and `climbingHandler`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hand" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/climbinghand">{"ClimbingHand"}</Link>{" hand"}</code> | <span className="api-desc">The climbing hand this manager tracks.</span> |
| <Link id="m-handler" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/climbinghandler">{"ClimbingHandler"}</Link>{" handler"}</code> | <span className="api-desc">The climbing handler, source of the stamina settings.</span> |
| <Link id="m-handshake" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/handshakeoffdetector">{"HandShakeOffDetector"}</Link>{" handShake"}</code> | <span className="api-desc">Backing field for `HandShake`.</span> |
| <Link id="m-lastclimbingtime" /><code>{"private float lastClimbingtime"}</code> | <span className="api-desc">Real time this hand last gripped, passed to the regen formula.</span> |
| <Link id="m-stamina" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stamina"}</code> | <span className="api-desc">Backing field for `Stamina`.</span> |
| <Link id="m-staminatoleranceforfloatcomparisons" /><code>{"private const float StaminaToleranceForFloatComparisons"}</code> | <span className="api-desc">0.01, used for the empty and full checks.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-handshake-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/handshakeoffdetector">{"HandShakeOffDetector"}</Link>{" HandShake { get; }"}</code> | <span className="api-desc">The hand's shake-off detector, whose score feeds stamina regen.</span> |
| <Link id="m-hasstamina" /><code>{"bool HasStamina { get; }"}</code> | <span className="api-desc">True while stamina is above 0.01.</span> |
| <Link id="m-stamina-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" Stamina { get; }"}</code> | <span className="api-desc">The stamina `Stat` this hand drains.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-process" /><code>{"void Process()"}</code> | <span className="api-desc">Per-frame update: drains stamina by grip, layer and hanging multipliers, or regenerates it, then requests or releases the shake detector.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getgripstaminaconsumption" /><code>{"private float GetGripStaminaConsumption(float distance)"}</code> | <span className="api-desc">Stamina drain per second from grip force over base weight, scaled by the hand distance curve. Returned as a negative number.</span> |

</details>
