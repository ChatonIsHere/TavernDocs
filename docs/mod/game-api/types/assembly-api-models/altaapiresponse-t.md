---
title: "AltaApiResponse<T>"
description: "A list response from the Alta API: the items plus query metadata."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AltaApiResponse&lt;T&gt;

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

A list response from the Alta API: the items plus query metadata.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AltaApiResponse(IEnumerable<T> data, "}<Link to="/mod/game-api/types/assembly-api-models/querymeta">{"QueryMeta"}</Link>{" meta)"}</code> | <span className="api-desc">Creates an `AltaApiResponse` from `data` and `meta`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code>{"IEnumerable<T> Data { get; }"}</code> | <span className="api-desc">The returned items.</span> |
| <Link id="m-meta" /><code><Link to="/mod/game-api/types/assembly-api-models/querymeta">{"QueryMeta"}</Link>{" Meta { get; }"}</code> | <span className="api-desc">Metadata about the query, such as paging.</span> |
