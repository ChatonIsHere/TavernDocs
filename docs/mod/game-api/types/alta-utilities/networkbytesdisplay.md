---
title: "NetworkBytesDisplay"
description: "Placeholder debug readout for network bytes per second."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkBytesDisplay

A **class** in `Root.Township`, `Alta.Utilities.Profiling`.

Placeholder debug readout for network bytes per second. `IsValid` always returns false and the update is empty, so it never shows.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`LiveDataDisplayBase`](/mod/game-api/types/alta-utilities/livedatadisplaybase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkBytesDisplay()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bytesperinterval" /><code>{"private float bytesPerInterval"}</code> | <span className="api-desc">Count per interval. Never set in this build.</span> |
| <Link id="m-lastbytes" /><code>{"private int lastBytes"}</code> | <span className="api-desc">Previous total count. Never set in this build.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-title" /><code>{"protected override string Title { get; }"}</code> | <span className="api-desc">Label `Bytes (p/s)`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-internalupdate" /><code>{"override void InternalUpdate("}<Link to="/mod/game-api/types/alta-utilities/livedatadisplayview">{"LiveDataDisplayView"}</Link>{" view)"}</code> | <span className="api-desc">Empty in this build.</span> |
| <Link id="m-isvalid" /><code>{"override bool IsValid()"}</code> | <span className="api-desc">Always false.</span> |
| <Link id="m-getdata" /><code>{"protected override string GetData()"}</code> | <span className="api-desc">The stored per-interval count as text.</span> |
