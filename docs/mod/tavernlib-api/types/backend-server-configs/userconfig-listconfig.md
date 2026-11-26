---
title: "UserConfig.ListConfig"
description: "A whitelist or blacklist in users.json."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UserConfig.ListConfig

A **class** in `TavernLib`, `TavernLib.Backend.Server.Configs`.

A whitelist or blacklist in `users.json`. A player matches on any of their name, id or address.

- **Listed in** [TavernLib.Backend.Server.Configs](/mod/tavernlib-api/types/backend-server-configs)
- **Nested in** [`UserConfig`](/mod/tavernlib-api/types/backend-server-configs/userconfig)
- **Documented in** [User config](/mod/tavernlib-api/config/user-config#userconfiglistconfig)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ListConfig()"}</code> | <span className="api-desc">Created by TavernLib; mods don't make one.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ips" /><code>{"List<string> Ips { get; set; }"}</code> | <span className="api-desc">IP addresses. On the whitelist, an address also lets in accounts registered from it.</span> |
| <Link id="m-userids" /><code>{"List<ulong> UserIds { get; set; }"}</code> | <span className="api-desc">User ids.</span> |
| <Link id="m-usernames" /><code>{"List<string> Usernames { get; set; }"}</code> | <span className="api-desc">Usernames, compared without case.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-extra" /><code>{"private IDictionary<string, JToken> Extra { get; set; }"}</code> | <span className="api-desc">Holds JSON keys TavernLib doesn't model, so they are written back unchanged.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ListConfig`:

<div className="api-used-in">

[`JoinRules.HasEntries`](/mod/tavernlib-api/types/backend-auth/joinrules#m-hasentries), [`JoinRules.Matches`](/mod/tavernlib-api/types/backend-auth/joinrules#m-matches), [`UserConfig.Blacklist`](/mod/tavernlib-api/types/backend-server-configs/userconfig#m-blacklist), [`UserConfig.Whitelist`](/mod/tavernlib-api/types/backend-server-configs/userconfig#m-whitelist), [`PlayerCommandModule.Lists`](/mod/tavernlib-api/types/moduleports/playercommandmodule#m-lists).

</div>
