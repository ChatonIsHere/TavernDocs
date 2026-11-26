---
title: "Form"
description: "A form served by the Alta API, with its pages of questions and the dates it's open."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Form

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

A form served by the Alta API, with its pages of questions and the dates it's open.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Form()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allowmultiple" /><code>{"bool AllowMultiple { get; set; }"}</code> | Whether a user may submit it more than once. |
| <Link id="m-completiontext" /><code>{"string CompletionText { get; set; }"}</code> | Text shown after the form is submitted. |
| <Link id="m-description" /><code>{"string Description { get; set; }"}</code> | Form description. |
| <Link id="m-end" /><code>{"DateTime End { get; set; }"}</code> | When the form closes. |
| <Link id="m-identifier" /><code>{"int Identifier { get; set; }"}</code> | The form's id. |
| <Link id="m-iscompleted" /><code>{"bool IsCompleted { get; set; }"}</code> | Probably whether the current user has already filled it in. |
| <Link id="m-isenabled" /><code>{"bool IsEnabled { get; set; }"}</code> | Whether the form is turned on. |
| <Link id="m-pages" /><code>{"List<"}<Link to="/game-api/types/assembly-api-models/page">{"Page"}</Link>{"> Pages { get; set; }"}</code> | The form's pages of questions. |
| <Link id="m-start" /><code>{"DateTime Start { get; set; }"}</code> | When the form opens. |
| <Link id="m-title" /><code>{"string Title { get; set; }"}</code> | Form title. |
