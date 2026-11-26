---
title: "Page"
description: "One page of a web API form (Form.Pages): its questions and the rules for which page comes next."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Page

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

One page of a web API form (`Form.Pages`): its questions and the rules for which page comes next.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Page()"}</code> | <span className="api-desc">Creates a `Page` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-id" /><code>{"int Id { get; set; }"}</code> | <span className="api-desc">The page's numeric ID, used by `Transitions.PageId`.</span> |
| <Link id="m-queries" /><code>{"List<"}<Link to="/mod/game-api/types/assembly-api-models/query">{"Query"}</Link>{"> Queries { get; set; }"}</code> | <span className="api-desc">The questions on this page.</span> |
| <Link id="m-transitions" /><code>{"List<"}<Link to="/mod/game-api/types/assembly-api-models/transitions">{"Transitions"}</Link>{"> "}<Link to="/mod/game-api/types/assembly-api-models/transitions">{"Transitions"}</Link>{" { get; set; }"}</code> | <span className="api-desc">Rules that pick the next page, each with its target page and conditions.</span> |

## Used in

Members of other types that take, return or hold a `Page`:

<div className="api-used-in">

[`Form.Pages`](/mod/game-api/types/assembly-api-models/form#m-pages).

</div>
