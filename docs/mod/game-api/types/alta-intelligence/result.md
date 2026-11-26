---
title: "Result"
description: "One answer to a creature AI logic query: the term bindings that make it true and its weight."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Result

A **class** in `Root.Township`, `Alta.Intelligence`.

One answer to a creature AI logic query: the term bindings that make it true and its weight.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Result(Dictionary<"}<Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{", "}<Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"> bindings, float weighting)"}</code> | <span className="api-desc">Creates a `Result` from `weighting`.</span> |
| <Link id="m-ctor-2" /><code>{"Result(float weighting = 1)"}</code> | <span className="api-desc">Creates a `Result` from `weighting`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bindings" /><code>{"Dictionary<"}<Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{", "}<Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"> Bindings { get; private set; }"}</code> | <span className="api-desc">Which variable terms were bound to which values.</span> |
| <Link id="m-weighting" /><code>{"float Weighting { get; set; }"}</code> | <span className="api-desc">How strong this answer is. 1 by default.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">Text listing the weight and each binding.</span> |

## Used in

Members of other types that take, return or hold a `Result`:

<div className="api-used-in">

[`And.Resolve`](/mod/game-api/types/alta-intelligence/and#m-resolve), [`Compound.EvaluateInternal`](/mod/game-api/types/alta-intelligence/compound#m-evaluateinternal), [`IntelligenceExtensionMethods.Print`](/mod/game-api/types/alta-intelligence/intelligenceextensionmethods#m-print), [`KnowledgeHolder.Query`](/mod/game-api/types/alta-intelligence/knowledgeholder#m-query), [`Not.EvaluateInternal`](/mod/game-api/types/alta-intelligence/not#m-evaluateinternal), [`Operator.Combine`](/mod/game-api/types/alta-intelligence/operator#m-combine), [`Operator.EvaluateInternal`](/mod/game-api/types/alta-intelligence/operator#m-evaluateinternal), [`Operator.IsConflicting`](/mod/game-api/types/alta-intelligence/operator#m-isconflicting), [`Operator.Resolve`](/mod/game-api/types/alta-intelligence/operator#m-resolve), [`Or.EvaluateInternal`](/mod/game-api/types/alta-intelligence/or#m-evaluateinternal), [`Or.Resolve`](/mod/game-api/types/alta-intelligence/or#m-resolve), [`Plus.Resolve`](/mod/game-api/types/alta-intelligence/plus#m-resolve), [`Predicate.Evaluate`](/mod/game-api/types/alta-intelligence/predicate#m-evaluate), [`Predicate.EvaluateInternal`](/mod/game-api/types/alta-intelligence/predicate#m-evaluateinternal), [`True.EvaluateInternal`](/mod/game-api/types/alta-intelligence/true#m-evaluateinternal), [`Xor.Resolve`](/mod/game-api/types/alta-intelligence/xor#m-resolve).

</div>
