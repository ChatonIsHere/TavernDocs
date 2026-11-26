---
title: "Atom<T1, T2, T3, T4>"
description: "A four-argument named symbol in the unused Prolog-like logic engine, with typed Define overloads."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Atom&lt;T1, T2, T3, T4&gt;

A **class** in `Root.Township`, `Alta.Intelligence`.

A four-argument named symbol in the unused Prolog-like logic engine, with typed `Define` overloads.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`BaseAtom`](/mod/game-api/types/alta-intelligence/baseatom)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Atom(string name)"}</code> | <span className="api-desc">Creates an `Atom` from `name`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-define" /><code><Link to="/mod/game-api/types/alta-intelligence/baseatom-definition">{"BaseAtom.Definition"}</Link>{" Define(T1 term1, T2 term2, T3 term3, T4 term4, float weighting = 1)"}</code> | <span className="api-desc">Makes a definition with four terms, an optional goal (default `True`) and weighting (default 1).</span> |
| <Link id="m-define-2" /><code><Link to="/mod/game-api/types/alta-intelligence/baseatom-definition">{"BaseAtom.Definition"}</Link>{" Define(T1 term1, T2 term2, T3 term3, T4 term4, "}<Link to="/mod/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" goal, float weighting = 1)"}</code> | <span className="api-desc">Makes a definition with four terms, an optional goal (default `True`) and weighting (default 1).</span> |
| <Link id="m-op-implicit" /><code>{"static "}<Link to="/mod/game-api/types/alta-intelligence/atom-t1-t2-t3-t4">{"Atom"}</Link>{"<T1, T2, T3, T4> op_Implicit(string name)"}</code> | <span className="api-desc">Lets a string be used as an atom of that name.</span> |
