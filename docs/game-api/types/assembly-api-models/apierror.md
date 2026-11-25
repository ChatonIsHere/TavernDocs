---
title: "ApiError"
description: "class ApiError in Alta.Api.DataTransferModels."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ApiError

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Errors`.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Derived types** [`NotFoundApiError`](/game-api/types/assembly-api-models/notfoundapierror)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ApiError("}<Link to="/game-api/types/assembly-api-models/errorcode">{"ErrorCode"}</Link>{" errorCode, string message)"}</code> |  |
| <Link id="m-ctor-2" /><code>{"ApiError("}<Link to="/game-api/types/assembly-api-models/errorcode">{"ErrorCode"}</Link>{" errorCode, string message, object context)"}</code> |  |
| <Link id="m-ctor-3" /><code>{"ApiError(string message)"}</code> |  |
| <Link id="m-ctor-4" /><code>{"ApiError()"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-context" /><code>{"object Context { get; set; }"}</code> |  |
| <Link id="m-errorcode" /><code><Link to="/game-api/types/assembly-api-models/errorcode">{"ErrorCode"}</Link>{" "}<Link to="/game-api/types/assembly-api-models/errorcode">{"ErrorCode"}</Link>{" { get; set; }"}</code> |  |
| <Link id="m-message" /><code>{"string Message { get; set; }"}</code> |  |
| <Link id="m-requestmodelerrors" /><code><Link to="/game-api/types/assembly-api-models/validationresultmodel">{"ValidationResultModel"}</Link>{" RequestModelErrors { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-makeformodelvalidationerror" /><code>{"static "}<Link to="/game-api/types/assembly-api-models/apierror">{"ApiError"}</Link>{" MakeForModelValidationError("}<Link to="/game-api/types/assembly-api-models/validationresultmodel">{"ValidationResultModel"}</Link>{" validationResult)"}</code> |  |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> |  |
| <Link id="m-verbose" /><code>{"static "}<Link to="/game-api/types/assembly-api-models/apierror">{"ApiError"}</Link>{" Verbose("}<Link to="/game-api/types/assembly-api-models/errorcode">{"ErrorCode"}</Link>{" errorCode, string verboseError)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ApiError`:

[`ApiErrorException.ApiError`](/game-api/types/assembly-api-models/apierrorexception#m-apierror), [`ApiErrorException.ApiErrorException`](/game-api/types/assembly-api-models/apierrorexception#m-ctor).
