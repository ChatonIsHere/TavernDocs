---
title: "ActionGlyphAnimator"
description: "class ActionGlyphAnimator in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActionGlyphAnimator

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ActionGlyphAnimator()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-androidspriterenderer" /><code>{"private Renderer androidSpriteRenderer"}</code> |
| <Link id="m-fadecurve" /><code>{"private "}<Link to="/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" fadeCurve"}</code> |
| <Link id="m-fadingincoroutine" /><code>{"private Coroutine fadingInCoroutine"}</code> |
| <Link id="m-fadingoutcoroutine" /><code>{"private Coroutine fadingOutCoroutine"}</code> |
| <Link id="m-nextglyph" /><code>{"private Sprite nextGlyph"}</code> |
| <Link id="m-spriterenderer" /><code>{"private SpriteRenderer spriteRenderer"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-release" /><code>{"override void Release()"}</code> |
| <Link id="m-setupglyph" /><code>{"void SetupGlyph(Sprite glyph)"}</code> |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> |

<details>
<summary>4 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-fadeandrelease" /><code>{"private IEnumerator FadeAndRelease(Coroutine toWait) (iterator)"}</code> |
| <Link id="m-fadein" /><code>{"private IEnumerator FadeIn() (iterator)"}</code> |
| <Link id="m-fadeout" /><code>{"private IEnumerator FadeOut() (iterator)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `ActionGlyphAnimator`:

[`ActionGlyphsPlacer.activeActionGlyphs`](/game-api/types/global-a-b/actionglyphsplacer#m-activeactionglyphs).
