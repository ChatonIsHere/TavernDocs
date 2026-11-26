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

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UserSubscription()"}</code> | <span className="api-desc">Creates an `UserSubscription` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-comment" /><code>{"string Comment { get; set; }"}</code> | <span className="api-desc">Note on the subscription.</span> |
| <Link id="m-createdat" /><code>{"DateTime CreatedAt { get; set; }"}</code> | <span className="api-desc">When the subscription started.</span> |
| <Link id="m-endedat" /><code>{"DateTime? EndedAt { get; set; }"}</code> | <span className="api-desc">When it ended, or null if still running.</span> |
| <Link id="m-identifier" /><code>{"int Identifier { get; set; }"}</code> | <span className="api-desc">The subscription's id.</span> |
| <Link id="m-lastchargeat" /><code>{"DateTime LastChargeAt { get; set; }"}</code> | <span className="api-desc">When the user was last charged.</span> |
| <Link id="m-nextchargeat" /><code>{"DateTime NextChargeAt { get; set; }"}</code> | <span className="api-desc">When the user will next be charged.</span> |
| <Link id="m-planexternalidentifier" /><code>{"string PlanExternalIdentifier { get; set; }"}</code> | <span className="api-desc">The plan's id at the payment provider.</span> |
| <Link id="m-planinfo" /><code><Link to="/mod/game-api/types/assembly-api-models/subscriptionplaninfo">{"SubscriptionPlanInfo"}</Link>{" PlanInfo { get; set; }"}</code> | <span className="api-desc">Details of the plan.</span> |
| <Link id="m-planinfoidentifier" /><code>{"int PlanInfoIdentifier { get; set; }"}</code> | <span className="api-desc">The plan's id in the API.</span> |
| <Link id="m-status" /><code><Link to="/mod/game-api/types/assembly-api-models/usersubscriptioninfostatus">{"UserSubscriptionInfoStatus"}</Link>{" Status { get; set; }"}</code> | <span className="api-desc">The subscription's status.</span> |
