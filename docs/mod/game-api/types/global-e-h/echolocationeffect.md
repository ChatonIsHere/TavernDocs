---
title: "EcholocationEffect"
description: "Pooled visual effect that plays an expanding shader pulse once and returns itself to the pool."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EcholocationEffect

A **class** in `Root.Township`, the global namespace.

Pooled visual effect that plays an expanding shader pulse once and returns itself to the pool.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`PooledObject`](/mod/game-api/types/global-p/pooledobject)
- **Nested types** [`LevelDefinition`](/mod/game-api/types/global-e-h/echolocationeffect-leveldefinition)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EcholocationEffect()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hasunderside" /><code>{"private static readonly int _HasUnderside"}</code> | Shader property ID for `_HasUnderside`. |
| <Link id="m-progress" /><code>{"private static readonly int _Progress"}</code> | Shader property ID for `_Progress`. |
| <Link id="m-effectrenderer" /><code>{"private Renderer effectRenderer"}</code> | Renderer that shows the pulse. |
| <Link id="m-material" /><code>{"private Material material"}</code> | Material copy being animated. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"void Setup(Vector3 scale, float duration, AnimationCurve curve, bool hasUnderside)"}</code> | Sets the scale and underside flag and starts the animation. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animate" /><code>{"private IEnumerator Animate(float duration, AnimationCurve curve) (iterator)"}</code> | Coroutine that drives `_Progress` along the curve over the duration, then releases. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Takes a tracked copy of the renderer's material. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Draws the renderer bounds in the editor. |

</details>
