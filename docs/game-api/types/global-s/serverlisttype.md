---
title: "ServerListType"
description: "How ServerConfiguration uses its player list: None (ignored), BlackList (listed players blocked) or WhiteList (only listed players allowed)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerListType

An **enum** in `Root.Township`, no namespace.

How `ServerConfiguration` uses its player list: `None` (ignored), `BlackList` (listed players blocked) or `WhiteList` (only listed players allowed).

- **Listed in** [No namespace: S](/game-api/types/global-s)

## Values

| Member |
| --- |
| <Link id="m-blacklist" /><code>{"BlackList = 1"}</code> |
| <Link id="m-none" /><code>{"None = 0"}</code> |
| <Link id="m-whitelist" /><code>{"WhiteList = 2"}</code> |

## Used in

Members of other types that take, return or hold a `ServerListType`:

[`ServerConfiguration.listType`](/game-api/types/global-s/serverconfiguration#m-listtype), [`ServerConfiguration.ListType`](/game-api/types/global-s/serverconfiguration#m-listtype-2).
