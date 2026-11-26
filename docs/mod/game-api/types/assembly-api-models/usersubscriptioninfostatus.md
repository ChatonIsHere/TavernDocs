---
title: "UserSubscriptionInfoStatus"
description: "State of a user's subscription: active, cancelled or non-renewing."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UserSubscriptionInfoStatus

An **enum** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Shared`.

State of a user's subscription: active, cancelled or non-renewing.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Values

| Member |
| --- |
| <Link id="m-active" /><code>{"Active = 0"}</code> |
| <Link id="m-cancelled" /><code>{"Cancelled = 1"}</code> |
| <Link id="m-nonrenewing" /><code>{"NonRenewing = 2"}</code> |

## Used in

Members of other types that take, return or hold a `UserSubscriptionInfoStatus`:

[`UserSubscription.Status`](/mod/game-api/types/assembly-api-models/usersubscription#m-status).
