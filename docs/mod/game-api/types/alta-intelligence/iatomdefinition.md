---
title: "IAtomDefinition"
description: "A piece of knowledge in the creature knowledge system: a compound and a goal, with a weight that fades as the event it came from ages."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IAtomDefinition

An **interface** in `Root.Township`, `Alta.Intelligence`.

A piece of knowledge in the creature knowledge system: a compound and a goal, with a weight that fades as the event it came from ages.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Derived types** [`BaseAtom.Definition`](/mod/game-api/types/alta-intelligence/baseatom-definition)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ageweighting" /><code>{"float AgeWeighting { get; set; }"}</code> | <span className="api-desc">A 0 to 1 multiplier set by the owning event as it ages.</span> |
| <Link id="m-compound" /><code><Link to="/mod/game-api/types/alta-intelligence/compound">{"Compound"}</Link>{" "}<Link to="/mod/game-api/types/alta-intelligence/compound">{"Compound"}</Link>{" { get; }"}</code> | <span className="api-desc">The compound this definition belongs to.</span> |
| <Link id="m-goal" /><code><Link to="/mod/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" Goal { get; }"}</code> | <span className="api-desc">The predicate that must hold for this definition to apply.</span> |
| <Link id="m-weighting" /><code>{"float Weighting { get; }"}</code> | <span className="api-desc">How much this definition counts. In the base definition, its weight times `AgeWeighting`.</span> |

## Used in

Members of other types that take, return or hold a `IAtomDefinition`:

<div className="api-used-in">

[`Character.Parenting`](/mod/game-api/types/alta-intelligence/character#m-parenting), [`Event.Event`](/mod/game-api/types/alta-intelligence/event#m-ctor), [`Event.Knowledge`](/mod/game-api/types/alta-intelligence/event#m-knowledge), [`History.CreateEvent`](/mod/game-api/types/alta-intelligence/history#m-createevent), [`IntelligenceExtensionMethods.ConstantInitialize`](/mod/game-api/types/alta-intelligence/intelligenceextensionmethods#m-constantinitialize), [`ITerm.ConstantInitialize`](/mod/game-api/types/alta-intelligence/iterm#m-constantinitialize), [`KnowledgeHolder.definitions`](/mod/game-api/types/alta-intelligence/knowledgeholder#m-definitions), [`KnowledgeHolder.Definitions`](/mod/game-api/types/alta-intelligence/knowledgeholder#m-definitions-2), [`KnowledgeHolder.Inform`](/mod/game-api/types/alta-intelligence/knowledgeholder#m-inform), [`Predicate.ConstantInitialize`](/mod/game-api/types/alta-intelligence/predicate#m-constantinitialize), [`Term.ConstantInitialize`](/mod/game-api/types/alta-intelligence/term#m-constantinitialize), [`Variable.ConstantInitialize`](/mod/game-api/types/alta-intelligence/variable#m-constantinitialize), [`Variable.Context`](/mod/game-api/types/alta-intelligence/variable#m-context).

</div>
