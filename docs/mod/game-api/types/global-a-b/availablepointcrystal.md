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
| <Link id="m-ctor" /><code>{"AvailablePointCrystal()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-progress" /><code>{"private static readonly int _Progress"}</code> | Shader property id for the fade amount. |
| <Link id="m-animationcoroutine" /><code>{"private Coroutine animationCoroutine"}</code> | The running fade, if any. |
| <Link id="m-animationduration" /><code>{"private float animationDuration"}</code> | Seconds a fade takes. |
| <Link id="m-animationmaterial" /><code>{"private Material animationMaterial"}</code> | Instance of `animationMaterialBase` made on first fade. |
| <Link id="m-animationmaterialbase" /><code>{"private Material animationMaterialBase"}</code> | Material with the fade shader, copied for the animation. |
| <Link id="m-btnfadein" /><code>{"private bool btnFadeIn"}</code> | Inspector test button for fading in. |
| <Link id="m-btnfadeout" /><code>{"private bool btnFadeOut"}</code> | Inspector test button for fading out. |
| <Link id="m-fixedmaterial" /><code>{"private Material fixedMaterial"}</code> | The renderer's normal material, put back after each fade. |
| <Link id="m-targetrenderer" /><code>{"private Renderer targetRenderer"}</code> | Renderer that fades. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-release" /><code>{"override void Release()"}</code> | Fades out first; the real release happens when the fade ends. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Stores the normal material and fades in whenever the object is requested from the pool. |
| <Link id="m-fade" /><code>{"private void Fade(float target)"}</code> | Stops any running fade and starts one towards the target (0 shows it, 1 hides it). |
| <Link id="m-fadecoroutine" /><code>{"private IEnumerator FadeCoroutine(float target) (iterator)"}</code> | Animates `_Progress` on a copy of the animation material, then restores the normal material; when fading out it releases to the pool. |
| <Link id="m-fadeonrequest" /><code>{"private void FadeOnRequest("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | Pool request handler: fades in. |

</details>
