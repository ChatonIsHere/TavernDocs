---
title: "GroupServerInfo"
description: "Web API model for one game server as listed inside a group's details (GroupInfoDetailed.Servers)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GroupServerInfo

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

Web API model for one game server as listed inside a group's details (`GroupInfoDetailed.Servers`).

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GroupServerInfo()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-identifier" /><code>{"int Identifier { get; set; }"}</code> | The server's numeric ID. |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | The server's display name. |
| <Link id="m-sceneindex" /><code>{"int SceneIndex { get; set; }"}</code> | Index of the scene (map) the server runs. |
| <Link id="m-status" /><code><Link to="/game-api/types/assembly-api-models/gameserverstatus">{"GameServerStatus"}</Link>{" Status { get; set; }"}</code> | Current `GameServerStatus` of the server, sent as a string in JSON. |

## Used in

Members of other types that take, return or hold a `GroupServerInfo`:

[`GroupInfoDetailed.Servers`](/game-api/types/assembly-api-models/groupinfodetailed#m-servers).
