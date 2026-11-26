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

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`IHandStaminaManager`](/game-api/types/global-i-l/ihandstaminamanager)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"HandStaminaManager("}<Link to="/game-api/types/game-other-namespaces/climbinghand">{"ClimbingHand"}</Link>{" climbingHand, "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stamina, "}<Link to="/game-api/types/game-other-namespaces/climbinghandler">{"ClimbingHandler"}</Link>{" climbingHandler)"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hand" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/climbinghand">{"ClimbingHand"}</Link>{" hand"}</code> | The climbing hand this manager tracks. |
| <Link id="m-handler" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/climbinghandler">{"ClimbingHandler"}</Link>{" handler"}</code> | The climbing handler, source of the stamina settings. |
| <Link id="m-handshake" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/handshakeoffdetector">{"HandShakeOffDetector"}</Link>{" handShake"}</code> | Backing field for `HandShake`. |
| <Link id="m-lastclimbingtime" /><code>{"private float lastClimbingtime"}</code> | Real time this hand last gripped, passed to the regen formula. |
| <Link id="m-stamina" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stamina"}</code> | Backing field for `Stamina`. |
| <Link id="m-staminatoleranceforfloatcomparisons" /><code>{"private const float StaminaToleranceForFloatComparisons"}</code> | 0.01, used for the empty and full checks. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-handshake-2" /><code><Link to="/game-api/types/alta-stats-effects/handshakeoffdetector">{"HandShakeOffDetector"}</Link>{" HandShake { get; }"}</code> | The hand's shake-off detector, whose score feeds stamina regen. |
| <Link id="m-hasstamina" /><code>{"bool HasStamina { get; }"}</code> | True while stamina is above 0.01. |
| <Link id="m-stamina-2" /><code><Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" Stamina { get; }"}</code> | The stamina `Stat` this hand drains. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-process" /><code>{"void Process()"}</code> | Per-frame update: drains stamina by grip, layer and hanging multipliers, or regenerates it, then requests or releases the shake detector. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getgripstaminaconsumption" /><code>{"private float GetGripStaminaConsumption(float distance)"}</code> | Stamina drain per second from grip force over base weight, scaled by the hand distance curve. Returned as a negative number. |

</details>
