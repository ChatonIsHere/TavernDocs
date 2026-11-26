---
title: "TransferAmountArgument"
description: "Game task action argument sent when a player moves one item into a pickup container."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TransferAmountArgument

A **class** in `Root.Township`, no namespace.

Game task action argument sent when a player moves one item into a pickup container. Server.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`GameTaskActionArgument`](/game-api/types/global-e-h/gametaskactionargument)
- **Derived types** [`TransferAmountTask`](/game-api/types/global-t-x/transferamounttask)
- **Documented in** [Other systems](/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TransferAmountArgument("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" transfer)"}</code> | Creates a `TransferAmountArgument` from `transfer`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code>{"override "}<Link to="/game-api/types/global-e-h/gameactionchannel">{"GameActionChannel"}</Link>{" Channel { get; }"}</code> | Always `GameActionChannel.TransferAmount`. |
| <Link id="m-transferring" /><code><Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" Transferring { get; }"}</code> | Prefab of the item moved. |

## Used in

Members of other types that take, return or hold a `TransferAmountArgument`:

[`TransferAmountTask.IsValid`](/game-api/types/global-t-x/transferamounttask#m-isvalid).
