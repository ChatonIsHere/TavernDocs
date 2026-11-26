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

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Query()"}</code> | <span className="api-desc">Creates a `Query` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-context" /><code>{"string Context { get; set; }"}</code> | <span className="api-desc">Extra context string for the question.</span> |
| <Link id="m-defaultvalue" /><code>{"string DefaultValue { get; set; }"}</code> | <span className="api-desc">Value filled in before the user answers.</span> |
| <Link id="m-description" /><code>{"string Description { get; set; }"}</code> | <span className="api-desc">Longer help text under the title.</span> |
| <Link id="m-id" /><code>{"int Id { get; set; }"}</code> | <span className="api-desc">The question's numeric ID, matched by `QueryResponse.Id`.</span> |
| <Link id="m-isrequired" /><code>{"bool IsRequired { get; set; }"}</code> | <span className="api-desc">True when the question must be answered.</span> |
| <Link id="m-maxlength" /><code>{"int MaxLength { get; set; }"}</code> | <span className="api-desc">Maximum answer length, 20 unless the API sends another value.</span> |
| <Link id="m-options" /><code>{"List<"}<Link to="/mod/game-api/types/assembly-api-models/option">{"Option"}</Link>{"> Options { get; set; }"}</code> | <span className="api-desc">Choices for choice-type questions.</span> |
| <Link id="m-title" /><code>{"string Title { get; set; }"}</code> | <span className="api-desc">The question text.</span> |
| <Link id="m-type" /><code><Link to="/mod/game-api/types/assembly-api-models/formquerytype">{"FormQueryType"}</Link>{" Type { get; set; }"}</code> | <span className="api-desc">What kind of answer the question takes (`FormQueryType`).</span> |

## Used in

Members of other types that take, return or hold a `Query`:

<div className="api-used-in">

[`Page.Queries`](/mod/game-api/types/assembly-api-models/page#m-queries).

</div>
