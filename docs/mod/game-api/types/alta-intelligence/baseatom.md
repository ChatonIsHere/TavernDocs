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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`Term`](/mod/game-api/types/alta-intelligence/term)
- **Derived types** [`Atom`](/mod/game-api/types/alta-intelligence/atom), [`Atom<T1, T2, T3, T4>`](/mod/game-api/types/alta-intelligence/atom-t1-t2-t3-t4), [`Atom<T1, T2, T3>`](/mod/game-api/types/alta-intelligence/atom-t1-t2-t3), [`Atom<T1, T2>`](/mod/game-api/types/alta-intelligence/atom-t1-t2), [`Atom<T>`](/mod/game-api/types/alta-intelligence/atom-t)
- **Nested types** [`Definition`](/mod/game-api/types/alta-intelligence/baseatom-definition)
- **Attributes** `DebuggerDisplay`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BaseAtom(string name)"}</code> | <span className="api-desc">Creates a `BaseAtom` from `name`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"string Name { get; private set; }"}</code> | <span className="api-desc">The name given when the atom was created; also what `ToString` returns.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-contains" /><code>{"override bool Contains("}<Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{" other)"}</code> | <span className="api-desc">True only when the other term is this same atom object.</span> |
| <Link id="m-test" /><code><Link to="/mod/game-api/types/alta-intelligence/compound">{"Compound"}</Link>{" Test(params "}<Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"[] terms)"}</code> | <span className="api-desc">Builds a new `Compound` of this atom applied to the given terms.</span> |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">Returns the atom's name.</span> |

## Used in

Members of other types that take, return or hold a `BaseAtom`:

<div className="api-used-in">

[`Character.Atom`](/mod/game-api/types/alta-intelligence/character#m-atom), [`Compound.Compound`](/mod/game-api/types/alta-intelligence/compound#m-ctor), [`Intelligence.GetLastSeen`](/mod/game-api/types/alta-intelligence/intelligence#m-getlastseen), [`Intelligence.GetLastSeen2`](/mod/game-api/types/alta-intelligence/intelligence#m-getlastseen2), [`KnowledgeHolder.definitions`](/mod/game-api/types/alta-intelligence/knowledgeholder#m-definitions), [`KnowledgeHolder.Definitions`](/mod/game-api/types/alta-intelligence/knowledgeholder#m-definitions-2), [`Predicate.Functor`](/mod/game-api/types/alta-intelligence/predicate#m-functor), [`Predicate.Predicate`](/mod/game-api/types/alta-intelligence/predicate#m-ctor).

</div>
