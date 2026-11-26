---
title: "BookSpawner"
description: "Server: on spawn, spawns a book for each page collection and a page for each page source, scattered within 2 metres."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BookSpawner

A **class** in `Root.Township`, `Alta.Pages`.

Server: on spawn, spawns a book for each page collection and a page for each page source, scattered within 2 metres.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Documented in** [Pages and books](/mod/game-api/items/pages-and-books)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BookSpawner()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bookprefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/book">{"Book"}</Link>{" bookPrefab"}</code> | <span className="api-desc">Book prefab to spawn.</span> |
| <Link id="m-collections" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pagecollection">{"PageCollection"}</Link>{"[] collections"}</code> | <span className="api-desc">Page collections, one book each.</span> |
| <Link id="m-pageobjects" /><code>{"private Object[] pageObjects"}</code> | <span className="api-desc">Page sources (`IPageBasis`), one page each.</span> |
| <Link id="m-pageprefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pageinstance">{"PageInstance"}</Link>{" pagePrefab"}</code> | <span className="api-desc">Page prefab to spawn.</span> |
| <Link id="m-preferredprovider" /><code>{"private int preferredProvider"}</code> | <span className="api-desc">Provider ID passed when creating each page.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: spawns the books and pages as children of this entity at random spots nearby.</span> |
