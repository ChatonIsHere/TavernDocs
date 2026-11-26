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

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Inherits or implements** [`QuickCreateRequest`](/game-api/types/assembly-api-models/quickcreaterequest)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CreateGroupAndServerRequest()"}</code> | Creates a `CreateGroupAndServerRequest` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-description" /><code>{"string Description { get; set; }"}</code> | Group description. |
| <Link id="m-grouptype" /><code><Link to="/game-api/types/assembly-api-models/grouptype">{"GroupType"}</Link>{"? "}<Link to="/game-api/types/assembly-api-models/grouptype">{"GroupType"}</Link>{" { get; set; }"}</code> | Group type (visibility), or null for the API default. |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | Group name. |
| <Link id="m-target" /><code>{"int Target { get; set; }"}</code> | Sent to Alta's API as `target` when creating the group and server; nothing in the game says what it means. |

## Used in

Members of other types that take, return or hold a `CreateGroupAndServerRequest`:

[`GroupCreator.QuickCreateGroup`](/game-api/types/assembly-api-client/groupcreator#m-quickcreategroup), [`LowLevelApiClient.QuickCreateGroupAndServer`](/game-api/types/assembly-api-client/lowlevelapiclient#m-quickcreategroupandserver).
