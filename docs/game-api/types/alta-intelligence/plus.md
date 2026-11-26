---
title: "Plus"
description: "A combining operator in the unused Prolog-like logic engine."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Plus

A **class** in `Root.Township`, `Alta.Intelligence`.

A combining operator in the unused Prolog-like logic engine. It behaves exactly like `And`: agreeing results with weightings multiplied.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`Operator`](/game-api/types/alta-intelligence/operator)
- **Attributes** `DebuggerDisplay`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Plus("}<Link to="/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" left, "}<Link to="/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" right)"}</code> | Creates a `Plus` from `left` and `right`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-resolve" /><code>{"override "}<Link to="/game-api/types/alta-intelligence/result">{"Result"}</Link>{" Resolve("}<Link to="/game-api/types/alta-intelligence/result">{"Result"}</Link>{" a, "}<Link to="/game-api/types/alta-intelligence/result">{"Result"}</Link>{" b)"}</code> | Combines two results if their bindings don't conflict, multiplying weightings. Returns null on conflict. |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Shows the two sides joined with `+`. |
| <Link id="m-fromcompoundpart" /><code>{"protected override "}<Link to="/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" FromCompoundPart("}<Link to="/game-api/types/alta-intelligence/compoundpart">{"CompoundPart"}</Link>{" compoundPart)"}</code> | Rebuilds a `Plus` from bound parts when variables are substituted. |
