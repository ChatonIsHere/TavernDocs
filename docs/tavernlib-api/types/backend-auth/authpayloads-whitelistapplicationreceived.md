---
title: "AuthPayloads.WhitelistApplicationReceived"
description: "Status whitelist_application_received, with already_pending true when the same name and address had already applied."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AuthPayloads.WhitelistApplicationReceived

A **struct** in `TavernLib`, `TavernLib.Backend.Auth`.

Status `whitelist_application_received`, with `already_pending` true when the same name and address had already applied.

- **Listed in** [TavernLib.Backend.Auth](/tavernlib-api/types/backend-auth)
- **Nested in** [`AuthPayloads`](/tavernlib-api/types/backend-auth/authpayloads)
- **Attributes** `IsReadOnly`
- **Documented in** [AuthPayloads.WhitelistApplicationReceived](/tavernlib-api/types/backend-auth/authpayloads-whitelistapplicationreceived)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"WhitelistApplicationReceived(bool wasNew)"}</code> |

## Properties

<details>
<summary>2 private and internal properties</summary>

| Member |
| --- |
| <Link id="m-alreadypending" /><code>{"private bool AlreadyPending { get; }"}</code> |
| <Link id="m-status" /><code>{"private string Status { get; }"}</code> |

</details>
