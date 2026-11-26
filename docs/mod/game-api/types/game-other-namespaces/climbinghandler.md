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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClimbingHandler("}<Link to="/mod/game-api/types/global-s/smoothlocomotion">{"SmoothLocomotion"}</Link>{" smoothLocomotion, "}<Link to="/mod/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" unlock)"}</code> | <span className="api-desc">Creates a `ClimbingHandler` from `smoothLocomotion` and `unlock`.</span> |

## Fields

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-corelocomotion" /><code>{"private readonly "}<Link to="/mod/game-api/types/global-i-l/locomotioncontroller">{"LocomotionController"}</Link>{" coreLocomotion"}</code> | <span className="api-desc">The player's locomotion controller.</span> |
| <Link id="m-head" /><code>{"private readonly Transform head"}</code> | <span className="api-desc">The player's head transform.</span> |
| <Link id="m-headcachelateupdate" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/relativepoint">{"RelativePoint"}</Link>{" headCacheLateUpdate"}</code> | <span className="api-desc">Head position from the last late update, used to pin the head while climbing.</span> |
| <Link id="m-lefthandpressurecalculator" /><code>{"private readonly "}<Link to="/mod/game-api/types/game-other-namespaces/climbingpressurecalculator">{"ClimbingPressureCalculator"}</Link>{" leftHandPressureCalculator"}</code> | <span className="api-desc">Pressure maths for the left hand.</span> |
| <Link id="m-minmovedistancecache" /><code>{"private float minMoveDistanceCache"}</code> | <span className="api-desc">Character controller min move distance saved while climbing (set to 0).</span> |
| <Link id="m-playerweightstatname" /><code>{"private const string PlayerWeightStatName"}</code> | <span className="api-desc">Name of the stat added to the base weight (`playerweight`).</span> |
| <Link id="m-righthandpressurecalculator" /><code>{"private readonly "}<Link to="/mod/game-api/types/game-other-namespaces/climbingpressurecalculator">{"ClimbingPressureCalculator"}</Link>{" rightHandPressureCalculator"}</code> | <span className="api-desc">Pressure maths for the right hand.</span> |
| <Link id="m-statechangetime" /><code>{"private float stateChangeTime"}</code> | <span className="api-desc">When climbing last started or stopped, used for `Friction`.</span> |
| <Link id="m-unlockmanager" /><code>{"private readonly "}<Link to="/mod/game-api/types/global-p/playerunlockmanager">{"PlayerUnlockManager"}</Link>{" unlockManager"}</code> | <span className="api-desc">The player's unlock manager, which can override the climb layer mask.</span> |
| <Link id="m-weightstat" /><code>{"private readonly "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" weightStat"}</code> | <span className="api-desc">The player's weight stat, added to the base weight.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bodyheight" /><code>{"float BodyHeight { get; private set; }"}</code> | <span className="api-desc">The current body height. Moves toward the climbing height while climbing and back to normal after.</span> |
| <Link id="m-friction" /><code>{"float Friction { get; }"}</code> | <span className="api-desc">Ground friction from the settings' fade curve, low just after letting go and rising over time.</span> |
| <Link id="m-isclimbing" /><code>{"bool IsClimbing { get; }"}</code> | <span className="api-desc">True while either hand is holding a climbable surface.</span> |
| <Link id="m-layermask" /><code>{"LayerMask LayerMask { get; }"}</code> | <span className="api-desc">Layers that can be climbed. A current unlock that overrides climbing replaces the settings' mask.</span> |
| <Link id="m-lefthand" /><code><Link to="/mod/game-api/types/game-other-namespaces/climbinghand">{"ClimbingHand"}</Link>{" LeftHand { get; }"}</code> | <span className="api-desc">Climbing state for the left hand.</span> |
| <Link id="m-leftstamina" /><code><Link to="/mod/game-api/types/global-i-l/ihandstaminamanager">{"IHandStaminaManager"}</Link>{" LeftStamina { get; }"}</code> | <span className="api-desc">Stamina for the left hand. A fake one that never runs out when the character has no health.</span> |
| <Link id="m-righthand" /><code><Link to="/mod/game-api/types/game-other-namespaces/climbinghand">{"ClimbingHand"}</Link>{" RightHand { get; }"}</code> | <span className="api-desc">Climbing state for the right hand.</span> |
| <Link id="m-rightstamina" /><code><Link to="/mod/game-api/types/global-i-l/ihandstaminamanager">{"IHandStaminaManager"}</Link>{" RightStamina { get; }"}</code> | <span className="api-desc">Stamina for the right hand. A fake one that never runs out when the character has no health.</span> |
| <Link id="m-settings" /><code><Link to="/mod/game-api/types/global-c-d/climbingsettings">{"ClimbingSettings"}</Link>{" Settings { get; set; }"}</code> | <span className="api-desc">The climbing settings, `ClimbingSettings.Instance` by default.</span> |
| <Link id="m-smoothlocomotion" /><code><Link to="/mod/game-api/types/global-s/smoothlocomotion">{"SmoothLocomotion"}</Link>{" "}<Link to="/mod/game-api/types/global-s/smoothlocomotion">{"SmoothLocomotion"}</Link>{" { get; }"}</code> | <span className="api-desc">The locomotion this handler moves.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-lateupdate" /><code>{"void LateUpdate()"}</code> | <span className="api-desc">While climbing, moves the body so the head stays where it was relative to the grip.</span> |
| <Link id="m-process" /><code>{"void Process()"}</code> | <span className="api-desc">Runs one frame of climbing: updates hands, body height, movement, hand pressure and stamina.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-adjustheight" /><code>{"private void AdjustHeight(float deltaTime)"}</code> | <span className="api-desc">Moves the body height towards climbing height or standing height.</span> |
| <Link id="m-handleclimbing" /><code>{"private void HandleClimbing(float deltaTime)"}</code> | <span className="api-desc">Moves the player with the grips, applies hand pressure and keeps the player treated as grounded.</span> |
| <Link id="m-handlehandpressure" /><code>{"private void HandleHandPressure(float deltaTime)"}</code> | <span className="api-desc">Works out pressure from both hands against gravity and weight, then sets the new velocity through `Hang`.</span> |
| <Link id="m-handlesurfacemovement" /><code>{"private void HandleSurfaceMovement()"}</code> | <span className="api-desc">Moves and turns the player to follow how the grip points have moved since last frame.</span> |
| <Link id="m-hang" /><code>{"private void Hang(float deltaTime, float weight, Vector3 velocity)"}</code> | <span className="api-desc">Limits velocity so arms don't stretch past hang distance, using the more stretched hand.</span> |
| <Link id="m-rotate" /><code>{"private void Rotate(float degrees, Vector3 oldCenter, Vector3 newCenter)"}</code> | <span className="api-desc">Turns the player around the old grip centre and moves them to the new one.</span> |
| <Link id="m-updateheightbasedoncollision" /><code>{"private void UpdateHeightBasedOnCollision()"}</code> | <span className="api-desc">After climbing, sets the body height from a sphere cast down so the player doesn't clip into the floor.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ClimbingHandler`:

<div className="api-used-in">

[`Climber.ClimbingHandler`](/mod/game-api/types/global-c-d/climber#m-climbinghandler), [`ClimbingHand.ClimbingHand`](/mod/game-api/types/game-other-namespaces/climbinghand#m-ctor), [`ClimbingHand.handler`](/mod/game-api/types/game-other-namespaces/climbinghand#m-handler), [`ClimbingHandlerAnalytics.handler`](/mod/game-api/types/game-other-namespaces/climbinghandleranalytics#m-handler), [`ClimbingHandlerAnalytics.Setup`](/mod/game-api/types/game-other-namespaces/climbinghandleranalytics#m-setup), [`HandStaminaManager.handler`](/mod/game-api/types/game-other-namespaces/handstaminamanager#m-handler), [`HandStaminaManager.HandStaminaManager`](/mod/game-api/types/game-other-namespaces/handstaminamanager#m-ctor).

</div>
