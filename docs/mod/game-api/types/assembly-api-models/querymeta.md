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

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"QueryMeta(int offset, bool hasMoreResults)"}</code> | <span className="api-desc">Creates a `QueryMeta` from `offset` and `hasMoreResults`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hasmoreresults" /><code>{"bool HasMoreResults { get; }"}</code> | <span className="api-desc">True if more results are available after this page.</span> |
| <Link id="m-offset" /><code>{"int Offset { get; }"}</code> | <span className="api-desc">Offset of the first result in this page.</span> |
| <Link id="m-results" /><code>{"int Results { get; set; }"}</code> | <span className="api-desc">Number of results (`count` in JSON).</span> |

## Used in

Members of other types that take, return or hold a `QueryMeta`:

<div className="api-used-in">

[`AltaApiResponse<T>.AltaApiResponse<T>`](/mod/game-api/types/assembly-api-models/altaapiresponse-t#m-ctor), [`AltaApiResponse<T>.Meta`](/mod/game-api/types/assembly-api-models/altaapiresponse-t#m-meta).

</div>
