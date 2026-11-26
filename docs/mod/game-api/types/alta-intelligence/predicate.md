---
title: "Predicate"
description: "Base for a logic term in the AI knowledge system: a functor with argument terms that is evaluated against a KnowledgeHolder to produce weighted results."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Predicate

An **abstract class** in `Root.Township`, `Alta.Intelligence`.

Base for a logic term in the AI knowledge system: a functor with argument terms that is evaluated against a `KnowledgeHolder` to produce weighted results. Operators combine predicates.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`ITerm`](/mod/game-api/types/alta-intelligence/iterm), [`ICompoundPart`](/mod/game-api/types/alta-intelligence/icompoundpart)
- **Derived types** [`Compound`](/mod/game-api/types/alta-intelligence/compound), [`Not`](/mod/game-api/types/alta-intelligence/not), [`Operator`](/mod/game-api/types/alta-intelligence/operator), [`True`](/mod/game-api/types/alta-intelligence/true)
- **Attributes** `DebuggerDisplay`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Predicate("}<Link to="/mod/game-api/types/alta-intelligence/baseatom">{"BaseAtom"}</Link>{" functor, params "}<Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"[] terms)"}</code> | <span className="api-desc">Creates a `Predicate` from `functor` and `terms`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-functor" /><code><Link to="/mod/game-api/types/alta-intelligence/baseatom">{"BaseAtom"}</Link>{" Functor { get; private set; }"}</code> | <span className="api-desc">The predicate's head atom.</span> |
| <Link id="m-terms" /><code><Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"[] Terms { get; private set; }"}</code> | <span className="api-desc">The predicate's arguments.</span> |

<details className="api-private">
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-intelligence-icompoundpart-first" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{" Alta.Intelligence.ICompoundPart.First { get; }"}</code> | <span className="api-desc">The functor, as the compound's first part.</span> |
| <Link id="m-alta-intelligence-icompoundpart-remaining" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"[] Alta.Intelligence.ICompoundPart.Remaining { get; }"}</code> | <span className="api-desc">The terms, as the compound's remaining parts.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkbind" /><code><Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{" CheckBind(Dictionary<"}<Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{", "}<Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"> bindings)"}</code> | <span className="api-desc">Returns this predicate with any bound variables replaced, or itself if nothing is bound.</span> |
| <Link id="m-constantinitialize" /><code>{"void ConstantInitialize("}<Link to="/mod/game-api/types/alta-intelligence/iatomdefinition">{"IAtomDefinition"}</Link>{" definition)"}</code> | <span className="api-desc">Initializes constant terms from an atom definition.</span> |
| <Link id="m-contains" /><code>{"bool Contains("}<Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{" other)"}</code> | <span className="api-desc">True if the given term is this predicate, its functor or inside any of its terms.</span> |
| <Link id="m-evaluate" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-intelligence/result">{"Result"}</Link>{"> Evaluate("}<Link to="/mod/game-api/types/alta-intelligence/knowledgeholder">{"KnowledgeHolder"}</Link>{" knowledgeHolder) (iterator)"}</code> | <span className="api-desc">Evaluates against a knowledge holder and merges results with the same bindings, keeping the highest weighting.</span> |
| <Link id="m-op-addition" /><code>{"static "}<Link to="/mod/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" op_Addition("}<Link to="/mod/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" left, "}<Link to="/mod/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" right)"}</code> | <span className="api-desc">Combines two predicates with `Plus`.</span> |
| <Link id="m-op-bitwiseand" /><code>{"static "}<Link to="/mod/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" op_BitwiseAnd("}<Link to="/mod/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" left, "}<Link to="/mod/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" right)"}</code> | <span className="api-desc">Combines two predicates with `And`.</span> |
| <Link id="m-op-bitwiseor" /><code>{"static "}<Link to="/mod/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" op_BitwiseOr("}<Link to="/mod/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" left, "}<Link to="/mod/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" right)"}</code> | <span className="api-desc">Combines two predicates with `Or`.</span> |
| <Link id="m-op-exclusiveor" /><code>{"static "}<Link to="/mod/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" op_ExclusiveOr("}<Link to="/mod/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" left, "}<Link to="/mod/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" right)"}</code> | <span className="api-desc">Combines two predicates with `Xor`.</span> |
| <Link id="m-op-implicit" /><code>{"static "}<Link to="/mod/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" op_Implicit(bool value)"}</code> | <span className="api-desc">Converts a bool: true becomes a `True` predicate, false becomes null.</span> |
| <Link id="m-op-logicalnot" /><code>{"static "}<Link to="/mod/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" op_LogicalNot("}<Link to="/mod/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" right)"}</code> | <span className="api-desc">Wraps a predicate in `Not`.</span> |
| <Link id="m-evaluateinternal" /><code>{"protected abstract IEnumerable<"}<Link to="/mod/game-api/types/alta-intelligence/result">{"Result"}</Link>{"> EvaluateInternal("}<Link to="/mod/game-api/types/alta-intelligence/knowledgeholder">{"KnowledgeHolder"}</Link>{" knowledgeHolder)"}</code> | <span className="api-desc">Subclass evaluation. Results are deduplicated by `Evaluate`.</span> |
| <Link id="m-fromcompoundpart" /><code>{"protected abstract "}<Link to="/mod/game-api/types/alta-intelligence/predicate">{"Predicate"}</Link>{" FromCompoundPart("}<Link to="/mod/game-api/types/alta-intelligence/compoundpart">{"CompoundPart"}</Link>{" compoundPart)"}</code> | <span className="api-desc">Builds a predicate of the same kind from a rebuilt functor and terms.</span> |

## Used in

Members of other types that take, return or hold a `Predicate`:

<div className="api-used-in">

[`And.And`](/mod/game-api/types/alta-intelligence/and#m-ctor), [`And.FromCompoundPart`](/mod/game-api/types/alta-intelligence/and#m-fromcompoundpart), [`Atom.Define`](/mod/game-api/types/alta-intelligence/atom#m-define), [`Atom<T1, T2, T3, T4>.Define`](/mod/game-api/types/alta-intelligence/atom-t1-t2-t3-t4#m-define-2), [`Atom<T1, T2, T3>.Define`](/mod/game-api/types/alta-intelligence/atom-t1-t2-t3#m-define-2), [`Atom<T1, T2>.Define`](/mod/game-api/types/alta-intelligence/atom-t1-t2#m-define-2), [`Atom<T>.Define`](/mod/game-api/types/alta-intelligence/atom-t#m-define-2), [`BaseAtom.Definition.Definition`](/mod/game-api/types/alta-intelligence/baseatom-definition#m-ctor), [`BaseAtom.Definition.Goal`](/mod/game-api/types/alta-intelligence/baseatom-definition#m-goal), [`Compound.FromCompoundPart`](/mod/game-api/types/alta-intelligence/compound#m-fromcompoundpart), [`IAtomDefinition.Goal`](/mod/game-api/types/alta-intelligence/iatomdefinition#m-goal), [`Not.FromCompoundPart`](/mod/game-api/types/alta-intelligence/not#m-fromcompoundpart), [`Not.Not`](/mod/game-api/types/alta-intelligence/not#m-ctor), [`Not.Right`](/mod/game-api/types/alta-intelligence/not#m-right), [`Operator.Left`](/mod/game-api/types/alta-intelligence/operator#m-left), [`Operator.Operator`](/mod/game-api/types/alta-intelligence/operator#m-ctor), [`Operator.Right`](/mod/game-api/types/alta-intelligence/operator#m-right), [`Or.FromCompoundPart`](/mod/game-api/types/alta-intelligence/or#m-fromcompoundpart), [`Or.Or`](/mod/game-api/types/alta-intelligence/or#m-ctor), [`Plus.FromCompoundPart`](/mod/game-api/types/alta-intelligence/plus#m-fromcompoundpart), [`Plus.Plus`](/mod/game-api/types/alta-intelligence/plus#m-ctor), [`True.FromCompoundPart`](/mod/game-api/types/alta-intelligence/true#m-fromcompoundpart), [`Xor.FromCompoundPart`](/mod/game-api/types/alta-intelligence/xor#m-fromcompoundpart), [`Xor.Xor`](/mod/game-api/types/alta-intelligence/xor#m-ctor).

</div>
