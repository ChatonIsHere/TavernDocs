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
| <Link id="m-ctor" /><code>{"GlyphDisplayer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-starttime" /><code>{"private static readonly int _StartTime"}</code> | <span className="api-desc">Shader property ID for `_StartTime`.</span> |
| <Link id="m-glyphcoroutine" /><code>{"private Coroutine glyphCoroutine"}</code> | <span className="api-desc">Pending show coroutine, or null.</span> |
| <Link id="m-glyphrenderer" /><code>{"private Renderer glyphRenderer"}</code> | <span className="api-desc">Renderer that shows the glyph.</span> |
| <Link id="m-glyphshowdelay" /><code>{"private float glyphShowDelay"}</code> | <span className="api-desc">Seconds before the glyph appears.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-finishrequest" /><code>{"override void FinishRequest()"}</code> | <span className="api-desc">When taken from the pool, starts the delayed show.</span> |
| <Link id="m-hideglyph" /><code>{"void HideGlyph()"}</code> | <span className="api-desc">Stops a pending show and hides the renderer.</span> |
| <Link id="m-release" /><code>{"override void Release()"}</code> | <span className="api-desc">Hides the glyph before returning to the pool.</span> |
| <Link id="m-resetglyphtimer" /><code>{"void ResetGlyphTimer()"}</code> | <span className="api-desc">Starts the delayed show unless one is already pending.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-delayshowglyph" /><code>{"private IEnumerator DelayShowGlyph() (iterator)"}</code> | <span className="api-desc">Coroutine: waits `glyphShowDelay`, sets the material's `_StartTime` and shows the renderer.</span> |

</details>
