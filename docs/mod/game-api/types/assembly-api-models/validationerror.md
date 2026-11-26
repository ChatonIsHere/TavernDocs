---
title: "ValidationError"
description: "One field-level validation error in an API error response."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ValidationError

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Errors`.

One field-level validation error in an API error response.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ValidationError(string field, string message)"}</code> | <span className="api-desc">Creates a `ValidationError` with default values.</span> |
| <Link id="m-ctor-2" /><code>{"ValidationError()"}</code> | <span className="api-desc">Creates a `ValidationError` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-field" /><code>{"string Field { get; set; }"}</code> | <span className="api-desc">Name of the field that failed, or null for the request as a whole (an empty name becomes null).</span> |
| <Link id="m-message" /><code>{"string Message { get; set; }"}</code> | <span className="api-desc">What was wrong.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">Field name and message on one line.</span> |

## Used in

Members of other types that take, return or hold a `ValidationError`:

<div className="api-used-in">

[`ValidationResultModel.Errors`](/mod/game-api/types/assembly-api-models/validationresultmodel#m-errors), [`ValidationResultModel.ValidationResultModel`](/mod/game-api/types/assembly-api-models/validationresultmodel#m-ctor-2).

</div>
