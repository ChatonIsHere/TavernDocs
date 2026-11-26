---
title: "HttpClientExtensions.JsonContent"
description: "HTTP string content holding an object serialized to UTF-8 JSON."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HttpClientExtensions.JsonContent

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Extensions`.

HTTP string content holding an object serialized to UTF-8 JSON. Used by the JSON post, put, patch and delete helpers.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Nested in** [`HttpClientExtensions`](/mod/game-api/types/assembly-api-models/httpclientextensions)
- **Inherits or implements** `StringContent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"JsonContent(object obj)"}</code> | <span className="api-desc">Creates a `HttpClientExtensions.JsonContent` from `obj`.</span> |

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-convert" /><code>{"private static string Convert(object obj)"}</code> | <span className="api-desc">Serializes the object with Json.NET. A null object gives an empty string and a warning.</span> |

</details>

## Used in

Members of other types that take, return or hold a `JsonContent`:

<div className="api-used-in">

[`HttpClientExtensions.LogApiRequest`](/mod/game-api/types/assembly-api-models/httpclientextensions#m-logapirequest), [`HttpClientExtensions.PostJsonAsync`](/mod/game-api/types/assembly-api-models/httpclientextensions#m-postjsonasync).

</div>
