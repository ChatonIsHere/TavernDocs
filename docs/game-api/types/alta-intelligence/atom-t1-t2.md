---
title: "Atom<T1, T2>"
description: "A named AI logic atom that takes two terms."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Atom&lt;T1, T2&gt;

A **class** in `Root.Township`, `Alta.Intelligence`.

A named AI logic atom that takes two terms. `Define` turns it into a weighted definition the AI can reason with.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`BaseAtom`](/game-api/types/alta-intelligence/baseatom)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Atom(string name)"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-define" /><code><Link to="/game-api/types/alta-intelligence/baseatom-definition">{"BaseAtom.Definition"}</Link>{" Define(T1 term1, T2 term2, float weighting = 1)"}</code> | Builds a definition testing the two terms, with an optional goal predicate (true by default) and a weighting. |
| <Link id="m-define-2" /><code><Link to="/game-api/types/alta-intelligence/baseatom-definition">{"BaseAtom.Definition"}</Link>{" Define(T1 term1, T2 term2, "}<Link to="/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" goal, float weighting = 1)"}</code> | Builds a definition testing the two terms, with an optional goal predicate (true by default) and a weighting. |
| <Link id="m-op-implicit" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/atom-t1-t2">{"Atom"}</Link>{"<T1, T2> op_Implicit(string name)"}</code> | Makes an atom from its name. |

## Used in

Members of other types that take, return or hold a `Atom&lt;T1, T2>`:

[`Intelligence.Attacked`](/game-api/types/alta-intelligence/intelligence#m-attacked), [`Intelligence.AttackedLocated`](/game-api/types/alta-intelligence/intelligence#m-attackedlocated), [`Intelligence.Equal`](/game-api/types/alta-intelligence/intelligence#m-equal), [`Intelligence.IsLocated`](/game-api/types/alta-intelligence/intelligence#m-islocated), [`Intelligence.Owner`](/game-api/types/alta-intelligence/intelligence#m-owner), [`Intelligence.Owns`](/game-api/types/alta-intelligence/intelligence#m-owns).
