---
title: "HandInteractor"
description: "Client: detects hand to hand gestures like high fives or fist bumps when two empty hands' triggers meet, and plays their effects and sound."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandInteractor

A **class** in `Root.Township`, no namespace.

Client: detects hand to hand gestures like high fives or fist bumps when two empty hands' triggers meet, and plays their effects and sound. Off on the headless server.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`HandInteraction`](/game-api/types/global-e-h/handinteractor-handinteraction)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"HandInteractor()"}</code> |

## Fields

<details>
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-controller" /><code>{"private "}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller"}</code> | The hand's controller. |
| <Link id="m-currentposition" /><code>{"private Vector3 currentPosition"}</code> | Hand position from the last fixed update. |
| <Link id="m-isbeingdestroyed" /><code>{"private bool isBeingDestroyed"}</code> | Set in `OnDestroy` so tracking is not restarted. |
| <Link id="m-lastposition" /><code>{"private Vector3 lastPosition"}</code> | Smoothed earlier position used for `MoveDirection`. |
| <Link id="m-lerpspeed" /><code>{"private float lerpSpeed"}</code> | How fast the last position catches up to the current one. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Class logger. |
| <Link id="m-maxdistancesquared" /><code>{"private float maxDistanceSquared"}</code> | Max squared movement for a match, so spawning or teleporting does not trigger sounds. |
| <Link id="m-possibleinteractions" /><code>{"private "}<Link to="/game-api/types/global-e-h/handinteractor-handinteraction">{"HandInteractor.HandInteraction"}</Link>{"[] possibleInteractions"}</code> | The hand interactions to test on contact. |
| <Link id="m-trigger" /><code>{"private Collider trigger"}</code> | Trigger collider, only on while the hand is free. |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | Registered fixed update method while tracking. |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | Shared fixed update module for all hand interactors. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isinteracting" /><code>{"bool IsInteracting { get; private set; }"}</code> | Whether the hand's interactor is busy with something. |
| <Link id="m-movedirection" /><code>{"Vector3 MoveDirection { get; }"}</code> | How far the hand moved from its smoothed last position, used as speed and direction. |
| <Link id="m-player" /><code><Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" Player { get; private set; }"}</code> | The player controller this hand belongs to. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-reset" /><code>{"void Reset()"}</code> | Sets the last position to the current one, zeroing `MoveDirection`. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Turns the trigger off until the hand is free. |
| <Link id="m-endedinteraction" /><code>{"private void EndedInteraction("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | When the hand stops holding or using something, turns the trigger on and starts tracking movement. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Stops the update and marks the hand as being destroyed. |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | When another free hand touches this one, checks each possible interaction and resets both on a match. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Client: finds the player and hooks the interactor's start and end events. |
| <Link id="m-startedinteraction" /><code>{"private void StartedInteraction("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | When the hand starts an interaction, stops tracking and turns the trigger off. |
| <Link id="m-updatedistance" /><code>{"private void UpdateDistance()"}</code> | Fixed update: lerps the last position toward the current one. |

</details>

## Used in

Members of other types that take, return or hold a `HandInteractor`:

[`HandInteractor.HandInteraction.IsValid`](/game-api/types/global-e-h/handinteractor-handinteraction#m-isvalid).
