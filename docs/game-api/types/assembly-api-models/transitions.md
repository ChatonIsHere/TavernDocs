---
title: "Transitions"
description: "A rule on a form Page that says which page comes next when its conditions are met."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Transitions

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

A rule on a form `Page` that says which page comes next when its conditions are met.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Transitions()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-conditions" /><code>{"List<"}<Link to="/game-api/types/assembly-api-models/condition">{"Condition"}</Link>{"> Conditions { get; set; }"}</code> | Conditions that must hold for this transition. |
| <Link id="m-pageid" /><code>{"int PageId { get; set; }"}</code> | ID of the page to go to. |

## Used in

Members of other types that take, return or hold a `Transitions`:

[`Page.Transitions`](/game-api/types/assembly-api-models/page#m-transitions).
