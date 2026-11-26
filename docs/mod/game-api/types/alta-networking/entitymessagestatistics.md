---
title: "EntityMessageStatistics"
description: "Profiling list of bytes sent, one statistic per entity message type."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EntityMessageStatistics

A **class** in `Root.Township`, `Alta.Profiling.Networking`.

Profiling list of bytes sent, one statistic per entity message type.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`IndexedStatisticList<EntityMessageTypeStatistic, EntityMessageType>`](/mod/game-api/types/alta-networking/indexedstatisticlist-tstatistic-tstattype)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EntityMessageStatistics()"}</code> | <span className="api-desc">Creates an `EntityMessageStatistics` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-registermessagesend" /><code>{"void RegisterMessageSend("}<Link to="/mod/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" messageType, int byteCount)"}</code> | <span className="api-desc">Records a send of the given size for a message type.</span> |
| <Link id="m-createnewstatistic" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-networking/entitymessagetypestatistic">{"EntityMessageTypeStatistic"}</Link>{" CreateNewStatistic("}<Link to="/mod/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" creationArgument)"}</code> | <span className="api-desc">Makes a statistic for a message type the first time it is seen.</span> |

## Used in

Members of other types that take, return or hold a `EntityMessageStatistics`:

<div className="api-used-in">

[`EntityStatistic.messageStatistics`](/mod/game-api/types/alta-networking/entitystatistic#m-messagestatistics), [`EntityStatistic.MessageStatistics`](/mod/game-api/types/alta-networking/entitystatistic#m-messagestatistics-2).

</div>
