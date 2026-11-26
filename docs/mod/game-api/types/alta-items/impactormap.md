---
title: "ImpactorMap"
description: "Component on a crafting part that maps each of its colliders to the ImpactGenerators under it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactorMap

A **class** in `Root.Township`, `Alta.Impact`.

Component on a crafting part that maps each of its colliders to the `ImpactGenerator`s under it. Used by `ImpactTool` and `ImpactModifier` when parts are joined into a tool.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`MapElement`](/mod/game-api/types/alta-items/impactormap-mapelement)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ImpactorMap()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-elements" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactormap-mapelement">{"ImpactorMap.MapElement"}</Link>{"[] elements"}</code> | Serialized pairs of a collider and the impact generators under it. Filled automatically by `OnValidate` when empty. |
| <Link id="m-map" /><code>{"private Dictionary<Collider, HashSet<"}<Link to="/mod/game-api/types/alta-items/impactgenerator">{"ImpactGenerator"}</Link>{">> map"}</code> | Backing field for `Map`, built from `elements` the first time it's read. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-map-2" /><code>{"Dictionary<Collider, HashSet<"}<Link to="/mod/game-api/types/alta-items/impactgenerator">{"ImpactGenerator"}</Link>{">> Map { get; }"}</code> | Collider to impact generator lookup, built from the serialized elements on first use. |
| <Link id="m-orderedimpactors" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-items/impactgenerator">{"ImpactGenerator"}</Link>{"> OrderedImpactors { get; }"}</code> | Every impact generator in the map, in serialized order. Can repeat a generator listed under several colliders. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forcevalidate" /><code>{"void ForceValidate()"}</code> | Clears and rebuilds the collider map from the children, logging an error. |
| <Link id="m-onvalidate" /><code>{"void OnValidate()"}</code> | Editor: builds the serialized map from child colliders and their impact generators if it is empty. |
| <Link id="m-test" /><code>{"bool Test()"}</code> | Builds the map if it is empty and returns true when it had to. Logs an error if nothing was found. |

## Used in

Members of other types that take, return or hold a `ImpactorMap`:

[`CraftingPart.GetMapsOnPart`](/mod/game-api/types/alta-crafting/craftingpart#m-getmapsonpart), [`CraftingPart.impactorMaps`](/mod/game-api/types/alta-crafting/craftingpart#m-impactormaps), [`CraftingPart.ImpactorMaps`](/mod/game-api/types/alta-crafting/craftingpart#m-impactormaps-2), [`ImpactModifier.maps`](/mod/game-api/types/alta-items/impactmodifier#m-maps), [`ImpactModifier.RegisterImpactorMap`](/mod/game-api/types/alta-items/impactmodifier#m-registerimpactormap), [`ImpactTool.DeregisterChildImpactTool`](/mod/game-api/types/alta-items/impacttool#m-deregisterchildimpacttool), [`ImpactTool.maps`](/mod/game-api/types/alta-items/impacttool#m-maps), [`ImpactTool.RegisterChildImpactTool`](/mod/game-api/types/alta-items/impacttool#m-registerchildimpacttool).
