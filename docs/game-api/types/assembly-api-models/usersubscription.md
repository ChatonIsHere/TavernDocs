---
title: "UserSubscription"
description: "A user's subscription (supporter membership) and its billing dates."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UserSubscription

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Shared`.

A user's subscription (supporter membership) and its billing dates.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UserSubscription()"}</code> | Creates an `UserSubscription` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-comment" /><code>{"string Comment { get; set; }"}</code> | Note on the subscription. |
| <Link id="m-createdat" /><code>{"DateTime CreatedAt { get; set; }"}</code> | When the subscription started. |
| <Link id="m-endedat" /><code>{"DateTime? EndedAt { get; set; }"}</code> | When it ended, or null if still running. |
| <Link id="m-identifier" /><code>{"int Identifier { get; set; }"}</code> | The subscription's id. |
| <Link id="m-lastchargeat" /><code>{"DateTime LastChargeAt { get; set; }"}</code> | When the user was last charged. |
| <Link id="m-nextchargeat" /><code>{"DateTime NextChargeAt { get; set; }"}</code> | When the user will next be charged. |
| <Link id="m-planexternalidentifier" /><code>{"string PlanExternalIdentifier { get; set; }"}</code> | The plan's id at the payment provider. |
| <Link id="m-planinfo" /><code><Link to="/game-api/types/assembly-api-models/subscriptionplaninfo">{"SubscriptionPlanInfo"}</Link>{" PlanInfo { get; set; }"}</code> | Details of the plan. |
| <Link id="m-planinfoidentifier" /><code>{"int PlanInfoIdentifier { get; set; }"}</code> | The plan's id in the API. |
| <Link id="m-status" /><code><Link to="/game-api/types/assembly-api-models/usersubscriptioninfostatus">{"UserSubscriptionInfoStatus"}</Link>{" Status { get; set; }"}</code> | The subscription's status. |
