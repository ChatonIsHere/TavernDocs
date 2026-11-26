---
title: "OfflineServerApiClient"
description: "Offline stand-in for the server client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OfflineServerApiClient

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Offline stand-in for the server client. It hands out `GameServerInfo.OfflineServer` wrapped in `LocalServerAccess`, allows every join, and throws `OfflineException` for the rest.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Inherits or implements** [`IServerApiClient`](/mod/game-api/types/assembly-api-client/iserverapiclient)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OfflineServerApiClient()"}</code> | <span className="api-desc">Creates an `OfflineServerApiClient` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-allocateserverformigration" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/allocationresult">{"AllocationResult"}</Link>{"> AllocateServerForMigration(int serverIdentifier)"}</code> | <span className="api-desc">Throws `OfflineException`.</span> |
| <Link id="m-connectconsole" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/serverjoinresult">{"ServerJoinResult"}</Link>{"> ConnectConsole(int serverIdentifier, bool shouldLaunchServer = true, bool disregardOfflineStatus = true)"}</code> | <span className="api-desc">Always allowed, with empty connection info.</span> |
| <Link id="m-createefsmigrationrecordforserver" /><code>{"Task CreateEfsMigrationRecordForServer(int serverId)"}</code> | <span className="api-desc">Throws `OfflineException`.</span> |
| <Link id="m-createnewserverasync" /><code>{"async Task<"}<Link to="/mod/game-api/types/assembly-api-client/iserveraccess">{"IServerAccess"}</Link>{"> CreateNewServerAsync("}<Link to="/mod/game-api/types/assembly-api-models/gameservercreaterequest">{"GameServerCreateRequest"}</Link>{" createRequest)"}</code> | <span className="api-desc">Returns a `LocalServerAccess` for the offline server, with the requested scene index.</span> |
| <Link id="m-discoverservers" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> DiscoverServers()"}</code> | <span className="api-desc">Returns just the offline server.</span> |
| <Link id="m-getcontrollableserverasync" /><code>{"async Task<"}<Link to="/mod/game-api/types/assembly-api-client/iserveraccess">{"IServerAccess"}</Link>{"> GetControllableServerAsync(int serverId)"}</code> | <span className="api-desc">Returns a `LocalServerAccess` for the offline server, whatever the ID.</span> |
| <Link id="m-getcontrollableserversasync" /><code>{"async Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-client/iserveraccess">{"IServerAccess"}</Link>{">> GetControllableServersAsync()"}</code> | <span className="api-desc">Returns one `LocalServerAccess` for the offline server.</span> |
| <Link id="m-getjoinedserversasync" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> GetJoinedServersAsync()"}</code> | <span className="api-desc">Returns just the offline server.</span> |
| <Link id="m-getlatestefsmigrationforserver" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/migrationdetailsresponse">{"MigrationDetailsResponse"}</Link>{"> GetLatestEfsMigrationForServer(int serverId)"}</code> | <span className="api-desc">Throws `OfflineException`.</span> |
| <Link id="m-getonlineserversasync" /><code>{"async Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> GetOnlineServersAsync()"}</code> | <span className="api-desc">Returns just the offline server.</span> |
| <Link id="m-getopenserversasync" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> GetOpenServersAsync()"}</code> | <span className="api-desc">Returns just the offline server.</span> |
| <Link id="m-getpublicserversasync" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> GetPublicServersAsync()"}</code> | <span className="api-desc">Returns just the offline server.</span> |
| <Link id="m-getserverasync" /><code>{"async Task<"}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{"> GetServerAsync(int serverIdentifier)"}</code> | <span className="api-desc">Returns the offline server, whatever the ID.</span> |
| <Link id="m-getserverregions" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/regioninfo">{"RegionInfo"}</Link>{">> GetServerRegions()"}</code> | <span className="api-desc">Returns an empty list.</span> |
| <Link id="m-getserversbyname" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> GetServersByName(string name)"}</code> | <span className="api-desc">Throws `OfflineException`.</span> |
| <Link id="m-getserverswithplayer" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> GetServersWithPlayer(int playerId)"}</code> | <span className="api-desc">Throws `OfflineException`.</span> |
| <Link id="m-getuserpermissionsforserver" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{">> GetUserPermissionsForServer(int serverIdentifier, int userIdentifier)"}</code> | <span className="api-desc">Throws `OfflineException`.</span> |
| <Link id="m-haspermissionsinserver" /><code>{"Task<bool> HasPermissionsInServer(int serverIdentifier, int userIdentifier, "}<Link to="/mod/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{"[] permissions)"}</code> | <span className="api-desc">Throws `OfflineException` straight away rather than returning a failed task.</span> |
| <Link id="m-joinserver" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/serverjoinresult">{"ServerJoinResult"}</Link>{"> JoinServer(int serverIdentifier, "}<Link to="/mod/game-api/types/assembly-api-models/gameversion">{"GameVersion"}</Link>{" version, string deviceIdentifier, string token, bool shouldLaunchServer = true, bool disregardOfflineStatus = true)"}</code> | <span className="api-desc">Always allowed, with empty connection info.</span> |
| <Link id="m-requestbufferincrease" /><code>{"Task RequestBufferIncrease("}<Link to="/mod/game-api/types/assembly-api-models/bufferchangerequest">{"BufferChangeRequest"}</Link>{" request)"}</code> | <span className="api-desc">Throws `OfflineException`.</span> |
| <Link id="m-setserverasofflineasync" /><code>{"Task SetServerAsOfflineAsync(int serverIdentifier, bool isForced)"}</code> | <span className="api-desc">Throws `OfflineException`.</span> |
| <Link id="m-setserverasonlineasync" /><code>{"Task SetServerAsOnlineAsync(int serverIdentifier)"}</code> | <span className="api-desc">Throws `OfflineException`.</span> |
