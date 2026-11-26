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
| <Link id="m-ctor" /><code>{"StaticDynamicSpawner()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-editorpreview" /><code>{"private GameObject editorPreview"}</code> | <span className="api-desc">Preview object shown in the editor; cleared by `Reset`.</span> |
| <Link id="m-positioning" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/generatedpositioning">{"GeneratedPositioning"}</Link>{" positioning"}</code> | <span className="api-desc">Optional `GeneratedPositioning` that tweaks the spawn position and rotation.</span> |
| <Link id="m-prefab" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" prefab"}</code> | <span className="api-desc">Pipeline that picks the `NetworkPrefab` to spawn.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-generate" /><code>{"private void IStaticGeneration.Generate("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" dynamicParent, "}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Spawns the chosen `NetworkPrefab` at this transform (adjusted by `positioning`) as a saved child of `dynamicParent`, but only when `SpawnData` says this is a generating first load.</span> |
| <Link id="m-reset" /><code>{"private void IStaticGeneration.Reset()"}</code> | <span className="api-desc">Destroys the editor preview object, if any.</span> |

</details>
