---
title: "StatBarSimple"
description: "class StatBarSimple in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatBarSimple

A **class** in `Root.Township`, `Alta.StatSystem`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`StatBarBase`](/game-api/types/alta-stats-effects/statbarbase)
- **Derived types** [`StatBar`](/game-api/types/alta-stats-effects/statbar)
- **Nested types** [`IsLerping`](/game-api/types/alta-stats-effects/statbarsimple-islerping), [`MaterialValue`](/game-api/types/alta-stats-effects/statbarsimple-materialvalue)
- **Attributes** `RequireComponent`
- **Documented in** [Stats](/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatBarSimple()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-alphalimit" /><code>{"protected readonly int _AlphaLimit"}</code> |  |
| <Link id="m-barrenderer" /><code>{"private Renderer barRenderer"}</code> |  |
| <Link id="m-buildupchange" /><code>{"private bool buildUpchange"}</code> |  |
| <Link id="m-changeanimation" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" changeAnimation"}</code> |  |
| <Link id="m-corners" /><code>{"private Renderer[] corners"}</code> |  |
| <Link id="m-decreaselerpspeed" /><code>{"private float decreaseLerpSpeed"}</code> |  |
| <Link id="m-fill" /><code>{"protected "}<Link to="/game-api/types/alta-stats-effects/statbarsimple-materialvalue">{"StatBarSimple.MaterialValue"}</Link>{" fill"}</code> |  |
| <Link id="m-increaselerpspeed" /><code>{"private float increaseLerpSpeed"}</code> |  |
| <Link id="m-isusingpositivechange" /><code>{"private bool isUsingPositiveChange"}</code> |  |
| <Link id="m-lastmaximum" /><code>{"protected float lastMaximum"}</code> |  |
| <Link id="m-negativechange" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statbarsimple-materialvalue">{"StatBarSimple.MaterialValue"}</Link>{" negativeChange"}</code> |  |
| <Link id="m-positivechange" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statbarsimple-materialvalue">{"StatBarSimple.MaterialValue"}</Link>{" positiveChange"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cornermaterial" /><code>{"Material CornerMaterial { get; private set; }"}</code> |  |
| <Link id="m-material" /><code>{"Material Material { get; private set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-lerping" /><code>{"event "}<Link to="/game-api/types/alta-stats-effects/statbarsimple-islerping">{"StatBarSimple.IsLerping"}</Link>{" Lerping"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forcenotchmaterial" /><code>{"virtual void ForceNotchMaterial(Material notchesMaterial)"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-setalpha" /><code>{"override void SetAlpha(float alphaMultiplier)"}</code> |  |
| <Link id="m-animatevalues" /><code>{"private IEnumerator AnimateValues() (iterator)"}</code> |  |
| <Link id="m-onbecameinvisible" /><code>{"private void OnBecameInvisible()"}</code> |  |
| <Link id="m-onbecamevisible" /><code>{"private void OnBecameVisible()"}</code> |  |
| <Link id="m-onstatchanged" /><code>{"protected override void OnStatChanged("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> |  |
| <Link id="m-setrenderersenabled" /><code>{"protected override void SetRenderersEnabled(bool isEnabled)"}</code> |  |
| <Link id="m-updatevalue" /><code>{"private void UpdateValue("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> |  |

## Used in

Members of other types that take, return or hold a `StatBarSimple`:

[`StatBarSimple.MaterialValue.bar`](/game-api/types/alta-stats-effects/statbarsimple-materialvalue#m-bar), [`StatBarSimple.MaterialValue.MaterialValue`](/game-api/types/alta-stats-effects/statbarsimple-materialvalue#m-ctor).
