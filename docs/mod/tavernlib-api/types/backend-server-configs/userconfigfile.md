---
title: "UserConfigFile"
description: "The ServerConfigFile for users.json, with lookups on the last read."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UserConfigFile

A **class** in `TavernLib`, `TavernLib.Backend.Server.Configs`.

The `ServerConfigFile` for `users.json`, with lookups on the last read. Use the one on `TavernManager`, not a new one.

- **Listed in** [TavernLib.Backend.Server.Configs](/mod/tavernlib-api/types/backend-server-configs)
- **Inherits or implements** [`ServerConfigFile<UserConfig>`](/mod/tavernlib-api/types/backend-server-configs/serverconfigfile-t)
- **Documented in** [UserConfigFile](/mod/tavernlib-api/types/backend-server-configs/userconfigfile), [User config](/mod/tavernlib-api/config/user-config#userconfigfile)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UserConfigFile(string filePath)"}</code> | Created by TavernLib to read and write this config file at the given path. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getuser" /><code><Link to="/mod/tavernlib-api/types/backend-server-configs/userconfig-user">{"UserConfig.User"}</Link>{" GetUser(string username)"}</code> | A user from `LastRead` by username (without case) or by user id, or `null`. |
| <Link id="m-getuser-2" /><code><Link to="/mod/tavernlib-api/types/backend-server-configs/userconfig-user">{"UserConfig.User"}</Link>{" GetUser(int identifier)"}</code> | A user from `LastRead` by username (without case) or by user id, or `null`. |
| <Link id="m-trygetuser" /><code>{"bool TryGetUser(string username, out "}<Link to="/mod/tavernlib-api/types/backend-server-configs/userconfig-user">{"UserConfig.User"}</Link>{" user)"}</code> | The same as `GetUser`, as a try-pattern. |
| <Link id="m-trygetuser-2" /><code>{"bool TryGetUser(int identifier, out "}<Link to="/mod/tavernlib-api/types/backend-server-configs/userconfig-user">{"UserConfig.User"}</Link>{" user)"}</code> | The same as `GetUser`, as a try-pattern. |

## Used in

Members of other types that take, return or hold a `UserConfigFile`:

[`TavernManager.UserConfig`](/mod/tavernlib-api/types/backend-api/tavernmanager#m-userconfig).
