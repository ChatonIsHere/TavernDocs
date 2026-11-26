---
title: "PuzzleConditionTemp"
description: "Base for a simple puzzle condition that is either met or not; subclasses like PuzzleConditionsANDTemp set the state."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PuzzleConditionTemp

A **class** in `Root.Township`, no namespace.

Base for a simple puzzle condition that is either met or not; subclasses like `PuzzleConditionsANDTemp` set the state.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`PuzzleConditionsANDTemp`](/game-api/types/global-p/puzzleconditionsandtemp)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PuzzleConditionTemp()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

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
| <Link id="m-completionstate" /><code>{"bool CompletionState { get; protected set; }"}</code> | Whether the condition is met. Setting it to a new value raises `StateChanged`. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-statechanged" /><code>{"event "}<Link to="/game-api/types/global-p/puzzleconditionhandlertemp">{"PuzzleConditionHandlerTemp"}</Link>{" StateChanged"}</code> | Raised when `CompletionState` changes. |

## Used in

Members of other types that take, return or hold a `PuzzleConditionTemp`:

[`PuzzleConditionHandlerTemp.BeginInvoke`](/game-api/types/global-p/puzzleconditionhandlertemp#m-begininvoke), [`PuzzleConditionHandlerTemp.Invoke`](/game-api/types/global-p/puzzleconditionhandlertemp#m-invoke), [`PuzzleConditionsANDTemp.ConditionChanged`](/game-api/types/global-p/puzzleconditionsandtemp#m-conditionchanged), [`PuzzleConditionsANDTemp.conditions`](/game-api/types/global-p/puzzleconditionsandtemp#m-conditions), [`TempDoor.condition`](/game-api/types/global-t-x/tempdoor#m-condition), [`TempDoor.StateChanged`](/game-api/types/global-t-x/tempdoor#m-statechanged).
