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

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SetServersOnlinePlayersRequest()"}</code> | <span className="api-desc">Creates a `SetServersOnlinePlayersRequest` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-onlineplayers" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> OnlinePlayers { get; set; }"}</code> | <span className="api-desc">The players on the server now.</span> |
| <Link id="m-session" /><code>{"int Session { get; set; }"}</code> | <span className="api-desc">The server's session id.</span> |

## Used in

Members of other types that take, return or hold a `SetServersOnlinePlayersRequest`:

<div className="api-used-in">

[`LowLevelApiClient.SetOnlinePlayers`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-setonlineplayers).

</div>
