---
title: "And"
description: "Logical AND in the unused Prolog-like logic engine (Predicate, KnowledgeHolder)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# And

A **class** in `Root.Township`, `Alta.Intelligence`.

Logical AND in the unused Prolog-like logic engine (`Predicate`, `KnowledgeHolder`). Yields every pair of left and right results whose bindings agree, with weightings multiplied.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`Operator`](/mod/game-api/types/alta-intelligence/operator)
- **Attributes** `DebuggerDisplay`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"And("}<Link to="/mod/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" left, "}<Link to="/mod/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" right)"}</code> | Creates an `And` from `left` and `right`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-resolve" /><code>{"override "}<Link to="/mod/game-api/types/alta-intelligence/result">{"Result"}</Link>{" Resolve("}<Link to="/mod/game-api/types/alta-intelligence/result">{"Result"}</Link>{" a, "}<Link to="/mod/game-api/types/alta-intelligence/result">{"Result"}</Link>{" b)"}</code> | Combines two results if their bindings don't conflict, multiplying weightings. Returns null on conflict. |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Shows the two sides joined with `&`. |
| <Link id="m-fromcompoundpart" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" FromCompoundPart("}<Link to="/mod/game-api/types/alta-intelligence/compoundpart">{"CompoundPart"}</Link>{" compoundPart)"}</code> | Rebuilds an `And` from bound parts when variables are substituted. |
