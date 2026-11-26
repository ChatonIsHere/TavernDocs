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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"NewPageArguments()"}</code> |
| <Link id="m-ctor-2" /><code>{"NewPageArguments("}<Link to="/game-api/types/alta-items/pageinstance">{"PageInstance"}</Link>{" page, int spawnedIndex, bool isInserting)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"uint instance"}</code> | Network identifier of the new page entity. |
| <Link id="m-isinserting" /><code>{"bool isInserting"}</code> | Whether the page is inserted from the middle of the book. |
| <Link id="m-spawnedindex" /><code>{"int spawnedIndex"}</code> | Where the page goes in the book's list of spawned pages. |

## Used in

Members of other types that take, return or hold a `NewPageArguments`:

[`Book.addPage`](/game-api/types/alta-items/book#m-addpage), [`Book.AddPage`](/game-api/types/alta-items/book#m-addpage-3).
