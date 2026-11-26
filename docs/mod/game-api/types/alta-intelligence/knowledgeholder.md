---
title: "KnowledgeHolder"
description: "A store of known events and rule definitions for the creature knowledge system."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# KnowledgeHolder

A **class** in `Root.Township`, `Alta.Intelligence`.

A store of known events and rule definitions for the creature knowledge system. It can have a parent, whose knowledge also counts.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code><Link to="/mod/game-api/types/alta-intelligence/knowledgeholder">{"KnowledgeHolder"}</Link>{"("}<Link to="/mod/game-api/types/alta-intelligence/knowledgeholder">{"KnowledgeHolder"}</Link>{" parent = null)"}</code> | <span className="api-desc">Creates a `KnowledgeHolder` from `parent`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-definitions" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-intelligence/baseatom">{"BaseAtom"}</Link>{", List<"}<Link to="/mod/game-api/types/alta-intelligence/iatomdefinition">{"IAtomDefinition"}</Link>{">> definitions"}</code> | <span className="api-desc">Facts this holder knows, grouped by atom (functor). `Definitions` also returns the parent's.</span> |
| <Link id="m-knownevents" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-intelligence/day">{"Day"}</Link>{", List<"}<Link to="/mod/game-api/types/alta-intelligence/event">{"Event"}</Link>{">> knownEvents"}</code> | <span className="api-desc">Events this holder knows about, grouped by day. `KnowsAbout` also checks the parent.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-parent" /><code><Link to="/mod/game-api/types/alta-intelligence/knowledgeholder">{"KnowledgeHolder"}</Link>{" Parent { get; private set; }"}</code> | <span className="api-desc">The holder whose knowledge this one also uses, or null.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-definitions-2" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-intelligence/iatomdefinition">{"IAtomDefinition"}</Link>{"> Definitions("}<Link to="/mod/game-api/types/alta-intelligence/baseatom">{"BaseAtom"}</Link>{" atom) (iterator)"}</code> | <span className="api-desc">Every definition for an atom, from this holder and then its parents.</span> |
| <Link id="m-inform" /><code>{"void Inform("}<Link to="/mod/game-api/types/alta-intelligence/iatomdefinition">{"IAtomDefinition"}</Link>{" definition)"}</code> | <span className="api-desc">Adds a definition, or adds an event and all the knowledge it carries. Already known items are skipped.</span> |
| <Link id="m-inform-2" /><code>{"void Inform("}<Link to="/mod/game-api/types/alta-intelligence/event">{"Event"}</Link>{" newEvent)"}</code> | <span className="api-desc">Adds a definition, or adds an event and all the knowledge it carries. Already known items are skipped.</span> |
| <Link id="m-knowsabout" /><code>{"bool KnowsAbout("}<Link to="/mod/game-api/types/alta-intelligence/event">{"Event"}</Link>{" event)"}</code> | <span className="api-desc">True if this holder or a parent already knows the event.</span> |
| <Link id="m-query" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-intelligence/result">{"Result"}</Link>{"> Query("}<Link to="/mod/game-api/types/alta-intelligence/compound">{"Compound"}</Link>{" query)"}</code> | <span className="api-desc">Evaluates a compound query against this holder's knowledge.</span> |

## Used in

Members of other types that take, return or hold a `KnowledgeHolder`:

<div className="api-used-in">

[`Character.Character`](/mod/game-api/types/alta-intelligence/character#m-ctor), [`Character.Knowledge`](/mod/game-api/types/alta-intelligence/character#m-knowledge), [`Compound.EvaluateInternal`](/mod/game-api/types/alta-intelligence/compound#m-evaluateinternal), [`Intelligence.GetLastSeen`](/mod/game-api/types/alta-intelligence/intelligence#m-getlastseen), [`Intelligence.GetLastSeen2`](/mod/game-api/types/alta-intelligence/intelligence#m-getlastseen2), [`Not.EvaluateInternal`](/mod/game-api/types/alta-intelligence/not#m-evaluateinternal), [`Operator.EvaluateInternal`](/mod/game-api/types/alta-intelligence/operator#m-evaluateinternal), [`Or.EvaluateInternal`](/mod/game-api/types/alta-intelligence/or#m-evaluateinternal), [`Predicate.Evaluate`](/mod/game-api/types/alta-intelligence/predicate#m-evaluate), [`Predicate.EvaluateInternal`](/mod/game-api/types/alta-intelligence/predicate#m-evaluateinternal), [`True.EvaluateInternal`](/mod/game-api/types/alta-intelligence/true#m-evaluateinternal).

</div>
