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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Nested in** [`PopulationDefinition`](/game-api/types/alta-world-generation/populationdefinition)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FestivePrefabGroup()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-festivity" /><code>{"private "}<Link to="/game-api/types/global-e-h/festivity">{"Festivity"}</Link>{" festivity"}</code> | The festivity that turns the group on. |
| <Link id="m-prefabhashes" /><code>{"private uint[] prefabHashes"}</code> | Backing field for `PrefabHashes`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"bool IsActive { get; }"}</code> | Whether the group's festivity is active now. |
| <Link id="m-prefabhashes-2" /><code>{"uint[] PrefabHashes { get; }"}</code> | Prefab hashes to pick from while active. |

## Used in

Members of other types that take, return or hold a `FestivePrefabGroup`:

[`PopulationDefinition.festiveGroups`](/game-api/types/alta-world-generation/populationdefinition#m-festivegroups).
