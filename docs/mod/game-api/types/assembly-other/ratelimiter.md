---
title: "RateLimiter"
description: "Simple real-time rate limiter: construct it with a ticks-per-second target, then call IsRateLimited each frame."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RateLimiter

A **class** in `Alta.Coroutines`, `Alta.Utilities`.

Simple real-time rate limiter: construct it with a ticks-per-second target, then call `IsRateLimited` each frame. Used by `QuestMarker`.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Documented in** [Threads, coroutines and the timeline](/mod/game-api/console-and-utilities/threads-coroutines-and-timeline#ratelimiter), [Alta assemblies](/mod/game-api/console-and-utilities/alta-assemblies)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RateLimiter(float targetTickRate)"}</code> | <span className="api-desc">Creates a `RateLimiter` from `targetTickRate`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-limit" /><code>{"private float limit"}</code> | <span className="api-desc">Real time (`Time.realtimeSinceStartup`) before which calls are rate limited.</span> |
| <Link id="m-targettickrate" /><code>{"private readonly float targetTickRate"}</code> | <span className="api-desc">Seconds between ticks (one over the ticks per second passed to the constructor).</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isratelimited" /><code>{"bool IsRateLimited()"}</code> | <span className="api-desc">Returns true until the next tick is due; when it returns false it schedules the next tick. Never limits if the rate is zero or less.</span> |

## Used in

Members of other types that take, return or hold a `RateLimiter`:

<div className="api-used-in">

[`QuestMarker.rateLimiter`](/mod/game-api/types/game-other-namespaces/questmarker#m-ratelimiter).

</div>
