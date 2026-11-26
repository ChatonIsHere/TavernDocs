---
title: "Atom"
description: "A named symbol in the unused Prolog-like logic engine."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Atom

A **class** in `Root.Township`, `Alta.Intelligence`.

A named symbol in the unused Prolog-like logic engine. `Define` turns it into a fact or rule that a `KnowledgeHolder` can be told about.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`BaseAtom`](/game-api/types/alta-intelligence/baseatom)
- **Derived types** [`DataAtom<T>`](/game-api/types/alta-intelligence/dataatom-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Atom(string name)"}</code> | Creates an `Atom` from `name`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-define" /><code><Link to="/game-api/types/alta-intelligence/baseatom-definition">{"BaseAtom.Definition"}</Link>{" Define("}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"[] terms, "}<Link to="/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" goal)"}</code> | Makes a definition of this atom with the given terms, an optional goal (default `True`) and weighting (default 1). |
| <Link id="m-define-2" /><code><Link to="/game-api/types/alta-intelligence/baseatom-definition">{"BaseAtom.Definition"}</Link>{" Define(params "}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"[] terms)"}</code> | Makes a definition of this atom with the given terms, an optional goal (default `True`) and weighting (default 1). |
| <Link id="m-define-3" /><code><Link to="/game-api/types/alta-intelligence/baseatom-definition">{"BaseAtom.Definition"}</Link>{" Define(float weighting, params "}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"[] terms)"}</code> | Makes a definition of this atom with the given terms, an optional goal (default `True`) and weighting (default 1). |
| <Link id="m-define-4" /><code><Link to="/game-api/types/alta-intelligence/baseatom-definition">{"BaseAtom.Definition"}</Link>{" Define(float weighting, "}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"[] terms, "}<Link to="/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" goal)"}</code> | Makes a definition of this atom with the given terms, an optional goal (default `True`) and weighting (default 1). |
| <Link id="m-op-implicit" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/atom">{"Atom"}</Link>{" op_Implicit(string name)"}</code> | Lets a string be used as an `Atom` of that name. |
