---
title: "AgentDelayEnterSetSettings"
description: "Settings for ActiveDelayEnterSet: wait a random time, then switch the agent to another action set."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AgentDelayEnterSetSettings

A **class** in `Root.Township`, `Alta.Intelligence`.

Settings for `ActiveDelayEnterSet`: wait a random time, then switch the agent to another action set.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`ActionComponent`](/mod/game-api/types/alta-intelligence/actioncomponent)
- **Derived types** [`ActiveDelayEnterSet`](/mod/game-api/types/alta-intelligence/activedelayenterset)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AgentDelayEnterSetSettings()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-exitto" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" exitTo"}</code> | <span className="api-desc">Backing field for `ExitTo`.</span> |
| <Link id="m-maximumduration" /><code>{"private float maximumDuration"}</code> | <span className="api-desc">Longest wait.</span> |
| <Link id="m-minimumduration" /><code>{"private float minimumDuration"}</code> | <span className="api-desc">Shortest wait.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-duration" /><code>{"float Duration { get; }"}</code> | <span className="api-desc">A new random time between the minimum and maximum each time it is read.</span> |
| <Link id="m-exitto-2" /><code><Link to="/mod/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" ExitTo { get; }"}</code> | <span className="api-desc">Action set switched to when the wait finishes, if set.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | <span className="api-desc">Builds the `ActiveDelayEnterSet` action, using a target.</span> |
