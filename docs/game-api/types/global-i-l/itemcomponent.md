---
title: "ItemComponent"
description: "abstract class ItemComponent in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ItemComponent

An **abstract class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `ScriptableObject`, [`IItemComponent`](/game-api/types/global-i-l/iitemcomponent)
- **Derived types** [`CookableItem`](/game-api/types/alta-crafting/cookableitem), [`CookingStage`](/game-api/types/alta-crafting/cookingstage), [`Ingot`](/game-api/types/alta-items/ingot), [`BuriedItemTag`](/game-api/types/global-a-b/burieditemtag), [`Fuel`](/game-api/types/global-e-h/fuel), [`ImpactorStatParameters`](/game-api/types/global-i-l/impactorstatparameters), [`MouldItemComponent`](/game-api/types/global-m-o/moulditemcomponent), [`StorageStatParameters`](/game-api/types/global-s/storagestatparameters)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ItemComponent()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-physicalmaterials" /><code>{"private List<"}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{"> physicalMaterials"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-item" /><code><Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkmatch" /><code>{"bool CheckMatch("}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" physicalMaterial)"}</code> |  |
| <Link id="m-initialize" /><code>{"private void IItemComponent.Initialize("}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" item)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ItemComponent`:

[`Item.components`](/game-api/types/alta-items/item#m-components), [`Item.Components`](/game-api/types/alta-items/item#m-components-2), [`Item.GetComponent`](/game-api/types/alta-items/item#m-getcomponent-2).
