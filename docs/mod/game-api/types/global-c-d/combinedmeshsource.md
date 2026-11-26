---
title: "CombinedMeshSource"
description: "Editor tool that joins this object's meshes into combined meshes with LodMeshJoiner."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CombinedMeshSource

A **class** in `Root.Township`, the global namespace.

Editor tool that joins this object's meshes into combined meshes with `LodMeshJoiner`.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`, [`IEditorProcessable`](/mod/game-api/types/global-i-l/ieditorprocessable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CombinedMeshSource()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bones" /><code>{"private Transform[] bones"}</code> | Bones passed to the joiner. |
| <Link id="m-btnbake" /><code>{"private bool btnBake"}</code> | Inspector button that runs `Process`. |
| <Link id="m-meshes" /><code>{"private Mesh[] meshes"}</code> | The joined meshes. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-process" /><code>{"void Process()"}</code> | Runs `LodMeshJoiner.Batch` on this object and stores the result in `meshes`. |
