---
title: "ConvertedPagedResult<TSource, T>"
description: "class ConvertedPagedResult<TSource, T> in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConvertedPagedResult&lt;TSource, T&gt;

A **class** in `Alta.Api.Client`, `Alta.Api.Client.LowLevel`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** [`IPagedResult<T>`](/game-api/types/assembly-api-client/ipagedresult-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ConvertedPagedResult("}<Link to="/game-api/types/assembly-api-client/ipagedresult-t">{"IPagedResult"}</Link>{"<TSource> pagedResult, Func<TSource, T> p)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-p" /><code>{"private readonly Func<TSource, T> p"}</code> |  |
| <Link id="m-pagedresult" /><code>{"private readonly "}<Link to="/game-api/types/assembly-api-client/ipagedresult-t">{"IPagedResult"}</Link>{"<TSource> pagedResult"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hasnext" /><code>{"bool HasNext { get; }"}</code> |  |
| <Link id="m-results" /><code>{"IEnumerable<T> Results { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getallasync" /><code>{"async Task<IEnumerable<T>> GetAllAsync()"}</code> |  |
| <Link id="m-getnextasync" /><code>{"async Task<IEnumerable<T>> GetNextAsync()"}</code> |  |
