---
title: "UserConfig"
description: "The contents of users.json: registered players, and the whitelist and blacklist."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UserConfig

A **class** in `TavernLib`, `TavernLib.Backend.Server.Configs`.

The contents of `users.json`: registered players, and the whitelist and blacklist. Unknown keys are kept and written back.

- **Listed in** [TavernLib.Backend.Server.Configs](/tavernlib-api/types/backend-server-configs)
- **Derived types** [`UserConfigFile`](/tavernlib-api/types/backend-server-configs/userconfigfile)
- **Nested types** [`ListConfig`](/tavernlib-api/types/backend-server-configs/userconfig-listconfig), [`User`](/tavernlib-api/types/backend-server-configs/userconfig-user)
- **Documented in** [UserConfig](/tavernlib-api/types/backend-server-configs/userconfig), [User config](/tavernlib-api/config/user-config#userconfig)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UserConfig()"}</code> | Created by TavernLib; mods don't make one. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-blacklist" /><code><Link to="/tavernlib-api/types/backend-server-configs/userconfig-listconfig">{"UserConfig.ListConfig"}</Link>{" Blacklist { get; set; }"}</code> | Names, ids and addresses that may never join. |
| <Link id="m-users" /><code>{"Dictionary<string, "}<Link to="/tavernlib-api/types/backend-server-configs/userconfig-user">{"UserConfig.User"}</Link>{"> Users { get; set; }"}</code> | Registered players by lower-case username. |
| <Link id="m-whitelist" /><code><Link to="/tavernlib-api/types/backend-server-configs/userconfig-listconfig">{"UserConfig.ListConfig"}</Link>{" Whitelist { get; set; }"}</code> | Names, ids and addresses allowed in while the whitelist is on. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-extra" /><code>{"private IDictionary<string, JToken> Extra { get; set; }"}</code> | Holds JSON keys TavernLib doesn't model, so they are written back unchanged. |

</details>

## Used in

Members of other types that take, return or hold a `UserConfig`:

[`AuthManager.CheckIfPermitted`](/tavernlib-api/types/backend-auth/authmanager#m-checkifpermitted), [`AuthManager.NextUserId`](/tavernlib-api/types/backend-auth/authmanager#m-nextuserid), [`AuthManager.Register`](/tavernlib-api/types/backend-auth/authmanager#m-register), [`JoinRules.IsBlacklisted`](/tavernlib-api/types/backend-auth/joinrules#m-isblacklisted), [`JoinRules.IsWhitelisted`](/tavernlib-api/types/backend-auth/joinrules#m-iswhitelisted), [`JoinRules.WhitelistOn`](/tavernlib-api/types/backend-auth/joinrules#m-whiteliston), [`PlayerCommandModule.ChangeUsers`](/tavernlib-api/types/moduleports/playercommandmodule#m-changeusers), [`PlayerJoinFilter.Refusal`](/tavernlib-api/types/patches/playerjoinfilter#m-refusal).
