---
title: "QuickCreateResponse"
description: "Response from the groups quick-create call: the new group and its server."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# QuickCreateResponse

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

Response from the groups quick-create call: the new group and its server.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"QuickCreateResponse()"}</code> | Creates a `QuickCreateResponse` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-group" /><code><Link to="/mod/game-api/types/assembly-api-models/groupinfo">{"GroupInfo"}</Link>{" Group { get; set; }"}</code> | The created group. |
| <Link id="m-server" /><code><Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" Server { get; set; }"}</code> | The created server. |

## Used in

Members of other types that take, return or hold a `QuickCreateResponse`:

[`GroupCreator.QuickCreateGroup`](/mod/game-api/types/assembly-api-client/groupcreator#m-quickcreategroup), [`LowLevelApiClient.QuickCreateGroupAndServer`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-quickcreategroupandserver).
