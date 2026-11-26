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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Forest](/mod/game-api/world/forest)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ForestPopulationCreator()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-definition" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/populationsetup">{"PopulationSetup"}</Link>{" definition"}</code> | <span className="api-desc">Population setup used.</span> |
| <Link id="m-density" /><code>{"private float density"}</code> | <span className="api-desc">Population density.</span> |
| <Link id="m-prefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab"}</code> | <span className="api-desc">Prefab with a `BasicPopulationFolder`.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the parent forest generator's `GeneratedDynamic`.</span> |
| <Link id="m-create" /><code>{"private void Create("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Spawns the prefab in the chunk and sets up its `BasicPopulationFolder` as an ecosystem.</span> |

</details>
