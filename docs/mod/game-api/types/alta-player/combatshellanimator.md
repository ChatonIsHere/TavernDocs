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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`ShellAnimator`](/mod/game-api/types/alta-player/shellanimator)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CombatShellAnimator("}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" character, Material shellMaterialSample)"}</code> | <span className="api-desc">Creates a `CombatShellAnimator` from `character` and `shellMaterialSample`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-dissolve" /><code>{"static readonly int _Dissolve"}</code> | <span className="api-desc">Shader property id for `_Dissolve`.</span> |
| <Link id="m-waves" /><code>{"static readonly int _Waves"}</code> | <span className="api-desc">Shader property id for `_Waves`.</span> |
| <Link id="m-dissolvestrength" /><code>{"static readonly int dissolveStrength"}</code> | <span className="api-desc">Shader property id for `_DissolveStrength`, set by `CombatShellSetting`.</span> |
| <Link id="m-progress" /><code>{"static readonly int progress"}</code> | <span className="api-desc">Shader property id for `_Progress`.</span> |
| <Link id="m-ramp1" /><code>{"static readonly int ramp1"}</code> | <span className="api-desc">Shader property id for `_Ramp`, set by `CombatShellSetting`.</span> |
| <Link id="m-ramp2" /><code>{"static readonly int ramp2"}</code> | <span className="api-desc">Shader property id for `_Ramp2`, set by `CombatShellSetting`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-meshname" /><code>{"protected override string MeshName { get; }"}</code> | <span className="api-desc">Name of the shell mesh object: "_Combat Shell".</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-animatecombatshield" /><code>{"void AnimateCombatShield("}<Link to="/mod/game-api/types/alta-player/shellsetting">{"ShellSetting"}</Link>{" setting, "}<Link to="/mod/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" curve, float targetProgress, float startProgress)"}</code> | <span className="api-desc">Applies the shell setting if it changed and animates the shell's progress between two values along a curve. Only while alive.</span> |

## Used in

Members of other types that take, return or hold a `CombatShellAnimator`:

<div className="api-used-in">

[`PlayerSpecialEffectsController.CombatShellAnimator`](/mod/game-api/types/global-p/playerspecialeffectscontroller#m-combatshellanimator).

</div>
