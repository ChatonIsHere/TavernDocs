---
title: "BaseAtom.Definition"
description: "A rule in the creature knowledge system: when the compound holds, the goal predicate follows, with a weight that fades as the event it came from ages."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BaseAtom.Definition

A **class** in `Root.Township`, `Alta.Intelligence`.

A rule in the creature knowledge system: when the compound holds, the goal predicate follows, with a weight that fades as the event it came from ages.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Nested in** [`BaseAtom`](/mod/game-api/types/alta-intelligence/baseatom)
- **Inherits or implements** [`IAtomDefinition`](/mod/game-api/types/alta-intelligence/iatomdefinition)
- **Attributes** `DebuggerDisplay`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Definition("}<Link to="/mod/game-api/types/alta-intelligence/compound">{"Compound"}</Link>{" compound, "}<Link to="/mod/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" goal, float weighting)"}</code> | <span className="api-desc">Creates a `BaseAtom.Definition` from `compound`, `goal` and `weighting`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-weighting" /><code>{"private float weighting"}</code> | <span className="api-desc">Base weighting. The `Weighting` property multiplies it by `AgeWeighting`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ageweighting" /><code>{"float AgeWeighting { get; set; }"}</code> | <span className="api-desc">Age factor, from 1 down to 0, set by the owning `Event` as it gets older.</span> |
| <Link id="m-compound" /><code><Link to="/mod/game-api/types/alta-intelligence/compound">{"Compound"}</Link>{" "}<Link to="/mod/game-api/types/alta-intelligence/compound">{"Compound"}</Link>{" { get; private set; }"}</code> | <span className="api-desc">The condition side of the rule.</span> |
| <Link id="m-goal" /><code><Link to="/mod/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" Goal { get; private set; }"}</code> | <span className="api-desc">The predicate the rule leads to.</span> |
| <Link id="m-weighting-2" /><code>{"float Weighting { get; }"}</code> | <span className="api-desc">The base weight times `AgeWeighting`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">The rule as `compound => goal`.</span> |

## Used in

Members of other types that take, return or hold a `Definition`:

<div className="api-used-in">

[`Atom.Define`](/mod/game-api/types/alta-intelligence/atom#m-define), [`Atom<T1, T2, T3, T4>.Define`](/mod/game-api/types/alta-intelligence/atom-t1-t2-t3-t4#m-define), [`Atom<T1, T2, T3>.Define`](/mod/game-api/types/alta-intelligence/atom-t1-t2-t3#m-define), [`Atom<T1, T2>.Define`](/mod/game-api/types/alta-intelligence/atom-t1-t2#m-define), [`Atom<T>.Define`](/mod/game-api/types/alta-intelligence/atom-t#m-define).

</div>
