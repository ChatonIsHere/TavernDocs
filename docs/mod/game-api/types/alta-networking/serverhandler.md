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

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Nested types** [`BootupStep`](/mod/game-api/types/alta-networking/serverhandler-bootupstep), [`ConnectionStep`](/mod/game-api/types/alta-networking/serverhandler-connectionstep)
- **Documented in** [ServerHandler](/mod/game-api/networking/server-handler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor-2" /><code>{"ServerHandler("}<Link to="/mod/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" socket, "}<Link to="/mod/game-api/types/assembly-api-client/iserveraccess">{"IServerAccess"}</Link>{" serverAccess, bool isRunningLocally)"}</code> | Creates a `ServerHandler` from `socket`, `serverAccess` and `isRunningLocally`. |

<details>
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"private ServerHandler()"}</code> | Creates a `ServerHandler` from `socket`, `serverAccess` and `isRunningLocally`. |

</details>

## Fields

<details>
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bootupsteps" /><code>{"private Queue<"}<Link to="/mod/game-api/types/alta-networking/serverhandler-bootupstep">{"ServerHandler.BootupStep"}</Link>{"> bootupSteps"}</code> | Queue of bootup steps still to run. Null once bootup has finished, so late steps are refused. |
| <Link id="m-connectionsteps" /><code>{"private Queue<"}<Link to="/mod/game-api/types/alta-networking/serverhandler-connectionstep">{"ServerHandler.ConnectionStep"}</Link>{"> connectionSteps"}</code> | Steps every joining connection runs after bootup, added with `AddConnectionStep`. |
| <Link id="m-current" /><code>{"private static "}<Link to="/mod/game-api/types/alta-networking/serverhandler">{"ServerHandler"}</Link>{" current"}</code> | Backing field for `Current`. |
| <Link id="m-heartbeat" /><code>{"private "}<Link to="/mod/game-api/types/global-s/serverheartbeat">{"ServerHeartbeat"}</Link>{" heartbeat"}</code> | Heartbeat sender, only created with `/heartbeat`. |
| <Link id="m-isrunninglocally" /><code>{"private bool isRunningLocally"}</code> | True for a locally hosted server; makes `Initialize` use fixed local ports and look up the public IP. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-platformtargets" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{", "}<Link to="/mod/game-api/types/assembly-other/platformtarget">{"PlatformTarget"}</Link>{"> platformTargets"}</code> | Platform of each connection, stored on join and used when spawning the player. |
| <Link id="m-playerjoinhandler" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/serverplayerconnectionhandlerold">{"ServerPlayerConnectionHandlerOld"}</Link>{" playerJoinHandler"}</code> | Handles connection approval and raises the joined and left callbacks. |
| <Link id="m-playermodes" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{", "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{"> playerModes"}</code> | Player mode of each connection, stored on join and used when spawning the player. |
| <Link id="m-socket" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" socket"}</code> | The server socket that accepts connections. |
| <Link id="m-status" /><code>{"private string status"}</code> | Current bootup status text sent to waiting clients. |
| <Link id="m-webserver" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/webserverthread">{"WebServerThread"}</Link>{" webServer"}</code> | The server's web server thread, started in `Initialize` and disposed when the server stops. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-config" /><code><Link to="/mod/game-api/types/global-s/serverconfiguration">{"ServerConfiguration"}</Link>{" Config { get; private set; }"}</code> | An allow or block list from Alta's hosting. Nothing sets it in this build, so it is null. |
| <Link id="m-connections" /><code>{"int Connections { get; }"}</code> | Open connections on the socket, including ones still joining. |
| <Link id="m-current-2" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/serverhandler">{"ServerHandler"}</Link>{" Current { get; private set; }"}</code> | The running handler, or null. Setting it raises `Initialized`. |
| <Link id="m-currentserverid" /><code>{"static int CurrentServerId { get; }"}</code> | -1 in a local test, else the joined server's identifier. Meant for clients. |
| <Link id="m-isbottingup" /><code>{"bool IsBottingUp { get; private set; }"}</code> | True while bootup steps run. (Spelling is Alta's.) |
| <Link id="m-isdummylocalserver" /><code>{"bool IsDummyLocalServer { get; }"}</code> | True for the stand-in handler the main menu makes so settings have a home. |
| <Link id="m-isrunning" /><code>{"bool IsRunning { get; private set; }"}</code> | True from the end of startup until stopping. Also keeps the API ping loop going. |
| <Link id="m-isusingconfig" /><code>{"bool IsUsingConfig { get; }"}</code> | Whether `Config` is set. Always false in this build. |
| <Link id="m-playerlimit" /><code>{"int PlayerLimit { get; }"}</code> | The settings' player limit. On a simple (Quest) server anything outside 1 to 8 becomes 8. |
| <Link id="m-saveutility" /><code><Link to="/mod/game-api/types/alta-utilities/serversaveutility">{"ServerSaveUtility"}</Link>{" SaveUtility { get; private set; }"}</code> | Save folders and player save loading for this server. |
| <Link id="m-serverapiaccess" /><code><Link to="/mod/game-api/types/assembly-api-client/iserveraccess">{"IServerAccess"}</Link>{" ServerApiAccess { get; private set; }"}</code> | The API access object for this server. |
| <Link id="m-serverconfig" /><code><Link to="/mod/game-api/types/alta-utilities/settingsfileaccess-tsettings">{"SettingsFileAccess"}</Link>{"<"}<Link to="/mod/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{"> ServerConfig { get; private set; }"}</code> | The game's server settings, from `ServerConfiguration` in the server folder (or by server id with `/db_settings`). |
| <Link id="m-serverinfo" /><code><Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" ServerInfo { get; }"}</code> | The server's info from `ServerApiAccess`. |
| <Link id="m-serverlocks" /><code><Link to="/mod/game-api/types/alta-networking/serverlockcollection">{"ServerLockCollection"}</Link>{" ServerLocks { get; }"}</code> | Join locks; while any are held, joins are refused. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-bootupfinished" /><code>{"event Action BootupFinished"}</code> | Raised when every bootup step is done. |
| <Link id="m-initialized" /><code>{"static event Action<"}<Link to="/mod/game-api/types/alta-networking/serverhandler">{"ServerHandler"}</Link>{"> Initialized"}</code> | Raised whenever `Current` changes, including to null. Static. |
| <Link id="m-playerjoined" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{"> PlayerJoined"}</code> | Raised once a player has been spawned with their save loaded. |
| <Link id="m-playerleft" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{"> PlayerLeft"}</code> | Raised after a leaving player has been saved and destroyed. |

<details>
<summary>1 private and internal event</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bootupprogressed" /><code>{"private event Action BootupProgressed"}</code> | Private event raised each time the bootup status message changes; waiting connections use it to get status updates. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addbootupstep" /><code>{"void AddBootupStep("}<Link to="/mod/game-api/types/alta-networking/serverhandler-bootupstep">{"ServerHandler.BootupStep"}</Link>{" step)"}</code> | Queues an async step to run before the server opens. Logs an error if bootup has already finished. |
| <Link id="m-addconnectionstep" /><code>{"void AddConnectionStep("}<Link to="/mod/game-api/types/alta-networking/serverhandler-connectionstep">{"ServerHandler.ConnectionStep"}</Link>{" step)"}</code> | Queues an async step every joining player goes through before they're let in. Logs an error if players are already on. |
| <Link id="m-bootup" /><code>{"async Task Bootup()"}</code> | Runs the queued bootup steps in order, then raises `BootupFinished`. |
| <Link id="m-startdummylocalserver" /><code>{"static void StartDummyLocalServer()"}</code> | Creates the dummy handler used outside a real server. |
| <Link id="m-stopasync" /><code>{"async Task StopAsync("}<Link to="/mod/game-api/types/assembly-api-models/shutdownreason">{"ShutdownReason"}</Link>{" reason)"}</code> | Stops the server: saves the world (unless wiping), closes the socket and deregisters. Clears `Current` unless wiping. |
| <Link id="m-stopdummylocalserver" /><code>{"static void StopDummyLocalServer()"}</code> | Clears `Current` if it is the dummy handler. |
| <Link id="m-stopformigration" /><code>{"async Task StopForMigration("}<Link to="/mod/game-api/types/assembly-api-models/shutdownreason">{"ShutdownReason"}</Link>{" reason)"}</code> | Stops pinging and deregisters from the API without closing the socket. |
| <Link id="m-stoppinging" /><code>{"void StopPinging()"}</code> | Stops the API ping loop by clearing `IsRunning`. |
| <Link id="m-wipecache" /><code>{"void WipeCache()"}</code> | Deletes the server's cache folder. |
| <Link id="m-wipeserver" /><code>{"async Task WipeServer(bool isSettingOffline)"}</code> | Stops pinging and wipes the server's save, optionally setting it offline. |
| <Link id="m-onserverstopped" /><code>{"protected async Task OnServerStopped("}<Link to="/mod/game-api/types/assembly-api-models/shutdownreason">{"ShutdownReason"}</Link>{" reason)"}</code> | Shuts the web server and heartbeat, raises the server ended event and deregisters from the API. |

<details>
<summary>14 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkfornoresponsefromconnectionasync" /><code>{"private async void CheckForNoResponseFromConnectionAsync("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | Disconnects a connection that hasn't sent 'ready to spawn' within 2 minutes, unless it disconnects first. |
| <Link id="m-connectioncreated" /><code>{"private void ConnectionCreated("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | Runs for each new socket connection: hands it to the join handler and registers the core message handlers (ping, diagnostics, entity, cache and pause). |
| <Link id="m-handleconnectionschange" /><code>{"private async Task HandleConnectionsChange("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | Sends the list of connected users to the server API as the online players; logs failures. |
| <Link id="m-initialize" /><code>{"private async Task Initialize(Action<string> progress)"}</code> | First bootup step: starts the server with the API (ports and public IP when local), the web server, optional heartbeat and wipe, then server pings. |
| <Link id="m-pingserver" /><code>{"private async void PingServer()"}</code> | Pings the server API every 15 seconds while running; after 10 failures in a row (or `MAX_PING_FAIL_COUNT`) it shuts the server down. |
| <Link id="m-removeplayer" /><code>{"private void RemovePlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Saves a leaving player (when the scene has save files), destroys their objects, raises `PlayerLeft` and forgets their mode and platform. |
| <Link id="m-sendplayerownership" /><code>{"private void SendPlayerOwnership("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Marks the new player entity as local to its owner. |
| <Link id="m-setbootupmessage" /><code>{"private void SetBootupMessage(string message)"}</code> | Logs and stores the bootup status, then raises `BootupProgressed`. |
| <Link id="m-spawnplayertoclient" /><code>{"private async void SpawnPlayerToClient("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Handler for 'ready to spawn': waits for the scene, loads the save, spawns and initializes the player, syncs entities and raises `PlayerJoined`. |
| <Link id="m-syncstatus" /><code>{"private void SyncStatus("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes the current bootup status string into a `ServerStatus` message. |
| <Link id="m-userjoined" /><code>{"private async void UserJoined("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" playerMode, "}<Link to="/mod/game-api/types/assembly-other/platformtarget">{"PlatformTarget"}</Link>{" platformTarget)"}</code> | Called when a connection is approved: stores its player mode and platform, waits for 'ready to spawn' and updates the online list. |
| <Link id="m-userleft" /><code>{"private async void UserLeft("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | Called when a connection drops: removes its player on the next frame and updates the online list. |
| <Link id="m-userprerequisites" /><code>{"private async Task<bool> UserPrerequisites("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | Holds a joining connection until bootup finishes (sending status updates), then runs every connection step. Returns false if a step throws. |
| <Link id="m-wipeserverasync" /><code>{"private async void WipeServerAsync()"}</code> | Runs a wipe once the scene has started, when the server was launched with `/wipe`. |

</details>

## Used in

Members of other types that take, return or hold a `ServerHandler`:

[`ServerPlayerConnectionHandlerOld.server`](/mod/game-api/types/alta-networking/serverplayerconnectionhandlerold#m-server), [`ServerPlayerConnectionHandlerOld.ServerPlayerConnectionHandlerOld`](/mod/game-api/types/alta-networking/serverplayerconnectionhandlerold#m-ctor).
