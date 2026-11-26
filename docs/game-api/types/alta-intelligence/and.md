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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`Operator`](/game-api/types/alta-intelligence/operator)
- **Attributes** `DebuggerDisplay`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"And("}<Link to="/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" left, "}<Link to="/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" right)"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-resolve" /><code>{"override "}<Link to="/game-api/types/alta-intelligence/result">{"Result"}</Link>{" Resolve("}<Link to="/game-api/types/alta-intelligence/result">{"Result"}</Link>{" a, "}<Link to="/game-api/types/alta-intelligence/result">{"Result"}</Link>{" b)"}</code> | Combines two results if their bindings don't conflict, multiplying weightings. Returns null on conflict. |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Shows the two sides joined with `&`. |
| <Link id="m-fromcompoundpart" /><code>{"protected override "}<Link to="/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" FromCompoundPart("}<Link to="/game-api/types/alta-intelligence/compoundpart">{"CompoundPart"}</Link>{" compoundPart)"}</code> | Rebuilds an `And` from bound parts when variables are substituted. |
