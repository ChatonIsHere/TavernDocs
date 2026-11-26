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
| <Link id="m-ctor" /><code>{"Status()"}</code> | <span className="api-desc">Creates a `Status` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-createdat" /><code>{"DateTime CreatedAt { get; set; }"}</code> | <span className="api-desc">When the notice was created.</span> |
| <Link id="m-identifier" /><code>{"int Identifier { get; set; }"}</code> | <span className="api-desc">The notice's numeric ID (`id` in the JSON).</span> |
| <Link id="m-message" /><code>{"string Message { get; set; }"}</code> | <span className="api-desc">The notice's body text.</span> |
| <Link id="m-platform" /><code><Link to="/mod/game-api/types/assembly-api-client/status-statusplatform">{"Status.StatusPlatform"}</Link>{" Platform { get; set; }"}</code> | <span className="api-desc">Which platform it affects: Quest, PC, Pico or all.</span> |
| <Link id="m-publishedat" /><code>{"DateTime PublishedAt { get; set; }"}</code> | <span className="api-desc">When the notice was published.</span> |
| <Link id="m-region" /><code><Link to="/mod/game-api/types/assembly-api-client/status-statusregion">{"Status.StatusRegion"}</Link>{" Region { get; set; }"}</code> | <span className="api-desc">Which region it affects: Australia, USA, Europe or global.</span> |
| <Link id="m-resolvedat" /><code>{"DateTime? ResolvedAt { get; set; }"}</code> | <span className="api-desc">When the issue was resolved, or null while it is ongoing.</span> |
| <Link id="m-severity" /><code><Link to="/mod/game-api/types/assembly-api-client/status-statusseverity">{"Status.StatusSeverity"}</Link>{" Severity { get; set; }"}</code> | <span className="api-desc">How serious it is, from low to critical.</span> |
| <Link id="m-title" /><code>{"string Title { get; set; }"}</code> | <span className="api-desc">The notice's headline.</span> |
| <Link id="m-type" /><code><Link to="/mod/game-api/types/assembly-api-client/status-statustype">{"Status.StatusType"}</Link>{" Type { get; set; }"}</code> | <span className="api-desc">Whether the issue is ongoing or resolved (`status` in the JSON).</span> |
| <Link id="m-updatedat" /><code>{"DateTime UpdatedAt { get; set; }"}</code> | <span className="api-desc">When the notice was last changed.</span> |

## Used in

Members of other types that take, return or hold a `Status`:

<div className="api-used-in">

[`StatusAPI.GetStatus`](/mod/game-api/types/assembly-api-client/statusapi#m-getstatus), [`APIStatusManager.GetStatus`](/mod/game-api/types/alta-menus/apistatusmanager#m-getstatus), [`APIStatusManager.IsCorrectPlatform`](/mod/game-api/types/alta-menus/apistatusmanager#m-iscorrectplatform), [`APIStatusManager.IsCorrectRegion`](/mod/game-api/types/alta-menus/apistatusmanager#m-iscorrectregion), [`APIStatusManager.MatchesFilter`](/mod/game-api/types/alta-menus/apistatusmanager#m-matchesfilter), [`APIStatusNotification.APIStatusNotification`](/mod/game-api/types/alta-menus/apistatusnotification#m-ctor), [`APIStatusNotification.status`](/mod/game-api/types/alta-menus/apistatusnotification#m-status).

</div>
