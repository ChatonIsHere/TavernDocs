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

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CraftingChanged(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" part, bool isLoad, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" part, bool isLoad)"}</code> |

## Used in

Members of other types that take, return or hold a `CraftingChanged`:

[`CraftingPart.OnCrafted`](/game-api/types/alta-crafting/craftingpart#m-oncrafted), [`CraftingPart.OnDecrafted`](/game-api/types/alta-crafting/craftingpart#m-ondecrafted).
