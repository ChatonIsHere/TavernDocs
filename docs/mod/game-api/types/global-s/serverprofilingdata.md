---
title: "ServerProfilingData"
description: "A snapshot of server performance numbers (FPS, networking, serialization, entity and creature counts, CPU and RAM) sent out by ServerDiagnosticsManager as..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerProfilingData

A **class** in `Root.Township`, the global namespace.

A snapshot of server performance numbers (FPS, networking, serialization, entity and creature counts, CPU and RAM) sent out by `ServerDiagnosticsManager` as the `ProfilingData` console event. Obsolete in favour of the analytics system; server only.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Attributes** `Obsolete`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerProfilingData()"}</code> | <span className="api-desc">Creates a `ServerProfilingData` with default values.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedtime" /><code>{"private float cachedTime"}</code> | <span className="api-desc">`Time.time` when the data was last refreshed; used for `TimeSinceServerStart`.</span> |
| <Link id="m-processmetrics" /><code>{"private readonly "}<Link to="/mod/game-api/types/global-p/processmetrics">{"ProcessMetrics"}</Link>{" processMetrics"}</code> | <span className="api-desc">Reads the server process's CPU and RAM use.</span> |
| <Link id="m-serverstarttime" /><code>{"private readonly float serverStartTime"}</code> | <span className="api-desc">`Time.time` when this object was made.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-aiagentcount" /><code>{"int AiAgentCount { get; }"}</code> | <span className="api-desc">Number of AI agents being updated.</span> |
| <Link id="m-aiagentsorting" /><code>{"float AiAgentSorting { get; }"}</code> | <span className="api-desc">Average ms spent sorting AI agents.</span> |
| <Link id="m-aiagentupdating" /><code>{"float AiAgentUpdating { get; }"}</code> | <span className="api-desc">Average ms spent updating AI agents.</span> |
| <Link id="m-altanetworkerror-congestion" /><code>{"ulong AltaNetworkError_Congestion { get; }"}</code> | <span className="api-desc">Count of congestion network errors.</span> |
| <Link id="m-altanetworkerror-connectionclosed" /><code>{"ulong AltaNetworkError_ConnectionClosed { get; }"}</code> | <span className="api-desc">Count of connection closed network errors.</span> |
| <Link id="m-altanetworkerror-dnsresolve" /><code>{"ulong AltaNetworkError_DnsResolve { get; }"}</code> | <span className="api-desc">Count of DNS resolve network errors.</span> |
| <Link id="m-altanetworkerror-invalidreceive" /><code>{"ulong AltaNetworkError_InvalidReceive { get; }"}</code> | <span className="api-desc">Count of invalid receive network errors.</span> |
| <Link id="m-altanetworkerror-invalidsend" /><code>{"ulong AltaNetworkError_InvalidSend { get; }"}</code> | <span className="api-desc">Count of invalid send network errors.</span> |
| <Link id="m-altanetworkerror-none" /><code>{"ulong AltaNetworkError_None { get; }"}</code> | <span className="api-desc">Count of sends that reported no error.</span> |
| <Link id="m-altanetworkerror-timeout" /><code>{"ulong AltaNetworkError_Timeout { get; }"}</code> | <span className="api-desc">Count of timeout network errors.</span> |
| <Link id="m-altanetworkerror-unexpected" /><code>{"ulong AltaNetworkError_Unexpected { get; }"}</code> | <span className="api-desc">Count of unexpected network errors.</span> |
| <Link id="m-altanetworkerror-wrongconnection" /><code>{"ulong AltaNetworkError_WrongConnection { get; }"}</code> | <span className="api-desc">Count of wrong connection network errors.</span> |
| <Link id="m-averageping" /><code>{"float AveragePing { get; }"}</code> | <span className="api-desc">Average ping across players.</span> |
| <Link id="m-babucount" /><code>{"int BabuCount { get; }"}</code> | <span className="api-desc">Spawned babus.</span> |
| <Link id="m-bytespersecond" /><code>{"float BytesPerSecond { get; }"}</code> | <span className="api-desc">Network bytes per second, as of the last `Cache`.</span> |
| <Link id="m-chunksloadedcount" /><code>{"int ChunksLoadedCount { get; }"}</code> | <span className="api-desc">Loaded chunks.</span> |
| <Link id="m-cpu" /><code>{"float CPU { get; }"}</code> | <span className="api-desc">Process CPU use.</span> |
| <Link id="m-customdata" /><code>{"object CustomData { get; set; }"}</code> | <span className="api-desc">Free slot for extra data to send along.</span> |
| <Link id="m-failedpackets" /><code>{"ulong FailedPackets { get; }"}</code> | <span className="api-desc">Packets that failed to send.</span> |
| <Link id="m-firebugcount" /><code>{"int FirebugCount { get; }"}</code> | <span className="api-desc">Spawned firebugs.</span> |
| <Link id="m-fleet" /><code>{"string Fleet { get; }"}</code> | <span className="api-desc">The server's fleet name.</span> |
| <Link id="m-floodedpackets" /><code>{"ulong FloodedPackets { get; }"}</code> | <span className="api-desc">Packets dropped for flooding.</span> |
| <Link id="m-fps" /><code>{"float FPS { get; }"}</code> | <span className="api-desc">Average server frame rate since the last reset.</span> |
| <Link id="m-goteracount" /><code>{"int GoteraCount { get; }"}</code> | <span className="api-desc">Spawned goteras.</span> |
| <Link id="m-incomingpacketspersecond" /><code>{"float IncomingPacketsPerSecond { get; }"}</code> | <span className="api-desc">Incoming packets per second, as of the last `Cache`.</span> |
| <Link id="m-linkwithentitiescount" /><code>{"int LinkWithEntitiesCount { get; }"}</code> | <span className="api-desc">Entity links that currently hold an entity.</span> |
| <Link id="m-messagesperconnectioncount" /><code>{"float MessagesPerConnectionCount { get; }"}</code> | <span className="api-desc">Average messages per connection per send.</span> |
| <Link id="m-networkentitiescount" /><code>{"int NetworkEntitiesCount { get; }"}</code> | <span className="api-desc">Spawned network entities.</span> |
| <Link id="m-networkingsending" /><code>{"float NetworkingSending { get; }"}</code> | <span className="api-desc">Average ms spent sending.</span> |
| <Link id="m-networkprefabscount" /><code>{"int NetworkPrefabsCount { get; }"}</code> | <span className="api-desc">Spawned network prefabs.</span> |
| <Link id="m-networkrigidbodiesawakecount" /><code>{"int NetworkRigidbodiesAwakeCount { get; }"}</code> | <span className="api-desc">Network rigidbodies that are awake.</span> |
| <Link id="m-networkrigidbodiescount" /><code>{"int NetworkRigidbodiesCount { get; }"}</code> | <span className="api-desc">Spawned network rigidbodies.</span> |
| <Link id="m-outgoingpacketspersecond" /><code>{"float OutgoingPacketsPerSecond { get; }"}</code> | <span className="api-desc">Outgoing packets per second, as of the last `Cache`.</span> |
| <Link id="m-outgoingqueuesize" /><code>{"int OutgoingQueueSize { get; }"}</code> | <span className="api-desc">Size of the socket's outgoing queue.</span> |
| <Link id="m-phantomcount" /><code>{"int PhantomCount { get; }"}</code> | <span className="api-desc">Spawned phantoms.</span> |
| <Link id="m-platform" /><code>{"string Platform { get; }"}</code> | <span className="api-desc">Always "pc".</span> |
| <Link id="m-playercount" /><code>{"int PlayerCount { get; }"}</code> | <span className="api-desc">Players on the server.</span> |
| <Link id="m-prepareforwrite" /><code>{"Dictionary<string, "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{"> PrepareForWrite { get; }"}</code> | <span className="api-desc">Per-type timers for preparing entities to be written.</span> |
| <Link id="m-queuelimitpackets" /><code>{"ulong QueueLimitPackets { get; }"}</code> | <span className="api-desc">Packets dropped for hitting the queue limit.</span> |
| <Link id="m-ram" /><code>{"long RAM { get; }"}</code> | <span className="api-desc">Process memory use.</span> |
| <Link id="m-receiving" /><code><Link to="/mod/game-api/types/global-q-r/receivingmetrics">{"ReceivingMetrics"}</Link>{" Receiving { get; }"}</code> | <span className="api-desc">Metrics for received data.</span> |
| <Link id="m-region" /><code>{"string Region { get; }"}</code> | <span className="api-desc">The server's region.</span> |
| <Link id="m-reliableoverflowdisconnects" /><code>{"ulong ReliableOverflowDisconnects { get; }"}</code> | <span className="api-desc">Players disconnected for overflowing the reliable packet buffer.</span> |
| <Link id="m-sentpackets" /><code>{"ulong SentPackets { get; }"}</code> | <span className="api-desc">Packets sent.</span> |
| <Link id="m-serialization" /><code>{"Dictionary<string, "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{"> Serialization { get; }"}</code> | <span className="api-desc">Per-type serialization timers.</span> |
| <Link id="m-serializetoconnectionsms" /><code>{"float SerializeToConnectionsMs { get; }"}</code> | <span className="api-desc">Average ms spent serializing to connections.</span> |
| <Link id="m-servertransportversion" /><code>{"string ServerTransportVersion { get; }"}</code> | <span className="api-desc">Network transport package version, or "Unknown".</span> |
| <Link id="m-spriggullcount" /><code>{"int SpriggullCount { get; }"}</code> | <span className="api-desc">Spawned spriggulls.</span> |
| <Link id="m-timesinceserverstart" /><code>{"float TimeSinceServerStart { get; }"}</code> | <span className="api-desc">Seconds from creation to the last `Cache`.</span> |
| <Link id="m-totalpreparationcount" /><code>{"float TotalPreparationCount { get; }"}</code> | <span className="api-desc">Total entries across the prepare timers.</span> |
| <Link id="m-totalprepareduration" /><code>{"float TotalPrepareDuration { get; }"}</code> | <span className="api-desc">Ms spent preparing entity serialization.</span> |
| <Link id="m-totalserialization" /><code>{"float TotalSerialization { get; }"}</code> | <span className="api-desc">Average ms of scene serialization.</span> |
| <Link id="m-totalserializationcount" /><code>{"float TotalSerializationCount { get; }"}</code> | <span className="api-desc">Total entries across the serialization timers.</span> |
| <Link id="m-totalserializationduration" /><code>{"float TotalSerializationDuration { get; }"}</code> | <span className="api-desc">Ms spent serializing entities.</span> |
| <Link id="m-turabadacount" /><code>{"int TurabadaCount { get; }"}</code> | <span className="api-desc">Spawned turabadas.</span> |
| <Link id="m-uintpooledarrayrequestedcount" /><code>{"int UintPooledArrayRequestedCount { get; }"}</code> | <span className="api-desc">Pooled `uint` arrays currently borrowed.</span> |
| <Link id="m-updatemodules" /><code>{"Dictionary<string, "}<Link to="/mod/game-api/types/global-t-x/updatemoduleinfo">{"UpdateModuleInfo"}</Link>{"> UpdateModules { get; }"}</code> | <span className="api-desc">Timing info for every update module, by name.</span> |
| <Link id="m-wyrmcount" /><code>{"int WyrmCount { get; }"}</code> | <span className="api-desc">Spawned wyrms.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cache" /><code>{"void Cache()"}</code> | <span className="api-desc">Stores the current time and caches the networking profiler values. Call before reading.</span> |
| <Link id="m-resetall" /><code>{"void ResetAll()"}</code> | <span className="api-desc">Clears all averages and timers. Called after each send.</span> |

## Used in

Members of other types that take, return or hold a `ServerProfilingData`:

<div className="api-used-in">

[`ServerDiagnosticsManager.diagnostics`](/mod/game-api/types/global-s/serverdiagnosticsmanager#m-diagnostics), [`ServerDiagnosticsManager.ServerProfile`](/mod/game-api/types/global-s/serverdiagnosticsmanager#m-serverprofile).

</div>
