---
title: "ProgressMaterialEffect"
description: "Client: a timed effect that shows a mesh and animates its material's _Progress over its lifetime, then releases."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProgressMaterialEffect

A **class** in `Root.Township`, no namespace.

Client: a timed effect that shows a mesh and animates its material's `_Progress` over its lifetime, then releases.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`DestroyByTime`](/game-api/types/global-c-d/destroybytime)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ProgressMaterialEffect()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"private MeshFilter filter"}</code> | Mesh filter for the shown mesh. |
| <Link id="m-material" /><code>{"private Material material"}</code> | This effect's material copy. |
| <Link id="m-progressovertime" /><code>{"private AnimationCurve progressOverTime"}</code> | Curve for `_Progress` over the effect's life. |
| <Link id="m-renderer" /><code>{"private MeshRenderer renderer"}</code> | Renderer for the mesh. |
| <Link id="m-shaderprogress" /><code>{"private readonly int shaderProgress"}</code> | Shader property id for `_Progress`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize(Mesh mesh)"}</code> | Sets the mesh to show. |
| <Link id="m-release" /><code>{"override void Release()"}</code> | Releases the effect and clears the mesh. |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Makes its own copy of the material. |
| <Link id="m-destroy" /><code>{"protected override IEnumerator Destroy() (iterator)"}</code> | Coroutine that drives `_Progress` along `progressOverTime` for the effect's duration, then releases. |
