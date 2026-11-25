---
title: "EntityStatistics"
description: "class EntityStatistics in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EntityStatistics

A **class** in `Root.Township`, `Alta.Profiling.Networking`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`NetworkingStatisticsListNonSerialized<EntityStatistic>`](/game-api/types/alta-utilities/networkingstatisticslistnonserialized-t)
- **Nested types** [`StatisticSortingMethod`](/game-api/types/alta-networking/entitystatistics-statisticsortingmethod)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EntityStatistics()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-maxentitiestodisplay" /><code>{"const int MaxEntitiesToDisplay"}</code> |  |
| <Link id="m-comparer" /><code>{"private "}<Link to="/game-api/types/alta-networking/duplicatekeycomparer-tkey">{"DuplicateKeyComparer"}</Link>{"<float> comparer"}</code> |  |
| <Link id="m-entitiestotrack" /><code>{"private List<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> entitiesToTrack"}</code> |  |
| <Link id="m-issearching" /><code>{"private bool isSearching"}</code> |  |
| <Link id="m-isupdatingtopentities" /><code>{"private bool isUpdatingTopEntities"}</code> |  |
| <Link id="m-isupdatingtrackedentitiesstats" /><code>{"private bool isUpdatingTrackedEntitiesStats"}</code> |  |
| <Link id="m-previoustopentitiestoshow" /><code>{"private int previousTopEntitiesToShow"}</code> |  |
| <Link id="m-searchedentities" /><code>{"private List<"}<Link to="/game-api/types/alta-networking/entitystatistic">{"EntityStatistic"}</Link>{"> searchedEntities"}</code> |  |
| <Link id="m-searchstring" /><code>{"private string searchString"}</code> |  |
| <Link id="m-sortedentitystats" /><code>{"private SortedList<float, "}<Link to="/game-api/types/alta-networking/entitystatistic">{"EntityStatistic"}</Link>{"> sortedEntityStats"}</code> |  |
| <Link id="m-sortingmethod" /><code>{"private "}<Link to="/game-api/types/alta-networking/entitystatistics-statisticsortingmethod">{"EntityStatistics.StatisticSortingMethod"}</Link>{" sortingMethod"}</code> |  |
| <Link id="m-topentities" /><code>{"private "}<Link to="/game-api/types/alta-networking/entitystatistic">{"EntityStatistic"}</Link>{"[] topEntities"}</code> |  |
| <Link id="m-trackedentitystats" /><code>{"private List<"}<Link to="/game-api/types/alta-networking/entitystatistic">{"EntityStatistic"}</Link>{"> trackedEntityStats"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"void OnValidate()"}</code> |  |
| <Link id="m-registerbehavioursend" /><code>{"void RegisterBehaviourSend("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, string behaviourName, int byteCount)"}</code> |  |
| <Link id="m-registermessagesend" /><code>{"void RegisterMessageSend("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, int byteCount)"}</code> |  |
| <Link id="m-registermessagesend-2" /><code>{"void RegisterMessageSend("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" messageType, int byteCount)"}</code> |  |
| <Link id="m-updatetopentitieslist" /><code>{"void UpdateTopEntitiesList()"}</code> |  |
| <Link id="m-getentitystatistic" /><code>{"private "}<Link to="/game-api/types/alta-networking/entitystatistic">{"EntityStatistic"}</Link>{" GetEntityStatistic("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-searchforentities" /><code>{"private void SearchForEntities()"}</code> |  |
| <Link id="m-updatetrackedentitiesstatslist" /><code>{"private void UpdateTrackedEntitiesStatsList()"}</code> |  |
