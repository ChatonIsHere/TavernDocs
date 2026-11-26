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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`Operator`](/mod/game-api/types/alta-intelligence/operator)
- **Attributes** `DebuggerDisplay`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Or("}<Link to="/mod/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" left, "}<Link to="/mod/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" right)"}</code> | <span className="api-desc">Creates an `Or` from `left` and `right`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-resolve" /><code>{"override "}<Link to="/mod/game-api/types/alta-intelligence/result">{"Result"}</Link>{" Resolve("}<Link to="/mod/game-api/types/alta-intelligence/result">{"Result"}</Link>{" a, "}<Link to="/mod/game-api/types/alta-intelligence/result">{"Result"}</Link>{" b)"}</code> | <span className="api-desc">Always null. `Or` overrides evaluation so it never combines results.</span> |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">Shows the two sides joined with `\|`.</span> |
| <Link id="m-evaluateinternal" /><code>{"protected override IEnumerable<"}<Link to="/mod/game-api/types/alta-intelligence/result">{"Result"}</Link>{"> EvaluateInternal("}<Link to="/mod/game-api/types/alta-intelligence/knowledgeholder">{"KnowledgeHolder"}</Link>{" knowledgeHolder) (iterator)"}</code> | <span className="api-desc">Yields all left results, then all right results.</span> |
| <Link id="m-fromcompoundpart" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" FromCompoundPart("}<Link to="/mod/game-api/types/alta-intelligence/compoundpart">{"CompoundPart"}</Link>{" compoundPart)"}</code> | <span className="api-desc">Rebuilds an `Or` from bound parts when variables are substituted.</span> |
