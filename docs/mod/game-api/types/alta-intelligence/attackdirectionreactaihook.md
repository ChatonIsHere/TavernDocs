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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`AiHook`](/mod/game-api/types/alta-intelligence/aihook)
- **Documented in** [Actions and decisions](/mod/game-api/creatures/actions-and-decisions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AttackDirectionReactAIHook()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-actions" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{", "}<Link to="/mod/game-api/types/alta-intelligence/hookaction">{"HookAction"}</Link>{"> actions"}</code> | <span className="api-desc">The running reaction per creature.</span> |
| <Link id="m-settings" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/attackdirectioncoresettings">{"AttackDirectionCoreSettings"}</Link>{" settings"}</code> | <span className="api-desc">The attack direction settings the reaction uses.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-finishedorcancelled" /><code>{"protected override void FinishedOrCancelled("}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> | <span className="api-desc">Disables and drops the creature's reaction.</span> |
| <Link id="m-used" /><code>{"protected override void Used("}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" active)"}</code> | <span className="api-desc">Starts a new reaction for the creature, disabling any old one first.</span> |
