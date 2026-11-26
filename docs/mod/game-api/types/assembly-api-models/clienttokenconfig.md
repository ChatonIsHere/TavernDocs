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
| <Link id="m-ctor" /><code>{"ClientTokenConfig()"}</code> | <span className="api-desc">Creates a `ClientTokenConfig` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-clientid" /><code>{"string ClientId { get; set; }"}</code> | <span className="api-desc">The OAuth client ID.</span> |
| <Link id="m-clientsecret" /><code>{"string ClientSecret { get; set; }"}</code> | <span className="api-desc">The OAuth client secret.</span> |
| <Link id="m-scope" /><code>{"string Scope { get; set; }"}</code> | <span className="api-desc">Scopes to request, as a string.</span> |

## Used in

Members of other types that take, return or hold a `ClientTokenConfig`:

<div className="api-used-in">

[`LowLevelApiClient.LoginWithTokenAsync`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-loginwithtokenasync).

</div>
