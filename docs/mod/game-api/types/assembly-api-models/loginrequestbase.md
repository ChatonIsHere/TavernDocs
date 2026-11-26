---
title: "LoginRequestBase"
description: "Base for login request bodies: a password hash plus the device id and platform target from RefreshRequest."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LoginRequestBase

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Base for login request bodies: a password hash plus the device id and platform target from `RefreshRequest`.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Inherits or implements** [`RefreshRequest`](/mod/game-api/types/assembly-api-models/refreshrequest)
- **Derived types** [`LoginRequest`](/mod/game-api/types/assembly-api-models/loginrequest), [`LoginWithEmailRequest`](/mod/game-api/types/assembly-api-models/loginwithemailrequest)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LoginRequestBase(string passwordHash, string deviceIdentifier)"}</code> | <span className="api-desc">Creates a `LoginRequestBase` with default values.</span> |
| <Link id="m-ctor-2" /><code>{"LoginRequestBase()"}</code> | <span className="api-desc">Creates a `LoginRequestBase` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-passwordhash" /><code>{"string PasswordHash { get; private set; }"}</code> | <span className="api-desc">Hash of the password (see `LoginUtilities.HashString`), never the plain password.</span> |
