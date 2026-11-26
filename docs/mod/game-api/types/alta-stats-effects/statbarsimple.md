---
title: "StatBarSimple"
description: "A stat bar (such as health or hunger) drawn by one renderer's shader: a fill, a trailing change band that lerps after it, and optional corner notches."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatBarSimple

A **class** in `Root.Township`, `Alta.StatSystem`.

A stat bar (such as health or hunger) drawn by one renderer's shader: a fill, a trailing change band that lerps after it, and optional corner notches. Client side.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`StatBarBase`](/mod/game-api/types/alta-stats-effects/statbarbase)
- **Derived types** [`StatBar`](/mod/game-api/types/alta-stats-effects/statbar)
- **Nested types** [`IsLerping`](/mod/game-api/types/alta-stats-effects/statbarsimple-islerping), [`MaterialValue`](/mod/game-api/types/alta-stats-effects/statbarsimple-materialvalue)
- **Attributes** `RequireComponent`
- **Documented in** [Stats](/mod/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatBarSimple()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-alphalimit" /><code>{"protected readonly int _AlphaLimit"}</code> | <span className="api-desc">Shader property ID for `_AlphaLimit`.</span> |
| <Link id="m-fill" /><code>{"protected "}<Link to="/mod/game-api/types/alta-stats-effects/statbarsimple-materialvalue">{"StatBarSimple.MaterialValue"}</Link>{" fill"}</code> | <span className="api-desc">The animated fill value (`_FillProgress`).</span> |
| <Link id="m-lastmaximum" /><code>{"protected float lastMaximum"}</code> | <span className="api-desc">Starts at -1. Not changed in this class; for subclasses to track the stat maximum.</span> |

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-barrenderer" /><code>{"private Renderer barRenderer"}</code> | <span className="api-desc">The bar's renderer; its material is copied per instance.</span> |
| <Link id="m-buildupchange" /><code>{"private bool buildUpchange"}</code> | <span className="api-desc">If true, a drop doesn't reset the negative change marker to the last value.</span> |
| <Link id="m-changeanimation" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" changeAnimation"}</code> | <span className="api-desc">The running `AnimateValues` coroutine.</span> |
| <Link id="m-corners" /><code>{"private Renderer[] corners"}</code> | <span className="api-desc">Corner (notch) renderers that share `CornerMaterial`.</span> |
| <Link id="m-decreaselerpspeed" /><code>{"private float decreaseLerpSpeed"}</code> | <span className="api-desc">Speed of the negative change marker.</span> |
| <Link id="m-increaselerpspeed" /><code>{"private float increaseLerpSpeed"}</code> | <span className="api-desc">Speed of the fill and positive change marker.</span> |
| <Link id="m-isusingpositivechange" /><code>{"private bool isUsingPositiveChange"}</code> | <span className="api-desc">If true, the bar shows a positive change marker; otherwise its shader value stays 0.</span> |
| <Link id="m-negativechange" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statbarsimple-materialvalue">{"StatBarSimple.MaterialValue"}</Link>{" negativeChange"}</code> | <span className="api-desc">Shader value `_NegativeChangeProgress`, the trailing marker after a loss.</span> |
| <Link id="m-positivechange" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statbarsimple-materialvalue">{"StatBarSimple.MaterialValue"}</Link>{" positiveChange"}</code> | <span className="api-desc">Shader value `_PositiveChangeProgress`, used only when `isUsingPositiveChange` is on.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cornermaterial" /><code>{"Material CornerMaterial { get; private set; }"}</code> | <span className="api-desc">The material shared by the corner (notch) renderers.</span> |
| <Link id="m-material" /><code>{"Material Material { get; private set; }"}</code> | <span className="api-desc">The bar's own material copy, whose fill values are set.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-lerping" /><code>{"event "}<Link to="/mod/game-api/types/alta-stats-effects/statbarsimple-islerping">{"StatBarSimple.IsLerping"}</Link>{" Lerping"}</code> | <span className="api-desc">Raised each frame while animating. Handlers set the flag to keep the animation going.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forcenotchmaterial" /><code>{"virtual void ForceNotchMaterial(Material notchesMaterial)"}</code> | <span className="api-desc">Puts a given material on all corner renderers.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Copies the bar and corner materials and sets the fill and change values from the tracked stat.</span> |
| <Link id="m-setalpha" /><code>{"override void SetAlpha(float alphaMultiplier)"}</code> | <span className="api-desc">Sets `_AlphaLimit` on the bar and corner materials as well as the base alpha.</span> |
| <Link id="m-onstatchanged" /><code>{"protected override void OnStatChanged("}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | <span className="api-desc">Updates the fill and change bands to the stat's new value and starts the animation.</span> |
| <Link id="m-setrenderersenabled" /><code>{"protected override void SetRenderersEnabled(bool isEnabled)"}</code> | <span className="api-desc">Shows or hides the bar and corner renderers.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animatevalues" /><code>{"private IEnumerator AnimateValues() (iterator)"}</code> | <span className="api-desc">Coroutine that runs the `Lerping` handlers each frame until none of the material values is still moving.</span> |
| <Link id="m-onbecameinvisible" /><code>{"private void OnBecameInvisible()"}</code> | <span className="api-desc">Disables the bar when its renderer goes off screen, unless a photo is being taken.</span> |
| <Link id="m-onbecamevisible" /><code>{"private void OnBecameVisible()"}</code> | <span className="api-desc">Re-enables the bar when its renderer comes on screen, unless a photo is being taken.</span> |
| <Link id="m-updatevalue" /><code>{"private void UpdateValue("}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | <span className="api-desc">Sets the fill and change shader values from the stat's new value; drops snap at once, gains lerp in.</span> |

</details>

## Used in

Members of other types that take, return or hold a `StatBarSimple`:

<div className="api-used-in">

[`StatBarSimple.MaterialValue.bar`](/mod/game-api/types/alta-stats-effects/statbarsimple-materialvalue#m-bar), [`StatBarSimple.MaterialValue.MaterialValue`](/mod/game-api/types/alta-stats-effects/statbarsimple-materialvalue#m-ctor).

</div>
