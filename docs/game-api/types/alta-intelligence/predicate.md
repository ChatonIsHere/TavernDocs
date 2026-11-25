---
title: "Predicate"
description: "abstract class Predicate in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Predicate

An **abstract class** in `Root.Township`, `Alta.Intelligence`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`ITerm`](/game-api/types/alta-intelligence/iterm), [`ICompoundPart`](/game-api/types/alta-intelligence/icompoundpart)
- **Derived types** [`Compound`](/game-api/types/alta-intelligence/compound), [`Not`](/game-api/types/alta-intelligence/not), [`Operator`](/game-api/types/alta-intelligence/operator), [`True`](/game-api/types/alta-intelligence/true)
- **Attributes** `DebuggerDisplay`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Predicate("}<Link to="/game-api/types/alta-intelligence/baseatom">{"BaseAtom"}</Link>{" functor, params "}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"[] terms)"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-functor" /><code><Link to="/game-api/types/alta-intelligence/baseatom">{"BaseAtom"}</Link>{" Functor { get; private set; }"}</code> |  |
| <Link id="m-terms" /><code><Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"[] Terms { get; private set; }"}</code> |  |
| <Link id="m-alta-intelligence-icompoundpart-first" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{" Alta.Intelligence.ICompoundPart.First { get; }"}</code> |  |
| <Link id="m-alta-intelligence-icompoundpart-remaining" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"[] Alta.Intelligence.ICompoundPart.Remaining { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkbind" /><code><Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{" CheckBind(Dictionary<"}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"> bindings)"}</code> |  |
| <Link id="m-constantinitialize" /><code>{"void ConstantInitialize("}<Link to="/game-api/types/alta-intelligence/iatomdefinition">{"IAtomDefinition"}</Link>{" definition)"}</code> |  |
| <Link id="m-contains" /><code>{"bool Contains("}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{" other)"}</code> |  |
| <Link id="m-evaluate" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-intelligence/result">{"Result"}</Link>{"> Evaluate("}<Link to="/game-api/types/alta-intelligence/knowledgeholder">{"KnowledgeHolder"}</Link>{" knowledgeHolder) (iterator)"}</code> |  |
| <Link id="m-op-addition" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" op_Addition("}<Link to="/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" left, "}<Link to="/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" right)"}</code> |  |
| <Link id="m-op-bitwiseand" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" op_BitwiseAnd("}<Link to="/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" left, "}<Link to="/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" right)"}</code> |  |
| <Link id="m-op-bitwiseor" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" op_BitwiseOr("}<Link to="/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" left, "}<Link to="/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" right)"}</code> |  |
| <Link id="m-op-exclusiveor" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" op_ExclusiveOr("}<Link to="/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" left, "}<Link to="/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" right)"}</code> |  |
| <Link id="m-op-implicit" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" op_Implicit(bool value)"}</code> |  |
| <Link id="m-op-logicalnot" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" op_LogicalNot("}<Link to="/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" right)"}</code> |  |
| <Link id="m-evaluateinternal" /><code>{"protected abstract IEnumerable<"}<Link to="/game-api/types/alta-intelligence/result">{"Result"}</Link>{"> EvaluateInternal("}<Link to="/game-api/types/alta-intelligence/knowledgeholder">{"KnowledgeHolder"}</Link>{" knowledgeHolder)"}</code> |  |
| <Link id="m-fromcompoundpart" /><code>{"protected abstract "}<Link to="/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" FromCompoundPart("}<Link to="/game-api/types/alta-intelligence/compoundpart">{"CompoundPart"}</Link>{" compoundPart)"}</code> |  |

## Used in

Members of other types that take, return or hold a `Predicate`:

[`And.And`](/game-api/types/alta-intelligence/and#m-ctor), [`And.FromCompoundPart`](/game-api/types/alta-intelligence/and#m-fromcompoundpart), [`Atom.Define`](/game-api/types/alta-intelligence/atom#m-define), [`Atom<T1, T2, T3, T4>.Define`](/game-api/types/alta-intelligence/atom-t1-t2-t3-t4#m-define-2), [`Atom<T1, T2, T3>.Define`](/game-api/types/alta-intelligence/atom-t1-t2-t3#m-define-2), [`Atom<T1, T2>.Define`](/game-api/types/alta-intelligence/atom-t1-t2#m-define-2), [`Atom<T>.Define`](/game-api/types/alta-intelligence/atom-t#m-define-2), [`BaseAtom.Definition.Definition`](/game-api/types/alta-intelligence/baseatom-definition#m-ctor), [`BaseAtom.Definition.Goal`](/game-api/types/alta-intelligence/baseatom-definition#m-goal), [`Compound.FromCompoundPart`](/game-api/types/alta-intelligence/compound#m-fromcompoundpart), [`IAtomDefinition.Goal`](/game-api/types/alta-intelligence/iatomdefinition#m-goal), [`Not.FromCompoundPart`](/game-api/types/alta-intelligence/not#m-fromcompoundpart), [`Not.Not`](/game-api/types/alta-intelligence/not#m-ctor), [`Not.Right`](/game-api/types/alta-intelligence/not#m-right), [`Operator.Left`](/game-api/types/alta-intelligence/operator#m-left), [`Operator.Operator`](/game-api/types/alta-intelligence/operator#m-ctor), [`Operator.Right`](/game-api/types/alta-intelligence/operator#m-right), [`Or.FromCompoundPart`](/game-api/types/alta-intelligence/or#m-fromcompoundpart), [`Or.Or`](/game-api/types/alta-intelligence/or#m-ctor), [`Plus.FromCompoundPart`](/game-api/types/alta-intelligence/plus#m-fromcompoundpart), [`Plus.Plus`](/game-api/types/alta-intelligence/plus#m-ctor), [`True.FromCompoundPart`](/game-api/types/alta-intelligence/true#m-fromcompoundpart), [`Xor.FromCompoundPart`](/game-api/types/alta-intelligence/xor#m-fromcompoundpart), [`Xor.Xor`](/game-api/types/alta-intelligence/xor#m-ctor).
