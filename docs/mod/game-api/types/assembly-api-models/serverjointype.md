---
title: "ServerJoinType"
description: "Who may join a server: group members, public, open group, supporters only, world instance or public group."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerJoinType

An **enum** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

Who may join a server: group members, public, open group, supporters only, world instance or public group. `PrivateGroup` is the same value as `GroupMember`.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Values

| Member |
| --- |
| <Link id="m-groupmember" /><code>{"GroupMember = 0"}</code> |
| <Link id="m-opengroup" /><code>{"OpenGroup = 2"}</code> |
| <Link id="m-privategroup" /><code>{"PrivateGroup = 0"}</code> |
| <Link id="m-public" /><code>{"Public = 1"}</code> |
| <Link id="m-publicgroup" /><code>{"PublicGroup = 5"}</code> |
| <Link id="m-supporteronly" /><code>{"SupporterOnly = 3"}</code> |
| <Link id="m-worldinstance" /><code>{"WorldInstance = 4"}</code> |

## Used in

Members of other types that take, return or hold a `ServerJoinType`:

[`GameServerCreateRequest.JoinType`](/mod/game-api/types/assembly-api-models/gameservercreaterequest#m-jointype), [`GameServerInfo.JoinType`](/mod/game-api/types/assembly-api-models/gameserverinfo#m-jointype), [`GroupTypeExtensions.ConvertToServerJoinType`](/mod/game-api/types/assembly-api-models/grouptypeextensions#m-converttoserverjointype).
