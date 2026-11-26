---
title: "SetGroupPermissionsRequest.OldGroupPermission"
description: "Old flag-style group permission levels (member, moderator, admin), still used by GroupMemberInfo.Permissions."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SetGroupPermissionsRequest.OldGroupPermission

An **enum** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Old flag-style group permission levels (member, moderator, admin), still used by `GroupMemberInfo.Permissions`.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Nested in** [`SetGroupPermissionsRequest`](/mod/game-api/types/assembly-api-models/setgrouppermissionsrequest)
- **Attributes** `Flags`

## Values

| Member |
| --- |
| <Link id="m-admin" /><code>{"Admin = 4"}</code> |
| <Link id="m-member" /><code>{"Member = 1"}</code> |
| <Link id="m-moderator" /><code>{"Moderator = 2"}</code> |

## Used in

Members of other types that take, return or hold a `OldGroupPermission`:

<div className="api-used-in">

[`SetGroupPermissionsRequest.Permissions`](/mod/game-api/types/assembly-api-models/setgrouppermissionsrequest#m-permissions), [`GroupMemberInfo.Permissions`](/mod/game-api/types/assembly-api-models/groupmemberinfo#m-permissions).

</div>
