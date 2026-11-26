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

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** [`Outgoing`](/game-api/types/assembly-api-client/outgoing)
- **Derived types** [`GroupInvites`](/game-api/types/assembly-api-client/groupinvites)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member |
| --- |
| <Link id="m-ctor" /><code>{"internal OutgoingGroupInvite("}<Link to="/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api, "}<Link to="/game-api/types/assembly-api-models/groupmemberinfo">{"GroupMemberInfo"}</Link>{" memberInfo)"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-memberinfo" /><code><Link to="/game-api/types/assembly-api-models/groupmemberinfo">{"GroupMemberInfo"}</Link>{" MemberInfo { get; }"}</code> | The invited user's group member info, including group and user ids. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-revoke" /><code>{"override Task Revoke()"}</code> | Withdraws the invite for that user in that group. |

## Used in

Members of other types that take, return or hold a `OutgoingGroupInvite`:

[`GroupInvites.Add`](/game-api/types/assembly-api-client/groupinvites#m-add), [`OutgoingGroupInvitesPage.RevokeInvite`](/game-api/types/alta-menus/outgoinggroupinvitespage#m-revokeinvite).
