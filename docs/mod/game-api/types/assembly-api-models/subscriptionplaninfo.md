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
| <Link id="m-ctor" /><code>{"SubscriptionPlanInfo()"}</code> | Creates a `SubscriptionPlanInfo` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-charge" /><code><Link to="/mod/game-api/types/assembly-api-models/chargeinfo">{"ChargeInfo"}</Link>{" Charge { get; set; }"}</code> | What the plan costs per period. |
| <Link id="m-description" /><code>{"string Description { get; set; }"}</code> | The plan's description text. |
| <Link id="m-externalid" /><code>{"string ExternalId { get; set; }"}</code> | The plan's ID at the payment provider. |
| <Link id="m-identifier" /><code>{"int Identifier { get; set; }"}</code> | The plan's numeric ID. |
| <Link id="m-isenabled" /><code>{"bool IsEnabled { get; set; }"}</code> | True when the plan can be bought. |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | The plan's display name. |
| <Link id="m-trial" /><code><Link to="/mod/game-api/types/assembly-api-models/duration">{"Duration"}</Link>{" Trial { get; set; }"}</code> | Length of the free trial. |

## Used in

Members of other types that take, return or hold a `SubscriptionPlanInfo`:

[`UserSubscription.PlanInfo`](/mod/game-api/types/assembly-api-models/usersubscription#m-planinfo).
