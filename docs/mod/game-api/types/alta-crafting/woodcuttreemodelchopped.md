---
title: "WoodcutTreeModelChopped"
description: "Handler for WoodcutTreeModel.Chopped, called with the tree model that was chopped down."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WoodcutTreeModelChopped

A **delegate** in `Root.Township`, `Alta.Woodcutting`.

Handler for `WoodcutTreeModel.Chopped`, called with the tree model that was chopped down.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WoodcutTreeModelChopped(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/mod/game-api/types/alta-crafting/woodcuttreemodel">{"WoodcutTreeModel"}</Link>{" model, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/mod/game-api/types/alta-crafting/woodcuttreemodel">{"WoodcutTreeModel"}</Link>{" model)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `WoodcutTreeModelChopped`:

[`WoodcutTreeModel.Chopped`](/mod/game-api/types/alta-crafting/woodcuttreemodel#m-chopped).
