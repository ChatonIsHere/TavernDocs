---
title: "HandShakeOffDetector"
description: "A shake score for a hand, read by MovementHeatPoint (heat from moving)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandShakeOffDetector

A **class** in `Root.Township`, `Alta.Heat`.

A shake score for a hand, read by `MovementHeatPoint` (heat from moving).

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Documented in** [Heat](/game-api/game-systems/heat)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HandShakeOffDetector()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activators" /><code>{"private HashSet<Object> activators"}</code> |  |
| <Link id="m-islocalposition" /><code>{"private bool isLocalPosition"}</code> |  |
| <Link id="m-lastposition" /><code>{"private Vector3 lastPosition"}</code> |  |
| <Link id="m-lerptoscorepersecond" /><code>{"private float lerpToScorePerSecond"}</code> |  |
| <Link id="m-score" /><code>{"private float score"}</code> |  |
| <Link id="m-shakescore" /><code>{"private AnimationCurve shakeScore"}</code> |  |
| <Link id="m-targettransform" /><code>{"private Transform targetTransform"}</code> |  |
| <Link id="m-teleportcontroller" /><code>{"private "}<Link to="/game-api/types/global-i-l/locomotioncontroller">{"LocomotionController"}</Link>{" teleportController"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-score-2" /><code>{"float Score { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-release" /><code>{"void Release(Object activator)"}</code> |  |
| <Link id="m-request" /><code>{"void Request(Object activator)"}</code> |  |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> |  |
| <Link id="m-setup" /><code>{"private bool Setup()"}</code> |  |
| <Link id="m-updateposition" /><code>{"private void UpdatePosition("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> |  |

## Used in

Members of other types that take, return or hold a `HandShakeOffDetector`:

[`Hand.shakeDetector`](/game-api/types/alta-player/hand#m-shakedetector), [`Hand.ShakeDetector`](/game-api/types/alta-player/hand#m-shakedetector-2), [`MovementHeatPoint.shakeOff`](/game-api/types/alta-stats-effects/movementheatpoint#m-shakeoff), [`HandStaminaManager.handShake`](/game-api/types/game-other-namespaces/handstaminamanager#m-handshake), [`HandStaminaManager.HandShake`](/game-api/types/game-other-namespaces/handstaminamanager#m-handshake-2).
