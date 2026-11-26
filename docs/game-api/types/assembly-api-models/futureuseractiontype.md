---
title: "FutureUserActionType"
description: "Kind of future user action stored for an outside user: add a friend or invite to a group."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FutureUserActionType

An **enum** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Kind of future user action stored for an outside user: add a friend or invite to a group.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Values

| Member |
| --- |
| <Link id="m-addfriend" /><code>{"AddFriend = 0"}</code> |
| <Link id="m-invitetogroup" /><code>{"InviteToGroup = 1"}</code> |

## Used in

Members of other types that take, return or hold a `FutureUserActionType`:

[`FutureUserActionsClient.CreateCustomAction`](/game-api/types/assembly-api-client/futureuseractionsclient#m-createcustomaction), [`IFutureUserActions.CreateCustomAction`](/game-api/types/assembly-api-client/ifutureuseractions#m-createcustomaction), [`FutureUserActionCreateRequest.ActionType`](/game-api/types/assembly-api-models/futureuseractioncreaterequest#m-actiontype).
