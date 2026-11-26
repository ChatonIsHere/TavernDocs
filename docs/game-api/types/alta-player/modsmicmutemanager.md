---
title: "ModsMicMuteManager"
description: "Network behaviour that lets moderators (developer status or above) mute the mics of normal players near them."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModsMicMuteManager

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

Network behaviour that lets moderators (developer status or above) mute the mics of normal players near them. The server relays requests; clients mute themselves. Reached through the static `instance`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ModsMicMuteManager()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/alta-player/modsmicmutemanager">{"ModsMicMuteManager"}</Link>{" instance"}</code> | The manager in the scene. |

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-mutedistancesquared" /><code>{"private float muteDistanceSquared"}</code> | Squared range of the moderator mute (400, so 20 m). |
| <Link id="m-synconconnected" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncOnConnected"}</code> | Sync that sends the muting moderator list to a joining player. |
| <Link id="m-syncrequest" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/alta-player/modmuteargument">{"ModMuteArgument"}</Link>{"> syncRequest"}</code> | Sync for mute requests. |
| <Link id="m-updatemute" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateMute"}</code> | Handle for the registered mute check. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-modsmuting" /><code>{"Dictionary<uint, "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{"> ModsMuting { get; }"}</code> | Moderators muting now, by entity identifier. On the server the values are null. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the request and on connect syncs. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the muting moderator list to a joining non-moderator player. |
| <Link id="m-sendrequest" /><code>{"void SendRequest("}<Link to="/game-api/types/alta-player/modmuteargument">{"ModMuteArgument"}</Link>{" argument)"}</code> | Sends a moderator's mute on or off request. Called by the mods mic mute quick access action. |

<details>
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addentityasmodplayer" /><code>{"private void AddEntityAsModPlayer("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Records a moderator's player entity as muting. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Sets the static `instance`. |
| <Link id="m-delaymute" /><code>{"private void DelayMute()"}</code> | Starts the mute check if moderators are muting and it isn't running. |
| <Link id="m-isplayercontrollermissing" /><code>{"private bool IsPlayerControllerMissing("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> | True if the player controller is null or being destroyed. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Stops the mute check. |
| <Link id="m-synconconnected-2" /><code>{"private void SyncOnConnected("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Message handler for the moderator list sent on join; the client waits for each moderator to spawn, then starts checking. |
| <Link id="m-syncrequest-2" /><code>{"private void SyncRequest("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-player/modmuteargument">{"ModMuteArgument"}</Link>{" argument)"}</code> | Message handler for mute requests. Server accepts only from moderators and relays; non-moderator clients start or stop muting. |
| <Link id="m-updatemute-2" /><code>{"private void UpdateMute()"}</code> | Budgeted update: mutes the local mic if any muting moderator's head is within `muteDistanceSquared`. |

</details>
