---
title: "Query"
description: "One question on a web API form page (Page.Queries)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Query

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

One question on a web API form page (`Page.Queries`).

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Query()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-context" /><code>{"string Context { get; set; }"}</code> | Extra context string for the question. |
| <Link id="m-defaultvalue" /><code>{"string DefaultValue { get; set; }"}</code> | Value filled in before the user answers. |
| <Link id="m-description" /><code>{"string Description { get; set; }"}</code> | Longer help text under the title. |
| <Link id="m-id" /><code>{"int Id { get; set; }"}</code> | The question's numeric ID, matched by `QueryResponse.Id`. |
| <Link id="m-isrequired" /><code>{"bool IsRequired { get; set; }"}</code> | True when the question must be answered. |
| <Link id="m-maxlength" /><code>{"int MaxLength { get; set; }"}</code> | Maximum answer length, 20 unless the API sends another value. |
| <Link id="m-options" /><code>{"List<"}<Link to="/game-api/types/assembly-api-models/option">{"Option"}</Link>{"> Options { get; set; }"}</code> | Choices for choice-type questions. |
| <Link id="m-title" /><code>{"string Title { get; set; }"}</code> | The question text. |
| <Link id="m-type" /><code><Link to="/game-api/types/assembly-api-models/formquerytype">{"FormQueryType"}</Link>{" Type { get; set; }"}</code> | What kind of answer the question takes (`FormQueryType`). |

## Used in

Members of other types that take, return or hold a `Query`:

[`Page.Queries`](/game-api/types/assembly-api-models/page#m-queries).
