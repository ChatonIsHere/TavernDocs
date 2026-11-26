---
title: "JoinServerRequest"
description: "Body for joining a server or connecting the console through the Alta web API."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JoinServerRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Body for joining a server or connecting the console through the Alta web API.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"JoinServerRequest()"}</code> | <span className="api-desc">Creates a `JoinServerRequest` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-deviceidentifier" /><code>{"string DeviceIdentifier { get; set; }"}</code> | <span className="api-desc">Id of the device joining.</span> |
| <Link id="m-gameversion" /><code><Link to="/mod/game-api/types/assembly-api-models/gameversion">{"GameVersion"}</Link>{" "}<Link to="/mod/game-api/types/assembly-api-models/gameversion">{"GameVersion"}</Link>{" { get; set; }"}</code> | <span className="api-desc">Game version of the client.</span> |
| <Link id="m-identitytoken" /><code>{"string IdentityToken { get; set; }"}</code> | <span className="api-desc">The user's identity token.</span> |
| <Link id="m-isignoringoffline" /><code>{"bool IsIgnoringOffline { get; set; }"}</code> | <span className="api-desc">Sent as `ignore_offline`. Probably asks the API to try even if the server shows as offline.</span> |
| <Link id="m-shouldlaunchserver" /><code>{"bool ShouldLaunchServer { get; set; }"}</code> | <span className="api-desc">Whether the API should start the server if it is not running (true by default).</span> |

## Used in

Members of other types that take, return or hold a `JoinServerRequest`:

<div className="api-used-in">

[`LowLevelApiClient.ConnectConsole`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-connectconsole), [`LowLevelApiClient.JoinServer`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-joinserver).

</div>
