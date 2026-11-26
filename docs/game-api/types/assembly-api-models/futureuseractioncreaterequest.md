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

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FutureUserActionCreateRequest()"}</code> | Creates a `FutureUserActionCreateRequest` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-actiondata" /><code>{"object ActionData { get; set; }"}</code> | Data for the action, any JSON shape. |
| <Link id="m-actiontype" /><code><Link to="/game-api/types/assembly-api-models/futureuseractiontype">{"FutureUserActionType"}</Link>{" ActionType { get; set; }"}</code> | Kind of action to queue. |
| <Link id="m-useridentifier" /><code>{"ulong UserIdentifier { get; set; }"}</code> | Id of the user, as a 64-bit value so it can hold platform ids. |
| <Link id="m-usertype" /><code><Link to="/game-api/types/assembly-api-models/usertype">{"UserType"}</Link>{" "}<Link to="/game-api/types/assembly-api-models/usertype">{"UserType"}</Link>{" { get; set; }"}</code> | Which kind of account `UserIdentifier` refers to. |

## Used in

Members of other types that take, return or hold a `FutureUserActionCreateRequest`:

[`LowLevelApiClient.CreateFutureUserActions`](/game-api/types/assembly-api-client/lowlevelapiclient#m-createfutureuseractions).
