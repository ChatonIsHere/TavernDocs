---
title: "BookSpawner"
description: "class BookSpawner in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BookSpawner

A **class** in `Root.Township`, `Alta.Pages`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Documented in** [Pages and books](/game-api/items/pages-and-books)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BookSpawner()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-bookprefab" /><code>{"private "}<Link to="/game-api/types/alta-items/book">{"Book"}</Link>{" bookPrefab"}</code> |
| <Link id="m-collections" /><code>{"private "}<Link to="/game-api/types/alta-items/pagecollection">{"PageCollection"}</Link>{"[] collections"}</code> |
| <Link id="m-pageobjects" /><code>{"private Object[] pageObjects"}</code> |
| <Link id="m-pageprefab" /><code>{"private "}<Link to="/game-api/types/alta-items/pageinstance">{"PageInstance"}</Link>{" pagePrefab"}</code> |
| <Link id="m-preferredprovider" /><code>{"private int preferredProvider"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |
