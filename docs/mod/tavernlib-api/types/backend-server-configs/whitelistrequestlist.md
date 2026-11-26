---
title: "WhitelistRequestList"
description: "The contents of whitelist_requests.json: players who asked to be whitelisted from the launcher."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WhitelistRequestList

A **class** in `TavernLib`, `TavernLib.Backend.Server.Configs`.

The contents of `whitelist_requests.json`: players who asked to be whitelisted from the launcher.

- **Listed in** [TavernLib.Backend.Server.Configs](/mod/tavernlib-api/types/backend-server-configs)
- **Derived types** [`WhitelistRequestsConfigFile`](/mod/tavernlib-api/types/backend-server-configs/whitelistrequestsconfigfile)
- **Nested types** [`WhitelistRequest`](/mod/tavernlib-api/types/backend-server-configs/whitelistrequestlist-whitelistrequest)
- **Documented in** [WhitelistRequestList](/mod/tavernlib-api/types/backend-server-configs/whitelistrequestlist)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WhitelistRequestList()"}</code> | Created by TavernLib; mods don't make one. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-requests" /><code>{"List<"}<Link to="/mod/tavernlib-api/types/backend-server-configs/whitelistrequestlist-whitelistrequest">{"WhitelistRequestList.WhitelistRequest"}</Link>{"> Requests { get; set; }"}</code> | The pending applications. At most 3 per address and 100 in all are taken. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-extra" /><code>{"private IDictionary<string, JToken> Extra { get; set; }"}</code> | Holds JSON keys TavernLib doesn't model, so they are written back unchanged. |

</details>
