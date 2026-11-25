---
title: "Status"
description: "class Status in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Status

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Nested types** [`StatusPlatform`](/game-api/types/assembly-api-client/status-statusplatform), [`StatusRegion`](/game-api/types/assembly-api-client/status-statusregion), [`StatusSeverity`](/game-api/types/assembly-api-client/status-statusseverity), [`StatusType`](/game-api/types/assembly-api-client/status-statustype)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Status()"}</code> |

## Properties

| Member |
| --- |
| <Link id="m-createdat" /><code>{"DateTime CreatedAt { get; set; }"}</code> |
| <Link id="m-identifier" /><code>{"int Identifier { get; set; }"}</code> |
| <Link id="m-message" /><code>{"string Message { get; set; }"}</code> |
| <Link id="m-platform" /><code><Link to="/game-api/types/assembly-api-client/status-statusplatform">{"Status.StatusPlatform"}</Link>{" Platform { get; set; }"}</code> |
| <Link id="m-publishedat" /><code>{"DateTime PublishedAt { get; set; }"}</code> |
| <Link id="m-region" /><code><Link to="/game-api/types/assembly-api-client/status-statusregion">{"Status.StatusRegion"}</Link>{" Region { get; set; }"}</code> |
| <Link id="m-resolvedat" /><code>{"DateTime? ResolvedAt { get; set; }"}</code> |
| <Link id="m-severity" /><code><Link to="/game-api/types/assembly-api-client/status-statusseverity">{"Status.StatusSeverity"}</Link>{" Severity { get; set; }"}</code> |
| <Link id="m-title" /><code>{"string Title { get; set; }"}</code> |
| <Link id="m-type" /><code><Link to="/game-api/types/assembly-api-client/status-statustype">{"Status.StatusType"}</Link>{" Type { get; set; }"}</code> |
| <Link id="m-updatedat" /><code>{"DateTime UpdatedAt { get; set; }"}</code> |

## Used in

Members of other types that take, return or hold a `Status`:

[`StatusAPI.GetStatus`](/game-api/types/assembly-api-client/statusapi#m-getstatus), [`APIStatusManager.GetStatus`](/game-api/types/alta-menus/apistatusmanager#m-getstatus), [`APIStatusManager.IsCorrectPlatform`](/game-api/types/alta-menus/apistatusmanager#m-iscorrectplatform), [`APIStatusManager.IsCorrectRegion`](/game-api/types/alta-menus/apistatusmanager#m-iscorrectregion), [`APIStatusManager.MatchesFilter`](/game-api/types/alta-menus/apistatusmanager#m-matchesfilter), [`APIStatusNotification.APIStatusNotification`](/game-api/types/alta-menus/apistatusnotification#m-ctor), [`APIStatusNotification.status`](/game-api/types/alta-menus/apistatusnotification#m-status).
