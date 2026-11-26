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
| <Link id="m-ctor" /><code>{"TradeConfiguration()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-coindown" /><code>{"private "}<Link to="/mod/game-api/types/global-p/physicalbutton">{"PhysicalButton"}</Link>{" coinDown"}</code> | <span className="api-desc">Button to lower the coin amount.</span> |
| <Link id="m-coinup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/physicalbutton">{"PhysicalButton"}</Link>{" coinUp"}</code> | <span className="api-desc">Button to raise the coin amount.</span> |
| <Link id="m-itemdown" /><code>{"private "}<Link to="/mod/game-api/types/global-p/physicalbutton">{"PhysicalButton"}</Link>{" itemDown"}</code> | <span className="api-desc">Button to lower the item amount.</span> |
| <Link id="m-itemup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/physicalbutton">{"PhysicalButton"}</Link>{" itemUp"}</code> | <span className="api-desc">Button to raise the item amount.</span> |
| <Link id="m-vendor" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/tradevendor">{"TradeVendor"}</Link>{" vendor"}</code> | <span className="api-desc">The vendor these buttons belong to.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Finds the `TradeVendor` on the same object.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Only calls the base method.</span> |
