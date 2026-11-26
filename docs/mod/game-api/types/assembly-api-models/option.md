---
title: "Option"
description: "One choice in a web API form question (Query.Options)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Option

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

One choice in a web API form question (`Query.Options`).

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Option(int id, string value)"}</code> | <span className="api-desc">Creates an `Option` from `id` and `value`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-id" /><code>{"int Id { get; set; }"}</code> | <span className="api-desc">The option's numeric ID.</span> |
| <Link id="m-image" /><code>{"string Image { get; set; }"}</code> | <span className="api-desc">Optional image shown with the option.</span> |
| <Link id="m-value" /><code>{"string Value { get; set; }"}</code> | <span className="api-desc">The option's text.</span> |

## Used in

Members of other types that take, return or hold a `Option`:

<div className="api-used-in">

[`Query.Options`](/mod/game-api/types/assembly-api-models/query#m-options).

</div>
