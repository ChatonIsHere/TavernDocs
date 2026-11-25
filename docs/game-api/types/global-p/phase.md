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

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Phase()"}</code> |

## Fields

| Member |
| --- |
| <Link id="m-details" /><code>{"string details"}</code> |

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-active" /><code>{"private "}<Link to="/game-api/types/alta-items/logicboolsender">{"LogicBoolSender"}</Link>{" active"}</code> |
| <Link id="m-complete" /><code>{"private "}<Link to="/game-api/types/alta-items/logicboolsender">{"LogicBoolSender"}</Link>{" complete"}</code> |
| <Link id="m-markcomplete" /><code>{"private "}<Link to="/game-api/types/alta-items/logicboolreceiver">{"LogicBoolReceiver"}</Link>{" markComplete"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-ismarkedcomplete" /><code>{"bool IsMarkedComplete { get; }"}</code> |

## Events

| Member |
| --- |
| <Link id="m-markedcompleted" /><code>{"event UnityAction MarkedCompleted"}</code> |

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-begin" /><code>{"private void IPhase.Begin()"}</code> |
| <Link id="m-complete-2" /><code>{"private void IPhase.Complete()"}</code> |
| <Link id="m-resetstate" /><code>{"private void IPhase.ResetState()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `Phase`:

[`TrialLogic.phases`](/game-api/types/global-t-x/triallogic#m-phases).
