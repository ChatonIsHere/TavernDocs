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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Documented in** [Other systems](/mod/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PullAway()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-actualroot" /><code>{"private Rigidbody actualRoot"}</code> | <span className="api-desc">Rigidbody moved with the hand, kinematic while held.</span> |
| <Link id="m-distancesquared" /><code>{"private float distanceSquared"}</code> | <span className="api-desc">Squared distance from the pull origin that counts as pulled.</span> |
| <Link id="m-fakeinteractable" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" fakeInteractable"}</code> | <span className="api-desc">The interactable players grab.</span> |
| <Link id="m-gripcoroutine" /><code>{"private Coroutine gripCoroutine"}</code> | <span className="api-desc">The running `CheckGrip` coroutine.</span> |
| <Link id="m-hapticsperdistanceratio" /><code>{"private AnimationCurve hapticsPerDistanceRatio"}</code> | <span className="api-desc">Curve from pull progress to haptic strength.</span> |
| <Link id="m-maxdistancepersecond" /><code>{"private float maxDistancePerSecond"}</code> | <span className="api-desc">Speed limit on how fast the object follows the hand; 0 for no limit.</span> |
| <Link id="m-onpulled" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerevent">{"PlayerEvent"}</Link>{" onPulled"}</code> | <span className="api-desc">Player event fired on the server when the object is pulled free.</span> |
| <Link id="m-origin" /><code>{"private Vector3 origin"}</code> | <span className="api-desc">Not used in this class.</span> |
| <Link id="m-pulledhapticduration" /><code>{"private float pulledHapticDuration"}</code> | <span className="api-desc">Haptic length when pulled free (default 0.5 seconds).</span> |
| <Link id="m-pulledhapticstrength" /><code>{"private float pulledHapticStrength"}</code> | <span className="api-desc">Haptic strength when pulled free (default 0.4).</span> |
| <Link id="m-pullorigin" /><code>{"private Vector3 pullOrigin"}</code> | <span className="api-desc">Local point the pull distance is measured from.</span> |
| <Link id="m-releaseonpull" /><code>{"private bool releaseOnPull"}</code> | <span className="api-desc">Makes the player let go once pulled free.</span> |
| <Link id="m-syncpull" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<uint> syncPull"}</code> | <span className="api-desc">Method sync (SyncA) from client to server for a pull.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Creates the pull sync.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the fake interactable's grab and release.</span> |
| <Link id="m-checkgrip" /><code>{"private IEnumerator CheckGrip("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor) (iterator)"}</code> | <span className="api-desc">Coroutine that moves the root after the hand; for the local player, gives haptics and fires or sends the pull once past the distance.</span> |
| <Link id="m-clearcoroutine" /><code>{"private void ClearCoroutine()"}</code> | <span className="api-desc">Stops the running `CheckGrip` coroutine.</span> |
| <Link id="m-endtracking" /><code>{"private void EndTracking("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">On release, stops tracking and makes the root non-kinematic again.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Editor: draws the pull origin and the pull distance sphere.</span> |
| <Link id="m-starttracking" /><code>{"private void StartTracking("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">On grab, starts `CheckGrip` for that interactor.</span> |
| <Link id="m-syncpull-2" /><code>{"private void SyncPull("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, uint playerIdentifier)"}</code> | <span className="api-desc">Sends the pulling player's identifier; the server fires `onPulled` for that player.</span> |

</details>
