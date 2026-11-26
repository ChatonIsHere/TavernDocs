---
title: "ApiError"
description: "Error body returned by the Alta web API: message, error code, request validation errors and optional context."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ApiError

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Errors`.

Error body returned by the Alta web API: message, error code, request validation errors and optional context.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Derived types** [`NotFoundApiError`](/game-api/types/assembly-api-models/notfoundapierror)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ApiError("}<Link to="/game-api/types/assembly-api-models/errorcode">{"ErrorCode"}</Link>{" errorCode, string message)"}</code> | Creates an `ApiError` with default values. |
| <Link id="m-ctor-2" /><code>{"ApiError("}<Link to="/game-api/types/assembly-api-models/errorcode">{"ErrorCode"}</Link>{" errorCode, string message, object context)"}</code> | Creates an `ApiError` with default values. |
| <Link id="m-ctor-3" /><code>{"ApiError(string message)"}</code> | Creates an `ApiError` with default values. |
| <Link id="m-ctor-4" /><code>{"ApiError()"}</code> | Creates an `ApiError` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-context" /><code>{"object Context { get; set; }"}</code> | Extra data about the error, if any. |
| <Link id="m-errorcode" /><code><Link to="/game-api/types/assembly-api-models/errorcode">{"ErrorCode"}</Link>{" "}<Link to="/game-api/types/assembly-api-models/errorcode">{"ErrorCode"}</Link>{" { get; set; }"}</code> | Error code (`error_code` in JSON). |
| <Link id="m-message" /><code>{"string Message { get; set; }"}</code> | Error message. |
| <Link id="m-requestmodelerrors" /><code><Link to="/game-api/types/assembly-api-models/validationresultmodel">{"ValidationResultModel"}</Link>{" RequestModelErrors { get; set; }"}</code> | Per-field validation errors when the request body was invalid. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-makeformodelvalidationerror" /><code>{"static "}<Link to="/game-api/types/assembly-api-models/apierror">{"ApiError"}</Link>{" MakeForModelValidationError("}<Link to="/game-api/types/assembly-api-models/validationresultmodel">{"ValidationResultModel"}</Link>{" validationResult)"}</code> | Builds an `InvalidRequestModel` error with the message "Bad API Request" and the given validation errors. |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | The message, followed by the request errors if there are any. |
| <Link id="m-verbose" /><code>{"static "}<Link to="/game-api/types/assembly-api-models/apierror">{"ApiError"}</Link>{" Verbose("}<Link to="/game-api/types/assembly-api-models/errorcode">{"ErrorCode"}</Link>{" errorCode, string verboseError)"}</code> | Builds an error with a code and a detailed message. |

## Used in

Members of other types that take, return or hold a `ApiError`:

[`ApiErrorException.ApiError`](/game-api/types/assembly-api-models/apierrorexception#m-apierror), [`ApiErrorException.ApiErrorException`](/game-api/types/assembly-api-models/apierrorexception#m-ctor).
