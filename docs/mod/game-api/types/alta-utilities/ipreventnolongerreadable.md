---
title: "IPreventNoLongerReadable"
description: "Lets a component keep a renderer's mesh readable when the bake step would mark it no longer readable."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPreventNoLongerReadable

An **interface** in `Root.Township`, `Alta.Utilities.Atlas`.

Lets a component keep a renderer's mesh readable when the bake step would mark it no longer readable. `StackingComponent` implements it.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Derived types** [`StackingComponent`](/mod/game-api/types/alta-items/stackingcomponent)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-canmarkasnonlongerreadable" /><code>{"bool CanMarkAsNonLongerReadable(Renderer renderer)"}</code> | Return false to keep this renderer's mesh readable. |
