---
title: "ServerJoinType"
description: "enum ServerJoinType in Alta.Api.DataTransferModels."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerJoinType

An **enum** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

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

[`GameServerCreateRequest.JoinType`](/game-api/types/assembly-api-models/gameservercreaterequest#m-jointype), [`GameServerInfo.JoinType`](/game-api/types/assembly-api-models/gameserverinfo#m-jointype), [`GroupTypeExtensions.ConvertToServerJoinType`](/game-api/types/assembly-api-models/grouptypeextensions#m-converttoserverjointype).
