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

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`NetworkingStatistic`](/game-api/types/alta-utilities/networkingstatistic)
- **Derived types** [`EntityMessageStatistics`](/game-api/types/alta-networking/entitymessagestatistics)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EntityMessageTypeStatistic("}<Link to="/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" messageType)"}</code> | Creates an `EntityMessageTypeStatistic` from `messageType`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-messagetype" /><code>{"private "}<Link to="/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" messageType"}</code> | Backing field for `MessageType`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-messagetype-2" /><code><Link to="/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" MessageType { get; }"}</code> | The entity message type counted. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getsummary" /><code>{"override string GetSummary(float statisticDuration)"}</code> | Returns a one-line summary with the message type and the base traffic figures. |

## Used in

Members of other types that take, return or hold a `EntityMessageTypeStatistic`:

[`EntityMessageStatistics.CreateNewStatistic`](/game-api/types/alta-networking/entitymessagestatistics#m-createnewstatistic).
