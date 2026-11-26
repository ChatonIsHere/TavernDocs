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

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`NetworkingStatisticsListNonSerialized<EntityStatistic>`](/mod/game-api/types/alta-utilities/networkingstatisticslistnonserialized-t)
- **Nested types** [`StatisticSortingMethod`](/mod/game-api/types/alta-networking/entitystatistics-statisticsortingmethod)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EntityStatistics()"}</code> | <span className="api-desc">Creates an `EntityStatistics` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-maxentitiestodisplay" /><code>{"const int MaxEntitiesToDisplay"}</code> | <span className="api-desc">Cap of 100 on the tracked, searched and top entity lists.</span> |

<details className="api-private">
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-comparer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/duplicatekeycomparer-tkey">{"DuplicateKeyComparer"}</Link>{"<float> comparer"}</code> | <span className="api-desc">Key comparer that lets the sorted list hold equal values.</span> |
| <Link id="m-entitiestotrack" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> entitiesToTrack"}</code> | <span className="api-desc">Entities picked in the inspector to watch.</span> |
| <Link id="m-issearching" /><code>{"private bool isSearching"}</code> | <span className="api-desc">Inspector button that runs the search.</span> |
| <Link id="m-isupdatingtopentities" /><code>{"private bool isUpdatingTopEntities"}</code> | <span className="api-desc">Turns on the top entities update.</span> |
| <Link id="m-isupdatingtrackedentitiesstats" /><code>{"private bool isUpdatingTrackedEntitiesStats"}</code> | <span className="api-desc">Inspector button that refreshes the tracked entity list.</span> |
| <Link id="m-previoustopentitiestoshow" /><code>{"private int previousTopEntitiesToShow"}</code> | <span className="api-desc">Size of the top entities array when constructed; not read elsewhere in this class.</span> |
| <Link id="m-searchedentities" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-networking/entitystatistic">{"EntityStatistic"}</Link>{"> searchedEntities"}</code> | <span className="api-desc">Results of the last search.</span> |
| <Link id="m-searchstring" /><code>{"private string searchString"}</code> | <span className="api-desc">Text to match against entity names.</span> |
| <Link id="m-sortedentitystats" /><code>{"private SortedList<float, "}<Link to="/mod/game-api/types/alta-networking/entitystatistic">{"EntityStatistic"}</Link>{"> sortedEntityStats"}</code> | <span className="api-desc">Scratch sorted list used to rank entities.</span> |
| <Link id="m-sortingmethod" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/entitystatistics-statisticsortingmethod">{"EntityStatistics.StatisticSortingMethod"}</Link>{" sortingMethod"}</code> | <span className="api-desc">What to rank the top entities by: bytes per second, bytes per frame, average send size or send count.</span> |
| <Link id="m-topentities" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/entitystatistic">{"EntityStatistic"}</Link>{"[] topEntities"}</code> | <span className="api-desc">The highest sending entities from the last update (20 slots by default).</span> |
| <Link id="m-trackedentitystats" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-networking/entitystatistic">{"EntityStatistic"}</Link>{"> trackedEntityStats"}</code> | <span className="api-desc">Statistics of the tracked entities.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"void OnValidate()"}</code> | <span className="api-desc">Runs the search or tracked list update when their inspector button flags are set.</span> |
| <Link id="m-registerbehavioursend" /><code>{"void RegisterBehaviourSend("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, string behaviourName, int byteCount)"}</code> | <span className="api-desc">Adds a send of the given size to an entity's statistic under a behaviour name.</span> |
| <Link id="m-registermessagesend" /><code>{"void RegisterMessageSend("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, int byteCount)"}</code> | <span className="api-desc">Adds a send of the given size to an entity's statistic, optionally under a message type.</span> |
| <Link id="m-registermessagesend-2" /><code>{"void RegisterMessageSend("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/mod/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" messageType, int byteCount)"}</code> | <span className="api-desc">Adds a send of the given size to an entity's statistic, optionally under a message type.</span> |
| <Link id="m-updatetopentitieslist" /><code>{"void UpdateTopEntitiesList()"}</code> | <span className="api-desc">If `isUpdatingTopEntities` is on, sorts all entity statistics by `sortingMethod` and fills `topEntities` highest first.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getentitystatistic" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/entitystatistic">{"EntityStatistic"}</Link>{" GetEntityStatistic("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Gets the statistic for an entity's identifier, creating it (named after the entity) if missing.</span> |
| <Link id="m-searchforentities" /><code>{"private void SearchForEntities()"}</code> | <span className="api-desc">Fills `searchedEntities` with statistics whose entity name contains `searchString` (case insensitive).</span> |
| <Link id="m-updatetrackedentitiesstatslist" /><code>{"private void UpdateTrackedEntitiesStatsList()"}</code> | <span className="api-desc">Fills `trackedEntityStats` with the statistics of the entities in `entitiesToTrack`.</span> |

</details>
