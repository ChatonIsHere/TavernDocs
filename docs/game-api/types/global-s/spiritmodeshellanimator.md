---
title: "SpiritModeShellAnimator"
description: "Shell effect around a player character for spirit mode, driven by the shell material's _Progress value."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpiritModeShellAnimator

A **class** in `Root.Township`, no namespace.

Shell effect around a player character for spirit mode, driven by the shell material's `_Progress` value. Client side; built with the character and a sample material.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`ShellAnimator`](/game-api/types/alta-player/shellanimator)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SpiritModeShellAnimator("}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" character, Material shellMaterialSample)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-progress" /><code>{"static readonly int _Progress"}</code> | Shader property ID for `_Progress`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-meshname" /><code>{"protected override string MeshName { get; }"}</code> | Name of the shell mesh to use. Never set in the decompiled code, so probably null (the combat and stat effect shells give fixed names). |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-animatespiritmode" /><code>{"void AnimateSpiritMode(float start, float target, "}<Link to="/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" curve)"}</code> | Starts a coroutine on the character that animates `_Progress` from start to target along the curve. |
| <Link id="m-resetshell" /><code>{"void ResetShell()"}</code> | Sets the shell material's `_Progress` back to 0. |

## Used in

Members of other types that take, return or hold a `SpiritModeShellAnimator`:

[`PlayerSpecialEffectsController.SpiritModeShellAnimator`](/game-api/types/global-p/playerspecialeffectscontroller#m-spiritmodeshellanimator).
