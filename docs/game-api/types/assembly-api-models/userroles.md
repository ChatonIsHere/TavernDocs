---
title: "UserRoles"
description: "Roles read from a user's identity token by UserRolesUtility.GetRolesFromIdentityToken."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UserRoles

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Shared`.

Roles read from a user's identity token by `UserRolesUtility.GetRolesFromIdentityToken`.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UserRoles()"}</code> | Creates an `UserRoles` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isdeveloper" /><code>{"bool IsDeveloper { get; set; }"}</code> | The token has the `dev` policy. |
| <Link id="m-ismember" /><code>{"bool IsMember { get; set; }"}</code> | The token has the `supporter` policy. |
| <Link id="m-ismoderator" /><code>{"bool IsModerator { get; set; }"}</code> | The token has the `mod` policy. |

## Used in

Members of other types that take, return or hold a `UserRoles`:

[`UserRolesUtility.GetRolesFromIdentityToken`](/game-api/types/assembly-api-models/userrolesutility#m-getrolesfromidentitytoken), [`UserInfoAndRole.UserInfoAndRole`](/game-api/types/global-t-x/userinfoandrole#m-ctor).
