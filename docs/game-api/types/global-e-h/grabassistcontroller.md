---
title: "GrabAssistController"
description: "Client helper on each Interactor that runs grab assist: while the grab assist action is held and the hand points down, it sphere-casts for a pickup and..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GrabAssistController

A **class** in `Root.Township`, no namespace.

Client helper on each `Interactor` that runs grab assist: while the grab assist action is held and the hand points down, it sphere-casts for a pickup and grabs it from a distance. Created by `Interactor`, with a `GrabAssistView` for the visuals.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GrabAssistController("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, LayerMask collisionMask, Action onAttemptInteraction)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-grabassistended" /><code>{"Action GrabAssistEnded"}</code> | Raised when the assist search stops. |
| <Link id="m-grabassiststarted" /><code>{"Action GrabAssistStarted"}</code> | Raised when the assist search starts. |
| <Link id="m-grabassistupdated" /><code>{"Action<"}<Link to="/game-api/types/global-e-h/grabassisteventdata">{"GrabAssistEventData"}</Link>{"> GrabAssistUpdated"}</code> | Raised each frame of the search with whether there is a target and the line to draw. |

<details>
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-assistoverlap" /><code>{"private readonly RaycastHit[] assistOverlap"}</code> | Buffer for the sphere-cast hits. |
| <Link id="m-collisionmask" /><code>{"private readonly LayerMask collisionMask"}</code> | Layers the sphere-cast searches. |
| <Link id="m-grabassistpathmaterial" /><code>{"private Material grabAssistPathMaterial"}</code> | Unused in this build. |
| <Link id="m-handinversion" /><code>{"private readonly int handInversion"}</code> | -1 for the right hand, 1 for the left, to mirror the assist direction. |
| <Link id="m-interactor" /><code>{"private readonly "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor"}</code> | The interactor (hand) this assist belongs to. |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> | Whether grab assist is on. |
| <Link id="m-lastgrabassisttarget" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" lastGrabAssistTarget"}</code> | Target found by the last search, grabbed on the next grab attempt. |
| <Link id="m-onattemptinteraction" /><code>{"private readonly Action OnAttemptInteraction"}</code> | Callback from the interactor, called on each grab attempt. |
| <Link id="m-startgrabassisttimestamp" /><code>{"private float startGrabAssistTimeStamp"}</code> | Time the current search started, for the start delay. |
| <Link id="m-updateassist" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateAssist"}</code> | Update registration while the search is running. |
| <Link id="m-view" /><code>{"private readonly "}<Link to="/game-api/types/global-e-h/grabassistview">{"GrabAssistView"}</Link>{" view"}</code> | Visuals for the assist line. |

</details>

## Properties

<details>
<summary>3 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-grabassistdirection" /><code>{"private Vector3 GrabAssistDirection { get; }"}</code> | Direction of the assist ray from the hand, mirrored for the right hand. |
| <Link id="m-grabassistorigin" /><code>{"private Vector3 GrabAssistOrigin { get; }"}</code> | Start of the assist ray, at the interactor's trigger object. |
| <Link id="m-settings" /><code>{"private static "}<Link to="/game-api/types/global-e-h/grabassistsettings">{"GrabAssistSettings"}</Link>{" Settings { get; }"}</code> | The global `GrabAssistSettings`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkgrabassist" /><code>{"bool CheckGrabAssist()"}</code> | If grab assist has a valid target, grabs it and returns true. |
| <Link id="m-checkgraborstartupdatinggrabassist" /><code>{"void CheckGrabOrStartUpdatingGrabAssist()"}</code> | On a grab attempt: uses the assist target, else the best nearby interactable, else starts searching. |
| <Link id="m-disable" /><code>{"void Disable()"}</code> | Turns grab assist off and unhooks the grab assist action. |
| <Link id="m-stopupdatinggrabassist" /><code>{"void StopUpdatingGrabAssist("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" _, bool __)"}</code> | Stops the search, clears the target and raises `GrabAssistEnded`. |

<details>
<summary>17 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-adjustlengthforobstacles" /><code>{"private float AdjustLengthForObstacles(Vector3 grabAssistDirection, float baseGrabAssistLength)"}</code> | Shortens the search to the first obstacle hit along the assist direction. |
| <Link id="m-dotproductfromdown" /><code>{"private float DotProductFromDown(Vector3 grabAssistDownDirection)"}</code> | How much a direction points down, from -1 to 1. |
| <Link id="m-enable" /><code>{"private void Enable()"}</code> | Turns grab assist on and hooks the grab assist action's start and end. |
| <Link id="m-getassistgrabtargetscore" /><code>{"private float GetAssistGrabTargetScore("}<Link to="/game-api/types/global-a-b/assistgrabinteractable">{"AssistGrabInteractable"}</Link>{" grabInteractable, float previousLowestScore)"}</code> | Score for an `AssistGrabInteractable`, if it is a root entity on a shared channel and can be interacted with. |
| <Link id="m-getclosestpointonpickup" /><code>{"private Vector3 GetClosestPointOnPickup("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" lastPickup, Vector3 origin, Vector3 closestPoint)"}</code> | Closest point on the pickup's solid default-layer colliders, falling back to its best grab point. |
| <Link id="m-getclosestpointontarget" /><code>{"private Vector3 GetClosestPointOnTarget(Vector3 origin)"}</code> | Point on the current target the assist line ends at. |
| <Link id="m-getinteractablescore" /><code>{"private float GetInteractableScore("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, float previousLowestScore)"}</code> | Scores a hit pickup or assist-grab interactable; other types get no score. |
| <Link id="m-getoverlapcount" /><code>{"private int GetOverlapCount(Vector3 grabAssistDirection, float adjustedLength)"}</code> | Sphere-casts along the assist direction and stores up to 10 hits. |
| <Link id="m-getpickuptargetscore" /><code>{"private float GetPickupTargetScore("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, float previousLowestScore)"}</code> | Score for a pickup if it is free, not docked, not moving, allowed to assist grab and can be interacted with. |
| <Link id="m-getsearchablelength" /><code>{"private static float GetSearchableLength(Vector3 grabAssistDirection)"}</code> | Search length from settings, longer the more the hand points straight down. |
| <Link id="m-gettarget" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" GetTarget(int overlapCount)"}</code> | Picks a target from the sphere-cast hits. It keeps the last valid hit, not the lowest score, as the best score is never updated. |
| <Link id="m-gettargetposition" /><code>{"private Vector3 GetTargetPosition(Vector3 grabAssistDirection, bool hasTarget, float length)"}</code> | Where the assist line ends: on the target, or at the end of the search. |
| <Link id="m-hasstartdelaytimeelapsed" /><code>{"private bool HasStartDelayTimeElapsed()"}</code> | True once the settings' start delay has passed since the search began. |
| <Link id="m-iswithinactiveangle" /><code>{"private bool IsWithinActiveAngle(Vector3 grabAssistDirection)"}</code> | True when the hand points down enough for assist to work. |
| <Link id="m-onsettingschanged" /><code>{"private void OnSettingsChanged(Settings _)"}</code> | Turns assist on or off from the game setting. It is never subscribed in this build, only unsubscribed. |
| <Link id="m-startupdatinggrabassist" /><code>{"private void StartUpdatingGrabAssist("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" _)"}</code> | Starts the per-frame target search unless grab assist is blocked. |
| <Link id="m-updateassisttarget" /><code>{"private void UpdateAssistTarget()"}</code> | Per-frame search: finds the target along the assist ray and raises `GrabAssistUpdated`. |

</details>

## Used in

Members of other types that take, return or hold a `GrabAssistController`:

[`GrabAssistView.Disable`](/game-api/types/global-e-h/grabassistview#m-disable), [`GrabAssistView.Enable`](/game-api/types/global-e-h/grabassistview#m-enable), [`GrabAssistView.GrabAssistView`](/game-api/types/global-e-h/grabassistview#m-ctor), [`Interactor.grabAssistController`](/game-api/types/global-i-l/interactor#m-grabassistcontroller).
