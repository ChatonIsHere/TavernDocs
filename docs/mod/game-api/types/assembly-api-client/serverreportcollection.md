---
title: "ServerReportCollection"
description: "Player reports for one server, grouped into one summary per reported player."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerReportCollection

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Player reports for one server, grouped into one summary per reported player. Built by `PlayerReportsClient.ViewAllReportsAsSummary`.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerReportCollection()"}</code> | Creates a `ServerReportCollection` with default values. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-reportsperplayer" /><code>{"private readonly Dictionary<int, "}<Link to="/mod/game-api/types/assembly-api-client/playerreportsummary">{"PlayerReportSummary"}</Link>{"> reportsPerPlayer"}</code> | Summaries keyed by reported user ID. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-reports" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-client/playerreportsummary">{"PlayerReportSummary"}</Link>{"> Reports { get; }"}</code> | One summary per reported player. |

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"internal void Add("}<Link to="/mod/game-api/types/assembly-api-client/playerreportadmin">{"PlayerReportAdmin"}</Link>{" report)"}</code> | Adds a report to the reported player's summary, creating it if needed. |

</details>
