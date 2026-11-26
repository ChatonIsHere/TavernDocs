---
title: "Arrow.ArrowFlightSync"
description: "Message the server sends to chunks when an arrow starts its flight, so clients simulate the same random deviance."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Arrow.ArrowFlightSync

A **private struct** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Message the server sends to chunks when an arrow starts its flight, so clients simulate the same random deviance.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Nested in** [`Arrow`](/mod/game-api/types/global-a-b/arrow)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ArrowFlightSync(float speed, int seed)"}</code> | <span className="api-desc">Creates an `Arrow.ArrowFlightSync` from `speed` and `seed`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-flightspeed" /><code>{"float flightSpeed"}</code> | <span className="api-desc">Arrow launch speed, sent from 0 to 1000 at 0.01 precision.</span> |
| <Link id="m-randomseed" /><code>{"int randomSeed"}</code> | <span className="api-desc">Seed for the arrow's deviance random state.</span> |

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"internal void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Reads or writes the seed and speed. The seed is sent with a range of -1 up, while the server picks seeds across the whole int range, so negative seeds probably don't arrive intact.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ArrowFlightSync`:

<div className="api-used-in">

[`Arrow.syncFlight`](/mod/game-api/types/global-a-b/arrow#m-syncflight), [`Arrow.SyncFlight`](/mod/game-api/types/global-a-b/arrow#m-syncflight-2).

</div>
