---
title: "HomeElementPage"
description: "Web API model for one page inside a HomeElement on the home screen."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HomeElementPage

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

Web API model for one page inside a `HomeElement` on the home screen.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HomeElementPage()"}</code> | <span className="api-desc">Creates a `HomeElementPage` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-image" /><code>{"string Image { get; set; }"}</code> | <span className="api-desc">Image shown for the page.</span> |
| <Link id="m-target" /><code>{"string Target { get; set; }"}</code> | <span className="api-desc">Where the page leads. Left out of the JSON when null.</span> |
| <Link id="m-type" /><code>{"string Type { get; set; }"}</code> | <span className="api-desc">Page type as a string.</span> |

## Used in

Members of other types that take, return or hold a `HomeElementPage`:

<div className="api-used-in">

[`HomeElement.Pages`](/mod/game-api/types/assembly-api-models/homeelement#m-pages).

</div>
