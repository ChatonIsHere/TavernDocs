---
title: "SubscriptionPlanInfo"
description: "Web API model for a supporter subscription plan."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SubscriptionPlanInfo

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Shared`.

Web API model for a supporter subscription plan.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SubscriptionPlanInfo()"}</code> | <span className="api-desc">Creates a `SubscriptionPlanInfo` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-charge" /><code><Link to="/mod/game-api/types/assembly-api-models/chargeinfo">{"ChargeInfo"}</Link>{" Charge { get; set; }"}</code> | <span className="api-desc">What the plan costs per period.</span> |
| <Link id="m-description" /><code>{"string Description { get; set; }"}</code> | <span className="api-desc">The plan's description text.</span> |
| <Link id="m-externalid" /><code>{"string ExternalId { get; set; }"}</code> | <span className="api-desc">The plan's ID at the payment provider.</span> |
| <Link id="m-identifier" /><code>{"int Identifier { get; set; }"}</code> | <span className="api-desc">The plan's numeric ID.</span> |
| <Link id="m-isenabled" /><code>{"bool IsEnabled { get; set; }"}</code> | <span className="api-desc">True when the plan can be bought.</span> |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | <span className="api-desc">The plan's display name.</span> |
| <Link id="m-trial" /><code><Link to="/mod/game-api/types/assembly-api-models/duration">{"Duration"}</Link>{" Trial { get; set; }"}</code> | <span className="api-desc">Length of the free trial.</span> |

## Used in

Members of other types that take, return or hold a `SubscriptionPlanInfo`:

<div className="api-used-in">

[`UserSubscription.PlanInfo`](/mod/game-api/types/assembly-api-models/usersubscription#m-planinfo).

</div>
