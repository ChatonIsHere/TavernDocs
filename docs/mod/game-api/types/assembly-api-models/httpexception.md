---
title: "HttpException"
description: "Thrown when an API call fails with an HTTP status other than 400 or 403."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HttpException

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Exceptions`.

Thrown when an API call fails with an HTTP status other than 400 or 403. Carries the status and the response.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Inherits or implements** `Exception`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HttpException(HttpStatusCode statusCode)"}</code> | <span className="api-desc">Creates the exception with `statusCode`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-response" /><code>{"HttpResponseMessage Response { get; set; }"}</code> | <span className="api-desc">The failed `HttpResponseMessage`, when the call went through `HttpClient`.</span> |
| <Link id="m-statuscode" /><code>{"HttpStatusCode StatusCode { get; private set; }"}</code> | <span className="api-desc">The HTTP status the call failed with.</span> |
| <Link id="m-webresponse" /><code>{"HttpWebResponse WebResponse { get; set; }"}</code> | <span className="api-desc">The failed response, when the call went through `HttpWebRequest`.</span> |
