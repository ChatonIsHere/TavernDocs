---
title: "MeltingModel"
description: "abstract class MeltingModel in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MeltingModel

An **abstract class** in `Root.Township`, `Alta.Blacksmithing`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`BasicMeltingModel`](/game-api/types/alta-crafting/basicmeltingmodel), [`MeltingModelPart`](/game-api/types/alta-crafting/meltingmodelpart)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected MeltingModel()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-androidmeshfilter" /><code>{"private MeshFilter androidMeshFilter"}</code> |  |
| <Link id="m-heatpointcollection" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/heatpointcollection">{"HeatPointCollection"}</Link>{" heatPointCollection"}</code> |  |
| <Link id="m-ingotvalue" /><code>{"private float ingotValue"}</code> |  |
| <Link id="m-istriggeringabilities" /><code>{"private bool istriggeringAbilities"}</code> |  |
| <Link id="m-mainmeshfilter" /><code>{"private MeshFilter mainMeshFilter"}</code> |  |
| <Link id="m-modifiers" /><code>{"private "}<Link to="/game-api/types/alta-crafting/meltingmodelmodifier">{"MeltingModelModifier"}</Link>{"[] modifiers"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-filtertransform" /><code>{"Transform FilterTransform { get; }"}</code> |  |
| <Link id="m-ingotvalue-2" /><code>{"float IngotValue { get; }"}</code> |  |
| <Link id="m-isatmeltingpoint" /><code>{"bool IsAtMeltingPoint { get; }"}</code> |  |
| <Link id="m-ismeltingallowed" /><code>{"bool IsMeltingAllowed { get; }"}</code> |  |
| <Link id="m-istriggeringabilities-2" /><code>{"bool IsTriggeringAbilities { get; }"}</code> |  |
| <Link id="m-meshbounds" /><code>{"Bounds MeshBounds { get; }"}</code> |  |
| <Link id="m-physicalmaterial" /><code>{"abstract "}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" "}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-isallowedfilter" /><code>{"event "}<Link to="/game-api/types/alta-crafting/meltingmodelallowed">{"MeltingModelAllowed"}</Link>{" isAllowedFilter"}</code> |  |
| <Link id="m-yieldmultiplierfilter" /><code>{"event "}<Link to="/game-api/types/alta-crafting/meltingmodelyield">{"MeltingModelYield"}</Link>{" yieldMultiplierFilter"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-onvalidate" /><code>{"virtual void OnValidate()"}</code> |  |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material, float ingotValue)"}</code> |  |
| <Link id="m-setup-2" /><code>{"void Setup("}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material)"}</code> |  |
| <Link id="m-internalsetup" /><code>{"protected abstract void InternalSetup("}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-scenedestroy" /><code>{"private void SceneDestroy("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |

## Used in

Members of other types that take, return or hold a `MeltingModel`:

[`CraftingMeltingAllowedModifier.AllowedFilter`](/game-api/types/alta-crafting/craftingmeltingallowedmodifier#m-allowedfilter), [`CraftingMeltingAllowedModifier.Initialize`](/game-api/types/alta-crafting/craftingmeltingallowedmodifier#m-initialize), [`CraftingMeltingAllowedModifier.pickupMaps`](/game-api/types/alta-crafting/craftingmeltingallowedmodifier#m-pickupmaps), [`CraftingMeltingAllowedModifier.Terminate`](/game-api/types/alta-crafting/craftingmeltingallowedmodifier#m-terminate), [`DurabilityMeltingYieldModifier.Initialize`](/game-api/types/alta-crafting/durabilitymeltingyieldmodifier#m-initialize), [`DurabilityMeltingYieldModifier.Terminate`](/game-api/types/alta-crafting/durabilitymeltingyieldmodifier#m-terminate), [`DurabilityMeltingYieldModifier.YieldMultiplier`](/game-api/types/alta-crafting/durabilitymeltingyieldmodifier#m-yieldmultiplier), [`MeltingHeatPoint.meltingModel`](/game-api/types/alta-crafting/meltingheatpoint#m-meltingmodel), [`MeltingModelAllowed.BeginInvoke`](/game-api/types/alta-crafting/meltingmodelallowed#m-begininvoke), [`MeltingModelAllowed.Invoke`](/game-api/types/alta-crafting/meltingmodelallowed#m-invoke), [`MeltingModelModifier.Initialize`](/game-api/types/alta-crafting/meltingmodelmodifier#m-initialize), [`MeltingModelModifier.Terminate`](/game-api/types/alta-crafting/meltingmodelmodifier#m-terminate), [`MeltingModelYield.BeginInvoke`](/game-api/types/alta-crafting/meltingmodelyield#m-begininvoke), [`MeltingModelYield.Invoke`](/game-api/types/alta-crafting/meltingmodelyield#m-invoke), [`Recycler.MeltingModelReference.MeltingModel`](/game-api/types/alta-crafting/recycler-meltingmodelreference#m-meltingmodel), [`Recycler.MeltingModelReference.MeltingModelReference`](/game-api/types/alta-crafting/recycler-meltingmodelreference#m-ctor).
