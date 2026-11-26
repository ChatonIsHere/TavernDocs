---
title: "BuildupPickup.DisposeData"
description: "Message the server sends to chunks when a BuildupPickup loses a child, so clients dispose the same slot."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BuildupPickup.DisposeData

A **private struct** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Message the server sends to chunks when a `BuildupPickup` loses a child, so clients dispose the same slot.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Nested in** [`BuildupPickup`](/mod/game-api/types/global-a-b/builduppickup)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DisposeData(int index, bool isForced)"}</code> | <span className="api-desc">Creates a `BuildupPickup.DisposeData` from `index` and `isForced`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-index" /><code>{"int Index { get; }"}</code> | <span className="api-desc">Index of the slot that lost its child.</span> |
| <Link id="m-isforced" /><code>{"bool IsForced { get; }"}</code> | <span className="api-desc">Whether the dispose was forced, passed on to the child's disposable pickups.</span> |

## Used in

Members of other types that take, return or hold a `DisposeData`:

<div className="api-used-in">

[`BuildupPickup.NetworkLoseChild`](/mod/game-api/types/global-a-b/builduppickup#m-networklosechild), [`BuildupPickup.syncLoseChild`](/mod/game-api/types/global-a-b/builduppickup#m-synclosechild).

</div>
