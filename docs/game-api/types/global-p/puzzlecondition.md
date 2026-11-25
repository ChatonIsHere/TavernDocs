---
title: "PuzzleCondition"
description: "Base for one condition of an in-world puzzle."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PuzzleCondition

A **class** in `Root.Township`, no namespace.

Base for one condition of an in-world puzzle. Subclasses set the completion state, which raises an event when it changes.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`Puzzle`](/game-api/types/global-p/puzzle), [`PuzzleConditionsAND`](/game-api/types/global-p/puzzleconditionsand), [`PuzzleLightTarget`](/game-api/types/global-p/puzzlelighttarget), [`TempAbsorber`](/game-api/types/global-t-x/tempabsorber)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PuzzleCondition()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-state" /><code>{"private bool state"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-completionstate" /><code>{"bool CompletionState { get; protected set; }"}</code> | Whether the condition is met. Only subclasses can set it. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-statechanged" /><code>{"event "}<Link to="/game-api/types/global-p/puzzleconditionhandler">{"PuzzleConditionHandler"}</Link>{" StateChanged"}</code> | Raised when the completion state changes. |

## Used in

Members of other types that take, return or hold a `PuzzleCondition`:

[`Puzzle.conditions`](/game-api/types/global-p/puzzle#m-conditions), [`PuzzleConditionHandler.BeginInvoke`](/game-api/types/global-p/puzzleconditionhandler#m-begininvoke), [`PuzzleConditionHandler.Invoke`](/game-api/types/global-p/puzzleconditionhandler#m-invoke), [`PuzzleConditionsAND.ConditionChanged`](/game-api/types/global-p/puzzleconditionsand#m-conditionchanged), [`PuzzleConditionsAND.conditions`](/game-api/types/global-p/puzzleconditionsand#m-conditions), [`PuzzleDoor.condition`](/game-api/types/global-p/puzzledoor#m-condition), [`PuzzleDoor.DoorStateChanged`](/game-api/types/global-p/puzzledoor#m-doorstatechanged).
