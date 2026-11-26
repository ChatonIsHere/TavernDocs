---
title: "ForestPopulationCreator"
description: "Spawns a population folder in each forest chunk as it generates, sized to the chunk area."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForestPopulationCreator

A **class** in `Root.Township`, `Alta.Forests`.

Spawns a population folder in each forest chunk as it generates, sized to the chunk area.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Forest](/game-api/world/forest)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ForestPopulationCreator()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-definition" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/populationsetup">{"PopulationSetup"}</Link>{" definition"}</code> | Population setup used. |
| <Link id="m-density" /><code>{"private float density"}</code> | Population density. |
| <Link id="m-prefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab"}</code> | Prefab with a `BasicPopulationFolder`. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the parent forest generator's `GeneratedDynamic`. |
| <Link id="m-create" /><code>{"private void Create("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | Spawns the prefab in the chunk and sets up its `BasicPopulationFolder` as an ecosystem. |

</details>
