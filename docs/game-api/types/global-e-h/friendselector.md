---
title: "FriendSelector"
description: "class FriendSelector in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FriendSelector

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IProvideEnumerable<string>`](/game-api/types/alta-menus/iprovideenumerable-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FriendSelector()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentplayer" /><code>{"private "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" currentPlayer"}</code> |  |
| <Link id="m-filteringtask" /><code>{"private Task filteringTask"}</code> |  |
| <Link id="m-friends" /><code>{"private List<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> friends"}</code> |  |
| <Link id="m-iscancelling" /><code>{"private bool isCancelling"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-scroller" /><code>{"private "}<Link to="/game-api/types/alta-menus/scrollerselector">{"ScrollerSelector"}</Link>{" scroller"}</code> |  |
| <Link id="m-syncfilter" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncFilter"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentfriend" /><code>{"int CurrentFriend { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-updatedfriendselection" /><code>{"event Action<int> UpdatedFriendSelection"}</code> |  |
| <Link id="m-updatedvalues" /><code>{"event Action<"}<Link to="/game-api/types/alta-menus/iprovideenumerable-t">{"IProvideEnumerable"}</Link>{"<string>> UpdatedValues"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-setplayer" /><code>{"async void SetPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-syncfilter-2" /><code>{"private void SyncFilter("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-updatefriend" /><code>{"private void UpdateFriend(int index)"}</code> |  |

## Used in

Members of other types that take, return or hold a `FriendSelector`:

[`PostboxSender.friendSelector`](/game-api/types/global-p/postboxsender#m-friendselector).
