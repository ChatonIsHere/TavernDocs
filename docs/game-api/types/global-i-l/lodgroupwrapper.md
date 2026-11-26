---
title: "LODGroupWrapper"
description: "Component that adds or removes renderers on one level of a referenced LODGroup."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LODGroupWrapper

A **class** in `Root.Township`, no namespace.

Component that adds or removes renderers on one level of a referenced `LODGroup`.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LODGroupWrapper()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lodgroup" /><code>{"private LODGroup lodGroup"}</code> | The LOD group being edited. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addrendererstolod" /><code>{"void AddRenderersToLOD(int lodIndex, IEnumerable<Renderer> renderers)"}</code> | Adds renderers to the given LOD level. |
| <Link id="m-removerenderersfromlod" /><code>{"void RemoveRenderersFromLOD(int lodIndex, IEnumerable<Renderer> renderersToRemove)"}</code> | Removes renderers from the given LOD level. |
