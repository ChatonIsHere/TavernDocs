---
title: "AgentEatSettings"
description: "Settings for ActiveEat: grab the target item with the creature's Interactor and destroy it after a delay."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AgentEatSettings

A **class** in `Root.Township`, `Alta.Intelligence`.

Settings for `ActiveEat`: grab the target item with the creature's `Interactor` and destroy it after a delay. Server only; used for creatures that eat dropped food.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`ActionComponent`](/game-api/types/alta-intelligence/actioncomponent)
- **Derived types** [`ActiveEat`](/game-api/types/alta-intelligence/activeeat)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AgentEatSettings()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-delay" /><code>{"private float delay"}</code> | Backing field for `Delay` (default 0.1). |
| <Link id="m-isimmediate" /><code>{"private bool isImmediate"}</code> | Backing field for `IsImmediate`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-delay-2" /><code>{"float Delay { get; }"}</code> | Seconds between grabbing the item and destroying it. |
| <Link id="m-isimmediate-2" /><code>{"bool IsImmediate { get; }"}</code> | If true, the target item is destroyed at once without being grabbed, and the action then cancels itself. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | Builds the shared `ActiveEat` action for agents that implement `IInteractAgent`, using a target. |
