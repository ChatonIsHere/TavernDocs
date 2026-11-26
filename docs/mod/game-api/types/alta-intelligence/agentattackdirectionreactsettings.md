---
title: "AgentAttackDirectionReactSettings"
description: "Action component that runs ActiveAttackDirectionReact on a random timer, using an AttackDirectionCoreSettings asset."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AgentAttackDirectionReactSettings

A **class** in `Root.Township`, `Alta.Intelligence`.

Action component that runs `ActiveAttackDirectionReact` on a random timer, using an `AttackDirectionCoreSettings` asset.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`RandomTimedActionComponent`](/mod/game-api/types/alta-intelligence/randomtimedactioncomponent)
- **Derived types** [`ActiveAttackDirectionReact`](/mod/game-api/types/alta-intelligence/activeattackdirectionreact)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AgentAttackDirectionReactSettings()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-settings" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/attackdirectioncoresettings">{"AttackDirectionCoreSettings"}</Link>{" settings"}</code> | <span className="api-desc">Backing field for `Settings`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-settings-2" /><code><Link to="/mod/game-api/types/alta-intelligence/attackdirectioncoresettings">{"AttackDirectionCoreSettings"}</Link>{" Settings { get; }"}</code> | <span className="api-desc">The attack direction settings used by the action.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | <span className="api-desc">Builds the `ActiveAttackDirectionReact` action, using a target.</span> |
