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

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Derived types** [`FormResponse`](/game-api/types/assembly-api-models/formresponse)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FormResponseSummary()"}</code> | Creates a `FormResponseSummary` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-formidentifier" /><code>{"int FormIdentifier { get; set; }"}</code> | Id of the form answered. |
| <Link id="m-identifier" /><code>{"int Identifier { get; set; }"}</code> | The response's id. |
| <Link id="m-processed" /><code>{"DateTime Processed { get; set; }"}</code> | When the response was processed. |
| <Link id="m-submitted" /><code>{"DateTime Submitted { get; set; }"}</code> | When it was submitted. |
| <Link id="m-useridentifier" /><code>{"int UserIdentifier { get; set; }"}</code> | Id of the user who submitted it. |
| <Link id="m-username" /><code>{"string Username { get; set; }"}</code> | Name of the user who submitted it. |
