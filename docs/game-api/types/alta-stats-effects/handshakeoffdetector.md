---
title: "HandShakeOffDetector"
description: "Scores how hard a hand (or other transform) is shaking, from its speed through a curve."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandShakeOffDetector

A **class** in `Root.Township`, `Alta.Heat`.

Scores how hard a hand (or other transform) is shaking, from its speed through a curve. `MovementHeatPoint` uses the score to shed heat faster when you shake a burning hand. Server side; a component on the hand, reached through `Hand.ShakeDetector`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Documented in** [Heat](/game-api/game-systems/heat)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"HandShakeOffDetector()"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activators" /><code>{"private HashSet<Object> activators"}</code> | Objects that have requested the detector; it runs while any remain. |
| <Link id="m-islocalposition" /><code>{"private bool isLocalPosition"}</code> | If true, measures local position, so moving the whole player doesn't count. |
| <Link id="m-lastposition" /><code>{"private Vector3 lastPosition"}</code> | Target position on the last physics step. |
| <Link id="m-lerptoscorepersecond" /><code>{"private float lerpToScorePerSecond"}</code> | How fast `score` eases toward the curve value. |
| <Link id="m-score" /><code>{"private float score"}</code> | Backing field for `Score`. |
| <Link id="m-shakescore" /><code>{"private AnimationCurve shakeScore"}</code> | Curve from speed to shake score. |
| <Link id="m-targettransform" /><code>{"private Transform targetTransform"}</code> | Transform whose movement is measured. |
| <Link id="m-teleportcontroller" /><code>{"private "}<Link to="/game-api/types/global-i-l/locomotioncontroller">{"LocomotionController"}</Link>{" teleportController"}</code> | Locomotion controller watched for teleports. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-score-2" /><code>{"float Score { get; }"}</code> | Current shake score, eased toward the curve value each physics step. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | When tracking world position, hooks the teleport controller so teleports don't count as shaking. |
| <Link id="m-release" /><code>{"void Release(Object activator)"}</code> | Removes an activator; when none are left, resets the score and disables the detector. |
| <Link id="m-request" /><code>{"void Request(Object activator)"}</code> | Adds an activator; the first one resets the score and enables the detector. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | While enabled, measures the target's speed, maps it through `shakeScore` and eases `score` toward it. |
| <Link id="m-setup" /><code>{"private bool Setup()"}</code> | Editor setup: defaults the target to this transform and starts the component disabled. |
| <Link id="m-updateposition" /><code>{"private void UpdatePosition("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> | Shifts the last position by a teleport's offset so the jump isn't scored as movement. |

</details>

## Used in

Members of other types that take, return or hold a `HandShakeOffDetector`:

[`Hand.shakeDetector`](/game-api/types/alta-player/hand#m-shakedetector), [`Hand.ShakeDetector`](/game-api/types/alta-player/hand#m-shakedetector-2), [`MovementHeatPoint.shakeOff`](/game-api/types/alta-stats-effects/movementheatpoint#m-shakeoff), [`HandStaminaManager.handShake`](/game-api/types/game-other-namespaces/handstaminamanager#m-handshake), [`HandStaminaManager.HandShake`](/game-api/types/game-other-namespaces/handstaminamanager#m-handshake-2).
