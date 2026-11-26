---
title: "Puzzle"
description: "A puzzle condition that becomes complete once all its child conditions are complete, checked every frame."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Puzzle

A **class** in `Root.Township`, the global namespace.

A puzzle condition that becomes complete once all its child conditions are complete, checked every frame. Never goes back to incomplete.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`PuzzleCondition`](/mod/game-api/types/global-p/puzzlecondition)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Puzzle()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-conditions" /><code>{"private "}<Link to="/mod/game-api/types/global-p/puzzlecondition">{"PuzzleCondition"}</Link>{"[] conditions"}</code> | <span className="api-desc">Conditions that must all be complete.</span> |

</details>

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Sets the puzzle complete when every condition is complete.</span> |

</details>
