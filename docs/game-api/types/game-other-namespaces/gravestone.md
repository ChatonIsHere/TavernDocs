---
title: "Gravestone"
description: "class Gravestone in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Gravestone

A **class** in `Root.Township`, `ATT.PlayerStates`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Gravestone()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-downedplayer" /><code>{"private "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" downedPlayer"}</code> |
| <Link id="m-gravemodel" /><code>{"private GameObject graveModel"}</code> |
| <Link id="m-revivalbeacon" /><code>{"private GameObject revivalBeacon"}</code> |
| <Link id="m-syncdownedplayeridentifier" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncDownedPlayerIdentifier"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-downedplayer-2" /><code><Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" DownedPlayer { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-assigndownedplayertograve" /><code>{"void AssignDownedPlayerToGrave("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |
| <Link id="m-ondisconnected" /><code>{"override void OnDisconnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-syncdownedplayeridentifier-2" /><code>{"private void SyncDownedPlayerIdentifier("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int downedPlayerIdentifier)"}</code> |
| <Link id="m-trydisablegravevisualsonclient" /><code>{"private void TryDisableGraveVisualsOnClient()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `Gravestone`:

[`DownedState.gravestone`](/game-api/types/alta-player/downedstate#m-gravestone).
