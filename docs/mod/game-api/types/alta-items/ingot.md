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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`ItemComponent`](/mod/game-api/types/global-i-l/itemcomponent)
- **Documented in** [Smelting and forging](/mod/game-api/game-systems/smelting-and-forging)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Ingot()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-physicalmaterial" /><code>{"private "}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" physicalMaterial"}</code> | <span className="api-desc">Backing field for `PhysicalMaterial`.</span> |
| <Link id="m-smeltingduration" /><code>{"private float smeltingDuration"}</code> | <span className="api-desc">Backing field for `SmeltingDuration`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-physicalmaterial-2" /><code><Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" "}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" { get; }"}</code> | <span className="api-desc">The metal this ingot is made of.</span> |
| <Link id="m-smeltingduration-2" /><code>{"float SmeltingDuration { get; }"}</code> | <span className="api-desc">How long this ingot takes to smelt.</span> |
