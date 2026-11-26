---
title: "IGrowthManager"
description: "Owner of growing items, like GrowerGroup."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IGrowthManager

An **interface** in `Root.Township`, no namespace.

Owner of growing items, like `GrowerGroup`. Gives growth code its entity, transform and whether it goes away when growth finishes.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`GrowerGroup`](/game-api/types/global-e-h/growergroup)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> | The network entity that owns the growth. |
| <Link id="m-isdestroyedoncompletion" /><code>{"bool IsDestroyedOnCompletion { get; }"}</code> | Whether the owner is destroyed when growth completes. |
| <Link id="m-transform" /><code>{"Transform Transform { get; }"}</code> | The owner's transform. |

## Used in

Members of other types that take, return or hold a `IGrowthManager`:

[`GrowthItem.parent`](/game-api/types/global-e-h/growthitem#m-parent).
