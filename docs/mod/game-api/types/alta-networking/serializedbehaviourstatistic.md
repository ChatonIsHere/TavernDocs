---
title: "SerializedBehaviourStatistic"
description: "Network traffic statistic for one serialized behaviour, by name."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SerializedBehaviourStatistic

A **class** in `Root.Township`, `Alta.Profiling.Networking`.

Network traffic statistic for one serialized behaviour, by name.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`NetworkingStatistic`](/mod/game-api/types/alta-utilities/networkingstatistic)
- **Derived types** [`SerializedBehaviourStatistics`](/mod/game-api/types/alta-networking/serializedbehaviourstatistics)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SerializedBehaviourStatistic(string name)"}</code> | <span className="api-desc">Creates a `SerializedBehaviourStatistic` from `name`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-behaviourname" /><code>{"private string behaviourName"}</code> | <span className="api-desc">Backing field for `BehaviourName`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-behaviourname-2" /><code>{"string BehaviourName { get; }"}</code> | <span className="api-desc">Name of the behaviour counted.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getsummary" /><code>{"override string GetSummary(float statisticDuration)"}</code> | <span className="api-desc">Returns a one-line summary with the behaviour name and the base traffic figures.</span> |

## Used in

Members of other types that take, return or hold a `SerializedBehaviourStatistic`:

<div className="api-used-in">

[`SerializedBehaviourStatistics.CreateNewStatistic`](/mod/game-api/types/alta-networking/serializedbehaviourstatistics#m-createnewstatistic).

</div>
