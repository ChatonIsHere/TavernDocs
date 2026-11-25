---
title: "StatEffectShellSetting"
description: "class StatEffectShellSetting in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatEffectShellSetting

A **class** in `Root.Township`, `Alta.PlayerEffects`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`ShellSetting`](/game-api/types/alta-player/shellsetting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatEffectShellSetting(bool isBuff)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-colora" /><code>{"private Color colorA"}</code> |  |
| <Link id="m-colorb" /><code>{"private Color colorB"}</code> |  |
| <Link id="m-expandedprogress" /><code>{"private float expandedProgress"}</code> |  |
| <Link id="m-progresscurve" /><code>{"private "}<Link to="/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" progressCurve"}</code> |  |
| <Link id="m-speed" /><code>{"private float speed"}</code> |  |
| <Link id="m-texturetile" /><code>{"private Vector2 textureTile"}</code> |  |
| <Link id="m-wavealpha" /><code>{"private float waveAlpha"}</code> |  |
| <Link id="m-wavecolor" /><code>{"private Color waveColor"}</code> |  |
| <Link id="m-wavetexture" /><code>{"private Texture2D waveTexture"}</code> |  |
| <Link id="m-width" /><code>{"private float width"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-curve" /><code><Link to="/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" Curve { get; }"}</code> |  |
| <Link id="m-expandedprogress-2" /><code>{"float ExpandedProgress { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setmaterial" /><code>{"override void SetMaterial(Material material)"}</code> |  |

## Used in

Members of other types that take, return or hold a `StatEffectShellSetting`:

[`StatDrivenEffect.shieldEffect`](/game-api/types/alta-player/statdriveneffect#m-shieldeffect), [`StatDrivenEffect.ShieldEffect`](/game-api/types/alta-player/statdriveneffect#m-shieldeffect-2), [`StatEffectShellAnimator.AnimateShield`](/game-api/types/alta-player/stateffectshellanimator#m-animateshield).
