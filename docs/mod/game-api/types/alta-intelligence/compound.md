---
title: "Compound"
description: "A Prolog-style term with a functor and arguments in the AI knowledge system, such as likes(x, y)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Compound

A **class** in `Root.Township`, `Alta.Intelligence`.

A Prolog-style term with a functor and arguments in the AI knowledge system, such as `likes(x, y)`. Evaluates by unifying with known definitions.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`Predicate`](/mod/game-api/types/alta-intelligence/predicate), [`ITerm`](/mod/game-api/types/alta-intelligence/iterm)
- **Attributes** `DebuggerDisplay`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Compound("}<Link to="/mod/game-api/types/alta-intelligence/baseatom">{"BaseAtom"}</Link>{" functor, "}<Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"[] terms)"}</code> | <span className="api-desc">Creates a `Compound` from `functor` and `terms`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">Writes the term as `functor(arg, arg)`.</span> |
| <Link id="m-evaluateinternal" /><code>{"protected override IEnumerable<"}<Link to="/mod/game-api/types/alta-intelligence/result">{"Result"}</Link>{"> EvaluateInternal("}<Link to="/mod/game-api/types/alta-intelligence/knowledgeholder">{"KnowledgeHolder"}</Link>{" knowledgeHolder) (iterator)"}</code> | <span className="api-desc">Unifies with each matching definition, evaluates its goal and yields the bindings weighted by the definition.</span> |
| <Link id="m-fromcompoundpart" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" FromCompoundPart("}<Link to="/mod/game-api/types/alta-intelligence/compoundpart">{"CompoundPart"}</Link>{" compoundPart)"}</code> | <span className="api-desc">Builds a compound from a parsed compound part.</span> |

## Used in

Members of other types that take, return or hold a `Compound`:

<div className="api-used-in">

[`BaseAtom.Test`](/mod/game-api/types/alta-intelligence/baseatom#m-test), [`BaseAtom.Definition.Compound`](/mod/game-api/types/alta-intelligence/baseatom-definition#m-compound), [`BaseAtom.Definition.Definition`](/mod/game-api/types/alta-intelligence/baseatom-definition#m-ctor), [`IAtomDefinition.Compound`](/mod/game-api/types/alta-intelligence/iatomdefinition#m-compound), [`KnowledgeHolder.Query`](/mod/game-api/types/alta-intelligence/knowledgeholder#m-query).

</div>
