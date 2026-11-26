---
title: "ITerm"
description: "A term in the small Prolog-style logic engine in Alta.Intelligence (atoms, variables, compounds)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ITerm

An **interface** in `Root.Township`, `Alta.Intelligence`.

A term in the small Prolog-style logic engine in `Alta.Intelligence` (atoms, variables, compounds). Probably not used by the shipped creatures; nothing outside that namespace uses it.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Derived types** [`Compound`](/mod/game-api/types/alta-intelligence/compound), [`DataAtom<T>`](/mod/game-api/types/alta-intelligence/dataatom-t), [`IData<T>`](/mod/game-api/types/alta-intelligence/idata-t), [`Predicate`](/mod/game-api/types/alta-intelligence/predicate), [`Term`](/mod/game-api/types/alta-intelligence/term), [`Variable<T>`](/mod/game-api/types/alta-intelligence/variable-t)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkbind" /><code><Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{" CheckBind(Dictionary<"}<Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{", "}<Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"> bindings)"}</code> | Returns the term with any bound variables replaced from the given bindings. |
| <Link id="m-constantinitialize" /><code>{"void ConstantInitialize("}<Link to="/mod/game-api/types/alta-intelligence/iatomdefinition">{"IAtomDefinition"}</Link>{" definion)"}</code> | Called when a definition is created, so variables know which definition they belong to. |
| <Link id="m-contains" /><code>{"bool Contains("}<Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{" other)"}</code> | Whether this term is or contains the other term. |

## Used in

Members of other types that take, return or hold a `ITerm`:

[`Atom.Define`](/mod/game-api/types/alta-intelligence/atom#m-define), [`BaseAtom.Contains`](/mod/game-api/types/alta-intelligence/baseatom#m-contains), [`BaseAtom.Test`](/mod/game-api/types/alta-intelligence/baseatom#m-test), [`Compound.Compound`](/mod/game-api/types/alta-intelligence/compound#m-ctor), [`CompoundPart.CompoundPart`](/mod/game-api/types/alta-intelligence/compoundpart#m-ctor), [`CompoundPart.Contains`](/mod/game-api/types/alta-intelligence/compoundpart#m-contains), [`CompoundPart.First`](/mod/game-api/types/alta-intelligence/compoundpart#m-first), [`CompoundPart.Remaining`](/mod/game-api/types/alta-intelligence/compoundpart#m-remaining), [`ICompoundPart.First`](/mod/game-api/types/alta-intelligence/icompoundpart#m-first), [`ICompoundPart.Remaining`](/mod/game-api/types/alta-intelligence/icompoundpart#m-remaining), [`Intelligence.Attacked`](/mod/game-api/types/alta-intelligence/intelligence#m-attacked), [`Intelligence.AttackedLocated`](/mod/game-api/types/alta-intelligence/intelligence#m-attackedlocated), [`Intelligence.Equal`](/mod/game-api/types/alta-intelligence/intelligence#m-equal), [`Intelligence.Hates`](/mod/game-api/types/alta-intelligence/intelligence#m-hates), [`Intelligence.IsLocated`](/mod/game-api/types/alta-intelligence/intelligence#m-islocated), [`Intelligence.Owner`](/mod/game-api/types/alta-intelligence/intelligence#m-owner), [`Intelligence.Owns`](/mod/game-api/types/alta-intelligence/intelligence#m-owns), [`IntelligenceExtensionMethods.ConstantInitialize`](/mod/game-api/types/alta-intelligence/intelligenceextensionmethods#m-constantinitialize), [`Predicate.Alta.Intelligence.ICompoundPart.First`](/mod/game-api/types/alta-intelligence/predicate#m-alta-intelligence-icompoundpart-first), [`Predicate.Alta.Intelligence.ICompoundPart.Remaining`](/mod/game-api/types/alta-intelligence/predicate#m-alta-intelligence-icompoundpart-remaining), [`Predicate.CheckBind`](/mod/game-api/types/alta-intelligence/predicate#m-checkbind), [`Predicate.Contains`](/mod/game-api/types/alta-intelligence/predicate#m-contains), [`Predicate.Predicate`](/mod/game-api/types/alta-intelligence/predicate#m-ctor), [`Predicate.Terms`](/mod/game-api/types/alta-intelligence/predicate#m-terms), [`Result.Bindings`](/mod/game-api/types/alta-intelligence/result#m-bindings), [`Result.Result`](/mod/game-api/types/alta-intelligence/result#m-ctor), [`Term.CheckBind`](/mod/game-api/types/alta-intelligence/term#m-checkbind), [`Term.Contains`](/mod/game-api/types/alta-intelligence/term#m-contains), [`Term.Unify`](/mod/game-api/types/alta-intelligence/term#m-unify), [`Variable.Contains`](/mod/game-api/types/alta-intelligence/variable#m-contains).
