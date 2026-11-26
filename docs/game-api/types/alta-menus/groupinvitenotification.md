---
title: "GroupInviteNotification"
description: "A notification list entry for an invite to join a group (server), with accept and reject."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GroupInviteNotification

A **class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

A notification list entry for an invite to join a group (server), with accept and reject.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`UINotification`](/game-api/types/alta-menus/uinotification), `IEquatable<GroupInviteNotification>`
- **Derived types** [`GroupInviteNotification`](/game-api/types/alta-menus/groupinvitenotification)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GroupInviteNotification("}<Link to="/game-api/types/assembly-api-client/incominggroupinvite">{"IncomingGroupInvite"}</Link>{" groupInvite, "}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel)"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-groupinvite" /><code>{"private readonly "}<Link to="/game-api/types/assembly-api-client/incominggroupinvite">{"IncomingGroupInvite"}</Link>{" groupInvite"}</code> | The invite this entry shows. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-message" /><code>{"override string Message { get; }"}</code> | Text saying which group you were invited into. |
| <Link id="m-shortmessage" /><code>{"override string ShortMessage { get; }"}</code> | The group's name. |
| <Link id="m-time" /><code>{"override DateTime Time { get; }"}</code> | When the invite was sent. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-accept" /><code>{"override async Task<bool> Accept()"}</code> | Accepts the invite. Returns false and logs the error if it fails. |
| <Link id="m-decline" /><code>{"override Task Decline()"}</code> | Rejects the invite. |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> | Equal if the invites are for the same group ID (the typed overload compares the invite objects). |
| <Link id="m-equals-2" /><code>{"bool Equals("}<Link to="/game-api/types/alta-menus/groupinvitenotification">{"GroupInviteNotification"}</Link>{" other)"}</code> | Equal if the invites are for the same group ID (the typed overload compares the invite objects). |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> | Hash of the invite object. |
