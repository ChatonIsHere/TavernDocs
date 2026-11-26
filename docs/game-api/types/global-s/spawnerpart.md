---
title: "SpawnerPart"
description: "Generation part that spawns one network prefab at its position (or at a random one of its randomParent transforms) when the generator runs."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnerPart

A **class** in `Root.Township`, no namespace.

Generation part that spawns one network prefab at its position (or at a random one of its `randomParent` transforms) when the generator runs. Server side, as part of world generation.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`GeneratablePart`](/game-api/types/global-e-h/generatablepart), [`ISpawner`](/game-api/types/global-i-l/ispawner)
- **Attributes** `AddComponentMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SpawnerPart()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-prefab" /><code>{"private "}<Link to="/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" prefab"}</code> | Object pipeline that resolves to the `NetworkPrefab` to spawn. |
| <Link id="m-randomparent" /><code>{"private Transform[] randomParent"}</code> | Optional spawn points; one is picked at random and the spawned entity is parented to it. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-lastspawned" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" LastSpawned { get; private set; }"}</code> | The entity spawned by the last `GenerateDynamic` call. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generatedynamic" /><code>{"override void GenerateDynamic("}<Link to="/game-api/types/global-e-h/generationcore">{"GenerationCore"}</Link>{" core)"}</code> | Picks a prefab from the pipeline and spawns it at the chosen transform, as a child of the chunking parent if there is one, else in the chunk. |

## Used in

Members of other types that take, return or hold a `SpawnerPart`:

[`LinearPartClonerPart.clonerSpawner`](/game-api/types/global-i-l/linearpartclonerpart#m-clonerspawner), [`LinkerPart.from`](/game-api/types/global-i-l/linkerpart#m-from), [`LinkerPart.to`](/game-api/types/global-i-l/linkerpart#m-to), [`PointTowardsEachotherPart.a`](/game-api/types/global-p/pointtowardseachotherpart#m-a), [`PointTowardsEachotherPart.b`](/game-api/types/global-p/pointtowardseachotherpart#m-b).
