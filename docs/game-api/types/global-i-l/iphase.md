---
title: "IPhase"
description: "One phase of a trial, run in order by TrialLogic."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPhase

An **interface** in `Root.Township`, no namespace.

One phase of a trial, run in order by `TrialLogic`.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`Phase`](/game-api/types/global-p/phase)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ismarkedcomplete" /><code>{"bool IsMarkedComplete { get; }"}</code> | True once the phase has been marked done. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-markedcompleted" /><code>{"event UnityAction MarkedCompleted"}</code> | Raised when the phase is marked done, which moves the trial on. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begin" /><code>{"void Begin()"}</code> | Starts the phase. |
| <Link id="m-complete" /><code>{"void Complete()"}</code> | Finishes the phase. |
| <Link id="m-resetstate" /><code>{"void ResetState()"}</code> | Puts the phase back to its start state. |
