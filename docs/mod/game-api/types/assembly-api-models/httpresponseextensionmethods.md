---
title: "HttpResponseExtensionMethods"
description: "Turns API responses into results or exceptions, and logs them."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HttpResponseExtensionMethods

A **static class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Extensions`.

Turns API responses into results or exceptions, and logs them.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Attributes** `Extension`

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger Logger"}</code> | <span className="api-desc">Class logger.</span> |
| <Link id="m-requestidheader" /><code>{"private const string RequestIdHeader"}</code> | <span className="api-desc">Response header that carries the API's request id, `X-Request-Id`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handleforbiddenorotherhttpstatus" /><code>{"static async Task<Exception> HandleForbiddenOrOtherHttpStatus(HttpResponseMessage response)"}</code> | <span className="api-desc">Logs a failed response and returns a `ForbiddenException` for 403 or an `HttpException` for anything else.</span> |
| <Link id="m-handleresponse" /><code>{"static async Task<T> HandleResponse<T>(HttpResponseMessage response)"}</code> | <span className="api-desc">Returns the body as `T` on success, otherwise throws an `ApiErrorException` (400) or the exception from `HandleForbiddenOrOtherHttpStatus`.</span> |
| <Link id="m-logdebugresponse" /><code>{"static async Task LogDebugResponse(HttpResponseMessage response)"}</code> | <span className="api-desc">Writes the method, URI, headers, body and request id to the debug log.</span> |
| <Link id="m-logerrorresponse" /><code>{"static async Task LogErrorResponse(HttpResponseMessage response)"}</code> | <span className="api-desc">Writes the method, URI, headers, body and request id to the error log.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-createapierrorexceptionasync" /><code>{"private static async Task<"}<Link to="/mod/game-api/types/assembly-api-models/apierrorexception">{"ApiErrorException"}</Link>{"> CreateApiErrorExceptionAsync(HttpResponseMessage response)"}</code> | <span className="api-desc">Reads a 400 body as an `ApiError` and wraps it in an `ApiErrorException`; unreadable bodies become an `UnspecifiedError`.</span> |

</details>
