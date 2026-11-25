---
title: "ImpactorMap"
description: "class ImpactorMap in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactorMap

A **class** in `Root.Township`, `Alta.Impact`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`MapElement`](/game-api/types/alta-items/impactormap-mapelement)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ImpactorMap()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-elements" /><code>{"private "}<Link to="/game-api/types/alta-items/impactormap-mapelement">{"ImpactorMap.MapElement"}</Link>{"[] elements"}</code> |  |
| <Link id="m-map" /><code>{"private Dictionary<Collider, HashSet<"}<Link to="/game-api/types/alta-items/impactgenerator">{"ImpactGenerator"}</Link>{">> map"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-map-2" /><code>{"Dictionary<Collider, HashSet<"}<Link to="/game-api/types/alta-items/impactgenerator">{"ImpactGenerator"}</Link>{">> Map { get; }"}</code> |  |
| <Link id="m-orderedimpactors" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-items/impactgenerator">{"ImpactGenerator"}</Link>{"> OrderedImpactors { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forcevalidate" /><code>{"void ForceValidate()"}</code> |  |
| <Link id="m-onvalidate" /><code>{"void OnValidate()"}</code> |  |
| <Link id="m-test" /><code>{"bool Test()"}</code> |  |

## Used in

Members of other types that take, return or hold a `ImpactorMap`:

[`CraftingPart.GetMapsOnPart`](/game-api/types/alta-crafting/craftingpart#m-getmapsonpart), [`CraftingPart.impactorMaps`](/game-api/types/alta-crafting/craftingpart#m-impactormaps), [`CraftingPart.ImpactorMaps`](/game-api/types/alta-crafting/craftingpart#m-impactormaps-2), [`ImpactModifier.maps`](/game-api/types/alta-items/impactmodifier#m-maps), [`ImpactModifier.RegisterImpactorMap`](/game-api/types/alta-items/impactmodifier#m-registerimpactormap), [`ImpactTool.DeregisterChildImpactTool`](/game-api/types/alta-items/impacttool#m-deregisterchildimpacttool), [`ImpactTool.maps`](/game-api/types/alta-items/impacttool#m-maps), [`ImpactTool.RegisterChildImpactTool`](/game-api/types/alta-items/impacttool#m-registerchildimpacttool).
