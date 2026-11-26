---
title: "TransferAmountArgument"
description: "Game task action argument sent when a player moves one item into a pickup container."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TransferAmountArgument

A **class** in `Root.Township`, the global namespace.

Game task action argument sent when a player moves one item into a pickup container. Server.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`GameTaskActionArgument`](/mod/game-api/types/global-e-h/gametaskactionargument)
- **Derived types** [`TransferAmountTask`](/mod/game-api/types/global-t-x/transferamounttask)
- **Documented in** [Other systems](/mod/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TransferAmountArgument("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" transfer)"}</code> | <span className="api-desc">Creates a `TransferAmountArgument` from `transfer`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code>{"override "}<Link to="/mod/game-api/types/global-e-h/gameactionchannel">{"GameActionChannel"}</Link>{" Channel { get; }"}</code> | <span className="api-desc">Always `GameActionChannel.TransferAmount`.</span> |
| <Link id="m-transferring" /><code><Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" Transferring { get; }"}</code> | <span className="api-desc">Prefab of the item moved.</span> |

## Used in

Members of other types that take, return or hold a `TransferAmountArgument`:

<div className="api-used-in">

[`TransferAmountTask.IsValid`](/mod/game-api/types/global-t-x/transferamounttask#m-isvalid).

</div>
