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

- **Listed in** [TavernLib.Backend.Server.Configs](/tavernlib-api/types/backend-server-configs)
- **Nested in** [`UserConfig`](/tavernlib-api/types/backend-server-configs/userconfig)
- **Documented in** [UserConfig.ListConfig](/tavernlib-api/types/backend-server-configs/userconfig-listconfig), [User config](/tavernlib-api/config/user-config#userconfiglistconfig)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ListConfig()"}</code> | Created by TavernLib; mods don't make one. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ips" /><code>{"List<string> Ips { get; set; }"}</code> | IP addresses. On the whitelist, an address also lets in accounts registered from it. |
| <Link id="m-userids" /><code>{"List<ulong> UserIds { get; set; }"}</code> | User ids. |
| <Link id="m-usernames" /><code>{"List<string> Usernames { get; set; }"}</code> | Usernames, compared without case. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-extra" /><code>{"private IDictionary<string, JToken> Extra { get; set; }"}</code> | Holds JSON keys TavernLib doesn't model, so they are written back unchanged. |

</details>

## Used in

Members of other types that take, return or hold a `ListConfig`:

[`JoinRules.HasEntries`](/tavernlib-api/types/backend-auth/joinrules#m-hasentries), [`JoinRules.Matches`](/tavernlib-api/types/backend-auth/joinrules#m-matches), [`UserConfig.Blacklist`](/tavernlib-api/types/backend-server-configs/userconfig#m-blacklist), [`UserConfig.Whitelist`](/tavernlib-api/types/backend-server-configs/userconfig#m-whitelist), [`PlayerCommandModule.Lists`](/tavernlib-api/types/moduleports/playercommandmodule#m-lists).
