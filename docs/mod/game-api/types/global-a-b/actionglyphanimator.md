---
title: "ActionGlyphAnimator"
description: "Pooled sprite that fades a skill practice glyph in and out."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActionGlyphAnimator

A **class** in `Root.Township`, the global namespace.

Pooled sprite that fades a skill practice glyph in and out. Spawned and placed by `ActionGlyphsPlacer`.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`PooledObject`](/mod/game-api/types/global-p/pooledobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActionGlyphAnimator()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidspriterenderer" /><code>{"private Renderer androidSpriteRenderer"}</code> | <span className="api-desc">Separate renderer for Android. Not used in this class's code.</span> |
| <Link id="m-fadecurve" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" fadeCurve"}</code> | <span className="api-desc">Curve and duration used for the alpha fades.</span> |
| <Link id="m-fadingincoroutine" /><code>{"private Coroutine fadingInCoroutine"}</code> | <span className="api-desc">The running fade in, if any.</span> |
| <Link id="m-fadingoutcoroutine" /><code>{"private Coroutine fadingOutCoroutine"}</code> | <span className="api-desc">The running fade out, if any.</span> |
| <Link id="m-nextglyph" /><code>{"private Sprite nextGlyph"}</code> | <span className="api-desc">Sprite to show once the fade in starts.</span> |
| <Link id="m-spriterenderer" /><code>{"private SpriteRenderer spriteRenderer"}</code> | <span className="api-desc">Renderer that shows the glyph sprite.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-release" /><code>{"override void Release()"}</code> | <span className="api-desc">Fades the glyph out first if it is showing or fading, then returns it to the pool.</span> |
| <Link id="m-setupglyph" /><code>{"void SetupGlyph(Sprite glyph)"}</code> | <span className="api-desc">Changes the shown glyph with a fade. A null glyph fades the current one out.</span> |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> | <span className="api-desc">Only calls the base pooled object cleanup.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hides the sprite and clears it.</span> |
| <Link id="m-fadeandrelease" /><code>{"private IEnumerator FadeAndRelease(Coroutine toWait) (iterator)"}</code> | <span className="api-desc">Waits for a fade out to finish, then returns the object to its pool.</span> |
| <Link id="m-fadein" /><code>{"private IEnumerator FadeIn() (iterator)"}</code> | <span className="api-desc">Waits for any fade out, sets the next glyph and fades its alpha in along `fadeCurve`.</span> |
| <Link id="m-fadeout" /><code>{"private IEnumerator FadeOut() (iterator)"}</code> | <span className="api-desc">Fades the alpha out along `fadeCurve`, then hides and clears the sprite.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ActionGlyphAnimator`:

<div className="api-used-in">

[`ActionGlyphsPlacer.activeActionGlyphs`](/mod/game-api/types/global-a-b/actionglyphsplacer#m-activeactionglyphs).

</div>
