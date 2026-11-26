---
title: "ItemComponent"
description: "Base for an asset that adds data to an Item, such as CookableItem."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ItemComponent

An **abstract class** in `Root.Township`, the global namespace.

Base for an asset that adds data to an `Item`, such as `CookableItem`. Can be limited to some physical materials.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `ScriptableObject`, [`IItemComponent`](/mod/game-api/types/global-i-l/iitemcomponent)
- **Derived types** [`CookableItem`](/mod/game-api/types/alta-crafting/cookableitem), [`CookingStage`](/mod/game-api/types/alta-crafting/cookingstage), [`Ingot`](/mod/game-api/types/alta-items/ingot), [`BuriedItemTag`](/mod/game-api/types/global-a-b/burieditemtag), [`Fuel`](/mod/game-api/types/global-e-h/fuel), [`ImpactorStatParameters`](/mod/game-api/types/global-i-l/impactorstatparameters), [`MouldItemComponent`](/mod/game-api/types/global-m-o/moulditemcomponent), [`StorageStatParameters`](/mod/game-api/types/global-s/storagestatparameters)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ItemComponent()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-physicalmaterials" /><code>{"private List<"}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{"> physicalMaterials"}</code> | Materials this component applies to; empty means all. Checked by `CheckMatch`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-item" /><code><Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" { get; private set; }"}</code> | The item this component is attached to, set when the item initializes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkmatch" /><code>{"bool CheckMatch("}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" physicalMaterial)"}</code> | Whether this component applies to a physical material. True if none are listed or the material is null. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"private void IItemComponent.Initialize("}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" item)"}</code> | Stores the item this component belongs to in `Item`. |

</details>

## Used in

Members of other types that take, return or hold a `ItemComponent`:

[`Item.components`](/mod/game-api/types/alta-items/item#m-components), [`Item.Components`](/mod/game-api/types/alta-items/item#m-components-2), [`Item.GetComponent`](/mod/game-api/types/alta-items/item#m-getcomponent-2).
