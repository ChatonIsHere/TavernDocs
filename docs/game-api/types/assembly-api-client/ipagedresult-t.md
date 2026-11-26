---
title: "IPagedResult<T>"
description: "A paged list result from the Alta web API, fetched one page at a time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPagedResult&lt;T&gt;

An **interface** in `Alta.Api.Client`, `Alta.Api.Client.LowLevel`.

A paged list result from the Alta web API, fetched one page at a time.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Derived types** [`ConvertedPagedResult<TSource, T>`](/game-api/types/assembly-api-client/convertedpagedresult-tsource-t), [`PagedResult<T>`](/game-api/types/assembly-api-client/pagedresult-t)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hasnext" /><code>{"bool HasNext { get; }"}</code> | Whether there is another page to fetch. |
| <Link id="m-results" /><code>{"IEnumerable<T> Results { get; }"}</code> | The results fetched so far. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getallasync" /><code>{"Task<IEnumerable<T>> GetAllAsync()"}</code> | Fetches every remaining page and returns all the results. |
| <Link id="m-getnextasync" /><code>{"Task<IEnumerable<T>> GetNextAsync()"}</code> | Fetches the next page. |

## Used in

Members of other types that take, return or hold a `IPagedResult&lt;T>`:

[`PaginatedList<T>.page`](/game-api/types/assembly-api-client/paginatedlist-t#m-page), [`PaginatedList<T>.PaginatedList<T>`](/game-api/types/assembly-api-client/paginatedlist-t#m-ctor), [`PaginatedListWithAdd<T>.PaginatedListWithAdd<T>`](/game-api/types/assembly-api-client/paginatedlistwithadd-t#m-ctor), [`ConvertedPagedResult<TSource, T>.ConvertedPagedResult<TSource, T>`](/game-api/types/assembly-api-client/convertedpagedresult-tsource-t#m-ctor), [`ConvertedPagedResult<TSource, T>.pagedResult`](/game-api/types/assembly-api-client/convertedpagedresult-tsource-t#m-pagedresult).
