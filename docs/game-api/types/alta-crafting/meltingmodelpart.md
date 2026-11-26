---
title: "MeltingModelPart"
description: "Melting model that reads and writes its material through a PhysicalMaterialPart on the same object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MeltingModelPart

A **class** in `Root.Township`, `Alta.Blacksmithing`.

Melting model that reads and writes its material through a `PhysicalMaterialPart` on the same object.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`MeltingModel`](/game-api/types/alta-crafting/meltingmodel)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MeltingModelPart()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-physicalmaterialpart" /><code>{"private "}<Link to="/game-api/types/global-p/physicalmaterialpart">{"PhysicalMaterialPart"}</Link>{" physicalMaterialPart"}</code> | The part that holds this model's material. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-physicalmaterial" /><code>{"override "}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" "}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" { get; }"}</code> | The material of the linked `PhysicalMaterialPart`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"override void OnValidate()"}</code> | Editor: finds the `PhysicalMaterialPart` on this object if not set. |
| <Link id="m-internalsetup" /><code>{"protected override void InternalSetup("}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material)"}</code> | Sets the material on the `PhysicalMaterialPart`. |
