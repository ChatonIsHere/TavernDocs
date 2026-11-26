---
title: "Intelligence"
description: "Unfinished experiment with a Prolog-like knowledge system (who owns, hates and attacked whom, with fading memories)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Intelligence

A **class** in `Root.Township`, `Alta.Intelligence`.

Unfinished experiment with a Prolog-like knowledge system (who owns, hates and attacked whom, with fading memories). `Awake` only builds a hard-coded test with frogs and toads and logs a query; no creature uses it.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Intelligence()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-attacked" /><code>{"static readonly "}<Link to="/game-api/types/alta-intelligence/atom-t1-t2">{"Atom"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"> Attacked"}</code> | Atom for "A attacked B". |
| <Link id="m-attackedlocated" /><code>{"static readonly "}<Link to="/game-api/types/alta-intelligence/atom-t1-t2">{"Atom"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/idata-t">{"IData"}</Link>{"<Vector3>> AttackedLocated"}</code> | Atom for "the attacker of A was at position P". |
| <Link id="m-equal" /><code>{"static readonly "}<Link to="/game-api/types/alta-intelligence/atom-t1-t2">{"Atom"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"> Equal"}</code> | Atom for "A equals B", named "Equals". |
| <Link id="m-hates" /><code>{"static readonly "}<Link to="/game-api/types/alta-intelligence/atom-t">{"Atom"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"> Hates"}</code> | Atom for "hates A". |
| <Link id="m-islocated" /><code>{"static readonly "}<Link to="/game-api/types/alta-intelligence/atom-t1-t2">{"Atom"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/idata-t">{"IData"}</Link>{"<Vector3>> IsLocated"}</code> | Atom for "A is at position P". |
| <Link id="m-owner" /><code>{"static readonly "}<Link to="/game-api/types/alta-intelligence/atom-t1-t2">{"Atom"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"> Owner"}</code> | Atom for "A is the direct owner (parent) of B". |
| <Link id="m-owns" /><code>{"static readonly "}<Link to="/game-api/types/alta-intelligence/atom-t1-t2">{"Atom"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"> Owns"}</code> | Atom for "A owns B", directly or through a chain of owners. |

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-history" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/history">{"History"}</Link>{" history"}</code> | The event history created in `Awake`. |

</details>

## Methods

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Builds the test knowledge (Everyone, Frogs, Fred, Toads, Ted), records Ted attacking Fred, and logs whether the frogs hate Ted. |
| <Link id="m-basichate" /><code>{"private void BasicHate("}<Link to="/game-api/types/alta-intelligence/character">{"Character"}</Link>{" character)"}</code> | Tells a group that it hates anyone who attacked one of its members. |
| <Link id="m-getlastseen" /><code>{"private bool GetLastSeen("}<Link to="/game-api/types/alta-intelligence/knowledgeholder">{"KnowledgeHolder"}</Link>{" knowledge, "}<Link to="/game-api/types/alta-intelligence/baseatom">{"BaseAtom"}</Link>{" target, out Vector3 position, out float weight)"}</code> | Finds the highest-weighted known position of a target. Never called. |
| <Link id="m-getlastseen2" /><code>{"private Vector3? GetLastSeen2("}<Link to="/game-api/types/alta-intelligence/knowledgeholder">{"KnowledgeHolder"}</Link>{" knowledge, "}<Link to="/game-api/types/alta-intelligence/baseatom">{"BaseAtom"}</Link>{" target)"}</code> | Finds the highest-weighted known position of whoever attacked a target. Never called. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Advances the history clock at a tenth of real time, ageing events. |

</details>
