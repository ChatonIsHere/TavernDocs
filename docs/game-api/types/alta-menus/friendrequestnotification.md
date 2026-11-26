---
title: "FriendRequestNotification"
description: "class FriendRequestNotification in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FriendRequestNotification

A **class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`UINotification`](/game-api/types/alta-menus/uinotification), `IEquatable<FriendRequestNotification>`
- **Derived types** [`FriendRequestNotification`](/game-api/types/alta-menus/friendrequestnotification)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FriendRequestNotification("}<Link to="/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{" friendRequest, "}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService, "}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel)"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-analyticsservice" /><code>{"private readonly "}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> |
| <Link id="m-friendrequest" /><code>{"private readonly "}<Link to="/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{" friendRequest"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-message" /><code>{"override string Message { get; }"}</code> |
| <Link id="m-shortmessage" /><code>{"override string ShortMessage { get; }"}</code> |
| <Link id="m-time" /><code>{"override DateTime Time { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-accept" /><code>{"override async Task<bool> Accept()"}</code> |
| <Link id="m-decline" /><code>{"override async Task Decline()"}</code> |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> |
| <Link id="m-equals-2" /><code>{"bool Equals("}<Link to="/game-api/types/alta-menus/friendrequestnotification">{"FriendRequestNotification"}</Link>{" other)"}</code> |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> |
