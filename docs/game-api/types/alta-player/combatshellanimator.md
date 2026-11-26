---
title: "CombatShellAnimator"
description: "Client: animates the shell effect around a player in combat mode."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CombatShellAnimator

A **class** in `Root.Township`, `Alta.PlayerEffects`.

Client: animates the shell effect around a player in combat mode. `CombatState` triggers it through the player's `SpecialEffectsController`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`ShellAnimator`](/game-api/types/alta-player/shellanimator)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CombatShellAnimator("}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" character, Material shellMaterialSample)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-dissolve" /><code>{"static readonly int _Dissolve"}</code> | Shader property id for `_Dissolve`. |
| <Link id="m-waves" /><code>{"static readonly int _Waves"}</code> | Shader property id for `_Waves`. |
| <Link id="m-dissolvestrength" /><code>{"static readonly int dissolveStrength"}</code> | Shader property id for `_DissolveStrength`, set by `CombatShellSetting`. |
| <Link id="m-progress" /><code>{"static readonly int progress"}</code> | Shader property id for `_Progress`. |
| <Link id="m-ramp1" /><code>{"static readonly int ramp1"}</code> | Shader property id for `_Ramp`, set by `CombatShellSetting`. |
| <Link id="m-ramp2" /><code>{"static readonly int ramp2"}</code> | Shader property id for `_Ramp2`, set by `CombatShellSetting`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-meshname" /><code>{"protected override string MeshName { get; }"}</code> | Name of the shell mesh object: "_Combat Shell". |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-animatecombatshield" /><code>{"void AnimateCombatShield("}<Link to="/game-api/types/alta-player/shellsetting">{"ShellSetting"}</Link>{" setting, "}<Link to="/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" curve, float targetProgress, float startProgress)"}</code> | Applies the shell setting if it changed and animates the shell's progress between two values along a curve. Only while alive. |

## Used in

Members of other types that take, return or hold a `CombatShellAnimator`:

[`PlayerSpecialEffectsController.CombatShellAnimator`](/game-api/types/global-p/playerspecialeffectscontroller#m-combatshellanimator).
