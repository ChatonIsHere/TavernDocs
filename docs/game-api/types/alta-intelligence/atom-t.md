---
title: "Atom<T>"
description: "A named atom in the AI knowledge system that takes one typed term."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Atom&lt;T&gt;

A **class** in `Root.Township`, `Alta.Intelligence`.

A named atom in the AI knowledge system that takes one typed term. Other versions take zero to four terms.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`BaseAtom`](/game-api/types/alta-intelligence/baseatom)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Atom(string name)"}</code> | Creates an `Atom` from `name`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-define" /><code><Link to="/game-api/types/alta-intelligence/baseatom-definition">{"BaseAtom.Definition"}</Link>{" Define(T term, float weighting = 1)"}</code> | Makes a `Definition` that tests this atom with the given term, an optional goal predicate (default true) and a weighting. |
| <Link id="m-define-2" /><code><Link to="/game-api/types/alta-intelligence/baseatom-definition">{"BaseAtom.Definition"}</Link>{" Define(T term, "}<Link to="/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" goal, float weighting = 1)"}</code> | Makes a `Definition` that tests this atom with the given term, an optional goal predicate (default true) and a weighting. |
| <Link id="m-op-implicit" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/atom-t">{"Atom"}</Link>{"<T> op_Implicit(string name)"}</code> | Lets a string be used as an atom of this type, creating one with that name. |

## Used in

Members of other types that take, return or hold a `Atom&lt;T>`:

[`Intelligence.Hates`](/game-api/types/alta-intelligence/intelligence#m-hates).
