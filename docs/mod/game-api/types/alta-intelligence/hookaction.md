---
title: "HookAction"
description: "Internal per-agent runner for an attack direction reaction hook."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HookAction

A **internal struct** in `Root.Township`, `Alta.Intelligence`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Internal per-agent runner for an attack direction reaction hook. Updates its `AttackDirectionCore` each LateUpdate while the agent has a target.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HookAction("}<Link to="/mod/game-api/types/alta-intelligence/attackdirectioncoresettings">{"AttackDirectionCoreSettings"}</Link>{" settings, "}<Link to="/mod/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" topic)"}</code> | Creates a `HookAction` from `settings` and `topic`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-core" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/attackdirectioncore">{"AttackDirectionCore"}</Link>{" core"}</code> | The attack direction core made from the settings for this agent. |
| <Link id="m-topic" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" topic"}</code> | The agent this runner belongs to. |
| <Link id="m-updateaction" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateAction"}</code> | Handle for the registered LateUpdate method. |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | Shared LateUpdate module all these runners register with. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"void Disable()"}</code> | Stops the update and disables the core for this agent. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Updates the core while the agent has a target, and deregisters if the entity is being destroyed. |

</details>

## Used in

Members of other types that take, return or hold a `HookAction`:

[`AttackDirectionReactAIHook.actions`](/mod/game-api/types/alta-intelligence/attackdirectionreactaihook#m-actions).
