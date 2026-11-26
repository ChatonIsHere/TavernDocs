---
title: "FriendshipManager"
description: "Each Player has one."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FriendshipManager

A **class** in `Root.Township`, no namespace.

Each `Player` has one. Holds that player's friend list, and on the client, whether that player is a friend of the local player. Data comes from the Alta social API.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FriendshipManager()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-player" /><code>{"private int player"}</code> | User ID of the player this manager belongs to, set in `Setup`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-friends" /><code>{"List<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> Friends { get; }"}</code> | The friends' user info. Entries added by `LocalStatusUpdate` have the placeholder name `[temp]`. |
| <Link id="m-isfriend" /><code>{"bool IsFriend { get; private set; }"}</code> | Whether this player is friends with the local player. Used for name boards. |
| <Link id="m-isupdating" /><code>{"bool IsUpdating { get; private set; }"}</code> | True while `GetFriends` is waiting on the API. |

<details>
<summary>3 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-friendsids" /><code>{"private HashSet<int> friendsIDs { get; }"}</code> | User IDs of this player's accepted friends, filled by `GetFriends` and status updates. |
| <Link id="m-incomingrequestsids" /><code>{"private HashSet<int> incomingRequestsIDs { get; }"}</code> | User IDs that sent this player a friend request. |
| <Link id="m-outgoingrequestsids" /><code>{"private HashSet<int> outgoingRequestsIDs { get; }"}</code> | User IDs this player has sent friend requests to. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-anyfriendshipstatusupdated" /><code>{"static event Action<int, bool> AnyFriendshipStatusUpdated"}</code> | Static. Raised with the player's ID and new state whenever any player's `IsFriend` changes. |
| <Link id="m-friendshipstatusupdated" /><code>{"event Action FriendshipStatusUpdated"}</code> | Raised when `IsFriend` changes or the friend list is reloaded. |
| <Link id="m-localfriendshipstatusupdated" /><code>{"static event Action LocalFriendshipStatusUpdated"}</code> | Static. Raised when the local player's friend list finishes loading or a friend is added on the client. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addfriend" /><code>{"void AddFriend("}<Link to="/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{" newFriendShip)"}</code> | Adds a friend to the list. On the client also raises the update events. |
| <Link id="m-friendrequestreceived" /><code>{"bool FriendRequestReceived(int player)"}</code> | Whether this player has an incoming friend request from the given user. Only filled in for the local player. |
| <Link id="m-friendrequestsent" /><code>{"bool FriendRequestSent(int player)"}</code> | Whether this player has sent a friend request to the given user. Only filled in for the local player. |
| <Link id="m-getfriends" /><code>{"async Task GetFriends(bool isLocalPlayer)"}</code> | Reloads the friend list from the API. For the local player it also loads sent and received requests. Skipped on clients for remote players. |
| <Link id="m-getfriendshiptype" /><code><Link to="/game-api/types/assembly-api-models/friendshiptype">{"FriendshipType"}</Link>{" GetFriendshipType(int player)"}</code> | Whether the given user is a friend, has a pending request either way, or neither. |
| <Link id="m-isfriendswith" /><code>{"bool IsFriendsWith(int player)"}</code> | Whether the given user ID is in this player's friend list. |
| <Link id="m-localstatusupdate" /><code>{"void LocalStatusUpdate(int playerId, "}<Link to="/game-api/types/assembly-api-models/friendshiptype">{"FriendshipType"}</Link>{" newStatus)"}</code> | Moves a user between friends, incoming and outgoing request lists without calling the API. |
| <Link id="m-setup" /><code>{"void Setup(int player)"}</code> | Sets which user ID this manager belongs to. |
| <Link id="m-updatefromnetwork" /><code>{"async void UpdateFromNetwork("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Asks the API whether this player and the given player are friends, then updates both managers. |
| <Link id="m-updatestatus" /><code>{"void UpdateStatus(bool isFriend)"}</code> | Sets `IsFriend` and raises the events if it changed. |
| <Link id="m-updatestatuswithplayer" /><code>{"void UpdateStatusWithPlayer(bool isFriend, int playerId)"}</code> | Adds or removes a user ID from this player's friend list. |

## Used in

Members of other types that take, return or hold a `FriendshipManager`:

[`IPlayer.FriendshipManager`](/game-api/types/alta-networking/iplayer#m-friendshipmanager), [`Player.FriendshipManager`](/game-api/types/global-p/player#m-friendshipmanager).
