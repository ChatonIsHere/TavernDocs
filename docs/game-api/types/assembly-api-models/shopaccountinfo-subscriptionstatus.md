---
title: "ShopAccountInfo.SubscriptionStatus"
description: "Supporter subscription state inside ShopAccountInfo.MemberStatus."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShopAccountInfo.SubscriptionStatus

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

Supporter subscription state inside `ShopAccountInfo.MemberStatus`.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Nested in** [`ShopAccountInfo`](/game-api/types/assembly-api-models/shopaccountinfo)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SubscriptionStatus()"}</code> | Creates a `ShopAccountInfo.SubscriptionStatus` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isrenewing" /><code>{"bool? IsRenewing { get; set; }"}</code> | Whether the subscription renews, null when unknown. |
| <Link id="m-issupporter" /><code>{"bool IsSupporter { get; set; }"}</code> | True when the user is a supporter (JSON `is_member`). |
| <Link id="m-memberenddate" /><code>{"DateTime? MemberEndDate { get; set; }"}</code> | When supporter status ends, if set. |
| <Link id="m-nextreward" /><code>{"DateTime? NextReward { get; set; }"}</code> | When the next supporter reward is due, if set. |

## Used in

Members of other types that take, return or hold a `SubscriptionStatus`:

[`ShopAccountInfo.MemberStatus`](/game-api/types/assembly-api-models/shopaccountinfo#m-memberstatus).
