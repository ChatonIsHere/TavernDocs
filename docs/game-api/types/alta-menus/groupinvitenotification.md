---
title: "GroupInviteNotification"
description: "class GroupInviteNotification in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GroupInviteNotification

A **class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`UINotification`](/game-api/types/alta-menus/uinotification), `IEquatable<GroupInviteNotification>`
- **Derived types** [`GroupInviteNotification`](/game-api/types/alta-menus/groupinvitenotification)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GroupInviteNotification("}<Link to="/game-api/types/assembly-api-client/incominggroupinvite">{"IncomingGroupInvite"}</Link>{" groupInvite, "}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-groupinvite" /><code>{"private readonly "}<Link to="/game-api/types/assembly-api-client/incominggroupinvite">{"IncomingGroupInvite"}</Link>{" groupInvite"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-message" /><code>{"override string Message { get; }"}</code> |  |
| <Link id="m-shortmessage" /><code>{"override string ShortMessage { get; }"}</code> |  |
| <Link id="m-time" /><code>{"override DateTime Time { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-accept" /><code>{"override async Task<bool> Accept()"}</code> |  |
| <Link id="m-decline" /><code>{"override Task Decline()"}</code> |  |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> |  |
| <Link id="m-equals-2" /><code>{"bool Equals("}<Link to="/game-api/types/alta-menus/groupinvitenotification">{"GroupInviteNotification"}</Link>{" other)"}</code> |  |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> |  |
