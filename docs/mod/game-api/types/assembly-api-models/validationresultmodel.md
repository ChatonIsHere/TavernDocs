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

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ValidationResultModel()"}</code> | <span className="api-desc">Creates a `ValidationResultModel` from `errors`.</span> |
| <Link id="m-ctor-2" /><code>{"ValidationResultModel(List<"}<Link to="/mod/game-api/types/assembly-api-models/validationerror">{"ValidationError"}</Link>{"> errors)"}</code> | <span className="api-desc">Creates a `ValidationResultModel` from `errors`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-errors" /><code>{"List<"}<Link to="/mod/game-api/types/assembly-api-models/validationerror">{"ValidationError"}</Link>{"> Errors { get; set; }"}</code> | <span className="api-desc">The validation errors.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">The errors, one per line.</span> |

## Used in

Members of other types that take, return or hold a `ValidationResultModel`:

<div className="api-used-in">

[`ApiError.MakeForModelValidationError`](/mod/game-api/types/assembly-api-models/apierror#m-makeformodelvalidationerror), [`ApiError.RequestModelErrors`](/mod/game-api/types/assembly-api-models/apierror#m-requestmodelerrors).

</div>
