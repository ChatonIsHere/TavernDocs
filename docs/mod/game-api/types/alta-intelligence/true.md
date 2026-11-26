---
title: "True"
description: "The always-true goal in the unused Prolog-like logic engine."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# True

A **class** in `Root.Township`, `Alta.Intelligence`.

The always-true goal in the unused Prolog-like logic engine. A definition with no goal uses it, making it a plain fact.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`Predicate`](/mod/game-api/types/alta-intelligence/predicate)
- **Attributes** `DebuggerDisplay`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"True()"}</code> | <span className="api-desc">Creates a `True` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">Returns "True".</span> |
| <Link id="m-evaluateinternal" /><code>{"protected override IEnumerable<"}<Link to="/mod/game-api/types/alta-intelligence/result">{"Result"}</Link>{"> EvaluateInternal("}<Link to="/mod/game-api/types/alta-intelligence/knowledgeholder">{"KnowledgeHolder"}</Link>{" knowledgeHolder) (iterator)"}</code> | <span className="api-desc">Yields a single empty result with weighting 1.</span> |
| <Link id="m-fromcompoundpart" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" FromCompoundPart("}<Link to="/mod/game-api/types/alta-intelligence/compoundpart">{"CompoundPart"}</Link>{" compoundPart)"}</code> | <span className="api-desc">Returns a new `True`.</span> |
