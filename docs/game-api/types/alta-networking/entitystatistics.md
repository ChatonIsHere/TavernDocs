---
title: "EntityStatistics"
description: "Network profiling list of bytes sent per entity, indexed by entity identifier, with inspector buttons to search, track chosen entities and list the top senders."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EntityStatistics

A **class** in `Root.Township`, `Alta.Profiling.Networking`.

Network profiling list of bytes sent per entity, indexed by entity identifier, with inspector buttons to search, track chosen entities and list the top senders.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`NetworkingStatisticsListNonSerialized<EntityStatistic>`](/game-api/types/alta-utilities/networkingstatisticslistnonserialized-t)
- **Nested types** [`StatisticSortingMethod`](/game-api/types/alta-networking/entitystatistics-statisticsortingmethod)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EntityStatistics()"}</code> | Creates an `EntityStatistics` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-maxentitiestodisplay" /><code>{"const int MaxEntitiesToDisplay"}</code> | Cap of 100 on the tracked, searched and top entity lists. |

<details>
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-comparer" /><code>{"private "}<Link to="/game-api/types/alta-networking/duplicatekeycomparer-tkey">{"DuplicateKeyComparer"}</Link>{"<float> comparer"}</code> | Key comparer that lets the sorted list hold equal values. |
| <Link id="m-entitiestotrack" /><code>{"private List<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> entitiesToTrack"}</code> | Entities picked in the inspector to watch. |
| <Link id="m-issearching" /><code>{"private bool isSearching"}</code> | Inspector button that runs the search. |
| <Link id="m-isupdatingtopentities" /><code>{"private bool isUpdatingTopEntities"}</code> | Turns on the top entities update. |
| <Link id="m-isupdatingtrackedentitiesstats" /><code>{"private bool isUpdatingTrackedEntitiesStats"}</code> | Inspector button that refreshes the tracked entity list. |
| <Link id="m-previoustopentitiestoshow" /><code>{"private int previousTopEntitiesToShow"}</code> | Size of the top entities array when constructed; not read elsewhere in this class. |
| <Link id="m-searchedentities" /><code>{"private List<"}<Link to="/game-api/types/alta-networking/entitystatistic">{"EntityStatistic"}</Link>{"> searchedEntities"}</code> | Results of the last search. |
| <Link id="m-searchstring" /><code>{"private string searchString"}</code> | Text to match against entity names. |
| <Link id="m-sortedentitystats" /><code>{"private SortedList<float, "}<Link to="/game-api/types/alta-networking/entitystatistic">{"EntityStatistic"}</Link>{"> sortedEntityStats"}</code> | Scratch sorted list used to rank entities. |
| <Link id="m-sortingmethod" /><code>{"private "}<Link to="/game-api/types/alta-networking/entitystatistics-statisticsortingmethod">{"EntityStatistics.StatisticSortingMethod"}</Link>{" sortingMethod"}</code> | What to rank the top entities by: bytes per second, bytes per frame, average send size or send count. |
| <Link id="m-topentities" /><code>{"private "}<Link to="/game-api/types/alta-networking/entitystatistic">{"EntityStatistic"}</Link>{"[] topEntities"}</code> | The highest sending entities from the last update (20 slots by default). |
| <Link id="m-trackedentitystats" /><code>{"private List<"}<Link to="/game-api/types/alta-networking/entitystatistic">{"EntityStatistic"}</Link>{"> trackedEntityStats"}</code> | Statistics of the tracked entities. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"void OnValidate()"}</code> | Runs the search or tracked list update when their inspector button flags are set. |
| <Link id="m-registerbehavioursend" /><code>{"void RegisterBehaviourSend("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, string behaviourName, int byteCount)"}</code> | Adds a send of the given size to an entity's statistic under a behaviour name. |
| <Link id="m-registermessagesend" /><code>{"void RegisterMessageSend("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, int byteCount)"}</code> | Adds a send of the given size to an entity's statistic, optionally under a message type. |
| <Link id="m-registermessagesend-2" /><code>{"void RegisterMessageSend("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" messageType, int byteCount)"}</code> | Adds a send of the given size to an entity's statistic, optionally under a message type. |
| <Link id="m-updatetopentitieslist" /><code>{"void UpdateTopEntitiesList()"}</code> | If `isUpdatingTopEntities` is on, sorts all entity statistics by `sortingMethod` and fills `topEntities` highest first. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getentitystatistic" /><code>{"private "}<Link to="/game-api/types/alta-networking/entitystatistic">{"EntityStatistic"}</Link>{" GetEntityStatistic("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Gets the statistic for an entity's identifier, creating it (named after the entity) if missing. |
| <Link id="m-searchforentities" /><code>{"private void SearchForEntities()"}</code> | Fills `searchedEntities` with statistics whose entity name contains `searchString` (case insensitive). |
| <Link id="m-updatetrackedentitiesstatslist" /><code>{"private void UpdateTrackedEntitiesStatsList()"}</code> | Fills `trackedEntityStats` with the statistics of the entities in `entitiesToTrack`. |

</details>
