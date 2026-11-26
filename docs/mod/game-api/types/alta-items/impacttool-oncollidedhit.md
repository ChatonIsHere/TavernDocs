---
title: "ImpactTool.OnCollidedHit"
description: "Handler for ImpactTool.OnCollided."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactTool.OnCollidedHit

A **delegate** in `Root.Township`, `Alta.Impact`.

Handler for `ImpactTool.OnCollided`. Called with the collision, whether it became a hit, and the tool.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Nested in** [`ImpactTool`](/mod/game-api/types/alta-items/impacttool)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OnCollidedHit(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(Collision collision, bool isHitting, "}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke(Collision collision, bool isHitting, "}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `OnCollidedHit`:

[`ImpactTool.OnCollided`](/mod/game-api/types/alta-items/impacttool#m-oncollided).
