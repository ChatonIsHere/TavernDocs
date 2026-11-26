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

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Derived types** [`NotFoundApiError`](/mod/game-api/types/assembly-api-models/notfoundapierror)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ApiError("}<Link to="/mod/game-api/types/assembly-api-models/errorcode">{"ErrorCode"}</Link>{" errorCode, string message)"}</code> | <span className="api-desc">Creates an `ApiError` with default values.</span> |
| <Link id="m-ctor-2" /><code>{"ApiError("}<Link to="/mod/game-api/types/assembly-api-models/errorcode">{"ErrorCode"}</Link>{" errorCode, string message, object context)"}</code> | <span className="api-desc">Creates an `ApiError` with default values.</span> |
| <Link id="m-ctor-3" /><code>{"ApiError(string message)"}</code> | <span className="api-desc">Creates an `ApiError` with default values.</span> |
| <Link id="m-ctor-4" /><code>{"ApiError()"}</code> | <span className="api-desc">Creates an `ApiError` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-context" /><code>{"object Context { get; set; }"}</code> | <span className="api-desc">Extra data about the error, if any.</span> |
| <Link id="m-errorcode" /><code><Link to="/mod/game-api/types/assembly-api-models/errorcode">{"ErrorCode"}</Link>{" "}<Link to="/mod/game-api/types/assembly-api-models/errorcode">{"ErrorCode"}</Link>{" { get; set; }"}</code> | <span className="api-desc">Error code (`error_code` in JSON).</span> |
| <Link id="m-message" /><code>{"string Message { get; set; }"}</code> | <span className="api-desc">Error message.</span> |
| <Link id="m-requestmodelerrors" /><code><Link to="/mod/game-api/types/assembly-api-models/validationresultmodel">{"ValidationResultModel"}</Link>{" RequestModelErrors { get; set; }"}</code> | <span className="api-desc">Per-field validation errors when the request body was invalid.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-makeformodelvalidationerror" /><code>{"static "}<Link to="/mod/game-api/types/assembly-api-models/apierror">{"ApiError"}</Link>{" MakeForModelValidationError("}<Link to="/mod/game-api/types/assembly-api-models/validationresultmodel">{"ValidationResultModel"}</Link>{" validationResult)"}</code> | <span className="api-desc">Builds an `InvalidRequestModel` error with the message "Bad API Request" and the given validation errors.</span> |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">The message, followed by the request errors if there are any.</span> |
| <Link id="m-verbose" /><code>{"static "}<Link to="/mod/game-api/types/assembly-api-models/apierror">{"ApiError"}</Link>{" Verbose("}<Link to="/mod/game-api/types/assembly-api-models/errorcode">{"ErrorCode"}</Link>{" errorCode, string verboseError)"}</code> | <span className="api-desc">Builds an error with a code and a detailed message.</span> |

## Used in

Members of other types that take, return or hold a `ApiError`:

<div className="api-used-in">

[`ApiErrorException.ApiError`](/mod/game-api/types/assembly-api-models/apierrorexception#m-apierror), [`ApiErrorException.ApiErrorException`](/mod/game-api/types/assembly-api-models/apierrorexception#m-ctor).

</div>
