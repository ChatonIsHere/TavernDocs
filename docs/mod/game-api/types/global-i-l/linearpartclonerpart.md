---
title: "LinearPartClonerPart"
description: "Generation part that works out how many repeated parts fit along a forest path edge and tells its linear cloners to spawn that many."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LinearPartClonerPart

A **class** in `Root.Township`, the global namespace.

Generation part that works out how many repeated parts fit along a forest path edge and tells its linear cloners to spawn that many.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`GeneratablePart`](/mod/game-api/types/global-e-h/generatablepart)
- **Attributes** `AddComponentMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LinearPartClonerPart()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-baseinset" /><code>{"private float baseInset"}</code> | Length taken off per cloner before fitting parts. |
| <Link id="m-baselength" /><code>{"private float baseLength"}</code> | Fixed length per cloner before the repeated parts. |
| <Link id="m-cloners" /><code>{"private List<"}<Link to="/mod/game-api/types/global-i-l/linearpartcloner">{"LinearPartCloner"}</Link>{"> cloners"}</code> | Cloners in the prefab told directly how many parts to spawn. |
| <Link id="m-clonerspawner" /><code>{"private List<"}<Link to="/mod/game-api/types/global-s/spawnerpart">{"SpawnerPart"}</Link>{"> clonerSpawner"}</code> | Spawners whose spawned objects hold the cloners, used when `cloners` is empty. |
| <Link id="m-partlength" /><code>{"private float partLength"}</code> | Length of one repeated part. |
| <Link id="m-parts" /><code>{"private int parts"}</code> | Number of parts each cloner spawns. |
| <Link id="m-pathendspart" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pathendspart">{"PathEndsPart"}</Link>{" pathEndsPart"}</code> | Optional part whose end distance is set so the run is centred. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generatedynamic" /><code>{"override void GenerateDynamic("}<Link to="/mod/game-api/types/global-e-h/generationcore">{"GenerationCore"}</Link>{" core)"}</code> | Tells the cloner on each spawner's last spawned object to spawn the counted parts. |
| <Link id="m-generatestatic" /><code>{"override void GenerateStatic("}<Link to="/mod/game-api/types/global-e-h/generationcore">{"GenerationCore"}</Link>{" core, bool isModifyingTerrain)"}</code> | Runs `Process` with the number of cloners, or of cloner spawners if there are no cloners. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-process" /><code>{"private void Process("}<Link to="/mod/game-api/types/global-e-h/generationcore">{"GenerationCore"}</Link>{" core, int count)"}</code> | From the edge length, takes off the base length and inset per cloner and divides the rest by `partLength`. Also centres `pathEndsPart`. |

</details>
