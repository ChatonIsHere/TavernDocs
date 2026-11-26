---
title: "FormResponseSummary"
description: "Short info about a submitted form response, without the answers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FormResponseSummary

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

Short info about a submitted form response, without the answers.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Derived types** [`FormResponse`](/mod/game-api/types/assembly-api-models/formresponse)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FormResponseSummary()"}</code> | <span className="api-desc">Creates a `FormResponseSummary` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-formidentifier" /><code>{"int FormIdentifier { get; set; }"}</code> | <span className="api-desc">Id of the form answered.</span> |
| <Link id="m-identifier" /><code>{"int Identifier { get; set; }"}</code> | <span className="api-desc">The response's id.</span> |
| <Link id="m-processed" /><code>{"DateTime Processed { get; set; }"}</code> | <span className="api-desc">When the response was processed.</span> |
| <Link id="m-submitted" /><code>{"DateTime Submitted { get; set; }"}</code> | <span className="api-desc">When it was submitted.</span> |
| <Link id="m-useridentifier" /><code>{"int UserIdentifier { get; set; }"}</code> | <span className="api-desc">Id of the user who submitted it.</span> |
| <Link id="m-username" /><code>{"string Username { get; set; }"}</code> | <span className="api-desc">Name of the user who submitted it.</span> |
