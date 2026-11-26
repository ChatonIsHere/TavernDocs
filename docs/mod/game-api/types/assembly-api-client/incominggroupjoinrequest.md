---
title: "IncomingGroupJoinRequest"
description: "A request from a user to join a group, which the group's admin can accept or reject."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IncomingGroupJoinRequest

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

A request from a user to join a group, which the group's admin can accept or reject. Calls Alta's web API, which no longer answers.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Inherits or implements** [`AcceptReject`](/mod/game-api/types/assembly-api-client/acceptreject)
- **Derived types** [`GroupJoinRequests`](/mod/game-api/types/assembly-api-client/groupjoinrequests)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal IncomingGroupJoinRequest("}<Link to="/mod/game-api/types/assembly-api-models/groupmemberinfo">{"GroupMemberInfo"}</Link>{" item, "}<Link to="/mod/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api)"}</code> | Creates an `IncomingGroupJoinRequest` from `item` and `api`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-memberinfo" /><code><Link to="/mod/game-api/types/assembly-api-models/groupmemberinfo">{"GroupMemberInfo"}</Link>{" MemberInfo { get; }"}</code> | The requesting user and group. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-accept" /><code>{"override Task Accept()"}</code> | Accepts the user into the group. |
| <Link id="m-reject" /><code>{"override Task Reject()"}</code> | Rejects the request. |
