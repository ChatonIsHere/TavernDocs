---
title: "VivoxManager"
description: "class VivoxManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VivoxManager

A **class** in `Root.Township`, `Alta.Voice`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`SingletonBehaviour<VivoxManager>`](/game-api/types/assembly-other/singletonbehaviour-t)
- **Derived types** [`VivoxManager`](/game-api/types/alta-networking/vivoxmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VivoxManager()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-maxloginretrycount" /><code>{"private const int MaxLoginRetryCount"}</code> |  |
| <Link id="m-serverchannel" /><code>{"private "}<Link to="/game-api/types/alta-networking/vivoxchannel">{"VivoxChannel"}</Link>{" serverChannel"}</code> |  |
| <Link id="m-voice" /><code>{"private "}<Link to="/game-api/types/alta-networking/vivoxvoice">{"VivoxVoice"}</Link>{" voice"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-client" /><code><Link to="/game-api/types/alta-networking/vivoxclient">{"VivoxClient"}</Link>{" Client { get; private set; }"}</code> |  |
| <Link id="m-managerstate" /><code>{"LoginState ManagerState { get; private set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-clientcreated" /><code>{"static event Action<"}<Link to="/game-api/types/alta-networking/vivoxclient">{"VivoxClient"}</Link>{"> ClientCreated"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loginvivoxclient" /><code>{"async Task LoginVivoxClient()"}</code> |  |
| <Link id="m-onaltaaccountlogin" /><code>{"void OnAltaAccountLogin()"}</code> |  |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> |  |
| <Link id="m-closevivoxclient" /><code>{"private void CloseVivoxClient()"}</code> |  |
| <Link id="m-onaltaaccountlogout" /><code>{"private void OnAltaAccountLogout()"}</code> |  |
| <Link id="m-onapplicationquit" /><code>{"private void OnApplicationQuit()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-ongamemodechanged" /><code>{"private void OnGameModeChanged()"}</code> |  |
| <Link id="m-ongamereload" /><code>{"private void OnGameReload()"}</code> |  |
| <Link id="m-onlocalplayerset" /><code>{"private void OnLocalPlayerSet("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-onplayercontrollerdestroyed" /><code>{"private void OnPlayerControllerDestroyed("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-onplayercontrollerset" /><code>{"private void OnPlayerControllerSet("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> |  |
| <Link id="m-onplayerdestroyedbyscene" /><code>{"private void OnPlayerDestroyedByScene("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-onplayerjoinedserver" /><code>{"private void OnPlayerJoinedServer("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" newPlayer)"}</code> |  |
| <Link id="m-onvivoxclientlogin" /><code>{"private void OnVivoxClientLogin()"}</code> |  |
| <Link id="m-setupchannelforserver" /><code>{"private "}<Link to="/game-api/types/alta-networking/vivoxchannel">{"VivoxChannel"}</Link>{" SetupChannelForServer()"}</code> |  |
| <Link id="m-setupplayer" /><code>{"private async void SetupPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-setvoice" /><code>{"private void SetVoice("}<Link to="/game-api/types/alta-networking/vivoxvoice">{"VivoxVoice"}</Link>{" voice)"}</code> |  |
| <Link id="m-terminatechannel" /><code>{"private void TerminateChannel()"}</code> |  |
| <Link id="m-terminateclient" /><code>{"private void TerminateClient()"}</code> |  |
| <Link id="m-update" /><code>{"private void Update()"}</code> |  |
