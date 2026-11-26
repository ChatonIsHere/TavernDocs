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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`MeltingModel`](/mod/game-api/types/alta-crafting/meltingmodel)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MeltingModelPart()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-physicalmaterialpart" /><code>{"private "}<Link to="/mod/game-api/types/global-p/physicalmaterialpart">{"PhysicalMaterialPart"}</Link>{" physicalMaterialPart"}</code> | <span className="api-desc">The part that holds this model's material.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-physicalmaterial" /><code>{"override "}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" "}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" { get; }"}</code> | <span className="api-desc">The material of the linked `PhysicalMaterialPart`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"override void OnValidate()"}</code> | <span className="api-desc">Editor: finds the `PhysicalMaterialPart` on this object if not set.</span> |
| <Link id="m-internalsetup" /><code>{"protected override void InternalSetup("}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material)"}</code> | <span className="api-desc">Sets the material on the `PhysicalMaterialPart`.</span> |
