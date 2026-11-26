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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerSettingsSync()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/game-other-namespaces/serversettingssync">{"ServerSettingsSync"}</Link>{" Instance"}</code> | <span className="api-desc">The current settings sync, set in `Initialize` and cleared on destroy.</span> |

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-requestsettings" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" requestSettings"}</code> | <span className="api-desc">Sync for a client's settings request.</span> |
| <Link id="m-serversettings" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{" serverSettings"}</code> | <span className="api-desc">Client: cached copy of the server's settings.</span> |
| <Link id="m-settingssynctask" /><code>{"private TaskCompletionSource<"}<Link to="/mod/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{"> settingsSyncTask"}</code> | <span className="api-desc">Client: the pending settings request, completed when the server's settings arrive.</span> |
| <Link id="m-syncavailability" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncAvailability"}</code> | <span className="api-desc">Sync for `IsMenuAvailable`.</span> |
| <Link id="m-syncsettings" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<"}<Link to="/mod/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{"> syncSettings"}</code> | <span className="api-desc">Sync that carries full server settings either way.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ismenuavailable" /><code>{"bool IsMenuAvailable { get; private set; }"}</code> | <span className="api-desc">Whether the server has in-game settings turned on. Synced to each player on connect and on change.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-close" /><code>{"void Close()"}</code> | <span className="api-desc">Client: forgets the cached settings so the next request fetches them again.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets `Instance`, creates the syncs and, on the server, reads and watches whether in-game settings are on.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the menu availability to the new player.</span> |
| <Link id="m-requestsettings-3" /><code>{"async Task<"}<Link to="/mod/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{"> RequestSettings()"}</code> | <span className="api-desc">Returns the settings: the live config on the server, else the cache or a fresh request. The sync handler overload is empty in this build.</span> |
| <Link id="m-setsettings" /><code>{"void SetSettings("}<Link to="/mod/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{" settings)"}</code> | <span className="api-desc">Applies new settings on the server, or sends them to the server from a client.</span> |

<details className="api-private">
<summary>13 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clientreadsettingsfromserver" /><code>{"private void ClientReadSettingsFromServer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Client: reads settings from the stream and completes the pending request.</span> |
| <Link id="m-deserializeserversettingsfromstream" /><code>{"private static "}<Link to="/mod/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{" DeserializeServerSettingsFromStream("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Reads a `SerializableServerSettings` from the stream and converts it to `ServerSettings`.</span> |
| <Link id="m-isserversyncpermitted" /><code>{"private async Task<bool> IsServerSyncPermitted("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Server: whether a player may change settings. Always true in this build.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Clears `Instance` if it's this one.</span> |
| <Link id="m-readserversettings" /><code>{"private void ReadServerSettings("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Passes received settings to the server or client reader.</span> |
| <Link id="m-requestserversettingsfromserver" /><code>{"private async Task<"}<Link to="/mod/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{"> RequestServerSettingsFromServer()"}</code> | <span className="api-desc">Client: sends a request and waits for the server's settings, sharing one pending request.</span> |
| <Link id="m-requestsettings-2" /><code>{"private async void RequestSettings("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Returns the settings: the live config on the server, else the cache or a fresh request. The sync handler overload is empty in this build.</span> |
| <Link id="m-saveserversettingsfromclient" /><code>{"private async void SaveServerSettingsFromClient("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{" settings)"}</code> | <span className="api-desc">Server: if permitted, logs the change and applies the client's settings to the server config.</span> |
| <Link id="m-serverreadsettingsfromclient" /><code>{"private void ServerReadSettingsFromClient("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Server: reads settings sent by a client and saves them.</span> |
| <Link id="m-syncavailability-2" /><code>{"private void SyncAvailability("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Reads or writes `IsMenuAvailable`.</span> |
| <Link id="m-syncsettings-2" /><code>{"private void SyncSettings("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{" settings)"}</code> | <span className="api-desc">Writes settings when sending, or reads them on either side.</span> |
| <Link id="m-updatemenusettingsvalue" /><code>{"private void UpdateMenuSettingsValue("}<Link to="/mod/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{" serverSettings)"}</code> | <span className="api-desc">Server: when the in-game settings flag changes, updates `IsMenuAvailable` and tells clients.</span> |
| <Link id="m-writeserversettings" /><code>{"private void WriteServerSettings("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{" settings)"}</code> | <span className="api-desc">Writes settings to the stream; on error cancels the pending request.</span> |

</details>
