---
title: "DisplayArguments"
description: "Message payload a Book sends to chunks to update its page counter: pages found, total pages and the current page."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DisplayArguments

A **class** in `Root.Township`, `Alta.Pages`.

Message payload a `Book` sends to chunks to update its page counter: pages found, total pages and the current page.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DisplayArguments()"}</code> | <span className="api-desc">Creates a `DisplayArguments` from `displayPageFound`, `displayPageTotal` and `pageNumber`.</span> |
| <Link id="m-ctor-2" /><code>{"DisplayArguments(int displayPageFound, int displayPageTotal, int pageNumber)"}</code> | <span className="api-desc">Creates a `DisplayArguments` from `displayPageFound`, `displayPageTotal` and `pageNumber`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-displaypagefound" /><code>{"int displayPageFound"}</code> | <span className="api-desc">How many pages are in the book.</span> |
| <Link id="m-displaypagenumber" /><code>{"int displayPageNumber"}</code> | <span className="api-desc">The current page number, or -1 for none.</span> |
| <Link id="m-displaypagetotal" /><code>{"int displayPageTotal"}</code> | <span className="api-desc">Total pages in the collection (250 if the book has none). Sent as 0 to 255.</span> |

## Used in

Members of other types that take, return or hold a `DisplayArguments`:

<div className="api-used-in">

[`Book.setDisplay`](/mod/game-api/types/alta-items/book#m-setdisplay), [`Book.SetDisplay`](/mod/game-api/types/alta-items/book#m-setdisplay-2).

</div>
