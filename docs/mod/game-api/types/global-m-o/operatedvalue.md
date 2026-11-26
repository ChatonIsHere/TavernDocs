---
title: "OperatedValue"
description: "Component holding a float that inspector events can add to, subtract from, multiply, divide or set, firing changed after each change."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OperatedValue

A **class** in `Root.Township`, the global namespace.

Component holding a float that inspector events can add to, subtract from, multiply, divide or set, firing `changed` after each change.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OperatedValue()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-changed" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" changed"}</code> | <span className="api-desc">Event fired with the new value after every operation.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-value" /><code>{"float Value { get; private set; }"}</code> | <span className="api-desc">The current value. Starts at 0 and isn't saved.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add(float amount)"}</code> | <span className="api-desc">Adds the amount to `Value` and fires `changed`.</span> |
| <Link id="m-divide" /><code>{"void Divide(float amount)"}</code> | <span className="api-desc">Meant to divide, but the code subtracts the amount from `Value`, then fires `changed`.</span> |
| <Link id="m-multiply" /><code>{"void Multiply(float amount)"}</code> | <span className="api-desc">Multiplies `Value` by the amount and fires `changed`.</span> |
| <Link id="m-set" /><code>{"void Set(float value)"}</code> | <span className="api-desc">Sets `Value` and fires `changed`.</span> |
| <Link id="m-subtract" /><code>{"void Subtract(float amount)"}</code> | <span className="api-desc">Subtracts the amount from `Value` and fires `changed`.</span> |
