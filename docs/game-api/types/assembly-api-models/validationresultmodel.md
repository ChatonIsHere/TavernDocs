---
title: "ValidationResultModel"
description: "List of field validation errors, attached to an ApiError for a bad request."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ValidationResultModel

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

List of field validation errors, attached to an `ApiError` for a bad request.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ValidationResultModel()"}</code> | Creates a `ValidationResultModel` from `errors`. |
| <Link id="m-ctor-2" /><code>{"ValidationResultModel(List<"}<Link to="/game-api/types/assembly-api-models/validationerror">{"ValidationError"}</Link>{"> errors)"}</code> | Creates a `ValidationResultModel` from `errors`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-errors" /><code>{"List<"}<Link to="/game-api/types/assembly-api-models/validationerror">{"ValidationError"}</Link>{"> Errors { get; set; }"}</code> | The validation errors. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | The errors, one per line. |

## Used in

Members of other types that take, return or hold a `ValidationResultModel`:

[`ApiError.MakeForModelValidationError`](/game-api/types/assembly-api-models/apierror#m-makeformodelvalidationerror), [`ApiError.RequestModelErrors`](/game-api/types/assembly-api-models/apierror#m-requestmodelerrors).
