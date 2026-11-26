---
title: "PuzzleConditionsAND"
description: "A puzzle condition that is complete while all its child conditions are complete, kept up to date through their change events."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PuzzleConditionsAND

A **class** in `Root.Township`, the global namespace.

A puzzle condition that is complete while all its child conditions are complete, kept up to date through their change events.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`PuzzleCondition`](/mod/game-api/types/global-p/puzzlecondition)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PuzzleConditionsAND()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-conditions" /><code>{"private "}<Link to="/mod/game-api/types/global-p/puzzlecondition">{"PuzzleCondition"}</Link>{"[] conditions"}</code> | Child conditions that must all be complete. |
| <Link id="m-falsecount" /><code>{"private int falseCount"}</code> | Number of child conditions not yet complete. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Subscribes to every child condition and counts how many are incomplete. |
| <Link id="m-conditionchanged" /><code>{"private void ConditionChanged("}<Link to="/mod/game-api/types/global-p/puzzlecondition">{"PuzzleCondition"}</Link>{" condition)"}</code> | Updates the incomplete count and the completion state when a child changes. |

</details>
