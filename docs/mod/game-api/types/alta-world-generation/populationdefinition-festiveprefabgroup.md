---
title: "PopulationDefinition.FestivePrefabGroup"
description: "Private: prefabs a population spawns instead of its normal ones while a festivity is active."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PopulationDefinition.FestivePrefabGroup

A **private class** in `Root.Township`, `Alta.Populations`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private: prefabs a population spawns instead of its normal ones while a festivity is active. The first active group wins.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Nested in** [`PopulationDefinition`](/mod/game-api/types/alta-world-generation/populationdefinition)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FestivePrefabGroup()"}</code> | <span className="api-desc">Creates a `PopulationDefinition.FestivePrefabGroup` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-festivity" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/festivity">{"Festivity"}</Link>{" festivity"}</code> | <span className="api-desc">The festivity that turns the group on.</span> |
| <Link id="m-prefabhashes" /><code>{"private uint[] prefabHashes"}</code> | <span className="api-desc">Backing field for `PrefabHashes`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"bool IsActive { get; }"}</code> | <span className="api-desc">Whether the group's festivity is active now.</span> |
| <Link id="m-prefabhashes-2" /><code>{"uint[] PrefabHashes { get; }"}</code> | <span className="api-desc">Prefab hashes to pick from while active.</span> |

## Used in

Members of other types that take, return or hold a `FestivePrefabGroup`:

<div className="api-used-in">

[`PopulationDefinition.festiveGroups`](/mod/game-api/types/alta-world-generation/populationdefinition#m-festivegroups).

</div>
