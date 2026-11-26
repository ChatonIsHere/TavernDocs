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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Documented in** [Heat](/mod/game-api/game-systems/heat)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HandShakeOffDetector()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activators" /><code>{"private HashSet<Object> activators"}</code> | <span className="api-desc">Objects that have requested the detector; it runs while any remain.</span> |
| <Link id="m-islocalposition" /><code>{"private bool isLocalPosition"}</code> | <span className="api-desc">If true, measures local position, so moving the whole player doesn't count.</span> |
| <Link id="m-lastposition" /><code>{"private Vector3 lastPosition"}</code> | <span className="api-desc">Target position on the last physics step.</span> |
| <Link id="m-lerptoscorepersecond" /><code>{"private float lerpToScorePerSecond"}</code> | <span className="api-desc">How fast `score` eases toward the curve value.</span> |
| <Link id="m-score" /><code>{"private float score"}</code> | <span className="api-desc">Backing field for `Score`.</span> |
| <Link id="m-shakescore" /><code>{"private AnimationCurve shakeScore"}</code> | <span className="api-desc">Curve from speed to shake score.</span> |
| <Link id="m-targettransform" /><code>{"private Transform targetTransform"}</code> | <span className="api-desc">Transform whose movement is measured.</span> |
| <Link id="m-teleportcontroller" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/locomotioncontroller">{"LocomotionController"}</Link>{" teleportController"}</code> | <span className="api-desc">Locomotion controller watched for teleports.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-score-2" /><code>{"float Score { get; }"}</code> | <span className="api-desc">Current shake score, eased toward the curve value each physics step.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">When tracking world position, hooks the teleport controller so teleports don't count as shaking.</span> |
| <Link id="m-release" /><code>{"void Release(Object activator)"}</code> | <span className="api-desc">Removes an activator; when none are left, resets the score and disables the detector.</span> |
| <Link id="m-request" /><code>{"void Request(Object activator)"}</code> | <span className="api-desc">Adds an activator; the first one resets the score and enables the detector.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | <span className="api-desc">While enabled, measures the target's speed, maps it through `shakeScore` and eases `score` toward it.</span> |
| <Link id="m-setup" /><code>{"private bool Setup()"}</code> | <span className="api-desc">Editor setup: defaults the target to this transform and starts the component disabled.</span> |
| <Link id="m-updateposition" /><code>{"private void UpdatePosition("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/mod/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> | <span className="api-desc">Shifts the last position by a teleport's offset so the jump isn't scored as movement.</span> |

</details>

## Used in

Members of other types that take, return or hold a `HandShakeOffDetector`:

<div className="api-used-in">

[`Hand.shakeDetector`](/mod/game-api/types/alta-player/hand#m-shakedetector), [`Hand.ShakeDetector`](/mod/game-api/types/alta-player/hand#m-shakedetector-2), [`MovementHeatPoint.shakeOff`](/mod/game-api/types/alta-stats-effects/movementheatpoint#m-shakeoff), [`HandStaminaManager.handShake`](/mod/game-api/types/game-other-namespaces/handstaminamanager#m-handshake), [`HandStaminaManager.HandShake`](/mod/game-api/types/game-other-namespaces/handstaminamanager#m-handshake-2).

</div>
