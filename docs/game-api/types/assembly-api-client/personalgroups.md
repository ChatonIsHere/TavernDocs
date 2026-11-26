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

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal PersonalGroups("}<Link to="/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api)"}</code> | Creates a `PersonalGroups` from `api`. |

</details>

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-api" /><code>{"private readonly "}<Link to="/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api"}</code> | The low-level client that sends the requests. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-invited" /><code><Link to="/game-api/types/assembly-api-client/invitedgroups">{"InvitedGroups"}</Link>{" Invited { get; }"}</code> | Groups the user has been invited to. |
| <Link id="m-requested" /><code><Link to="/game-api/types/assembly-api-client/requestedgroups">{"RequestedGroups"}</Link>{" Requested { get; }"}</code> | Groups the user has asked to join. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-joingroup" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-client/outgoingprivategroupjoinrequest">{"OutgoingPrivateGroupJoinRequest"}</Link>{"> JoinGroup(int groupIdentifier)"}</code> | Sends a request to join a group and returns the outgoing request. |

## Used in

Members of other types that take, return or hold a `PersonalGroups`:

[`GroupsClient.Personal`](/game-api/types/assembly-api-client/groupsclient#m-personal), [`IGroupsClient.Personal`](/game-api/types/assembly-api-client/igroupsclient#m-personal), [`OfflineGroupsClient.Personal`](/game-api/types/assembly-api-client/offlinegroupsclient#m-personal).
