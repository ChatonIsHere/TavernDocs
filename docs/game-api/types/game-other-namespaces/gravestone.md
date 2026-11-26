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

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Gravestone()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-downedplayer" /><code>{"private "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" downedPlayer"}</code> | Backing field for `DownedPlayer`. |
| <Link id="m-gravemodel" /><code>{"private GameObject graveModel"}</code> | Grave model hidden from the downed player themselves. |
| <Link id="m-revivalbeacon" /><code>{"private GameObject revivalBeacon"}</code> | Revival beacon object hidden from the downed player themselves. |
| <Link id="m-syncdownedplayeridentifier" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncDownedPlayerIdentifier"}</code> | Method sync (SyncA) that sends the downed player's identifier. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-downedplayer-2" /><code><Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" DownedPlayer { get; }"}</code> | The player this grave belongs to. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-assigndownedplayertograve" /><code>{"void AssignDownedPlayerToGrave("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Server: sets the downed player and syncs their identifier to clients. |
| <Link id="m-ondisconnected" /><code>{"override void OnDisconnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Destroys the grave when its downed player disconnects. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Sets up the method sync for the downed player's identifier. |
| <Link id="m-syncdownedplayeridentifier-2" /><code>{"private void SyncDownedPlayerIdentifier("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int downedPlayerIdentifier)"}</code> | Sync handler: on remote clients, looks up the downed player and hides the grave if it is the local player's. |
| <Link id="m-trydisablegravevisualsonclient" /><code>{"private void TryDisableGraveVisualsOnClient()"}</code> | Client: hides the grave model and revival beacon when the grave belongs to the local player. |

</details>

## Used in

Members of other types that take, return or hold a `Gravestone`:

[`DownedState.gravestone`](/game-api/types/alta-player/downedstate#m-gravestone).
