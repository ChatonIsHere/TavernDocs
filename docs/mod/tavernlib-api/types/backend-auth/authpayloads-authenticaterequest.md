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

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-password" /><code>{"string Password { get; private set; }"}</code> | <span className="api-desc">Must be SHA-256 of the password: the server hashes it once more and compares it with `password_hash`.</span> |
| <Link id="m-token" /><code>{"string Token { get; private set; }"}</code> | <span className="api-desc">The player's account token, saved with the name on first join and checked every join after.</span> |
| <Link id="m-username" /><code>{"string Username { get; private set; }"}</code> | <span className="api-desc">The name to join as.</span> |

## Used in

Members of other types that take, return or hold a `AuthenticateRequest`:

<div className="api-used-in">

[`AuthManager.CheckIfPermitted`](/mod/tavernlib-api/types/backend-auth/authmanager#m-checkifpermitted), [`AuthManager.Register`](/mod/tavernlib-api/types/backend-auth/authmanager#m-register), [`AuthManager.ResolveJoin`](/mod/tavernlib-api/types/backend-auth/authmanager#m-resolvejoin).

</div>
