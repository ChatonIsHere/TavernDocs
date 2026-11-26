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

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RecentPlayerInteractionRequest()"}</code> | <span className="api-desc">Creates a `RecentPlayerInteractionRequest` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-otheruser" /><code><Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" OtherUser { get; set; }"}</code> | <span className="api-desc">The other player in the interaction.</span> |
| <Link id="m-type" /><code><Link to="/mod/game-api/types/assembly-api-models/recentplayerinteractiontype">{"RecentPlayerInteractionType"}</Link>{" Type { get; set; }"}</code> | <span className="api-desc">Kind of interaction.</span> |

## Used in

Members of other types that take, return or hold a `RecentPlayerInteractionRequest`:

<div className="api-used-in">

[`LowLevelApiClient.EnqueueRecentPlayerInteraction`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-enqueuerecentplayerinteraction).

</div>
