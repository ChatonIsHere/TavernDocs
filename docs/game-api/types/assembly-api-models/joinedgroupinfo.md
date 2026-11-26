---
title: "JoinedGroupInfo"
description: "Web API model for a group the user has joined, paired with their membership."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JoinedGroupInfo

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

Web API model for a group the user has joined, paired with their membership. Returned by `LowLevelApiClient.GetJoinedGroups`.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"JoinedGroupInfo()"}</code> | Creates a `JoinedGroupInfo` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-group" /><code><Link to="/game-api/types/assembly-api-models/groupinfodetailed">{"GroupInfoDetailed"}</Link>{" Group { get; set; }"}</code> | Full details of the group. |
| <Link id="m-memberinfo" /><code><Link to="/game-api/types/assembly-api-models/groupmemberinfo">{"GroupMemberInfo"}</Link>{" MemberInfo { get; set; }"}</code> | The user's membership record in that group. |

## Used in

Members of other types that take, return or hold a `JoinedGroupInfo`:

[`LowLevelApiClient.GetJoinedGroups`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getjoinedgroups).
