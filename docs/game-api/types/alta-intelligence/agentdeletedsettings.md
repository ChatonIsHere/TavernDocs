---
title: "AgentDeletedSettings"
description: "Settings for ActiveDeleted, an action with no target that destroys the creature's whole entity."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AgentDeletedSettings

A **class** in `Root.Township`, `Alta.Intelligence`.

Settings for `ActiveDeleted`, an action with no target that destroys the creature's whole entity. Server only; put it in an action set to let a creature despawn itself.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`ActionComponent`](/game-api/types/alta-intelligence/actioncomponent)
- **Derived types** [`ActiveDeleted`](/game-api/types/alta-intelligence/activedeleted)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AgentDeletedSettings()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | Builds the shared `ActiveDeleted` action for this component, without a target. |
