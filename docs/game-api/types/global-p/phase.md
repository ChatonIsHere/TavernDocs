---
title: "Phase"
description: "class Phase in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Phase

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`, [`IPhase`](/game-api/types/global-i-l/iphase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Phase()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-details" /><code>{"string details"}</code> |  |
| <Link id="m-active" /><code>{"private "}<Link to="/game-api/types/alta-items/logicboolsender">{"LogicBoolSender"}</Link>{" active"}</code> |  |
| <Link id="m-complete" /><code>{"private "}<Link to="/game-api/types/alta-items/logicboolsender">{"LogicBoolSender"}</Link>{" complete"}</code> |  |
| <Link id="m-markcomplete" /><code>{"private "}<Link to="/game-api/types/alta-items/logicboolreceiver">{"LogicBoolReceiver"}</Link>{" markComplete"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ismarkedcomplete" /><code>{"bool IsMarkedComplete { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-markedcompleted" /><code>{"event UnityAction MarkedCompleted"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begin" /><code>{"private void IPhase.Begin()"}</code> |  |
| <Link id="m-complete-2" /><code>{"private void IPhase.Complete()"}</code> |  |
| <Link id="m-resetstate" /><code>{"private void IPhase.ResetState()"}</code> |  |

## Used in

Members of other types that take, return or hold a `Phase`:

[`TrialLogic.phases`](/game-api/types/global-t-x/triallogic#m-phases).
