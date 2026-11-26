---
title: "GroupMemberType"
description: "A user's state in a group: banned, requested to join, invited, accepted (a member), left or kicked."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GroupMemberType

An **enum** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

A user's state in a group: banned, requested to join, invited, accepted (a member), left or kicked.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Values

| Member |
| --- |
| <Link id="m-accepted" /><code>{"Accepted = 2"}</code> |
| <Link id="m-banned" /><code>{"Banned = -1"}</code> |
| <Link id="m-invited" /><code>{"Invited = 1"}</code> |
| <Link id="m-kicked" /><code>{"Kicked = 4"}</code> |
| <Link id="m-left" /><code>{"Left = 3"}</code> |
| <Link id="m-requestedjoin" /><code>{"RequestedJoin = 0"}</code> |

## Used in

Members of other types that take, return or hold a `GroupMemberType`:

[`GroupMemberInfo.Type`](/mod/game-api/types/assembly-api-models/groupmemberinfo#m-type).
