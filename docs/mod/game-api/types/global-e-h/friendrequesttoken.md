---
title: "FriendRequestToken"
description: "A player's friend token: hand it to another player and, if both sides report the handover within 2 seconds, the server sends a friend request through the API."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FriendRequestToken

A **class** in `Root.Township`, the global namespace.

A player's friend token: hand it to another player and, if both sides report the handover within 2 seconds, the server sends a friend request through the API. Not saved.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`ActionItem`](/mod/game-api/types/global-a-b/actionitem)
- **Nested types** [`FriendshipSyncResult`](/mod/game-api/types/global-e-h/friendrequesttoken-friendshipsyncresult)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FriendRequestToken()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>16 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alreadyfriendseffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" alreadyFriendsEffect"}</code> | Effect played when the players were already friends. |
| <Link id="m-analyticsservice" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> | Analytics service used to log friend requests. |
| <Link id="m-deniedfriendshipeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" deniedFriendshipEffect"}</code> | Effect played when the request did not result in a friendship. |
| <Link id="m-hoverpickup" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/hoverpickup">{"HoverPickup"}</Link>{" hoverPickup"}</code> | Hover component the token returns to when let go. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-maxnamelength" /><code>{"private int maxNameLength"}</code> | Serialized name length limit. Not used in this code. |
| <Link id="m-namerenderers" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{"[] nameRenderers"}</code> | Text renderers that show the owner's name. |
| <Link id="m-newfriendshipeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" newFriendshipEffect"}</code> | Effect played when a new friendship is made. |
| <Link id="m-othertokenid" /><code>{"private int otherTokenId"}</code> | User ID of the other player in the current handover, or -1. |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | The token's pickup. |
| <Link id="m-receivedownertoken" /><code>{"private bool receivedOwnerToken"}</code> | Server: true once the owner's side of the handover has arrived. |
| <Link id="m-releasetimeout" /><code>{"private float releaseTimeout"}</code> | Owner client: time until which a grab by someone else counts as a handover, or -1. |
| <Link id="m-syncfriendshiprequest" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncFriendshipRequest"}</code> | Method sync for handover reports. Note it uses the `syncFriendshipRequestEffect` message type. |
| <Link id="m-syncfriendshiprequesteffect" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncFriendshipRequestEffect"}</code> | Method sync for the result effect. Note it uses the `syncFriendshipRequest` message type. |
| <Link id="m-timelineentry" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" timelineEntry"}</code> | Pending timeout call. |
| <Link id="m-timeouttime" /><code>{"private const float TimeoutTime"}</code> | Handover window in seconds (2). |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the request and effect sync messages. |
| <Link id="m-inject" /><code>{"void Inject("}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> | VContainer injection of the analytics service. |

<details>
<summary>14 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addfriend" /><code>{"private async void AddFriend()"}</code> | Server: checks the API for an existing friendship, sends a friend request if needed, updates both players' friend lists and syncs the result effect. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Stops the pickup saving and hooks its filter, grab and release events; clients also update the name on owner change. |
| <Link id="m-callfriendshipevent" /><code>{"private void CallFriendshipEvent("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" friend, "}<Link to="/mod/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{" friendship)"}</code> | Adds the other player to a player's `FriendshipManager` from the API's friendship info. |
| <Link id="m-filter" /><code>{"private void Filter("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | Lets the local player grab the token only if they own it or the owner is holding it. |
| <Link id="m-grabbed" /><code>{"private void Grabbed("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | When a non-owner takes it, both the taker's client and the owner's client (if released in the last 2 seconds) send the handover to the server. |
| <Link id="m-hover" /><code>{"private void Hover("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | On release, puts the token back on its hover point; for the owner, starts the 2 second handover window. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Cancels the pending timeout. |
| <Link id="m-runeffects" /><code>{"private void RunEffects("}<Link to="/mod/game-api/types/global-e-h/friendrequesttoken-friendshipsyncresult">{"FriendRequestToken.FriendshipSyncResult"}</Link>{" friendshipSyncResult)"}</code> | Client: plays the new friend, already friends or denied effect at the token. |
| <Link id="m-syncfriendrequestforplayer" /><code>{"private void SyncFriendRequestForPlayer(int friendID)"}</code> | Server: handles the owner's report; adds the friend if the other side already reported, else remembers it. |
| <Link id="m-syncfriendrequestfortokenowner" /><code>{"private void SyncFriendRequestForTokenOwner("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Server: handles the taker's report; adds the friend if the owner already reported, else remembers the taker. |
| <Link id="m-syncfriendshiprequest-2" /><code>{"private void SyncFriendshipRequest("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int friendID)"}</code> | Server: reads a handover report, starts the timeout on the first one and routes it by sender. |
| <Link id="m-syncfriendshiprequesteffect-2" /><code>{"private void SyncFriendshipRequestEffect("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int friendshipResultIndex)"}</code> | Client: reads the result, plays its effect and marks the player as a friend on success. |
| <Link id="m-timeoutfade" /><code>{"private void TimeoutFade()"}</code> | Server: clears a half-finished handover after 2 seconds and fades the token out. |
| <Link id="m-updatename" /><code>{"private void UpdateName("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" owner)"}</code> | Client: writes the owner's username on the name renderers and adds them to materialize. |

</details>
