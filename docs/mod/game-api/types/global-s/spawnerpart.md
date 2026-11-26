---
title: "SpawnerPart"
description: "Generation part that spawns one network prefab at its position (or at a random one of its randomParent transforms) when the generator runs."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnerPart

A **class** in `Root.Township`, the global namespace.

Generation part that spawns one network prefab at its position (or at a random one of its `randomParent` transforms) when the generator runs. Server side, as part of world generation.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`GeneratablePart`](/mod/game-api/types/global-e-h/generatablepart), [`ISpawner`](/mod/game-api/types/global-i-l/ispawner)
- **Attributes** `AddComponentMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawnerPart()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-prefab" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" prefab"}</code> | <span className="api-desc">Object pipeline that resolves to the `NetworkPrefab` to spawn.</span> |
| <Link id="m-randomparent" /><code>{"private Transform[] randomParent"}</code> | <span className="api-desc">Optional spawn points; one is picked at random and the spawned entity is parented to it.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-lastspawned" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" LastSpawned { get; private set; }"}</code> | <span className="api-desc">The entity spawned by the last `GenerateDynamic` call.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generatedynamic" /><code>{"override void GenerateDynamic("}<Link to="/mod/game-api/types/global-e-h/generationcore">{"GenerationCore"}</Link>{" core)"}</code> | <span className="api-desc">Picks a prefab from the pipeline and spawns it at the chosen transform, as a child of the chunking parent if there is one, else in the chunk.</span> |

## Used in

Members of other types that take, return or hold a `SpawnerPart`:

<div className="api-used-in">

[`LinearPartClonerPart.clonerSpawner`](/mod/game-api/types/global-i-l/linearpartclonerpart#m-clonerspawner), [`LinkerPart.from`](/mod/game-api/types/global-i-l/linkerpart#m-from), [`LinkerPart.to`](/mod/game-api/types/global-i-l/linkerpart#m-to), [`PointTowardsEachotherPart.a`](/mod/game-api/types/global-p/pointtowardseachotherpart#m-a), [`PointTowardsEachotherPart.b`](/mod/game-api/types/global-p/pointtowardseachotherpart#m-b).

</div>
