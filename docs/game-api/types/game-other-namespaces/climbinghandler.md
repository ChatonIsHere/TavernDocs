---
title: "ClimbingHandler"
description: "Runs climbing for one player's smooth locomotion: tracks both hands' grips and stamina, moves and turns the body as the hands move, and holds the body up..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClimbingHandler

A **class** in `Root.Township`, `Features.Climbing`.

Runs climbing for one player's smooth locomotion: tracks both hands' grips and stamina, moves and turns the body as the hands move, and holds the body up against gravity.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ClimbingHandler("}<Link to="/game-api/types/global-s/smoothlocomotion">{"SmoothLocomotion"}</Link>{" smoothLocomotion, "}<Link to="/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" unlock)"}</code> |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-corelocomotion" /><code>{"private readonly "}<Link to="/game-api/types/global-i-l/locomotioncontroller">{"LocomotionController"}</Link>{" coreLocomotion"}</code> | The player's locomotion controller. |
| <Link id="m-head" /><code>{"private readonly Transform head"}</code> | The player's head transform. |
| <Link id="m-headcachelateupdate" /><code>{"private "}<Link to="/game-api/types/global-q-r/relativepoint">{"RelativePoint"}</Link>{" headCacheLateUpdate"}</code> | Head position from the last late update, used to pin the head while climbing. |
| <Link id="m-lefthandpressurecalculator" /><code>{"private readonly "}<Link to="/game-api/types/game-other-namespaces/climbingpressurecalculator">{"ClimbingPressureCalculator"}</Link>{" leftHandPressureCalculator"}</code> | Pressure maths for the left hand. |
| <Link id="m-minmovedistancecache" /><code>{"private float minMoveDistanceCache"}</code> | Character controller min move distance saved while climbing (set to 0). |
| <Link id="m-playerweightstatname" /><code>{"private const string PlayerWeightStatName"}</code> | Name of the stat added to the base weight (`playerweight`). |
| <Link id="m-righthandpressurecalculator" /><code>{"private readonly "}<Link to="/game-api/types/game-other-namespaces/climbingpressurecalculator">{"ClimbingPressureCalculator"}</Link>{" rightHandPressureCalculator"}</code> | Pressure maths for the right hand. |
| <Link id="m-statechangetime" /><code>{"private float stateChangeTime"}</code> | When climbing last started or stopped, used for `Friction`. |
| <Link id="m-unlockmanager" /><code>{"private readonly "}<Link to="/game-api/types/global-p/playerunlockmanager">{"PlayerUnlockManager"}</Link>{" unlockManager"}</code> | The player's unlock manager, which can override the climb layer mask. |
| <Link id="m-weightstat" /><code>{"private readonly "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" weightStat"}</code> | The player's weight stat, added to the base weight. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bodyheight" /><code>{"float BodyHeight { get; private set; }"}</code> | The current body height. Moves toward the climbing height while climbing and back to normal after. |
| <Link id="m-friction" /><code>{"float Friction { get; }"}</code> | Ground friction from the settings' fade curve, low just after letting go and rising over time. |
| <Link id="m-isclimbing" /><code>{"bool IsClimbing { get; }"}</code> | True while either hand is holding a climbable surface. |
| <Link id="m-layermask" /><code>{"LayerMask LayerMask { get; }"}</code> | Layers that can be climbed. A current unlock that overrides climbing replaces the settings' mask. |
| <Link id="m-lefthand" /><code><Link to="/game-api/types/game-other-namespaces/climbinghand">{"ClimbingHand"}</Link>{" LeftHand { get; }"}</code> | Climbing state for the left hand. |
| <Link id="m-leftstamina" /><code><Link to="/game-api/types/global-i-l/ihandstaminamanager">{"IHandStaminaManager"}</Link>{" LeftStamina { get; }"}</code> | Stamina for the left hand. A fake one that never runs out when the character has no health. |
| <Link id="m-righthand" /><code><Link to="/game-api/types/game-other-namespaces/climbinghand">{"ClimbingHand"}</Link>{" RightHand { get; }"}</code> | Climbing state for the right hand. |
| <Link id="m-rightstamina" /><code><Link to="/game-api/types/global-i-l/ihandstaminamanager">{"IHandStaminaManager"}</Link>{" RightStamina { get; }"}</code> | Stamina for the right hand. A fake one that never runs out when the character has no health. |
| <Link id="m-settings" /><code><Link to="/game-api/types/global-c-d/climbingsettings">{"ClimbingSettings"}</Link>{" Settings { get; set; }"}</code> | The climbing settings, `ClimbingSettings.Instance` by default. |
| <Link id="m-smoothlocomotion" /><code><Link to="/game-api/types/global-s/smoothlocomotion">{"SmoothLocomotion"}</Link>{" "}<Link to="/game-api/types/global-s/smoothlocomotion">{"SmoothLocomotion"}</Link>{" { get; }"}</code> | The locomotion this handler moves. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-lateupdate" /><code>{"void LateUpdate()"}</code> | While climbing, moves the body so the head stays where it was relative to the grip. |
| <Link id="m-process" /><code>{"void Process()"}</code> | Runs one frame of climbing: updates hands, body height, movement, hand pressure and stamina. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-adjustheight" /><code>{"private void AdjustHeight(float deltaTime)"}</code> | Moves the body height towards climbing height or standing height. |
| <Link id="m-handleclimbing" /><code>{"private void HandleClimbing(float deltaTime)"}</code> | Moves the player with the grips, applies hand pressure and keeps the player treated as grounded. |
| <Link id="m-handlehandpressure" /><code>{"private void HandleHandPressure(float deltaTime)"}</code> | Works out pressure from both hands against gravity and weight, then sets the new velocity through `Hang`. |
| <Link id="m-handlesurfacemovement" /><code>{"private void HandleSurfaceMovement()"}</code> | Moves and turns the player to follow how the grip points have moved since last frame. |
| <Link id="m-hang" /><code>{"private void Hang(float deltaTime, float weight, Vector3 velocity)"}</code> | Limits velocity so arms don't stretch past hang distance, using the more stretched hand. |
| <Link id="m-rotate" /><code>{"private void Rotate(float degrees, Vector3 oldCenter, Vector3 newCenter)"}</code> | Turns the player around the old grip centre and moves them to the new one. |
| <Link id="m-updateheightbasedoncollision" /><code>{"private void UpdateHeightBasedOnCollision()"}</code> | After climbing, sets the body height from a sphere cast down so the player doesn't clip into the floor. |

</details>

## Used in

Members of other types that take, return or hold a `ClimbingHandler`:

[`Climber.ClimbingHandler`](/game-api/types/global-c-d/climber#m-climbinghandler), [`ClimbingHand.ClimbingHand`](/game-api/types/game-other-namespaces/climbinghand#m-ctor), [`ClimbingHand.handler`](/game-api/types/game-other-namespaces/climbinghand#m-handler), [`ClimbingHandlerAnalytics.handler`](/game-api/types/game-other-namespaces/climbinghandleranalytics#m-handler), [`ClimbingHandlerAnalytics.Setup`](/game-api/types/game-other-namespaces/climbinghandleranalytics#m-setup), [`HandStaminaManager.handler`](/game-api/types/game-other-namespaces/handstaminamanager#m-handler), [`HandStaminaManager.HandStaminaManager`](/game-api/types/game-other-namespaces/handstaminamanager#m-ctor).
