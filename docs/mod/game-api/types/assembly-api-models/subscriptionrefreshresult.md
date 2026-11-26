---
title: "SubscriptionRefreshResult"
description: "Result of checking for supporter subscription rewards, from CheckForSubscriptionRewardsAsync."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SubscriptionRefreshResult

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

Result of checking for supporter subscription rewards, from `CheckForSubscriptionRewardsAsync`. The offline shop returns an empty one.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Nested types** [`Reward`](/mod/game-api/types/assembly-api-models/subscriptionrefreshresult-reward)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SubscriptionRefreshResult()"}</code> | <span className="api-desc">Creates a `SubscriptionRefreshResult` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-comment" /><code>{"string Comment { get; set; }"}</code> | <span className="api-desc">Message about the check. Defaults to "No rewards applied".</span> |
| <Link id="m-rewardperiodspassed" /><code>{"int RewardPeriodsPassed { get; set; }"}</code> | <span className="api-desc">How many reward periods had passed since the last check.</span> |
| <Link id="m-rewards" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/subscriptionrefreshresult-reward">{"SubscriptionRefreshResult.Reward"}</Link>{"> Rewards { get; set; }"}</code> | <span className="api-desc">Rewards granted, each a type and an amount.</span> |

## Used in

Members of other types that take, return or hold a `SubscriptionRefreshResult`:

<div className="api-used-in">

[`IShopAccount.CheckForSubscriptionRewardsAsync`](/mod/game-api/types/assembly-api-client/ishopaccount#m-checkforsubscriptionrewardsasync), [`OfflineShopAccount.CheckForSubscriptionRewardsAsync`](/mod/game-api/types/assembly-api-client/offlineshopaccount#m-checkforsubscriptionrewardsasync), [`ShopAccount.CheckForSubscriptionRewardsAsync`](/mod/game-api/types/assembly-api-client/shopaccount#m-checkforsubscriptionrewardsasync), [`LowLevelApiClient.CheckForSubscriptionRewardsAsync`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-checkforsubscriptionrewardsasync).

</div>
