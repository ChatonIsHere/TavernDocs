---
title: "StaticGeneration"
description: "Static generation step that instantiates a plain (non-networked) prefab under itself, then runs static generation on the new object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StaticGeneration

A **class** in `Root.Township`, the global namespace.

Static generation step that instantiates a plain (non-networked) prefab under itself, then runs static generation on the new object. Driven by `StaticGenerationHelper`.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`, [`IStaticGeneration`](/mod/game-api/types/global-i-l/istaticgeneration)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StaticGeneration()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-options" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/gameobjectdistribution">{"GameObjectDistribution"}</Link>{" options"}</code> | <span className="api-desc">Obsolete prefab distribution, only used when `prefab` has no input.</span> |
| <Link id="m-positioning" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/generatedpositioning">{"GeneratedPositioning"}</Link>{" positioning"}</code> | <span className="api-desc">Optional `GeneratedPositioning` that tweaks the spawn position and rotation.</span> |
| <Link id="m-prefab" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" prefab"}</code> | <span className="api-desc">Pipeline that picks the `GameObject` prefab to instantiate.</span> |
| <Link id="m-spawned" /><code>{"private GameObject spawned"}</code> | <span className="api-desc">The object this component instantiated last.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-generate" /><code>{"private void IStaticGeneration.Generate("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" dynamicParent, "}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Destroys any previous result, picks a prefab from `prefab` (or the obsolete `options` if the pipeline has no input), instantiates it here and generates its children.</span> |
| <Link id="m-reset" /><code>{"private void IStaticGeneration.Reset()"}</code> | <span className="api-desc">Destroys the spawned object.</span> |

</details>
