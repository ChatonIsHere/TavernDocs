---
title: "ShellSetting"
description: "Base for one setting applied to a player effect's shell material."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShellSetting

An **abstract class** in `Root.Township`, `Alta.PlayerEffects`.

Base for one setting applied to a player effect's shell material.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Derived types** [`CombatShellSetting`](/game-api/types/alta-player/combatshellsetting), [`StatEffectShellSetting`](/game-api/types/alta-player/stateffectshellsetting)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected ShellSetting()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setmaterial" /><code>{"abstract void SetMaterial(Material material)"}</code> | Applies this setting to the material. |

## Used in

Members of other types that take, return or hold a `ShellSetting`:

[`CombatShellAnimator.AnimateCombatShield`](/game-api/types/alta-player/combatshellanimator#m-animatecombatshield), [`ShellAnimationHandler.setting`](/game-api/types/alta-player/shellanimationhandler#m-setting), [`ShellAnimationHandler.ShellAnimationHandler`](/game-api/types/alta-player/shellanimationhandler#m-ctor), [`ShellAnimator.CurrentSetting`](/game-api/types/alta-player/shellanimator#m-currentsetting), [`CombatStateSettings.combatShell`](/game-api/types/alta-player/combatstatesettings#m-combatshell), [`CombatStateSettings.CombatShell`](/game-api/types/alta-player/combatstatesettings#m-combatshell-2), [`PlayerHealthVisualEffectsSettings.hurtShell`](/game-api/types/global-p/playerhealthvisualeffectssettings#m-hurtshell), [`PlayerHealthVisualEffectsSettings.HurtShell`](/game-api/types/global-p/playerhealthvisualeffectssettings#m-hurtshell-2).
