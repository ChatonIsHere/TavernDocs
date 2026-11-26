---
title: "SetServersOnlinePlayersRequest"
description: "Body of the Alta web API call a server makes to report who is online (SetOnlinePlayers)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SetServersOnlinePlayersRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Body of the Alta web API call a server makes to report who is online (`SetOnlinePlayers`).

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SetServersOnlinePlayersRequest()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-onlineplayers" /><code>{"IEnumerable<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> OnlinePlayers { get; set; }"}</code> | The players on the server now. |
| <Link id="m-session" /><code>{"int Session { get; set; }"}</code> | The server's session id. |

## Used in

Members of other types that take, return or hold a `SetServersOnlinePlayersRequest`:

[`LowLevelApiClient.SetOnlinePlayers`](/game-api/types/assembly-api-client/lowlevelapiclient#m-setonlineplayers).
