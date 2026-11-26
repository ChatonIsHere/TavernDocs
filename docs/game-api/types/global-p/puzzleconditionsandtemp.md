---
title: "PuzzleConditionsANDTemp"
description: "Same as PuzzleConditionsAND but for PuzzleConditionTemp conditions."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PuzzleConditionsANDTemp

A **class** in `Root.Township`, no namespace.

Same as `PuzzleConditionsAND` but for `PuzzleConditionTemp` conditions.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`PuzzleConditionTemp`](/game-api/types/global-p/puzzleconditiontemp)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PuzzleConditionsANDTemp()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-conditions" /><code>{"private "}<Link to="/game-api/types/global-p/puzzleconditiontemp">{"PuzzleConditionTemp"}</Link>{"[] conditions"}</code> | Child conditions that must all be complete. |
| <Link id="m-falsecount" /><code>{"private int falseCount"}</code> | Number of child conditions not yet complete. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Subscribes to every child condition and counts how many are incomplete. |
| <Link id="m-conditionchanged" /><code>{"private void ConditionChanged("}<Link to="/game-api/types/global-p/puzzleconditiontemp">{"PuzzleConditionTemp"}</Link>{" condition)"}</code> | Updates the incomplete count and the completion state when a child changes. |

</details>
