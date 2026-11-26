---
title: "EatingAmountArgument"
description: "Game task argument sent on the EatAmount channel when a player eats something, holding the eaten prefab."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EatingAmountArgument

A **class** in `Root.Township`, the global namespace.

Game task argument sent on the `EatAmount` channel when a player eats something, holding the eaten prefab.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`GameTaskActionArgument`](/mod/game-api/types/global-e-h/gametaskactionargument)
- **Documented in** [Other systems](/mod/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EatingAmountArgument("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" eaten)"}</code> | <span className="api-desc">Creates an `EatingAmountArgument` from `eaten`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code>{"override "}<Link to="/mod/game-api/types/global-e-h/gameactionchannel">{"GameActionChannel"}</Link>{" Channel { get; }"}</code> | <span className="api-desc">Always `GameActionChannel.EatAmount`.</span> |
| <Link id="m-eating" /><code><Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" Eating { get; }"}</code> | <span className="api-desc">The prefab that was eaten.</span> |
