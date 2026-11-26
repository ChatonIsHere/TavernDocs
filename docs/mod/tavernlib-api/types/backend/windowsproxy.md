---
title: "WindowsProxy"
description: "Reads the current user's Windows proxy settings from the registry."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WindowsProxy

A **static class** in `TavernLib`, `TavernLib.Backend`.

Reads the current user's Windows proxy settings from the registry. Used by `ServerListingController`'s HTTP client.

- **Listed in** [TavernLib.Backend](/mod/tavernlib-api/types/backend)
- **Documented in** [WindowsProxy](/mod/tavernlib-api/types/backend/windowsproxy), [Internals](/mod/tavernlib-api/internals)

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-internetsettingskey" /><code>{"private const string InternetSettingsKey"}</code> | Registry path of the current user's Internet Settings. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createsystemproxy" /><code>{"static IWebProxy CreateSystemProxy()"}</code> | A `WebProxy` for the explicitly set `ProxyServer` with its bypass list, or `null` if none is on. PAC scripts are ignored. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-parseproxyserver" /><code>{"private static Uri ParseProxyServer(string proxyServer, string protocol)"}</code> | Reads the `ProxyServer` value (a single host:port or a per-protocol list) into a URI for the given protocol, or null. |
| <Link id="m-regexescapeforbypass" /><code>{"private static string RegexEscapeForBypass(string wildcardEntry)"}</code> | Turns a wildcard proxy override entry into an anchored regex for the bypass list. |

</details>
