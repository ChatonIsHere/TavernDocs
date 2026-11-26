---
title: "Or"
description: "Logical OR in the unused Prolog-like logic engine: yields every result of the left side, then every result of the right."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Or

A **class** in `Root.Township`, `Alta.Intelligence`.

Logical OR in the unused Prolog-like logic engine: yields every result of the left side, then every result of the right.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`Operator`](/game-api/types/alta-intelligence/operator)
- **Attributes** `DebuggerDisplay`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Or("}<Link to="/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" left, "}<Link to="/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" right)"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-resolve" /><code>{"override "}<Link to="/game-api/types/alta-intelligence/result">{"Result"}</Link>{" Resolve("}<Link to="/game-api/types/alta-intelligence/result">{"Result"}</Link>{" a, "}<Link to="/game-api/types/alta-intelligence/result">{"Result"}</Link>{" b)"}</code> | Always null. `Or` overrides evaluation so it never combines results. |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Shows the two sides joined with `\|`. |
| <Link id="m-evaluateinternal" /><code>{"protected override IEnumerable<"}<Link to="/game-api/types/alta-intelligence/result">{"Result"}</Link>{"> EvaluateInternal("}<Link to="/game-api/types/alta-intelligence/knowledgeholder">{"KnowledgeHolder"}</Link>{" knowledgeHolder) (iterator)"}</code> | Yields all left results, then all right results. |
| <Link id="m-fromcompoundpart" /><code>{"protected override "}<Link to="/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" FromCompoundPart("}<Link to="/game-api/types/alta-intelligence/compoundpart">{"CompoundPart"}</Link>{" compoundPart)"}</code> | Rebuilds an `Or` from bound parts when variables are substituted. |
