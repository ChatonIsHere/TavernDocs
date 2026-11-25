---
title: "DiscordController"
description: "class DiscordController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DiscordController

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DiscordController()"}</code> |

## Fields

<details>
<summary>14 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-activity" /><code>{"private Activity activity"}</code> |
| <Link id="m-activitymanager" /><code>{"private ActivityManager activityManager"}</code> |
| <Link id="m-applicationid" /><code>{"private string applicationId"}</code> |
| <Link id="m-chunk" /><code>{"private "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk"}</code> |
| <Link id="m-controller" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controller"}</code> |
| <Link id="m-discord" /><code>{"private Discord discord"}</code> |
| <Link id="m-isactivitychanged" /><code>{"private bool isActivityChanged"}</code> |
| <Link id="m-isfirstwarning" /><code>{"private bool isFirstWarning"}</code> |
| <Link id="m-largeimage" /><code>{"private "}<Link to="/game-api/types/global-c-d/discordlarge">{"DiscordLarge"}</Link>{" largeImage"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-oldstate" /><code>{"private "}<Link to="/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" oldState"}</code> |
| <Link id="m-smallimage" /><code>{"private "}<Link to="/game-api/types/global-c-d/discordsmall">{"DiscordSmall"}</Link>{" smallImage"}</code> |
| <Link id="m-statemanager" /><code>{"private "}<Link to="/game-api/types/alta-player/playerstatemanager">{"PlayerStateManager"}</Link>{" stateManager"}</code> |
| <Link id="m-steamid" /><code>{"private string steamId"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-details" /><code>{"string Details { get; set; }"}</code> |
| <Link id="m-instance" /><code><Link to="/game-api/types/global-c-d/discordcontroller">{"DiscordController"}</Link>{" Instance { get; private set; }"}</code> |
| <Link id="m-joinsecret" /><code>{"string JoinSecret { get; set; }"}</code> |
| <Link id="m-largeimage-2" /><code><Link to="/game-api/types/global-c-d/discordlarge">{"DiscordLarge"}</Link>{" LargeImage { get; set; }"}</code> |
| <Link id="m-largeimagehover" /><code>{"string LargeImageHover { get; set; }"}</code> |
| <Link id="m-server" /><code>{"string Server { get; set; }"}</code> |
| <Link id="m-smallimage-2" /><code><Link to="/game-api/types/global-c-d/discordsmall">{"DiscordSmall"}</Link>{" SmallImage { get; set; }"}</code> |
| <Link id="m-smallimagehover" /><code>{"string SmallImageHover { get; set; }"}</code> |
| <Link id="m-state" /><code>{"string State { get; set; }"}</code> |

## Methods

<details>
<summary>15 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-activityinvite" /><code>{"private void ActivityInvite(ActivityActionType type, ref User user, ref Activity activity)"}</code> |
| <Link id="m-activityjoin" /><code>{"private async void ActivityJoin(string secret)"}</code> |
| <Link id="m-activityjoinrequest" /><code>{"private void ActivityJoinRequest(ref User user)"}</code> |
| <Link id="m-activityspectate" /><code>{"private void ActivitySpectate(string secret)"}</code> |
| <Link id="m-initialize" /><code>{"private void Initialize()"}</code> |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> |
| <Link id="m-log" /><code>{"private void Log(string log)"}</code> |
| <Link id="m-logcallback" /><code>{"private void LogCallback(LogLevel level, string message)"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-playerunset" /><code>{"private void PlayerUnset("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload = false)"}</code> |
| <Link id="m-resultcallback" /><code>{"private void ResultCallback(Result result)"}</code> |
| <Link id="m-setplayer" /><code>{"private void SetPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |
| <Link id="m-setstate" /><code>{"private void SetState(bool isForced = false)"}</code> |
| <Link id="m-start" /><code>{"private void Start()"}</code> |
| <Link id="m-statechanged" /><code>{"private void StateChanged("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" playerState)"}</code> |

</details>
