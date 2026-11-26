---
title: "DamageDebugDisplay"
description: "Client debug text on the player that shows the last three attacks with their damage multipliers (distance, direction, weight)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DamageDebugDisplay

A **class** in `Root.Township`, the global namespace.

Client debug text on the player that shows the last three attacks with their damage multipliers (distance, direction, weight). Toggled with Shift plus the FPS display action, for users with the `debug_features` permission.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`DamageHolder`](/mod/game-api/types/global-c-d/damagedebugdisplay-damageholder)
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DamageDebugDisplay()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-automaticcleancooldown" /><code>{"private float automaticCleanCooldown"}</code> | <span className="api-desc">Seconds of no new attacks before it clears itself; -1 turns that off.</span> |
| <Link id="m-basetext" /><code>{"private const string baseText"}</code> | <span className="api-desc">Header line naming the columns.</span> |
| <Link id="m-btnclean" /><code>{"private bool btnClean"}</code> | <span className="api-desc">Inspector button that calls `Clean`.</span> |
| <Link id="m-holderpairs" /><code>{"private static Dictionary<"}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{", "}<Link to="/mod/game-api/types/global-c-d/damagedebugdisplay-damageholder">{"DamageDebugDisplay.DamageHolder"}</Link>{"> holderPairs"}</code> | <span className="api-desc">Stored attacks for each player.</span> |
| <Link id="m-playercontroller" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController"}</code> | <span className="api-desc">The player this display belongs to.</span> |
| <Link id="m-targetclean" /><code>{"private float targetClean"}</code> | <span className="api-desc">Time at which it will clear itself.</span> |
| <Link id="m-text" /><code>{"private Text text"}</code> | <span className="api-desc">The UI `Text` drawn to.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addattack" /><code>{"static void AddAttack("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController, float damage, float followValue, float followMultiplier, float directionValue, float directionMultiplier, float weight, float weightPenaulty, "}<Link to="/mod/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" dmgType)"}</code> | <span className="api-desc">Records an attack's damage breakdown for a player, keeping the last three. Called from damage code.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Gets the text and player controller and sets the header line.</span> |
| <Link id="m-clean" /><code>{"private void Clean()"}</code> | <span className="api-desc">Clears the stored attacks and resets the text to the header.</span> |
| <Link id="m-clean-2" /><code>{"private void Clean("}<Link to="/mod/game-api/types/global-c-d/damagedebugdisplay-damageholder">{"DamageDebugDisplay.DamageHolder"}</Link>{" holder)"}</code> | <span className="api-desc">Clears the stored attacks and resets the text to the header.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Hooks the left controller's `DisplayFPS` action and starts hidden.</span> |
| <Link id="m-togglefpsdisplay" /><code>{"private void ToggleFPSDisplay("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | <span className="api-desc">Shows or hides the display when Shift is held and the user has `debug_features`.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Refreshes the text when new attacks arrive, and clears it after `automaticCleanCooldown` if that is above 0.</span> |

</details>
