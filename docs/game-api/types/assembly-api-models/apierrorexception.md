---
title: "ApiErrorException"
description: "Exception that carries an ApiError and an HTTP status code (500 unless given)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ApiErrorException

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Exceptions`.

Exception that carries an `ApiError` and an HTTP status code (500 unless given).

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Inherits or implements** `Exception`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ApiErrorException("}<Link to="/game-api/types/assembly-api-models/apierror">{"ApiError"}</Link>{" apiError, HttpStatusCode httpCode = 500)"}</code> | Creates the exception with `errorCode`, `message`, `httpCode`. |
| <Link id="m-ctor-2" /><code>{"ApiErrorException("}<Link to="/game-api/types/assembly-api-models/errorcode">{"ErrorCode"}</Link>{" errorCode, string message, HttpStatusCode httpCode = 500)"}</code> | Creates the exception with `errorCode`, `message`, `httpCode`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-apierror" /><code><Link to="/game-api/types/assembly-api-models/apierror">{"ApiError"}</Link>{" "}<Link to="/game-api/types/assembly-api-models/apierror">{"ApiError"}</Link>{" { get; }"}</code> | The error body. |
| <Link id="m-httpcode" /><code>{"HttpStatusCode HttpCode { get; }"}</code> | HTTP status code for the error. |

## Used in

Members of other types that take, return or hold a `ApiErrorException`:

[`LowLevelApiClient.CreateApiErrorExceptionAsync`](/game-api/types/assembly-api-client/lowlevelapiclient#m-createapierrorexceptionasync), [`HttpResponseExtensionMethods.CreateApiErrorExceptionAsync`](/game-api/types/assembly-api-models/httpresponseextensionmethods#m-createapierrorexceptionasync).
