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

- **Listed in** [TavernLib.Backend.Auth](/mod/tavernlib-api/types/backend-auth)
- **Nested in** [`AuthPayloads`](/mod/tavernlib-api/types/backend-auth/authpayloads)
- **Attributes** `IsReadOnly`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenericFail(string message)"}</code> | <span className="api-desc">Sets the error message.</span> |

## Properties

<details className="api-private">
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-message" /><code>{"private string Message { get; }"}</code> | <span className="api-desc">The error text sent to the player.</span> |
| <Link id="m-status" /><code>{"private string Status { get; }"}</code> | <span className="api-desc">Always `error`.</span> |

</details>
