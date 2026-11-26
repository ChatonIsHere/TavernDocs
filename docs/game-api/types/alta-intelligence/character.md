---
title: "Character"
description: "A named character in the AI knowledge system with its own atom and knowledge, optionally owned by a parent character."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Character

A **class** in `Root.Township`, `Alta.Intelligence`.

A named character in the AI knowledge system with its own atom and knowledge, optionally owned by a parent character.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code><Link to="/game-api/types/alta-intelligence/character">{"Character"}</Link>{"(string name, "}<Link to="/game-api/types/alta-intelligence/character">{"Character"}</Link>{" parent, params "}<Link to="/game-api/types/alta-intelligence/knowledgeholder">{"KnowledgeHolder"}</Link>{"[] parentingKnowledge)"}</code> | Creates a `Character` from `name`, `parent` and `parentingKnowledge`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-atom" /><code><Link to="/game-api/types/alta-intelligence/baseatom">{"BaseAtom"}</Link>{" Atom { get; private set; }"}</code> | The atom named after this character. |
| <Link id="m-knowledge" /><code><Link to="/game-api/types/alta-intelligence/knowledgeholder">{"KnowledgeHolder"}</Link>{" Knowledge { get; private set; }"}</code> | This character's knowledge holder, chained to the parent's knowledge. |
| <Link id="m-parent" /><code><Link to="/game-api/types/alta-intelligence/character">{"Character"}</Link>{" Parent { get; private set; }"}</code> | The parent character, or null. |
| <Link id="m-parenting" /><code><Link to="/game-api/types/alta-intelligence/iatomdefinition">{"IAtomDefinition"}</Link>{" Parenting { get; private set; }"}</code> | The `Owner` definition linking the parent's atom to this one, passed to the parenting knowledge holders. |

## Used in

Members of other types that take, return or hold a `Character`:

[`Intelligence.BasicHate`](/game-api/types/alta-intelligence/intelligence#m-basichate).
