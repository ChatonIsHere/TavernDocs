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
| <Link id="m-ctor" /><code>{"Variable(int value)"}</code> | <span className="api-desc">Creates a `Variable` from `value`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-context" /><code><Link to="/mod/game-api/types/alta-intelligence/iatomdefinition">{"IAtomDefinition"}</Link>{" Context { get; set; }"}</code> | <span className="api-desc">The definition this variable belongs to.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-value" /><code>{"private int Value { get; set; }"}</code> | <span className="api-desc">The variable's number.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-constantinitialize" /><code>{"override void ConstantInitialize("}<Link to="/mod/game-api/types/alta-intelligence/iatomdefinition">{"IAtomDefinition"}</Link>{" definition)"}</code> | <span className="api-desc">Ties the variable to the definition it appears in.</span> |
| <Link id="m-contains" /><code>{"override bool Contains("}<Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{" other)"}</code> | <span className="api-desc">True only for itself.</span> |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> | <span className="api-desc">Equal if the same object, or the same number in the same definition.</span> |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> | <span className="api-desc">Combines the definition's hash and the number.</span> |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">Shows the variable as `%` followed by its number.</span> |
