---
title: "FriendRequestToken"
description: "class FriendRequestToken in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FriendRequestToken

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`ActionItem`](/game-api/types/global-a-b/actionitem)
- **Nested types** [`FriendshipSyncResult`](/game-api/types/global-e-h/friendrequesttoken-friendshipsyncresult)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FriendRequestToken()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-alreadyfriendseffect" /><code>{"private "}<Link to="/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" alreadyFriendsEffect"}</code> |  |
| <Link id="m-analyticsservice" /><code>{"private "}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> |  |
| <Link id="m-deniedfriendshipeffect" /><code>{"private "}<Link to="/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" deniedFriendshipEffect"}</code> |  |
| <Link id="m-hoverpickup" /><code>{"private "}<Link to="/game-api/types/global-e-h/hoverpickup">{"HoverPickup"}</Link>{" hoverPickup"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-maxnamelength" /><code>{"private int maxNameLength"}</code> |  |
| <Link id="m-namerenderers" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{"[] nameRenderers"}</code> |  |
| <Link id="m-newfriendshipeffect" /><code>{"private "}<Link to="/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" newFriendshipEffect"}</code> |  |
| <Link id="m-othertokenid" /><code>{"private int otherTokenId"}</code> |  |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> |  |
| <Link id="m-receivedownertoken" /><code>{"private bool receivedOwnerToken"}</code> |  |
| <Link id="m-releasetimeout" /><code>{"private float releaseTimeout"}</code> |  |
| <Link id="m-syncfriendshiprequest" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncFriendshipRequest"}</code> |  |
| <Link id="m-syncfriendshiprequesteffect" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncFriendshipRequestEffect"}</code> |  |
| <Link id="m-timelineentry" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" timelineEntry"}</code> |  |
| <Link id="m-timeouttime" /><code>{"private const float TimeoutTime"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-inject" /><code>{"void Inject("}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> |  |
| <Link id="m-addfriend" /><code>{"private async void AddFriend()"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-callfriendshipevent" /><code>{"private void CallFriendshipEvent("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" friend, "}<Link to="/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{" friendship)"}</code> |  |
| <Link id="m-filter" /><code>{"private void Filter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> |  |
| <Link id="m-grabbed" /><code>{"private void Grabbed("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-hover" /><code>{"private void Hover("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-runeffects" /><code>{"private void RunEffects("}<Link to="/game-api/types/global-e-h/friendrequesttoken-friendshipsyncresult">{"FriendRequestToken.FriendshipSyncResult"}</Link>{" friendshipSyncResult)"}</code> |  |
| <Link id="m-syncfriendrequestforplayer" /><code>{"private void SyncFriendRequestForPlayer(int friendID)"}</code> |  |
| <Link id="m-syncfriendrequestfortokenowner" /><code>{"private void SyncFriendRequestForTokenOwner("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-syncfriendshiprequest-2" /><code>{"private void SyncFriendshipRequest("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int friendID)"}</code> |  |
| <Link id="m-syncfriendshiprequesteffect-2" /><code>{"private void SyncFriendshipRequestEffect("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int friendshipResultIndex)"}</code> |  |
| <Link id="m-timeoutfade" /><code>{"private void TimeoutFade()"}</code> |  |
| <Link id="m-updatename" /><code>{"private void UpdateName("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" owner)"}</code> |  |
