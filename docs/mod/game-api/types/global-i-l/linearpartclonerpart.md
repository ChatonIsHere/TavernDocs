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
| <Link id="m-ctor" /><code>{"LinearPartClonerPart()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-baseinset" /><code>{"private float baseInset"}</code> | <span className="api-desc">Length taken off per cloner before fitting parts.</span> |
| <Link id="m-baselength" /><code>{"private float baseLength"}</code> | <span className="api-desc">Fixed length per cloner before the repeated parts.</span> |
| <Link id="m-cloners" /><code>{"private List<"}<Link to="/mod/game-api/types/global-i-l/linearpartcloner">{"LinearPartCloner"}</Link>{"> cloners"}</code> | <span className="api-desc">Cloners in the prefab told directly how many parts to spawn.</span> |
| <Link id="m-clonerspawner" /><code>{"private List<"}<Link to="/mod/game-api/types/global-s/spawnerpart">{"SpawnerPart"}</Link>{"> clonerSpawner"}</code> | <span className="api-desc">Spawners whose spawned objects hold the cloners, used when `cloners` is empty.</span> |
| <Link id="m-partlength" /><code>{"private float partLength"}</code> | <span className="api-desc">Length of one repeated part.</span> |
| <Link id="m-parts" /><code>{"private int parts"}</code> | <span className="api-desc">Number of parts each cloner spawns.</span> |
| <Link id="m-pathendspart" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pathendspart">{"PathEndsPart"}</Link>{" pathEndsPart"}</code> | <span className="api-desc">Optional part whose end distance is set so the run is centred.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generatedynamic" /><code>{"override void GenerateDynamic("}<Link to="/mod/game-api/types/global-e-h/generationcore">{"GenerationCore"}</Link>{" core)"}</code> | <span className="api-desc">Tells the cloner on each spawner's last spawned object to spawn the counted parts.</span> |
| <Link id="m-generatestatic" /><code>{"override void GenerateStatic("}<Link to="/mod/game-api/types/global-e-h/generationcore">{"GenerationCore"}</Link>{" core, bool isModifyingTerrain)"}</code> | <span className="api-desc">Runs `Process` with the number of cloners, or of cloner spawners if there are no cloners.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-process" /><code>{"private void Process("}<Link to="/mod/game-api/types/global-e-h/generationcore">{"GenerationCore"}</Link>{" core, int count)"}</code> | <span className="api-desc">From the edge length, takes off the base length and inset per cloner and divides the rest by `partLength`. Also centres `pathEndsPart`.</span> |

</details>
