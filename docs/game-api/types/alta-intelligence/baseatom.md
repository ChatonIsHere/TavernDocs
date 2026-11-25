---
title: "BaseAtom"
description: "A named constant term in the AI's logic system (predicates, compounds and variables used for creature reasoning)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BaseAtom

A **class** in `Root.Township`, `Alta.Intelligence`.

A named constant term in the AI's logic system (predicates, compounds and variables used for creature reasoning). Its nested `Definition` pairs a compound with a goal and a weighting.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`Term`](/game-api/types/alta-intelligence/term)
- **Derived types** [`Atom`](/game-api/types/alta-intelligence/atom), [`Atom<T1, T2, T3, T4>`](/game-api/types/alta-intelligence/atom-t1-t2-t3-t4), [`Atom<T1, T2, T3>`](/game-api/types/alta-intelligence/atom-t1-t2-t3), [`Atom<T1, T2>`](/game-api/types/alta-intelligence/atom-t1-t2), [`Atom<T>`](/game-api/types/alta-intelligence/atom-t)
- **Nested types** [`Definition`](/game-api/types/alta-intelligence/baseatom-definition)
- **Attributes** `DebuggerDisplay`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BaseAtom(string name)"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"string Name { get; private set; }"}</code> | The name given when the atom was created; also what `ToString` returns. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-contains" /><code>{"override bool Contains("}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{" other)"}</code> | True only when the other term is this same atom object. |
| <Link id="m-test" /><code><Link to="/game-api/types/alta-intelligence/compound">{"Compound"}</Link>{" Test(params "}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"[] terms)"}</code> | Builds a new `Compound` of this atom applied to the given terms. |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Returns the atom's name. |

## Used in

Members of other types that take, return or hold a `BaseAtom`:

[`Character.Atom`](/game-api/types/alta-intelligence/character#m-atom), [`Compound.Compound`](/game-api/types/alta-intelligence/compound#m-ctor), [`Intelligence.GetLastSeen`](/game-api/types/alta-intelligence/intelligence#m-getlastseen), [`Intelligence.GetLastSeen2`](/game-api/types/alta-intelligence/intelligence#m-getlastseen2), [`KnowledgeHolder.definitions`](/game-api/types/alta-intelligence/knowledgeholder#m-definitions), [`KnowledgeHolder.Definitions`](/game-api/types/alta-intelligence/knowledgeholder#m-definitions-2), [`Predicate.Functor`](/game-api/types/alta-intelligence/predicate#m-functor), [`Predicate.Predicate`](/game-api/types/alta-intelligence/predicate#m-ctor).
