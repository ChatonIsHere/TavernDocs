---
title: "DiscordController"
description: "Client: Discord Rich Presence."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DiscordController

A **class** in `Root.Township`, the global namespace.

Client: Discord Rich Presence. Shows the server, what the player is doing and where (forest, caves, town), and lets Discord friends join the server through the join secret.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DiscordController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activity" /><code>{"private Activity activity"}</code> | <span className="api-desc">The Discord activity being built.</span> |
| <Link id="m-activitymanager" /><code>{"private ActivityManager activityManager"}</code> | <span className="api-desc">Discord SDK activity manager.</span> |
| <Link id="m-applicationid" /><code>{"private string applicationId"}</code> | <span className="api-desc">Discord application ID.</span> |
| <Link id="m-chunk" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk"}</code> | <span className="api-desc">Last chunk the player was in.</span> |
| <Link id="m-controller" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controller"}</code> | <span className="api-desc">Last local player controller seen.</span> |
| <Link id="m-discord" /><code>{"private Discord discord"}</code> | <span className="api-desc">The Discord SDK instance.</span> |
| <Link id="m-isactivitychanged" /><code>{"private bool isActivityChanged"}</code> | <span className="api-desc">Set when a presence field changes, so `LateUpdate` sends it.</span> |
| <Link id="m-isfirstwarning" /><code>{"private bool isFirstWarning"}</code> | <span className="api-desc">Lets the first not-running warning through once.</span> |
| <Link id="m-largeimage" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/discordlarge">{"DiscordLarge"}</Link>{" largeImage"}</code> | <span className="api-desc">Backing field for `LargeImage`.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger.</span> |
| <Link id="m-oldstate" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" oldState"}</code> | <span className="api-desc">Last player state seen.</span> |
| <Link id="m-smallimage" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/discordsmall">{"DiscordSmall"}</Link>{" smallImage"}</code> | <span className="api-desc">Backing field for `SmallImage`.</span> |
| <Link id="m-statemanager" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/playerstatemanager">{"PlayerStateManager"}</Link>{" stateManager"}</code> | <span className="api-desc">The local player's state manager.</span> |
| <Link id="m-steamid" /><code>{"private string steamId"}</code> | <span className="api-desc">Steam app ID; unused here.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-details" /><code>{"string Details { get; set; }"}</code> | <span className="api-desc">Second presence line, such as In Combat! or Exploring the Caves.</span> |
| <Link id="m-instance" /><code><Link to="/mod/game-api/types/global-c-d/discordcontroller">{"DiscordController"}</Link>{" Instance { get; private set; }"}</code> | <span className="api-desc">Meant as the singleton, but it is an instance property, so the duplicate check in `Start` never fires.</span> |
| <Link id="m-joinsecret" /><code>{"string JoinSecret { get; set; }"}</code> | <span className="api-desc">Join secret sent to Discord; the joined server's ID.</span> |
| <Link id="m-largeimage-2" /><code><Link to="/mod/game-api/types/global-c-d/discordlarge">{"DiscordLarge"}</Link>{" LargeImage { get; set; }"}</code> | <span className="api-desc">Large presence image (splash, town, forest or caves).</span> |
| <Link id="m-largeimagehover" /><code>{"string LargeImageHover { get; set; }"}</code> | <span className="api-desc">Hover text for the large image.</span> |
| <Link id="m-server" /><code>{"string Server { get; set; }"}</code> | <span className="api-desc">Party ID sent to Discord; the joined server's name.</span> |
| <Link id="m-smallimage-2" /><code><Link to="/mod/game-api/types/global-c-d/discordsmall">{"DiscordSmall"}</Link>{" SmallImage { get; set; }"}</code> | <span className="api-desc">Small presence image.</span> |
| <Link id="m-smallimagehover" /><code>{"string SmallImageHover { get; set; }"}</code> | <span className="api-desc">Hover text for the small image.</span> |
| <Link id="m-state" /><code>{"string State { get; set; }"}</code> | <span className="api-desc">First presence line, usually the server name.</span> |

## Methods

<details className="api-private">
<summary>15 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activityinvite" /><code>{"private void ActivityInvite(ActivityActionType type, ref User user, ref Activity activity)"}</code> | <span className="api-desc">Empty handler for Discord invites.</span> |
| <Link id="m-activityjoin" /><code>{"private async void ActivityJoin(string secret)"}</code> | <span className="api-desc">Joins the server whose ID is in the Discord join secret.</span> |
| <Link id="m-activityjoinrequest" /><code>{"private void ActivityJoinRequest(ref User user)"}</code> | <span className="api-desc">Accepts every Discord join request.</span> |
| <Link id="m-activityspectate" /><code>{"private void ActivitySpectate(string secret)"}</code> | <span className="api-desc">Empty handler for spectate.</span> |
| <Link id="m-initialize" /><code>{"private void Initialize()"}</code> | <span className="api-desc">Applies the current player or menu state and listens for the local player being set.</span> |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | <span className="api-desc">Runs Discord callbacks, disables itself if Discord isn't installed, and pushes the activity when it changed.</span> |
| <Link id="m-log" /><code>{"private void Log(string log)"}</code> | <span className="api-desc">Logs a message with a DISCORD tag.</span> |
| <Link id="m-logcallback" /><code>{"private void LogCallback(LogLevel level, string message)"}</code> | <span className="api-desc">Forwards Discord SDK log lines to NLog at the matching level.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Sets the state to Quitting and disposes the Discord SDK.</span> |
| <Link id="m-playerunset" /><code>{"private void PlayerUnset("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload = false)"}</code> | <span className="api-desc">Resets presence to In Menu when the local player goes away.</span> |
| <Link id="m-resultcallback" /><code>{"private void ResultCallback(Result result)"}</code> | <span className="api-desc">Logs any Discord result that isn't OK.</span> |
| <Link id="m-setplayer" /><code>{"private void SetPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Hooks the player's state changes and fills in the server name and join secret.</span> |
| <Link id="m-setstate" /><code>{"private void SetState(bool isForced = false)"}</code> | <span className="api-desc">Rebuilds the presence text and image when the player, state or chunk changed (also checked on every move).</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Starts the Discord SDK, registers the launch command and hooks activity events; disables itself on failure.</span> |
| <Link id="m-statechanged" /><code>{"private void StateChanged("}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" playerState)"}</code> | <span className="api-desc">Calls `SetState` when the player's state changes.</span> |

</details>
