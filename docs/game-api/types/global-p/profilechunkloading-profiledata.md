---
title: "ProfileChunkLoading.ProfileData"
description: "Results for one load and unload pass of ProfileChunkLoading, a dev tool that force-loads the chunks around set positions and times them."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProfileChunkLoading.ProfileData

A **class** in `Root.Township`, no namespace.

Results for one load and unload pass of `ProfileChunkLoading`, a dev tool that force-loads the chunks around set positions and times them. One instance is reused and logged at Trace level after each position.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Nested in** [`ProfileChunkLoading`](/game-api/types/global-p/profilechunkloading)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ProfileData()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-averagefpsduringload" /><code>{"double AverageFPSDuringLoad { get; set; }"}</code> | Average FPS from `FPSCounter` while the chunks were loading. |
| <Link id="m-averagefpsduringunload" /><code>{"double AverageFPSDuringUnload { get; set; }"}</code> | Average FPS while the chunks were unloading. |
| <Link id="m-iteration" /><code>{"int Iteration { get; set; }"}</code> | Which repeat of the full position list this result is from, counting from 0. |
| <Link id="m-loaddata" /><code><Link to="/game-api/types/global-p/profilechunkloading-gamedata">{"ProfileChunkLoading.GameData"}</Link>{" LoadData { get; set; }"}</code> | A `GameData` holding the total ground area (x times z of chunk bounds) that was loaded. |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | Name of the profiling position being measured. |
| <Link id="m-timetillfullloaded" /><code>{"float TimeTillFullLoaded { get; set; }"}</code> | Milliseconds until every chunk in the set reported fully loaded. |
| <Link id="m-timetillfullunloaded" /><code>{"float TimeTillFullUnloaded { get; set; }"}</code> | Milliseconds until the chunks finished unloading. |

## Used in

Members of other types that take, return or hold a `ProfileData`:

[`ProfileChunkLoading.profilingData`](/game-api/types/global-p/profilechunkloading#m-profilingdata).
