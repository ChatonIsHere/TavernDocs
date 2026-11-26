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

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Form()"}</code> | <span className="api-desc">Creates a `Form` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allowmultiple" /><code>{"bool AllowMultiple { get; set; }"}</code> | <span className="api-desc">Whether a user may submit it more than once.</span> |
| <Link id="m-completiontext" /><code>{"string CompletionText { get; set; }"}</code> | <span className="api-desc">Text shown after the form is submitted.</span> |
| <Link id="m-description" /><code>{"string Description { get; set; }"}</code> | <span className="api-desc">Form description.</span> |
| <Link id="m-end" /><code>{"DateTime End { get; set; }"}</code> | <span className="api-desc">When the form closes.</span> |
| <Link id="m-identifier" /><code>{"int Identifier { get; set; }"}</code> | <span className="api-desc">The form's id.</span> |
| <Link id="m-iscompleted" /><code>{"bool IsCompleted { get; set; }"}</code> | <span className="api-desc">Probably whether the current user has already filled it in.</span> |
| <Link id="m-isenabled" /><code>{"bool IsEnabled { get; set; }"}</code> | <span className="api-desc">Whether the form is turned on.</span> |
| <Link id="m-pages" /><code>{"List<"}<Link to="/mod/game-api/types/assembly-api-models/page">{"Page"}</Link>{"> Pages { get; set; }"}</code> | <span className="api-desc">The form's pages of questions.</span> |
| <Link id="m-start" /><code>{"DateTime Start { get; set; }"}</code> | <span className="api-desc">When the form opens.</span> |
| <Link id="m-title" /><code>{"string Title { get; set; }"}</code> | <span className="api-desc">Form title.</span> |
