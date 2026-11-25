---
title: "HttpResponseExtensionMethods"
description: "static class HttpResponseExtensionMethods in Alta.Api.DataTransferModels."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HttpResponseExtensionMethods

A **static class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Extensions`.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Attributes** `Extension`

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger Logger"}</code> |  |
| <Link id="m-requestidheader" /><code>{"private const string RequestIdHeader"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handleforbiddenorotherhttpstatus" /><code>{"static async Task<Exception> HandleForbiddenOrOtherHttpStatus(HttpResponseMessage response)"}</code> |  |
| <Link id="m-handleresponse" /><code>{"static async Task<T> HandleResponse<T>(HttpResponseMessage response)"}</code> |  |
| <Link id="m-logdebugresponse" /><code>{"static async Task LogDebugResponse(HttpResponseMessage response)"}</code> |  |
| <Link id="m-logerrorresponse" /><code>{"static async Task LogErrorResponse(HttpResponseMessage response)"}</code> |  |
| <Link id="m-createapierrorexceptionasync" /><code>{"private static async Task<"}<Link to="/game-api/types/assembly-api-models/apierrorexception">{"ApiErrorException"}</Link>{"> CreateApiErrorExceptionAsync(HttpResponseMessage response)"}</code> |  |
