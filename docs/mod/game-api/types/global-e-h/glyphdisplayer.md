---
title: "GlyphDisplayer"
description: "Pooled object that shows a glyph renderer after a delay, starting its shader animation at that moment."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GlyphDisplayer

A **class** in `Root.Township`, the global namespace.

Pooled object that shows a glyph renderer after a delay, starting its shader animation at that moment.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`PooledObject`](/mod/game-api/types/global-p/pooledobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GlyphDisplayer()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-starttime" /><code>{"private static readonly int _StartTime"}</code> | Shader property ID for `_StartTime`. |
| <Link id="m-glyphcoroutine" /><code>{"private Coroutine glyphCoroutine"}</code> | Pending show coroutine, or null. |
| <Link id="m-glyphrenderer" /><code>{"private Renderer glyphRenderer"}</code> | Renderer that shows the glyph. |
| <Link id="m-glyphshowdelay" /><code>{"private float glyphShowDelay"}</code> | Seconds before the glyph appears. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-finishrequest" /><code>{"override void FinishRequest()"}</code> | When taken from the pool, starts the delayed show. |
| <Link id="m-hideglyph" /><code>{"void HideGlyph()"}</code> | Stops a pending show and hides the renderer. |
| <Link id="m-release" /><code>{"override void Release()"}</code> | Hides the glyph before returning to the pool. |
| <Link id="m-resetglyphtimer" /><code>{"void ResetGlyphTimer()"}</code> | Starts the delayed show unless one is already pending. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-delayshowglyph" /><code>{"private IEnumerator DelayShowGlyph() (iterator)"}</code> | Coroutine: waits `glyphShowDelay`, sets the material's `_StartTime` and shows the renderer. |

</details>
