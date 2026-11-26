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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`RandomTimedActionComponent`](/game-api/types/alta-intelligence/randomtimedactioncomponent)
- **Derived types** [`ActiveAttackDirectionReact`](/game-api/types/alta-intelligence/activeattackdirectionreact)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AgentAttackDirectionReactSettings()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/attackdirectioncoresettings">{"AttackDirectionCoreSettings"}</Link>{" settings"}</code> | Backing field for `Settings`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-settings-2" /><code><Link to="/game-api/types/alta-intelligence/attackdirectioncoresettings">{"AttackDirectionCoreSettings"}</Link>{" Settings { get; }"}</code> | The attack direction settings used by the action. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | Builds the `ActiveAttackDirectionReact` action, using a target. |
