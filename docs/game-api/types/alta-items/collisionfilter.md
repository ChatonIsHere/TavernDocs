---
title: "CollisionFilter"
description: "Handler for ImpactTool.CollisionFilter."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CollisionFilter

A **delegate** in `Root.Township`, `Alta.Impact`.

Handler for `ImpactTool.CollisionFilter`. Set `isHitconsumed` to true to stop the collision from becoming a hit, as `ChiselingTool` does.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CollisionFilter(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(ref bool isHitconsumed, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(ref bool isHitconsumed, IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke(ref bool isHitconsumed)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `CollisionFilter`:

[`ImpactTool.CollisionFilter`](/game-api/types/alta-items/impacttool#m-collisionfilter).
