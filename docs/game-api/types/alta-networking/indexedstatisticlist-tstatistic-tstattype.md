---
title: "IndexedStatisticList<TStatistic, TStatType>"
description: "abstract class IndexedStatisticList<TStatistic, TStatType> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IndexedStatisticList&lt;TStatistic, TStatType&gt;

An **abstract class** in `Root.Township`, `Alta.Profiling.Networking`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`NetworkingStatisticsList<TStatistic>`](/game-api/types/alta-utilities/networkingstatisticslist-t)
- **Derived types** [`EntityMessageStatistics`](/game-api/types/alta-networking/entitymessagestatistics), [`SerializedBehaviourStatistics`](/game-api/types/alta-networking/serializedbehaviourstatistics)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected IndexedStatisticList()"}</code> |

## Fields

| Member |
| --- |
| <Link id="m-typeindexes" /><code>{"protected static Dictionary<TStatType, int> typeIndexes"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-createnewstatistic" /><code>{"protected abstract TStatistic CreateNewStatistic(TStatType creationArgument)"}</code> |
| <Link id="m-ensurestatistictypeindexexists" /><code>{"protected void EnsureStatisticTypeIndexExists(TStatType statType)"}</code> |
