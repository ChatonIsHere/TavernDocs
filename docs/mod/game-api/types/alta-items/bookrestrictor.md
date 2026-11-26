---
title: "BookRestrictor"
description: "Server: keeps a book of one page collection tied to a spot, spawning the book if missing and sending it back when a linked fire is lit."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BookRestrictor

A **class** in `Root.Township`, `Alta.Pages`.

Server: keeps a book of one page collection tied to a spot, spawning the book if missing and sending it back when a linked fire is lit.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`PositionRestrictor`](/mod/game-api/types/alta-items/positionrestrictor), [`ISavable<BookRestrictorSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<BookRestrictorSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`BookRestrictorSaveData`](/mod/game-api/types/alta-items/bookrestrictorsavedata)
- **Documented in** [Pages and books](/mod/game-api/items/pages-and-books)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BookRestrictor()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bookonserver" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/book">{"Book"}</Link>{" bookOnServer"}</code> | <span className="api-desc">The book being kept here.</span> |
| <Link id="m-bookprefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/book">{"Book"}</Link>{" bookPrefab"}</code> | <span className="api-desc">Book prefab spawned if there is none.</span> |
| <Link id="m-collection" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pagecollection">{"PageCollection"}</Link>{" collection"}</code> | <span className="api-desc">Page collection the book holds; saved.</span> |
| <Link id="m-summoningfire" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/fire">{"Fire"}</Link>{" summoningFire"}</code> | <span className="api-desc">Optional fire that calls the book back when lit.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: finds or spawns the book, registers and docks it, and hooks the summoning fire.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkfiresummon" /><code>{"private void CheckFireSummon(bool isLit)"}</code> | <span className="api-desc">When the summoning fire is lit and nobody holds the book, returns the book to its spot with an effect.</span> |

</details>
