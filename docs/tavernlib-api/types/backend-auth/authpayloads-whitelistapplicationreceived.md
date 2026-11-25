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

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WhitelistApplicationReceived(bool wasNew)"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-alreadypending" /><code>{"private bool AlreadyPending { get; }"}</code> |  |
| <Link id="m-status" /><code>{"private string Status { get; }"}</code> |  |
