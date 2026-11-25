---
title: "ApiErrorException"
description: "class ApiErrorException in Alta.Api.DataTransferModels."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ApiErrorException

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Exceptions`.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Inherits or implements** `Exception`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ApiErrorException("}<Link to="/game-api/types/assembly-api-models/apierror">{"ApiError"}</Link>{" apiError, HttpStatusCode httpCode = 500)"}</code> |
| <Link id="m-ctor-2" /><code>{"ApiErrorException("}<Link to="/game-api/types/assembly-api-models/errorcode">{"ErrorCode"}</Link>{" errorCode, string message, HttpStatusCode httpCode = 500)"}</code> |

## Properties

| Member |
| --- |
| <Link id="m-apierror" /><code><Link to="/game-api/types/assembly-api-models/apierror">{"ApiError"}</Link>{" "}<Link to="/game-api/types/assembly-api-models/apierror">{"ApiError"}</Link>{" { get; }"}</code> |
| <Link id="m-httpcode" /><code>{"HttpStatusCode HttpCode { get; }"}</code> |

## Used in

Members of other types that take, return or hold a `ApiErrorException`:

[`LowLevelApiClient.CreateApiErrorExceptionAsync`](/game-api/types/assembly-api-client/lowlevelapiclient#m-createapierrorexceptionasync), [`HttpResponseExtensionMethods.CreateApiErrorExceptionAsync`](/game-api/types/assembly-api-models/httpresponseextensionmethods#m-createapierrorexceptionasync).
