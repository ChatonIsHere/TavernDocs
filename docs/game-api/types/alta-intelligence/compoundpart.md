---
title: "CompoundPart"
description: "class CompoundPart in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CompoundPart

A **class** in `Root.Township`, `Alta.Intelligence`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`Term`](/game-api/types/alta-intelligence/term), [`ICompoundPart`](/game-api/types/alta-intelligence/icompoundpart)
- **Attributes** `DebuggerDisplay`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CompoundPart("}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{" first, "}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"[] remaining)"}</code> |  |
| <Link id="m-ctor-2" /><code>{"CompoundPart(Dictionary<"}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"> bindings, "}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"[] all)"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-first" /><code><Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{" First { get; private set; }"}</code> |  |
| <Link id="m-remaining" /><code><Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"[] Remaining { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-contains" /><code>{"override bool Contains("}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{" other)"}</code> |  |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> |  |

## Used in

Members of other types that take, return or hold a `CompoundPart`:

[`And.FromCompoundPart`](/game-api/types/alta-intelligence/and#m-fromcompoundpart), [`Compound.FromCompoundPart`](/game-api/types/alta-intelligence/compound#m-fromcompoundpart), [`Not.FromCompoundPart`](/game-api/types/alta-intelligence/not#m-fromcompoundpart), [`Or.FromCompoundPart`](/game-api/types/alta-intelligence/or#m-fromcompoundpart), [`Plus.FromCompoundPart`](/game-api/types/alta-intelligence/plus#m-fromcompoundpart), [`Predicate.FromCompoundPart`](/game-api/types/alta-intelligence/predicate#m-fromcompoundpart), [`True.FromCompoundPart`](/game-api/types/alta-intelligence/true#m-fromcompoundpart), [`Xor.FromCompoundPart`](/game-api/types/alta-intelligence/xor#m-fromcompoundpart).
