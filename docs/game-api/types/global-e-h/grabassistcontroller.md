---
title: "GrabAssistController"
description: "class GrabAssistController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GrabAssistController

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GrabAssistController("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, LayerMask collisionMask, Action onAttemptInteraction)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-grabassistended" /><code>{"Action GrabAssistEnded"}</code> |  |
| <Link id="m-grabassiststarted" /><code>{"Action GrabAssistStarted"}</code> |  |
| <Link id="m-grabassistupdated" /><code>{"Action<"}<Link to="/game-api/types/global-e-h/grabassisteventdata">{"GrabAssistEventData"}</Link>{"> GrabAssistUpdated"}</code> |  |
| <Link id="m-assistoverlap" /><code>{"private readonly RaycastHit[] assistOverlap"}</code> |  |
| <Link id="m-collisionmask" /><code>{"private readonly LayerMask collisionMask"}</code> |  |
| <Link id="m-grabassistpathmaterial" /><code>{"private Material grabAssistPathMaterial"}</code> |  |
| <Link id="m-handinversion" /><code>{"private readonly int handInversion"}</code> |  |
| <Link id="m-interactor" /><code>{"private readonly "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor"}</code> |  |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> |  |
| <Link id="m-lastgrabassisttarget" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" lastGrabAssistTarget"}</code> |  |
| <Link id="m-onattemptinteraction" /><code>{"private readonly Action OnAttemptInteraction"}</code> |  |
| <Link id="m-startgrabassisttimestamp" /><code>{"private float startGrabAssistTimeStamp"}</code> |  |
| <Link id="m-updateassist" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateAssist"}</code> |  |
| <Link id="m-view" /><code>{"private readonly "}<Link to="/game-api/types/global-e-h/grabassistview">{"GrabAssistView"}</Link>{" view"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-grabassistdirection" /><code>{"private Vector3 GrabAssistDirection { get; }"}</code> |  |
| <Link id="m-grabassistorigin" /><code>{"private Vector3 GrabAssistOrigin { get; }"}</code> |  |
| <Link id="m-settings" /><code>{"private static "}<Link to="/game-api/types/global-e-h/grabassistsettings">{"GrabAssistSettings"}</Link>{" Settings { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkgrabassist" /><code>{"bool CheckGrabAssist()"}</code> |  |
| <Link id="m-checkgraborstartupdatinggrabassist" /><code>{"void CheckGrabOrStartUpdatingGrabAssist()"}</code> |  |
| <Link id="m-disable" /><code>{"void Disable()"}</code> |  |
| <Link id="m-stopupdatinggrabassist" /><code>{"void StopUpdatingGrabAssist("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" _, bool __)"}</code> |  |
| <Link id="m-adjustlengthforobstacles" /><code>{"private float AdjustLengthForObstacles(Vector3 grabAssistDirection, float baseGrabAssistLength)"}</code> |  |
| <Link id="m-dotproductfromdown" /><code>{"private float DotProductFromDown(Vector3 grabAssistDownDirection)"}</code> |  |
| <Link id="m-enable" /><code>{"private void Enable()"}</code> |  |
| <Link id="m-getassistgrabtargetscore" /><code>{"private float GetAssistGrabTargetScore("}<Link to="/game-api/types/global-a-b/assistgrabinteractable">{"AssistGrabInteractable"}</Link>{" grabInteractable, float previousLowestScore)"}</code> |  |
| <Link id="m-getclosestpointonpickup" /><code>{"private Vector3 GetClosestPointOnPickup("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" lastPickup, Vector3 origin, Vector3 closestPoint)"}</code> |  |
| <Link id="m-getclosestpointontarget" /><code>{"private Vector3 GetClosestPointOnTarget(Vector3 origin)"}</code> |  |
| <Link id="m-getinteractablescore" /><code>{"private float GetInteractableScore("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, float previousLowestScore)"}</code> |  |
| <Link id="m-getoverlapcount" /><code>{"private int GetOverlapCount(Vector3 grabAssistDirection, float adjustedLength)"}</code> |  |
| <Link id="m-getpickuptargetscore" /><code>{"private float GetPickupTargetScore("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, float previousLowestScore)"}</code> |  |
| <Link id="m-getsearchablelength" /><code>{"private static float GetSearchableLength(Vector3 grabAssistDirection)"}</code> |  |
| <Link id="m-gettarget" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" GetTarget(int overlapCount)"}</code> |  |
| <Link id="m-gettargetposition" /><code>{"private Vector3 GetTargetPosition(Vector3 grabAssistDirection, bool hasTarget, float length)"}</code> |  |
| <Link id="m-hasstartdelaytimeelapsed" /><code>{"private bool HasStartDelayTimeElapsed()"}</code> |  |
| <Link id="m-iswithinactiveangle" /><code>{"private bool IsWithinActiveAngle(Vector3 grabAssistDirection)"}</code> |  |
| <Link id="m-onsettingschanged" /><code>{"private void OnSettingsChanged(Settings _)"}</code> |  |
| <Link id="m-startupdatinggrabassist" /><code>{"private void StartUpdatingGrabAssist("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" _)"}</code> |  |
| <Link id="m-updateassisttarget" /><code>{"private void UpdateAssistTarget()"}</code> |  |

## Used in

Members of other types that take, return or hold a `GrabAssistController`:

[`GrabAssistView.Disable`](/game-api/types/global-e-h/grabassistview#m-disable), [`GrabAssistView.Enable`](/game-api/types/global-e-h/grabassistview#m-enable), [`GrabAssistView.GrabAssistView`](/game-api/types/global-e-h/grabassistview#m-ctor), [`Interactor.grabAssistController`](/game-api/types/global-i-l/interactor#m-grabassistcontroller).
