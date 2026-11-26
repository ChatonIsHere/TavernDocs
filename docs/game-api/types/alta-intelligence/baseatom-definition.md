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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Nested in** [`BaseAtom`](/game-api/types/alta-intelligence/baseatom)
- **Inherits or implements** [`IAtomDefinition`](/game-api/types/alta-intelligence/iatomdefinition)
- **Attributes** `DebuggerDisplay`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Definition("}<Link to="/game-api/types/alta-intelligence/compound">{"Compound"}</Link>{" compound, "}<Link to="/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" goal, float weighting)"}</code> | Creates a `BaseAtom.Definition` from `compound`, `goal` and `weighting`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-weighting" /><code>{"private float weighting"}</code> | Base weighting. The `Weighting` property multiplies it by `AgeWeighting`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ageweighting" /><code>{"float AgeWeighting { get; set; }"}</code> | Age factor, from 1 down to 0, set by the owning `Event` as it gets older. |
| <Link id="m-compound" /><code><Link to="/game-api/types/alta-intelligence/compound">{"Compound"}</Link>{" "}<Link to="/game-api/types/alta-intelligence/compound">{"Compound"}</Link>{" { get; private set; }"}</code> | The condition side of the rule. |
| <Link id="m-goal" /><code><Link to="/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" Goal { get; private set; }"}</code> | The predicate the rule leads to. |
| <Link id="m-weighting-2" /><code>{"float Weighting { get; }"}</code> | The base weight times `AgeWeighting`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | The rule as `compound => goal`. |

## Used in

Members of other types that take, return or hold a `Definition`:

[`Atom.Define`](/game-api/types/alta-intelligence/atom#m-define), [`Atom<T1, T2, T3, T4>.Define`](/game-api/types/alta-intelligence/atom-t1-t2-t3-t4#m-define), [`Atom<T1, T2, T3>.Define`](/game-api/types/alta-intelligence/atom-t1-t2-t3#m-define), [`Atom<T1, T2>.Define`](/game-api/types/alta-intelligence/atom-t1-t2#m-define), [`Atom<T>.Define`](/game-api/types/alta-intelligence/atom-t#m-define).
