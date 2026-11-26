---
title: "GrabAssistController"
description: "Client helper on each Interactor that runs grab assist: while the grab assist action is held and the hand points down, it sphere-casts for a pickup and..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GrabAssistController

A **class** in `Root.Township`, the global namespace.

Client helper on each `Interactor` that runs grab assist: while the grab assist action is held and the hand points down, it sphere-casts for a pickup and grabs it from a distance. Created by `Interactor`, with a `GrabAssistView` for the visuals.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Documented in** [Items, interaction and damage](/mod/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GrabAssistController("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, LayerMask collisionMask, Action onAttemptInteraction)"}</code> | <span className="api-desc">Creates a `GrabAssistController` from `interactor`, `collisionMask` and `onAttemptInteraction`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-grabassistended" /><code>{"Action GrabAssistEnded"}</code> | <span className="api-desc">Raised when the assist search stops.</span> |
| <Link id="m-grabassiststarted" /><code>{"Action GrabAssistStarted"}</code> | <span className="api-desc">Raised when the assist search starts.</span> |
| <Link id="m-grabassistupdated" /><code>{"Action<"}<Link to="/mod/game-api/types/global-e-h/grabassisteventdata">{"GrabAssistEventData"}</Link>{"> GrabAssistUpdated"}</code> | <span className="api-desc">Raised each frame of the search with whether there is a target and the line to draw.</span> |

<details className="api-private">
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-assistoverlap" /><code>{"private readonly RaycastHit[] assistOverlap"}</code> | <span className="api-desc">Buffer for the sphere-cast hits.</span> |
| <Link id="m-collisionmask" /><code>{"private readonly LayerMask collisionMask"}</code> | <span className="api-desc">Layers the sphere-cast searches.</span> |
| <Link id="m-grabassistpathmaterial" /><code>{"private Material grabAssistPathMaterial"}</code> | <span className="api-desc">Unused in this build.</span> |
| <Link id="m-handinversion" /><code>{"private readonly int handInversion"}</code> | <span className="api-desc">-1 for the right hand, 1 for the left, to mirror the assist direction.</span> |
| <Link id="m-interactor" /><code>{"private readonly "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor"}</code> | <span className="api-desc">The interactor (hand) this assist belongs to.</span> |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> | <span className="api-desc">Whether grab assist is on.</span> |
| <Link id="m-lastgrabassisttarget" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" lastGrabAssistTarget"}</code> | <span className="api-desc">Target found by the last search, grabbed on the next grab attempt.</span> |
| <Link id="m-onattemptinteraction" /><code>{"private readonly Action OnAttemptInteraction"}</code> | <span className="api-desc">Callback from the interactor, called on each grab attempt.</span> |
| <Link id="m-startgrabassisttimestamp" /><code>{"private float startGrabAssistTimeStamp"}</code> | <span className="api-desc">Time the current search started, for the start delay.</span> |
| <Link id="m-updateassist" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateAssist"}</code> | <span className="api-desc">Update registration while the search is running.</span> |
| <Link id="m-view" /><code>{"private readonly "}<Link to="/mod/game-api/types/global-e-h/grabassistview">{"GrabAssistView"}</Link>{" view"}</code> | <span className="api-desc">Visuals for the assist line.</span> |

</details>

## Properties

<details className="api-private">
<summary>3 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-grabassistdirection" /><code>{"private Vector3 GrabAssistDirection { get; }"}</code> | <span className="api-desc">Direction of the assist ray from the hand, mirrored for the right hand.</span> |
| <Link id="m-grabassistorigin" /><code>{"private Vector3 GrabAssistOrigin { get; }"}</code> | <span className="api-desc">Start of the assist ray, at the interactor's trigger object.</span> |
| <Link id="m-settings" /><code>{"private static "}<Link to="/mod/game-api/types/global-e-h/grabassistsettings">{"GrabAssistSettings"}</Link>{" Settings { get; }"}</code> | <span className="api-desc">The global `GrabAssistSettings`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkgrabassist" /><code>{"bool CheckGrabAssist()"}</code> | <span className="api-desc">If grab assist has a valid target, grabs it and returns true.</span> |
| <Link id="m-checkgraborstartupdatinggrabassist" /><code>{"void CheckGrabOrStartUpdatingGrabAssist()"}</code> | <span className="api-desc">On a grab attempt: uses the assist target, else the best nearby interactable, else starts searching.</span> |
| <Link id="m-disable" /><code>{"void Disable()"}</code> | <span className="api-desc">Turns grab assist off and unhooks the grab assist action.</span> |
| <Link id="m-stopupdatinggrabassist" /><code>{"void StopUpdatingGrabAssist("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" _, bool __)"}</code> | <span className="api-desc">Stops the search, clears the target and raises `GrabAssistEnded`.</span> |

<details className="api-private">
<summary>17 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-adjustlengthforobstacles" /><code>{"private float AdjustLengthForObstacles(Vector3 grabAssistDirection, float baseGrabAssistLength)"}</code> | <span className="api-desc">Shortens the search to the first obstacle hit along the assist direction.</span> |
| <Link id="m-dotproductfromdown" /><code>{"private float DotProductFromDown(Vector3 grabAssistDownDirection)"}</code> | <span className="api-desc">How much a direction points down, from -1 to 1.</span> |
| <Link id="m-enable" /><code>{"private void Enable()"}</code> | <span className="api-desc">Turns grab assist on and hooks the grab assist action's start and end.</span> |
| <Link id="m-getassistgrabtargetscore" /><code>{"private float GetAssistGrabTargetScore("}<Link to="/mod/game-api/types/global-a-b/assistgrabinteractable">{"AssistGrabInteractable"}</Link>{" grabInteractable, float previousLowestScore)"}</code> | <span className="api-desc">Score for an `AssistGrabInteractable`, if it is a root entity on a shared channel and can be interacted with.</span> |
| <Link id="m-getclosestpointonpickup" /><code>{"private Vector3 GetClosestPointOnPickup("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" lastPickup, Vector3 origin, Vector3 closestPoint)"}</code> | <span className="api-desc">Closest point on the pickup's solid default-layer colliders, falling back to its best grab point.</span> |
| <Link id="m-getclosestpointontarget" /><code>{"private Vector3 GetClosestPointOnTarget(Vector3 origin)"}</code> | <span className="api-desc">Point on the current target the assist line ends at.</span> |
| <Link id="m-getinteractablescore" /><code>{"private float GetInteractableScore("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, float previousLowestScore)"}</code> | <span className="api-desc">Scores a hit pickup or assist-grab interactable; other types get no score.</span> |
| <Link id="m-getoverlapcount" /><code>{"private int GetOverlapCount(Vector3 grabAssistDirection, float adjustedLength)"}</code> | <span className="api-desc">Sphere-casts along the assist direction and stores up to 10 hits.</span> |
| <Link id="m-getpickuptargetscore" /><code>{"private float GetPickupTargetScore("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, float previousLowestScore)"}</code> | <span className="api-desc">Score for a pickup if it is free, not docked, not moving, allowed to assist grab and can be interacted with.</span> |
| <Link id="m-getsearchablelength" /><code>{"private static float GetSearchableLength(Vector3 grabAssistDirection)"}</code> | <span className="api-desc">Search length from settings, longer the more the hand points straight down.</span> |
| <Link id="m-gettarget" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" GetTarget(int overlapCount)"}</code> | <span className="api-desc">Picks a target from the sphere-cast hits. It keeps the last valid hit, not the lowest score, as the best score is never updated.</span> |
| <Link id="m-gettargetposition" /><code>{"private Vector3 GetTargetPosition(Vector3 grabAssistDirection, bool hasTarget, float length)"}</code> | <span className="api-desc">Where the assist line ends: on the target, or at the end of the search.</span> |
| <Link id="m-hasstartdelaytimeelapsed" /><code>{"private bool HasStartDelayTimeElapsed()"}</code> | <span className="api-desc">True once the settings' start delay has passed since the search began.</span> |
| <Link id="m-iswithinactiveangle" /><code>{"private bool IsWithinActiveAngle(Vector3 grabAssistDirection)"}</code> | <span className="api-desc">True when the hand points down enough for assist to work.</span> |
| <Link id="m-onsettingschanged" /><code>{"private void OnSettingsChanged(Settings _)"}</code> | <span className="api-desc">Turns assist on or off from the game setting. It is never subscribed in this build, only unsubscribed.</span> |
| <Link id="m-startupdatinggrabassist" /><code>{"private void StartUpdatingGrabAssist("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" _)"}</code> | <span className="api-desc">Starts the per-frame target search unless grab assist is blocked.</span> |
| <Link id="m-updateassisttarget" /><code>{"private void UpdateAssistTarget()"}</code> | <span className="api-desc">Per-frame search: finds the target along the assist ray and raises `GrabAssistUpdated`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `GrabAssistController`:

<div className="api-used-in">

[`GrabAssistView.Disable`](/mod/game-api/types/global-e-h/grabassistview#m-disable), [`GrabAssistView.Enable`](/mod/game-api/types/global-e-h/grabassistview#m-enable), [`GrabAssistView.GrabAssistView`](/mod/game-api/types/global-e-h/grabassistview#m-ctor), [`Interactor.grabAssistController`](/mod/game-api/types/global-i-l/interactor#m-grabassistcontroller).

</div>
