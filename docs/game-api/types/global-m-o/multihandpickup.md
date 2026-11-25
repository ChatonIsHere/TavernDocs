---
title: "MultiHandPickup"
description: "class MultiHandPickup in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MultiHandPickup

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`Pickup`](/game-api/types/global-p/pickup)
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MultiHandPickup()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-distancecheckcoroutine" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{", Coroutine> distanceCheckCoroutine"}</code> |  |
| <Link id="m-iscreatingjoints" /><code>{"private bool isCreatingJoints"}</code> |  |
| <Link id="m-maxdistancetoreleasesquared" /><code>{"private float maxDistanceToReleaseSquared"}</code> |  |
| <Link id="m-minhandstopickup" /><code>{"private int minHandsToPickup"}</code> |  |
| <Link id="m-syncvelocity" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncVelocity"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-interactorstorelease" /><code>{"override int InteractorsToRelease { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-finishinteraction" /><code>{"override void FinishInteraction("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" oldInteractor)"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-interact" /><code>{"override void Interact("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-networkstopinteraction" /><code>{"override void NetworkStopInteraction("}<Link to="/game-api/types/global-i-l/interactarguments">{"InteractArguments"}</Link>{" arguments, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, Action<"}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{"> handleInteractionEnd)"}</code> |  |
| <Link id="m-addsecondarycollision" /><code>{"protected override void AddSecondaryCollision()"}</code> |  |
| <Link id="m-checkdistance" /><code>{"private IEnumerator CheckDistance("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor) (iterator)"}</code> |  |
| <Link id="m-createjoint" /><code>{"protected override void CreateJoint("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" newInteractor)"}</code> |  |
| <Link id="m-syncvelocity-2" /><code>{"private void SyncVelocity("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
