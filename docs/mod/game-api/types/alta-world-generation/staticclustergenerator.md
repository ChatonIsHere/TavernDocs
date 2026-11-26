---
title: "StaticClusterGenerator"
description: "Static generation component that instantiates a random number of plain prefabs around itself during static generation."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StaticClusterGenerator

A **class** in `Root.Township`, `Alta.Caves.Displays`.

Static generation component that instantiates a random number of plain prefabs around itself during static generation.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`, [`IStaticGeneration`](/mod/game-api/types/global-i-l/istaticgeneration)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StaticClusterGenerator()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-prefab" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" prefab"}</code> | <span className="api-desc">Object pipeline that picks the prefab to instantiate.</span> |
| <Link id="m-settings" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/clustersettings">{"ClusterSettings"}</Link>{" settings"}</code> | <span className="api-desc">Cluster settings: child count curve and how children are placed.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-generate" /><code>{"private void IStaticGeneration.Generate("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" dynamicParent, "}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Instantiates a count of prefabs picked from the settings curve, positions them and runs static generation on each.</span> |
| <Link id="m-reset" /><code>{"private void IStaticGeneration.Reset()"}</code> | <span className="api-desc">Destroys all children.</span> |

</details>
