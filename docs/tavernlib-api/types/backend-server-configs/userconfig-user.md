---
title: "UserConfig.User"
description: "A class in TavernLib, TavernLib.Backend.Server.Configs."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UserConfig.User

A **class** in `TavernLib`, `TavernLib.Backend.Server.Configs`.

A **class** in `TavernLib`, `TavernLib.Backend.Server.Configs`.

- **Listed in** [TavernLib.Backend.Server.Configs](/tavernlib-api/types/backend-server-configs)
- **Nested in** [`UserConfig`](/tavernlib-api/types/backend-server-configs/userconfig)
- **Documented in** [UserConfig.User](/tavernlib-api/types/backend-server-configs/userconfig-user), [User config](/tavernlib-api/config/user-config#userconfiguser)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"User()"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-canenterflymode" /><code>{"bool CanEnterFlyMode { get; }"}</code> |  |
| <Link id="m-ismoderator" /><code>{"bool IsModerator { get; }"}</code> |  |
| <Link id="m-mods" /><code>{"Dictionary<string, string> Mods { get; set; }"}</code> |  |
| <Link id="m-registeredfrom" /><code>{"string RegisteredFrom { get; set; }"}</code> |  |
| <Link id="m-roles" /><code>{"List<string> Roles { get; set; }"}</code> |  |
| <Link id="m-token" /><code>{"string Token { get; set; }"}</code> |  |
| <Link id="m-userid" /><code>{"ulong UserId { get; set; }"}</code> |  |
| <Link id="m-extra" /><code>{"private IDictionary<string, JToken> Extra { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-hasrole" /><code>{"bool HasRole(string role)"}</code> |  |

## Used in

Members of other types that take, return or hold a `User`:

[`EntranceMessageHandler.LocalUser`](/tavernlib-api/types/backend/entrancemessagehandler#m-localuser), [`UserConfig.Users`](/tavernlib-api/types/backend-server-configs/userconfig#m-users), [`UserConfigFile.GetUser`](/tavernlib-api/types/backend-server-configs/userconfigfile#m-getuser), [`UserConfigFile.TryGetUser`](/tavernlib-api/types/backend-server-configs/userconfigfile#m-trygetuser), [`PlayerJoinFilter.Refusal`](/tavernlib-api/types/patches/playerjoinfilter#m-refusal).
