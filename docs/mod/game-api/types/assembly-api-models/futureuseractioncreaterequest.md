---
title: "FutureUserActionCreateRequest"
description: "Body of the Alta web API call that queues an action to apply to a user later (CreateFutureUserActions)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FutureUserActionCreateRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Body of the Alta web API call that queues an action to apply to a user later (`CreateFutureUserActions`).

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FutureUserActionCreateRequest()"}</code> | <span className="api-desc">Creates a `FutureUserActionCreateRequest` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-actiondata" /><code>{"object ActionData { get; set; }"}</code> | <span className="api-desc">Data for the action, any JSON shape.</span> |
| <Link id="m-actiontype" /><code><Link to="/mod/game-api/types/assembly-api-models/futureuseractiontype">{"FutureUserActionType"}</Link>{" ActionType { get; set; }"}</code> | <span className="api-desc">Kind of action to queue.</span> |
| <Link id="m-useridentifier" /><code>{"ulong UserIdentifier { get; set; }"}</code> | <span className="api-desc">Id of the user, as a 64-bit value so it can hold platform ids.</span> |
| <Link id="m-usertype" /><code><Link to="/mod/game-api/types/assembly-api-models/usertype">{"UserType"}</Link>{" "}<Link to="/mod/game-api/types/assembly-api-models/usertype">{"UserType"}</Link>{" { get; set; }"}</code> | <span className="api-desc">Which kind of account `UserIdentifier` refers to.</span> |

## Used in

Members of other types that take, return or hold a `FutureUserActionCreateRequest`:

<div className="api-used-in">

[`LowLevelApiClient.CreateFutureUserActions`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-createfutureuseractions).

</div>
