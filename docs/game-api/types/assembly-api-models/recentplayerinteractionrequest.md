---
title: "RecentPlayerInteractionRequest"
description: "One recent player interaction sent to the Alta web API."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RecentPlayerInteractionRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

One recent player interaction sent to the Alta web API. Queued through `ApiBatchRequestService` and sent in batches.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RecentPlayerInteractionRequest()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-otheruser" /><code><Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" OtherUser { get; set; }"}</code> | The other player in the interaction. |
| <Link id="m-type" /><code><Link to="/game-api/types/assembly-api-models/recentplayerinteractiontype">{"RecentPlayerInteractionType"}</Link>{" Type { get; set; }"}</code> | Kind of interaction. |

## Used in

Members of other types that take, return or hold a `RecentPlayerInteractionRequest`:

[`LowLevelApiClient.EnqueueRecentPlayerInteraction`](/game-api/types/assembly-api-client/lowlevelapiclient#m-enqueuerecentplayerinteraction).
