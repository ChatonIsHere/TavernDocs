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

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** [`HighLevelApiClientBase`](/game-api/types/assembly-api-client/highlevelapiclientbase), [`IServerApiClient`](/game-api/types/assembly-api-client/iserverapiclient)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member |
| --- |
| <Link id="m-ctor" /><code>{"internal ServerApiClient("}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" clientManager)"}</code> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-allocateserverformigration" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/allocationresult">{"AllocationResult"}</Link>{"> AllocateServerForMigration(int serverIdentifier)"}</code> | Asks the API to allocate a host to move a server to. |
| <Link id="m-connectconsole" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/serverjoinresult">{"ServerJoinResult"}</Link>{"> ConnectConsole(int serverIdentifier, bool shouldLaunchServer = true, bool disregardOfflineStatus = false)"}</code> | Asks the API for console connection details for a server. |
| <Link id="m-createefsmigrationrecordforserver" /><code>{"Task CreateEfsMigrationRecordForServer(int serverId)"}</code> | Records a storage (EFS) migration for a server. |
| <Link id="m-createnewserverasync" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-client/iserveraccess">{"IServerAccess"}</Link>{"> CreateNewServerAsync("}<Link to="/game-api/types/assembly-api-models/gameservercreaterequest">{"GameServerCreateRequest"}</Link>{" createRequest)"}</code> | Creates a server on the API and returns a `ServerAccess` for it. |
| <Link id="m-discoverservers" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> DiscoverServers()"}</code> | Lists servers to discover. |
| <Link id="m-getcontrollableserverasync" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-client/iserveraccess">{"IServerAccess"}</Link>{"> GetControllableServerAsync(int serverId)"}</code> | Returns a `LocalServerAccess` with no API calls for a negative ID, otherwise a `ServerAccess` for that server. |
| <Link id="m-getcontrollableserversasync" /><code>{"async Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-client/iserveraccess">{"IServerAccess"}</Link>{">> GetControllableServersAsync()"}</code> | Lists the servers the logged-in user controls, as `ServerAccess` objects. |
| <Link id="m-getjoinedserversasync" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> GetJoinedServersAsync()"}</code> | Lists servers the user has joined. |
| <Link id="m-getlatestefsmigrationforserver" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/migrationdetailsresponse">{"MigrationDetailsResponse"}</Link>{"> GetLatestEfsMigrationForServer(int serverId)"}</code> | Gets the latest storage (EFS) migration details for a server. |
| <Link id="m-getonlineserversasync" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> GetOnlineServersAsync()"}</code> | Lists online servers. |
| <Link id="m-getopenserversasync" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> GetOpenServersAsync()"}</code> | Lists open servers. |
| <Link id="m-getpublicserversasync" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> GetPublicServersAsync()"}</code> | Lists public servers. |
| <Link id="m-getserverasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{"> GetServerAsync(int serverIdentifier)"}</code> | Gets one server's info by ID. |
| <Link id="m-getserverregions" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/regioninfo">{"RegionInfo"}</Link>{">> GetServerRegions()"}</code> | Lists the server regions. |
| <Link id="m-getserversbyname" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> GetServersByName(string name)"}</code> | Finds servers by name. |
| <Link id="m-getserverswithplayer" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> GetServersWithPlayer(int playerId)"}</code> | Lists servers a player is on. |
| <Link id="m-getuserpermissionsforserver" /><code>{"async Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{">> GetUserPermissionsForServer(int serverIdentifier, int userIdentifier)"}</code> | Gets a user's permissions on a server. Used by the websocket console login. |
| <Link id="m-haspermissionsinserver" /><code>{"async Task<bool> HasPermissionsInServer(int serverIdentifier, int userIdentifier, "}<Link to="/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{"[] permissions)"}</code> | Asks whether a user has all the given permissions on a server. |
| <Link id="m-joinserver" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/serverjoinresult">{"ServerJoinResult"}</Link>{"> JoinServer(int serverIdentifier, "}<Link to="/game-api/types/assembly-api-models/gameversion">{"GameVersion"}</Link>{" version, string deviceIdentifier, string token, bool shouldLaunchServer = true, bool disregardOfflineStatus = false)"}</code> | Asks the API to let the user join a server and returns the connection details. |
| <Link id="m-requestbufferincrease" /><code>{"Task RequestBufferIncrease("}<Link to="/game-api/types/assembly-api-models/bufferchangerequest">{"BufferChangeRequest"}</Link>{" request)"}</code> | Sends a buffer change request. |
| <Link id="m-setserverasofflineasync" /><code>{"Task SetServerAsOfflineAsync(int serverIdentifier, bool isForced)"}</code> | Marks a server offline, optionally forced. |
| <Link id="m-setserverasonlineasync" /><code>{"Task SetServerAsOnlineAsync(int serverIdentifier)"}</code> | Marks a server online. |
