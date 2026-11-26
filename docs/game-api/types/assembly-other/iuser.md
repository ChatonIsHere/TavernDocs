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

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-displayname" /><code>{"string DisplayName { get; }"}</code> | The user's name as shown to others. |
| <Link id="m-id" /><code>{"string Id { get; }"}</code> | The user's id, as a string. |

## Used in

Members of other types that take, return or hold a `IUser`:

[`UserService.GetUserWithId`](/game-api/types/assembly-other/userservice#m-getuserwithid), [`UserService.LoggedInUser`](/game-api/types/assembly-other/userservice#m-loggedinuser), [`IUserService.GetUserWithId`](/game-api/types/assembly-other/iuserservice#m-getuserwithid), [`IUserService.LoggedInUser`](/game-api/types/assembly-other/iuserservice#m-loggedinuser).
