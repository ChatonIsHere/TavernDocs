---
title: "ImpactorMap.MapElement"
description: "class ImpactorMap.MapElement in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactorMap.MapElement

A **private class** in `Root.Township`, `Alta.Impact`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Nested in** [`ImpactorMap`](/game-api/types/alta-items/impactormap)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MapElement(Collider collider, IEnumerable<"}<Link to="/game-api/types/alta-items/impactgenerator">{"ImpactGenerator"}</Link>{"> impactors)"}</code> |
| <Link id="m-ctor-2" /><code>{"MapElement(KeyValuePair<Collider, HashSet<"}<Link to="/game-api/types/alta-items/impactgenerator">{"ImpactGenerator"}</Link>{">> element)"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-collider" /><code>{"private Collider collider"}</code> |
| <Link id="m-impactors" /><code>{"private "}<Link to="/game-api/types/alta-items/impactgenerator">{"ImpactGenerator"}</Link>{"[] impactors"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-impactors-2" /><code><Link to="/game-api/types/alta-items/impactgenerator">{"ImpactGenerator"}</Link>{"[] Impactors { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-add" /><code>{"void Add(Dictionary<Collider, HashSet<"}<Link to="/game-api/types/alta-items/impactgenerator">{"ImpactGenerator"}</Link>{">> Map)"}</code> |

## Used in

Members of other types that take, return or hold a `MapElement`:

[`ImpactorMap.elements`](/game-api/types/alta-items/impactormap#m-elements).
