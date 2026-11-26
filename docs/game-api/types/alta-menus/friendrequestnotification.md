---
title: "FriendRequestNotification"
description: "A notification list entry for an incoming friend request, with accept and decline that call the social service."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FriendRequestNotification

A **class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

A notification list entry for an incoming friend request, with accept and decline that call the social service.

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

| Member | What it is |
| --- | --- |
| <Link id="m-analyticsservice" /><code>{"private readonly "}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> | Service the accept and decline events are sent to. |
| <Link id="m-friendrequest" /><code>{"private readonly "}<Link to="/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{" friendRequest"}</code> | The friend request this entry shows. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-message" /><code>{"override string Message { get; }"}</code> | Text saying who wants to be your friend. |
| <Link id="m-shortmessage" /><code>{"override string ShortMessage { get; }"}</code> | The requester's username. |
| <Link id="m-time" /><code>{"override DateTime Time { get; }"}</code> | When the request was made. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-accept" /><code>{"override async Task<bool> Accept()"}</code> | Accepts the friend request and sends an analytics event. |
| <Link id="m-decline" /><code>{"override async Task Decline()"}</code> | Removes the friendship (declines the request) and sends an analytics event. |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> | Equal if the requests have the same ID (the typed overload also compares the analytics service). |
| <Link id="m-equals-2" /><code>{"bool Equals("}<Link to="/game-api/types/alta-menus/friendrequestnotification">{"FriendRequestNotification"}</Link>{" other)"}</code> | Equal if the requests have the same ID (the typed overload also compares the analytics service). |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> | Hash of the request and the analytics service. |
