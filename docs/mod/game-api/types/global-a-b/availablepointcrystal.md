---
title: "AvailablePointCrystal"
description: "Pooled client visual for an unspent progression point: fades in through a shader when taken from the pool and fades out before going back."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AvailablePointCrystal

A **class** in `Root.Township`, the global namespace.

Pooled client visual for an unspent progression point: fades in through a shader when taken from the pool and fades out before going back.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`PooledObject`](/mod/game-api/types/global-p/pooledobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AvailablePointCrystal()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-progress" /><code>{"private static readonly int _Progress"}</code> | <span className="api-desc">Shader property id for the fade amount.</span> |
| <Link id="m-animationcoroutine" /><code>{"private Coroutine animationCoroutine"}</code> | <span className="api-desc">The running fade, if any.</span> |
| <Link id="m-animationduration" /><code>{"private float animationDuration"}</code> | <span className="api-desc">Seconds a fade takes.</span> |
| <Link id="m-animationmaterial" /><code>{"private Material animationMaterial"}</code> | <span className="api-desc">Instance of `animationMaterialBase` made on first fade.</span> |
| <Link id="m-animationmaterialbase" /><code>{"private Material animationMaterialBase"}</code> | <span className="api-desc">Material with the fade shader, copied for the animation.</span> |
| <Link id="m-btnfadein" /><code>{"private bool btnFadeIn"}</code> | <span className="api-desc">Inspector test button for fading in.</span> |
| <Link id="m-btnfadeout" /><code>{"private bool btnFadeOut"}</code> | <span className="api-desc">Inspector test button for fading out.</span> |
| <Link id="m-fixedmaterial" /><code>{"private Material fixedMaterial"}</code> | <span className="api-desc">The renderer's normal material, put back after each fade.</span> |
| <Link id="m-targetrenderer" /><code>{"private Renderer targetRenderer"}</code> | <span className="api-desc">Renderer that fades.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-release" /><code>{"override void Release()"}</code> | <span className="api-desc">Fades out first; the real release happens when the fade ends.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Stores the normal material and fades in whenever the object is requested from the pool.</span> |
| <Link id="m-fade" /><code>{"private void Fade(float target)"}</code> | <span className="api-desc">Stops any running fade and starts one towards the target (0 shows it, 1 hides it).</span> |
| <Link id="m-fadecoroutine" /><code>{"private IEnumerator FadeCoroutine(float target) (iterator)"}</code> | <span className="api-desc">Animates `_Progress` on a copy of the animation material, then restores the normal material; when fading out it releases to the pool.</span> |
| <Link id="m-fadeonrequest" /><code>{"private void FadeOnRequest("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | <span className="api-desc">Pool request handler: fades in.</span> |

</details>
