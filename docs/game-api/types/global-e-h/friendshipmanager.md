---
title: "FriendshipManager"
description: "class FriendshipManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FriendshipManager

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FriendshipManager()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-player" /><code>{"private int player"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-friends" /><code>{"List<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> Friends { get; }"}</code> |  |
| <Link id="m-isfriend" /><code>{"bool IsFriend { get; private set; }"}</code> |  |
| <Link id="m-isupdating" /><code>{"bool IsUpdating { get; private set; }"}</code> |  |
| <Link id="m-friendsids" /><code>{"private HashSet<int> friendsIDs { get; }"}</code> |  |
| <Link id="m-incomingrequestsids" /><code>{"private HashSet<int> incomingRequestsIDs { get; }"}</code> |  |
| <Link id="m-outgoingrequestsids" /><code>{"private HashSet<int> outgoingRequestsIDs { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-anyfriendshipstatusupdated" /><code>{"static event Action<int, bool> AnyFriendshipStatusUpdated"}</code> |  |
| <Link id="m-friendshipstatusupdated" /><code>{"event Action FriendshipStatusUpdated"}</code> |  |
| <Link id="m-localfriendshipstatusupdated" /><code>{"static event Action LocalFriendshipStatusUpdated"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addfriend" /><code>{"void AddFriend("}<Link to="/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{" newFriendShip)"}</code> |  |
| <Link id="m-friendrequestreceived" /><code>{"bool FriendRequestReceived(int player)"}</code> |  |
| <Link id="m-friendrequestsent" /><code>{"bool FriendRequestSent(int player)"}</code> |  |
| <Link id="m-getfriends" /><code>{"async Task GetFriends(bool isLocalPlayer)"}</code> |  |
| <Link id="m-getfriendshiptype" /><code><Link to="/game-api/types/assembly-api-models/friendshiptype">{"FriendshipType"}</Link>{" GetFriendshipType(int player)"}</code> |  |
| <Link id="m-isfriendswith" /><code>{"bool IsFriendsWith(int player)"}</code> |  |
| <Link id="m-localstatusupdate" /><code>{"void LocalStatusUpdate(int playerId, "}<Link to="/game-api/types/assembly-api-models/friendshiptype">{"FriendshipType"}</Link>{" newStatus)"}</code> |  |
| <Link id="m-setup" /><code>{"void Setup(int player)"}</code> |  |
| <Link id="m-updatefromnetwork" /><code>{"async void UpdateFromNetwork("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-updatestatus" /><code>{"void UpdateStatus(bool isFriend)"}</code> |  |
| <Link id="m-updatestatuswithplayer" /><code>{"void UpdateStatusWithPlayer(bool isFriend, int playerId)"}</code> |  |

## Used in

Members of other types that take, return or hold a `FriendshipManager`:

[`IPlayer.FriendshipManager`](/game-api/types/alta-networking/iplayer#m-friendshipmanager), [`Player.FriendshipManager`](/game-api/types/global-p/player#m-friendshipmanager).
