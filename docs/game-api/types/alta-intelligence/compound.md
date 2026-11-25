---
title: "Compound"
description: "class Compound in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Compound

A **class** in `Root.Township`, `Alta.Intelligence`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`Predicate`](/game-api/types/alta-intelligence/predicate), [`ITerm`](/game-api/types/alta-intelligence/iterm)
- **Attributes** `DebuggerDisplay`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Compound("}<Link to="/game-api/types/alta-intelligence/baseatom">{"BaseAtom"}</Link>{" functor, "}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"[] terms)"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> |  |
| <Link id="m-evaluateinternal" /><code>{"protected override IEnumerable<"}<Link to="/game-api/types/alta-intelligence/result">{"Result"}</Link>{"> EvaluateInternal("}<Link to="/game-api/types/alta-intelligence/knowledgeholder">{"KnowledgeHolder"}</Link>{" knowledgeHolder) (iterator)"}</code> |  |
| <Link id="m-fromcompoundpart" /><code>{"protected override "}<Link to="/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" FromCompoundPart("}<Link to="/game-api/types/alta-intelligence/compoundpart">{"CompoundPart"}</Link>{" compoundPart)"}</code> |  |

## Used in

Members of other types that take, return or hold a `Compound`:

[`BaseAtom.Test`](/game-api/types/alta-intelligence/baseatom#m-test), [`BaseAtom.Definition.Compound`](/game-api/types/alta-intelligence/baseatom-definition#m-compound), [`BaseAtom.Definition.Definition`](/game-api/types/alta-intelligence/baseatom-definition#m-ctor), [`IAtomDefinition.Compound`](/game-api/types/alta-intelligence/iatomdefinition#m-compound), [`KnowledgeHolder.Query`](/game-api/types/alta-intelligence/knowledgeholder#m-query).
