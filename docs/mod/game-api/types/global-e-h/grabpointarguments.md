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
| <Link id="m-ctor" /><code>{"GrabPointArguments("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, bool isForced = false, bool isForcingHold = false)"}</code> | <span className="api-desc">Creates a `GrabPointArguments` from `pickup`, `isForced` and `isForcingHold`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-grabpointindex" /><code>{"private int grabPointIndex"}</code> | <span className="api-desc">Index of the chosen grab point on the pickup.</span> |
| <Link id="m-isforced" /><code>{"private bool isForced"}</code> | <span className="api-desc">Backing field for `IsForced`.</span> |
| <Link id="m-isforcinghold" /><code>{"private bool isForcingHold"}</code> | <span className="api-desc">Backing field for `IsForcingHold`.</span> |
| <Link id="m-lastlinearposition" /><code>{"private float lastLinearPosition"}</code> | <span className="api-desc">Grab point's last position along its line, 0 to 1.</span> |
| <Link id="m-lastposition" /><code>{"private Vector3 lastPosition"}</code> | <span className="api-desc">Grab point's last local position.</span> |
| <Link id="m-lastrotation" /><code>{"private Quaternion lastRotation"}</code> | <span className="api-desc">Grab point's last rotation.</span> |
| <Link id="m-target" /><code>{"private uint target"}</code> | <span className="api-desc">Backing field for `Target`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isaccessingscore" /><code>{"bool IsAccessingScore { get; }"}</code> | <span className="api-desc">Always false.</span> |
| <Link id="m-isforced-2" /><code>{"bool IsForced { get; }"}</code> | <span className="api-desc">Whether the grab is forced; `Interactor` then skips some local checks.</span> |
| <Link id="m-isforcinghold-2" /><code>{"bool IsForcingHold { get; }"}</code> | <span className="api-desc">Whether the grab must be held regardless of the local grab state.</span> |
| <Link id="m-target-2" /><code>{"uint Target { get; }"}</code> | <span className="api-desc">Entity ID of the pickup being grabbed.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applyto" /><code>{"void ApplyTo("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">Restores the saved grab point state on the pickup and sets up that grab point on the interactor.</span> |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads all fields; grab point index is limited to 0 to 15.</span> |

## Used in

Members of other types that take, return or hold a `GrabPointArguments`:

<div className="api-used-in">

[`Interactor.syncStartGrabPoint`](/mod/game-api/types/global-i-l/interactor#m-syncstartgrabpoint), [`Interactor.SyncStartGrabPoint`](/mod/game-api/types/global-i-l/interactor#m-syncstartgrabpoint-2).

</div>
