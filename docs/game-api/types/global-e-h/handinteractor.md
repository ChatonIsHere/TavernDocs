---
title: "HandInteractor"
description: "class HandInteractor in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandInteractor

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`HandInteraction`](/game-api/types/global-e-h/handinteractor-handinteraction)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HandInteractor()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-controller" /><code>{"private "}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller"}</code> |  |
| <Link id="m-currentposition" /><code>{"private Vector3 currentPosition"}</code> |  |
| <Link id="m-isbeingdestroyed" /><code>{"private bool isBeingDestroyed"}</code> |  |
| <Link id="m-lastposition" /><code>{"private Vector3 lastPosition"}</code> |  |
| <Link id="m-lerpspeed" /><code>{"private float lerpSpeed"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-maxdistancesquared" /><code>{"private float maxDistanceSquared"}</code> |  |
| <Link id="m-possibleinteractions" /><code>{"private "}<Link to="/game-api/types/global-e-h/handinteractor-handinteraction">{"HandInteractor.HandInteraction"}</Link>{"[] possibleInteractions"}</code> |  |
| <Link id="m-trigger" /><code>{"private Collider trigger"}</code> |  |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> |  |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isinteracting" /><code>{"bool IsInteracting { get; private set; }"}</code> |  |
| <Link id="m-movedirection" /><code>{"Vector3 MoveDirection { get; }"}</code> |  |
| <Link id="m-player" /><code><Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" Player { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-reset" /><code>{"void Reset()"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-endedinteraction" /><code>{"private void EndedInteraction("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |
| <Link id="m-startedinteraction" /><code>{"private void StartedInteraction("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> |  |
| <Link id="m-updatedistance" /><code>{"private void UpdateDistance()"}</code> |  |

## Used in

Members of other types that take, return or hold a `HandInteractor`:

[`HandInteractor.HandInteraction.IsValid`](/game-api/types/global-e-h/handinteractor-handinteraction#m-isvalid).
