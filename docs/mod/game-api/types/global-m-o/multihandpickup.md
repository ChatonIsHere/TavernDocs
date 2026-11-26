---
title: "MultiHandPickup"
description: "A pickup that needs several hands (2 or more) to lift, such as a heavy log."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MultiHandPickup

A **class** in `Root.Township`, the global namespace.

A pickup that needs several hands (2 or more) to lift, such as a heavy log. With fewer hands, each grab stays loose and lets go if the hand pulls too far away.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`Pickup`](/mod/game-api/types/global-p/pickup)
- **Documented in** [Items, interaction and damage](/mod/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MultiHandPickup()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-distancecheckcoroutine" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{", Coroutine> distanceCheckCoroutine"}</code> | <span className="api-desc">Running `CheckDistance` coroutine per hand.</span> |
| <Link id="m-iscreatingjoints" /><code>{"private bool isCreatingJoints"}</code> | <span className="api-desc">True while `CreateJoint` is joining all hands, so the inner calls take the normal path.</span> |
| <Link id="m-maxdistancetoreleasesquared" /><code>{"private float maxDistanceToReleaseSquared"}</code> | <span className="api-desc">Squared distance between real and ghost hand that makes a loose grab let go.</span> |
| <Link id="m-minhandstopickup" /><code>{"private int minHandsToPickup"}</code> | <span className="api-desc">Hands needed to lift it (at least 2).</span> |
| <Link id="m-syncvelocity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncVelocity"}</code> | <span className="api-desc">Method sync for the speed at release.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-interactorstorelease" /><code>{"override int InteractorsToRelease { get; }"}</code> | <span className="api-desc">Returns `minHandsToPickup`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-finishinteraction" /><code>{"override void FinishInteraction("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" oldInteractor)"}</code> | <span className="api-desc">When a release leaves one hand too few, drops and regrabs the remaining hands so they go back to the loose state.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Creates the velocity sync.</span> |
| <Link id="m-interact" /><code>{"override void Interact("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Keeps the body kinematic while fewer than `minHandsToPickup` hands hold it.</span> |
| <Link id="m-networkstopinteraction" /><code>{"override void NetworkStopInteraction("}<Link to="/mod/game-api/types/global-i-l/interactarguments">{"InteractArguments"}</Link>{" arguments, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, Action<"}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{"> handleInteractionEnd)"}</code> | <span className="api-desc">Ends the interaction and, if enough hands were holding, applies the networked position, rotation and speed.</span> |
| <Link id="m-addsecondarycollision" /><code>{"protected override void AddSecondaryCollision()"}</code> | <span className="api-desc">Adds the secondary collision check only once enough hands hold it and the last holder is the local player.</span> |
| <Link id="m-createjoint" /><code>{"protected override void CreateJoint("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" newInteractor)"}</code> | <span className="api-desc">Holds off on real joints until `minHandsToPickup` hands grab, then joins all of them at once. Extra hands join normally.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkdistance" /><code>{"private IEnumerator CheckDistance("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor) (iterator)"}</code> | <span className="api-desc">Local coroutine for a hand that can't lift it yet: lets go once the real hand is too far from the ghost hand.</span> |
| <Link id="m-syncvelocity-2" /><code>{"private void SyncVelocity("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Sends the body's speed and spin. The server forwards it to other players.</span> |

</details>
