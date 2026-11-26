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

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HomeElementPage()"}</code> | Creates a `HomeElementPage` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-image" /><code>{"string Image { get; set; }"}</code> | Image shown for the page. |
| <Link id="m-target" /><code>{"string Target { get; set; }"}</code> | Where the page leads. Left out of the JSON when null. |
| <Link id="m-type" /><code>{"string Type { get; set; }"}</code> | Page type as a string. |

## Used in

Members of other types that take, return or hold a `HomeElementPage`:

[`HomeElement.Pages`](/game-api/types/assembly-api-models/homeelement#m-pages).
