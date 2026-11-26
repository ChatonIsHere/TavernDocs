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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Nested in** [`StaminaBarVisibility`](/mod/game-api/types/alta-stats-effects/staminabarvisibility)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HandStaminaView("}<Link to="/mod/game-api/types/alta-stats-effects/statbarbase">{"StatBarBase"}</Link>{"[] staminaStatBars, Material notchesMaterial, float alphaLerpSpeed)"}</code> | <span className="api-desc">Creates a `StaminaBarVisibility.HandStaminaView` from `staminaStatBars`, `notchesMaterial` and `alphaLerpSpeed`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alpha" /><code>{"private float alpha"}</code> | <span className="api-desc">Backing field for `Alpha`.</span> |
| <Link id="m-alphalerpspeed" /><code>{"private readonly float alphaLerpSpeed"}</code> | <span className="api-desc">How fast alpha changes per second.</span> |
| <Link id="m-handstaminastat" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" handStaminaStat"}</code> | <span className="api-desc">The stamina stat read from the bars, compared with its maximum to decide fading.</span> |
| <Link id="m-notchalpha" /><code>{"private readonly int NotchAlpha"}</code> | <span className="api-desc">Shader property ID for `_AlphaLimit` on the notch material.</span> |
| <Link id="m-notchesmaterial" /><code>{"private readonly Material notchesMaterial"}</code> | <span className="api-desc">Per-hand clone of the notch material.</span> |
| <Link id="m-staminastatbars" /><code>{"private readonly "}<Link to="/mod/game-api/types/alta-stats-effects/statbarbase">{"StatBarBase"}</Link>{"[] staminaStatBars"}</code> | <span className="api-desc">This hand's stamina bars.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-alpha-2" /><code>{"float Alpha { get; set; }"}</code> | <span className="api-desc">Current opacity. Setting it updates the notch material and every stamina bar.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disablestaminabars" /><code>{"void DisableStaminaBars()"}</code> | <span className="api-desc">Disables all of this hand's stamina bars. Called when the player dies.</span> |
| <Link id="m-updatestaminastatbaralpha" /><code>{"void UpdateStaminaStatBarAlpha()"}</code> | <span className="api-desc">Called every LateUpdate: hides the bars when downed, fades them out at full stamina and in otherwise.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hidenotches" /><code>{"private void HideNotches()"}</code> | <span className="api-desc">Sets the notch material's alpha limit to 0.</span> |
| <Link id="m-setupstamina" /><code>{"private void SetupStamina()"}</code> | <span className="api-desc">Initializes each bar at zero alpha, takes its stat as the tracked stamina stat and forces the cloned notch material on it.</span> |

</details>

## Used in

Members of other types that take, return or hold a `HandStaminaView`:

<div className="api-used-in">

[`StaminaBarVisibility.leftStaminaView`](/mod/game-api/types/alta-stats-effects/staminabarvisibility#m-leftstaminaview), [`StaminaBarVisibility.rightStaminaView`](/mod/game-api/types/alta-stats-effects/staminabarvisibility#m-rightstaminaview).

</div>
