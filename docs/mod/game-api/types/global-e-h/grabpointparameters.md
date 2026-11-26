---
title: "GrabPointParameters"
description: "Which grab point of a pickup a hand holds and where along it, so a grab can be sent over the network and reapplied."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GrabPointParameters

A **class** in `Root.Township`, the global namespace.

Which grab point of a pickup a hand holds and where along it, so a grab can be sent over the network and reapplied.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GrabPointParameters()"}</code> | Creates a `GrabPointParameters` from `pickup` and `grabPoint`. |
| <Link id="m-ctor-2" /><code>{"GrabPointParameters("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/global-e-h/grabpoint">{"GrabPoint"}</Link>{" grabPoint)"}</code> | Creates a `GrabPointParameters` from `pickup` and `grabPoint`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-grabpointindex" /><code>{"private int grabPointIndex"}</code> | Index of the grab point in the pickup's grab point list (0 to 15 when synced). |
| <Link id="m-lastlinearposition" /><code>{"private float lastLinearPosition"}</code> | The grab point's last position along its line, 0 to 1. |
| <Link id="m-lastposition" /><code>{"private Vector3 lastPosition"}</code> | The grab point's last local position, synced within plus or minus 10 m. |
| <Link id="m-lastrotation" /><code>{"private Quaternion lastRotation"}</code> | The grab point's last rotation, synced compressed. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applied" /><code><Link to="/mod/game-api/types/global-e-h/grabpoint">{"GrabPoint"}</Link>{" Applied("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Writes the stored position and rotation back onto the pickup's grab point and returns it. |
| <Link id="m-grabpointforpickup" /><code><Link to="/mod/game-api/types/global-e-h/grabpoint">{"GrabPoint"}</Link>{" GrabPointForPickup("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Returns the grab point by its stored index. |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Reads or writes the grab point index (0 to 15), linear position, local position and rotation. |

## Used in

Members of other types that take, return or hold a `GrabPointParameters`:

[`FakePickup.interactorToGrabPoint`](/mod/game-api/types/global-e-h/fakepickup#m-interactortograbpoint), [`Pickup.dockedMemoryLeft`](/mod/game-api/types/global-p/pickup#m-dockedmemoryleft), [`Pickup.dockedMemoryRight`](/mod/game-api/types/global-p/pickup#m-dockedmemoryright), [`Pickup.GetGrabPoint`](/mod/game-api/types/global-p/pickup#m-getgrabpoint), [`Pickup.interactorToGrabPoint`](/mod/game-api/types/global-p/pickup#m-interactortograbpoint), [`Pickup.SerializeGrabMemory`](/mod/game-api/types/global-p/pickup#m-serializegrabmemory), [`Pickup.UpdateGrabPoint`](/mod/game-api/types/global-p/pickup#m-updategrabpoint), [`PickupSaveData.dockedMemory`](/mod/game-api/types/global-p/pickupsavedata#m-dockedmemory).
