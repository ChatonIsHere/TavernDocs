---
title: "Phase"
description: "One stage of a phased sequence, driven through the IPhase interface and wired to logic bool senders and a receiver."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Phase

A **class** in `Root.Township`, no namespace.

One stage of a phased sequence, driven through the `IPhase` interface and wired to logic bool senders and a receiver.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`, [`IPhase`](/game-api/types/global-i-l/iphase)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Phase()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-details" /><code>{"string details"}</code> | Designer notes about the phase. |

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-active" /><code>{"private "}<Link to="/game-api/types/alta-items/logicboolsender">{"LogicBoolSender"}</Link>{" active"}</code> | Logic output that is on while the phase is running. |
| <Link id="m-complete" /><code>{"private "}<Link to="/game-api/types/alta-items/logicboolsender">{"LogicBoolSender"}</Link>{" complete"}</code> | Logic output that turns on when the phase is completed. |
| <Link id="m-markcomplete" /><code>{"private "}<Link to="/game-api/types/alta-items/logicboolreceiver">{"LogicBoolReceiver"}</Link>{" markComplete"}</code> | Logic input that marks the phase as done. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ismarkedcomplete" /><code>{"bool IsMarkedComplete { get; }"}</code> | True while the `markComplete` logic input is on. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-markedcompleted" /><code>{"event UnityAction MarkedCompleted"}</code> | Fires when the `markComplete` logic input turns on. |

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-begin" /><code>{"private void IPhase.Begin()"}</code> | Turns the `active` logic output on. |
| <Link id="m-complete-2" /><code>{"private void IPhase.Complete()"}</code> | Turns `active` off and the `complete` output on. |
| <Link id="m-resetstate" /><code>{"private void IPhase.ResetState()"}</code> | Turns both the `active` and `complete` outputs off. |

</details>

## Used in

Members of other types that take, return or hold a `Phase`:

[`TrialLogic.phases`](/game-api/types/global-t-x/triallogic#m-phases).
