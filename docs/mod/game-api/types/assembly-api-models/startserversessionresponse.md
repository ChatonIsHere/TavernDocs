---
title: "StartServerSessionResponse"
description: "API response when a server session is started."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StartServerSessionResponse

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

API response when a server session is started.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StartServerSessionResponse()"}</code> | <span className="api-desc">Creates a `StartServerSessionResponse` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-serversession" /><code>{"int ServerSession { get; set; }"}</code> | <span className="api-desc">Id of the new server session.</span> |

## Used in

Members of other types that take, return or hold a `StartServerSessionResponse`:

<div className="api-used-in">

[`LowLevelApiClient.StartLocalServer`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-startlocalserver), [`LowLevelApiClient.StartServerSession`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-startserversession).

</div>
