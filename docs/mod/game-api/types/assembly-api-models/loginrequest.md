---
title: "LoginRequest"
description: "Body of an Alta web API login with a username, password hash and device id."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LoginRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Body of an Alta web API login with a username, password hash and device id.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Inherits or implements** [`LoginRequestBase`](/mod/game-api/types/assembly-api-models/loginrequestbase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LoginRequest(string username, string passwordHash, string deviceIdentifier)"}</code> | <span className="api-desc">Creates a `LoginRequest` with default values.</span> |
| <Link id="m-ctor-2" /><code>{"LoginRequest()"}</code> | <span className="api-desc">Creates a `LoginRequest` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-username" /><code>{"string Username { get; private set; }"}</code> | <span className="api-desc">The username to log in with.</span> |

## Used in

Members of other types that take, return or hold a `LoginRequest`:

<div className="api-used-in">

[`LowLevelApiClient.LoginAsync`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-loginasync-2).

</div>
