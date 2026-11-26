---
title: "OutgoingGroupJoinRequest"
description: "A join request the current user has sent to a group."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OutgoingGroupJoinRequest

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

A join request the current user has sent to a group. Revoke it to withdraw.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** [`Outgoing`](/game-api/types/assembly-api-client/outgoing)
- **Derived types** [`RequestedGroups`](/game-api/types/assembly-api-client/requestedgroups)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member |
| --- |
| <Link id="m-ctor" /><code>{"internal OutgoingGroupJoinRequest("}<Link to="/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api, "}<Link to="/game-api/types/assembly-api-models/groupinfo">{"GroupInfo"}</Link>{" group)"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-groupinfo" /><code><Link to="/game-api/types/assembly-api-models/groupinfo">{"GroupInfo"}</Link>{" "}<Link to="/game-api/types/assembly-api-models/groupinfo">{"GroupInfo"}</Link>{" { get; }"}</code> | The group the request was sent to. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-revoke" /><code>{"override Task Revoke()"}</code> | Calls the API to withdraw the join request. |

## Used in

Members of other types that take, return or hold a `OutgoingGroupJoinRequest`:

[`JoinableGroupInfo.RequestToJoin`](/game-api/types/assembly-api-client/joinablegroupinfo#m-requesttojoin).
