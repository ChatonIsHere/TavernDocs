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

- **Listed in** [TavernLib.Backend.Server.Configs](/tavernlib-api/types/backend-server-configs)
- **Inherits or implements** [`ServerConfigFile<UserConfig>`](/tavernlib-api/types/backend-server-configs/serverconfigfile-t)
- **Documented in** [UserConfigFile](/tavernlib-api/types/backend-server-configs/userconfigfile), [User config](/tavernlib-api/config/user-config#userconfigfile)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"UserConfigFile(string filePath)"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getuser" /><code><Link to="/tavernlib-api/types/backend-server-configs/userconfig-user">{"UserConfig.User"}</Link>{" GetUser(string username)"}</code> | A user from `LastRead` by username (without case) or by user id, or `null`. |
| <Link id="m-getuser-2" /><code><Link to="/tavernlib-api/types/backend-server-configs/userconfig-user">{"UserConfig.User"}</Link>{" GetUser(int identifier)"}</code> | A user from `LastRead` by username (without case) or by user id, or `null`. |
| <Link id="m-trygetuser" /><code>{"bool TryGetUser(string username, out "}<Link to="/tavernlib-api/types/backend-server-configs/userconfig-user">{"UserConfig.User"}</Link>{" user)"}</code> | The same as `GetUser`, as a try-pattern. |
| <Link id="m-trygetuser-2" /><code>{"bool TryGetUser(int identifier, out "}<Link to="/tavernlib-api/types/backend-server-configs/userconfig-user">{"UserConfig.User"}</Link>{" user)"}</code> | The same as `GetUser`, as a try-pattern. |

## Used in

Members of other types that take, return or hold a `UserConfigFile`:

[`TavernManager.UserConfig`](/tavernlib-api/types/backend-api/tavernmanager#m-userconfig).
