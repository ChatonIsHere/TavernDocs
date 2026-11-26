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

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Inherits or implements** `Exception`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HttpException(HttpStatusCode statusCode)"}</code> | Creates the exception with `statusCode`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-response" /><code>{"HttpResponseMessage Response { get; set; }"}</code> | The failed `HttpResponseMessage`, when the call went through `HttpClient`. |
| <Link id="m-statuscode" /><code>{"HttpStatusCode StatusCode { get; private set; }"}</code> | The HTTP status the call failed with. |
| <Link id="m-webresponse" /><code>{"HttpWebResponse WebResponse { get; set; }"}</code> | The failed response, when the call went through `HttpWebRequest`. |
