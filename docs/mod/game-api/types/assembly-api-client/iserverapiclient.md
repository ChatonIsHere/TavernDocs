---
title: "IServerApiClient"
description: "Alta web API calls for servers: lists, joining, permissions and online status."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IServerApiClient

An **interface** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Alta web API calls for servers: lists, joining, permissions and online status. `ApiAccess.ApiClient.ServerClient`. The API is gone, so calls fail after timing out; see the Alta web API guide for which are stubbed.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Derived types** [`OfflineServerApiClient`](/mod/game-api/types/assembly-api-client/offlineserverapiclient), [`ServerApiClient`](/mod/game-api/types/assembly-api-client/serverapiclient)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-allocateserverformigration" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/allocationresult">{"AllocationResult"}</Link>{"> AllocateServerForMigration(int serverIdentifier)"}</code> | Asks the API to allocate a server for moving a server's data. |
| <Link id="m-connectconsole" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/serverjoinresult">{"ServerJoinResult"}</Link>{"> ConnectConsole(int serverIdentifier, bool shouldLaunchServer = true, bool disregardOfflineStatus = true)"}</code> | Asks the API for a console connection to a server, optionally launching it. |
| <Link id="m-createefsmigrationrecordforserver" /><code>{"Task CreateEfsMigrationRecordForServer(int serverId)"}</code> | Creates a storage migration record for a server. |
| <Link id="m-createnewserverasync" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-client/iserveraccess">{"IServerAccess"}</Link>{"> CreateNewServerAsync("}<Link to="/mod/game-api/types/assembly-api-models/gameservercreaterequest">{"GameServerCreateRequest"}</Link>{" createRequest)"}</code> | Creates a server and returns access to control it. |
| <Link id="m-discoverservers" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> DiscoverServers()"}</code> | Lists servers from the discover list. Used by the main menu's Discover board. |
| <Link id="m-getcontrollableserverasync" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-client/iserveraccess">{"IServerAccess"}</Link>{"> GetControllableServerAsync(int serverId)"}</code> | Gets access to control a server. A negative id gives a `LocalServerAccess` with no API calls. |
| <Link id="m-getcontrollableserversasync" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-client/iserveraccess">{"IServerAccess"}</Link>{">> GetControllableServersAsync()"}</code> | Lists the servers the user can control. |
| <Link id="m-getjoinedserversasync" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> GetJoinedServersAsync()"}</code> | Lists the servers the user has joined. Used by the My Servers board. |
| <Link id="m-getlatestefsmigrationforserver" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/migrationdetailsresponse">{"MigrationDetailsResponse"}</Link>{"> GetLatestEfsMigrationForServer(int serverId)"}</code> | Gets the latest storage migration details for a server. |
| <Link id="m-getonlineserversasync" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> GetOnlineServersAsync()"}</code> | Lists online servers. |
| <Link id="m-getopenserversasync" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> GetOpenServersAsync()"}</code> | Lists open servers. Used by the Open Servers board. |
| <Link id="m-getpublicserversasync" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> GetPublicServersAsync()"}</code> | Lists public servers. Used by the Public Servers board. |
| <Link id="m-getserverasync" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{"> GetServerAsync(int serverId)"}</code> | Gets one server's info. |
| <Link id="m-getserverregions" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/regioninfo">{"RegionInfo"}</Link>{">> GetServerRegions()"}</code> | Lists the server regions. |
| <Link id="m-getserversbyname" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> GetServersByName(string name)"}</code> | Finds servers by name. |
| <Link id="m-getserverswithplayer" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> GetServersWithPlayer(int playerId)"}</code> | Lists servers a player is on. |
| <Link id="m-getuserpermissionsforserver" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{">> GetUserPermissionsForServer(int serverIdentifier, int userIdentifier)"}</code> | Gets a user's permissions on a server. The websocket console login uses it. |
| <Link id="m-haspermissionsinserver" /><code>{"Task<bool> HasPermissionsInServer(int serverIdentifier, int userIdentifier, "}<Link to="/mod/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{"[] permissions)"}</code> | Asks whether a user has the given permissions on a server. |
| <Link id="m-joinserver" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/serverjoinresult">{"ServerJoinResult"}</Link>{"> JoinServer(int serverIdentifier, "}<Link to="/mod/game-api/types/assembly-api-models/gameversion">{"GameVersion"}</Link>{" version, string deviceIdentifier, string token, bool shouldLaunchServer = true, bool disregardOfflineStatus = true)"}</code> | Asks the API to join a server and returns the connection details. |
| <Link id="m-requestbufferincrease" /><code>{"Task RequestBufferIncrease("}<Link to="/mod/game-api/types/assembly-api-models/bufferchangerequest">{"BufferChangeRequest"}</Link>{" request)"}</code> | Sends a buffer change request for servers. |
| <Link id="m-setserverasofflineasync" /><code>{"Task SetServerAsOfflineAsync(int serverIdentifier, bool isForced)"}</code> | Marks a server offline, optionally forced. |
| <Link id="m-setserverasonlineasync" /><code>{"Task SetServerAsOnlineAsync(int serverIdentifier)"}</code> | Marks a server online. |

## Used in

Members of other types that take, return or hold a `IServerApiClient`:

[`HighLevelApiClient.ServerClient`](/mod/game-api/types/assembly-api-client/highlevelapiclient#m-serverclient), [`IHighLevelApiClient.ServerClient`](/mod/game-api/types/assembly-api-client/ihighlevelapiclient#m-serverclient), [`OfflineHighLevelApiClient.ServerClient`](/mod/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-serverclient).
