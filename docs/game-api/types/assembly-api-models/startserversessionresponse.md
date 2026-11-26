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

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StartServerSessionResponse()"}</code> | Creates a `StartServerSessionResponse` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-serversession" /><code>{"int ServerSession { get; set; }"}</code> | Id of the new server session. |

## Used in

Members of other types that take, return or hold a `StartServerSessionResponse`:

[`LowLevelApiClient.StartLocalServer`](/game-api/types/assembly-api-client/lowlevelapiclient#m-startlocalserver), [`LowLevelApiClient.StartServerSession`](/game-api/types/assembly-api-client/lowlevelapiclient#m-startserversession).
