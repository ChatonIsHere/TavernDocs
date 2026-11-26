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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code><Link to="/game-api/types/alta-intelligence/knowledgeholder">{"KnowledgeHolder"}</Link>{"("}<Link to="/game-api/types/alta-intelligence/knowledgeholder">{"KnowledgeHolder"}</Link>{" parent = null)"}</code> | Creates a `KnowledgeHolder` from `parent`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-definitions" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-intelligence/baseatom">{"BaseAtom"}</Link>{", List<"}<Link to="/game-api/types/alta-intelligence/iatomdefinition">{"IAtomDefinition"}</Link>{">> definitions"}</code> | Facts this holder knows, grouped by atom (functor). `Definitions` also returns the parent's. |
| <Link id="m-knownevents" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-intelligence/day">{"Day"}</Link>{", List<"}<Link to="/game-api/types/alta-intelligence/event">{"Event"}</Link>{">> knownEvents"}</code> | Events this holder knows about, grouped by day. `KnowsAbout` also checks the parent. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-parent" /><code><Link to="/game-api/types/alta-intelligence/knowledgeholder">{"KnowledgeHolder"}</Link>{" Parent { get; private set; }"}</code> | The holder whose knowledge this one also uses, or null. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-definitions-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-intelligence/iatomdefinition">{"IAtomDefinition"}</Link>{"> Definitions("}<Link to="/game-api/types/alta-intelligence/baseatom">{"BaseAtom"}</Link>{" atom) (iterator)"}</code> | Every definition for an atom, from this holder and then its parents. |
| <Link id="m-inform" /><code>{"void Inform("}<Link to="/game-api/types/alta-intelligence/iatomdefinition">{"IAtomDefinition"}</Link>{" definition)"}</code> | Adds a definition, or adds an event and all the knowledge it carries. Already known items are skipped. |
| <Link id="m-inform-2" /><code>{"void Inform("}<Link to="/game-api/types/alta-intelligence/event">{"Event"}</Link>{" newEvent)"}</code> | Adds a definition, or adds an event and all the knowledge it carries. Already known items are skipped. |
| <Link id="m-knowsabout" /><code>{"bool KnowsAbout("}<Link to="/game-api/types/alta-intelligence/event">{"Event"}</Link>{" event)"}</code> | True if this holder or a parent already knows the event. |
| <Link id="m-query" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-intelligence/result">{"Result"}</Link>{"> Query("}<Link to="/game-api/types/alta-intelligence/compound">{"Compound"}</Link>{" query)"}</code> | Evaluates a compound query against this holder's knowledge. |

## Used in

Members of other types that take, return or hold a `KnowledgeHolder`:

[`Character.Character`](/game-api/types/alta-intelligence/character#m-ctor), [`Character.Knowledge`](/game-api/types/alta-intelligence/character#m-knowledge), [`Compound.EvaluateInternal`](/game-api/types/alta-intelligence/compound#m-evaluateinternal), [`Intelligence.GetLastSeen`](/game-api/types/alta-intelligence/intelligence#m-getlastseen), [`Intelligence.GetLastSeen2`](/game-api/types/alta-intelligence/intelligence#m-getlastseen2), [`Not.EvaluateInternal`](/game-api/types/alta-intelligence/not#m-evaluateinternal), [`Operator.EvaluateInternal`](/game-api/types/alta-intelligence/operator#m-evaluateinternal), [`Or.EvaluateInternal`](/game-api/types/alta-intelligence/or#m-evaluateinternal), [`Predicate.Evaluate`](/game-api/types/alta-intelligence/predicate#m-evaluate), [`Predicate.EvaluateInternal`](/game-api/types/alta-intelligence/predicate#m-evaluateinternal), [`True.EvaluateInternal`](/game-api/types/alta-intelligence/true#m-evaluateinternal).
