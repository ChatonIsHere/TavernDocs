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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`ITerm`](/mod/game-api/types/alta-intelligence/iterm)
- **Derived types** [`BaseAtom`](/mod/game-api/types/alta-intelligence/baseatom), [`CompoundPart`](/mod/game-api/types/alta-intelligence/compoundpart), [`Variable`](/mod/game-api/types/alta-intelligence/variable)
- **Attributes** `DebuggerDisplay`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected Term()"}</code> | <span className="api-desc">Creates a `Term` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkbind" /><code>{"virtual "}<Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{" CheckBind(Dictionary<"}<Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{", "}<Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"> bindings)"}</code> | <span className="api-desc">What this term is bound to in the bindings, or the term itself.</span> |
| <Link id="m-constantinitialize" /><code>{"virtual void ConstantInitialize("}<Link to="/mod/game-api/types/alta-intelligence/iatomdefinition">{"IAtomDefinition"}</Link>{" definion)"}</code> | <span className="api-desc">Hook to set a term up against its atom definition. Empty here; `Variable` overrides it.</span> |
| <Link id="m-contains" /><code>{"abstract bool Contains("}<Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{" other)"}</code> | <span className="api-desc">True if this term is or contains the other term.</span> |
| <Link id="m-op-implicit" /><code>{"static "}<Link to="/mod/game-api/types/alta-intelligence/term">{"Term"}</Link>{" op_Implicit(int variableIndex)"}</code> | <span className="api-desc">Turns an int into a `Variable` with that index.</span> |
| <Link id="m-unify" /><code>{"static Dictionary<"}<Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{", "}<Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"> Unify("}<Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{" a, "}<Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{" b)"}</code> | <span className="api-desc">Returns the variable bindings that make the two terms equal, or null if they can't match.</span> |
