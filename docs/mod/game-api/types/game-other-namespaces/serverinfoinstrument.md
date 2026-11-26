---
title: "ServerInfoInstrument"
description: "Analytics instrument that adds the current server's ID to each event."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerInfoInstrument

A **class** in `Root.Township`, `ATT.Analytics.Instruments`.

Analytics instrument that adds the current server's ID to each event.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`IAnalyticsInstrument`](/mod/game-api/types/assembly-other/ianalyticsinstrument)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerInfoInstrument()"}</code> | Creates a `ServerInfoInstrument` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-noserverid" /><code>{"private const int NoServerId"}</code> | Value sent when not on a server (-1). |
| <Link id="m-serveridkey" /><code>{"private const string ServerIdKey"}</code> | Property key "Server ID". |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-appendresult" /><code>{"void AppendResult("}<Link to="/mod/game-api/types/assembly-other/ianalyticsdata">{"IAnalyticsData"}</Link>{" data)"}</code> | Adds a "Server ID" property: the joined server's identifier, or -1. |
