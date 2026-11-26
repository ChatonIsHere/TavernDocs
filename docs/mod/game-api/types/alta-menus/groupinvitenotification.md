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

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`UINotification`](/mod/game-api/types/alta-menus/uinotification), `IEquatable<GroupInviteNotification>`
- **Derived types** [`GroupInviteNotification`](/mod/game-api/types/alta-menus/groupinvitenotification)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GroupInviteNotification("}<Link to="/mod/game-api/types/assembly-api-client/incominggroupinvite">{"IncomingGroupInvite"}</Link>{" groupInvite, "}<Link to="/mod/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel)"}</code> | <span className="api-desc">Creates a `GroupInviteNotification` from `groupInvite` and `panel`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-groupinvite" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-api-client/incominggroupinvite">{"IncomingGroupInvite"}</Link>{" groupInvite"}</code> | <span className="api-desc">The invite this entry shows.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-message" /><code>{"override string Message { get; }"}</code> | <span className="api-desc">Text saying which group you were invited into.</span> |
| <Link id="m-shortmessage" /><code>{"override string ShortMessage { get; }"}</code> | <span className="api-desc">The group's name.</span> |
| <Link id="m-time" /><code>{"override DateTime Time { get; }"}</code> | <span className="api-desc">When the invite was sent.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-accept" /><code>{"override async Task<bool> Accept()"}</code> | <span className="api-desc">Accepts the invite. Returns false and logs the error if it fails.</span> |
| <Link id="m-decline" /><code>{"override Task Decline()"}</code> | <span className="api-desc">Rejects the invite.</span> |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> | <span className="api-desc">Equal if the invites are for the same group ID (the typed overload compares the invite objects).</span> |
| <Link id="m-equals-2" /><code>{"bool Equals("}<Link to="/mod/game-api/types/alta-menus/groupinvitenotification">{"GroupInviteNotification"}</Link>{" other)"}</code> | <span className="api-desc">Equal if the invites are for the same group ID (the typed overload compares the invite objects).</span> |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> | <span className="api-desc">Hash of the invite object.</span> |
