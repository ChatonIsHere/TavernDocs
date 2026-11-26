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

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"JoinServerRequest()"}</code> | Creates a `JoinServerRequest` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-deviceidentifier" /><code>{"string DeviceIdentifier { get; set; }"}</code> | Id of the device joining. |
| <Link id="m-gameversion" /><code><Link to="/game-api/types/assembly-api-models/gameversion">{"GameVersion"}</Link>{" "}<Link to="/game-api/types/assembly-api-models/gameversion">{"GameVersion"}</Link>{" { get; set; }"}</code> | Game version of the client. |
| <Link id="m-identitytoken" /><code>{"string IdentityToken { get; set; }"}</code> | The user's identity token. |
| <Link id="m-isignoringoffline" /><code>{"bool IsIgnoringOffline { get; set; }"}</code> | Sent as `ignore_offline`. Probably asks the API to try even if the server shows as offline. |
| <Link id="m-shouldlaunchserver" /><code>{"bool ShouldLaunchServer { get; set; }"}</code> | Whether the API should start the server if it is not running (true by default). |

## Used in

Members of other types that take, return or hold a `JoinServerRequest`:

[`LowLevelApiClient.ConnectConsole`](/game-api/types/assembly-api-client/lowlevelapiclient#m-connectconsole), [`LowLevelApiClient.JoinServer`](/game-api/types/assembly-api-client/lowlevelapiclient#m-joinserver).
