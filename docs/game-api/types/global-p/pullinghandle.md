---
title: "PullingHandle"
description: "A handle that follows the hands holding it inside a box of allowed local positions, and can twist around an axis."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PullingHandle

A **class** in `Root.Township`, no namespace.

A handle that follows the hands holding it inside a box of allowed local positions, and can twist around an axis. Syncs its final position to everyone when released.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PullingHandle()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lastpositions" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{", Vector3> lastPositions"}</code> | Last grip position of each hand holding the handle. |
| <Link id="m-maxvalue" /><code>{"private Vector3 maxValue"}</code> | Upper corner of the allowed local position box. |
| <Link id="m-minvalue" /><code>{"private Vector3 minValue"}</code> | Lower corner of the allowed local position box. |
| <Link id="m-orientatestohand" /><code>{"private bool orientatesToHand"}</code> | When true, a single holding hand also turns the pickup to match its grip, and rotation is synced. |
| <Link id="m-orientationaxis" /><code>{"private Vector3 orientationAxis"}</code> | Local axis the handle rotates around. |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | Pickup the player grabs. |
| <Link id="m-rotatesaroundaxis" /><code>{"private bool rotatesAroundAxis"}</code> | When true, hand movement also rotates the target around `orientationAxis`. |
| <Link id="m-syncedposition" /><code>{"private Vector3 syncedPosition"}</code> | Position buffer used while serializing the release. |
| <Link id="m-syncedrotation" /><code>{"private Quaternion syncedRotation"}</code> | Rotation buffer used while serializing the release. |
| <Link id="m-syncreleaseposition" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncReleasePosition"}</code> | Method sync used to send the release position. |
| <Link id="m-target" /><code>{"private Transform target"}</code> | Transform that is moved by the hands. |
| <Link id="m-trackhands" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" trackHands"}</code> | Handle for the registered tracking update. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the method sync that sends the release position. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the pickup's interaction start and end to start and stop hand tracking. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Deregisters the hand-tracking update. |
| <Link id="m-starttrack" /><code>{"private void StartTrack("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Records the new hand's grip position and starts the tracking update if needed. |
| <Link id="m-stoptrack" /><code>{"private void StopTrack("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | When the last hand lets go, stops tracking, sends the release position if this was the local player, and makes the pickup kinematic. |
| <Link id="m-syncreleaseposition-2" /><code>{"private void SyncReleasePosition("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads the target's local position (and rotation if it orients to hand). The server relays it to the chunk. |
| <Link id="m-trackhands-2" /><code>{"private void TrackHands()"}</code> | Moves the target by how far the hands moved, clamped to `minValue`/`maxValue`, and rotates it around the axis. |

</details>
