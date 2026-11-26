---
title: "AuthPayloads.AuthenticateRequest"
description: "A join request on the auth port: the player's name, account token and, if needed, password."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AuthPayloads.AuthenticateRequest

A **struct** in `TavernLib`, `TavernLib.Backend.Auth`.

A join request on the auth port: the player's name, account token and, if needed, password.

- **Listed in** [TavernLib.Backend.Auth](/mod/tavernlib-api/types/backend-auth)
- **Nested in** [`AuthPayloads`](/mod/tavernlib-api/types/backend-auth/authpayloads)
- **Documented in** [AuthPayloads.AuthenticateRequest](/mod/tavernlib-api/types/backend-auth/authpayloads-authenticaterequest)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-password" /><code>{"string Password { get; private set; }"}</code> | Must be SHA-256 of the password: the server hashes it once more and compares it with `password_hash`. |
| <Link id="m-token" /><code>{"string Token { get; private set; }"}</code> | The player's account token, saved with the name on first join and checked every join after. |
| <Link id="m-username" /><code>{"string Username { get; private set; }"}</code> | The name to join as. |

## Used in

Members of other types that take, return or hold a `AuthenticateRequest`:

[`AuthManager.CheckIfPermitted`](/mod/tavernlib-api/types/backend-auth/authmanager#m-checkifpermitted), [`AuthManager.Register`](/mod/tavernlib-api/types/backend-auth/authmanager#m-register), [`AuthManager.ResolveJoin`](/mod/tavernlib-api/types/backend-auth/authmanager#m-resolvejoin).
