---
title: "IHandStaminaManager"
description: "Stamina for one climbing hand, as used by ClimbingHandler.LeftStamina and RightStamina."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IHandStaminaManager

An **interface** in `Root.Township`, no namespace.

Stamina for one climbing hand, as used by `ClimbingHandler.LeftStamina` and `RightStamina`. Implemented by `HandStaminaManager` and `FakeStaminaManager`.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`FakeStaminaManager`](/game-api/types/game-other-namespaces/fakestaminamanager), [`HandStaminaManager`](/game-api/types/game-other-namespaces/handstaminamanager)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hasstamina" /><code>{"bool HasStamina { get; }"}</code> | Whether the hand has stamina left; in `HandStaminaManager`, above 0.01. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-process" /><code>{"void Process()"}</code> | Updates the hand's stamina for this step; `HandStaminaManager` drains it by grip distance while climbing. |

## Used in

Members of other types that take, return or hold a `IHandStaminaManager`:

[`ClimbingHandler.LeftStamina`](/game-api/types/game-other-namespaces/climbinghandler#m-leftstamina), [`ClimbingHandler.RightStamina`](/game-api/types/game-other-namespaces/climbinghandler#m-rightstamina).
