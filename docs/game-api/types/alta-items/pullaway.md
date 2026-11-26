---
title: "PullAway"
description: "Lets a player pull an object a set distance by grabbing a fake interactable, then fires onPulled on the server (such as pulling a root out of the ground)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PullAway

A **class** in `Root.Township`, `Alta.Mechanisms`.

Lets a player pull an object a set distance by grabbing a fake interactable, then fires `onPulled` on the server (such as pulling a root out of the ground). The holding player's game decides when the pull counts.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Documented in** [Other systems](/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PullAway()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-actualroot" /><code>{"private Rigidbody actualRoot"}</code> | Rigidbody moved with the hand, kinematic while held. |
| <Link id="m-distancesquared" /><code>{"private float distanceSquared"}</code> | Squared distance from the pull origin that counts as pulled. |
| <Link id="m-fakeinteractable" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" fakeInteractable"}</code> | The interactable players grab. |
| <Link id="m-gripcoroutine" /><code>{"private Coroutine gripCoroutine"}</code> | The running `CheckGrip` coroutine. |
| <Link id="m-hapticsperdistanceratio" /><code>{"private AnimationCurve hapticsPerDistanceRatio"}</code> | Curve from pull progress to haptic strength. |
| <Link id="m-maxdistancepersecond" /><code>{"private float maxDistancePerSecond"}</code> | Speed limit on how fast the object follows the hand; 0 for no limit. |
| <Link id="m-onpulled" /><code>{"private "}<Link to="/game-api/types/global-p/playerevent">{"PlayerEvent"}</Link>{" onPulled"}</code> | Player event fired on the server when the object is pulled free. |
| <Link id="m-origin" /><code>{"private Vector3 origin"}</code> | Not used in this class. |
| <Link id="m-pulledhapticduration" /><code>{"private float pulledHapticDuration"}</code> | Haptic length when pulled free (default 0.5 seconds). |
| <Link id="m-pulledhapticstrength" /><code>{"private float pulledHapticStrength"}</code> | Haptic strength when pulled free (default 0.4). |
| <Link id="m-pullorigin" /><code>{"private Vector3 pullOrigin"}</code> | Local point the pull distance is measured from. |
| <Link id="m-releaseonpull" /><code>{"private bool releaseOnPull"}</code> | Makes the player let go once pulled free. |
| <Link id="m-syncpull" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<uint> syncPull"}</code> | Method sync (SyncA) from client to server for a pull. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the pull sync. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the fake interactable's grab and release. |
| <Link id="m-checkgrip" /><code>{"private IEnumerator CheckGrip("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor) (iterator)"}</code> | Coroutine that moves the root after the hand; for the local player, gives haptics and fires or sends the pull once past the distance. |
| <Link id="m-clearcoroutine" /><code>{"private void ClearCoroutine()"}</code> | Stops the running `CheckGrip` coroutine. |
| <Link id="m-endtracking" /><code>{"private void EndTracking("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | On release, stops tracking and makes the root non-kinematic again. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Editor: draws the pull origin and the pull distance sphere. |
| <Link id="m-starttracking" /><code>{"private void StartTracking("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | On grab, starts `CheckGrip` for that interactor. |
| <Link id="m-syncpull-2" /><code>{"private void SyncPull("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, uint playerIdentifier)"}</code> | Sends the pulling player's identifier; the server fires `onPulled` for that player. |

</details>
