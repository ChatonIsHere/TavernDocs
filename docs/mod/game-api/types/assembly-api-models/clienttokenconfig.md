---
title: "ClientTokenConfig"
description: "OAuth client credentials sent to log in as a client rather than a user."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClientTokenConfig

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Shared`.

OAuth client credentials sent to log in as a client rather than a user. `HighLevelApiClient.LoginViaOauth` builds one.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClientTokenConfig()"}</code> | Creates a `ClientTokenConfig` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-clientid" /><code>{"string ClientId { get; set; }"}</code> | The OAuth client ID. |
| <Link id="m-clientsecret" /><code>{"string ClientSecret { get; set; }"}</code> | The OAuth client secret. |
| <Link id="m-scope" /><code>{"string Scope { get; set; }"}</code> | Scopes to request, as a string. |

## Used in

Members of other types that take, return or hold a `ClientTokenConfig`:

[`LowLevelApiClient.LoginWithTokenAsync`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-loginwithtokenasync).
