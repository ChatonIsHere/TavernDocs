---
title: "IPhase"
description: "One phase of a trial, run in order by TrialLogic."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPhase

An **interface** in `Root.Township`, the global namespace.

One phase of a trial, run in order by `TrialLogic`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`Phase`](/mod/game-api/types/global-p/phase)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ismarkedcomplete" /><code>{"bool IsMarkedComplete { get; }"}</code> | <span className="api-desc">True once the phase has been marked done.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-markedcompleted" /><code>{"event UnityAction MarkedCompleted"}</code> | <span className="api-desc">Raised when the phase is marked done, which moves the trial on.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begin" /><code>{"void Begin()"}</code> | <span className="api-desc">Starts the phase.</span> |
| <Link id="m-complete" /><code>{"void Complete()"}</code> | <span className="api-desc">Finishes the phase.</span> |
| <Link id="m-resetstate" /><code>{"void ResetState()"}</code> | <span className="api-desc">Puts the phase back to its start state.</span> |
