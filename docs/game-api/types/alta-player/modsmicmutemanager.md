---
title: "ModsMicMuteManager"
description: "class ModsMicMuteManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModsMicMuteManager

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ModsMicMuteManager()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/alta-player/modsmicmutemanager">{"ModsMicMuteManager"}</Link>{" instance"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-mutedistancesquared" /><code>{"private float muteDistanceSquared"}</code> |  |
| <Link id="m-synconconnected" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncOnConnected"}</code> |  |
| <Link id="m-syncrequest" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/alta-player/modmuteargument">{"ModMuteArgument"}</Link>{"> syncRequest"}</code> |  |
| <Link id="m-updatemute" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateMute"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-modsmuting" /><code>{"Dictionary<uint, "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{"> ModsMuting { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-sendrequest" /><code>{"void SendRequest("}<Link to="/game-api/types/alta-player/modmuteargument">{"ModMuteArgument"}</Link>{" argument)"}</code> |  |
| <Link id="m-addentityasmodplayer" /><code>{"private void AddEntityAsModPlayer("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-delaymute" /><code>{"private void DelayMute()"}</code> |  |
| <Link id="m-isplayercontrollermissing" /><code>{"private bool IsPlayerControllerMissing("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-synconconnected-2" /><code>{"private void SyncOnConnected("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncrequest-2" /><code>{"private void SyncRequest("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-player/modmuteargument">{"ModMuteArgument"}</Link>{" argument)"}</code> |  |
| <Link id="m-updatemute-2" /><code>{"private void UpdateMute()"}</code> |  |
