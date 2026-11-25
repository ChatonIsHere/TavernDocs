---
title: "ItemComponent"
description: "Base for an asset that adds data to an Item, such as CookableItem."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ItemComponent

An **abstract class** in `Root.Township`, no namespace.

Base for an asset that adds data to an `Item`, such as `CookableItem`. Can be limited to some physical materials.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `ScriptableObject`, [`IItemComponent`](/game-api/types/global-i-l/iitemcomponent)
- **Derived types** [`CookableItem`](/game-api/types/alta-crafting/cookableitem), [`CookingStage`](/game-api/types/alta-crafting/cookingstage), [`Ingot`](/game-api/types/alta-items/ingot), [`BuriedItemTag`](/game-api/types/global-a-b/burieditemtag), [`Fuel`](/game-api/types/global-e-h/fuel), [`ImpactorStatParameters`](/game-api/types/global-i-l/impactorstatparameters), [`MouldItemComponent`](/game-api/types/global-m-o/moulditemcomponent), [`StorageStatParameters`](/game-api/types/global-s/storagestatparameters)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected ItemComponent()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-physicalmaterials" /><code>{"private List<"}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{"> physicalMaterials"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-item" /><code><Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" { get; private set; }"}</code> | The item this component is attached to, set when the item initializes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkmatch" /><code>{"bool CheckMatch("}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" physicalMaterial)"}</code> | Whether this component applies to a physical material. True if none are listed or the material is null. |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-initialize" /><code>{"private void IItemComponent.Initialize("}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" item)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `ItemComponent`:

[`Item.components`](/game-api/types/alta-items/item#m-components), [`Item.Components`](/game-api/types/alta-items/item#m-components-2), [`Item.GetComponent`](/game-api/types/alta-items/item#m-getcomponent-2).
