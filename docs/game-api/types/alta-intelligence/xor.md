---
title: "Xor"
description: "Logical XOR operator for the AI's predicate system."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Xor

A **class** in `Root.Township`, `Alta.Intelligence`.

Logical XOR operator for the AI's predicate system. Written as `A ^ B`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`Operator`](/game-api/types/alta-intelligence/operator)
- **Attributes** `DebuggerDisplay`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Xor("}<Link to="/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" left, "}<Link to="/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" right)"}</code> | Creates a `Xor` from `left` and `right`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-resolve" /><code>{"override "}<Link to="/game-api/types/alta-intelligence/result">{"Result"}</Link>{" Resolve("}<Link to="/game-api/types/alta-intelligence/result">{"Result"}</Link>{" a, "}<Link to="/game-api/types/alta-intelligence/result">{"Result"}</Link>{" b)"}</code> | Returns the higher weighted of two results when their bindings conflict, or null when they agree. |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Returns the two sides joined by ` ^ `. |
| <Link id="m-fromcompoundpart" /><code>{"protected override "}<Link to="/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" FromCompoundPart("}<Link to="/game-api/types/alta-intelligence/compoundpart">{"CompoundPart"}</Link>{" compoundPart)"}</code> | Builds an `Xor` from the first two remaining parts of a parsed compound. |
