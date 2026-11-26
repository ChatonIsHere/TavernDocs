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
| <Link id="m-ctor" /><code>{"QuickCreateResponse()"}</code> | <span className="api-desc">Creates a `QuickCreateResponse` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-group" /><code><Link to="/mod/game-api/types/assembly-api-models/groupinfo">{"GroupInfo"}</Link>{" Group { get; set; }"}</code> | <span className="api-desc">The created group.</span> |
| <Link id="m-server" /><code><Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" Server { get; set; }"}</code> | <span className="api-desc">The created server.</span> |

## Used in

Members of other types that take, return or hold a `QuickCreateResponse`:

<div className="api-used-in">

[`GroupCreator.QuickCreateGroup`](/mod/game-api/types/assembly-api-client/groupcreator#m-quickcreategroup), [`LowLevelApiClient.QuickCreateGroupAndServer`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-quickcreategroupandserver).

</div>
