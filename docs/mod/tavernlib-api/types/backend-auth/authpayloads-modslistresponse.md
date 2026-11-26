---
title: "AuthPayloads.ModsListResponse"
description: "The answer to mods_list: the server's mods and enabled untracked mods, sent with a 4-byte big-endian length in front."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AuthPayloads.ModsListResponse

A **struct** in `TavernLib`, `TavernLib.Backend.Auth`.

The answer to `mods_list`: the server's mods and enabled untracked mods, sent with a 4-byte big-endian length in front.

- **Listed in** [TavernLib.Backend.Auth](/mod/tavernlib-api/types/backend-auth)
- **Nested in** [`AuthPayloads`](/mod/tavernlib-api/types/backend-auth/authpayloads)
- **Attributes** `IsReadOnly`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ModsListResponse(List<"}<Link to="/mod/tavernlib-api/types/backend-mods/modhandshake-entry">{"ModHandshake.Entry"}</Link>{"> mods, List<"}<Link to="/mod/tavernlib-api/types/backend-mods/untrackedmod">{"UntrackedMod"}</Link>{"> untracked)"}</code> | <span className="api-desc">Sets the mod and untracked lists.</span> |

## Properties

<details className="api-private">
<summary>3 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-mods" /><code>{"private List<"}<Link to="/mod/tavernlib-api/types/backend-mods/modhandshake-entry">{"ModHandshake.Entry"}</Link>{"> Mods { get; }"}</code> | <span className="api-desc">The enabled server mods.</span> |
| <Link id="m-status" /><code>{"private string Status { get; }"}</code> | <span className="api-desc">Always `ok`.</span> |
| <Link id="m-untracked" /><code>{"private List<"}<Link to="/mod/tavernlib-api/types/backend-mods/untrackedmod">{"UntrackedMod"}</Link>{"> Untracked { get; }"}</code> | <span className="api-desc">The enabled mods that this manager did not install.</span> |

</details>
