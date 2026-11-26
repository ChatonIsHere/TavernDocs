---
title: "ProfileChunkLoading.ProfileData"
description: "Results for one load and unload pass of ProfileChunkLoading, a dev tool that force-loads the chunks around set positions and times them."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProfileChunkLoading.ProfileData

A **class** in `Root.Township`, the global namespace.

Results for one load and unload pass of `ProfileChunkLoading`, a dev tool that force-loads the chunks around set positions and times them. One instance is reused and logged at Trace level after each position.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Nested in** [`ProfileChunkLoading`](/mod/game-api/types/global-p/profilechunkloading)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ProfileData()"}</code> | <span className="api-desc">Creates a `ProfileChunkLoading.ProfileData` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-averagefpsduringload" /><code>{"double AverageFPSDuringLoad { get; set; }"}</code> | <span className="api-desc">Average FPS from `FPSCounter` while the chunks were loading.</span> |
| <Link id="m-averagefpsduringunload" /><code>{"double AverageFPSDuringUnload { get; set; }"}</code> | <span className="api-desc">Average FPS while the chunks were unloading.</span> |
| <Link id="m-iteration" /><code>{"int Iteration { get; set; }"}</code> | <span className="api-desc">Which repeat of the full position list this result is from, counting from 0.</span> |
| <Link id="m-loaddata" /><code><Link to="/mod/game-api/types/global-p/profilechunkloading-gamedata">{"ProfileChunkLoading.GameData"}</Link>{" LoadData { get; set; }"}</code> | <span className="api-desc">A `GameData` holding the total ground area (x times z of chunk bounds) that was loaded.</span> |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | <span className="api-desc">Name of the profiling position being measured.</span> |
| <Link id="m-timetillfullloaded" /><code>{"float TimeTillFullLoaded { get; set; }"}</code> | <span className="api-desc">Milliseconds until every chunk in the set reported fully loaded.</span> |
| <Link id="m-timetillfullunloaded" /><code>{"float TimeTillFullUnloaded { get; set; }"}</code> | <span className="api-desc">Milliseconds until the chunks finished unloading.</span> |

## Used in

Members of other types that take, return or hold a `ProfileData`:

<div className="api-used-in">

[`ProfileChunkLoading.profilingData`](/mod/game-api/types/global-p/profilechunkloading#m-profilingdata).

</div>
