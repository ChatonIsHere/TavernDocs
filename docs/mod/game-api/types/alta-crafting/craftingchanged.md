---
title: "CraftingChanged"
description: "Event handler for a crafting part being crafted or decrafted; isLoad is true when it happens while loading."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CraftingChanged

A **delegate** in `Root.Township`, `Alta.Crafting`.

Event handler for a crafting part being crafted or decrafted; `isLoad` is true when it happens while loading. Used by `CraftingPart.OnCrafted` and `OnDecrafted`.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CraftingChanged(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" part, bool isLoad, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" part, bool isLoad)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `CraftingChanged`:

[`CraftingPart.OnCrafted`](/mod/game-api/types/alta-crafting/craftingpart#m-oncrafted), [`CraftingPart.OnDecrafted`](/mod/game-api/types/alta-crafting/craftingpart#m-ondecrafted).
