---
title: "UserConfig.User"
description: "One registered player in users.json, made the first time they join through the auth port."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UserConfig.User

A **class** in `TavernLib`, `TavernLib.Backend.Server.Configs`.

One registered player in `users.json`, made the first time they join through the auth port. On a client, `EntranceMessageHandler.LocalUser` uses it for the local player's roles.

- **Listed in** [TavernLib.Backend.Server.Configs](/mod/tavernlib-api/types/backend-server-configs)
- **Nested in** [`UserConfig`](/mod/tavernlib-api/types/backend-server-configs/userconfig)
- **Documented in** [UserConfig.User](/mod/tavernlib-api/types/backend-server-configs/userconfig-user), [User config](/mod/tavernlib-api/config/user-config#userconfiguser)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"User()"}</code> | Created by TavernLib; mods don't make one. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-canenterflymode" /><code>{"bool CanEnterFlyMode { get; }"}</code> | True for moderators, owners and the `fly` role. Checked when a player joins in a Fly or camera mode. |
| <Link id="m-ismoderator" /><code>{"bool IsModerator { get; }"}</code> | True for the `moderator` or `owner` role. |
| <Link id="m-mods" /><code>{"Dictionary<string, string> Mods { get; set; }"}</code> | The mods the player's game loads, id to version, from their last `set_mods`. Cleared at each auth-port join until sent again. |
| <Link id="m-registeredfrom" /><code>{"string RegisteredFrom { get; set; }"}</code> | The address the account was registered from. Whitelisted IPs also match accounts registered from them. |
| <Link id="m-roles" /><code>{"List<string> Roles { get; set; }"}</code> | The player's roles, such as `owner`, `moderator`, `fly`, `dev`, `mod` or `supporter`. |
| <Link id="m-token" /><code>{"string Token { get; set; }"}</code> | The player's account token, which must match on every join to use this name. |
| <Link id="m-userid" /><code>{"ulong UserId { get; set; }"}</code> | The player's user id. New accounts get one past the highest in the file, starting at 1000000000. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-extra" /><code>{"private IDictionary<string, JToken> Extra { get; set; }"}</code> | Holds JSON keys TavernLib doesn't model, so they are written back unchanged. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-hasrole" /><code>{"bool HasRole(string role)"}</code> | True if `Roles` has the role, ignoring case. |

## Used in

Members of other types that take, return or hold a `User`:

[`EntranceMessageHandler.LocalUser`](/mod/tavernlib-api/types/backend/entrancemessagehandler#m-localuser), [`UserConfig.Users`](/mod/tavernlib-api/types/backend-server-configs/userconfig#m-users), [`UserConfigFile.GetUser`](/mod/tavernlib-api/types/backend-server-configs/userconfigfile#m-getuser), [`UserConfigFile.TryGetUser`](/mod/tavernlib-api/types/backend-server-configs/userconfigfile#m-trygetuser), [`PlayerJoinFilter.Refusal`](/mod/tavernlib-api/types/patches/playerjoinfilter#m-refusal).
