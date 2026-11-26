---
title: "GymnasiumStaticContentSpawner"
description: "Gymnasium-only component that forces AdditionalStaticContent to spawn in its chunks once they finish loading."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GymnasiumStaticContentSpawner

A **class** in `Root.Township`, the global namespace.

Gymnasium-only component that forces `AdditionalStaticContent` to spawn in its chunks once they finish loading. It removes itself when baked into any other scene.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererBakeable`](/mod/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GymnasiumStaticContentSpawner()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chunks" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"[] chunks"}</code> | <span className="api-desc">Chunks whose static content should be forced to spawn.</span> |
| <Link id="m-gymnasiumscenename" /><code>{"private const string GymnasiumSceneName"}</code> | <span className="api-desc">The scene name `Gymnasium`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-sortingorder" /><code>{"int SortingOrder { get; }"}</code> | <span className="api-desc">Bake order; always 0.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"void Bake(bool isSaving)"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-clean" /><code>{"void Clean()"}</code> | <span className="api-desc">Build step: destroys this component unless its scene name contains `Gymnasium`.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-forcespawnstaticcontentinchunk" /><code>{"private void ForceSpawnStaticContentInChunk("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Instantiates the content of every `AdditionalStaticContent` on the entities in the loaded chunk.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Unhooks from the chunks' `FullyLoaded` events.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Hooks `ForceSpawnStaticContentInChunk` to each listed chunk's `FullyLoaded` event.</span> |

</details>
