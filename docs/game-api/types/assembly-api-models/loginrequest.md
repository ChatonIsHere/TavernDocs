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

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Inherits or implements** [`LoginRequestBase`](/game-api/types/assembly-api-models/loginrequestbase)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LoginRequest(string username, string passwordHash, string deviceIdentifier)"}</code> |
| <Link id="m-ctor-2" /><code>{"LoginRequest()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-username" /><code>{"string Username { get; private set; }"}</code> | The username to log in with. |

## Used in

Members of other types that take, return or hold a `LoginRequest`:

[`LowLevelApiClient.LoginAsync`](/game-api/types/assembly-api-client/lowlevelapiclient#m-loginasync-2).
