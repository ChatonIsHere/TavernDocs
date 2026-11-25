---
title: "IncomingGroupInvite"
description: "class IncomingGroupInvite in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IncomingGroupInvite

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** [`AcceptReject`](/game-api/types/assembly-api-client/acceptreject)
- **Derived types** [`InvitedGroups`](/game-api/types/assembly-api-client/invitedgroups)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member |
| --- |
| <Link id="m-ctor" /><code>{"internal IncomingGroupInvite("}<Link to="/game-api/types/assembly-api-models/invitedgroupinfo">{"InvitedGroupInfo"}</Link>{" groupInfo, "}<Link to="/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api)"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-groupinfo" /><code><Link to="/game-api/types/assembly-api-models/invitedgroupinfo">{"InvitedGroupInfo"}</Link>{" GroupInfo { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-accept" /><code>{"override Task Accept()"}</code> |
| <Link id="m-reject" /><code>{"override Task Reject()"}</code> |

## Used in

Members of other types that take, return or hold a `IncomingGroupInvite`:

[`GroupInviteNotification.groupInvite`](/game-api/types/alta-menus/groupinvitenotification#m-groupinvite), [`GroupInviteNotification.GroupInviteNotification`](/game-api/types/alta-menus/groupinvitenotification#m-ctor).
