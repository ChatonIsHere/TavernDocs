---
title: "PageResponse"
description: "A user's answers for one form page, part of a FormResponse."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PageResponse

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

A user's answers for one form page, part of a `FormResponse`.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PageResponse()"}</code> | Creates a `PageResponse` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-id" /><code>{"int Id { get; set; }"}</code> | ID of the `Page` being answered. |
| <Link id="m-queryresponses" /><code>{"List<"}<Link to="/mod/game-api/types/assembly-api-models/queryresponse">{"QueryResponse"}</Link>{"> QueryResponses { get; set; }"}</code> | The answers, one per question on the page. |

## Used in

Members of other types that take, return or hold a `PageResponse`:

[`FormResponse.PageResponses`](/mod/game-api/types/assembly-api-models/formresponse#m-pageresponses).
