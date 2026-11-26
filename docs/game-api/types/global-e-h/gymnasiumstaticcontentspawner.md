---
title: "GymnasiumStaticContentSpawner"
description: "Gymnasium-only component that forces AdditionalStaticContent to spawn in its chunks once they finish loading."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GymnasiumStaticContentSpawner

A **class** in `Root.Township`, no namespace.

Gymnasium-only component that forces `AdditionalStaticContent` to spawn in its chunks once they finish loading. It removes itself when baked into any other scene.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererBakeable`](/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GymnasiumStaticContentSpawner()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chunks" /><code>{"private "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"[] chunks"}</code> | Chunks whose static content should be forced to spawn. |
| <Link id="m-gymnasiumscenename" /><code>{"private const string GymnasiumSceneName"}</code> | The scene name `Gymnasium`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-sortingorder" /><code>{"int SortingOrder { get; }"}</code> | Bake order; always 0. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"void Bake(bool isSaving)"}</code> | Does nothing. |
| <Link id="m-clean" /><code>{"void Clean()"}</code> | Build step: destroys this component unless its scene name contains `Gymnasium`. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-forcespawnstaticcontentinchunk" /><code>{"private void ForceSpawnStaticContentInChunk("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Instantiates the content of every `AdditionalStaticContent` on the entities in the loaded chunk. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Unhooks from the chunks' `FullyLoaded` events. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Hooks `ForceSpawnStaticContentInChunk` to each listed chunk's `FullyLoaded` event. |

</details>
