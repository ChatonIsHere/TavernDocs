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

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GroupServerInfo()"}</code> | <span className="api-desc">Creates a `GroupServerInfo` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-identifier" /><code>{"int Identifier { get; set; }"}</code> | <span className="api-desc">The server's numeric ID.</span> |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | <span className="api-desc">The server's display name.</span> |
| <Link id="m-sceneindex" /><code>{"int SceneIndex { get; set; }"}</code> | <span className="api-desc">Index of the scene (map) the server runs.</span> |
| <Link id="m-status" /><code><Link to="/mod/game-api/types/assembly-api-models/gameserverstatus">{"GameServerStatus"}</Link>{" Status { get; set; }"}</code> | <span className="api-desc">Current `GameServerStatus` of the server, sent as a string in JSON.</span> |

## Used in

Members of other types that take, return or hold a `GroupServerInfo`:

<div className="api-used-in">

[`GroupInfoDetailed.Servers`](/mod/game-api/types/assembly-api-models/groupinfodetailed#m-servers).

</div>
