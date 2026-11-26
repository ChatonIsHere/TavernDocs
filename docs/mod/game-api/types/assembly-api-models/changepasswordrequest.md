---
title: "ChangePasswordRequest"
description: "Body of an Alta web API request to change the account password."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChangePasswordRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Body of an Alta web API request to change the account password. Sends hashes, not plain passwords.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChangePasswordRequest(string oldPasswordHash, string newPasswordHash)"}</code> | <span className="api-desc">Creates a `ChangePasswordRequest` with default values.</span> |
| <Link id="m-ctor-2" /><code>{"ChangePasswordRequest()"}</code> | <span className="api-desc">Creates a `ChangePasswordRequest` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-newpasswordhash" /><code>{"string NewPasswordHash { get; private set; }"}</code> | <span className="api-desc">Hash of the new password.</span> |
| <Link id="m-oldpasswordhash" /><code>{"string OldPasswordHash { get; private set; }"}</code> | <span className="api-desc">Hash of the current password.</span> |

## Used in

Members of other types that take, return or hold a `ChangePasswordRequest`:

<div className="api-used-in">

[`LowLevelApiClient.ChangePasswordAsync`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-changepasswordasync).

</div>
