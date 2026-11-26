---
title: "PuzzleCondition"
description: "Base for one condition of an in-world puzzle."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PuzzleCondition

A **class** in `Root.Township`, the global namespace.

Base for one condition of an in-world puzzle. Subclasses set the completion state, which raises an event when it changes.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`Puzzle`](/mod/game-api/types/global-p/puzzle), [`PuzzleConditionsAND`](/mod/game-api/types/global-p/puzzleconditionsand), [`PuzzleLightTarget`](/mod/game-api/types/global-p/puzzlelighttarget), [`TempAbsorber`](/mod/game-api/types/global-t-x/tempabsorber)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PuzzleCondition()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-state" /><code>{"private bool state"}</code> | Backing field for `CompletionState`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-completionstate" /><code>{"bool CompletionState { get; protected set; }"}</code> | Whether the condition is met. Only subclasses can set it. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-statechanged" /><code>{"event "}<Link to="/mod/game-api/types/global-p/puzzleconditionhandler">{"PuzzleConditionHandler"}</Link>{" StateChanged"}</code> | Raised when the completion state changes. |

## Used in

Members of other types that take, return or hold a `PuzzleCondition`:

[`Puzzle.conditions`](/mod/game-api/types/global-p/puzzle#m-conditions), [`PuzzleConditionHandler.BeginInvoke`](/mod/game-api/types/global-p/puzzleconditionhandler#m-begininvoke), [`PuzzleConditionHandler.Invoke`](/mod/game-api/types/global-p/puzzleconditionhandler#m-invoke), [`PuzzleConditionsAND.ConditionChanged`](/mod/game-api/types/global-p/puzzleconditionsand#m-conditionchanged), [`PuzzleConditionsAND.conditions`](/mod/game-api/types/global-p/puzzleconditionsand#m-conditions), [`PuzzleDoor.condition`](/mod/game-api/types/global-p/puzzledoor#m-condition), [`PuzzleDoor.DoorStateChanged`](/mod/game-api/types/global-p/puzzledoor#m-doorstatechanged).
