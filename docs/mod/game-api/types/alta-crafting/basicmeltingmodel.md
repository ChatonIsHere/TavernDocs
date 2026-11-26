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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`MeltingModel`](/mod/game-api/types/alta-crafting/meltingmodel)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BasicMeltingModel()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-physicalmaterial" /><code>{"private "}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" physicalMaterial"}</code> | <span className="api-desc">Backing field for `PhysicalMaterial`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-physicalmaterial-2" /><code>{"override "}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" "}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" { get; }"}</code> | <span className="api-desc">The material set on this model.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-internalsetup" /><code>{"protected override void InternalSetup("}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material)"}</code> | <span className="api-desc">Stores the given material.</span> |
