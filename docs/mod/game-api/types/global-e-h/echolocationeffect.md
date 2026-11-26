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
| <Link id="m-ctor" /><code>{"EcholocationEffect()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hasunderside" /><code>{"private static readonly int _HasUnderside"}</code> | <span className="api-desc">Shader property ID for `_HasUnderside`.</span> |
| <Link id="m-progress" /><code>{"private static readonly int _Progress"}</code> | <span className="api-desc">Shader property ID for `_Progress`.</span> |
| <Link id="m-effectrenderer" /><code>{"private Renderer effectRenderer"}</code> | <span className="api-desc">Renderer that shows the pulse.</span> |
| <Link id="m-material" /><code>{"private Material material"}</code> | <span className="api-desc">Material copy being animated.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"void Setup(Vector3 scale, float duration, AnimationCurve curve, bool hasUnderside)"}</code> | <span className="api-desc">Sets the scale and underside flag and starts the animation.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animate" /><code>{"private IEnumerator Animate(float duration, AnimationCurve curve) (iterator)"}</code> | <span className="api-desc">Coroutine that drives `_Progress` along the curve over the duration, then releases.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Takes a tracked copy of the renderer's material.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws the renderer bounds in the editor.</span> |

</details>
