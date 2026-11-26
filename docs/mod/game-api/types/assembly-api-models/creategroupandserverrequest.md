---
title: "CreateGroupAndServerRequest"
description: "Body for the API's groups quick-create call, which makes a group and its server together."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CreateGroupAndServerRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Body for the API's groups quick-create call, which makes a group and its server together. The launch region comes from `QuickCreateRequest`.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Inherits or implements** [`QuickCreateRequest`](/mod/game-api/types/assembly-api-models/quickcreaterequest)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CreateGroupAndServerRequest()"}</code> | <span className="api-desc">Creates a `CreateGroupAndServerRequest` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-description" /><code>{"string Description { get; set; }"}</code> | <span className="api-desc">Group description.</span> |
| <Link id="m-grouptype" /><code><Link to="/mod/game-api/types/assembly-api-models/grouptype">{"GroupType"}</Link>{"? "}<Link to="/mod/game-api/types/assembly-api-models/grouptype">{"GroupType"}</Link>{" { get; set; }"}</code> | <span className="api-desc">Group type (visibility), or null for the API default.</span> |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | <span className="api-desc">Group name.</span> |
| <Link id="m-target" /><code>{"int Target { get; set; }"}</code> | <span className="api-desc">Sent to Alta's API as `target` when creating the group and server; nothing in the game says what it means.</span> |

## Used in

Members of other types that take, return or hold a `CreateGroupAndServerRequest`:

<div className="api-used-in">

[`GroupCreator.QuickCreateGroup`](/mod/game-api/types/assembly-api-client/groupcreator#m-quickcreategroup), [`LowLevelApiClient.QuickCreateGroupAndServer`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-quickcreategroupandserver).

</div>
