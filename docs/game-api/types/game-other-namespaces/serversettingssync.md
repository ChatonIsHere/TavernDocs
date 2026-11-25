---
title: "ServerSettingsSync"
description: "class ServerSettingsSync in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerSettingsSync

A **class** in `Root.Township`, `ATT.Character.QuickAccessMenu`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerSettingsSync()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/game-other-namespaces/serversettingssync">{"ServerSettingsSync"}</Link>{" Instance"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-requestsettings" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" requestSettings"}</code> |  |
| <Link id="m-serversettings" /><code>{"private "}<Link to="/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{" serverSettings"}</code> |  |
| <Link id="m-settingssynctask" /><code>{"private TaskCompletionSource<"}<Link to="/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{"> settingsSyncTask"}</code> |  |
| <Link id="m-syncavailability" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncAvailability"}</code> |  |
| <Link id="m-syncsettings" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<"}<Link to="/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{"> syncSettings"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ismenuavailable" /><code>{"bool IsMenuAvailable { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-close" /><code>{"void Close()"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-requestsettings-3" /><code>{"async Task<"}<Link to="/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{"> RequestSettings()"}</code> |  |
| <Link id="m-setsettings" /><code>{"void SetSettings("}<Link to="/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{" settings)"}</code> |  |
| <Link id="m-clientreadsettingsfromserver" /><code>{"private void ClientReadSettingsFromServer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-deserializeserversettingsfromstream" /><code>{"private static "}<Link to="/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{" DeserializeServerSettingsFromStream("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-isserversyncpermitted" /><code>{"private async Task<bool> IsServerSyncPermitted("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-readserversettings" /><code>{"private void ReadServerSettings("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-requestserversettingsfromserver" /><code>{"private async Task<"}<Link to="/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{"> RequestServerSettingsFromServer()"}</code> |  |
| <Link id="m-requestsettings-2" /><code>{"private async void RequestSettings("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-saveserversettingsfromclient" /><code>{"private async void SaveServerSettingsFromClient("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{" settings)"}</code> |  |
| <Link id="m-serverreadsettingsfromclient" /><code>{"private void ServerReadSettingsFromClient("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncavailability-2" /><code>{"private void SyncAvailability("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncsettings-2" /><code>{"private void SyncSettings("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{" settings)"}</code> |  |
| <Link id="m-updatemenusettingsvalue" /><code>{"private void UpdateMenuSettingsValue("}<Link to="/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{" serverSettings)"}</code> |  |
| <Link id="m-writeserversettings" /><code>{"private void WriteServerSettings("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{" settings)"}</code> |  |
