---
title: "StaminaBarVisibility.HandStaminaView"
description: "class StaminaBarVisibility.HandStaminaView in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StaminaBarVisibility.HandStaminaView

A **private class** in `Root.Township`, `Alta.StatSystem`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Nested in** [`StaminaBarVisibility`](/game-api/types/alta-stats-effects/staminabarvisibility)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HandStaminaView("}<Link to="/game-api/types/alta-stats-effects/statbarbase">{"StatBarBase"}</Link>{"[] staminaStatBars, Material notchesMaterial, float alphaLerpSpeed)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-alpha" /><code>{"private float alpha"}</code> |  |
| <Link id="m-alphalerpspeed" /><code>{"private readonly float alphaLerpSpeed"}</code> |  |
| <Link id="m-handstaminastat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" handStaminaStat"}</code> |  |
| <Link id="m-notchalpha" /><code>{"private readonly int NotchAlpha"}</code> |  |
| <Link id="m-notchesmaterial" /><code>{"private readonly Material notchesMaterial"}</code> |  |
| <Link id="m-staminastatbars" /><code>{"private readonly "}<Link to="/game-api/types/alta-stats-effects/statbarbase">{"StatBarBase"}</Link>{"[] staminaStatBars"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-alpha-2" /><code>{"float Alpha { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disablestaminabars" /><code>{"void DisableStaminaBars()"}</code> |  |
| <Link id="m-updatestaminastatbaralpha" /><code>{"void UpdateStaminaStatBarAlpha()"}</code> |  |
| <Link id="m-hidenotches" /><code>{"private void HideNotches()"}</code> |  |
| <Link id="m-setupstamina" /><code>{"private void SetupStamina()"}</code> |  |

## Used in

Members of other types that take, return or hold a `HandStaminaView`:

[`StaminaBarVisibility.leftStaminaView`](/game-api/types/alta-stats-effects/staminabarvisibility#m-leftstaminaview), [`StaminaBarVisibility.rightStaminaView`](/game-api/types/alta-stats-effects/staminabarvisibility#m-rightstaminaview).
