---
title: "Variable"
description: "A numbered logic variable in the unused Prolog-like logic engine."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Variable

A **class** in `Root.Township`, `Alta.Intelligence`.

A numbered logic variable in the unused Prolog-like logic engine. Two variables are equal when they share a number and belong to the same definition.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`Term`](/mod/game-api/types/alta-intelligence/term)
- **Derived types** [`Variable<T>`](/mod/game-api/types/alta-intelligence/variable-t)
- **Attributes** `DebuggerDisplay`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Variable(int value)"}</code> | Creates a `Variable` from `value`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-context" /><code><Link to="/mod/game-api/types/alta-intelligence/iatomdefinition">{"IAtomDefinition"}</Link>{" Context { get; set; }"}</code> | The definition this variable belongs to. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-value" /><code>{"private int Value { get; set; }"}</code> | The variable's number. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-constantinitialize" /><code>{"override void ConstantInitialize("}<Link to="/mod/game-api/types/alta-intelligence/iatomdefinition">{"IAtomDefinition"}</Link>{" definition)"}</code> | Ties the variable to the definition it appears in. |
| <Link id="m-contains" /><code>{"override bool Contains("}<Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{" other)"}</code> | True only for itself. |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> | Equal if the same object, or the same number in the same definition. |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> | Combines the definition's hash and the number. |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Shows the variable as `%` followed by its number. |
