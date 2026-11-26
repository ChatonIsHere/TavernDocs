---
title: "OperatedValue"
description: "Component holding a float that inspector events can add to, subtract from, multiply, divide or set, firing changed after each change."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OperatedValue

A **class** in `Root.Township`, no namespace.

Component holding a float that inspector events can add to, subtract from, multiply, divide or set, firing `changed` after each change.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OperatedValue()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-changed" /><code>{"private "}<Link to="/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" changed"}</code> | Event fired with the new value after every operation. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-value" /><code>{"float Value { get; private set; }"}</code> | The current value. Starts at 0 and isn't saved. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add(float amount)"}</code> | Adds the amount to `Value` and fires `changed`. |
| <Link id="m-divide" /><code>{"void Divide(float amount)"}</code> | Meant to divide, but the code subtracts the amount from `Value`, then fires `changed`. |
| <Link id="m-multiply" /><code>{"void Multiply(float amount)"}</code> | Multiplies `Value` by the amount and fires `changed`. |
| <Link id="m-set" /><code>{"void Set(float value)"}</code> | Sets `Value` and fires `changed`. |
| <Link id="m-subtract" /><code>{"void Subtract(float amount)"}</code> | Subtracts the amount from `Value` and fires `changed`. |
