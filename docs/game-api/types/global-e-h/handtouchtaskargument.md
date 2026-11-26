---
title: "HandTouchTaskArgument"
description: "Game task action argument sent when a player's hand touches a hover point on an object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandTouchTaskArgument

A **class** in `Root.Township`, no namespace.

Game task action argument sent when a player's hand touches a hover point on an object. Server.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`GameTaskActionArgument`](/game-api/types/global-e-h/gametaskactionargument)
- **Derived types** [`HandTouchTask`](/game-api/types/global-e-h/handtouchtask)
- **Documented in** [Other systems](/game-api/game-systems/other-systems)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"HandTouchTaskArgument(uint hash)"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code>{"override "}<Link to="/game-api/types/global-e-h/gameactionchannel">{"GameActionChannel"}</Link>{" Channel { get; }"}</code> | Always `GameActionChannel.HandTouch`. |
| <Link id="m-hash" /><code>{"uint Hash { get; }"}</code> | Prefab hash of the touched object's root. |

## Used in

Members of other types that take, return or hold a `HandTouchTaskArgument`:

[`HandTouchTask.IsValid`](/game-api/types/global-e-h/handtouchtask#m-isvalid).
