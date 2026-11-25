---
title: "IServerApiClient"
description: "interface IServerApiClient in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IServerApiClient

An **interface** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Derived types** [`OfflineServerApiClient`](/game-api/types/assembly-api-client/offlineserverapiclient), [`ServerApiClient`](/game-api/types/assembly-api-client/serverapiclient)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-allocateserverformigration" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/allocationresult">{"AllocationResult"}</Link>{"> AllocateServerForMigration(int serverIdentifier)"}</code> |  |
| <Link id="m-connectconsole" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/serverjoinresult">{"ServerJoinResult"}</Link>{"> ConnectConsole(int serverIdentifier, bool shouldLaunchServer = true, bool disregardOfflineStatus = true)"}</code> |  |
| <Link id="m-createefsmigrationrecordforserver" /><code>{"Task CreateEfsMigrationRecordForServer(int serverId)"}</code> |  |
| <Link id="m-createnewserverasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-client/iserveraccess">{"IServerAccess"}</Link>{"> CreateNewServerAsync("}<Link to="/game-api/types/assembly-api-models/gameservercreaterequest">{"GameServerCreateRequest"}</Link>{" createRequest)"}</code> |  |
| <Link id="m-discoverservers" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> DiscoverServers()"}</code> |  |
| <Link id="m-getcontrollableserverasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-client/iserveraccess">{"IServerAccess"}</Link>{"> GetControllableServerAsync(int serverId)"}</code> |  |
| <Link id="m-getcontrollableserversasync" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-client/iserveraccess">{"IServerAccess"}</Link>{">> GetControllableServersAsync()"}</code> |  |
| <Link id="m-getjoinedserversasync" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> GetJoinedServersAsync()"}</code> |  |
| <Link id="m-getlatestefsmigrationforserver" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/migrationdetailsresponse">{"MigrationDetailsResponse"}</Link>{"> GetLatestEfsMigrationForServer(int serverId)"}</code> |  |
| <Link id="m-getonlineserversasync" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> GetOnlineServersAsync()"}</code> |  |
| <Link id="m-getopenserversasync" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> GetOpenServersAsync()"}</code> |  |
| <Link id="m-getpublicserversasync" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> GetPublicServersAsync()"}</code> |  |
| <Link id="m-getserverasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{"> GetServerAsync(int serverId)"}</code> |  |
| <Link id="m-getserverregions" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/regioninfo">{"RegionInfo"}</Link>{">> GetServerRegions()"}</code> |  |
| <Link id="m-getserversbyname" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> GetServersByName(string name)"}</code> |  |
| <Link id="m-getserverswithplayer" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> GetServersWithPlayer(int playerId)"}</code> |  |
| <Link id="m-getuserpermissionsforserver" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{">> GetUserPermissionsForServer(int serverIdentifier, int userIdentifier)"}</code> |  |
| <Link id="m-haspermissionsinserver" /><code>{"Task<bool> HasPermissionsInServer(int serverIdentifier, int userIdentifier, "}<Link to="/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{"[] permissions)"}</code> |  |
| <Link id="m-joinserver" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/serverjoinresult">{"ServerJoinResult"}</Link>{"> JoinServer(int serverIdentifier, "}<Link to="/game-api/types/assembly-api-models/gameversion">{"GameVersion"}</Link>{" version, string deviceIdentifier, string token, bool shouldLaunchServer = true, bool disregardOfflineStatus = true)"}</code> |  |
| <Link id="m-requestbufferincrease" /><code>{"Task RequestBufferIncrease("}<Link to="/game-api/types/assembly-api-models/bufferchangerequest">{"BufferChangeRequest"}</Link>{" request)"}</code> |  |
| <Link id="m-setserverasofflineasync" /><code>{"Task SetServerAsOfflineAsync(int serverIdentifier, bool isForced)"}</code> |  |
| <Link id="m-setserverasonlineasync" /><code>{"Task SetServerAsOnlineAsync(int serverIdentifier)"}</code> |  |

## Used in

Members of other types that take, return or hold a `IServerApiClient`:

[`HighLevelApiClient.ServerClient`](/game-api/types/assembly-api-client/highlevelapiclient#m-serverclient), [`IHighLevelApiClient.ServerClient`](/game-api/types/assembly-api-client/ihighlevelapiclient#m-serverclient), [`OfflineHighLevelApiClient.ServerClient`](/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-serverclient).
