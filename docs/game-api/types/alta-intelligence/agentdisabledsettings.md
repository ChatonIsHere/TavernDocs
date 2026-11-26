---
title: "AgentDisabledSettings"
description: "Settings for ActiveDisabled, an action with no target that does nothing."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AgentDisabledSettings

A **class** in `Root.Township`, `Alta.Intelligence`.

Settings for `ActiveDisabled`, an action with no target that does nothing. Server only.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`ActionComponent`](/game-api/types/alta-intelligence/actioncomponent)
- **Derived types** [`ActiveDisabled`](/game-api/types/alta-intelligence/activedisabled)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AgentDisabledSettings()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | Builds the shared `ActiveDisabled` action for this component, without a target. |
