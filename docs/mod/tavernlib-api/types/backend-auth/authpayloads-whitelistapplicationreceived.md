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

- **Listed in** [TavernLib.Backend.Auth](/mod/tavernlib-api/types/backend-auth)
- **Nested in** [`AuthPayloads`](/mod/tavernlib-api/types/backend-auth/authpayloads)
- **Attributes** `IsReadOnly`
- **Documented in** [AuthPayloads.WhitelistApplicationReceived](/mod/tavernlib-api/types/backend-auth/authpayloads-whitelistapplicationreceived)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WhitelistApplicationReceived(bool wasNew)"}</code> | Sets whether the application was new. |

## Properties

<details>
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alreadypending" /><code>{"private bool AlreadyPending { get; }"}</code> | True when the same application was already filed. |
| <Link id="m-status" /><code>{"private string Status { get; }"}</code> | Always `whitelist_application_received`. |

</details>
