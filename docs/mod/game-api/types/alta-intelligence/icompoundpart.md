---
title: "ICompoundPart"
description: "A term split into a head and the rest, used by the unused logic engine when unifying terms."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ICompoundPart

An **interface** in `Root.Township`, `Alta.Intelligence`.

A term split into a head and the rest, used by the unused logic engine when unifying terms. `Predicate` and `CompoundPart` implement it.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Derived types** [`CompoundPart`](/mod/game-api/types/alta-intelligence/compoundpart), [`Predicate`](/mod/game-api/types/alta-intelligence/predicate)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-first" /><code><Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{" First { get; }"}</code> | <span className="api-desc">The head: a predicate's functor atom.</span> |
| <Link id="m-remaining" /><code><Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"[] Remaining { get; }"}</code> | <span className="api-desc">The other terms: a predicate's arguments.</span> |
