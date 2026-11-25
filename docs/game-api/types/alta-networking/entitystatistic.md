---
title: "EntityStatistic"
description: "class EntityStatistic in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EntityStatistic

A **class** in `Root.Township`, `Alta.Profiling.Networking`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`NetworkingStatistic`](/game-api/types/alta-utilities/networkingstatistic)
- **Derived types** [`EntityStatistics`](/game-api/types/alta-networking/entitystatistics)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EntityStatistic(string name)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-behaviourstatistics" /><code>{"private "}<Link to="/game-api/types/alta-networking/serializedbehaviourstatistics">{"SerializedBehaviourStatistics"}</Link>{" behaviourStatistics"}</code> |  |
| <Link id="m-entityname" /><code>{"private string entityName"}</code> |  |
| <Link id="m-isexpanded" /><code>{"private bool isExpanded"}</code> |  |
| <Link id="m-messagestatistics" /><code>{"private "}<Link to="/game-api/types/alta-networking/entitymessagestatistics">{"EntityMessageStatistics"}</Link>{" messageStatistics"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-behaviourstatistics-2" /><code><Link to="/game-api/types/alta-networking/serializedbehaviourstatistics">{"SerializedBehaviourStatistics"}</Link>{" BehaviourStatistics { get; }"}</code> |  |
| <Link id="m-entityname-2" /><code>{"string EntityName { get; }"}</code> |  |
| <Link id="m-messagestatistics-2" /><code><Link to="/game-api/types/alta-networking/entitymessagestatistics">{"EntityMessageStatistics"}</Link>{" MessageStatistics { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getsummary" /><code>{"override string GetSummary(float statisticDuration)"}</code> |  |
| <Link id="m-registerbehavioursend" /><code>{"void RegisterBehaviourSend(string behaviourName, int byteCount)"}</code> |  |
| <Link id="m-registermessagesend" /><code>{"void RegisterMessageSend("}<Link to="/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" messageType, int byteCount)"}</code> |  |
| <Link id="m-resetstatistictotals" /><code>{"override void ResetStatisticTotals()"}</code> |  |
| <Link id="m-updatevalueperframe" /><code>{"override void UpdateValuePerFrame()"}</code> |  |
| <Link id="m-updatevalueperlastsecond" /><code>{"override void UpdateValuePerLastSecond()"}</code> |  |

## Used in

Members of other types that take, return or hold a `EntityStatistic`:

[`EntityStatistics.GetEntityStatistic`](/game-api/types/alta-networking/entitystatistics#m-getentitystatistic), [`EntityStatistics.searchedEntities`](/game-api/types/alta-networking/entitystatistics#m-searchedentities), [`EntityStatistics.sortedEntityStats`](/game-api/types/alta-networking/entitystatistics#m-sortedentitystats), [`EntityStatistics.topEntities`](/game-api/types/alta-networking/entitystatistics#m-topentities), [`EntityStatistics.trackedEntityStats`](/game-api/types/alta-networking/entitystatistics#m-trackedentitystats).
