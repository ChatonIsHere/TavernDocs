---
title: "LODGroupWrapper"
description: "Component that adds or removes renderers on one level of a referenced LODGroup."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LODGroupWrapper

A **class** in `Root.Township`, the global namespace.

Component that adds or removes renderers on one level of a referenced `LODGroup`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LODGroupWrapper()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lodgroup" /><code>{"private LODGroup lodGroup"}</code> | <span className="api-desc">The LOD group being edited.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addrendererstolod" /><code>{"void AddRenderersToLOD(int lodIndex, IEnumerable<Renderer> renderers)"}</code> | <span className="api-desc">Adds renderers to the given LOD level.</span> |
| <Link id="m-removerenderersfromlod" /><code>{"void RemoveRenderersFromLOD(int lodIndex, IEnumerable<Renderer> renderersToRemove)"}</code> | <span className="api-desc">Removes renderers from the given LOD level.</span> |
