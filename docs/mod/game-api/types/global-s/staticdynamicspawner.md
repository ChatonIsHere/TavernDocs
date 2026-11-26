---
title: "StaticDynamicSpawner"
description: "Static generation step that spawns one networked prefab (picked by an ObjectPipeline) at its own transform, saved as a child of the dynamic parent."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StaticDynamicSpawner

A **class** in `Root.Township`, the global namespace.

Static generation step that spawns one networked prefab (picked by an `ObjectPipeline`) at its own transform, saved as a child of the dynamic parent. Server side, run through `StaticGenerationHelper`.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`, [`IStaticGeneration`](/mod/game-api/types/global-i-l/istaticgeneration)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StaticDynamicSpawner()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-editorpreview" /><code>{"private GameObject editorPreview"}</code> | Preview object shown in the editor; cleared by `Reset`. |
| <Link id="m-positioning" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/generatedpositioning">{"GeneratedPositioning"}</Link>{" positioning"}</code> | Optional `GeneratedPositioning` that tweaks the spawn position and rotation. |
| <Link id="m-prefab" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" prefab"}</code> | Pipeline that picks the `NetworkPrefab` to spawn. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-generate" /><code>{"private void IStaticGeneration.Generate("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" dynamicParent, "}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Spawns the chosen `NetworkPrefab` at this transform (adjusted by `positioning`) as a saved child of `dynamicParent`, but only when `SpawnData` says this is a generating first load. |
| <Link id="m-reset" /><code>{"private void IStaticGeneration.Reset()"}</code> | Destroys the editor preview object, if any. |

</details>
