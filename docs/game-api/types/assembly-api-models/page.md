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

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Page()"}</code> | Creates a `Page` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-id" /><code>{"int Id { get; set; }"}</code> | The page's numeric ID, used by `Transitions.PageId`. |
| <Link id="m-queries" /><code>{"List<"}<Link to="/game-api/types/assembly-api-models/query">{"Query"}</Link>{"> Queries { get; set; }"}</code> | The questions on this page. |
| <Link id="m-transitions" /><code>{"List<"}<Link to="/game-api/types/assembly-api-models/transitions">{"Transitions"}</Link>{"> "}<Link to="/game-api/types/assembly-api-models/transitions">{"Transitions"}</Link>{" { get; set; }"}</code> | Rules that pick the next page, each with its target page and conditions. |

## Used in

Members of other types that take, return or hold a `Page`:

[`Form.Pages`](/game-api/types/assembly-api-models/form#m-pages).
