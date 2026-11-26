---
title: "IndexedStatisticList<TStatistic, TStatType>"
description: "Base for network profiling lists that give each statistic type (such as a message type) a fixed index in the list."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IndexedStatisticList&lt;TStatistic, TStatType&gt;

An **abstract class** in `Root.Township`, `Alta.Profiling.Networking`.

Base for network profiling lists that give each statistic type (such as a message type) a fixed index in the list.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`NetworkingStatisticsList<TStatistic>`](/mod/game-api/types/alta-utilities/networkingstatisticslist-t)
- **Derived types** [`EntityMessageStatistics`](/mod/game-api/types/alta-networking/entitymessagestatistics), [`SerializedBehaviourStatistics`](/mod/game-api/types/alta-networking/serializedbehaviourstatistics)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected IndexedStatisticList()"}</code> | <span className="api-desc">Creates an `IndexedStatisticList` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-typeindexes" /><code>{"protected static Dictionary<TStatType, int> typeIndexes"}</code> | <span className="api-desc">Static map from statistic type to its list index, shared by all instances with the same type arguments.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createnewstatistic" /><code>{"protected abstract TStatistic CreateNewStatistic(TStatType creationArgument)"}</code> | <span className="api-desc">Makes a new statistic for a type the first time it is seen.</span> |
| <Link id="m-ensurestatistictypeindexexists" /><code>{"protected void EnsureStatisticTypeIndexExists(TStatType statType)"}</code> | <span className="api-desc">Gives the type an index if it has none and makes sure a statistic exists at that index.</span> |
