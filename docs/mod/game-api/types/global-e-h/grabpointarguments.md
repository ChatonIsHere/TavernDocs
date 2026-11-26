---
title: "GrabPointArguments"
description: "Network argument sent when a hand grabs a pickup."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GrabPointArguments

A **struct** in `Root.Township`, the global namespace.

Network argument sent when a hand grabs a pickup. It carries the pickup ID, which grab point was used and its last position, so the other side sets up the same grip.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`INetworkInteractArgument`](/mod/game-api/types/global-i-l/inetworkinteractargument)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GrabPointArguments("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, bool isForced = false, bool isForcingHold = false)"}</code> | Creates a `GrabPointArguments` from `pickup`, `isForced` and `isForcingHold`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-grabpointindex" /><code>{"private int grabPointIndex"}</code> | Index of the chosen grab point on the pickup. |
| <Link id="m-isforced" /><code>{"private bool isForced"}</code> | Backing field for `IsForced`. |
| <Link id="m-isforcinghold" /><code>{"private bool isForcingHold"}</code> | Backing field for `IsForcingHold`. |
| <Link id="m-lastlinearposition" /><code>{"private float lastLinearPosition"}</code> | Grab point's last position along its line, 0 to 1. |
| <Link id="m-lastposition" /><code>{"private Vector3 lastPosition"}</code> | Grab point's last local position. |
| <Link id="m-lastrotation" /><code>{"private Quaternion lastRotation"}</code> | Grab point's last rotation. |
| <Link id="m-target" /><code>{"private uint target"}</code> | Backing field for `Target`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isaccessingscore" /><code>{"bool IsAccessingScore { get; }"}</code> | Always false. |
| <Link id="m-isforced-2" /><code>{"bool IsForced { get; }"}</code> | Whether the grab is forced; `Interactor` then skips some local checks. |
| <Link id="m-isforcinghold-2" /><code>{"bool IsForcingHold { get; }"}</code> | Whether the grab must be held regardless of the local grab state. |
| <Link id="m-target-2" /><code>{"uint Target { get; }"}</code> | Entity ID of the pickup being grabbed. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applyto" /><code>{"void ApplyTo("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Restores the saved grab point state on the pickup and sets up that grab point on the interactor. |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads all fields; grab point index is limited to 0 to 15. |

## Used in

Members of other types that take, return or hold a `GrabPointArguments`:

[`Interactor.syncStartGrabPoint`](/mod/game-api/types/global-i-l/interactor#m-syncstartgrabpoint), [`Interactor.SyncStartGrabPoint`](/mod/game-api/types/global-i-l/interactor#m-syncstartgrabpoint-2).
