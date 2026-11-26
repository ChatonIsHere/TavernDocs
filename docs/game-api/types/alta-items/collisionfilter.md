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

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CollisionFilter(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(ref bool isHitconsumed, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(ref bool isHitconsumed, IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke(ref bool isHitconsumed)"}</code> |

## Used in

Members of other types that take, return or hold a `CollisionFilter`:

[`ImpactTool.CollisionFilter`](/game-api/types/alta-items/impacttool#m-collisionfilter).
