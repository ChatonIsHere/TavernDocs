---
title: "StorageStatParameters"
description: "Item component that scales the weight of what's stored inside the item, optionally only for one dock type."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StorageStatParameters

A **class** in `Root.Township`, the global namespace.

Item component that scales the weight of what's stored inside the item, optionally only for one dock type.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`ItemComponent`](/mod/game-api/types/global-i-l/itemcomponent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StorageStatParameters()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-pickupdocksettings" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{" pickupDockSettings"}</code> | <span className="api-desc">Backing field for `WeightMultiplierDockSettings`.</span> |
| <Link id="m-weightmultiplier" /><code>{"private float weightMultiplier"}</code> | <span className="api-desc">Backing field for `StorageWeightMultiplier`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-storageweightmultiplier" /><code>{"float StorageWeightMultiplier { get; }"}</code> | <span className="api-desc">Multiplier applied to the stored contents' weight.</span> |
| <Link id="m-weightmultiplierdocksettings" /><code><Link to="/mod/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{" WeightMultiplierDockSettings { get; }"}</code> | <span className="api-desc">The dock type the multiplier applies to.</span> |
