---
title: "JoinRules"
description: "A internal static class in TavernLib, TavernLib.Backend.Auth. Reach it through att-stubs' publicized assemblies or Harmony's AccessTools."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JoinRules

A **internal static class** in `TavernLib`, `TavernLib.Backend.Auth`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A **internal static class** in `TavernLib`, `TavernLib.Backend.Auth`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [TavernLib.Backend.Auth](/tavernlib-api/types/backend-auth)
- **Documented in** [JoinRules](/tavernlib-api/types/backend-auth/joinrules)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-usernamemaxlength" /><code>{"const int UsernameMaxLength"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isblacklisted" /><code>{"static bool IsBlacklisted("}<Link to="/tavernlib-api/types/backend-server-configs/userconfig">{"UserConfig"}</Link>{" config, string username, ulong? userId, string address)"}</code> |  |
| <Link id="m-isvalidname" /><code>{"static bool IsValidName(string name)"}</code> |  |
| <Link id="m-iswhitelisted" /><code>{"static bool IsWhitelisted("}<Link to="/tavernlib-api/types/backend-server-configs/userconfig">{"UserConfig"}</Link>{" config, string username, ulong? userId, string address, string registeredFrom)"}</code> |  |
| <Link id="m-whiteliston" /><code>{"static bool WhitelistOn("}<Link to="/tavernlib-api/types/backend-server-configs/serversettings">{"ServerSettings"}</Link>{" settings, "}<Link to="/tavernlib-api/types/backend-server-configs/userconfig">{"UserConfig"}</Link>{" config)"}</code> |  |
| <Link id="m-hasentries" /><code>{"private static bool HasEntries("}<Link to="/tavernlib-api/types/backend-server-configs/userconfig-listconfig">{"UserConfig.ListConfig"}</Link>{" list)"}</code> |  |
| <Link id="m-matches" /><code>{"private static bool Matches("}<Link to="/tavernlib-api/types/backend-server-configs/userconfig-listconfig">{"UserConfig.ListConfig"}</Link>{" list, string username, ulong? userId, string address, string registeredFrom)"}</code> |  |
