---
title: "EntityStatistic"
description: "Network profiling stats for one entity: bytes sent, split by entity message type and by behaviour."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EntityStatistic

A **class** in `Root.Township`, `Alta.Profiling.Networking`.

Network profiling stats for one entity: bytes sent, split by entity message type and by behaviour. Used by the networking profiler.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`NetworkingStatistic`](/mod/game-api/types/alta-utilities/networkingstatistic)
- **Derived types** [`EntityStatistics`](/mod/game-api/types/alta-networking/entitystatistics)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EntityStatistic(string name)"}</code> | <span className="api-desc">Creates an `EntityStatistic` from `name`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-behaviourstatistics" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/serializedbehaviourstatistics">{"SerializedBehaviourStatistics"}</Link>{" behaviourStatistics"}</code> | <span className="api-desc">Bytes sent per behaviour on this entity. Backing field for `BehaviourStatistics`.</span> |
| <Link id="m-entityname" /><code>{"private string entityName"}</code> | <span className="api-desc">Name of the entity being measured. Backing field for `EntityName`.</span> |
| <Link id="m-isexpanded" /><code>{"private bool isExpanded"}</code> | <span className="api-desc">Whether the entry is expanded in the profiler view.</span> |
| <Link id="m-messagestatistics" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/entitymessagestatistics">{"EntityMessageStatistics"}</Link>{" messageStatistics"}</code> | <span className="api-desc">Bytes sent per entity message type. Backing field for `MessageStatistics`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-behaviourstatistics-2" /><code><Link to="/mod/game-api/types/alta-networking/serializedbehaviourstatistics">{"SerializedBehaviourStatistics"}</Link>{" BehaviourStatistics { get; }"}</code> | <span className="api-desc">Byte counts per serialized behaviour name.</span> |
| <Link id="m-entityname-2" /><code>{"string EntityName { get; }"}</code> | <span className="api-desc">The name this statistic was created with.</span> |
| <Link id="m-messagestatistics-2" /><code><Link to="/mod/game-api/types/alta-networking/entitymessagestatistics">{"EntityMessageStatistics"}</Link>{" MessageStatistics { get; }"}</code> | <span className="api-desc">Byte counts per entity message type.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getsummary" /><code>{"override string GetSummary(float statisticDuration)"}</code> | <span className="api-desc">A one-line summary with the entity name padded to 60 characters, then the base stats.</span> |
| <Link id="m-registerbehavioursend" /><code>{"void RegisterBehaviourSend(string behaviourName, int byteCount)"}</code> | <span className="api-desc">Records bytes sent by a named behaviour of this entity.</span> |
| <Link id="m-registermessagesend" /><code>{"void RegisterMessageSend("}<Link to="/mod/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" messageType, int byteCount)"}</code> | <span className="api-desc">Records bytes sent for one entity message type.</span> |
| <Link id="m-resetstatistictotals" /><code>{"override void ResetStatisticTotals()"}</code> | <span className="api-desc">Resets the totals, including the per message and per behaviour ones.</span> |
| <Link id="m-updatevalueperframe" /><code>{"override void UpdateValuePerFrame()"}</code> | <span className="api-desc">Rolls the per frame byte totals, including the per message and per behaviour ones.</span> |
| <Link id="m-updatevalueperlastsecond" /><code>{"override void UpdateValuePerLastSecond()"}</code> | <span className="api-desc">Rolls the last second byte totals, including the per message and per behaviour ones.</span> |

## Used in

Members of other types that take, return or hold a `EntityStatistic`:

<div className="api-used-in">

[`EntityStatistics.GetEntityStatistic`](/mod/game-api/types/alta-networking/entitystatistics#m-getentitystatistic), [`EntityStatistics.searchedEntities`](/mod/game-api/types/alta-networking/entitystatistics#m-searchedentities), [`EntityStatistics.sortedEntityStats`](/mod/game-api/types/alta-networking/entitystatistics#m-sortedentitystats), [`EntityStatistics.topEntities`](/mod/game-api/types/alta-networking/entitystatistics#m-topentities), [`EntityStatistics.trackedEntityStats`](/mod/game-api/types/alta-networking/entitystatistics#m-trackedentitystats).

</div>
