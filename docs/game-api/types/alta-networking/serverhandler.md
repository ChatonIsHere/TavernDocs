---
title: "ServerHandler"
description: "The running server's handler: owns the socket and join handler, runs bootup and per-player connection steps, spawns players and saves them when they leave."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerHandler

A **class** in `Root.Township`, `Alta.Networking.Servers`.

The running server's handler: owns the socket and join handler, runs bootup and per-player connection steps, spawns players and saves them when they leave. Server only; get it from `ServerHandler.Current`, which in the main menu is a dummy (`IsDummyLocalServer`).

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Nested types** [`BootupStep`](/game-api/types/alta-networking/serverhandler-bootupstep), [`ConnectionStep`](/game-api/types/alta-networking/serverhandler-connectionstep)
- **Documented in** [ServerHandler](/game-api/networking/server-handler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor-2" /><code>{"ServerHandler("}<Link to="/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" socket, "}<Link to="/game-api/types/assembly-api-client/iserveraccess">{"IServerAccess"}</Link>{" serverAccess, bool isRunningLocally)"}</code> |  |
| <Link id="m-ctor" /><code>{"private ServerHandler()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-bootupsteps" /><code>{"private Queue<"}<Link to="/game-api/types/alta-networking/serverhandler-bootupstep">{"ServerHandler.BootupStep"}</Link>{"> bootupSteps"}</code> |  |
| <Link id="m-connectionsteps" /><code>{"private Queue<"}<Link to="/game-api/types/alta-networking/serverhandler-connectionstep">{"ServerHandler.ConnectionStep"}</Link>{"> connectionSteps"}</code> |  |
| <Link id="m-current" /><code>{"private static "}<Link to="/game-api/types/alta-networking/serverhandler">{"ServerHandler"}</Link>{" current"}</code> |  |
| <Link id="m-heartbeat" /><code>{"private "}<Link to="/game-api/types/global-s/serverheartbeat">{"ServerHeartbeat"}</Link>{" heartbeat"}</code> |  |
| <Link id="m-isrunninglocally" /><code>{"private bool isRunningLocally"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-platformtargets" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{", "}<Link to="/game-api/types/assembly-other/platformtarget">{"PlatformTarget"}</Link>{"> platformTargets"}</code> |  |
| <Link id="m-playerjoinhandler" /><code>{"private "}<Link to="/game-api/types/alta-networking/serverplayerconnectionhandlerold">{"ServerPlayerConnectionHandlerOld"}</Link>{" playerJoinHandler"}</code> |  |
| <Link id="m-playermodes" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{", "}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{"> playerModes"}</code> |  |
| <Link id="m-socket" /><code>{"private "}<Link to="/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" socket"}</code> |  |
| <Link id="m-status" /><code>{"private string status"}</code> |  |
| <Link id="m-webserver" /><code>{"private "}<Link to="/game-api/types/alta-networking/webserverthread">{"WebServerThread"}</Link>{" webServer"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-config" /><code><Link to="/game-api/types/global-s/serverconfiguration">{"ServerConfiguration"}</Link>{" Config { get; private set; }"}</code> | An allow or block list from Alta's hosting. Nothing sets it in this build, so it is null. |
| <Link id="m-connections" /><code>{"int Connections { get; }"}</code> | Open connections on the socket, including ones still joining. |
| <Link id="m-current-2" /><code>{"static "}<Link to="/game-api/types/alta-networking/serverhandler">{"ServerHandler"}</Link>{" Current { get; private set; }"}</code> | The running handler, or null. Setting it raises `Initialized`. |
| <Link id="m-currentserverid" /><code>{"static int CurrentServerId { get; }"}</code> | -1 in a local test, else the joined server's identifier. Meant for clients. |
| <Link id="m-isbottingup" /><code>{"bool IsBottingUp { get; private set; }"}</code> | True while bootup steps run. (Spelling is Alta's.) |
| <Link id="m-isdummylocalserver" /><code>{"bool IsDummyLocalServer { get; }"}</code> | True for the stand-in handler the main menu makes so settings have a home. |
| <Link id="m-isrunning" /><code>{"bool IsRunning { get; private set; }"}</code> | True from the end of startup until stopping. Also keeps the API ping loop going. |
| <Link id="m-isusingconfig" /><code>{"bool IsUsingConfig { get; }"}</code> | Whether `Config` is set. Always false in this build. |
| <Link id="m-playerlimit" /><code>{"int PlayerLimit { get; }"}</code> | The settings' player limit. On a simple (Quest) server anything outside 1 to 8 becomes 8. |
| <Link id="m-saveutility" /><code><Link to="/game-api/types/alta-utilities/serversaveutility">{"ServerSaveUtility"}</Link>{" SaveUtility { get; private set; }"}</code> | Save folders and player save loading for this server. |
| <Link id="m-serverapiaccess" /><code><Link to="/game-api/types/assembly-api-client/iserveraccess">{"IServerAccess"}</Link>{" ServerApiAccess { get; private set; }"}</code> | The API access object for this server. |
| <Link id="m-serverconfig" /><code><Link to="/game-api/types/alta-utilities/settingsfileaccess-tsettings">{"SettingsFileAccess"}</Link>{"<"}<Link to="/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{"> ServerConfig { get; private set; }"}</code> | The game's server settings, from `ServerConfiguration` in the server folder (or by server id with `/db_settings`). |
| <Link id="m-serverinfo" /><code><Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" ServerInfo { get; }"}</code> | The server's info from `ServerApiAccess`. |
| <Link id="m-serverlocks" /><code><Link to="/game-api/types/alta-networking/serverlockcollection">{"ServerLockCollection"}</Link>{" ServerLocks { get; }"}</code> | Join locks; while any are held, joins are refused. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-bootupfinished" /><code>{"event Action BootupFinished"}</code> | Raised when every bootup step is done. |
| <Link id="m-initialized" /><code>{"static event Action<"}<Link to="/game-api/types/alta-networking/serverhandler">{"ServerHandler"}</Link>{"> Initialized"}</code> | Raised whenever `Current` changes, including to null. Static. |
| <Link id="m-playerjoined" /><code>{"event Action<"}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{"> PlayerJoined"}</code> | Raised once a player has been spawned with their save loaded. |
| <Link id="m-playerleft" /><code>{"event Action<"}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{"> PlayerLeft"}</code> | Raised after a leaving player has been saved and destroyed. |
| <Link id="m-bootupprogressed" /><code>{"private event Action BootupProgressed"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addbootupstep" /><code>{"void AddBootupStep("}<Link to="/game-api/types/alta-networking/serverhandler-bootupstep">{"ServerHandler.BootupStep"}</Link>{" step)"}</code> | Queues an async step to run before the server opens. Logs an error if bootup has already finished. |
| <Link id="m-addconnectionstep" /><code>{"void AddConnectionStep("}<Link to="/game-api/types/alta-networking/serverhandler-connectionstep">{"ServerHandler.ConnectionStep"}</Link>{" step)"}</code> | Queues an async step every joining player goes through before they're let in. Logs an error if players are already on. |
| <Link id="m-bootup" /><code>{"async Task Bootup()"}</code> | Runs the queued bootup steps in order, then raises `BootupFinished`. |
| <Link id="m-startdummylocalserver" /><code>{"static void StartDummyLocalServer()"}</code> | Creates the dummy handler used outside a real server. |
| <Link id="m-stopasync" /><code>{"async Task StopAsync("}<Link to="/game-api/types/assembly-api-models/shutdownreason">{"ShutdownReason"}</Link>{" reason)"}</code> | Stops the server: saves the world (unless wiping), closes the socket and deregisters. Clears `Current` unless wiping. |
| <Link id="m-stopdummylocalserver" /><code>{"static void StopDummyLocalServer()"}</code> | Clears `Current` if it is the dummy handler. |
| <Link id="m-stopformigration" /><code>{"async Task StopForMigration("}<Link to="/game-api/types/assembly-api-models/shutdownreason">{"ShutdownReason"}</Link>{" reason)"}</code> | Stops pinging and deregisters from the API without closing the socket. |
| <Link id="m-stoppinging" /><code>{"void StopPinging()"}</code> | Stops the API ping loop by clearing `IsRunning`. |
| <Link id="m-wipecache" /><code>{"void WipeCache()"}</code> | Deletes the server's cache folder. |
| <Link id="m-wipeserver" /><code>{"async Task WipeServer(bool isSettingOffline)"}</code> | Stops pinging and wipes the server's save, optionally setting it offline. |
| <Link id="m-checkfornoresponsefromconnectionasync" /><code>{"private async void CheckForNoResponseFromConnectionAsync("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> |  |
| <Link id="m-connectioncreated" /><code>{"private void ConnectionCreated("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> |  |
| <Link id="m-handleconnectionschange" /><code>{"private async Task HandleConnectionsChange("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> |  |
| <Link id="m-initialize" /><code>{"private async Task Initialize(Action<string> progress)"}</code> |  |
| <Link id="m-onserverstopped" /><code>{"protected async Task OnServerStopped("}<Link to="/game-api/types/assembly-api-models/shutdownreason">{"ShutdownReason"}</Link>{" reason)"}</code> | Shuts the web server and heartbeat, raises the server ended event and deregisters from the API. |
| <Link id="m-pingserver" /><code>{"private async void PingServer()"}</code> |  |
| <Link id="m-removeplayer" /><code>{"private void RemovePlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-sendplayerownership" /><code>{"private void SendPlayerOwnership("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-setbootupmessage" /><code>{"private void SetBootupMessage(string message)"}</code> |  |
| <Link id="m-spawnplayertoclient" /><code>{"private async void SpawnPlayerToClient("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncstatus" /><code>{"private void SyncStatus("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-userjoined" /><code>{"private async void UserJoined("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" playerMode, "}<Link to="/game-api/types/assembly-other/platformtarget">{"PlatformTarget"}</Link>{" platformTarget)"}</code> |  |
| <Link id="m-userleft" /><code>{"private async void UserLeft("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> |  |
| <Link id="m-userprerequisites" /><code>{"private async Task<bool> UserPrerequisites("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> |  |
| <Link id="m-wipeserverasync" /><code>{"private async void WipeServerAsync()"}</code> |  |

## Used in

Members of other types that take, return or hold a `ServerHandler`:

[`ServerPlayerConnectionHandlerOld.server`](/game-api/types/alta-networking/serverplayerconnectionhandlerold#m-server), [`ServerPlayerConnectionHandlerOld.ServerPlayerConnectionHandlerOld`](/game-api/types/alta-networking/serverplayerconnectionhandlerold#m-ctor).
