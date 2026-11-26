---
title: "Status"
description: "A service status notice (an outage or incident message) as JSON from the web API, with its region, platform and severity."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Status

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

A service status notice (an outage or incident message) as JSON from the web API, with its region, platform and severity.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Nested types** [`StatusPlatform`](/mod/game-api/types/assembly-api-client/status-statusplatform), [`StatusRegion`](/mod/game-api/types/assembly-api-client/status-statusregion), [`StatusSeverity`](/mod/game-api/types/assembly-api-client/status-statusseverity), [`StatusType`](/mod/game-api/types/assembly-api-client/status-statustype)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Status()"}</code> | Creates a `Status` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-createdat" /><code>{"DateTime CreatedAt { get; set; }"}</code> | When the notice was created. |
| <Link id="m-identifier" /><code>{"int Identifier { get; set; }"}</code> | The notice's numeric ID (`id` in the JSON). |
| <Link id="m-message" /><code>{"string Message { get; set; }"}</code> | The notice's body text. |
| <Link id="m-platform" /><code><Link to="/mod/game-api/types/assembly-api-client/status-statusplatform">{"Status.StatusPlatform"}</Link>{" Platform { get; set; }"}</code> | Which platform it affects: Quest, PC, Pico or all. |
| <Link id="m-publishedat" /><code>{"DateTime PublishedAt { get; set; }"}</code> | When the notice was published. |
| <Link id="m-region" /><code><Link to="/mod/game-api/types/assembly-api-client/status-statusregion">{"Status.StatusRegion"}</Link>{" Region { get; set; }"}</code> | Which region it affects: Australia, USA, Europe or global. |
| <Link id="m-resolvedat" /><code>{"DateTime? ResolvedAt { get; set; }"}</code> | When the issue was resolved, or null while it is ongoing. |
| <Link id="m-severity" /><code><Link to="/mod/game-api/types/assembly-api-client/status-statusseverity">{"Status.StatusSeverity"}</Link>{" Severity { get; set; }"}</code> | How serious it is, from low to critical. |
| <Link id="m-title" /><code>{"string Title { get; set; }"}</code> | The notice's headline. |
| <Link id="m-type" /><code><Link to="/mod/game-api/types/assembly-api-client/status-statustype">{"Status.StatusType"}</Link>{" Type { get; set; }"}</code> | Whether the issue is ongoing or resolved (`status` in the JSON). |
| <Link id="m-updatedat" /><code>{"DateTime UpdatedAt { get; set; }"}</code> | When the notice was last changed. |

## Used in

Members of other types that take, return or hold a `Status`:

[`StatusAPI.GetStatus`](/mod/game-api/types/assembly-api-client/statusapi#m-getstatus), [`APIStatusManager.GetStatus`](/mod/game-api/types/alta-menus/apistatusmanager#m-getstatus), [`APIStatusManager.IsCorrectPlatform`](/mod/game-api/types/alta-menus/apistatusmanager#m-iscorrectplatform), [`APIStatusManager.IsCorrectRegion`](/mod/game-api/types/alta-menus/apistatusmanager#m-iscorrectregion), [`APIStatusManager.MatchesFilter`](/mod/game-api/types/alta-menus/apistatusmanager#m-matchesfilter), [`APIStatusNotification.APIStatusNotification`](/mod/game-api/types/alta-menus/apistatusnotification#m-ctor), [`APIStatusNotification.status`](/mod/game-api/types/alta-menus/apistatusnotification#m-status).
