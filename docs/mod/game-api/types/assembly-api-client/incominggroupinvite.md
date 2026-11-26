---
title: "IncomingGroupInvite"
description: "An invite to a group that the current user received, with calls to accept or reject it through the Alta web API."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IncomingGroupInvite

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

An invite to a group that the current user received, with calls to accept or reject it through the Alta web API.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Inherits or implements** [`AcceptReject`](/mod/game-api/types/assembly-api-client/acceptreject)
- **Derived types** [`InvitedGroups`](/mod/game-api/types/assembly-api-client/invitedgroups)

## Constructors

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal IncomingGroupInvite("}<Link to="/mod/game-api/types/assembly-api-models/invitedgroupinfo">{"InvitedGroupInfo"}</Link>{" groupInfo, "}<Link to="/mod/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api)"}</code> | <span className="api-desc">Creates an `IncomingGroupInvite` from `groupInfo` and `api`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-groupinfo" /><code><Link to="/mod/game-api/types/assembly-api-models/invitedgroupinfo">{"InvitedGroupInfo"}</Link>{" GroupInfo { get; }"}</code> | <span className="api-desc">The group the user was invited to.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-accept" /><code>{"override Task Accept()"}</code> | <span className="api-desc">Accepts the invite to the group.</span> |
| <Link id="m-reject" /><code>{"override Task Reject()"}</code> | <span className="api-desc">Rejects the invite to the group.</span> |

## Used in

Members of other types that take, return or hold a `IncomingGroupInvite`:

<div className="api-used-in">

[`GroupInviteNotification.groupInvite`](/mod/game-api/types/alta-menus/groupinvitenotification#m-groupinvite), [`GroupInviteNotification.GroupInviteNotification`](/mod/game-api/types/alta-menus/groupinvitenotification#m-ctor).

</div>
