---
title: "GrabPointArguments"
description: "struct GrabPointArguments in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GrabPointArguments

A **struct** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`INetworkInteractArgument`](/game-api/types/global-i-l/inetworkinteractargument)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GrabPointArguments("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, bool isForced = false, bool isForcingHold = false)"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-grabpointindex" /><code>{"private int grabPointIndex"}</code> |
| <Link id="m-isforced" /><code>{"private bool isForced"}</code> |
| <Link id="m-isforcinghold" /><code>{"private bool isForcingHold"}</code> |
| <Link id="m-lastlinearposition" /><code>{"private float lastLinearPosition"}</code> |
| <Link id="m-lastposition" /><code>{"private Vector3 lastPosition"}</code> |
| <Link id="m-lastrotation" /><code>{"private Quaternion lastRotation"}</code> |
| <Link id="m-target" /><code>{"private uint target"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-isaccessingscore" /><code>{"bool IsAccessingScore { get; }"}</code> |
| <Link id="m-isforced-2" /><code>{"bool IsForced { get; }"}</code> |
| <Link id="m-isforcinghold-2" /><code>{"bool IsForcingHold { get; }"}</code> |
| <Link id="m-target-2" /><code>{"uint Target { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-applyto" /><code>{"void ApplyTo("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |

## Used in

Members of other types that take, return or hold a `GrabPointArguments`:

[`Interactor.syncStartGrabPoint`](/game-api/types/global-i-l/interactor#m-syncstartgrabpoint), [`Interactor.SyncStartGrabPoint`](/game-api/types/global-i-l/interactor#m-syncstartgrabpoint-2).
