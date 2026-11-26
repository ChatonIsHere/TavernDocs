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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Result(Dictionary<"}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"> bindings, float weighting)"}</code> | Creates a `Result` from `weighting`. |
| <Link id="m-ctor-2" /><code>{"Result(float weighting = 1)"}</code> | Creates a `Result` from `weighting`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bindings" /><code>{"Dictionary<"}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"> Bindings { get; private set; }"}</code> | Which variable terms were bound to which values. |
| <Link id="m-weighting" /><code>{"float Weighting { get; set; }"}</code> | How strong this answer is. 1 by default. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Text listing the weight and each binding. |

## Used in

Members of other types that take, return or hold a `Result`:

[`And.Resolve`](/game-api/types/alta-intelligence/and#m-resolve), [`Compound.EvaluateInternal`](/game-api/types/alta-intelligence/compound#m-evaluateinternal), [`IntelligenceExtensionMethods.Print`](/game-api/types/alta-intelligence/intelligenceextensionmethods#m-print), [`KnowledgeHolder.Query`](/game-api/types/alta-intelligence/knowledgeholder#m-query), [`Not.EvaluateInternal`](/game-api/types/alta-intelligence/not#m-evaluateinternal), [`Operator.Combine`](/game-api/types/alta-intelligence/operator#m-combine), [`Operator.EvaluateInternal`](/game-api/types/alta-intelligence/operator#m-evaluateinternal), [`Operator.IsConflicting`](/game-api/types/alta-intelligence/operator#m-isconflicting), [`Operator.Resolve`](/game-api/types/alta-intelligence/operator#m-resolve), [`Or.EvaluateInternal`](/game-api/types/alta-intelligence/or#m-evaluateinternal), [`Or.Resolve`](/game-api/types/alta-intelligence/or#m-resolve), [`Plus.Resolve`](/game-api/types/alta-intelligence/plus#m-resolve), [`Predicate.Evaluate`](/game-api/types/alta-intelligence/predicate#m-evaluate), [`Predicate.EvaluateInternal`](/game-api/types/alta-intelligence/predicate#m-evaluateinternal), [`True.EvaluateInternal`](/game-api/types/alta-intelligence/true#m-evaluateinternal), [`Xor.Resolve`](/game-api/types/alta-intelligence/xor#m-resolve).
