---
title: "Gravestone"
description: "Grave entity left where a player went down."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Gravestone

A **class** in `Root.Township`, `ATT.PlayerStates`.

Grave entity left where a player went down. Server assigns the downed player and syncs it; the grave is destroyed when that player disconnects.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Gravestone()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-downedplayer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" downedPlayer"}</code> | <span className="api-desc">Backing field for `DownedPlayer`.</span> |
| <Link id="m-gravemodel" /><code>{"private GameObject graveModel"}</code> | <span className="api-desc">Grave model hidden from the downed player themselves.</span> |
| <Link id="m-revivalbeacon" /><code>{"private GameObject revivalBeacon"}</code> | <span className="api-desc">Revival beacon object hidden from the downed player themselves.</span> |
| <Link id="m-syncdownedplayeridentifier" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncDownedPlayerIdentifier"}</code> | <span className="api-desc">Method sync (SyncA) that sends the downed player's identifier.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-downedplayer-2" /><code><Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" DownedPlayer { get; }"}</code> | <span className="api-desc">The player this grave belongs to.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-assigndownedplayertograve" /><code>{"void AssignDownedPlayerToGrave("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Server: sets the downed player and syncs their identifier to clients.</span> |
| <Link id="m-ondisconnected" /><code>{"override void OnDisconnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Destroys the grave when its downed player disconnects.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Sets up the method sync for the downed player's identifier.</span> |
| <Link id="m-syncdownedplayeridentifier-2" /><code>{"private void SyncDownedPlayerIdentifier("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int downedPlayerIdentifier)"}</code> | <span className="api-desc">Sync handler: on remote clients, looks up the downed player and hides the grave if it is the local player's.</span> |
| <Link id="m-trydisablegravevisualsonclient" /><code>{"private void TryDisableGraveVisualsOnClient()"}</code> | <span className="api-desc">Client: hides the grave model and revival beacon when the grave belongs to the local player.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Gravestone`:

<div className="api-used-in">

[`DownedState.gravestone`](/mod/game-api/types/alta-player/downedstate#m-gravestone).

</div>
