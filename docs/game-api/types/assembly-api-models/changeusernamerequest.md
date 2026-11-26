---
title: "ChangeUsernameRequest"
description: "Body of an Alta web API request to change the account's username, confirmed with the password hash."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChangeUsernameRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Body of an Alta web API request to change the account's username, confirmed with the password hash.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ChangeUsernameRequest(string newUsername, string passwordHash)"}</code> |
| <Link id="m-ctor-2" /><code>{"ChangeUsernameRequest()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-newusername" /><code>{"string NewUsername { get; private set; }"}</code> | The username to change to. |
| <Link id="m-passwordhash" /><code>{"string PasswordHash { get; private set; }"}</code> | Hash of the account password, to confirm the change. |

## Used in

Members of other types that take, return or hold a `ChangeUsernameRequest`:

[`LowLevelApiClient.ChangeUsernameAsync`](/game-api/types/assembly-api-client/lowlevelapiclient#m-changeusernameasync).
