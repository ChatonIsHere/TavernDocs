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
| <Link id="m-ctor" /><code>{"MessageTypeStatistic()"}</code> | <span className="api-desc">Creates a `MessageTypeStatistic` with default values.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-messagetype" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" messageType"}</code> | <span className="api-desc">Backing field for `MessageType`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-messagetype-2" /><code><Link to="/mod/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" "}<Link to="/mod/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" { get; set; }"}</code> | <span className="api-desc">The message type counted.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getsummary" /><code>{"override string GetSummary(float statisticDuration)"}</code> | <span className="api-desc">Returns a one-line summary with the message type and the base traffic figures.</span> |

## Used in

Members of other types that take, return or hold a `MessageTypeStatistic`:

<div className="api-used-in">

[`MessageStatistics.MessageStatistics`](/mod/game-api/types/alta-networking/messagestatistics#m-ctor).

</div>
