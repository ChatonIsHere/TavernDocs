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

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** [`Outgoing`](/game-api/types/assembly-api-client/outgoing)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal OutgoingPrivateGroupJoinRequest("}<Link to="/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api, int groupId)"}</code> | Creates an `OutgoingPrivateGroupJoinRequest` from `api` and `groupId`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-groupidentifier" /><code>{"int GroupIdentifier { get; }"}</code> | Id of the group the request was sent to. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-revoke" /><code>{"override Task Revoke()"}</code> | Calls the API to withdraw the join request. |

## Used in

Members of other types that take, return or hold a `OutgoingPrivateGroupJoinRequest`:

[`PersonalGroups.JoinGroup`](/game-api/types/assembly-api-client/personalgroups#m-joingroup).
