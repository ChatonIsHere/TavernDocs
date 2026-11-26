---
title: "Ingot"
description: "Item component on ingots that gives their smelting time and metal material."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Ingot

A **class** in `Root.Township`, `Alta.Inventory`.

Item component on ingots that gives their smelting time and metal material.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`ItemComponent`](/game-api/types/global-i-l/itemcomponent)
- **Documented in** [Smelting and forging](/game-api/game-systems/smelting-and-forging)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Ingot()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-physicalmaterial" /><code>{"private "}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" physicalMaterial"}</code> | Backing field for `PhysicalMaterial`. |
| <Link id="m-smeltingduration" /><code>{"private float smeltingDuration"}</code> | Backing field for `SmeltingDuration`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-physicalmaterial-2" /><code><Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" "}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" { get; }"}</code> | The metal this ingot is made of. |
| <Link id="m-smeltingduration-2" /><code>{"float SmeltingDuration { get; }"}</code> | How long this ingot takes to smelt. |
