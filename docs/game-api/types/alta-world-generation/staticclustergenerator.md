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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`, [`IStaticGeneration`](/game-api/types/global-i-l/istaticgeneration)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StaticClusterGenerator()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-prefab" /><code>{"private "}<Link to="/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" prefab"}</code> | Object pipeline that picks the prefab to instantiate. |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/clustersettings">{"ClusterSettings"}</Link>{" settings"}</code> | Cluster settings: child count curve and how children are placed. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-generate" /><code>{"private void IStaticGeneration.Generate("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" dynamicParent, "}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Instantiates a count of prefabs picked from the settings curve, positions them and runs static generation on each. |
| <Link id="m-reset" /><code>{"private void IStaticGeneration.Reset()"}</code> | Destroys all children. |

</details>
