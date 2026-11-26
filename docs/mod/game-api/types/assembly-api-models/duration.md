---
title: "Duration"
description: "A length of time as a count and a unit (day, month or year), used for subscription trial and charge periods."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Duration

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Shared`.

A length of time as a count and a unit (day, month or year), used for subscription trial and charge periods.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Duration()"}</code> | Creates a `Duration` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-months" /><code>{"int Months { get; }"}</code> | The duration in whole months. Day durations give 0 and years count as 12 months. |
| <Link id="m-period" /><code>{"int Period { get; set; }"}</code> | How many units (`value` in JSON). |
| <Link id="m-type" /><code><Link to="/mod/game-api/types/assembly-api-models/durationtype">{"DurationType"}</Link>{" Type { get; set; }"}</code> | The unit. |

## Used in

Members of other types that take, return or hold a `Duration`:

[`ChargeInfo.Period`](/mod/game-api/types/assembly-api-models/chargeinfo#m-period), [`SubscriptionPlanInfo.Trial`](/mod/game-api/types/assembly-api-models/subscriptionplaninfo#m-trial).
