---
title: "HandGestureTrigger"
description: "Client: forces a hand gesture (such as a pose) on the local player's free hand while it is inside a box near this object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandGestureTrigger

A **class** in `Root.Township`, no namespace.

Client: forces a hand gesture (such as a pose) on the local player's free hand while it is inside a box near this object. Destroys itself on a headless server.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HandGestureTrigger()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | This object's transform, used to convert positions into local space. |
| <Link id="m-definition" /><code>{"private "}<Link to="/game-api/types/global-e-h/handgesturedefinition">{"HandGestureDefinition"}</Link>{" definition"}</code> | The gesture to force on the hand. |
| <Link id="m-distancetotrackplayersquared" /><code>{"private float distanceToTrackPlayerSquared"}</code> | Squared horizontal distance from the feet within which hands are tracked. |
| <Link id="m-largedistancecheckdelay" /><code>{"private float largeDistanceCheckDelay"}</code> | Seconds to wait before checking again when the player is far away. |
| <Link id="m-localbounds" /><code>{"private Bounds localBounds"}</code> | Box in local space that the hand must be inside. |
| <Link id="m-nextcheck" /><code>{"private float nextCheck"}</code> | Real time of the next distance check. |
| <Link id="m-updateplayertracking" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updatePlayerTracking"}</code> | Handle for the registered late update method. |

</details>

## Methods

<details>
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cleancontroller" /><code>{"private void CleanController("}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | Clears this trigger's gesture override from the controller's hand, if it set it, and resets the grip animation. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Stops tracking and clears the override from both hands. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Draws the trigger box in the editor. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Starts tracking the local player now, or once `PlayerController.LocalPlayerSet` fires. |
| <Link id="m-setlocalplayer" /><code>{"private void SetLocalPlayer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | Registers `UpdatePlayerTracking` on the late update loop for the given local player. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Destroys the component on a headless server. |
| <Link id="m-trackcontroller" /><code>{"private void TrackController("}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller, Matrix4x4 worldToLocal)"}</code> | Sets the gesture override while the hand's grip point is inside `localBounds` and the hand holds nothing, else clears it. |
| <Link id="m-updateplayertracking-2" /><code>{"private void UpdatePlayerTracking()"}</code> | Late update: tracks both hands when the player's feet are close, otherwise clears them and waits `largeDistanceCheckDelay` before checking again. |

</details>
