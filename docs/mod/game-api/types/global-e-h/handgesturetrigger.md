---
title: "HandGestureTrigger"
description: "Client: forces a hand gesture (such as a pose) on the local player's free hand while it is inside a box near this object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandGestureTrigger

A **class** in `Root.Township`, the global namespace.

Client: forces a hand gesture (such as a pose) on the local player's free hand while it is inside a box near this object. Destroys itself on a headless server.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HandGestureTrigger()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | <span className="api-desc">This object's transform, used to convert positions into local space.</span> |
| <Link id="m-definition" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/handgesturedefinition">{"HandGestureDefinition"}</Link>{" definition"}</code> | <span className="api-desc">The gesture to force on the hand.</span> |
| <Link id="m-distancetotrackplayersquared" /><code>{"private float distanceToTrackPlayerSquared"}</code> | <span className="api-desc">Squared horizontal distance from the feet within which hands are tracked.</span> |
| <Link id="m-largedistancecheckdelay" /><code>{"private float largeDistanceCheckDelay"}</code> | <span className="api-desc">Seconds to wait before checking again when the player is far away.</span> |
| <Link id="m-localbounds" /><code>{"private Bounds localBounds"}</code> | <span className="api-desc">Box in local space that the hand must be inside.</span> |
| <Link id="m-nextcheck" /><code>{"private float nextCheck"}</code> | <span className="api-desc">Real time of the next distance check.</span> |
| <Link id="m-updateplayertracking" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updatePlayerTracking"}</code> | <span className="api-desc">Handle for the registered late update method.</span> |

</details>

## Methods

<details className="api-private">
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cleancontroller" /><code>{"private void CleanController("}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | <span className="api-desc">Clears this trigger's gesture override from the controller's hand, if it set it, and resets the grip animation.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Stops tracking and clears the override from both hands.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws the trigger box in the editor.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Starts tracking the local player now, or once `PlayerController.LocalPlayerSet` fires.</span> |
| <Link id="m-setlocalplayer" /><code>{"private void SetLocalPlayer("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | <span className="api-desc">Registers `UpdatePlayerTracking` on the late update loop for the given local player.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Destroys the component on a headless server.</span> |
| <Link id="m-trackcontroller" /><code>{"private void TrackController("}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller, Matrix4x4 worldToLocal)"}</code> | <span className="api-desc">Sets the gesture override while the hand's grip point is inside `localBounds` and the hand holds nothing, else clears it.</span> |
| <Link id="m-updateplayertracking-2" /><code>{"private void UpdatePlayerTracking()"}</code> | <span className="api-desc">Late update: tracks both hands when the player's feet are close, otherwise clears them and waits `largeDistanceCheckDelay` before checking again.</span> |

</details>
