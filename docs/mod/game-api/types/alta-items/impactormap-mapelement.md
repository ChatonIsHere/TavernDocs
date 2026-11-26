---
title: "ImpactorMap.MapElement"
description: "One serialized entry of an ImpactorMap: a collider and the impact generators that act when it hits."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactorMap.MapElement

A **private class** in `Root.Township`, `Alta.Impact`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

One serialized entry of an `ImpactorMap`: a collider and the impact generators that act when it hits.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Nested in** [`ImpactorMap`](/mod/game-api/types/alta-items/impactormap)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MapElement(Collider collider, IEnumerable<"}<Link to="/mod/game-api/types/alta-items/impactgenerator">{"ImpactGenerator"}</Link>{"> impactors)"}</code> | Creates an `ImpactorMap.MapElement` from `element`. |
| <Link id="m-ctor-2" /><code>{"MapElement(KeyValuePair<Collider, HashSet<"}<Link to="/mod/game-api/types/alta-items/impactgenerator">{"ImpactGenerator"}</Link>{">> element)"}</code> | Creates an `ImpactorMap.MapElement` from `element`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-collider" /><code>{"private Collider collider"}</code> | The collider. |
| <Link id="m-impactors" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactgenerator">{"ImpactGenerator"}</Link>{"[] impactors"}</code> | Backing field for `Impactors`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-impactors-2" /><code><Link to="/mod/game-api/types/alta-items/impactgenerator">{"ImpactGenerator"}</Link>{"[] Impactors { get; }"}</code> | The impact generators for this collider. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add(Dictionary<Collider, HashSet<"}<Link to="/mod/game-api/types/alta-items/impactgenerator">{"ImpactGenerator"}</Link>{">> Map)"}</code> | Adds this collider and its impactors to the given lookup dictionary. |

## Used in

Members of other types that take, return or hold a `MapElement`:

[`ImpactorMap.elements`](/mod/game-api/types/alta-items/impactormap#m-elements).
