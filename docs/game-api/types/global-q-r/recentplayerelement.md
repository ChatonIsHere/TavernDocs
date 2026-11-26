---
title: "RecentPlayerElement"
description: "Client UI: one row in the recent players list."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RecentPlayerElement

A **class** in `Root.Township`, no namespace.

Client UI: one row in the recent players list. Shows the name, a rough status text and a nameplate coloured by online and friend status, and a marker for incoming friend requests.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** [`ListElementWithButtonAndExtraText`](/game-api/types/alta-menus/listelementwithbuttonandextratext)
- **Nested types** [`NameplateMeshReference`](/game-api/types/global-q-r/recentplayerelement-nameplatemeshreference)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RecentPlayerElement()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-defaultcolor" /><code>{"private Color defaultColor"}</code> | Nameplate colour for an online non-friend. |
| <Link id="m-friendcolor" /><code>{"private Color friendColor"}</code> | Nameplate colour for a friend. |
| <Link id="m-friendshipstatussubscriber" /><code>{"private "}<Link to="/game-api/types/global-c-d/componenteventsubscriber">{"ComponentEventSubscriber"}</Link>{" friendshipStatusSubscriber"}</code> | Subscription to friendship changes, disposed when the row is cleared or disabled. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-meshreferences" /><code>{"private "}<Link to="/game-api/types/global-q-r/recentplayerelement-nameplatemeshreference">{"RecentPlayerElement.NameplateMeshReference"}</Link>{"[] meshReferences"}</code> | Nameplate meshes that get the status colour. |
| <Link id="m-notification" /><code>{"private GameObject notification"}</code> | Marker shown when this non-friend has sent a friend request. |
| <Link id="m-offlinecolor" /><code>{"private Color offlineColor"}</code> | Nameplate colour for a player not on this server. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-interactioninfo" /><code><Link to="/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{" InteractionInfo { get; private set; }"}</code> | The recent player record shown in this row. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-id" /><code>{"private int Id { get; }"}</code> | The shown player's user id. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Empties the row and stops listening for friendship changes. |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{" recentPlayerInteractionInfo)"}</code> | Shows the given recent player. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-friendshipsubscriber" /><code>{"private Action FriendshipSubscriber(Action handler)"}</code> | Subscribes to local friendship status changes. |
| <Link id="m-friendshipunsubscriber" /><code>{"private void FriendshipUnsubscriber(Action handler)"}</code> | Unsubscribes from local friendship status changes. |
| <Link id="m-getnameplatecolor" /><code>{"private Color GetNameplateColor(bool isOnline, bool isFriend)"}</code> | Friend colour for friends, else offline or default colour depending on whether they're on this server. |
| <Link id="m-init" /><code>{"private void Init()"}</code> | Starts listening for friendship changes and refreshes the row. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Stops listening for friendship changes. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Calls `Init`. |
| <Link id="m-updateview" /><code>{"private void UpdateView()"}</code> | Redraws the name, status text, nameplate colour and friend request marker. |

</details>

## Used in

Members of other types that take, return or hold a `RecentPlayerElement`:

[`RecentPlayersPage.ClearElement`](/game-api/types/alta-menus/recentplayerspage#m-clearelement), [`RecentPlayersPage.playerListElements`](/game-api/types/alta-menus/recentplayerspage#m-playerlistelements), [`RecentPlayersPage.SetupElement`](/game-api/types/alta-menus/recentplayerspage#m-setupelement), [`RecentPlayerActionPage.recentPlayerElements`](/game-api/types/global-q-r/recentplayeractionpage#m-recentplayerelements).
