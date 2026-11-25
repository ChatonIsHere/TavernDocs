---
title: "Term"
description: "Base of terms in the AI's logic system (atoms, variables, compounds)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Term

An **abstract class** in `Root.Township`, `Alta.Intelligence`.

Base of terms in the AI's logic system (atoms, variables, compounds). `Unify` matches two terms in the Prolog style.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`ITerm`](/game-api/types/alta-intelligence/iterm)
- **Derived types** [`BaseAtom`](/game-api/types/alta-intelligence/baseatom), [`CompoundPart`](/game-api/types/alta-intelligence/compoundpart), [`Variable`](/game-api/types/alta-intelligence/variable)
- **Attributes** `DebuggerDisplay`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected Term()"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkbind" /><code>{"virtual "}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{" CheckBind(Dictionary<"}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"> bindings)"}</code> | What this term is bound to in the bindings, or the term itself. |
| <Link id="m-constantinitialize" /><code>{"virtual void ConstantInitialize("}<Link to="/game-api/types/alta-intelligence/iatomdefinition">{"IAtomDefinition"}</Link>{" definion)"}</code> | Hook to set a term up against its atom definition. Empty here; `Variable` overrides it. |
| <Link id="m-contains" /><code>{"abstract bool Contains("}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{" other)"}</code> | True if this term is or contains the other term. |
| <Link id="m-op-implicit" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/term">{"Term"}</Link>{" op_Implicit(int variableIndex)"}</code> | Turns an int into a `Variable` with that index. |
| <Link id="m-unify" /><code>{"static Dictionary<"}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"> Unify("}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{" a, "}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{" b)"}</code> | Returns the variable bindings that make the two terms equal, or null if they can't match. |
