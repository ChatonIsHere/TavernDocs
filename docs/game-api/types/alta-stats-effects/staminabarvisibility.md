---
title: "StaminaBarVisibility"
description: "Client: fades the local player's left and right hand stamina bars in while stamina is below full and out when full."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StaminaBarVisibility

A **class** in `Root.Township`, `Alta.StatSystem`.

Client: fades the local player's left and right hand stamina bars in while stamina is below full and out when full. Hidden while downed.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`HandStaminaView`](/game-api/types/alta-stats-effects/staminabarvisibility-handstaminaview)
- **Documented in** [Stats](/game-api/game-systems/stats)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"StaminaBarVisibility()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alphalerpspeed" /><code>{"private float alphaLerpSpeed"}</code> | Alpha change per second when fading. |
| <Link id="m-leftstamina" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statbarbase">{"StatBarBase"}</Link>{"[] leftStamina"}</code> | Stat bars for the left hand. |
| <Link id="m-leftstaminaview" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/staminabarvisibility-handstaminaview">{"StaminaBarVisibility.HandStaminaView"}</Link>{" leftStaminaView"}</code> | Fade logic for the left hand. |
| <Link id="m-player" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player"}</code> | The player controller whose death hides the bars. |
| <Link id="m-rightstamina" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statbarbase">{"StatBarBase"}</Link>{"[] rightStamina"}</code> | Stat bars for the right hand. |
| <Link id="m-rightstaminaview" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/staminabarvisibility-handstaminaview">{"StaminaBarVisibility.HandStaminaView"}</Link>{" rightStaminaView"}</code> | Fade logic for the right hand. |
| <Link id="m-staminanotchmaterial" /><code>{"private Material staminaNotchMaterial"}</code> | Notch material, cloned per hand and faded with the bars. |

</details>

## Methods

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Initializes now if the local player controller exists, otherwise when it's set. |
| <Link id="m-initialize" /><code>{"private void Initialize("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controller = null)"}</code> | Builds the left and right views and hooks the player's death. |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | Updates both hands' bar alpha. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unhooks the local player and death events. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Sets both views' alpha to 0. |
| <Link id="m-playerdeath" /><code>{"private void PlayerDeath("}<Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" health)"}</code> | Disables both hands' stamina bars. |

</details>
