---
title: "CombatShellSetting"
description: "Shell effect settings for combat: two ramp textures and a dissolve strength pushed onto the shell material."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CombatShellSetting

A **class** in `Root.Township`, `Alta.PlayerEffects`.

Shell effect settings for combat: two ramp textures and a dissolve strength pushed onto the shell material. Client visual.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`ShellSetting`](/mod/game-api/types/alta-player/shellsetting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CombatShellSetting()"}</code> | <span className="api-desc">Creates a `CombatShellSetting` with default values.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dissolvestrength" /><code>{"private float dissolveStrength"}</code> | <span className="api-desc">Dissolve amount set on the shell material.</span> |
| <Link id="m-ramp1" /><code>{"private Texture2D ramp1"}</code> | <span className="api-desc">First colour ramp texture for the shell.</span> |
| <Link id="m-ramp2" /><code>{"private Texture2D ramp2"}</code> | <span className="api-desc">Second colour ramp texture for the shell.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setmaterial" /><code>{"override void SetMaterial(Material material)"}</code> | <span className="api-desc">Writes the two ramp textures and dissolve strength onto the material, using `CombatShellAnimator`'s property ids.</span> |

## Used in

Members of other types that take, return or hold a `CombatShellSetting`:

<div className="api-used-in">

[`DeathAnimationSettings.firstBurstShellSettings`](/mod/game-api/types/alta-intelligence/deathanimationsettings#m-firstburstshellsettings), [`DeathAnimationSettings.FirstBurstShellSettings`](/mod/game-api/types/alta-intelligence/deathanimationsettings#m-firstburstshellsettings-2), [`DeathAnimationSettings.secondBurstShellSettings`](/mod/game-api/types/alta-intelligence/deathanimationsettings#m-secondburstshellsettings), [`DeathAnimationSettings.SecondBurstShellSettings`](/mod/game-api/types/alta-intelligence/deathanimationsettings#m-secondburstshellsettings-2).

</div>
