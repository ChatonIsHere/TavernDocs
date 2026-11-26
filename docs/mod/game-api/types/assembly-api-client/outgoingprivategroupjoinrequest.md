---
title: "OutgoingPrivateGroupJoinRequest"
description: "A join request to a group known only by id."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OutgoingPrivateGroupJoinRequest

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

A join request to a group known only by id. Revoke it to withdraw.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Inherits or implements** [`Outgoing`](/mod/game-api/types/assembly-api-client/outgoing)

## Constructors

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal OutgoingPrivateGroupJoinRequest("}<Link to="/mod/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api, int groupId)"}</code> | <span className="api-desc">Creates an `OutgoingPrivateGroupJoinRequest` from `api` and `groupId`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-groupidentifier" /><code>{"int GroupIdentifier { get; }"}</code> | <span className="api-desc">Id of the group the request was sent to.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-revoke" /><code>{"override Task Revoke()"}</code> | <span className="api-desc">Calls the API to withdraw the join request.</span> |

## Used in

Members of other types that take, return or hold a `OutgoingPrivateGroupJoinRequest`:

<div className="api-used-in">

[`PersonalGroups.JoinGroup`](/mod/game-api/types/assembly-api-client/personalgroups#m-joingroup).

</div>
