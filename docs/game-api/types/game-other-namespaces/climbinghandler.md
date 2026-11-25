---
title: "ClimbingHandler"
description: "class ClimbingHandler in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClimbingHandler

A **class** in `Root.Township`, `Features.Climbing`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClimbingHandler("}<Link to="/game-api/types/global-s/smoothlocomotion">{"SmoothLocomotion"}</Link>{" smoothLocomotion, "}<Link to="/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" unlock)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-corelocomotion" /><code>{"private readonly "}<Link to="/game-api/types/global-i-l/locomotioncontroller">{"LocomotionController"}</Link>{" coreLocomotion"}</code> |  |
| <Link id="m-head" /><code>{"private readonly Transform head"}</code> |  |
| <Link id="m-headcachelateupdate" /><code>{"private "}<Link to="/game-api/types/global-q-r/relativepoint">{"RelativePoint"}</Link>{" headCacheLateUpdate"}</code> |  |
| <Link id="m-lefthandpressurecalculator" /><code>{"private readonly "}<Link to="/game-api/types/game-other-namespaces/climbingpressurecalculator">{"ClimbingPressureCalculator"}</Link>{" leftHandPressureCalculator"}</code> |  |
| <Link id="m-minmovedistancecache" /><code>{"private float minMoveDistanceCache"}</code> |  |
| <Link id="m-playerweightstatname" /><code>{"private const string PlayerWeightStatName"}</code> |  |
| <Link id="m-righthandpressurecalculator" /><code>{"private readonly "}<Link to="/game-api/types/game-other-namespaces/climbingpressurecalculator">{"ClimbingPressureCalculator"}</Link>{" rightHandPressureCalculator"}</code> |  |
| <Link id="m-statechangetime" /><code>{"private float stateChangeTime"}</code> |  |
| <Link id="m-unlockmanager" /><code>{"private readonly "}<Link to="/game-api/types/global-p/playerunlockmanager">{"PlayerUnlockManager"}</Link>{" unlockManager"}</code> |  |
| <Link id="m-weightstat" /><code>{"private readonly "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" weightStat"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bodyheight" /><code>{"float BodyHeight { get; private set; }"}</code> |  |
| <Link id="m-friction" /><code>{"float Friction { get; }"}</code> |  |
| <Link id="m-isclimbing" /><code>{"bool IsClimbing { get; }"}</code> |  |
| <Link id="m-layermask" /><code>{"LayerMask LayerMask { get; }"}</code> |  |
| <Link id="m-lefthand" /><code><Link to="/game-api/types/game-other-namespaces/climbinghand">{"ClimbingHand"}</Link>{" LeftHand { get; }"}</code> |  |
| <Link id="m-leftstamina" /><code><Link to="/game-api/types/global-i-l/ihandstaminamanager">{"IHandStaminaManager"}</Link>{" LeftStamina { get; }"}</code> |  |
| <Link id="m-righthand" /><code><Link to="/game-api/types/game-other-namespaces/climbinghand">{"ClimbingHand"}</Link>{" RightHand { get; }"}</code> |  |
| <Link id="m-rightstamina" /><code><Link to="/game-api/types/global-i-l/ihandstaminamanager">{"IHandStaminaManager"}</Link>{" RightStamina { get; }"}</code> |  |
| <Link id="m-settings" /><code><Link to="/game-api/types/global-c-d/climbingsettings">{"ClimbingSettings"}</Link>{" Settings { get; set; }"}</code> |  |
| <Link id="m-smoothlocomotion" /><code><Link to="/game-api/types/global-s/smoothlocomotion">{"SmoothLocomotion"}</Link>{" "}<Link to="/game-api/types/global-s/smoothlocomotion">{"SmoothLocomotion"}</Link>{" { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-lateupdate" /><code>{"void LateUpdate()"}</code> |  |
| <Link id="m-process" /><code>{"void Process()"}</code> |  |
| <Link id="m-adjustheight" /><code>{"private void AdjustHeight(float deltaTime)"}</code> |  |
| <Link id="m-handleclimbing" /><code>{"private void HandleClimbing(float deltaTime)"}</code> |  |
| <Link id="m-handlehandpressure" /><code>{"private void HandleHandPressure(float deltaTime)"}</code> |  |
| <Link id="m-handlesurfacemovement" /><code>{"private void HandleSurfaceMovement()"}</code> |  |
| <Link id="m-hang" /><code>{"private void Hang(float deltaTime, float weight, Vector3 velocity)"}</code> |  |
| <Link id="m-rotate" /><code>{"private void Rotate(float degrees, Vector3 oldCenter, Vector3 newCenter)"}</code> |  |
| <Link id="m-updateheightbasedoncollision" /><code>{"private void UpdateHeightBasedOnCollision()"}</code> |  |

## Used in

Members of other types that take, return or hold a `ClimbingHandler`:

[`Climber.ClimbingHandler`](/game-api/types/global-c-d/climber#m-climbinghandler), [`ClimbingHand.ClimbingHand`](/game-api/types/game-other-namespaces/climbinghand#m-ctor), [`ClimbingHand.handler`](/game-api/types/game-other-namespaces/climbinghand#m-handler), [`ClimbingHandlerAnalytics.handler`](/game-api/types/game-other-namespaces/climbinghandleranalytics#m-handler), [`ClimbingHandlerAnalytics.Setup`](/game-api/types/game-other-namespaces/climbinghandleranalytics#m-setup), [`HandStaminaManager.handler`](/game-api/types/game-other-namespaces/handstaminamanager#m-handler), [`HandStaminaManager.HandStaminaManager`](/game-api/types/game-other-namespaces/handstaminamanager#m-ctor).
