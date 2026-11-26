---
title: "Phase"
description: "One stage of a phased sequence, driven through the IPhase interface and wired to logic bool senders and a receiver."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Phase

A **class** in `Root.Township`, the global namespace.

One stage of a phased sequence, driven through the `IPhase` interface and wired to logic bool senders and a receiver.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`, [`IPhase`](/mod/game-api/types/global-i-l/iphase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Phase()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-details" /><code>{"string details"}</code> | <span className="api-desc">Designer notes about the phase.</span> |

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-active" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/logicboolsender">{"LogicBoolSender"}</Link>{" active"}</code> | <span className="api-desc">Logic output that is on while the phase is running.</span> |
| <Link id="m-complete" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/logicboolsender">{"LogicBoolSender"}</Link>{" complete"}</code> | <span className="api-desc">Logic output that turns on when the phase is completed.</span> |
| <Link id="m-markcomplete" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/logicboolreceiver">{"LogicBoolReceiver"}</Link>{" markComplete"}</code> | <span className="api-desc">Logic input that marks the phase as done.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ismarkedcomplete" /><code>{"bool IsMarkedComplete { get; }"}</code> | <span className="api-desc">True while the `markComplete` logic input is on.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-markedcompleted" /><code>{"event UnityAction MarkedCompleted"}</code> | <span className="api-desc">Fires when the `markComplete` logic input turns on.</span> |

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-begin" /><code>{"private void IPhase.Begin()"}</code> | <span className="api-desc">Turns the `active` logic output on.</span> |
| <Link id="m-complete-2" /><code>{"private void IPhase.Complete()"}</code> | <span className="api-desc">Turns `active` off and the `complete` output on.</span> |
| <Link id="m-resetstate" /><code>{"private void IPhase.ResetState()"}</code> | <span className="api-desc">Turns both the `active` and `complete` outputs off.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Phase`:

<div className="api-used-in">

[`TrialLogic.phases`](/mod/game-api/types/global-t-x/triallogic#m-phases).

</div>
