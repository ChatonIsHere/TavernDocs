---
title: "IUser"
description: "Minimal user shape from the Alta platform layer: an id and a display name."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IUser

An **interface** in `Alta.Platform`, `Alta.Platform.Models`.

Minimal user shape from the Alta platform layer: an id and a display name.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-displayname" /><code>{"string DisplayName { get; }"}</code> | <span className="api-desc">The user's name as shown to others.</span> |
| <Link id="m-id" /><code>{"string Id { get; }"}</code> | <span className="api-desc">The user's id, as a string.</span> |

## Used in

Members of other types that take, return or hold a `IUser`:

<div className="api-used-in">

[`UserService.GetUserWithId`](/mod/game-api/types/assembly-other/userservice#m-getuserwithid), [`UserService.LoggedInUser`](/mod/game-api/types/assembly-other/userservice#m-loggedinuser), [`IUserService.GetUserWithId`](/mod/game-api/types/assembly-other/iuserservice#m-getuserwithid), [`IUserService.LoggedInUser`](/mod/game-api/types/assembly-other/iuserservice#m-loggedinuser).

</div>
