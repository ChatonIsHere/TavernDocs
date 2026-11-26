---
title: "BasicPopulationItem.PopulationItemEventHandler"
description: "Callback with a BasicPopulationItem, used by its Removed event."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicPopulationItem.PopulationItemEventHandler

A **delegate** in `Root.Township`, `Alta.Populations`.

Callback with a `BasicPopulationItem`, used by its `Removed` event.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Nested in** [`BasicPopulationItem`](/game-api/types/alta-world-generation/basicpopulationitem)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PopulationItemEventHandler(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-world-generation/basicpopulationitem">{"BasicPopulationItem"}</Link>{" item, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-world-generation/basicpopulationitem">{"BasicPopulationItem"}</Link>{" item)"}</code> |

## Used in

Members of other types that take, return or hold a `PopulationItemEventHandler`:

[`BasicPopulationItem.Removed`](/game-api/types/alta-world-generation/basicpopulationitem#m-removed).
