---
title: "IStaticGeneration"
description: "Implemented by scene components that spawn dynamic objects when their parent is generated, such as StaticDynamicSpawner and StaticClusterGenerator."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IStaticGeneration

An **interface** in `Root.Township`, no namespace.

Implemented by scene components that spawn dynamic objects when their parent is generated, such as `StaticDynamicSpawner` and `StaticClusterGenerator`.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`StaticClusterGenerator`](/game-api/types/alta-world-generation/staticclustergenerator), [`StaticDynamicSpawner`](/game-api/types/global-s/staticdynamicspawner), [`StaticGeneration`](/game-api/types/global-s/staticgeneration), [`StaticGenerationParent`](/game-api/types/global-s/staticgenerationparent)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generate" /><code>{"void Generate("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" dynamicParent, "}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Spawns this component's content under the given dynamic parent using the spawn data. |
| <Link id="m-reset" /><code>{"void Reset()"}</code> | Clears generated state, such as editor previews. |

## Used in

Members of other types that take, return or hold a `IStaticGeneration`:

[`StaticGenerationHelper.Generate`](/game-api/types/global-s/staticgenerationhelper#m-generate-2).
