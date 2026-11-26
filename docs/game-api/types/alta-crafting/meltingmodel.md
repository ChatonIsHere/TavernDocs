---
title: "MeltingModel"
description: "Base for items that can be melted down in a smelter (ingots, forged parts)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MeltingModel

An **abstract class** in `Root.Township`, `Alta.Blacksmithing`.

Base for items that can be melted down in a smelter (ingots, forged parts). The smelter checks whether every counted heat point is hot enough, then adds `IngotValue` of the material.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`BasicMeltingModel`](/game-api/types/alta-crafting/basicmeltingmodel), [`MeltingModelPart`](/game-api/types/alta-crafting/meltingmodelpart)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected MeltingModel()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidmeshfilter" /><code>{"private MeshFilter androidMeshFilter"}</code> | Mesh filter used for the Android version of the model. |
| <Link id="m-heatpointcollection" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/heatpointcollection">{"HeatPointCollection"}</Link>{" heatPointCollection"}</code> | Heat points checked by `IsAtMeltingPoint`. Found in children if not set. |
| <Link id="m-ingotvalue" /><code>{"private float ingotValue"}</code> | Backing value for `IngotValue`: how much of an ingot melting this gives (0.3 by default). |
| <Link id="m-istriggeringabilities" /><code>{"private bool istriggeringAbilities"}</code> | Backing field for `IsTriggeringAbilities`. |
| <Link id="m-mainmeshfilter" /><code>{"private MeshFilter mainMeshFilter"}</code> | Mesh filter used for `MeshBounds` and `FilterTransform`. Found from a child `ForgedModel` if not set. |
| <Link id="m-modifiers" /><code>{"private "}<Link to="/game-api/types/alta-crafting/meltingmodelmodifier">{"MeltingModelModifier"}</Link>{"[] modifiers"}</code> | Melting modifiers initialised on the server and terminated when the model goes. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-filtertransform" /><code>{"Transform FilterTransform { get; }"}</code> | Transform of the main mesh. |
| <Link id="m-ingotvalue-2" /><code>{"float IngotValue { get; }"}</code> | Amount of material it melts into, after `yieldMultiplierFilter` handlers. Default 0.3. |
| <Link id="m-isatmeltingpoint" /><code>{"bool IsAtMeltingPoint { get; }"}</code> | True when every heat point counted for melting is at or above the material's glowing end temperature. |
| <Link id="m-ismeltingallowed" /><code>{"bool IsMeltingAllowed { get; }"}</code> | True unless an `isAllowedFilter` handler says no. The smelter skips items that are not allowed. |
| <Link id="m-istriggeringabilities-2" /><code>{"bool IsTriggeringAbilities { get; }"}</code> | Whether ember composers treat this item as triggering abilities. Default true. |
| <Link id="m-meshbounds" /><code>{"Bounds MeshBounds { get; }"}</code> | Bounds of the main mesh. |
| <Link id="m-physicalmaterial" /><code>{"abstract "}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" "}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" { get; }"}</code> | Material the item is made of. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-isallowedfilter" /><code>{"event "}<Link to="/game-api/types/alta-crafting/meltingmodelallowed">{"MeltingModelAllowed"}</Link>{" isAllowedFilter"}</code> | Lets other code block melting for this item. |
| <Link id="m-yieldmultiplierfilter" /><code>{"event "}<Link to="/game-api/types/alta-crafting/meltingmodelyield">{"MeltingModelYield"}</Link>{" yieldMultiplierFilter"}</code> | Lets other code change the melt yield. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: starts the item's melting modifiers. |
| <Link id="m-onvalidate" /><code>{"virtual void OnValidate()"}</code> | Finds the heat point collection and main mesh in the editor. |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material, float ingotValue)"}</code> | Sets the material, and optionally the ingot value. |
| <Link id="m-setup-2" /><code>{"void Setup("}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material)"}</code> | Sets the material, and optionally the ingot value. |
| <Link id="m-internalsetup" /><code>{"protected abstract void InternalSetup("}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material)"}</code> | Sets the item's material. Subclasses implement it. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | On the server (unless the entity is being destroyed), terminates the modifiers. Clears the filter events. |
| <Link id="m-scenedestroy" /><code>{"private void SceneDestroy("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Server: terminates the modifiers when the entity is destroyed by the scene. |

</details>

## Used in

Members of other types that take, return or hold a `MeltingModel`:

[`CraftingMeltingAllowedModifier.AllowedFilter`](/game-api/types/alta-crafting/craftingmeltingallowedmodifier#m-allowedfilter), [`CraftingMeltingAllowedModifier.Initialize`](/game-api/types/alta-crafting/craftingmeltingallowedmodifier#m-initialize), [`CraftingMeltingAllowedModifier.pickupMaps`](/game-api/types/alta-crafting/craftingmeltingallowedmodifier#m-pickupmaps), [`CraftingMeltingAllowedModifier.Terminate`](/game-api/types/alta-crafting/craftingmeltingallowedmodifier#m-terminate), [`DurabilityMeltingYieldModifier.Initialize`](/game-api/types/alta-crafting/durabilitymeltingyieldmodifier#m-initialize), [`DurabilityMeltingYieldModifier.Terminate`](/game-api/types/alta-crafting/durabilitymeltingyieldmodifier#m-terminate), [`DurabilityMeltingYieldModifier.YieldMultiplier`](/game-api/types/alta-crafting/durabilitymeltingyieldmodifier#m-yieldmultiplier), [`MeltingHeatPoint.meltingModel`](/game-api/types/alta-crafting/meltingheatpoint#m-meltingmodel), [`MeltingModelAllowed.BeginInvoke`](/game-api/types/alta-crafting/meltingmodelallowed#m-begininvoke), [`MeltingModelAllowed.Invoke`](/game-api/types/alta-crafting/meltingmodelallowed#m-invoke), [`MeltingModelModifier.Initialize`](/game-api/types/alta-crafting/meltingmodelmodifier#m-initialize), [`MeltingModelModifier.Terminate`](/game-api/types/alta-crafting/meltingmodelmodifier#m-terminate), [`MeltingModelYield.BeginInvoke`](/game-api/types/alta-crafting/meltingmodelyield#m-begininvoke), [`MeltingModelYield.Invoke`](/game-api/types/alta-crafting/meltingmodelyield#m-invoke), [`Recycler.MeltingModelReference.MeltingModel`](/game-api/types/alta-crafting/recycler-meltingmodelreference#m-meltingmodel), [`Recycler.MeltingModelReference.MeltingModelReference`](/game-api/types/alta-crafting/recycler-meltingmodelreference#m-ctor).
