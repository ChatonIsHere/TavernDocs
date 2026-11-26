---
title: "BasicMeltingModel"
description: "Melting model that stores its physical material in its own field, for objects without a PhysicalMaterialPart."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicMeltingModel

A **class** in `Root.Township`, `Alta.Blacksmithing`.

Melting model that stores its physical material in its own field, for objects without a `PhysicalMaterialPart`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`MeltingModel`](/game-api/types/alta-crafting/meltingmodel)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BasicMeltingModel()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-physicalmaterial" /><code>{"private "}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" physicalMaterial"}</code> | Backing field for `PhysicalMaterial`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-physicalmaterial-2" /><code>{"override "}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" "}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" { get; }"}</code> | The material set on this model. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-internalsetup" /><code>{"protected override void InternalSetup("}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material)"}</code> | Stores the given material. |
