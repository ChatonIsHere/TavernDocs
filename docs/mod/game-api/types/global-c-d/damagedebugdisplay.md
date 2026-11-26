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
| <Link id="m-ctor" /><code>{"DamageDebugDisplay()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-automaticcleancooldown" /><code>{"private float automaticCleanCooldown"}</code> | Seconds of no new attacks before it clears itself; -1 turns that off. |
| <Link id="m-basetext" /><code>{"private const string baseText"}</code> | Header line naming the columns. |
| <Link id="m-btnclean" /><code>{"private bool btnClean"}</code> | Inspector button that calls `Clean`. |
| <Link id="m-holderpairs" /><code>{"private static Dictionary<"}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{", "}<Link to="/mod/game-api/types/global-c-d/damagedebugdisplay-damageholder">{"DamageDebugDisplay.DamageHolder"}</Link>{"> holderPairs"}</code> | Stored attacks for each player. |
| <Link id="m-playercontroller" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController"}</code> | The player this display belongs to. |
| <Link id="m-targetclean" /><code>{"private float targetClean"}</code> | Time at which it will clear itself. |
| <Link id="m-text" /><code>{"private Text text"}</code> | The UI `Text` drawn to. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addattack" /><code>{"static void AddAttack("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController, float damage, float followValue, float followMultiplier, float directionValue, float directionMultiplier, float weight, float weightPenaulty, "}<Link to="/mod/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" dmgType)"}</code> | Records an attack's damage breakdown for a player, keeping the last three. Called from damage code. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Gets the text and player controller and sets the header line. |
| <Link id="m-clean" /><code>{"private void Clean()"}</code> | Clears the stored attacks and resets the text to the header. |
| <Link id="m-clean-2" /><code>{"private void Clean("}<Link to="/mod/game-api/types/global-c-d/damagedebugdisplay-damageholder">{"DamageDebugDisplay.DamageHolder"}</Link>{" holder)"}</code> | Clears the stored attacks and resets the text to the header. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Hooks the left controller's `DisplayFPS` action and starts hidden. |
| <Link id="m-togglefpsdisplay" /><code>{"private void ToggleFPSDisplay("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | Shows or hides the display when Shift is held and the user has `debug_features`. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Refreshes the text when new attacks arrive, and clears it after `automaticCleanCooldown` if that is above 0. |

</details>
