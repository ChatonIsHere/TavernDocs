---
title: "Puzzle"
description: "A puzzle condition that becomes complete once all its child conditions are complete, checked every frame."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Puzzle

A **class** in `Root.Township`, no namespace.

A puzzle condition that becomes complete once all its child conditions are complete, checked every frame. Never goes back to incomplete.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`PuzzleCondition`](/game-api/types/global-p/puzzlecondition)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Puzzle()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-conditions" /><code>{"private "}<Link to="/game-api/types/global-p/puzzlecondition">{"PuzzleCondition"}</Link>{"[] conditions"}</code> | Conditions that must all be complete. |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Sets the puzzle complete when every condition is complete. |

</details>
