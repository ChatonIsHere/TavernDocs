---
title: "DestroyActionArgument"
description: "Game task action argument sent when a player destroys a health object with a tool."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DestroyActionArgument

A **class** in `Root.Township`, the global namespace.

Game task action argument sent when a player destroys a health object with a tool. Server.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`GameTaskActionArgument`](/mod/game-api/types/global-e-h/gametaskactionargument)
- **Derived types** [`DestroyHealthObjectTask`](/mod/game-api/types/global-c-d/destroyhealthobjecttask)
- **Documented in** [Other systems](/mod/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DestroyActionArgument("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" destroyed)"}</code> | Creates a `DestroyActionArgument` from `destroyed`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code>{"override "}<Link to="/mod/game-api/types/global-e-h/gameactionchannel">{"GameActionChannel"}</Link>{" Channel { get; }"}</code> | Always `GameActionChannel.DestroyObject`. |
| <Link id="m-destroyed" /><code><Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" Destroyed { get; }"}</code> | Prefab of the object that was destroyed. |

## Used in

Members of other types that take, return or hold a `DestroyActionArgument`:

[`DestroyHealthObjectTask.IsValid`](/mod/game-api/types/global-c-d/destroyhealthobjecttask#m-isvalid).
