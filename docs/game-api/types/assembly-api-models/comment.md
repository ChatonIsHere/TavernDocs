---
title: "Comment"
description: "A comment from the Alta web API, with its author and whether it is hidden or posted by the system."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Comment

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

A comment from the Alta web API, with its author and whether it is hidden or posted by the system.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Comment()"}</code> | Creates a `Comment` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-content" /><code>{"string Content { get; set; }"}</code> | The comment text. |
| <Link id="m-date" /><code>{"DateTime Date { get; set; }"}</code> | When the comment was posted. |
| <Link id="m-id" /><code>{"int Id { get; set; }"}</code> | The comment's id. |
| <Link id="m-ishidden" /><code>{"bool IsHidden { get; set; }"}</code> | True if the comment is hidden. |
| <Link id="m-issystem" /><code>{"bool IsSystem { get; set; }"}</code> | True if the system posted it rather than a user. |
| <Link id="m-user" /><code>{"int User { get; set; }"}</code> | Id of the user who posted it. |
| <Link id="m-username" /><code>{"string Username { get; set; }"}</code> | Username of the user who posted it. |

## Used in

Members of other types that take, return or hold a `Comment`:

[`FormResponse.Comments`](/game-api/types/assembly-api-models/formresponse#m-comments).
