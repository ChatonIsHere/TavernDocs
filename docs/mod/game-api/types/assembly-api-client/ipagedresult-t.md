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

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Derived types** [`ConvertedPagedResult<TSource, T>`](/mod/game-api/types/assembly-api-client/convertedpagedresult-tsource-t), [`PagedResult<T>`](/mod/game-api/types/assembly-api-client/pagedresult-t)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hasnext" /><code>{"bool HasNext { get; }"}</code> | <span className="api-desc">Whether there is another page to fetch.</span> |
| <Link id="m-results" /><code>{"IEnumerable<T> Results { get; }"}</code> | <span className="api-desc">The results fetched so far.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getallasync" /><code>{"Task<IEnumerable<T>> GetAllAsync()"}</code> | <span className="api-desc">Fetches every remaining page and returns all the results.</span> |
| <Link id="m-getnextasync" /><code>{"Task<IEnumerable<T>> GetNextAsync()"}</code> | <span className="api-desc">Fetches the next page.</span> |

## Used in

Members of other types that take, return or hold a `IPagedResult&lt;T>`:

<div className="api-used-in">

[`PaginatedList<T>.page`](/mod/game-api/types/assembly-api-client/paginatedlist-t#m-page), [`PaginatedList<T>.PaginatedList<T>`](/mod/game-api/types/assembly-api-client/paginatedlist-t#m-ctor), [`PaginatedListWithAdd<T>.PaginatedListWithAdd<T>`](/mod/game-api/types/assembly-api-client/paginatedlistwithadd-t#m-ctor), [`ConvertedPagedResult<TSource, T>.ConvertedPagedResult<TSource, T>`](/mod/game-api/types/assembly-api-client/convertedpagedresult-tsource-t#m-ctor), [`ConvertedPagedResult<TSource, T>.pagedResult`](/mod/game-api/types/assembly-api-client/convertedpagedresult-tsource-t#m-pagedresult).

</div>
