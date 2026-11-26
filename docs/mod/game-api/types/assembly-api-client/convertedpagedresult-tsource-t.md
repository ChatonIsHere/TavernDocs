---
title: "ConvertedPagedResult<TSource, T>"
description: "Wraps a paged API result and converts each item with a function, so a page of one model type can be read as another."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConvertedPagedResult&lt;TSource, T&gt;

A **class** in `Alta.Api.Client`, `Alta.Api.Client.LowLevel`.

Wraps a paged API result and converts each item with a function, so a page of one model type can be read as another.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Inherits or implements** [`IPagedResult<T>`](/mod/game-api/types/assembly-api-client/ipagedresult-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ConvertedPagedResult("}<Link to="/mod/game-api/types/assembly-api-client/ipagedresult-t">{"IPagedResult"}</Link>{"<TSource> pagedResult, Func<TSource, T> p)"}</code> | <span className="api-desc">Creates a `ConvertedPagedResult` from `pagedResult` and `p`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-p" /><code>{"private readonly Func<TSource, T> p"}</code> | <span className="api-desc">The conversion function.</span> |
| <Link id="m-pagedresult" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-api-client/ipagedresult-t">{"IPagedResult"}</Link>{"<TSource> pagedResult"}</code> | <span className="api-desc">The wrapped paged result.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hasnext" /><code>{"bool HasNext { get; }"}</code> | <span className="api-desc">Whether the wrapped result has another page.</span> |
| <Link id="m-results" /><code>{"IEnumerable<T> Results { get; }"}</code> | <span className="api-desc">The current page's items, converted lazily each time it's read.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getallasync" /><code>{"async Task<IEnumerable<T>> GetAllAsync()"}</code> | <span className="api-desc">Fetches every remaining page from the wrapped result and returns the converted items.</span> |
| <Link id="m-getnextasync" /><code>{"async Task<IEnumerable<T>> GetNextAsync()"}</code> | <span className="api-desc">Fetches the next page and returns its items converted.</span> |
