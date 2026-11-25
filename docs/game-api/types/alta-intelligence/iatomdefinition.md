---
title: "IAtomDefinition"
description: "interface IAtomDefinition in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IAtomDefinition

An **interface** in `Root.Township`, `Alta.Intelligence`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Derived types** [`BaseAtom.Definition`](/game-api/types/alta-intelligence/baseatom-definition)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ageweighting" /><code>{"float AgeWeighting { get; set; }"}</code> |  |
| <Link id="m-compound" /><code><Link to="/game-api/types/alta-intelligence/compound">{"Compound"}</Link>{" "}<Link to="/game-api/types/alta-intelligence/compound">{"Compound"}</Link>{" { get; }"}</code> |  |
| <Link id="m-goal" /><code><Link to="/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" Goal { get; }"}</code> |  |
| <Link id="m-weighting" /><code>{"float Weighting { get; }"}</code> |  |

## Used in

Members of other types that take, return or hold a `IAtomDefinition`:

[`Character.Parenting`](/game-api/types/alta-intelligence/character#m-parenting), [`Event.Event`](/game-api/types/alta-intelligence/event#m-ctor), [`Event.Knowledge`](/game-api/types/alta-intelligence/event#m-knowledge), [`History.CreateEvent`](/game-api/types/alta-intelligence/history#m-createevent), [`IntelligenceExtensionMethods.ConstantInitialize`](/game-api/types/alta-intelligence/intelligenceextensionmethods#m-constantinitialize), [`ITerm.ConstantInitialize`](/game-api/types/alta-intelligence/iterm#m-constantinitialize), [`KnowledgeHolder.definitions`](/game-api/types/alta-intelligence/knowledgeholder#m-definitions), [`KnowledgeHolder.Definitions`](/game-api/types/alta-intelligence/knowledgeholder#m-definitions-2), [`KnowledgeHolder.Inform`](/game-api/types/alta-intelligence/knowledgeholder#m-inform), [`Predicate.ConstantInitialize`](/game-api/types/alta-intelligence/predicate#m-constantinitialize), [`Term.ConstantInitialize`](/game-api/types/alta-intelligence/term#m-constantinitialize), [`Variable.ConstantInitialize`](/game-api/types/alta-intelligence/variable#m-constantinitialize), [`Variable.Context`](/game-api/types/alta-intelligence/variable#m-context).
