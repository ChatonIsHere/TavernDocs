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
| <Link id="m-ctor" /><code>{"StatEffectShellSetting(bool isBuff)"}</code> | Creates a `StatEffectShellSetting` from `isBuff`. |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-colora" /><code>{"private Color colorA"}</code> | First shell colour. |
| <Link id="m-colorb" /><code>{"private Color colorB"}</code> | Second shell colour. |
| <Link id="m-expandedprogress" /><code>{"private float expandedProgress"}</code> | Backing field for `ExpandedProgress`. |
| <Link id="m-progresscurve" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" progressCurve"}</code> | Backing field for `Curve`. |
| <Link id="m-speed" /><code>{"private float speed"}</code> | Shader scroll speed. Default 0.05. |
| <Link id="m-texturetile" /><code>{"private Vector2 textureTile"}</code> | U and V tiling of the wave texture. |
| <Link id="m-wavealpha" /><code>{"private float waveAlpha"}</code> | Opacity of the wave, 0 to 1. Default 0.8. |
| <Link id="m-wavecolor" /><code>{"private Color waveColor"}</code> | Colour of the moving wave. |
| <Link id="m-wavetexture" /><code>{"private Texture2D waveTexture"}</code> | Texture for the wave pattern. |
| <Link id="m-width" /><code>{"private float width"}</code> | Shell width in the shader. Default 0.1. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-curve" /><code><Link to="/mod/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" Curve { get; }"}</code> | Curve and duration the shell grows in with. Default ease in and out over 0.5 seconds. |
| <Link id="m-expandedprogress-2" /><code>{"float ExpandedProgress { get; }"}</code> | Progress (0 to 1) the shell animates to and holds while the effect is active. Default 0.2. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setmaterial" /><code>{"override void SetMaterial(Material material)"}</code> | Writes the colours, wave texture and alpha, width, speed and tiling to the shell material. |

## Used in

Members of other types that take, return or hold a `StatEffectShellSetting`:

[`StatDrivenEffect.shieldEffect`](/mod/game-api/types/alta-player/statdriveneffect#m-shieldeffect), [`StatDrivenEffect.ShieldEffect`](/mod/game-api/types/alta-player/statdriveneffect#m-shieldeffect-2), [`StatEffectShellAnimator.AnimateShield`](/mod/game-api/types/alta-player/stateffectshellanimator#m-animateshield).
