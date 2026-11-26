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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`ActionComponent`](/game-api/types/alta-intelligence/actioncomponent)
- **Derived types** [`ActiveDelayEnterSet`](/game-api/types/alta-intelligence/activedelayenterset)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AgentDelayEnterSetSettings()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-exitto" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" exitTo"}</code> | Backing field for `ExitTo`. |
| <Link id="m-maximumduration" /><code>{"private float maximumDuration"}</code> | Longest wait. |
| <Link id="m-minimumduration" /><code>{"private float minimumDuration"}</code> | Shortest wait. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-duration" /><code>{"float Duration { get; }"}</code> | A new random time between the minimum and maximum each time it is read. |
| <Link id="m-exitto-2" /><code><Link to="/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" ExitTo { get; }"}</code> | Action set switched to when the wait finishes, if set. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | Builds the `ActiveDelayEnterSet` action, using a target. |
