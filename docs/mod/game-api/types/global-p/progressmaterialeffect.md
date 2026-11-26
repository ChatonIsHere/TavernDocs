---
title: "ProgressMaterialEffect"
description: "Client: a timed effect that shows a mesh and animates its material's _Progress over its lifetime, then releases."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProgressMaterialEffect

A **class** in `Root.Township`, the global namespace.

Client: a timed effect that shows a mesh and animates its material's `_Progress` over its lifetime, then releases.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`DestroyByTime`](/mod/game-api/types/global-c-d/destroybytime)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ProgressMaterialEffect()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"private MeshFilter filter"}</code> | <span className="api-desc">Mesh filter for the shown mesh.</span> |
| <Link id="m-material" /><code>{"private Material material"}</code> | <span className="api-desc">This effect's material copy.</span> |
| <Link id="m-progressovertime" /><code>{"private AnimationCurve progressOverTime"}</code> | <span className="api-desc">Curve for `_Progress` over the effect's life.</span> |
| <Link id="m-renderer" /><code>{"private MeshRenderer renderer"}</code> | <span className="api-desc">Renderer for the mesh.</span> |
| <Link id="m-shaderprogress" /><code>{"private readonly int shaderProgress"}</code> | <span className="api-desc">Shader property id for `_Progress`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize(Mesh mesh)"}</code> | <span className="api-desc">Sets the mesh to show.</span> |
| <Link id="m-release" /><code>{"override void Release()"}</code> | <span className="api-desc">Releases the effect and clears the mesh.</span> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Makes its own copy of the material.</span> |
| <Link id="m-destroy" /><code>{"protected override IEnumerator Destroy() (iterator)"}</code> | <span className="api-desc">Coroutine that drives `_Progress` along `progressOverTime` for the effect's duration, then releases.</span> |
