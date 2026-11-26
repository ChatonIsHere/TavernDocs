---
title: "PuzzleConditionTemp"
description: "Base for a simple puzzle condition that is either met or not; subclasses like PuzzleConditionsANDTemp set the state."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PuzzleConditionTemp

A **class** in `Root.Township`, the global namespace.

Base for a simple puzzle condition that is either met or not; subclasses like `PuzzleConditionsANDTemp` set the state.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`PuzzleConditionsANDTemp`](/mod/game-api/types/global-p/puzzleconditionsandtemp)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PuzzleConditionTemp()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-state" /><code>{"private bool state"}</code> | <span className="api-desc">Backing field for `CompletionState`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-completionstate" /><code>{"bool CompletionState { get; protected set; }"}</code> | <span className="api-desc">Whether the condition is met. Setting it to a new value raises `StateChanged`.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-statechanged" /><code>{"event "}<Link to="/mod/game-api/types/global-p/puzzleconditionhandlertemp">{"PuzzleConditionHandlerTemp"}</Link>{" StateChanged"}</code> | <span className="api-desc">Raised when `CompletionState` changes.</span> |

## Used in

Members of other types that take, return or hold a `PuzzleConditionTemp`:

<div className="api-used-in">

[`PuzzleConditionHandlerTemp.BeginInvoke`](/mod/game-api/types/global-p/puzzleconditionhandlertemp#m-begininvoke), [`PuzzleConditionHandlerTemp.Invoke`](/mod/game-api/types/global-p/puzzleconditionhandlertemp#m-invoke), [`PuzzleConditionsANDTemp.ConditionChanged`](/mod/game-api/types/global-p/puzzleconditionsandtemp#m-conditionchanged), [`PuzzleConditionsANDTemp.conditions`](/mod/game-api/types/global-p/puzzleconditionsandtemp#m-conditions), [`TempDoor.condition`](/mod/game-api/types/global-t-x/tempdoor#m-condition), [`TempDoor.StateChanged`](/mod/game-api/types/global-t-x/tempdoor#m-statechanged).

</div>
