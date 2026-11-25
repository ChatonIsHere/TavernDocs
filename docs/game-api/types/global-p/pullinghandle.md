---
title: "PullingHandle"
description: "class PullingHandle in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PullingHandle

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PullingHandle()"}</code> |

## Fields

<details>
<summary>12 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-lastpositions" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{", Vector3> lastPositions"}</code> |
| <Link id="m-maxvalue" /><code>{"private Vector3 maxValue"}</code> |
| <Link id="m-minvalue" /><code>{"private Vector3 minValue"}</code> |
| <Link id="m-orientatestohand" /><code>{"private bool orientatesToHand"}</code> |
| <Link id="m-orientationaxis" /><code>{"private Vector3 orientationAxis"}</code> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> |
| <Link id="m-rotatesaroundaxis" /><code>{"private bool rotatesAroundAxis"}</code> |
| <Link id="m-syncedposition" /><code>{"private Vector3 syncedPosition"}</code> |
| <Link id="m-syncedrotation" /><code>{"private Quaternion syncedRotation"}</code> |
| <Link id="m-syncreleaseposition" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncReleasePosition"}</code> |
| <Link id="m-target" /><code>{"private Transform target"}</code> |
| <Link id="m-trackhands" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" trackHands"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |

<details>
<summary>6 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-starttrack" /><code>{"private void StartTrack("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-stoptrack" /><code>{"private void StopTrack("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-syncreleaseposition-2" /><code>{"private void SyncReleasePosition("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-trackhands-2" /><code>{"private void TrackHands()"}</code> |

</details>
