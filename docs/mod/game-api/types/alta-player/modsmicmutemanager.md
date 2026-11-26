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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ModsMicMuteManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/alta-player/modsmicmutemanager">{"ModsMicMuteManager"}</Link>{" instance"}</code> | <span className="api-desc">The manager in the scene.</span> |

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-mutedistancesquared" /><code>{"private float muteDistanceSquared"}</code> | <span className="api-desc">Squared range of the moderator mute (400, so 20 m).</span> |
| <Link id="m-synconconnected" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncOnConnected"}</code> | <span className="api-desc">Sync that sends the muting moderator list to a joining player.</span> |
| <Link id="m-syncrequest" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/alta-player/modmuteargument">{"ModMuteArgument"}</Link>{"> syncRequest"}</code> | <span className="api-desc">Sync for mute requests.</span> |
| <Link id="m-updatemute" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateMute"}</code> | <span className="api-desc">Handle for the registered mute check.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-modsmuting" /><code>{"Dictionary<uint, "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{"> ModsMuting { get; }"}</code> | <span className="api-desc">Moderators muting now, by entity identifier. On the server the values are null.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the request and on connect syncs.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the muting moderator list to a joining non-moderator player.</span> |
| <Link id="m-sendrequest" /><code>{"void SendRequest("}<Link to="/mod/game-api/types/alta-player/modmuteargument">{"ModMuteArgument"}</Link>{" argument)"}</code> | <span className="api-desc">Sends a moderator's mute on or off request. Called by the mods mic mute quick access action.</span> |

<details className="api-private">
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addentityasmodplayer" /><code>{"private void AddEntityAsModPlayer("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Records a moderator's player entity as muting.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Sets the static `instance`.</span> |
| <Link id="m-delaymute" /><code>{"private void DelayMute()"}</code> | <span className="api-desc">Starts the mute check if moderators are muting and it isn't running.</span> |
| <Link id="m-isplayercontrollermissing" /><code>{"private bool IsPlayerControllerMissing("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> | <span className="api-desc">True if the player controller is null or being destroyed.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Stops the mute check.</span> |
| <Link id="m-synconconnected-2" /><code>{"private void SyncOnConnected("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Message handler for the moderator list sent on join; the client waits for each moderator to spawn, then starts checking.</span> |
| <Link id="m-syncrequest-2" /><code>{"private void SyncRequest("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-player/modmuteargument">{"ModMuteArgument"}</Link>{" argument)"}</code> | <span className="api-desc">Message handler for mute requests. Server accepts only from moderators and relays; non-moderator clients start or stop muting.</span> |
| <Link id="m-updatemute-2" /><code>{"private void UpdateMute()"}</code> | <span className="api-desc">Budgeted update: mutes the local mic if any muting moderator's head is within `muteDistanceSquared`.</span> |

</details>
