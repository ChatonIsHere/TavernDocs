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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MeltingModelAllowed(object object, IntPtr method)"}</code> | <span className="api-desc">Made by the compiler when you assign a method to this delegate; you don't call it directly.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/mod/game-api/types/alta-crafting/meltingmodel">{"MeltingModel"}</Link>{" model, ref bool isAllowed, AsyncCallback callback, object object)"}</code> | <span className="api-desc">Starts the call on another thread; not supported in Unity, so use `Invoke`.</span> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(ref bool isAllowed, IAsyncResult result)"}</code> | <span className="api-desc">Waits for a call started with `BeginInvoke`; not supported in Unity.</span> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/mod/game-api/types/alta-crafting/meltingmodel">{"MeltingModel"}</Link>{" model, ref bool isAllowed)"}</code> | <span className="api-desc">Calls every method on this delegate with these arguments.</span> |

## Used in

Members of other types that take, return or hold a `MeltingModelAllowed`:

<div className="api-used-in">

[`MeltingModel.isAllowedFilter`](/mod/game-api/types/alta-crafting/meltingmodel#m-isallowedfilter).

</div>
