---
title: "CompoundPart"
description: "A list of terms (a first term and the rest) in the AI's logic system, used when unifying compounds."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CompoundPart

A **class** in `Root.Township`, `Alta.Intelligence`.

A list of terms (a first term and the rest) in the AI's logic system, used when unifying compounds.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`Term`](/mod/game-api/types/alta-intelligence/term), [`ICompoundPart`](/mod/game-api/types/alta-intelligence/icompoundpart)
- **Attributes** `DebuggerDisplay`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CompoundPart("}<Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{" first, "}<Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"[] remaining)"}</code> | <span className="api-desc">Creates a `CompoundPart` from `bindings` and `all`.</span> |
| <Link id="m-ctor-2" /><code>{"CompoundPart(Dictionary<"}<Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{", "}<Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"> bindings, "}<Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"[] all)"}</code> | <span className="api-desc">Creates a `CompoundPart` from `bindings` and `all`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-first" /><code><Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{" First { get; private set; }"}</code> | <span className="api-desc">First term.</span> |
| <Link id="m-remaining" /><code><Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"[] Remaining { get; private set; }"}</code> | <span className="api-desc">The other terms.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-contains" /><code>{"override bool Contains("}<Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{" other)"}</code> | <span className="api-desc">True if it is the term, its first term is, or any remaining term contains it.</span> |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">The terms joined with commas.</span> |

## Used in

Members of other types that take, return or hold a `CompoundPart`:

<div className="api-used-in">

[`And.FromCompoundPart`](/mod/game-api/types/alta-intelligence/and#m-fromcompoundpart), [`Compound.FromCompoundPart`](/mod/game-api/types/alta-intelligence/compound#m-fromcompoundpart), [`Not.FromCompoundPart`](/mod/game-api/types/alta-intelligence/not#m-fromcompoundpart), [`Or.FromCompoundPart`](/mod/game-api/types/alta-intelligence/or#m-fromcompoundpart), [`Plus.FromCompoundPart`](/mod/game-api/types/alta-intelligence/plus#m-fromcompoundpart), [`Predicate.FromCompoundPart`](/mod/game-api/types/alta-intelligence/predicate#m-fromcompoundpart), [`True.FromCompoundPart`](/mod/game-api/types/alta-intelligence/true#m-fromcompoundpart), [`Xor.FromCompoundPart`](/mod/game-api/types/alta-intelligence/xor#m-fromcompoundpart).

</div>
