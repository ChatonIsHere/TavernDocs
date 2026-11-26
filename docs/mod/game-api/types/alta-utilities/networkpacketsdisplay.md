---
title: "NetworkPacketsDisplay"
description: "Placeholder debug readout for network packets per second."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkPacketsDisplay

A **class** in `Root.Township`, `Alta.Utilities.Profiling`.

Placeholder debug readout for network packets per second. `IsValid` always returns false and the update is empty, so it never shows.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`LiveDataDisplayBase`](/mod/game-api/types/alta-utilities/livedatadisplaybase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkPacketsDisplay()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lastpackets" /><code>{"private int lastPackets"}</code> | Previous total count. Never set in this build. |
| <Link id="m-packetsperinterval" /><code>{"private float packetsPerInterval"}</code> | Count per interval. Never set in this build. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-title" /><code>{"protected override string Title { get; }"}</code> | Label `Packets (p/s)`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-internalupdate" /><code>{"override void InternalUpdate("}<Link to="/mod/game-api/types/alta-utilities/livedatadisplayview">{"LiveDataDisplayView"}</Link>{" view)"}</code> | Empty in this build. |
| <Link id="m-isvalid" /><code>{"override bool IsValid()"}</code> | Always false. |
| <Link id="m-getdata" /><code>{"protected override string GetData()"}</code> | The stored per-interval count as text. |
