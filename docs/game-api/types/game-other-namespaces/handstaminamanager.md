---
title: "HandStaminaManager"
description: "class HandStaminaManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandStaminaManager

A **class** in `Root.Township`, `Features.Climbing`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`IHandStaminaManager`](/game-api/types/global-i-l/ihandstaminamanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HandStaminaManager("}<Link to="/game-api/types/game-other-namespaces/climbinghand">{"ClimbingHand"}</Link>{" climbingHand, "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stamina, "}<Link to="/game-api/types/game-other-namespaces/climbinghandler">{"ClimbingHandler"}</Link>{" climbingHandler)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-hand" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/climbinghand">{"ClimbingHand"}</Link>{" hand"}</code> |  |
| <Link id="m-handler" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/climbinghandler">{"ClimbingHandler"}</Link>{" handler"}</code> |  |
| <Link id="m-handshake" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/handshakeoffdetector">{"HandShakeOffDetector"}</Link>{" handShake"}</code> |  |
| <Link id="m-lastclimbingtime" /><code>{"private float lastClimbingtime"}</code> |  |
| <Link id="m-stamina" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stamina"}</code> |  |
| <Link id="m-staminatoleranceforfloatcomparisons" /><code>{"private const float StaminaToleranceForFloatComparisons"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-handshake-2" /><code><Link to="/game-api/types/alta-stats-effects/handshakeoffdetector">{"HandShakeOffDetector"}</Link>{" HandShake { get; }"}</code> |  |
| <Link id="m-hasstamina" /><code>{"bool HasStamina { get; }"}</code> |  |
| <Link id="m-stamina-2" /><code><Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" Stamina { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-process" /><code>{"void Process()"}</code> |  |
| <Link id="m-getgripstaminaconsumption" /><code>{"private float GetGripStaminaConsumption(float distance)"}</code> |  |
