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

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Inherits or implements** [`FormResponseSummary`](/game-api/types/assembly-api-models/formresponsesummary)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FormResponse()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-comments" /><code>{"List<"}<Link to="/game-api/types/assembly-api-models/comment">{"Comment"}</Link>{"> Comments { get; set; }"}</code> | Comments left on the response. |
| <Link id="m-pageresponses" /><code>{"List<"}<Link to="/game-api/types/assembly-api-models/pageresponse">{"PageResponse"}</Link>{"> PageResponses { get; set; }"}</code> | The answers, one entry per page. |
| <Link id="m-permissions" /><code><Link to="/game-api/types/assembly-api-models/permissiontype">{"PermissionType"}</Link>{" Permissions { get; set; }"}</code> | What the viewer may do with this response. Marked with `ForceDefaultConverter`. |
| <Link id="m-processingcomment" /><code>{"string ProcessingComment { get; set; }"}</code> | Note left when the response was processed. |
