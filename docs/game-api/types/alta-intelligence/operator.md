---
title: "Operator"
description: "abstract class Operator in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Operator

An **abstract class** in `Root.Township`, `Alta.Intelligence`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`Predicate`](/game-api/types/alta-intelligence/predicate)
- **Derived types** [`And`](/game-api/types/alta-intelligence/and), [`Or`](/game-api/types/alta-intelligence/or), [`Plus`](/game-api/types/alta-intelligence/plus), [`Xor`](/game-api/types/alta-intelligence/xor)
- **Attributes** `DebuggerDisplay`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Operator(string name, "}<Link to="/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" left, "}<Link to="/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" right)"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-left" /><code>{"protected "}<Link to="/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" Left { get; private set; }"}</code> |  |
| <Link id="m-right" /><code>{"protected "}<Link to="/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" Right { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-resolve" /><code>{"abstract "}<Link to="/game-api/types/alta-intelligence/result">{"Result"}</Link>{" Resolve("}<Link to="/game-api/types/alta-intelligence/result">{"Result"}</Link>{" a, "}<Link to="/game-api/types/alta-intelligence/result">{"Result"}</Link>{" b)"}</code> |  |
| <Link id="m-combine" /><code>{"protected "}<Link to="/game-api/types/alta-intelligence/result">{"Result"}</Link>{" Combine("}<Link to="/game-api/types/alta-intelligence/result">{"Result"}</Link>{" a, "}<Link to="/game-api/types/alta-intelligence/result">{"Result"}</Link>{" b, float weight)"}</code> |  |
| <Link id="m-evaluateinternal" /><code>{"protected override IEnumerable<"}<Link to="/game-api/types/alta-intelligence/result">{"Result"}</Link>{"> EvaluateInternal("}<Link to="/game-api/types/alta-intelligence/knowledgeholder">{"KnowledgeHolder"}</Link>{" knowledgeHolder) (iterator)"}</code> |  |
| <Link id="m-isconflicting" /><code>{"protected bool IsConflicting("}<Link to="/game-api/types/alta-intelligence/result">{"Result"}</Link>{" a, "}<Link to="/game-api/types/alta-intelligence/result">{"Result"}</Link>{" b)"}</code> |  |
