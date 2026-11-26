---
title: "LoginWithEmailRequest"
description: "Body of an Alta web API login with an email, password hash and device id."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LoginWithEmailRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Body of an Alta web API login with an email, password hash and device id.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Inherits or implements** [`LoginRequestBase`](/mod/game-api/types/assembly-api-models/loginrequestbase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LoginWithEmailRequest(string email, string passwordHash, string deviceIdentifier)"}</code> | <span className="api-desc">Creates a `LoginWithEmailRequest` with default values.</span> |
| <Link id="m-ctor-2" /><code>{"LoginWithEmailRequest()"}</code> | <span className="api-desc">Creates a `LoginWithEmailRequest` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-email" /><code>{"string Email { get; private set; }"}</code> | <span className="api-desc">The email to log in with.</span> |

## Used in

Members of other types that take, return or hold a `LoginWithEmailRequest`:

<div className="api-used-in">

[`LowLevelApiClient.LoginWithEmailAsync`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-loginwithemailasync).

</div>
