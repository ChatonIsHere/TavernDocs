---
title: "IdentityTokenRequest"
description: "Body of the Alta web API call that generates an identity token (GenerateIdentityTokenAsync)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IdentityTokenRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Body of the Alta web API call that generates an identity token (`GenerateIdentityTokenAsync`).

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"IdentityTokenRequest()"}</code> | Creates an `IdentityTokenRequest` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-userdata" /><code>{"object UserData { get; set; }"}</code> | Extra data to put in the token, any JSON shape. |

## Used in

Members of other types that take, return or hold a `IdentityTokenRequest`:

[`LowLevelApiClient.GenerateIdentityTokenAsync`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-generateidentitytokenasync).
