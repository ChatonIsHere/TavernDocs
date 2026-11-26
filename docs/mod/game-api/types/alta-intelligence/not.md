---
title: "Not"
description: "Logical NOT in the unused Prolog-like logic engine, with weightings: a half-true goal gives a half-true result."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Not

A **class** in `Root.Township`, `Alta.Intelligence`.

Logical NOT in the unused Prolog-like logic engine, with weightings: a half-true goal gives a half-true result.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`Predicate`](/mod/game-api/types/alta-intelligence/predicate)
- **Attributes** `DebuggerDisplay`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Not("}<Link to="/mod/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" right)"}</code> | Creates a `Not` from `right`. |

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-right" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" Right { get; set; }"}</code> | The goal being negated. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Shows the goal prefixed with `!`. |
| <Link id="m-evaluateinternal" /><code>{"protected override IEnumerable<"}<Link to="/mod/game-api/types/alta-intelligence/result">{"Result"}</Link>{"> EvaluateInternal("}<Link to="/mod/game-api/types/alta-intelligence/knowledgeholder">{"KnowledgeHolder"}</Link>{" knowledgeHolder) (iterator)"}</code> | Yields each inner result with its weighting flipped to 1 minus it. Stops at a fully true result; otherwise ends with a plain true result. |
| <Link id="m-fromcompoundpart" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" FromCompoundPart("}<Link to="/mod/game-api/types/alta-intelligence/compoundpart">{"CompoundPart"}</Link>{" compoundPart)"}</code> | Rebuilds a `Not` from bound parts when variables are substituted. |
