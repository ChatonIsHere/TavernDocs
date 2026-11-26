---
title: "MouldRestrictor"
description: "Server: a position restrictor for moulds that keeps only one mould of each type; registering a second one destroys the older one."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MouldRestrictor

A **class** in `Root.Township`, `Alta.Pages`.

Server: a position restrictor for moulds that keeps only one mould of each type; registering a second one destroys the older one.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`PositionRestrictor`](/mod/game-api/types/alta-items/positionrestrictor)
- **Documented in** [Pages and books](/mod/game-api/items/pages-and-books)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MouldRestrictor()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-moulddefinitions" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-m-o/moulddefinition">{"MouldDefinition"}</Link>{", "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> mouldDefinitions"}</code> | The registered pickup for each mould type. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregister" /><code>{"override void Deregister("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Removes the pickup from the restrictor and forgets its mould type. |
| <Link id="m-register" /><code>{"override void Register("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Server: for moulds that use the restrictor, destroys any older mould of the same type, then registers the pickup. |
