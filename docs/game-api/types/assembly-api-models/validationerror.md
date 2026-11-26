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

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ValidationError(string field, string message)"}</code> | Creates a `ValidationError` with default values. |
| <Link id="m-ctor-2" /><code>{"ValidationError()"}</code> | Creates a `ValidationError` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-field" /><code>{"string Field { get; set; }"}</code> | Name of the field that failed, or null for the request as a whole (an empty name becomes null). |
| <Link id="m-message" /><code>{"string Message { get; set; }"}</code> | What was wrong. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Field name and message on one line. |

## Used in

Members of other types that take, return or hold a `ValidationError`:

[`ValidationResultModel.Errors`](/game-api/types/assembly-api-models/validationresultmodel#m-errors), [`ValidationResultModel.ValidationResultModel`](/game-api/types/assembly-api-models/validationresultmodel#m-ctor-2).
