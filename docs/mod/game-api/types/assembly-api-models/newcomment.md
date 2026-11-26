---
title: "NewComment"
description: "Body for adding a comment, which may be hidden."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NewComment

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

Body for adding a comment, which may be hidden.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NewComment()"}</code> | <span className="api-desc">Creates a `NewComment` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-comment" /><code>{"string Comment { get; set; }"}</code> | <span className="api-desc">The comment text.</span> |
| <Link id="m-ishidden" /><code>{"bool IsHidden { get; set; }"}</code> | <span className="api-desc">Whether the comment is hidden, probably from the user it's about.</span> |
