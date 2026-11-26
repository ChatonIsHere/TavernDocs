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

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Comment()"}</code> | <span className="api-desc">Creates a `Comment` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-content" /><code>{"string Content { get; set; }"}</code> | <span className="api-desc">The comment text.</span> |
| <Link id="m-date" /><code>{"DateTime Date { get; set; }"}</code> | <span className="api-desc">When the comment was posted.</span> |
| <Link id="m-id" /><code>{"int Id { get; set; }"}</code> | <span className="api-desc">The comment's id.</span> |
| <Link id="m-ishidden" /><code>{"bool IsHidden { get; set; }"}</code> | <span className="api-desc">True if the comment is hidden.</span> |
| <Link id="m-issystem" /><code>{"bool IsSystem { get; set; }"}</code> | <span className="api-desc">True if the system posted it rather than a user.</span> |
| <Link id="m-user" /><code>{"int User { get; set; }"}</code> | <span className="api-desc">Id of the user who posted it.</span> |
| <Link id="m-username" /><code>{"string Username { get; set; }"}</code> | <span className="api-desc">Username of the user who posted it.</span> |

## Used in

Members of other types that take, return or hold a `Comment`:

<div className="api-used-in">

[`FormResponse.Comments`](/mod/game-api/types/assembly-api-models/formresponse#m-comments).

</div>
