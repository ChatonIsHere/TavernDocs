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

- **Listed in** [TavernLib.Backend](/tavernlib-api/types/backend)
- **Documented in** [WindowsProxy](/tavernlib-api/types/backend/windowsproxy), [Internals](/tavernlib-api/internals)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-internetsettingskey" /><code>{"private const string InternetSettingsKey"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createsystemproxy" /><code>{"static IWebProxy CreateSystemProxy()"}</code> | A `WebProxy` for the explicitly set `ProxyServer` with its bypass list, or `null` if none is on. PAC scripts are ignored. |
| <Link id="m-parseproxyserver" /><code>{"private static Uri ParseProxyServer(string proxyServer, string protocol)"}</code> |  |
| <Link id="m-regexescapeforbypass" /><code>{"private static string RegexEscapeForBypass(string wildcardEntry)"}</code> |  |
