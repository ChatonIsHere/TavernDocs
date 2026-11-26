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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`BasicMeltingModel`](/mod/game-api/types/alta-crafting/basicmeltingmodel), [`MeltingModelPart`](/mod/game-api/types/alta-crafting/meltingmodelpart)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected MeltingModel()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidmeshfilter" /><code>{"private MeshFilter androidMeshFilter"}</code> | <span className="api-desc">Mesh filter used for the Android version of the model.</span> |
| <Link id="m-heatpointcollection" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/heatpointcollection">{"HeatPointCollection"}</Link>{" heatPointCollection"}</code> | <span className="api-desc">Heat points checked by `IsAtMeltingPoint`. Found in children if not set.</span> |
| <Link id="m-ingotvalue" /><code>{"private float ingotValue"}</code> | <span className="api-desc">Backing value for `IngotValue`: how much of an ingot melting this gives (0.3 by default).</span> |
| <Link id="m-istriggeringabilities" /><code>{"private bool istriggeringAbilities"}</code> | <span className="api-desc">Backing field for `IsTriggeringAbilities`.</span> |
| <Link id="m-mainmeshfilter" /><code>{"private MeshFilter mainMeshFilter"}</code> | <span className="api-desc">Mesh filter used for `MeshBounds` and `FilterTransform`. Found from a child `ForgedModel` if not set.</span> |
| <Link id="m-modifiers" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/meltingmodelmodifier">{"MeltingModelModifier"}</Link>{"[] modifiers"}</code> | <span className="api-desc">Melting modifiers initialised on the server and terminated when the model goes.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-filtertransform" /><code>{"Transform FilterTransform { get; }"}</code> | <span className="api-desc">Transform of the main mesh.</span> |
| <Link id="m-ingotvalue-2" /><code>{"float IngotValue { get; }"}</code> | <span className="api-desc">Amount of material it melts into, after `yieldMultiplierFilter` handlers. Default 0.3.</span> |
| <Link id="m-isatmeltingpoint" /><code>{"bool IsAtMeltingPoint { get; }"}</code> | <span className="api-desc">True when every heat point counted for melting is at or above the material's glowing end temperature.</span> |
| <Link id="m-ismeltingallowed" /><code>{"bool IsMeltingAllowed { get; }"}</code> | <span className="api-desc">True unless an `isAllowedFilter` handler says no. The smelter skips items that are not allowed.</span> |
| <Link id="m-istriggeringabilities-2" /><code>{"bool IsTriggeringAbilities { get; }"}</code> | <span className="api-desc">Whether ember composers treat this item as triggering abilities. Default true.</span> |
| <Link id="m-meshbounds" /><code>{"Bounds MeshBounds { get; }"}</code> | <span className="api-desc">Bounds of the main mesh.</span> |
| <Link id="m-physicalmaterial" /><code>{"abstract "}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" "}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" { get; }"}</code> | <span className="api-desc">Material the item is made of.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-isallowedfilter" /><code>{"event "}<Link to="/mod/game-api/types/alta-crafting/meltingmodelallowed">{"MeltingModelAllowed"}</Link>{" isAllowedFilter"}</code> | <span className="api-desc">Lets other code block melting for this item.</span> |
| <Link id="m-yieldmultiplierfilter" /><code>{"event "}<Link to="/mod/game-api/types/alta-crafting/meltingmodelyield">{"MeltingModelYield"}</Link>{" yieldMultiplierFilter"}</code> | <span className="api-desc">Lets other code change the melt yield.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: starts the item's melting modifiers.</span> |
| <Link id="m-onvalidate" /><code>{"virtual void OnValidate()"}</code> | <span className="api-desc">Finds the heat point collection and main mesh in the editor.</span> |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material, float ingotValue)"}</code> | <span className="api-desc">Sets the material, and optionally the ingot value.</span> |
| <Link id="m-setup-2" /><code>{"void Setup("}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material)"}</code> | <span className="api-desc">Sets the material, and optionally the ingot value.</span> |
| <Link id="m-internalsetup" /><code>{"protected abstract void InternalSetup("}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material)"}</code> | <span className="api-desc">Sets the item's material. Subclasses implement it.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">On the server (unless the entity is being destroyed), terminates the modifiers. Clears the filter events.</span> |
| <Link id="m-scenedestroy" /><code>{"private void SceneDestroy("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Server: terminates the modifiers when the entity is destroyed by the scene.</span> |

</details>

## Used in

Members of other types that take, return or hold a `MeltingModel`:

<div className="api-used-in">

[`CraftingMeltingAllowedModifier.AllowedFilter`](/mod/game-api/types/alta-crafting/craftingmeltingallowedmodifier#m-allowedfilter), [`CraftingMeltingAllowedModifier.Initialize`](/mod/game-api/types/alta-crafting/craftingmeltingallowedmodifier#m-initialize), [`CraftingMeltingAllowedModifier.pickupMaps`](/mod/game-api/types/alta-crafting/craftingmeltingallowedmodifier#m-pickupmaps), [`CraftingMeltingAllowedModifier.Terminate`](/mod/game-api/types/alta-crafting/craftingmeltingallowedmodifier#m-terminate), [`DurabilityMeltingYieldModifier.Initialize`](/mod/game-api/types/alta-crafting/durabilitymeltingyieldmodifier#m-initialize), [`DurabilityMeltingYieldModifier.Terminate`](/mod/game-api/types/alta-crafting/durabilitymeltingyieldmodifier#m-terminate), [`DurabilityMeltingYieldModifier.YieldMultiplier`](/mod/game-api/types/alta-crafting/durabilitymeltingyieldmodifier#m-yieldmultiplier), [`MeltingHeatPoint.meltingModel`](/mod/game-api/types/alta-crafting/meltingheatpoint#m-meltingmodel), [`MeltingModelAllowed.BeginInvoke`](/mod/game-api/types/alta-crafting/meltingmodelallowed#m-begininvoke), [`MeltingModelAllowed.Invoke`](/mod/game-api/types/alta-crafting/meltingmodelallowed#m-invoke), [`MeltingModelModifier.Initialize`](/mod/game-api/types/alta-crafting/meltingmodelmodifier#m-initialize), [`MeltingModelModifier.Terminate`](/mod/game-api/types/alta-crafting/meltingmodelmodifier#m-terminate), [`MeltingModelYield.BeginInvoke`](/mod/game-api/types/alta-crafting/meltingmodelyield#m-begininvoke), [`MeltingModelYield.Invoke`](/mod/game-api/types/alta-crafting/meltingmodelyield#m-invoke), [`Recycler.MeltingModelReference.MeltingModel`](/mod/game-api/types/alta-crafting/recycler-meltingmodelreference#m-meltingmodel), [`Recycler.MeltingModelReference.MeltingModelReference`](/mod/game-api/types/alta-crafting/recycler-meltingmodelreference#m-ctor).

</div>
