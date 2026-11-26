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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`ActionComponent`](/mod/game-api/types/alta-intelligence/actioncomponent)
- **Derived types** [`ActiveEat`](/mod/game-api/types/alta-intelligence/activeeat)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AgentEatSettings()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-delay" /><code>{"private float delay"}</code> | <span className="api-desc">Backing field for `Delay` (default 0.1).</span> |
| <Link id="m-isimmediate" /><code>{"private bool isImmediate"}</code> | <span className="api-desc">Backing field for `IsImmediate`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-delay-2" /><code>{"float Delay { get; }"}</code> | <span className="api-desc">Seconds between grabbing the item and destroying it.</span> |
| <Link id="m-isimmediate-2" /><code>{"bool IsImmediate { get; }"}</code> | <span className="api-desc">If true, the target item is destroyed at once without being grabbed, and the action then cancels itself.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | <span className="api-desc">Builds the shared `ActiveEat` action for agents that implement `IInteractAgent`, using a target.</span> |
