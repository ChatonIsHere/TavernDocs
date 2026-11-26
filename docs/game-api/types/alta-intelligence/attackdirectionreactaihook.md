---
title: "AttackDirectionReactAIHook"
description: "AI hook that runs an attack direction reaction (from AttackDirectionCoreSettings) on the creature for as long as the action runs."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AttackDirectionReactAIHook

A **class** in `Root.Township`, `Alta.Intelligence`.

AI hook that runs an attack direction reaction (from `AttackDirectionCoreSettings`) on the creature for as long as the action runs.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`AiHook`](/game-api/types/alta-intelligence/aihook)
- **Documented in** [Actions and decisions](/game-api/creatures/actions-and-decisions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AttackDirectionReactAIHook()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-actions" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/hookaction">{"HookAction"}</Link>{"> actions"}</code> | The running reaction per creature. |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/attackdirectioncoresettings">{"AttackDirectionCoreSettings"}</Link>{" settings"}</code> | The attack direction settings the reaction uses. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-finishedorcancelled" /><code>{"protected override void FinishedOrCancelled("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> | Disables and drops the creature's reaction. |
| <Link id="m-used" /><code>{"protected override void Used("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" active)"}</code> | Starts a new reaction for the creature, disabling any old one first. |
