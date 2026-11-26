---
title: "EntityMessageTypeStatistic"
description: "Network traffic statistic for one entity message type."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EntityMessageTypeStatistic

A **class** in `Root.Township`, `Alta.Profiling.Networking`.

Network traffic statistic for one entity message type.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`NetworkingStatistic`](/mod/game-api/types/alta-utilities/networkingstatistic)
- **Derived types** [`EntityMessageStatistics`](/mod/game-api/types/alta-networking/entitymessagestatistics)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EntityMessageTypeStatistic("}<Link to="/mod/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" messageType)"}</code> | <span className="api-desc">Creates an `EntityMessageTypeStatistic` from `messageType`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-messagetype" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" messageType"}</code> | <span className="api-desc">Backing field for `MessageType`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-messagetype-2" /><code><Link to="/mod/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" MessageType { get; }"}</code> | <span className="api-desc">The entity message type counted.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getsummary" /><code>{"override string GetSummary(float statisticDuration)"}</code> | <span className="api-desc">Returns a one-line summary with the message type and the base traffic figures.</span> |

## Used in

Members of other types that take, return or hold a `EntityMessageTypeStatistic`:

<div className="api-used-in">

[`EntityMessageStatistics.CreateNewStatistic`](/mod/game-api/types/alta-networking/entitymessagestatistics#m-createnewstatistic).

</div>
