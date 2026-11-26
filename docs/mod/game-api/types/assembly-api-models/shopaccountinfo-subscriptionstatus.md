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

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Nested in** [`ShopAccountInfo`](/mod/game-api/types/assembly-api-models/shopaccountinfo)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SubscriptionStatus()"}</code> | <span className="api-desc">Creates a `ShopAccountInfo.SubscriptionStatus` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isrenewing" /><code>{"bool? IsRenewing { get; set; }"}</code> | <span className="api-desc">Whether the subscription renews, null when unknown.</span> |
| <Link id="m-issupporter" /><code>{"bool IsSupporter { get; set; }"}</code> | <span className="api-desc">True when the user is a supporter (JSON `is_member`).</span> |
| <Link id="m-memberenddate" /><code>{"DateTime? MemberEndDate { get; set; }"}</code> | <span className="api-desc">When supporter status ends, if set.</span> |
| <Link id="m-nextreward" /><code>{"DateTime? NextReward { get; set; }"}</code> | <span className="api-desc">When the next supporter reward is due, if set.</span> |

## Used in

Members of other types that take, return or hold a `SubscriptionStatus`:

<div className="api-used-in">

[`ShopAccountInfo.MemberStatus`](/mod/game-api/types/assembly-api-models/shopaccountinfo#m-memberstatus).

</div>
