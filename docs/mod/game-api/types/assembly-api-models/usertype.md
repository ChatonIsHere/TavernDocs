---
title: "UserType"
description: "Which kind of account a user id belongs to: Alta, Oculus or Discord."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UserType

An **enum** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Which kind of account a user id belongs to: Alta, Oculus or Discord.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Values

| Member |
| --- |
| <Link id="m-alta" /><code>{"Alta = 0"}</code> |
| <Link id="m-discord" /><code>{"Discord = 2"}</code> |
| <Link id="m-oculus" /><code>{"Oculus = 1"}</code> |

## Used in

Members of other types that take, return or hold a `UserType`:

<div className="api-used-in">

[`FutureUserActionsClient.CreateCustomAction`](/mod/game-api/types/assembly-api-client/futureuseractionsclient#m-createcustomaction), [`IFutureUserActions.CreateCustomAction`](/mod/game-api/types/assembly-api-client/ifutureuseractions#m-createcustomaction), [`FutureUserActionCreateRequest.UserType`](/mod/game-api/types/assembly-api-models/futureuseractioncreaterequest#m-usertype).

</div>
