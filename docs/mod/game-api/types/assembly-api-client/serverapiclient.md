---
title: "ServerApiClient"
description: "Online client for servers: lists, info, joining, sessions and permissions."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerApiClient

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Online client for servers: lists, info, joining, sessions and permissions. Reached as `ApiAccess.ApiClient.ServerClient`; calls Alta's web API, which no longer answers.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Inherits or implements** [`HighLevelApiClientBase`](/mod/game-api/types/assembly-api-client/highlevelapiclientbase), [`IServerApiClient`](/mod/game-api/types/assembly-api-client/iserverapiclient)

## Constructors

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal ServerApiClient("}<Link to="/mod/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" clientManager)"}</code> | <span className="api-desc">Creates a `ServerApiClient` from `clientManager`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-allocateserverformigration" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/allocationresult">{"AllocationResult"}</Link>{"> AllocateServerForMigration(int serverIdentifier)"}</code> | <span className="api-desc">Asks the API to allocate a host to move a server to.</span> |
| <Link id="m-connectconsole" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/serverjoinresult">{"ServerJoinResult"}</Link>{"> ConnectConsole(int serverIdentifier, bool shouldLaunchServer = true, bool disregardOfflineStatus = false)"}</code> | <span className="api-desc">Asks the API for console connection details for a server.</span> |
| <Link id="m-createefsmigrationrecordforserver" /><code>{"Task CreateEfsMigrationRecordForServer(int serverId)"}</code> | <span className="api-desc">Records a storage (EFS) migration for a server.</span> |
| <Link id="m-createnewserverasync" /><code>{"async Task<"}<Link to="/mod/game-api/types/assembly-api-client/iserveraccess">{"IServerAccess"}</Link>{"> CreateNewServerAsync("}<Link to="/mod/game-api/types/assembly-api-models/gameservercreaterequest">{"GameServerCreateRequest"}</Link>{" createRequest)"}</code> | <span className="api-desc">Creates a server on the API and returns a `ServerAccess` for it.</span> |
| <Link id="m-discoverservers" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> DiscoverServers()"}</code> | <span className="api-desc">Lists servers to discover.</span> |
| <Link id="m-getcontrollableserverasync" /><code>{"async Task<"}<Link to="/mod/game-api/types/assembly-api-client/iserveraccess">{"IServerAccess"}</Link>{"> GetControllableServerAsync(int serverId)"}</code> | <span className="api-desc">Returns a `LocalServerAccess` with no API calls for a negative ID, otherwise a `ServerAccess` for that server.</span> |
| <Link id="m-getcontrollableserversasync" /><code>{"async Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-client/iserveraccess">{"IServerAccess"}</Link>{">> GetControllableServersAsync()"}</code> | <span className="api-desc">Lists the servers the logged-in user controls, as `ServerAccess` objects.</span> |
| <Link id="m-getjoinedserversasync" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> GetJoinedServersAsync()"}</code> | <span className="api-desc">Lists servers the user has joined.</span> |
| <Link id="m-getlatestefsmigrationforserver" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/migrationdetailsresponse">{"MigrationDetailsResponse"}</Link>{"> GetLatestEfsMigrationForServer(int serverId)"}</code> | <span className="api-desc">Gets the latest storage (EFS) migration details for a server.</span> |
| <Link id="m-getonlineserversasync" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> GetOnlineServersAsync()"}</code> | <span className="api-desc">Lists online servers.</span> |
| <Link id="m-getopenserversasync" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> GetOpenServersAsync()"}</code> | <span className="api-desc">Lists open servers.</span> |
| <Link id="m-getpublicserversasync" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> GetPublicServersAsync()"}</code> | <span className="api-desc">Lists public servers.</span> |
| <Link id="m-getserverasync" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{"> GetServerAsync(int serverIdentifier)"}</code> | <span className="api-desc">Gets one server's info by ID.</span> |
| <Link id="m-getserverregions" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/regioninfo">{"RegionInfo"}</Link>{">> GetServerRegions()"}</code> | <span className="api-desc">Lists the server regions.</span> |
| <Link id="m-getserversbyname" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> GetServersByName(string name)"}</code> | <span className="api-desc">Finds servers by name.</span> |
| <Link id="m-getserverswithplayer" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> GetServersWithPlayer(int playerId)"}</code> | <span className="api-desc">Lists servers a player is on.</span> |
| <Link id="m-getuserpermissionsforserver" /><code>{"async Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{">> GetUserPermissionsForServer(int serverIdentifier, int userIdentifier)"}</code> | <span className="api-desc">Gets a user's permissions on a server. Used by the websocket console login.</span> |
| <Link id="m-haspermissionsinserver" /><code>{"async Task<bool> HasPermissionsInServer(int serverIdentifier, int userIdentifier, "}<Link to="/mod/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{"[] permissions)"}</code> | <span className="api-desc">Asks whether a user has all the given permissions on a server.</span> |
| <Link id="m-joinserver" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/serverjoinresult">{"ServerJoinResult"}</Link>{"> JoinServer(int serverIdentifier, "}<Link to="/mod/game-api/types/assembly-api-models/gameversion">{"GameVersion"}</Link>{" version, string deviceIdentifier, string token, bool shouldLaunchServer = true, bool disregardOfflineStatus = false)"}</code> | <span className="api-desc">Asks the API to let the user join a server and returns the connection details.</span> |
| <Link id="m-requestbufferincrease" /><code>{"Task RequestBufferIncrease("}<Link to="/mod/game-api/types/assembly-api-models/bufferchangerequest">{"BufferChangeRequest"}</Link>{" request)"}</code> | <span className="api-desc">Sends a buffer change request.</span> |
| <Link id="m-setserverasofflineasync" /><code>{"Task SetServerAsOfflineAsync(int serverIdentifier, bool isForced)"}</code> | <span className="api-desc">Marks a server offline, optionally forced.</span> |
| <Link id="m-setserverasonlineasync" /><code>{"Task SetServerAsOnlineAsync(int serverIdentifier)"}</code> | <span className="api-desc">Marks a server online.</span> |
