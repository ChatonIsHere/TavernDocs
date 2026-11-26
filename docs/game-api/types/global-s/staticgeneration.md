---
title: "StaticGeneration"
description: "Static generation step that instantiates a plain (non-networked) prefab under itself, then runs static generation on the new object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StaticGeneration

A **class** in `Root.Township`, no namespace.

Static generation step that instantiates a plain (non-networked) prefab under itself, then runs static generation on the new object. Driven by `StaticGenerationHelper`.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`, [`IStaticGeneration`](/game-api/types/global-i-l/istaticgeneration)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"StaticGeneration()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-options" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/gameobjectdistribution">{"GameObjectDistribution"}</Link>{" options"}</code> | Obsolete prefab distribution, only used when `prefab` has no input. |
| <Link id="m-positioning" /><code>{"private "}<Link to="/game-api/types/global-e-h/generatedpositioning">{"GeneratedPositioning"}</Link>{" positioning"}</code> | Optional `GeneratedPositioning` that tweaks the spawn position and rotation. |
| <Link id="m-prefab" /><code>{"private "}<Link to="/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" prefab"}</code> | Pipeline that picks the `GameObject` prefab to instantiate. |
| <Link id="m-spawned" /><code>{"private GameObject spawned"}</code> | The object this component instantiated last. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-generate" /><code>{"private void IStaticGeneration.Generate("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" dynamicParent, "}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Destroys any previous result, picks a prefab from `prefab` (or the obsolete `options` if the pipeline has no input), instantiates it here and generates its children. |
| <Link id="m-reset" /><code>{"private void IStaticGeneration.Reset()"}</code> | Destroys the spawned object. |

</details>
