---
title: "SerializedBehaviourStatistics"
description: "Profiling list of bytes sent, one statistic per serialized behaviour name."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SerializedBehaviourStatistics

A **class** in `Root.Township`, `Alta.Profiling.Networking`.

Profiling list of bytes sent, one statistic per serialized behaviour name.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`IndexedStatisticList<SerializedBehaviourStatistic, string>`](/mod/game-api/types/alta-networking/indexedstatisticlist-tstatistic-tstattype)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SerializedBehaviourStatistics()"}</code> | Creates a `SerializedBehaviourStatistics` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-registerbehavioursend" /><code>{"void RegisterBehaviourSend(string behaviourName, int bytesSent)"}</code> | Records a send of the given size for a behaviour. |
| <Link id="m-createnewstatistic" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-networking/serializedbehaviourstatistic">{"SerializedBehaviourStatistic"}</Link>{" CreateNewStatistic(string creationArgument)"}</code> | Makes a statistic for a behaviour name the first time it is seen. |

## Used in

Members of other types that take, return or hold a `SerializedBehaviourStatistics`:

[`EntityStatistic.behaviourStatistics`](/mod/game-api/types/alta-networking/entitystatistic#m-behaviourstatistics), [`EntityStatistic.BehaviourStatistics`](/mod/game-api/types/alta-networking/entitystatistic#m-behaviourstatistics-2).
