---
title: "NewPageArguments"
description: "Message payload a Book sends to chunks when the server spawns a page into it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NewPageArguments

A **class** in `Root.Township`, `Alta.Pages`.

Message payload a `Book` sends to chunks when the server spawns a page into it.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NewPageArguments()"}</code> | <span className="api-desc">Creates a `NewPageArguments` from `page`, `spawnedIndex` and `isInserting`.</span> |
| <Link id="m-ctor-2" /><code>{"NewPageArguments("}<Link to="/mod/game-api/types/alta-items/pageinstance">{"PageInstance"}</Link>{" page, int spawnedIndex, bool isInserting)"}</code> | <span className="api-desc">Creates a `NewPageArguments` from `page`, `spawnedIndex` and `isInserting`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"uint instance"}</code> | <span className="api-desc">Network identifier of the new page entity.</span> |
| <Link id="m-isinserting" /><code>{"bool isInserting"}</code> | <span className="api-desc">Whether the page is inserted from the middle of the book.</span> |
| <Link id="m-spawnedindex" /><code>{"int spawnedIndex"}</code> | <span className="api-desc">Where the page goes in the book's list of spawned pages.</span> |

## Used in

Members of other types that take, return or hold a `NewPageArguments`:

<div className="api-used-in">

[`Book.addPage`](/mod/game-api/types/alta-items/book#m-addpage), [`Book.AddPage`](/mod/game-api/types/alta-items/book#m-addpage-3).

</div>
