---
title: "ServerSettingsSync"
description: "Syncs server settings between the server and the in-game settings menu."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerSettingsSync

A **class** in `Root.Township`, `ATT.Character.QuickAccessMenu`.

Syncs server settings between the server and the in-game settings menu. Singleton `Instance` on a networked entity; clients read and send settings, the server applies them.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerSettingsSync()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/game-other-namespaces/serversettingssync">{"ServerSettingsSync"}</Link>{" Instance"}</code> | The current settings sync, set in `Initialize` and cleared on destroy. |

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-requestsettings" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" requestSettings"}</code> | Sync for a client's settings request. |
| <Link id="m-serversettings" /><code>{"private "}<Link to="/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{" serverSettings"}</code> | Client: cached copy of the server's settings. |
| <Link id="m-settingssynctask" /><code>{"private TaskCompletionSource<"}<Link to="/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{"> settingsSyncTask"}</code> | Client: the pending settings request, completed when the server's settings arrive. |
| <Link id="m-syncavailability" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncAvailability"}</code> | Sync for `IsMenuAvailable`. |
| <Link id="m-syncsettings" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<"}<Link to="/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{"> syncSettings"}</code> | Sync that carries full server settings either way. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ismenuavailable" /><code>{"bool IsMenuAvailable { get; private set; }"}</code> | Whether the server has in-game settings turned on. Synced to each player on connect and on change. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-close" /><code>{"void Close()"}</code> | Client: forgets the cached settings so the next request fetches them again. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets `Instance`, creates the syncs and, on the server, reads and watches whether in-game settings are on. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the menu availability to the new player. |
| <Link id="m-requestsettings-3" /><code>{"async Task<"}<Link to="/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{"> RequestSettings()"}</code> | Returns the settings: the live config on the server, else the cache or a fresh request. The sync handler overload is empty in this build. |
| <Link id="m-setsettings" /><code>{"void SetSettings("}<Link to="/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{" settings)"}</code> | Applies new settings on the server, or sends them to the server from a client. |

<details>
<summary>13 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clientreadsettingsfromserver" /><code>{"private void ClientReadSettingsFromServer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Client: reads settings from the stream and completes the pending request. |
| <Link id="m-deserializeserversettingsfromstream" /><code>{"private static "}<Link to="/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{" DeserializeServerSettingsFromStream("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads a `SerializableServerSettings` from the stream and converts it to `ServerSettings`. |
| <Link id="m-isserversyncpermitted" /><code>{"private async Task<bool> IsServerSyncPermitted("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Server: whether a player may change settings. Always true in this build. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Clears `Instance` if it's this one. |
| <Link id="m-readserversettings" /><code>{"private void ReadServerSettings("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Passes received settings to the server or client reader. |
| <Link id="m-requestserversettingsfromserver" /><code>{"private async Task<"}<Link to="/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{"> RequestServerSettingsFromServer()"}</code> | Client: sends a request and waits for the server's settings, sharing one pending request. |
| <Link id="m-requestsettings-2" /><code>{"private async void RequestSettings("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Returns the settings: the live config on the server, else the cache or a fresh request. The sync handler overload is empty in this build. |
| <Link id="m-saveserversettingsfromclient" /><code>{"private async void SaveServerSettingsFromClient("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{" settings)"}</code> | Server: if permitted, logs the change and applies the client's settings to the server config. |
| <Link id="m-serverreadsettingsfromclient" /><code>{"private void ServerReadSettingsFromClient("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Server: reads settings sent by a client and saves them. |
| <Link id="m-syncavailability-2" /><code>{"private void SyncAvailability("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes `IsMenuAvailable`. |
| <Link id="m-syncsettings-2" /><code>{"private void SyncSettings("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{" settings)"}</code> | Writes settings when sending, or reads them on either side. |
| <Link id="m-updatemenusettingsvalue" /><code>{"private void UpdateMenuSettingsValue("}<Link to="/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{" serverSettings)"}</code> | Server: when the in-game settings flag changes, updates `IsMenuAvailable` and tells clients. |
| <Link id="m-writeserversettings" /><code>{"private void WriteServerSettings("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{" settings)"}</code> | Writes settings to the stream; on error cancels the pending request. |

</details>
