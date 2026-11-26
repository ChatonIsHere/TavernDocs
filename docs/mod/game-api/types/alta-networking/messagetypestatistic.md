---
title: "MessageTypeStatistic"
description: "Network traffic statistic for one top-level MessageType."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MessageTypeStatistic

A **class** in `Root.Township`, `Alta.Profiling.Networking`.

Network traffic statistic for one top-level `MessageType`.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`NetworkingStatistic`](/mod/game-api/types/alta-utilities/networkingstatistic)
- **Derived types** [`MessageStatistics`](/mod/game-api/types/alta-networking/messagestatistics)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MessageTypeStatistic()"}</code> | Creates a `MessageTypeStatistic` with default values. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-messagetype" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" messageType"}</code> | Backing field for `MessageType`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-messagetype-2" /><code><Link to="/mod/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" "}<Link to="/mod/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" { get; set; }"}</code> | The message type counted. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getsummary" /><code>{"override string GetSummary(float statisticDuration)"}</code> | Returns a one-line summary with the message type and the base traffic figures. |

## Used in

Members of other types that take, return or hold a `MessageTypeStatistic`:

[`MessageStatistics.MessageStatistics`](/mod/game-api/types/alta-networking/messagestatistics#m-ctor).
