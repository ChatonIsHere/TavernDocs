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

- **Listed in** [TavernLib.Backend.Server.Configs](/mod/tavernlib-api/types/backend-server-configs)
- **Nested in** [`WhitelistRequestList`](/mod/tavernlib-api/types/backend-server-configs/whitelistrequestlist)
- **Documented in** [WhitelistRequestList.WhitelistRequest](/mod/tavernlib-api/types/backend-server-configs/whitelistrequestlist-whitelistrequest)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WhitelistRequest()"}</code> | <span className="api-desc">Created by TavernLib; mods don't make one.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-appliedat" /><code>{"string AppliedAt { get; set; }"}</code> | <span className="api-desc">When it was filed, as UTC ISO 8601 text.</span> |
| <Link id="m-ip" /><code>{"string Ip { get; set; }"}</code> | <span className="api-desc">The address it came from.</span> |
| <Link id="m-username" /><code>{"string Username { get; set; }"}</code> | <span className="api-desc">The name that applied.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-extra" /><code>{"private IDictionary<string, JToken> Extra { get; set; }"}</code> | <span className="api-desc">Holds JSON keys TavernLib doesn't model, so they are written back unchanged.</span> |

</details>

## Used in

Members of other types that take, return or hold a `WhitelistRequest`:

<div className="api-used-in">

[`WhitelistRequestList.Requests`](/mod/tavernlib-api/types/backend-server-configs/whitelistrequestlist#m-requests).

</div>
