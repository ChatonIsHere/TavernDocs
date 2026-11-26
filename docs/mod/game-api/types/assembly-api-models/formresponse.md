---
title: "FormResponse"
description: "A full submitted answer to a Form: the answers per page plus staff comments."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FormResponse

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

A full submitted answer to a `Form`: the answers per page plus staff comments.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Inherits or implements** [`FormResponseSummary`](/mod/game-api/types/assembly-api-models/formresponsesummary)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FormResponse()"}</code> | <span className="api-desc">Creates a `FormResponse` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-comments" /><code>{"List<"}<Link to="/mod/game-api/types/assembly-api-models/comment">{"Comment"}</Link>{"> Comments { get; set; }"}</code> | <span className="api-desc">Comments left on the response.</span> |
| <Link id="m-pageresponses" /><code>{"List<"}<Link to="/mod/game-api/types/assembly-api-models/pageresponse">{"PageResponse"}</Link>{"> PageResponses { get; set; }"}</code> | <span className="api-desc">The answers, one entry per page.</span> |
| <Link id="m-permissions" /><code><Link to="/mod/game-api/types/assembly-api-models/permissiontype">{"PermissionType"}</Link>{" Permissions { get; set; }"}</code> | <span className="api-desc">What the viewer may do with this response. Marked with `ForceDefaultConverter`.</span> |
| <Link id="m-processingcomment" /><code>{"string ProcessingComment { get; set; }"}</code> | <span className="api-desc">Note left when the response was processed.</span> |
