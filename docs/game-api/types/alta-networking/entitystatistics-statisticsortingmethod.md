---
title: "EntityStatistics.StatisticSortingMethod"
description: "Private: what EntityStatistics sorts entities by: bytes per second, bytes per frame, average send size or send count."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EntityStatistics.StatisticSortingMethod

An **private enum** in `Root.Township`, `Alta.Profiling.Networking`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private: what `EntityStatistics` sorts entities by: bytes per second, bytes per frame, average send size or send count.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Nested in** [`EntityStatistics`](/game-api/types/alta-networking/entitystatistics)

## Values

| Member |
| --- |
| <Link id="m-averagesendsize" /><code>{"AverageSendSize = 2"}</code> |
| <Link id="m-bytesperframe" /><code>{"BytesPerFrame = 1"}</code> |
| <Link id="m-bytespersecond" /><code>{"BytesPerSecond = 0"}</code> |
| <Link id="m-sentcount" /><code>{"SentCount = 3"}</code> |

## Used in

Members of other types that take, return or hold a `StatisticSortingMethod`:

[`EntityStatistics.sortingMethod`](/game-api/types/alta-networking/entitystatistics#m-sortingmethod).
