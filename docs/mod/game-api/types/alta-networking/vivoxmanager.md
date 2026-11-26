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

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`SingletonBehaviour<VivoxManager>`](/mod/game-api/types/assembly-other/singletonbehaviour-t)
- **Derived types** [`VivoxManager`](/mod/game-api/types/alta-networking/vivoxmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VivoxManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-maxloginretrycount" /><code>{"private const int MaxLoginRetryCount"}</code> | <span className="api-desc">Constant 5. The retry loop uses its own literal instead.</span> |
| <Link id="m-serverchannel" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/vivoxchannel">{"VivoxChannel"}</Link>{" serverChannel"}</code> | <span className="api-desc">The Vivox channel for the current server, or null.</span> |
| <Link id="m-voice" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/vivoxvoice">{"VivoxVoice"}</Link>{" voice"}</code> | <span className="api-desc">The active Vivox voice object from the joined channel.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-client" /><code><Link to="/mod/game-api/types/alta-networking/vivoxclient">{"VivoxClient"}</Link>{" Client { get; private set; }"}</code> | <span className="api-desc">The Vivox client. Null on headless servers and after termination.</span> |
| <Link id="m-managerstate" /><code>{"LoginState ManagerState { get; private set; }"}</code> | <span className="api-desc">Login state of the manager: logged out, logging in or logged in.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-clientcreated" /><code>{"static event Action<"}<Link to="/mod/game-api/types/alta-networking/vivoxclient">{"VivoxClient"}</Link>{"> ClientCreated"}</code> | <span className="api-desc">Raised once the Vivox client is created in `Awake`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loginvivoxclient" /><code>{"async Task LoginVivoxClient()"}</code> | <span className="api-desc">Logs in to Vivox with the Alta user ID and name, retrying up to 4 times with a growing delay. Skips if already logged in or logging in.</span> |
| <Link id="m-onaltaaccountlogin" /><code>{"void OnAltaAccountLogin()"}</code> | <span className="api-desc">Alta login handler; starts the Vivox login.</span> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">On clients, hooks game mode and Alta login events, creates the `VivoxClient` and raises `ClientCreated`. On headless servers it disables itself.</span> |

<details className="api-private">
<summary>18 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-closevivoxclient" /><code>{"private void CloseVivoxClient()"}</code> | <span className="api-desc">Deactivates the voice and leaves the server channel. Does not log out.</span> |
| <Link id="m-onaltaaccountlogout" /><code>{"private void OnAltaAccountLogout()"}</code> | <span className="api-desc">Logs out of Vivox and stops listening for the local player.</span> |
| <Link id="m-onapplicationquit" /><code>{"private void OnApplicationQuit()"}</code> | <span className="api-desc">Leaves the channel and terminates the client.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Leaves the channel and terminates the client.</span> |
| <Link id="m-ongamemodechanged" /><code>{"private void OnGameModeChanged()"}</code> | <span className="api-desc">When the game mode is cleared, logs out of Vivox and logs back in.</span> |
| <Link id="m-ongamereload" /><code>{"private void OnGameReload()"}</code> | <span className="api-desc">Closes the voice channel when the game reloads.</span> |
| <Link id="m-onlocalplayerset" /><code>{"private void OnLocalPlayerSet("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Sets up voice for the new local player.</span> |
| <Link id="m-onplayercontrollerdestroyed" /><code>{"private void OnPlayerControllerDestroyed("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Deactivates the voice when the player's controller is destroyed.</span> |
| <Link id="m-onplayercontrollerset" /><code>{"private void OnPlayerControllerSet("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> | <span className="api-desc">Activates voice on the controller's head, except for the customization controller.</span> |
| <Link id="m-onplayerdestroyedbyscene" /><code>{"private void OnPlayerDestroyedByScene("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Closes the voice channel when the local player is destroyed.</span> |
| <Link id="m-onplayerjoinedserver" /><code>{"private void OnPlayerJoinedServer("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" newPlayer)"}</code> | <span className="api-desc">Once 2 or more players are on the server, unhooks itself and sets up voice for the local player. Not hooked anywhere in this class.</span> |
| <Link id="m-onvivoxclientlogin" /><code>{"private void OnVivoxClientLogin()"}</code> | <span className="api-desc">After Vivox login, listens for the local player and sets up voice if one already exists.</span> |
| <Link id="m-setupchannelforserver" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/vivoxchannel">{"VivoxChannel"}</Link>{" SetupChannelForServer()"}</code> | <span className="api-desc">Leaves any current channel and makes a voice-only positional channel named after the joined server.</span> |
| <Link id="m-setupplayer" /><code>{"private async void SetupPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Joins the server channel for the player and hooks player destroy and game reload.</span> |
| <Link id="m-setvoice" /><code>{"private void SetVoice("}<Link to="/mod/game-api/types/alta-networking/vivoxvoice">{"VivoxVoice"}</Link>{" voice)"}</code> | <span className="api-desc">Stores the voice object from the joined channel and activates it on the local player's controller.</span> |
| <Link id="m-terminatechannel" /><code>{"private void TerminateChannel()"}</code> | <span className="api-desc">Leaves the server channel if one is joined.</span> |
| <Link id="m-terminateclient" /><code>{"private void TerminateClient()"}</code> | <span className="api-desc">Terminates the Vivox client and clears `Client`.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Ticks the Vivox client each frame.</span> |

</details>
