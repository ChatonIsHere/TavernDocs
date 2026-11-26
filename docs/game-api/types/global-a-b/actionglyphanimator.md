---
title: "ActionGlyphAnimator"
description: "Pooled sprite that fades a skill practice glyph in and out."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActionGlyphAnimator

A **class** in `Root.Township`, no namespace.

Pooled sprite that fades a skill practice glyph in and out. Spawned and placed by `ActionGlyphsPlacer`.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActionGlyphAnimator()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidspriterenderer" /><code>{"private Renderer androidSpriteRenderer"}</code> | Separate renderer for Android. Not used in this class's code. |
| <Link id="m-fadecurve" /><code>{"private "}<Link to="/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" fadeCurve"}</code> | Curve and duration used for the alpha fades. |
| <Link id="m-fadingincoroutine" /><code>{"private Coroutine fadingInCoroutine"}</code> | The running fade in, if any. |
| <Link id="m-fadingoutcoroutine" /><code>{"private Coroutine fadingOutCoroutine"}</code> | The running fade out, if any. |
| <Link id="m-nextglyph" /><code>{"private Sprite nextGlyph"}</code> | Sprite to show once the fade in starts. |
| <Link id="m-spriterenderer" /><code>{"private SpriteRenderer spriteRenderer"}</code> | Renderer that shows the glyph sprite. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-release" /><code>{"override void Release()"}</code> | Fades the glyph out first if it is showing or fading, then returns it to the pool. |
| <Link id="m-setupglyph" /><code>{"void SetupGlyph(Sprite glyph)"}</code> | Changes the shown glyph with a fade. A null glyph fades the current one out. |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> | Only calls the base pooled object cleanup. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hides the sprite and clears it. |
| <Link id="m-fadeandrelease" /><code>{"private IEnumerator FadeAndRelease(Coroutine toWait) (iterator)"}</code> | Waits for a fade out to finish, then returns the object to its pool. |
| <Link id="m-fadein" /><code>{"private IEnumerator FadeIn() (iterator)"}</code> | Waits for any fade out, sets the next glyph and fades its alpha in along `fadeCurve`. |
| <Link id="m-fadeout" /><code>{"private IEnumerator FadeOut() (iterator)"}</code> | Fades the alpha out along `fadeCurve`, then hides and clears the sprite. |

</details>

## Used in

Members of other types that take, return or hold a `ActionGlyphAnimator`:

[`ActionGlyphsPlacer.activeActionGlyphs`](/game-api/types/global-a-b/actionglyphsplacer#m-activeactionglyphs).
