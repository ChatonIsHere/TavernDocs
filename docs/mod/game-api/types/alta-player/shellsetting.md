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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Derived types** [`CombatShellSetting`](/mod/game-api/types/alta-player/combatshellsetting), [`StatEffectShellSetting`](/mod/game-api/types/alta-player/stateffectshellsetting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ShellSetting()"}</code> | <span className="api-desc">Creates a `ShellSetting` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setmaterial" /><code>{"abstract void SetMaterial(Material material)"}</code> | <span className="api-desc">Applies this setting to the material.</span> |

## Used in

Members of other types that take, return or hold a `ShellSetting`:

<div className="api-used-in">

[`CombatShellAnimator.AnimateCombatShield`](/mod/game-api/types/alta-player/combatshellanimator#m-animatecombatshield), [`ShellAnimationHandler.setting`](/mod/game-api/types/alta-player/shellanimationhandler#m-setting), [`ShellAnimationHandler.ShellAnimationHandler`](/mod/game-api/types/alta-player/shellanimationhandler#m-ctor), [`ShellAnimator.CurrentSetting`](/mod/game-api/types/alta-player/shellanimator#m-currentsetting), [`CombatStateSettings.combatShell`](/mod/game-api/types/alta-player/combatstatesettings#m-combatshell), [`CombatStateSettings.CombatShell`](/mod/game-api/types/alta-player/combatstatesettings#m-combatshell-2), [`PlayerHealthVisualEffectsSettings.hurtShell`](/mod/game-api/types/global-p/playerhealthvisualeffectssettings#m-hurtshell), [`PlayerHealthVisualEffectsSettings.HurtShell`](/mod/game-api/types/global-p/playerhealthvisualeffectssettings#m-hurtshell-2).

</div>
