---
title: "Intelligence"
description: "class Intelligence in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Intelligence

A **class** in `Root.Township`, `Alta.Intelligence`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Intelligence()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-attacked" /><code>{"static readonly "}<Link to="/game-api/types/alta-intelligence/atom-t1-t2">{"Atom"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"> Attacked"}</code> |  |
| <Link id="m-attackedlocated" /><code>{"static readonly "}<Link to="/game-api/types/alta-intelligence/atom-t1-t2">{"Atom"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/idata-t">{"IData"}</Link>{"<Vector3>> AttackedLocated"}</code> |  |
| <Link id="m-equal" /><code>{"static readonly "}<Link to="/game-api/types/alta-intelligence/atom-t1-t2">{"Atom"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"> Equal"}</code> |  |
| <Link id="m-hates" /><code>{"static readonly "}<Link to="/game-api/types/alta-intelligence/atom-t">{"Atom"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"> Hates"}</code> |  |
| <Link id="m-islocated" /><code>{"static readonly "}<Link to="/game-api/types/alta-intelligence/atom-t1-t2">{"Atom"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/idata-t">{"IData"}</Link>{"<Vector3>> IsLocated"}</code> |  |
| <Link id="m-owner" /><code>{"static readonly "}<Link to="/game-api/types/alta-intelligence/atom-t1-t2">{"Atom"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"> Owner"}</code> |  |
| <Link id="m-owns" /><code>{"static readonly "}<Link to="/game-api/types/alta-intelligence/atom-t1-t2">{"Atom"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"> Owns"}</code> |  |
| <Link id="m-history" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/history">{"History"}</Link>{" history"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-basichate" /><code>{"private void BasicHate("}<Link to="/game-api/types/alta-intelligence/character">{"Character"}</Link>{" character)"}</code> |  |
| <Link id="m-getlastseen" /><code>{"private bool GetLastSeen("}<Link to="/game-api/types/alta-intelligence/knowledgeholder">{"KnowledgeHolder"}</Link>{" knowledge, "}<Link to="/game-api/types/alta-intelligence/baseatom">{"BaseAtom"}</Link>{" target, out Vector3 position, out float weight)"}</code> |  |
| <Link id="m-getlastseen2" /><code>{"private Vector3? GetLastSeen2("}<Link to="/game-api/types/alta-intelligence/knowledgeholder">{"KnowledgeHolder"}</Link>{" knowledge, "}<Link to="/game-api/types/alta-intelligence/baseatom">{"BaseAtom"}</Link>{" target)"}</code> |  |
| <Link id="m-update" /><code>{"private void Update()"}</code> |  |
