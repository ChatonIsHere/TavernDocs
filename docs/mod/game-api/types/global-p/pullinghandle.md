---
title: "PullingHandle"
description: "A handle that follows the hands holding it inside a box of allowed local positions, and can twist around an axis."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PullingHandle

A **class** in `Root.Township`, the global namespace.

A handle that follows the hands holding it inside a box of allowed local positions, and can twist around an axis. Syncs its final position to everyone when released.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PullingHandle()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lastpositions" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{", Vector3> lastPositions"}</code> | <span className="api-desc">Last grip position of each hand holding the handle.</span> |
| <Link id="m-maxvalue" /><code>{"private Vector3 maxValue"}</code> | <span className="api-desc">Upper corner of the allowed local position box.</span> |
| <Link id="m-minvalue" /><code>{"private Vector3 minValue"}</code> | <span className="api-desc">Lower corner of the allowed local position box.</span> |
| <Link id="m-orientatestohand" /><code>{"private bool orientatesToHand"}</code> | <span className="api-desc">When true, a single holding hand also turns the pickup to match its grip, and rotation is synced.</span> |
| <Link id="m-orientationaxis" /><code>{"private Vector3 orientationAxis"}</code> | <span className="api-desc">Local axis the handle rotates around.</span> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | <span className="api-desc">Pickup the player grabs.</span> |
| <Link id="m-rotatesaroundaxis" /><code>{"private bool rotatesAroundAxis"}</code> | <span className="api-desc">When true, hand movement also rotates the target around `orientationAxis`.</span> |
| <Link id="m-syncedposition" /><code>{"private Vector3 syncedPosition"}</code> | <span className="api-desc">Position buffer used while serializing the release.</span> |
| <Link id="m-syncedrotation" /><code>{"private Quaternion syncedRotation"}</code> | <span className="api-desc">Rotation buffer used while serializing the release.</span> |
| <Link id="m-syncreleaseposition" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncReleasePosition"}</code> | <span className="api-desc">Method sync used to send the release position.</span> |
| <Link id="m-target" /><code>{"private Transform target"}</code> | <span className="api-desc">Transform that is moved by the hands.</span> |
| <Link id="m-trackhands" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" trackHands"}</code> | <span className="api-desc">Handle for the registered tracking update.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the method sync that sends the release position.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the pickup's interaction start and end to start and stop hand tracking.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Deregisters the hand-tracking update.</span> |
| <Link id="m-starttrack" /><code>{"private void StartTrack("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Records the new hand's grip position and starts the tracking update if needed.</span> |
| <Link id="m-stoptrack" /><code>{"private void StopTrack("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">When the last hand lets go, stops tracking, sends the release position if this was the local player, and makes the pickup kinematic.</span> |
| <Link id="m-syncreleaseposition-2" /><code>{"private void SyncReleasePosition("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads the target's local position (and rotation if it orients to hand). The server relays it to the chunk.</span> |
| <Link id="m-trackhands-2" /><code>{"private void TrackHands()"}</code> | <span className="api-desc">Moves the target by how far the hands moved, clamped to `minValue`/`maxValue`, and rotates it around the axis.</span> |

</details>
