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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Intelligence()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-attacked" /><code>{"static readonly "}<Link to="/mod/game-api/types/alta-intelligence/atom-t1-t2">{"Atom"}</Link>{"<"}<Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{", "}<Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"> Attacked"}</code> | <span className="api-desc">Atom for "A attacked B".</span> |
| <Link id="m-attackedlocated" /><code>{"static readonly "}<Link to="/mod/game-api/types/alta-intelligence/atom-t1-t2">{"Atom"}</Link>{"<"}<Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{", "}<Link to="/mod/game-api/types/alta-intelligence/idata-t">{"IData"}</Link>{"<Vector3>> AttackedLocated"}</code> | <span className="api-desc">Atom for "the attacker of A was at position P".</span> |
| <Link id="m-equal" /><code>{"static readonly "}<Link to="/mod/game-api/types/alta-intelligence/atom-t1-t2">{"Atom"}</Link>{"<"}<Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{", "}<Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"> Equal"}</code> | <span className="api-desc">Atom for "A equals B", named "Equals".</span> |
| <Link id="m-hates" /><code>{"static readonly "}<Link to="/mod/game-api/types/alta-intelligence/atom-t">{"Atom"}</Link>{"<"}<Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"> Hates"}</code> | <span className="api-desc">Atom for "hates A".</span> |
| <Link id="m-islocated" /><code>{"static readonly "}<Link to="/mod/game-api/types/alta-intelligence/atom-t1-t2">{"Atom"}</Link>{"<"}<Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{", "}<Link to="/mod/game-api/types/alta-intelligence/idata-t">{"IData"}</Link>{"<Vector3>> IsLocated"}</code> | <span className="api-desc">Atom for "A is at position P".</span> |
| <Link id="m-owner" /><code>{"static readonly "}<Link to="/mod/game-api/types/alta-intelligence/atom-t1-t2">{"Atom"}</Link>{"<"}<Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{", "}<Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"> Owner"}</code> | <span className="api-desc">Atom for "A is the direct owner (parent) of B".</span> |
| <Link id="m-owns" /><code>{"static readonly "}<Link to="/mod/game-api/types/alta-intelligence/atom-t1-t2">{"Atom"}</Link>{"<"}<Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{", "}<Link to="/mod/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"> Owns"}</code> | <span className="api-desc">Atom for "A owns B", directly or through a chain of owners.</span> |

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-history" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/history">{"History"}</Link>{" history"}</code> | <span className="api-desc">The event history created in `Awake`.</span> |

</details>

## Methods

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Builds the test knowledge (Everyone, Frogs, Fred, Toads, Ted), records Ted attacking Fred, and logs whether the frogs hate Ted.</span> |
| <Link id="m-basichate" /><code>{"private void BasicHate("}<Link to="/mod/game-api/types/alta-intelligence/character">{"Character"}</Link>{" character)"}</code> | <span className="api-desc">Tells a group that it hates anyone who attacked one of its members.</span> |
| <Link id="m-getlastseen" /><code>{"private bool GetLastSeen("}<Link to="/mod/game-api/types/alta-intelligence/knowledgeholder">{"KnowledgeHolder"}</Link>{" knowledge, "}<Link to="/mod/game-api/types/alta-intelligence/baseatom">{"BaseAtom"}</Link>{" target, out Vector3 position, out float weight)"}</code> | <span className="api-desc">Finds the highest-weighted known position of a target. Never called.</span> |
| <Link id="m-getlastseen2" /><code>{"private Vector3? GetLastSeen2("}<Link to="/mod/game-api/types/alta-intelligence/knowledgeholder">{"KnowledgeHolder"}</Link>{" knowledge, "}<Link to="/mod/game-api/types/alta-intelligence/baseatom">{"BaseAtom"}</Link>{" target)"}</code> | <span className="api-desc">Finds the highest-weighted known position of whoever attacked a target. Never called.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Advances the history clock at a tenth of real time, ageing events.</span> |

</details>
