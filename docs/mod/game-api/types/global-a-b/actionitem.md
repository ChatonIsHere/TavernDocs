---
title: "ActionItem"
description: "Base for an item that belongs to one player and fades in and out with a materialize effect (the friend request token, the gymnasium teleport tablet)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActionItem

A **class** in `Root.Township`, the global namespace.

Base for an item that belongs to one player and fades in and out with a materialize effect (the friend request token, the gymnasium teleport tablet). The server sets the owner and syncs it.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`GymnasiumTeleportTablet`](/mod/game-api/types/game-other-namespaces/gymnasiumteleporttablet), [`FriendRequestToken`](/mod/game-api/types/global-e-h/friendrequesttoken), [`SocialTablet`](/mod/game-api/types/global-s/socialtablet)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActionItem()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fadeduration" /><code>{"private float fadeDuration"}</code> | <span className="api-desc">Seconds a fade takes. On fade out the server destroys the entity after this long.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Class logger, used for owner updates.</span> |
| <Link id="m-materializer" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/renderermaterializer">{"RendererMaterializer"}</Link>{" materializer"}</code> | <span className="api-desc">Backing field for `Materializer`, which runs the materialize and dematerialize effect.</span> |
| <Link id="m-owner" /><code>{"private int owner"}</code> | <span className="api-desc">Backing field for `Owner`, the owning player's id.</span> |
| <Link id="m-rendererstomaterialize" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/renderergroup">{"RendererGroup"}</Link>{" renderersToMaterialize"}</code> | <span className="api-desc">Backing field for `RenderersToMaterialize`.</span> |
| <Link id="m-synceffect" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncEffect"}</code> | <span className="api-desc">Method sync for fade requests, sent by the server to chunks.</span> |
| <Link id="m-syncowner" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncOwner"}</code> | <span className="api-desc">Method sync for the owner, sent to chunks on setup and to each player that connects.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-islocalplayer" /><code>{"bool IsLocalPlayer { get; private set; }"}</code> | <span className="api-desc">True if the owner is the local player.</span> |
| <Link id="m-materializer-2" /><code><Link to="/mod/game-api/types/global-q-r/renderermaterializer">{"RendererMaterializer"}</Link>{" Materializer { get; }"}</code> | <span className="api-desc">The materializer that plays the fade.</span> |
| <Link id="m-owner-2" /><code>{"int Owner { get; }"}</code> | <span className="api-desc">User id of the owning player.</span> |
| <Link id="m-rendererstomaterialize-2" /><code><Link to="/mod/game-api/types/global-q-r/renderergroup">{"RendererGroup"}</Link>{" RenderersToMaterialize { get; }"}</code> | <span className="api-desc">The renderers the fade applies to.</span> |
| <Link id="m-hasreceivedownermessage" /><code>{"protected bool HasReceivedOwnerMessage { get; private set; }"}</code> | <span className="api-desc">True once a client has been told the owner.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-ownerupdated" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> OwnerUpdated"}</code> | <span className="api-desc">Raised when the owner is set or received.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fade" /><code>{"virtual void Fade(bool isFadingIn)"}</code> | <span className="api-desc">Fades in or out. Server: syncs it, and destroys the entity after fading out.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the owner and fade messages and the materializer targets.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the owner to a joining player.</span> |
| <Link id="m-setupowner" /><code>{"virtual void SetupOwner("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Sets the owner and syncs it to the chunk.</span> |
| <Link id="m-finishfadein" /><code>{"protected virtual void FinishFadeIn()"}</code> | <span className="api-desc">Hook called when fading in finishes. Empty in the base class.</span> |
| <Link id="m-startfade" /><code>{"protected virtual void StartFade(bool isFadingIn)"}</code> | <span className="api-desc">Hook called when a fade starts. Empty in the base class.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-synceffect-2" /><code>{"private void SyncEffect("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isFadingIn)"}</code> | <span className="api-desc">Syncs a fade in or out. Clients that receive it run `Fade` locally.</span> |
| <Link id="m-syncowner-2" /><code>{"private void SyncOwner("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Syncs the owner's player id. A remote client then sets `IsLocalPlayer`, marks the message received and raises `OwnerUpdated`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ActionItem`:

<div className="api-used-in">

[`ActionItemHandler.Item`](/mod/game-api/types/alta-player/actionitemhandler#m-item), [`ActionItemHandler.SetupSpawnedActionItem`](/mod/game-api/types/alta-player/actionitemhandler#m-setupspawnedactionitem).

</div>
