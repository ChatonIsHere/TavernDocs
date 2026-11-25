---
title: "JoinRules"
description: "Internal: who may join, checked on the auth port and again at the game port, which a client can reach without the auth port."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JoinRules

A **internal static class** in `TavernLib`, `TavernLib.Backend.Auth`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Internal: who may join, checked on the auth port and again at the game port, which a client can reach without the auth port.

- **Listed in** [TavernLib.Backend.Auth](/tavernlib-api/types/backend-auth)
- **Documented in** [JoinRules](/tavernlib-api/types/backend-auth/joinrules)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-usernamemaxlength" /><code>{"const int UsernameMaxLength"}</code> | 16. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isblacklisted" /><code>{"static bool IsBlacklisted("}<Link to="/tavernlib-api/types/backend-server-configs/userconfig">{"UserConfig"}</Link>{" config, string username, ulong? userId, string address)"}</code> | True if the name (without case), user id or address is on the blacklist. |
| <Link id="m-isvalidname" /><code>{"static bool IsValidName(string name)"}</code> | True for 1 to 16 ASCII letters, digits, spaces, hyphens and underscores, not all blank. Only new names are checked. |
| <Link id="m-iswhitelisted" /><code>{"static bool IsWhitelisted("}<Link to="/tavernlib-api/types/backend-server-configs/userconfig">{"UserConfig"}</Link>{" config, string username, ulong? userId, string address, string registeredFrom)"}</code> | True if the name, id or address is on the whitelist, or the address the account was registered from is. |
| <Link id="m-whiteliston" /><code>{"static bool WhitelistOn("}<Link to="/tavernlib-api/types/backend-server-configs/serversettings">{"ServerSettings"}</Link>{" settings, "}<Link to="/tavernlib-api/types/backend-server-configs/userconfig">{"UserConfig"}</Link>{" config)"}</code> | True with `whitelist_enabled`, or (without `/launcherauth`) whenever the whitelist has any entry. |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-hasentries" /><code>{"private static bool HasEntries("}<Link to="/tavernlib-api/types/backend-server-configs/userconfig-listconfig">{"UserConfig.ListConfig"}</Link>{" list)"}</code> |
| <Link id="m-matches" /><code>{"private static bool Matches("}<Link to="/tavernlib-api/types/backend-server-configs/userconfig-listconfig">{"UserConfig.ListConfig"}</Link>{" list, string username, ulong? userId, string address, string registeredFrom)"}</code> |

</details>
