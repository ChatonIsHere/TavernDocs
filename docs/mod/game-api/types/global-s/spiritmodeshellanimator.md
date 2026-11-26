---
title: "SpiritModeShellAnimator"
description: "Shell effect around a player character for spirit mode, driven by the shell material's _Progress value."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpiritModeShellAnimator

A **class** in `Root.Township`, the global namespace.

Shell effect around a player character for spirit mode, driven by the shell material's `_Progress` value. Client side; built with the character and a sample material.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`ShellAnimator`](/mod/game-api/types/alta-player/shellanimator)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpiritModeShellAnimator("}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" character, Material shellMaterialSample)"}</code> | <span className="api-desc">Creates a `SpiritModeShellAnimator` from `character` and `shellMaterialSample`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-progress" /><code>{"static readonly int _Progress"}</code> | <span className="api-desc">Shader property ID for `_Progress`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-meshname" /><code>{"protected override string MeshName { get; }"}</code> | <span className="api-desc">Name of the shell mesh to use. Never set in the decompiled code, so probably null (the combat and stat effect shells give fixed names).</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-animatespiritmode" /><code>{"void AnimateSpiritMode(float start, float target, "}<Link to="/mod/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" curve)"}</code> | <span className="api-desc">Starts a coroutine on the character that animates `_Progress` from start to target along the curve.</span> |
| <Link id="m-resetshell" /><code>{"void ResetShell()"}</code> | <span className="api-desc">Sets the shell material's `_Progress` back to 0.</span> |

## Used in

Members of other types that take, return or hold a `SpiritModeShellAnimator`:

<div className="api-used-in">

[`PlayerSpecialEffectsController.SpiritModeShellAnimator`](/mod/game-api/types/global-p/playerspecialeffectscontroller#m-spiritmodeshellanimator).

</div>
