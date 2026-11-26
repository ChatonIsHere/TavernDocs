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

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`UINotification`](/mod/game-api/types/alta-menus/uinotification), `IEquatable<FriendRequestNotification>`
- **Derived types** [`FriendRequestNotification`](/mod/game-api/types/alta-menus/friendrequestnotification)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FriendRequestNotification("}<Link to="/mod/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{" friendRequest, "}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService, "}<Link to="/mod/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel)"}</code> | <span className="api-desc">Built by the game's dependency injection (VContainer), which passes the services in.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-analyticsservice" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> | <span className="api-desc">Service the accept and decline events are sent to.</span> |
| <Link id="m-friendrequest" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{" friendRequest"}</code> | <span className="api-desc">The friend request this entry shows.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-message" /><code>{"override string Message { get; }"}</code> | <span className="api-desc">Text saying who wants to be your friend.</span> |
| <Link id="m-shortmessage" /><code>{"override string ShortMessage { get; }"}</code> | <span className="api-desc">The requester's username.</span> |
| <Link id="m-time" /><code>{"override DateTime Time { get; }"}</code> | <span className="api-desc">When the request was made.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-accept" /><code>{"override async Task<bool> Accept()"}</code> | <span className="api-desc">Accepts the friend request and sends an analytics event.</span> |
| <Link id="m-decline" /><code>{"override async Task Decline()"}</code> | <span className="api-desc">Removes the friendship (declines the request) and sends an analytics event.</span> |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> | <span className="api-desc">Equal if the requests have the same ID (the typed overload also compares the analytics service).</span> |
| <Link id="m-equals-2" /><code>{"bool Equals("}<Link to="/mod/game-api/types/alta-menus/friendrequestnotification">{"FriendRequestNotification"}</Link>{" other)"}</code> | <span className="api-desc">Equal if the requests have the same ID (the typed overload also compares the analytics service).</span> |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> | <span className="api-desc">Hash of the request and the analytics service.</span> |
