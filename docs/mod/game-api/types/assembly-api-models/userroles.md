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

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UserRoles()"}</code> | <span className="api-desc">Creates an `UserRoles` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isdeveloper" /><code>{"bool IsDeveloper { get; set; }"}</code> | <span className="api-desc">The token has the `dev` policy.</span> |
| <Link id="m-ismember" /><code>{"bool IsMember { get; set; }"}</code> | <span className="api-desc">The token has the `supporter` policy.</span> |
| <Link id="m-ismoderator" /><code>{"bool IsModerator { get; set; }"}</code> | <span className="api-desc">The token has the `mod` policy.</span> |

## Used in

Members of other types that take, return or hold a `UserRoles`:

<div className="api-used-in">

[`UserRolesUtility.GetRolesFromIdentityToken`](/mod/game-api/types/assembly-api-models/userrolesutility#m-getrolesfromidentitytoken), [`UserInfoAndRole.UserInfoAndRole`](/mod/game-api/types/global-t-x/userinfoandrole#m-ctor).

</div>
