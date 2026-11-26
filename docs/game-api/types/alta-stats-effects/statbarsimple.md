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

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`StatBarBase`](/game-api/types/alta-stats-effects/statbarbase)
- **Derived types** [`StatBar`](/game-api/types/alta-stats-effects/statbar)
- **Nested types** [`IsLerping`](/game-api/types/alta-stats-effects/statbarsimple-islerping), [`MaterialValue`](/game-api/types/alta-stats-effects/statbarsimple-materialvalue)
- **Attributes** `RequireComponent`
- **Documented in** [Stats](/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatBarSimple()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-alphalimit" /><code>{"protected readonly int _AlphaLimit"}</code> | Shader property ID for `_AlphaLimit`. |
| <Link id="m-fill" /><code>{"protected "}<Link to="/game-api/types/alta-stats-effects/statbarsimple-materialvalue">{"StatBarSimple.MaterialValue"}</Link>{" fill"}</code> | The animated fill value (`_FillProgress`). |
| <Link id="m-lastmaximum" /><code>{"protected float lastMaximum"}</code> | Starts at -1. Not changed in this class; for subclasses to track the stat maximum. |

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-barrenderer" /><code>{"private Renderer barRenderer"}</code> | The bar's renderer; its material is copied per instance. |
| <Link id="m-buildupchange" /><code>{"private bool buildUpchange"}</code> | If true, a drop doesn't reset the negative change marker to the last value. |
| <Link id="m-changeanimation" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" changeAnimation"}</code> | The running `AnimateValues` coroutine. |
| <Link id="m-corners" /><code>{"private Renderer[] corners"}</code> | Corner (notch) renderers that share `CornerMaterial`. |
| <Link id="m-decreaselerpspeed" /><code>{"private float decreaseLerpSpeed"}</code> | Speed of the negative change marker. |
| <Link id="m-increaselerpspeed" /><code>{"private float increaseLerpSpeed"}</code> | Speed of the fill and positive change marker. |
| <Link id="m-isusingpositivechange" /><code>{"private bool isUsingPositiveChange"}</code> | If true, the bar shows a positive change marker; otherwise its shader value stays 0. |
| <Link id="m-negativechange" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statbarsimple-materialvalue">{"StatBarSimple.MaterialValue"}</Link>{" negativeChange"}</code> | Shader value `_NegativeChangeProgress`, the trailing marker after a loss. |
| <Link id="m-positivechange" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statbarsimple-materialvalue">{"StatBarSimple.MaterialValue"}</Link>{" positiveChange"}</code> | Shader value `_PositiveChangeProgress`, used only when `isUsingPositiveChange` is on. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cornermaterial" /><code>{"Material CornerMaterial { get; private set; }"}</code> | The material shared by the corner (notch) renderers. |
| <Link id="m-material" /><code>{"Material Material { get; private set; }"}</code> | The bar's own material copy, whose fill values are set. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-lerping" /><code>{"event "}<Link to="/game-api/types/alta-stats-effects/statbarsimple-islerping">{"StatBarSimple.IsLerping"}</Link>{" Lerping"}</code> | Raised each frame while animating. Handlers set the flag to keep the animation going. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forcenotchmaterial" /><code>{"virtual void ForceNotchMaterial(Material notchesMaterial)"}</code> | Puts a given material on all corner renderers. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Copies the bar and corner materials and sets the fill and change values from the tracked stat. |
| <Link id="m-setalpha" /><code>{"override void SetAlpha(float alphaMultiplier)"}</code> | Sets `_AlphaLimit` on the bar and corner materials as well as the base alpha. |
| <Link id="m-onstatchanged" /><code>{"protected override void OnStatChanged("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | Updates the fill and change bands to the stat's new value and starts the animation. |
| <Link id="m-setrenderersenabled" /><code>{"protected override void SetRenderersEnabled(bool isEnabled)"}</code> | Shows or hides the bar and corner renderers. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animatevalues" /><code>{"private IEnumerator AnimateValues() (iterator)"}</code> | Coroutine that runs the `Lerping` handlers each frame until none of the material values is still moving. |
| <Link id="m-onbecameinvisible" /><code>{"private void OnBecameInvisible()"}</code> | Disables the bar when its renderer goes off screen, unless a photo is being taken. |
| <Link id="m-onbecamevisible" /><code>{"private void OnBecameVisible()"}</code> | Re-enables the bar when its renderer comes on screen, unless a photo is being taken. |
| <Link id="m-updatevalue" /><code>{"private void UpdateValue("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | Sets the fill and change shader values from the stat's new value; drops snap at once, gains lerp in. |

</details>

## Used in

Members of other types that take, return or hold a `StatBarSimple`:

[`StatBarSimple.MaterialValue.bar`](/game-api/types/alta-stats-effects/statbarsimple-materialvalue#m-bar), [`StatBarSimple.MaterialValue.MaterialValue`](/game-api/types/alta-stats-effects/statbarsimple-materialvalue#m-ctor).
