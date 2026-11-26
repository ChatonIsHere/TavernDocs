---
title: "StatEffectShellSetting"
description: "Look of the shell drawn around a player for a stat buff or debuff: colours, wave texture and how it animates in."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatEffectShellSetting

A **class** in `Root.Township`, `Alta.PlayerEffects`.

Look of the shell drawn around a player for a stat buff or debuff: colours, wave texture and how it animates in. Used by `StatEffectShellAnimator`; buffs default to orange and red, debuffs to grey and blue.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`ShellSetting`](/mod/game-api/types/alta-player/shellsetting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatEffectShellSetting(bool isBuff)"}</code> | <span className="api-desc">Creates a `StatEffectShellSetting` from `isBuff`.</span> |

## Fields

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-colora" /><code>{"private Color colorA"}</code> | <span className="api-desc">First shell colour.</span> |
| <Link id="m-colorb" /><code>{"private Color colorB"}</code> | <span className="api-desc">Second shell colour.</span> |
| <Link id="m-expandedprogress" /><code>{"private float expandedProgress"}</code> | <span className="api-desc">Backing field for `ExpandedProgress`.</span> |
| <Link id="m-progresscurve" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" progressCurve"}</code> | <span className="api-desc">Backing field for `Curve`.</span> |
| <Link id="m-speed" /><code>{"private float speed"}</code> | <span className="api-desc">Shader scroll speed. Default 0.05.</span> |
| <Link id="m-texturetile" /><code>{"private Vector2 textureTile"}</code> | <span className="api-desc">U and V tiling of the wave texture.</span> |
| <Link id="m-wavealpha" /><code>{"private float waveAlpha"}</code> | <span className="api-desc">Opacity of the wave, 0 to 1. Default 0.8.</span> |
| <Link id="m-wavecolor" /><code>{"private Color waveColor"}</code> | <span className="api-desc">Colour of the moving wave.</span> |
| <Link id="m-wavetexture" /><code>{"private Texture2D waveTexture"}</code> | <span className="api-desc">Texture for the wave pattern.</span> |
| <Link id="m-width" /><code>{"private float width"}</code> | <span className="api-desc">Shell width in the shader. Default 0.1.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-curve" /><code><Link to="/mod/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" Curve { get; }"}</code> | <span className="api-desc">Curve and duration the shell grows in with. Default ease in and out over 0.5 seconds.</span> |
| <Link id="m-expandedprogress-2" /><code>{"float ExpandedProgress { get; }"}</code> | <span className="api-desc">Progress (0 to 1) the shell animates to and holds while the effect is active. Default 0.2.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setmaterial" /><code>{"override void SetMaterial(Material material)"}</code> | <span className="api-desc">Writes the colours, wave texture and alpha, width, speed and tiling to the shell material.</span> |

## Used in

Members of other types that take, return or hold a `StatEffectShellSetting`:

<div className="api-used-in">

[`StatDrivenEffect.shieldEffect`](/mod/game-api/types/alta-player/statdriveneffect#m-shieldeffect), [`StatDrivenEffect.ShieldEffect`](/mod/game-api/types/alta-player/statdriveneffect#m-shieldeffect-2), [`StatEffectShellAnimator.AnimateShield`](/mod/game-api/types/alta-player/stateffectshellanimator#m-animateshield).

</div>
