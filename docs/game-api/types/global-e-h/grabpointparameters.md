---
title: "GrabPointParameters"
description: "class GrabPointParameters in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GrabPointParameters

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GrabPointParameters()"}</code> |  |
| <Link id="m-ctor-2" /><code>{"GrabPointParameters("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/global-e-h/grabpoint">{"GrabPoint"}</Link>{" grabPoint)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-grabpointindex" /><code>{"private int grabPointIndex"}</code> |  |
| <Link id="m-lastlinearposition" /><code>{"private float lastLinearPosition"}</code> |  |
| <Link id="m-lastposition" /><code>{"private Vector3 lastPosition"}</code> |  |
| <Link id="m-lastrotation" /><code>{"private Quaternion lastRotation"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applied" /><code><Link to="/game-api/types/global-e-h/grabpoint">{"GrabPoint"}</Link>{" Applied("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |  |
| <Link id="m-grabpointforpickup" /><code><Link to="/game-api/types/global-e-h/grabpoint">{"GrabPoint"}</Link>{" GrabPointForPickup("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |  |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |  |

## Used in

Members of other types that take, return or hold a `GrabPointParameters`:

[`FakePickup.interactorToGrabPoint`](/game-api/types/global-e-h/fakepickup#m-interactortograbpoint), [`Pickup.dockedMemoryLeft`](/game-api/types/global-p/pickup#m-dockedmemoryleft), [`Pickup.dockedMemoryRight`](/game-api/types/global-p/pickup#m-dockedmemoryright), [`Pickup.GetGrabPoint`](/game-api/types/global-p/pickup#m-getgrabpoint), [`Pickup.interactorToGrabPoint`](/game-api/types/global-p/pickup#m-interactortograbpoint), [`Pickup.SerializeGrabMemory`](/game-api/types/global-p/pickup#m-serializegrabmemory), [`Pickup.UpdateGrabPoint`](/game-api/types/global-p/pickup#m-updategrabpoint), [`PickupSaveData.dockedMemory`](/game-api/types/global-p/pickupsavedata#m-dockedmemory).
