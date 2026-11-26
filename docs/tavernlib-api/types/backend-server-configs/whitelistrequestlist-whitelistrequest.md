---
title: "WhitelistRequestList.WhitelistRequest"
description: "One whitelist application."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WhitelistRequestList.WhitelistRequest

A **class** in `TavernLib`, `TavernLib.Backend.Server.Configs`.

One whitelist application.

- **Listed in** [TavernLib.Backend.Server.Configs](/tavernlib-api/types/backend-server-configs)
- **Nested in** [`WhitelistRequestList`](/tavernlib-api/types/backend-server-configs/whitelistrequestlist)
- **Documented in** [WhitelistRequestList.WhitelistRequest](/tavernlib-api/types/backend-server-configs/whitelistrequestlist-whitelistrequest)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WhitelistRequest()"}</code> | Created by TavernLib; mods don't make one. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-appliedat" /><code>{"string AppliedAt { get; set; }"}</code> | When it was filed, as UTC ISO 8601 text. |
| <Link id="m-ip" /><code>{"string Ip { get; set; }"}</code> | The address it came from. |
| <Link id="m-username" /><code>{"string Username { get; set; }"}</code> | The name that applied. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-extra" /><code>{"private IDictionary<string, JToken> Extra { get; set; }"}</code> | Holds JSON keys TavernLib doesn't model, so they are written back unchanged. |

</details>

## Used in

Members of other types that take, return or hold a `WhitelistRequest`:

[`WhitelistRequestList.Requests`](/tavernlib-api/types/backend-server-configs/whitelistrequestlist#m-requests).
