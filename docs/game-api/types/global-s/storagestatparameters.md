---
title: "StorageStatParameters"
description: "Item component that scales the weight of what's stored inside the item, optionally only for one dock type."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StorageStatParameters

A **class** in `Root.Township`, no namespace.

Item component that scales the weight of what's stored inside the item, optionally only for one dock type.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`ItemComponent`](/game-api/types/global-i-l/itemcomponent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StorageStatParameters()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-pickupdocksettings" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{" pickupDockSettings"}</code> | Backing field for `WeightMultiplierDockSettings`. |
| <Link id="m-weightmultiplier" /><code>{"private float weightMultiplier"}</code> | Backing field for `StorageWeightMultiplier`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-storageweightmultiplier" /><code>{"float StorageWeightMultiplier { get; }"}</code> | Multiplier applied to the stored contents' weight. |
| <Link id="m-weightmultiplierdocksettings" /><code><Link to="/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{" WeightMultiplierDockSettings { get; }"}</code> | The dock type the multiplier applies to. |
