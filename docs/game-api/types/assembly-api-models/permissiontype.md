---
title: "PermissionType"
description: "Flags for what a user may do with an Alta web API form: edit, respond, view responses or comments, comment, resolve and unresolve."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PermissionType

An **enum** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Enums`.

Flags for what a user may do with an Alta web API form: edit, respond, view responses or comments, comment, resolve and unresolve.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Attributes** `Flags`

## Values

| Member |
| --- |
| <Link id="m-comment" /><code>{"Comment = 32"}</code> |
| <Link id="m-edit" /><code>{"Edit = 1"}</code> |
| <Link id="m-resolve" /><code>{"Resolve = 64"}</code> |
| <Link id="m-respond" /><code>{"Respond = 2"}</code> |
| <Link id="m-unresolve" /><code>{"Unresolve = 128"}</code> |
| <Link id="m-viewcomments" /><code>{"ViewComments = 8"}</code> |
| <Link id="m-viewhiddencomments" /><code>{"ViewHiddenComments = 16"}</code> |
| <Link id="m-viewresponses" /><code>{"ViewResponses = 4"}</code> |

## Used in

Members of other types that take, return or hold a `PermissionType`:

[`FormResponse.Permissions`](/game-api/types/assembly-api-models/formresponse#m-permissions).
