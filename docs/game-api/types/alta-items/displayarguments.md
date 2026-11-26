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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DisplayArguments()"}</code> |
| <Link id="m-ctor-2" /><code>{"DisplayArguments(int displayPageFound, int displayPageTotal, int pageNumber)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-displaypagefound" /><code>{"int displayPageFound"}</code> | How many pages are in the book. |
| <Link id="m-displaypagenumber" /><code>{"int displayPageNumber"}</code> | The current page number, or -1 for none. |
| <Link id="m-displaypagetotal" /><code>{"int displayPageTotal"}</code> | Total pages in the collection (250 if the book has none). Sent as 0 to 255. |

## Used in

Members of other types that take, return or hold a `DisplayArguments`:

[`Book.setDisplay`](/game-api/types/alta-items/book#m-setdisplay), [`Book.SetDisplay`](/game-api/types/alta-items/book#m-setdisplay-2).
