---
title: "VivoxManager"
description: "Client singleton that logs in to Vivox voice chat with the player's Alta account and joins a positional voice channel for the current server."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VivoxManager

A **class** in `Root.Township`, `Alta.Voice`.

Client singleton that logs in to Vivox voice chat with the player's Alta account and joins a positional voice channel for the current server. Disabled on headless servers.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`SingletonBehaviour<VivoxManager>`](/game-api/types/assembly-other/singletonbehaviour-t)
- **Derived types** [`VivoxManager`](/game-api/types/alta-networking/vivoxmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VivoxManager()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-maxloginretrycount" /><code>{"private const int MaxLoginRetryCount"}</code> | Constant 5. The retry loop uses its own literal instead. |
| <Link id="m-serverchannel" /><code>{"private "}<Link to="/game-api/types/alta-networking/vivoxchannel">{"VivoxChannel"}</Link>{" serverChannel"}</code> | The Vivox channel for the current server, or null. |
| <Link id="m-voice" /><code>{"private "}<Link to="/game-api/types/alta-networking/vivoxvoice">{"VivoxVoice"}</Link>{" voice"}</code> | The active Vivox voice object from the joined channel. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-client" /><code><Link to="/game-api/types/alta-networking/vivoxclient">{"VivoxClient"}</Link>{" Client { get; private set; }"}</code> | The Vivox client. Null on headless servers and after termination. |
| <Link id="m-managerstate" /><code>{"LoginState ManagerState { get; private set; }"}</code> | Login state of the manager: logged out, logging in or logged in. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-clientcreated" /><code>{"static event Action<"}<Link to="/game-api/types/alta-networking/vivoxclient">{"VivoxClient"}</Link>{"> ClientCreated"}</code> | Raised once the Vivox client is created in `Awake`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loginvivoxclient" /><code>{"async Task LoginVivoxClient()"}</code> | Logs in to Vivox with the Alta user ID and name, retrying up to 4 times with a growing delay. Skips if already logged in or logging in. |
| <Link id="m-onaltaaccountlogin" /><code>{"void OnAltaAccountLogin()"}</code> | Alta login handler; starts the Vivox login. |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | On clients, hooks game mode and Alta login events, creates the `VivoxClient` and raises `ClientCreated`. On headless servers it disables itself. |

<details>
<summary>18 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-closevivoxclient" /><code>{"private void CloseVivoxClient()"}</code> | Deactivates the voice and leaves the server channel. Does not log out. |
| <Link id="m-onaltaaccountlogout" /><code>{"private void OnAltaAccountLogout()"}</code> | Logs out of Vivox and stops listening for the local player. |
| <Link id="m-onapplicationquit" /><code>{"private void OnApplicationQuit()"}</code> | Leaves the channel and terminates the client. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Leaves the channel and terminates the client. |
| <Link id="m-ongamemodechanged" /><code>{"private void OnGameModeChanged()"}</code> | When the game mode is cleared, logs out of Vivox and logs back in. |
| <Link id="m-ongamereload" /><code>{"private void OnGameReload()"}</code> | Closes the voice channel when the game reloads. |
| <Link id="m-onlocalplayerset" /><code>{"private void OnLocalPlayerSet("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Sets up voice for the new local player. |
| <Link id="m-onplayercontrollerdestroyed" /><code>{"private void OnPlayerControllerDestroyed("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Deactivates the voice when the player's controller is destroyed. |
| <Link id="m-onplayercontrollerset" /><code>{"private void OnPlayerControllerSet("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> | Activates voice on the controller's head, except for the customization controller. |
| <Link id="m-onplayerdestroyedbyscene" /><code>{"private void OnPlayerDestroyedByScene("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Closes the voice channel when the local player is destroyed. |
| <Link id="m-onplayerjoinedserver" /><code>{"private void OnPlayerJoinedServer("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" newPlayer)"}</code> | Once 2 or more players are on the server, unhooks itself and sets up voice for the local player. Not hooked anywhere in this class. |
| <Link id="m-onvivoxclientlogin" /><code>{"private void OnVivoxClientLogin()"}</code> | After Vivox login, listens for the local player and sets up voice if one already exists. |
| <Link id="m-setupchannelforserver" /><code>{"private "}<Link to="/game-api/types/alta-networking/vivoxchannel">{"VivoxChannel"}</Link>{" SetupChannelForServer()"}</code> | Leaves any current channel and makes a voice-only positional channel named after the joined server. |
| <Link id="m-setupplayer" /><code>{"private async void SetupPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Joins the server channel for the player and hooks player destroy and game reload. |
| <Link id="m-setvoice" /><code>{"private void SetVoice("}<Link to="/game-api/types/alta-networking/vivoxvoice">{"VivoxVoice"}</Link>{" voice)"}</code> | Stores the voice object from the joined channel and activates it on the local player's controller. |
| <Link id="m-terminatechannel" /><code>{"private void TerminateChannel()"}</code> | Leaves the server channel if one is joined. |
| <Link id="m-terminateclient" /><code>{"private void TerminateClient()"}</code> | Terminates the Vivox client and clears `Client`. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Ticks the Vivox client each frame. |

</details>
