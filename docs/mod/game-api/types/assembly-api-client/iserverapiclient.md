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
| <Link id="m-allocateserverformigration" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/allocationresult">{"AllocationResult"}</Link>{"> AllocateServerForMigration(int serverIdentifier)"}</code> | <span className="api-desc">Asks the API to allocate a server for moving a server's data.</span> |
| <Link id="m-connectconsole" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/serverjoinresult">{"ServerJoinResult"}</Link>{"> ConnectConsole(int serverIdentifier, bool shouldLaunchServer = true, bool disregardOfflineStatus = true)"}</code> | <span className="api-desc">Asks the API for a console connection to a server, optionally launching it.</span> |
| <Link id="m-createefsmigrationrecordforserver" /><code>{"Task CreateEfsMigrationRecordForServer(int serverId)"}</code> | <span className="api-desc">Creates a storage migration record for a server.</span> |
| <Link id="m-createnewserverasync" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-client/iserveraccess">{"IServerAccess"}</Link>{"> CreateNewServerAsync("}<Link to="/mod/game-api/types/assembly-api-models/gameservercreaterequest">{"GameServerCreateRequest"}</Link>{" createRequest)"}</code> | <span className="api-desc">Creates a server and returns access to control it.</span> |
| <Link id="m-discoverservers" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> DiscoverServers()"}</code> | <span className="api-desc">Lists servers from the discover list. Used by the main menu's Discover board.</span> |
| <Link id="m-getcontrollableserverasync" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-client/iserveraccess">{"IServerAccess"}</Link>{"> GetControllableServerAsync(int serverId)"}</code> | <span className="api-desc">Gets access to control a server. A negative id gives a `LocalServerAccess` with no API calls.</span> |
| <Link id="m-getcontrollableserversasync" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-client/iserveraccess">{"IServerAccess"}</Link>{">> GetControllableServersAsync()"}</code> | <span className="api-desc">Lists the servers the user can control.</span> |
| <Link id="m-getjoinedserversasync" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> GetJoinedServersAsync()"}</code> | <span className="api-desc">Lists the servers the user has joined. Used by the My Servers board.</span> |
| <Link id="m-getlatestefsmigrationforserver" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/migrationdetailsresponse">{"MigrationDetailsResponse"}</Link>{"> GetLatestEfsMigrationForServer(int serverId)"}</code> | <span className="api-desc">Gets the latest storage migration details for a server.</span> |
| <Link id="m-getonlineserversasync" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> GetOnlineServersAsync()"}</code> | <span className="api-desc">Lists online servers.</span> |
| <Link id="m-getopenserversasync" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> GetOpenServersAsync()"}</code> | <span className="api-desc">Lists open servers. Used by the Open Servers board.</span> |
| <Link id="m-getpublicserversasync" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> GetPublicServersAsync()"}</code> | <span className="api-desc">Lists public servers. Used by the Public Servers board.</span> |
| <Link id="m-getserverasync" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{"> GetServerAsync(int serverId)"}</code> | <span className="api-desc">Gets one server's info.</span> |
| <Link id="m-getserverregions" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/regioninfo">{"RegionInfo"}</Link>{">> GetServerRegions()"}</code> | <span className="api-desc">Lists the server regions.</span> |
| <Link id="m-getserversbyname" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> GetServersByName(string name)"}</code> | <span className="api-desc">Finds servers by name.</span> |
| <Link id="m-getserverswithplayer" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> GetServersWithPlayer(int playerId)"}</code> | <span className="api-desc">Lists servers a player is on.</span> |
| <Link id="m-getuserpermissionsforserver" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{">> GetUserPermissionsForServer(int serverIdentifier, int userIdentifier)"}</code> | <span className="api-desc">Gets a user's permissions on a server. The websocket console login uses it.</span> |
| <Link id="m-haspermissionsinserver" /><code>{"Task<bool> HasPermissionsInServer(int serverIdentifier, int userIdentifier, "}<Link to="/mod/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{"[] permissions)"}</code> | <span className="api-desc">Asks whether a user has the given permissions on a server.</span> |
| <Link id="m-joinserver" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/serverjoinresult">{"ServerJoinResult"}</Link>{"> JoinServer(int serverIdentifier, "}<Link to="/mod/game-api/types/assembly-api-models/gameversion">{"GameVersion"}</Link>{" version, string deviceIdentifier, string token, bool shouldLaunchServer = true, bool disregardOfflineStatus = true)"}</code> | <span className="api-desc">Asks the API to join a server and returns the connection details.</span> |
| <Link id="m-requestbufferincrease" /><code>{"Task RequestBufferIncrease("}<Link to="/mod/game-api/types/assembly-api-models/bufferchangerequest">{"BufferChangeRequest"}</Link>{" request)"}</code> | <span className="api-desc">Sends a buffer change request for servers.</span> |
| <Link id="m-setserverasofflineasync" /><code>{"Task SetServerAsOfflineAsync(int serverIdentifier, bool isForced)"}</code> | <span className="api-desc">Marks a server offline, optionally forced.</span> |
| <Link id="m-setserverasonlineasync" /><code>{"Task SetServerAsOnlineAsync(int serverIdentifier)"}</code> | <span className="api-desc">Marks a server online.</span> |

## Used in

Members of other types that take, return or hold a `IServerApiClient`:

<div className="api-used-in">

[`HighLevelApiClient.ServerClient`](/mod/game-api/types/assembly-api-client/highlevelapiclient#m-serverclient), [`IHighLevelApiClient.ServerClient`](/mod/game-api/types/assembly-api-client/ihighlevelapiclient#m-serverclient), [`OfflineHighLevelApiClient.ServerClient`](/mod/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-serverclient).

</div>
