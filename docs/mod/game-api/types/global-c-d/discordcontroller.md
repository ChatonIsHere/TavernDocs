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
| <Link id="m-ctor" /><code>{"DiscordController()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activity" /><code>{"private Activity activity"}</code> | The Discord activity being built. |
| <Link id="m-activitymanager" /><code>{"private ActivityManager activityManager"}</code> | Discord SDK activity manager. |
| <Link id="m-applicationid" /><code>{"private string applicationId"}</code> | Discord application ID. |
| <Link id="m-chunk" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk"}</code> | Last chunk the player was in. |
| <Link id="m-controller" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controller"}</code> | Last local player controller seen. |
| <Link id="m-discord" /><code>{"private Discord discord"}</code> | The Discord SDK instance. |
| <Link id="m-isactivitychanged" /><code>{"private bool isActivityChanged"}</code> | Set when a presence field changes, so `LateUpdate` sends it. |
| <Link id="m-isfirstwarning" /><code>{"private bool isFirstWarning"}</code> | Lets the first not-running warning through once. |
| <Link id="m-largeimage" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/discordlarge">{"DiscordLarge"}</Link>{" largeImage"}</code> | Backing field for `LargeImage`. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger. |
| <Link id="m-oldstate" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" oldState"}</code> | Last player state seen. |
| <Link id="m-smallimage" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/discordsmall">{"DiscordSmall"}</Link>{" smallImage"}</code> | Backing field for `SmallImage`. |
| <Link id="m-statemanager" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/playerstatemanager">{"PlayerStateManager"}</Link>{" stateManager"}</code> | The local player's state manager. |
| <Link id="m-steamid" /><code>{"private string steamId"}</code> | Steam app ID; unused here. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-details" /><code>{"string Details { get; set; }"}</code> | Second presence line, such as In Combat! or Exploring the Caves. |
| <Link id="m-instance" /><code><Link to="/mod/game-api/types/global-c-d/discordcontroller">{"DiscordController"}</Link>{" Instance { get; private set; }"}</code> | Meant as the singleton, but it is an instance property, so the duplicate check in `Start` never fires. |
| <Link id="m-joinsecret" /><code>{"string JoinSecret { get; set; }"}</code> | Join secret sent to Discord; the joined server's ID. |
| <Link id="m-largeimage-2" /><code><Link to="/mod/game-api/types/global-c-d/discordlarge">{"DiscordLarge"}</Link>{" LargeImage { get; set; }"}</code> | Large presence image (splash, town, forest or caves). |
| <Link id="m-largeimagehover" /><code>{"string LargeImageHover { get; set; }"}</code> | Hover text for the large image. |
| <Link id="m-server" /><code>{"string Server { get; set; }"}</code> | Party ID sent to Discord; the joined server's name. |
| <Link id="m-smallimage-2" /><code><Link to="/mod/game-api/types/global-c-d/discordsmall">{"DiscordSmall"}</Link>{" SmallImage { get; set; }"}</code> | Small presence image. |
| <Link id="m-smallimagehover" /><code>{"string SmallImageHover { get; set; }"}</code> | Hover text for the small image. |
| <Link id="m-state" /><code>{"string State { get; set; }"}</code> | First presence line, usually the server name. |

## Methods

<details>
<summary>15 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activityinvite" /><code>{"private void ActivityInvite(ActivityActionType type, ref User user, ref Activity activity)"}</code> | Empty handler for Discord invites. |
| <Link id="m-activityjoin" /><code>{"private async void ActivityJoin(string secret)"}</code> | Joins the server whose ID is in the Discord join secret. |
| <Link id="m-activityjoinrequest" /><code>{"private void ActivityJoinRequest(ref User user)"}</code> | Accepts every Discord join request. |
| <Link id="m-activityspectate" /><code>{"private void ActivitySpectate(string secret)"}</code> | Empty handler for spectate. |
| <Link id="m-initialize" /><code>{"private void Initialize()"}</code> | Applies the current player or menu state and listens for the local player being set. |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | Runs Discord callbacks, disables itself if Discord isn't installed, and pushes the activity when it changed. |
| <Link id="m-log" /><code>{"private void Log(string log)"}</code> | Logs a message with a DISCORD tag. |
| <Link id="m-logcallback" /><code>{"private void LogCallback(LogLevel level, string message)"}</code> | Forwards Discord SDK log lines to NLog at the matching level. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Sets the state to Quitting and disposes the Discord SDK. |
| <Link id="m-playerunset" /><code>{"private void PlayerUnset("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload = false)"}</code> | Resets presence to In Menu when the local player goes away. |
| <Link id="m-resultcallback" /><code>{"private void ResultCallback(Result result)"}</code> | Logs any Discord result that isn't OK. |
| <Link id="m-setplayer" /><code>{"private void SetPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Hooks the player's state changes and fills in the server name and join secret. |
| <Link id="m-setstate" /><code>{"private void SetState(bool isForced = false)"}</code> | Rebuilds the presence text and image when the player, state or chunk changed (also checked on every move). |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Starts the Discord SDK, registers the launch command and hooks activity events; disables itself on failure. |
| <Link id="m-statechanged" /><code>{"private void StateChanged("}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" playerState)"}</code> | Calls `SetState` when the player's state changes. |

</details>
