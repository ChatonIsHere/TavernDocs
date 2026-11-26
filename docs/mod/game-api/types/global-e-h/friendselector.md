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
| <Link id="m-ctor" /><code>{"FriendSelector()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentplayer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" currentPlayer"}</code> | Not used in this build. |
| <Link id="m-filteringtask" /><code>{"private Task filteringTask"}</code> | Not used in this build. |
| <Link id="m-friends" /><code>{"private List<"}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> friends"}</code> | The friends shown, as user ID and username. |
| <Link id="m-iscancelling" /><code>{"private bool isCancelling"}</code> | Not used in this build. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Class logger. |
| <Link id="m-scroller" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/scrollerselector">{"ScrollerSelector"}</Link>{" scroller"}</code> | The scroller that shows the friend names. |
| <Link id="m-syncfilter" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncFilter"}</code> | Method sync for the friend list (`SyncB`). |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentfriend" /><code>{"int CurrentFriend { get; }"}</code> | User ID of the friend under the scroller, or -1 with no friends. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-updatedfriendselection" /><code>{"event Action<int> UpdatedFriendSelection"}</code> | Raised with the user ID of the newly selected friend. |
| <Link id="m-updatedvalues" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-menus/iprovideenumerable-t">{"IProvideEnumerable"}</Link>{"<string>> UpdatedValues"}</code> | Raised when the friend list changes, with this as the source of names. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the friend list sync and listens to the scroller. |
| <Link id="m-setplayer" /><code>{"async void SetPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Empty in this build. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-syncfilter-2" /><code>{"private void SyncFilter("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes the friend IDs, or reads them and rebuilds the list from the local player's friends, then raises `UpdatedValues`. |
| <Link id="m-updatefriend" /><code>{"private void UpdateFriend(int index)"}</code> | Scroller handler that raises `UpdatedFriendSelection` with the chosen friend's ID. |

</details>

## Used in

Members of other types that take, return or hold a `FriendSelector`:

[`PostboxSender.friendSelector`](/mod/game-api/types/global-p/postboxsender#m-friendselector).
