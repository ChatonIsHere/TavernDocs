---
title: "RateLimiter"
description: "new RateLimiter(float targetTickRate) then bool IsRateLimited(): false at most targetTickRate times a second (by Time.realtimeSinceStartup), true in between."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RateLimiter

A **class** in `Alta.Coroutines`, `Alta.Utilities`.

`new RateLimiter(float targetTickRate)` then `bool IsRateLimited()`: false at most `targetTickRate` times a second (by `Time.realtimeSinceStartup`), true in between.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Documented in** [Threads, coroutines and the timeline](/game-api/console-and-utilities/threads-coroutines-and-timeline#ratelimiter), [Alta assemblies](/game-api/console-and-utilities/alta-assemblies)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RateLimiter(float targetTickRate)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-limit" /><code>{"private float limit"}</code> |  |
| <Link id="m-targettickrate" /><code>{"private readonly float targetTickRate"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isratelimited" /><code>{"bool IsRateLimited()"}</code> |  |

## Used in

Members of other types that take, return or hold a `RateLimiter`:

[`QuestMarker.rateLimiter`](/game-api/types/game-other-namespaces/questmarker#m-ratelimiter).
