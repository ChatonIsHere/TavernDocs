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
| <Link id="m-ctor" /><code>{"CombinedMeshSource()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bones" /><code>{"private Transform[] bones"}</code> | <span className="api-desc">Bones passed to the joiner.</span> |
| <Link id="m-btnbake" /><code>{"private bool btnBake"}</code> | <span className="api-desc">Inspector button that runs `Process`.</span> |
| <Link id="m-meshes" /><code>{"private Mesh[] meshes"}</code> | <span className="api-desc">The joined meshes.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-process" /><code>{"void Process()"}</code> | <span className="api-desc">Runs `LodMeshJoiner.Batch` on this object and stores the result in `meshes`.</span> |
