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

- **Listed in** [TavernLib.Backend.Server.Configs](/mod/tavernlib-api/types/backend-server-configs)
- **Derived types** [`UserConfigFile`](/mod/tavernlib-api/types/backend-server-configs/userconfigfile)
- **Nested types** [`ListConfig`](/mod/tavernlib-api/types/backend-server-configs/userconfig-listconfig), [`User`](/mod/tavernlib-api/types/backend-server-configs/userconfig-user)
- **Documented in** [UserConfig](/mod/tavernlib-api/types/backend-server-configs/userconfig), [User config](/mod/tavernlib-api/config/user-config#userconfig)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UserConfig()"}</code> | <span className="api-desc">Created by TavernLib; mods don't make one.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-blacklist" /><code><Link to="/mod/tavernlib-api/types/backend-server-configs/userconfig-listconfig">{"UserConfig.ListConfig"}</Link>{" Blacklist { get; set; }"}</code> | <span className="api-desc">Names, ids and addresses that may never join.</span> |
| <Link id="m-users" /><code>{"Dictionary<string, "}<Link to="/mod/tavernlib-api/types/backend-server-configs/userconfig-user">{"UserConfig.User"}</Link>{"> Users { get; set; }"}</code> | <span className="api-desc">Registered players by lower-case username.</span> |
| <Link id="m-whitelist" /><code><Link to="/mod/tavernlib-api/types/backend-server-configs/userconfig-listconfig">{"UserConfig.ListConfig"}</Link>{" Whitelist { get; set; }"}</code> | <span className="api-desc">Names, ids and addresses allowed in while the whitelist is on.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-extra" /><code>{"private IDictionary<string, JToken> Extra { get; set; }"}</code> | <span className="api-desc">Holds JSON keys TavernLib doesn't model, so they are written back unchanged.</span> |

</details>

## Used in

Members of other types that take, return or hold a `UserConfig`:

<div className="api-used-in">

[`AuthManager.CheckIfPermitted`](/mod/tavernlib-api/types/backend-auth/authmanager#m-checkifpermitted), [`AuthManager.NextUserId`](/mod/tavernlib-api/types/backend-auth/authmanager#m-nextuserid), [`AuthManager.Register`](/mod/tavernlib-api/types/backend-auth/authmanager#m-register), [`JoinRules.IsBlacklisted`](/mod/tavernlib-api/types/backend-auth/joinrules#m-isblacklisted), [`JoinRules.IsWhitelisted`](/mod/tavernlib-api/types/backend-auth/joinrules#m-iswhitelisted), [`JoinRules.WhitelistOn`](/mod/tavernlib-api/types/backend-auth/joinrules#m-whiteliston), [`PlayerCommandModule.ChangeUsers`](/mod/tavernlib-api/types/moduleports/playercommandmodule#m-changeusers), [`PlayerJoinFilter.Refusal`](/mod/tavernlib-api/types/patches/playerjoinfilter#m-refusal).

</div>
