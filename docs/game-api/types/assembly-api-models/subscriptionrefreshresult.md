---
title: "SubscriptionRefreshResult"
description: "class SubscriptionRefreshResult in Alta.Api.DataTransferModels."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SubscriptionRefreshResult

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Nested types** [`Reward`](/game-api/types/assembly-api-models/subscriptionrefreshresult-reward)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SubscriptionRefreshResult()"}</code> |

## Properties

| Member |
| --- |
| <Link id="m-comment" /><code>{"string Comment { get; set; }"}</code> |
| <Link id="m-rewardperiodspassed" /><code>{"int RewardPeriodsPassed { get; set; }"}</code> |
| <Link id="m-rewards" /><code>{"IEnumerable<"}<Link to="/game-api/types/assembly-api-models/subscriptionrefreshresult-reward">{"SubscriptionRefreshResult.Reward"}</Link>{"> Rewards { get; set; }"}</code> |

## Used in

Members of other types that take, return or hold a `SubscriptionRefreshResult`:

[`IShopAccount.CheckForSubscriptionRewardsAsync`](/game-api/types/assembly-api-client/ishopaccount#m-checkforsubscriptionrewardsasync), [`OfflineShopAccount.CheckForSubscriptionRewardsAsync`](/game-api/types/assembly-api-client/offlineshopaccount#m-checkforsubscriptionrewardsasync), [`ShopAccount.CheckForSubscriptionRewardsAsync`](/game-api/types/assembly-api-client/shopaccount#m-checkforsubscriptionrewardsasync), [`LowLevelApiClient.CheckForSubscriptionRewardsAsync`](/game-api/types/assembly-api-client/lowlevelapiclient#m-checkforsubscriptionrewardsasync).
