---
title: "QueryMeta"
description: "Paging info for a list response from the API."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# QueryMeta

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

Paging info for a list response from the API.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"QueryMeta(int offset, bool hasMoreResults)"}</code> | Creates a `QueryMeta` from `offset` and `hasMoreResults`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hasmoreresults" /><code>{"bool HasMoreResults { get; }"}</code> | True if more results are available after this page. |
| <Link id="m-offset" /><code>{"int Offset { get; }"}</code> | Offset of the first result in this page. |
| <Link id="m-results" /><code>{"int Results { get; set; }"}</code> | Number of results (`count` in JSON). |

## Used in

Members of other types that take, return or hold a `QueryMeta`:

[`AltaApiResponse<T>.AltaApiResponse<T>`](/game-api/types/assembly-api-models/altaapiresponse-t#m-ctor), [`AltaApiResponse<T>.Meta`](/game-api/types/assembly-api-models/altaapiresponse-t#m-meta).
