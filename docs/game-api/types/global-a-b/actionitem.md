---
title: "ActionItem"
description: "Base for an item that belongs to one player and fades in and out with a materialize effect (the friend request token, the gymnasium teleport tablet)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActionItem

A **class** in `Root.Township`, no namespace.

Base for an item that belongs to one player and fades in and out with a materialize effect (the friend request token, the gymnasium teleport tablet). The server sets the owner and syncs it.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`GymnasiumTeleportTablet`](/game-api/types/game-other-namespaces/gymnasiumteleporttablet), [`FriendRequestToken`](/game-api/types/global-e-h/friendrequesttoken), [`SocialTablet`](/game-api/types/global-s/socialtablet)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActionItem()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fadeduration" /><code>{"private float fadeDuration"}</code> | Seconds a fade takes. On fade out the server destroys the entity after this long. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Class logger, used for owner updates. |
| <Link id="m-materializer" /><code>{"private "}<Link to="/game-api/types/global-q-r/renderermaterializer">{"RendererMaterializer"}</Link>{" materializer"}</code> | Backing field for `Materializer`, which runs the materialize and dematerialize effect. |
| <Link id="m-owner" /><code>{"private int owner"}</code> | Backing field for `Owner`, the owning player's id. |
| <Link id="m-rendererstomaterialize" /><code>{"private "}<Link to="/game-api/types/global-q-r/renderergroup">{"RendererGroup"}</Link>{" renderersToMaterialize"}</code> | Backing field for `RenderersToMaterialize`. |
| <Link id="m-synceffect" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncEffect"}</code> | Method sync for fade requests, sent by the server to chunks. |
| <Link id="m-syncowner" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncOwner"}</code> | Method sync for the owner, sent to chunks on setup and to each player that connects. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-islocalplayer" /><code>{"bool IsLocalPlayer { get; private set; }"}</code> | True if the owner is the local player. |
| <Link id="m-materializer-2" /><code><Link to="/game-api/types/global-q-r/renderermaterializer">{"RendererMaterializer"}</Link>{" Materializer { get; }"}</code> | The materializer that plays the fade. |
| <Link id="m-owner-2" /><code>{"int Owner { get; }"}</code> | User id of the owning player. |
| <Link id="m-rendererstomaterialize-2" /><code><Link to="/game-api/types/global-q-r/renderergroup">{"RendererGroup"}</Link>{" RenderersToMaterialize { get; }"}</code> | The renderers the fade applies to. |
| <Link id="m-hasreceivedownermessage" /><code>{"protected bool HasReceivedOwnerMessage { get; private set; }"}</code> | True once a client has been told the owner. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-ownerupdated" /><code>{"event Action<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> OwnerUpdated"}</code> | Raised when the owner is set or received. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fade" /><code>{"virtual void Fade(bool isFadingIn)"}</code> | Fades in or out. Server: syncs it, and destroys the entity after fading out. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the owner and fade messages and the materializer targets. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the owner to a joining player. |
| <Link id="m-setupowner" /><code>{"virtual void SetupOwner("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Sets the owner and syncs it to the chunk. |
| <Link id="m-finishfadein" /><code>{"protected virtual void FinishFadeIn()"}</code> | Hook called when fading in finishes. Empty in the base class. |
| <Link id="m-startfade" /><code>{"protected virtual void StartFade(bool isFadingIn)"}</code> | Hook called when a fade starts. Empty in the base class. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-synceffect-2" /><code>{"private void SyncEffect("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isFadingIn)"}</code> | Syncs a fade in or out. Clients that receive it run `Fade` locally. |
| <Link id="m-syncowner-2" /><code>{"private void SyncOwner("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Syncs the owner's player id. A remote client then sets `IsLocalPlayer`, marks the message received and raises `OwnerUpdated`. |

</details>

## Used in

Members of other types that take, return or hold a `ActionItem`:

[`ActionItemHandler.Item`](/game-api/types/alta-player/actionitemhandler#m-item), [`ActionItemHandler.SetupSpawnedActionItem`](/game-api/types/alta-player/actionitemhandler#m-setupspawnedactionitem).
