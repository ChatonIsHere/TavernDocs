---
title: "MeltingModelAllowed"
description: "Filter for MeltingModel.isAllowedFilter."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MeltingModelAllowed

A **delegate** in `Root.Township`, `Alta.Blacksmithing`.

Filter for `MeltingModel.isAllowedFilter`. Handlers can set `isAllowed` to false to stop the model melting.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MeltingModelAllowed(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-crafting/meltingmodel">{"MeltingModel"}</Link>{" model, ref bool isAllowed, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(ref bool isAllowed, IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-crafting/meltingmodel">{"MeltingModel"}</Link>{" model, ref bool isAllowed)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `MeltingModelAllowed`:

[`MeltingModel.isAllowedFilter`](/game-api/types/alta-crafting/meltingmodel#m-isallowedfilter).
