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

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`ShellSetting`](/game-api/types/alta-player/shellsetting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CombatShellSetting()"}</code> | Creates a `CombatShellSetting` with default values. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dissolvestrength" /><code>{"private float dissolveStrength"}</code> | Dissolve amount set on the shell material. |
| <Link id="m-ramp1" /><code>{"private Texture2D ramp1"}</code> | First colour ramp texture for the shell. |
| <Link id="m-ramp2" /><code>{"private Texture2D ramp2"}</code> | Second colour ramp texture for the shell. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setmaterial" /><code>{"override void SetMaterial(Material material)"}</code> | Writes the two ramp textures and dissolve strength onto the material, using `CombatShellAnimator`'s property ids. |

## Used in

Members of other types that take, return or hold a `CombatShellSetting`:

[`DeathAnimationSettings.firstBurstShellSettings`](/game-api/types/alta-intelligence/deathanimationsettings#m-firstburstshellsettings), [`DeathAnimationSettings.FirstBurstShellSettings`](/game-api/types/alta-intelligence/deathanimationsettings#m-firstburstshellsettings-2), [`DeathAnimationSettings.secondBurstShellSettings`](/game-api/types/alta-intelligence/deathanimationsettings#m-secondburstshellsettings), [`DeathAnimationSettings.SecondBurstShellSettings`](/game-api/types/alta-intelligence/deathanimationsettings#m-secondburstshellsettings-2).
