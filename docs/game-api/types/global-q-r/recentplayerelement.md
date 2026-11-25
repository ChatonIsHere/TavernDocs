---
title: "RecentPlayerElement"
description: "class RecentPlayerElement in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RecentPlayerElement

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** [`ListElementWithButtonAndExtraText`](/game-api/types/alta-menus/listelementwithbuttonandextratext)
- **Nested types** [`NameplateMeshReference`](/game-api/types/global-q-r/recentplayerelement-nameplatemeshreference)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RecentPlayerElement()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-defaultcolor" /><code>{"private Color defaultColor"}</code> |  |
| <Link id="m-friendcolor" /><code>{"private Color friendColor"}</code> |  |
| <Link id="m-friendshipstatussubscriber" /><code>{"private "}<Link to="/game-api/types/global-c-d/componenteventsubscriber">{"ComponentEventSubscriber"}</Link>{" friendshipStatusSubscriber"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-meshreferences" /><code>{"private "}<Link to="/game-api/types/global-q-r/recentplayerelement-nameplatemeshreference">{"RecentPlayerElement.NameplateMeshReference"}</Link>{"[] meshReferences"}</code> |  |
| <Link id="m-notification" /><code>{"private GameObject notification"}</code> |  |
| <Link id="m-offlinecolor" /><code>{"private Color offlineColor"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-interactioninfo" /><code><Link to="/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{" InteractionInfo { get; private set; }"}</code> |  |
| <Link id="m-id" /><code>{"private int Id { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> |  |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{" recentPlayerInteractionInfo)"}</code> |  |
| <Link id="m-friendshipsubscriber" /><code>{"private Action FriendshipSubscriber(Action handler)"}</code> |  |
| <Link id="m-friendshipunsubscriber" /><code>{"private void FriendshipUnsubscriber(Action handler)"}</code> |  |
| <Link id="m-getnameplatecolor" /><code>{"private Color GetNameplateColor(bool isOnline, bool isFriend)"}</code> |  |
| <Link id="m-init" /><code>{"private void Init()"}</code> |  |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |  |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |  |
| <Link id="m-updateview" /><code>{"private void UpdateView()"}</code> |  |

## Used in

Members of other types that take, return or hold a `RecentPlayerElement`:

[`RecentPlayersPage.ClearElement`](/game-api/types/alta-menus/recentplayerspage#m-clearelement), [`RecentPlayersPage.playerListElements`](/game-api/types/alta-menus/recentplayerspage#m-playerlistelements), [`RecentPlayersPage.SetupElement`](/game-api/types/alta-menus/recentplayerspage#m-setupelement), [`RecentPlayerActionPage.recentPlayerElements`](/game-api/types/global-q-r/recentplayeractionpage#m-recentplayerelements).
