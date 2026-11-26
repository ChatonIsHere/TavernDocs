---
title: "DestroyActionArgument"
description: "Game task action argument sent when a player destroys a health object with a tool."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DestroyActionArgument

A **class** in `Root.Township`, no namespace.

Game task action argument sent when a player destroys a health object with a tool. Server.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`GameTaskActionArgument`](/game-api/types/global-e-h/gametaskactionargument)
- **Derived types** [`DestroyHealthObjectTask`](/game-api/types/global-c-d/destroyhealthobjecttask)
- **Documented in** [Other systems](/game-api/game-systems/other-systems)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DestroyActionArgument("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" destroyed)"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code>{"override "}<Link to="/game-api/types/global-e-h/gameactionchannel">{"GameActionChannel"}</Link>{" Channel { get; }"}</code> | Always `GameActionChannel.DestroyObject`. |
| <Link id="m-destroyed" /><code><Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" Destroyed { get; }"}</code> | Prefab of the object that was destroyed. |

## Used in

Members of other types that take, return or hold a `DestroyActionArgument`:

[`DestroyHealthObjectTask.IsValid`](/game-api/types/global-c-d/destroyhealthobjecttask#m-isvalid).
