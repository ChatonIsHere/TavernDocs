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

- **Listed in** [TavernLib.Backend.Auth](/tavernlib-api/types/backend-auth)
- **Nested in** [`AuthPayloads`](/tavernlib-api/types/backend-auth/authpayloads)
- **Attributes** `IsReadOnly`
- **Documented in** [AuthPayloads.ModsListResponse](/tavernlib-api/types/backend-auth/authpayloads-modslistresponse)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ModsListResponse(List<"}<Link to="/tavernlib-api/types/backend-mods/modhandshake-entry">{"ModHandshake.Entry"}</Link>{"> mods, List<"}<Link to="/tavernlib-api/types/backend-mods/untrackedmod">{"UntrackedMod"}</Link>{"> untracked)"}</code> |

## Properties

<details>
<summary>3 private and internal properties</summary>

| Member |
| --- |
| <Link id="m-mods" /><code>{"private List<"}<Link to="/tavernlib-api/types/backend-mods/modhandshake-entry">{"ModHandshake.Entry"}</Link>{"> Mods { get; }"}</code> |
| <Link id="m-status" /><code>{"private string Status { get; }"}</code> |
| <Link id="m-untracked" /><code>{"private List<"}<Link to="/tavernlib-api/types/backend-mods/untrackedmod">{"UntrackedMod"}</Link>{"> Untracked { get; }"}</code> |

</details>
