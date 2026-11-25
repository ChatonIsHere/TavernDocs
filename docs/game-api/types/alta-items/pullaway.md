---
title: "PullAway"
description: "Something you pull off, raising onPulled past a distance."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PullAway

A **class** in `Root.Township`, `Alta.Mechanisms`.

Something you pull off, raising `onPulled` past a distance.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Documented in** [Other systems](/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PullAway()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-actualroot" /><code>{"private Rigidbody actualRoot"}</code> |  |
| <Link id="m-distancesquared" /><code>{"private float distanceSquared"}</code> |  |
| <Link id="m-fakeinteractable" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" fakeInteractable"}</code> |  |
| <Link id="m-gripcoroutine" /><code>{"private Coroutine gripCoroutine"}</code> |  |
| <Link id="m-hapticsperdistanceratio" /><code>{"private AnimationCurve hapticsPerDistanceRatio"}</code> |  |
| <Link id="m-maxdistancepersecond" /><code>{"private float maxDistancePerSecond"}</code> |  |
| <Link id="m-onpulled" /><code>{"private "}<Link to="/game-api/types/global-p/playerevent">{"PlayerEvent"}</Link>{" onPulled"}</code> |  |
| <Link id="m-origin" /><code>{"private Vector3 origin"}</code> |  |
| <Link id="m-pulledhapticduration" /><code>{"private float pulledHapticDuration"}</code> |  |
| <Link id="m-pulledhapticstrength" /><code>{"private float pulledHapticStrength"}</code> |  |
| <Link id="m-pullorigin" /><code>{"private Vector3 pullOrigin"}</code> |  |
| <Link id="m-releaseonpull" /><code>{"private bool releaseOnPull"}</code> |  |
| <Link id="m-syncpull" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<uint> syncPull"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-checkgrip" /><code>{"private IEnumerator CheckGrip("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor) (iterator)"}</code> |  |
| <Link id="m-clearcoroutine" /><code>{"private void ClearCoroutine()"}</code> |  |
| <Link id="m-endtracking" /><code>{"private void EndTracking("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-starttracking" /><code>{"private void StartTracking("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-syncpull-2" /><code>{"private void SyncPull("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, uint playerIdentifier)"}</code> |  |
