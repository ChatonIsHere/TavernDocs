---
title: "PersonalGroups"
description: "The logged-in user's group join requests and invites, from the Alta web API."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PersonalGroups

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

The logged-in user's group join requests and invites, from the Alta web API. `Groups.Personal`.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)

## Constructors

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal PersonalGroups("}<Link to="/mod/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api)"}</code> | <span className="api-desc">Creates a `PersonalGroups` from `api`.</span> |

</details>

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-api" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api"}</code> | <span className="api-desc">The low-level client that sends the requests.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-invited" /><code><Link to="/mod/game-api/types/assembly-api-client/invitedgroups">{"InvitedGroups"}</Link>{" Invited { get; }"}</code> | <span className="api-desc">Groups the user has been invited to.</span> |
| <Link id="m-requested" /><code><Link to="/mod/game-api/types/assembly-api-client/requestedgroups">{"RequestedGroups"}</Link>{" Requested { get; }"}</code> | <span className="api-desc">Groups the user has asked to join.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-joingroup" /><code>{"async Task<"}<Link to="/mod/game-api/types/assembly-api-client/outgoingprivategroupjoinrequest">{"OutgoingPrivateGroupJoinRequest"}</Link>{"> JoinGroup(int groupIdentifier)"}</code> | <span className="api-desc">Sends a request to join a group and returns the outgoing request.</span> |

## Used in

Members of other types that take, return or hold a `PersonalGroups`:

<div className="api-used-in">

[`GroupsClient.Personal`](/mod/game-api/types/assembly-api-client/groupsclient#m-personal), [`IGroupsClient.Personal`](/mod/game-api/types/assembly-api-client/igroupsclient#m-personal), [`OfflineGroupsClient.Personal`](/mod/game-api/types/assembly-api-client/offlinegroupsclient#m-personal).

</div>
