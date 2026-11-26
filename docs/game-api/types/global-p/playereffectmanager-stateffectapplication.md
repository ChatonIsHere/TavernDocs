---
title: "PlayerEffectManager.StatEffectApplication"
description: "Private helper in PlayerEffectManager that watches one stat for a buff or a debuff and shows or hides the matching shield shell effect."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerEffectManager.StatEffectApplication

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private helper in `PlayerEffectManager` that watches one stat for a buff or a debuff and shows or hides the matching shield shell effect. Two are made per stat effect (buff and debuff).

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Nested in** [`PlayerEffectManager`](/game-api/types/global-p/playereffectmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatEffectApplication("}<Link to="/game-api/types/alta-player/statdriveneffect">{"StatDrivenEffect"}</Link>{" statDrive, "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat, bool isBuff, "}<Link to="/game-api/types/alta-player/stateffectshellanimator">{"StatEffectShellAnimator"}</Link>{" shellAnimator, Action<"}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{", bool, bool> activeChanged, Action<"}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{", bool, float> sizeChanged)"}</code> | Creates a `PlayerEffectManager.StatEffectApplication` from `statDrive`, `stat`, `isBuff`, `shellAnimator`, `activeChanged` and `sizeChanged`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activechanged" /><code>{"Action<"}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{", bool, bool> ActiveChanged"}</code> | Callback run when the buff or debuff turns on or off, with the stat definition and whether it is a buff. |
| <Link id="m-sizechanged" /><code>{"Action<"}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{", bool, float> SizeChanged"}</code> | Callback run with a new effect size (from the stat drive's value-to-size curve) when the effect starts or its value changes. |

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handler" /><code>{"private "}<Link to="/game-api/types/alta-player/shellanimationhandler">{"ShellAnimationHandler"}</Link>{" handler"}</code> | Animation handler of the shield shell currently playing, deactivated when the effect ends or restarts. |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> | Whether the buff or debuff is currently showing. |
| <Link id="m-isbuff" /><code>{"private bool isBuff"}</code> | True to watch for a raised stat, false to watch for a lowered one. |
| <Link id="m-magnitudedefinition" /><code>{"private Func<float, float, float> MagnitudeDefinition"}</code> | Unused function field. |
| <Link id="m-shellanimator" /><code>{"private "}<Link to="/game-api/types/alta-player/stateffectshellanimator">{"StatEffectShellAnimator"}</Link>{" shellAnimator"}</code> | The player's `StatEffectShellAnimator` that plays the shield effect. |
| <Link id="m-statdrive" /><code>{"private "}<Link to="/game-api/types/alta-player/statdriveneffect">{"StatDrivenEffect"}</Link>{" statDrive"}</code> | The `StatDrivenEffect` that gives the shield effect and the value-to-size curve. |
| <Link id="m-value" /><code>{"private float Value"}</code> | Last buff amount the shell was sized for. A change over 0.01 restarts the shell animation. |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-valuechanged" /><code>{"private void ValueChanged("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | Handles the stat's `Changed` event: works out the buff part of the value and turns the shell on, off or resizes it. |

</details>
