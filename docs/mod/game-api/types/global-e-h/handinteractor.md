---
title: "HandInteractor"
description: "Client: detects hand to hand gestures like high fives or fist bumps when two empty hands' triggers meet, and plays their effects and sound."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandInteractor

A **class** in `Root.Township`, the global namespace.

Client: detects hand to hand gestures like high fives or fist bumps when two empty hands' triggers meet, and plays their effects and sound. Off on the headless server.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`HandInteraction`](/mod/game-api/types/global-e-h/handinteractor-handinteraction)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HandInteractor()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-controller" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller"}</code> | <span className="api-desc">The hand's controller.</span> |
| <Link id="m-currentposition" /><code>{"private Vector3 currentPosition"}</code> | <span className="api-desc">Hand position from the last fixed update.</span> |
| <Link id="m-isbeingdestroyed" /><code>{"private bool isBeingDestroyed"}</code> | <span className="api-desc">Set in `OnDestroy` so tracking is not restarted.</span> |
| <Link id="m-lastposition" /><code>{"private Vector3 lastPosition"}</code> | <span className="api-desc">Smoothed earlier position used for `MoveDirection`.</span> |
| <Link id="m-lerpspeed" /><code>{"private float lerpSpeed"}</code> | <span className="api-desc">How fast the last position catches up to the current one.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Class logger.</span> |
| <Link id="m-maxdistancesquared" /><code>{"private float maxDistanceSquared"}</code> | <span className="api-desc">Max squared movement for a match, so spawning or teleporting does not trigger sounds.</span> |
| <Link id="m-possibleinteractions" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/handinteractor-handinteraction">{"HandInteractor.HandInteraction"}</Link>{"[] possibleInteractions"}</code> | <span className="api-desc">The hand interactions to test on contact.</span> |
| <Link id="m-trigger" /><code>{"private Collider trigger"}</code> | <span className="api-desc">Trigger collider, only on while the hand is free.</span> |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | <span className="api-desc">Registered fixed update method while tracking.</span> |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | <span className="api-desc">Shared fixed update module for all hand interactors.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isinteracting" /><code>{"bool IsInteracting { get; private set; }"}</code> | <span className="api-desc">Whether the hand's interactor is busy with something.</span> |
| <Link id="m-movedirection" /><code>{"Vector3 MoveDirection { get; }"}</code> | <span className="api-desc">How far the hand moved from its smoothed last position, used as speed and direction.</span> |
| <Link id="m-player" /><code><Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" Player { get; private set; }"}</code> | <span className="api-desc">The player controller this hand belongs to.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-reset" /><code>{"void Reset()"}</code> | <span className="api-desc">Sets the last position to the current one, zeroing `MoveDirection`.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Turns the trigger off until the hand is free.</span> |
| <Link id="m-endedinteraction" /><code>{"private void EndedInteraction("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | <span className="api-desc">When the hand stops holding or using something, turns the trigger on and starts tracking movement.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Stops the update and marks the hand as being destroyed.</span> |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | <span className="api-desc">When another free hand touches this one, checks each possible interaction and resets both on a match.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Client: finds the player and hooks the interactor's start and end events.</span> |
| <Link id="m-startedinteraction" /><code>{"private void StartedInteraction("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | <span className="api-desc">When the hand starts an interaction, stops tracking and turns the trigger off.</span> |
| <Link id="m-updatedistance" /><code>{"private void UpdateDistance()"}</code> | <span className="api-desc">Fixed update: lerps the last position toward the current one.</span> |

</details>

## Used in

Members of other types that take, return or hold a `HandInteractor`:

<div className="api-used-in">

[`HandInteractor.HandInteraction.IsValid`](/mod/game-api/types/global-e-h/handinteractor-handinteraction#m-isvalid).

</div>
