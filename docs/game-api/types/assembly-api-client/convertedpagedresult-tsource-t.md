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

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** [`IPagedResult<T>`](/game-api/types/assembly-api-client/ipagedresult-t)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ConvertedPagedResult("}<Link to="/game-api/types/assembly-api-client/ipagedresult-t">{"IPagedResult"}</Link>{"<TSource> pagedResult, Func<TSource, T> p)"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-p" /><code>{"private readonly Func<TSource, T> p"}</code> | The conversion function. |
| <Link id="m-pagedresult" /><code>{"private readonly "}<Link to="/game-api/types/assembly-api-client/ipagedresult-t">{"IPagedResult"}</Link>{"<TSource> pagedResult"}</code> | The wrapped paged result. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hasnext" /><code>{"bool HasNext { get; }"}</code> | Whether the wrapped result has another page. |
| <Link id="m-results" /><code>{"IEnumerable<T> Results { get; }"}</code> | The current page's items, converted lazily each time it's read. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getallasync" /><code>{"async Task<IEnumerable<T>> GetAllAsync()"}</code> | Fetches every remaining page from the wrapped result and returns the converted items. |
| <Link id="m-getnextasync" /><code>{"async Task<IEnumerable<T>> GetNextAsync()"}</code> | Fetches the next page and returns its items converted. |
