---
title: "StewContainer"
description: "A LiquidContainer that holds a reference to its StewComponent."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StewContainer

A **class** in `Root.Township`, `Alta.Cooking`.

A `LiquidContainer` that holds a reference to its `StewComponent`. Adds no behaviour of its own in this build.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`LiquidContainer`](/mod/game-api/types/alta-stats-effects/liquidcontainer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StewContainer()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-stew" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/stewcomponent">{"StewComponent"}</Link>{" stew"}</code> | The stew component for this container. |

</details>
