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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`HandStaminaView`](/mod/game-api/types/alta-stats-effects/staminabarvisibility-handstaminaview)
- **Documented in** [Stats](/mod/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StaminaBarVisibility()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alphalerpspeed" /><code>{"private float alphaLerpSpeed"}</code> | <span className="api-desc">Alpha change per second when fading.</span> |
| <Link id="m-leftstamina" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statbarbase">{"StatBarBase"}</Link>{"[] leftStamina"}</code> | <span className="api-desc">Stat bars for the left hand.</span> |
| <Link id="m-leftstaminaview" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/staminabarvisibility-handstaminaview">{"StaminaBarVisibility.HandStaminaView"}</Link>{" leftStaminaView"}</code> | <span className="api-desc">Fade logic for the left hand.</span> |
| <Link id="m-player" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player"}</code> | <span className="api-desc">The player controller whose death hides the bars.</span> |
| <Link id="m-rightstamina" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statbarbase">{"StatBarBase"}</Link>{"[] rightStamina"}</code> | <span className="api-desc">Stat bars for the right hand.</span> |
| <Link id="m-rightstaminaview" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/staminabarvisibility-handstaminaview">{"StaminaBarVisibility.HandStaminaView"}</Link>{" rightStaminaView"}</code> | <span className="api-desc">Fade logic for the right hand.</span> |
| <Link id="m-staminanotchmaterial" /><code>{"private Material staminaNotchMaterial"}</code> | <span className="api-desc">Notch material, cloned per hand and faded with the bars.</span> |

</details>

## Methods

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Initializes now if the local player controller exists, otherwise when it's set.</span> |
| <Link id="m-initialize" /><code>{"private void Initialize("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controller = null)"}</code> | <span className="api-desc">Builds the left and right views and hooks the player's death.</span> |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | <span className="api-desc">Updates both hands' bar alpha.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unhooks the local player and death events.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Sets both views' alpha to 0.</span> |
| <Link id="m-playerdeath" /><code>{"private void PlayerDeath("}<Link to="/mod/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" health)"}</code> | <span className="api-desc">Disables both hands' stamina bars.</span> |

</details>
