---
title: "TurnPageArguments"
description: "Message payload a Book sends to chunks when the server turns a page."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TurnPageArguments

A **class** in `Root.Township`, `Alta.Pages`.

Message payload a `Book` sends to chunks when the server turns a page.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TurnPageArguments()"}</code> | <span className="api-desc">Creates a `TurnPageArguments` from `spawnedIndex`, `direction` and `isSkipping`.</span> |
| <Link id="m-ctor-2" /><code>{"TurnPageArguments(int spawnedIndex, int direction, bool isSkipping)"}</code> | <span className="api-desc">Creates a `TurnPageArguments` from `spawnedIndex`, `direction` and `isSkipping`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-direction" /><code>{"int direction"}</code> | <span className="api-desc">-1 to turn left, 1 to turn right.</span> |
| <Link id="m-isskipping" /><code>{"bool isSkipping"}</code> | <span className="api-desc">Whether the turn skips the animation.</span> |
| <Link id="m-spawnedindex" /><code>{"int spawnedIndex"}</code> | <span className="api-desc">Which spawned page turns.</span> |

## Used in

Members of other types that take, return or hold a `TurnPageArguments`:

<div className="api-used-in">

[`Book.turnPage`](/mod/game-api/types/alta-items/book#m-turnpage), [`Book.TurnPage`](/mod/game-api/types/alta-items/book#m-turnpage-3).

</div>
