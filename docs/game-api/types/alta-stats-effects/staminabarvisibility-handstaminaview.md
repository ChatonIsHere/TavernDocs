---
title: "StaminaBarVisibility.HandStaminaView"
description: "Client: fades one hand's stamina bars and notches in while stamina is below maximum and out when it is full."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StaminaBarVisibility.HandStaminaView

A **private class** in `Root.Township`, `Alta.StatSystem`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Client: fades one hand's stamina bars and notches in while stamina is below maximum and out when it is full. `StaminaBarVisibility` keeps one for each hand.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Nested in** [`StaminaBarVisibility`](/game-api/types/alta-stats-effects/staminabarvisibility)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HandStaminaView("}<Link to="/game-api/types/alta-stats-effects/statbarbase">{"StatBarBase"}</Link>{"[] staminaStatBars, Material notchesMaterial, float alphaLerpSpeed)"}</code> | Creates a `StaminaBarVisibility.HandStaminaView` from `staminaStatBars`, `notchesMaterial` and `alphaLerpSpeed`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alpha" /><code>{"private float alpha"}</code> | Backing field for `Alpha`. |
| <Link id="m-alphalerpspeed" /><code>{"private readonly float alphaLerpSpeed"}</code> | How fast alpha changes per second. |
| <Link id="m-handstaminastat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" handStaminaStat"}</code> | The stamina stat read from the bars, compared with its maximum to decide fading. |
| <Link id="m-notchalpha" /><code>{"private readonly int NotchAlpha"}</code> | Shader property ID for `_AlphaLimit` on the notch material. |
| <Link id="m-notchesmaterial" /><code>{"private readonly Material notchesMaterial"}</code> | Per-hand clone of the notch material. |
| <Link id="m-staminastatbars" /><code>{"private readonly "}<Link to="/game-api/types/alta-stats-effects/statbarbase">{"StatBarBase"}</Link>{"[] staminaStatBars"}</code> | This hand's stamina bars. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-alpha-2" /><code>{"float Alpha { get; set; }"}</code> | Current opacity. Setting it updates the notch material and every stamina bar. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disablestaminabars" /><code>{"void DisableStaminaBars()"}</code> | Disables all of this hand's stamina bars. Called when the player dies. |
| <Link id="m-updatestaminastatbaralpha" /><code>{"void UpdateStaminaStatBarAlpha()"}</code> | Called every LateUpdate: hides the bars when downed, fades them out at full stamina and in otherwise. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hidenotches" /><code>{"private void HideNotches()"}</code> | Sets the notch material's alpha limit to 0. |
| <Link id="m-setupstamina" /><code>{"private void SetupStamina()"}</code> | Initializes each bar at zero alpha, takes its stat as the tracked stamina stat and forces the cloned notch material on it. |

</details>

## Used in

Members of other types that take, return or hold a `HandStaminaView`:

[`StaminaBarVisibility.leftStaminaView`](/game-api/types/alta-stats-effects/staminabarvisibility#m-leftstaminaview), [`StaminaBarVisibility.rightStaminaView`](/game-api/types/alta-stats-effects/staminabarvisibility#m-rightstaminaview).
