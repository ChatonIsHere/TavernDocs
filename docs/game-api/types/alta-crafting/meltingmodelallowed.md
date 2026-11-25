---
title: "MeltingModelAllowed"
description: "delegate MeltingModelAllowed in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MeltingModelAllowed

A **delegate** in `Root.Township`, `Alta.Blacksmithing`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MeltingModelAllowed(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-crafting/meltingmodel">{"MeltingModel"}</Link>{" model, ref bool isAllowed, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(ref bool isAllowed, IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-crafting/meltingmodel">{"MeltingModel"}</Link>{" model, ref bool isAllowed)"}</code> |

## Used in

Members of other types that take, return or hold a `MeltingModelAllowed`:

[`MeltingModel.isAllowedFilter`](/game-api/types/alta-crafting/meltingmodel#m-isallowedfilter).
