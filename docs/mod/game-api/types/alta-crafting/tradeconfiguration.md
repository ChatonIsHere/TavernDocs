---
title: "TradeConfiguration"
description: "Holds references to a trade vendor's price buttons."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TradeConfiguration

A **class** in `Root.Township`, `Alta.Trading`.

Holds references to a trade vendor's price buttons. In this build it does nothing with them.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TradeConfiguration()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-coindown" /><code>{"private "}<Link to="/mod/game-api/types/global-p/physicalbutton">{"PhysicalButton"}</Link>{" coinDown"}</code> | Button to lower the coin amount. |
| <Link id="m-coinup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/physicalbutton">{"PhysicalButton"}</Link>{" coinUp"}</code> | Button to raise the coin amount. |
| <Link id="m-itemdown" /><code>{"private "}<Link to="/mod/game-api/types/global-p/physicalbutton">{"PhysicalButton"}</Link>{" itemDown"}</code> | Button to lower the item amount. |
| <Link id="m-itemup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/physicalbutton">{"PhysicalButton"}</Link>{" itemUp"}</code> | Button to raise the item amount. |
| <Link id="m-vendor" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/tradevendor">{"TradeVendor"}</Link>{" vendor"}</code> | The vendor these buttons belong to. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Finds the `TradeVendor` on the same object. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Only calls the base method. |
