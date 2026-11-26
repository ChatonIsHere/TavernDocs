---
title: "Operator"
description: "Base for predicates that join two other predicates (such as and), in the creature knowledge system."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Operator

An **abstract class** in `Root.Township`, `Alta.Intelligence`.

Base for predicates that join two other predicates (such as and), in the creature knowledge system. Evaluates the left side, then the right side with the left's bindings.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`Predicate`](/mod/game-api/types/alta-intelligence/predicate)
- **Derived types** [`And`](/mod/game-api/types/alta-intelligence/and), [`Or`](/mod/game-api/types/alta-intelligence/or), [`Plus`](/mod/game-api/types/alta-intelligence/plus), [`Xor`](/mod/game-api/types/alta-intelligence/xor)
- **Attributes** `DebuggerDisplay`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Operator(string name, "}<Link to="/mod/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" left, "}<Link to="/mod/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" right)"}</code> | <span className="api-desc">Creates an `Operator` from `name`, `left` and `right`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-left" /><code>{"protected "}<Link to="/mod/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" Left { get; private set; }"}</code> | <span className="api-desc">The left predicate.</span> |
| <Link id="m-right" /><code>{"protected "}<Link to="/mod/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" Right { get; private set; }"}</code> | <span className="api-desc">The right predicate.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-resolve" /><code>{"abstract "}<Link to="/mod/game-api/types/alta-intelligence/result">{"Result"}</Link>{" Resolve("}<Link to="/mod/game-api/types/alta-intelligence/result">{"Result"}</Link>{" a, "}<Link to="/mod/game-api/types/alta-intelligence/result">{"Result"}</Link>{" b)"}</code> | <span className="api-desc">Subclasses turn a left and right result into one result, or null to drop it.</span> |
| <Link id="m-combine" /><code>{"protected "}<Link to="/mod/game-api/types/alta-intelligence/result">{"Result"}</Link>{" Combine("}<Link to="/mod/game-api/types/alta-intelligence/result">{"Result"}</Link>{" a, "}<Link to="/mod/game-api/types/alta-intelligence/result">{"Result"}</Link>{" b, float weight)"}</code> | <span className="api-desc">Merges two results' bindings into one result with the given weight. The left side wins on clashes.</span> |
| <Link id="m-evaluateinternal" /><code>{"protected override IEnumerable<"}<Link to="/mod/game-api/types/alta-intelligence/result">{"Result"}</Link>{"> EvaluateInternal("}<Link to="/mod/game-api/types/alta-intelligence/knowledgeholder">{"KnowledgeHolder"}</Link>{" knowledgeHolder) (iterator)"}</code> | <span className="api-desc">Yields every combined result `Resolve` accepts, for each left result and matching right result.</span> |
| <Link id="m-isconflicting" /><code>{"protected bool IsConflicting("}<Link to="/mod/game-api/types/alta-intelligence/result">{"Result"}</Link>{" a, "}<Link to="/mod/game-api/types/alta-intelligence/result">{"Result"}</Link>{" b)"}</code> | <span className="api-desc">Whether two results bind the same term to different values.</span> |
