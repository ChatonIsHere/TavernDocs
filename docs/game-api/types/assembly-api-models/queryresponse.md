---
title: "QueryResponse"
description: "A user's answer to one form question, part of a PageResponse."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# QueryResponse

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

A user's answer to one form question, part of a `PageResponse`.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"QueryResponse()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-id" /><code>{"int Id { get; set; }"}</code> | ID of the `Query` being answered. |
| <Link id="m-values" /><code>{"List<string> Values { get; set; }"}</code> | The answer values. A list so multi-choice questions can hold several. |

## Used in

Members of other types that take, return or hold a `QueryResponse`:

[`PageResponse.QueryResponses`](/game-api/types/assembly-api-models/pageresponse#m-queryresponses).
