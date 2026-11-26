---
title: "FriendSelector"
description: "Networked scroller for picking one of a player's friends."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FriendSelector

A **class** in `Root.Township`, the global namespace.

Networked scroller for picking one of a player's friends. Syncs the list as user IDs, and each client keeps only the ones in its own friends list. `SetPlayer` is empty in this build, so nothing fills the list.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`IProvideEnumerable<string>`](/mod/game-api/types/alta-menus/iprovideenumerable-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FriendSelector()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentplayer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" currentPlayer"}</code> | <span className="api-desc">Not used in this build.</span> |
| <Link id="m-filteringtask" /><code>{"private Task filteringTask"}</code> | <span className="api-desc">Not used in this build.</span> |
| <Link id="m-friends" /><code>{"private List<"}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> friends"}</code> | <span className="api-desc">The friends shown, as user ID and username.</span> |
| <Link id="m-iscancelling" /><code>{"private bool isCancelling"}</code> | <span className="api-desc">Not used in this build.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Class logger.</span> |
| <Link id="m-scroller" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/scrollerselector">{"ScrollerSelector"}</Link>{" scroller"}</code> | <span className="api-desc">The scroller that shows the friend names.</span> |
| <Link id="m-syncfilter" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncFilter"}</code> | <span className="api-desc">Method sync for the friend list (`SyncB`).</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentfriend" /><code>{"int CurrentFriend { get; }"}</code> | <span className="api-desc">User ID of the friend under the scroller, or -1 with no friends.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-updatedfriendselection" /><code>{"event Action<int> UpdatedFriendSelection"}</code> | <span className="api-desc">Raised with the user ID of the newly selected friend.</span> |
| <Link id="m-updatedvalues" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-menus/iprovideenumerable-t">{"IProvideEnumerable"}</Link>{"<string>> UpdatedValues"}</code> | <span className="api-desc">Raised when the friend list changes, with this as the source of names.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the friend list sync and listens to the scroller.</span> |
| <Link id="m-setplayer" /><code>{"async void SetPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Empty in this build.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-syncfilter-2" /><code>{"private void SyncFilter("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes the friend IDs, or reads them and rebuilds the list from the local player's friends, then raises `UpdatedValues`.</span> |
| <Link id="m-updatefriend" /><code>{"private void UpdateFriend(int index)"}</code> | <span className="api-desc">Scroller handler that raises `UpdatedFriendSelection` with the chosen friend's ID.</span> |

</details>

## Used in

Members of other types that take, return or hold a `FriendSelector`:

<div className="api-used-in">

[`PostboxSender.friendSelector`](/mod/game-api/types/global-p/postboxsender#m-friendselector).

</div>
