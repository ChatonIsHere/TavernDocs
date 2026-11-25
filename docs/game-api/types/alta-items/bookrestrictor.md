---
title: "BookRestrictor"
description: "class BookRestrictor in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BookRestrictor

A **class** in `Root.Township`, `Alta.Pages`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`PositionRestrictor`](/game-api/types/alta-items/positionrestrictor), [`ISavable<BookRestrictorSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<BookRestrictorSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`BookRestrictorSaveData`](/game-api/types/alta-items/bookrestrictorsavedata)
- **Documented in** [Pages and books](/game-api/items/pages-and-books)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BookRestrictor()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-bookonserver" /><code>{"private "}<Link to="/game-api/types/alta-items/book">{"Book"}</Link>{" bookOnServer"}</code> |  |
| <Link id="m-bookprefab" /><code>{"private "}<Link to="/game-api/types/alta-items/book">{"Book"}</Link>{" bookPrefab"}</code> |  |
| <Link id="m-collection" /><code>{"private "}<Link to="/game-api/types/alta-items/pagecollection">{"PageCollection"}</Link>{" collection"}</code> |  |
| <Link id="m-summoningfire" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/fire">{"Fire"}</Link>{" summoningFire"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-checkfiresummon" /><code>{"private void CheckFireSummon(bool isLit)"}</code> |  |
