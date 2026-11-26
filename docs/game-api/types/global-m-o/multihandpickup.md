---
title: "MultiHandPickup"
description: "A pickup that needs several hands (2 or more) to lift, such as a heavy log."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MultiHandPickup

A **class** in `Root.Township`, no namespace.

A pickup that needs several hands (2 or more) to lift, such as a heavy log. With fewer hands, each grab stays loose and lets go if the hand pulls too far away.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`Pickup`](/game-api/types/global-p/pickup)
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MultiHandPickup()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-distancecheckcoroutine" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{", Coroutine> distanceCheckCoroutine"}</code> | Running `CheckDistance` coroutine per hand. |
| <Link id="m-iscreatingjoints" /><code>{"private bool isCreatingJoints"}</code> | True while `CreateJoint` is joining all hands, so the inner calls take the normal path. |
| <Link id="m-maxdistancetoreleasesquared" /><code>{"private float maxDistanceToReleaseSquared"}</code> | Squared distance between real and ghost hand that makes a loose grab let go. |
| <Link id="m-minhandstopickup" /><code>{"private int minHandsToPickup"}</code> | Hands needed to lift it (at least 2). |
| <Link id="m-syncvelocity" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncVelocity"}</code> | Method sync for the speed at release. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-interactorstorelease" /><code>{"override int InteractorsToRelease { get; }"}</code> | Returns `minHandsToPickup`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-finishinteraction" /><code>{"override void FinishInteraction("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" oldInteractor)"}</code> | When a release leaves one hand too few, drops and regrabs the remaining hands so they go back to the loose state. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the velocity sync. |
| <Link id="m-interact" /><code>{"override void Interact("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Keeps the body kinematic while fewer than `minHandsToPickup` hands hold it. |
| <Link id="m-networkstopinteraction" /><code>{"override void NetworkStopInteraction("}<Link to="/game-api/types/global-i-l/interactarguments">{"InteractArguments"}</Link>{" arguments, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, Action<"}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{"> handleInteractionEnd)"}</code> | Ends the interaction and, if enough hands were holding, applies the networked position, rotation and speed. |
| <Link id="m-addsecondarycollision" /><code>{"protected override void AddSecondaryCollision()"}</code> | Adds the secondary collision check only once enough hands hold it and the last holder is the local player. |
| <Link id="m-createjoint" /><code>{"protected override void CreateJoint("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" newInteractor)"}</code> | Holds off on real joints until `minHandsToPickup` hands grab, then joins all of them at once. Extra hands join normally. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkdistance" /><code>{"private IEnumerator CheckDistance("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor) (iterator)"}</code> | Local coroutine for a hand that can't lift it yet: lets go once the real hand is too far from the ghost hand. |
| <Link id="m-syncvelocity-2" /><code>{"private void SyncVelocity("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Sends the body's speed and spin. The server forwards it to other players. |

</details>
