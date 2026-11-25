---
title: "AuthPayloads.GenericFail"
description: "Status error with a message, for every other refusal (blacklisted, name taken, too many attempts and so on)."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AuthPayloads.GenericFail

A **struct** in `TavernLib`, `TavernLib.Backend.Auth`.

Status `error` with a message, for every other refusal (blacklisted, name taken, too many attempts and so on).

- **Listed in** [TavernLib.Backend.Auth](/tavernlib-api/types/backend-auth)
- **Nested in** [`AuthPayloads`](/tavernlib-api/types/backend-auth/authpayloads)
- **Attributes** `IsReadOnly`
- **Documented in** [AuthPayloads.GenericFail](/tavernlib-api/types/backend-auth/authpayloads-genericfail)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenericFail(string message)"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-message" /><code>{"private string Message { get; }"}</code> |  |
| <Link id="m-status" /><code>{"private string Status { get; }"}</code> |  |
