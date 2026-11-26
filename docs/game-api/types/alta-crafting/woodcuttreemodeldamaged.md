---
title: "WoodcutTreeModelDamaged"
description: "Handler for WoodcutTreeModel.TookDamage, called with the tree model and the damage it took."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WoodcutTreeModelDamaged

A **delegate** in `Root.Township`, `Alta.Woodcutting`.

Handler for `WoodcutTreeModel.TookDamage`, called with the tree model and the damage it took.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"WoodcutTreeModelDamaged(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-crafting/woodcuttreemodel">{"WoodcutTreeModel"}</Link>{" model, float damage, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-crafting/woodcuttreemodel">{"WoodcutTreeModel"}</Link>{" model, float damage)"}</code> |

## Used in

Members of other types that take, return or hold a `WoodcutTreeModelDamaged`:

[`WoodcutTreeModel.TookDamage`](/game-api/types/alta-crafting/woodcuttreemodel#m-tookdamage).
