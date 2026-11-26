---
title: "OutgoingGroupInvite"
description: "An invite the group has sent to a user, which can be revoked through the Alta web API."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OutgoingGroupInvite

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

An invite the group has sent to a user, which can be revoked through the Alta web API.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Inherits or implements** [`Outgoing`](/mod/game-api/types/assembly-api-client/outgoing)
- **Derived types** [`GroupInvites`](/mod/game-api/types/assembly-api-client/groupinvites)

## Constructors

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal OutgoingGroupInvite("}<Link to="/mod/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api, "}<Link to="/mod/game-api/types/assembly-api-models/groupmemberinfo">{"GroupMemberInfo"}</Link>{" memberInfo)"}</code> | <span className="api-desc">Creates an `OutgoingGroupInvite` from `api` and `memberInfo`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-memberinfo" /><code><Link to="/mod/game-api/types/assembly-api-models/groupmemberinfo">{"GroupMemberInfo"}</Link>{" MemberInfo { get; }"}</code> | <span className="api-desc">The invited user's group member info, including group and user ids.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-revoke" /><code>{"override Task Revoke()"}</code> | <span className="api-desc">Withdraws the invite for that user in that group.</span> |

## Used in

Members of other types that take, return or hold a `OutgoingGroupInvite`:

<div className="api-used-in">

[`GroupInvites.Add`](/mod/game-api/types/assembly-api-client/groupinvites#m-add), [`OutgoingGroupInvitesPage.RevokeInvite`](/mod/game-api/types/alta-menus/outgoinggroupinvitespage#m-revokeinvite).

</div>
