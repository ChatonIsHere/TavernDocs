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

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Inherits or implements** [`Outgoing`](/mod/game-api/types/assembly-api-client/outgoing)
- **Derived types** [`RequestedGroups`](/mod/game-api/types/assembly-api-client/requestedgroups)

## Constructors

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal OutgoingGroupJoinRequest("}<Link to="/mod/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api, "}<Link to="/mod/game-api/types/assembly-api-models/groupinfo">{"GroupInfo"}</Link>{" group)"}</code> | <span className="api-desc">Creates an `OutgoingGroupJoinRequest` from `api` and `group`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-groupinfo" /><code><Link to="/mod/game-api/types/assembly-api-models/groupinfo">{"GroupInfo"}</Link>{" "}<Link to="/mod/game-api/types/assembly-api-models/groupinfo">{"GroupInfo"}</Link>{" { get; }"}</code> | <span className="api-desc">The group the request was sent to.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-revoke" /><code>{"override Task Revoke()"}</code> | <span className="api-desc">Calls the API to withdraw the join request.</span> |

## Used in

Members of other types that take, return or hold a `OutgoingGroupJoinRequest`:

<div className="api-used-in">

[`JoinableGroupInfo.RequestToJoin`](/mod/game-api/types/assembly-api-client/joinablegroupinfo#m-requesttojoin).

</div>
