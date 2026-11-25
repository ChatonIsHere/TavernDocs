---
title: "ActionItem"
description: "class ActionItem in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActionItem

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`GymnasiumTeleportTablet`](/game-api/types/game-other-namespaces/gymnasiumteleporttablet), [`FriendRequestToken`](/game-api/types/global-e-h/friendrequesttoken), [`SocialTablet`](/game-api/types/global-s/socialtablet)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActionItem()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-fadeduration" /><code>{"private float fadeDuration"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-materializer" /><code>{"private "}<Link to="/game-api/types/global-q-r/renderermaterializer">{"RendererMaterializer"}</Link>{" materializer"}</code> |  |
| <Link id="m-owner" /><code>{"private int owner"}</code> |  |
| <Link id="m-rendererstomaterialize" /><code>{"private "}<Link to="/game-api/types/global-q-r/renderergroup">{"RendererGroup"}</Link>{" renderersToMaterialize"}</code> |  |
| <Link id="m-synceffect" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncEffect"}</code> |  |
| <Link id="m-syncowner" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncOwner"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-islocalplayer" /><code>{"bool IsLocalPlayer { get; private set; }"}</code> |  |
| <Link id="m-materializer-2" /><code><Link to="/game-api/types/global-q-r/renderermaterializer">{"RendererMaterializer"}</Link>{" Materializer { get; }"}</code> |  |
| <Link id="m-owner-2" /><code>{"int Owner { get; }"}</code> |  |
| <Link id="m-rendererstomaterialize-2" /><code><Link to="/game-api/types/global-q-r/renderergroup">{"RendererGroup"}</Link>{" RenderersToMaterialize { get; }"}</code> |  |
| <Link id="m-hasreceivedownermessage" /><code>{"protected bool HasReceivedOwnerMessage { get; private set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-ownerupdated" /><code>{"event Action<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> OwnerUpdated"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fade" /><code>{"virtual void Fade(bool isFadingIn)"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-setupowner" /><code>{"virtual void SetupOwner("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-finishfadein" /><code>{"protected virtual void FinishFadeIn()"}</code> |  |
| <Link id="m-startfade" /><code>{"protected virtual void StartFade(bool isFadingIn)"}</code> |  |
| <Link id="m-synceffect-2" /><code>{"private void SyncEffect("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isFadingIn)"}</code> |  |
| <Link id="m-syncowner-2" /><code>{"private void SyncOwner("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ActionItem`:

[`ActionItemHandler.Item`](/game-api/types/alta-player/actionitemhandler#m-item), [`ActionItemHandler.SetupSpawnedActionItem`](/game-api/types/alta-player/actionitemhandler#m-setupspawnedactionitem).
