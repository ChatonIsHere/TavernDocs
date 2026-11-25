---
title: "ServerProfilingData"
description: "A snapshot of server performance numbers (FPS, networking, serialization, entity and creature counts, CPU and RAM) sent out by ServerDiagnosticsManager as..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerProfilingData

A **class** in `Root.Township`, no namespace.

A snapshot of server performance numbers (FPS, networking, serialization, entity and creature counts, CPU and RAM) sent out by `ServerDiagnosticsManager` as the `ProfilingData` console event. Obsolete in favour of the analytics system; server only.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Attributes** `Obsolete`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ServerProfilingData()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-cachedtime" /><code>{"private float cachedTime"}</code> |
| <Link id="m-processmetrics" /><code>{"private readonly "}<Link to="/game-api/types/global-p/processmetrics">{"ProcessMetrics"}</Link>{" processMetrics"}</code> |
| <Link id="m-serverstarttime" /><code>{"private readonly float serverStartTime"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-aiagentcount" /><code>{"int AiAgentCount { get; }"}</code> | Number of AI agents being updated. |
| <Link id="m-aiagentsorting" /><code>{"float AiAgentSorting { get; }"}</code> | Average ms spent sorting AI agents. |
| <Link id="m-aiagentupdating" /><code>{"float AiAgentUpdating { get; }"}</code> | Average ms spent updating AI agents. |
| <Link id="m-altanetworkerror-congestion" /><code>{"ulong AltaNetworkError_Congestion { get; }"}</code> | Count of congestion network errors. |
| <Link id="m-altanetworkerror-connectionclosed" /><code>{"ulong AltaNetworkError_ConnectionClosed { get; }"}</code> | Count of connection closed network errors. |
| <Link id="m-altanetworkerror-dnsresolve" /><code>{"ulong AltaNetworkError_DnsResolve { get; }"}</code> | Count of DNS resolve network errors. |
| <Link id="m-altanetworkerror-invalidreceive" /><code>{"ulong AltaNetworkError_InvalidReceive { get; }"}</code> | Count of invalid receive network errors. |
| <Link id="m-altanetworkerror-invalidsend" /><code>{"ulong AltaNetworkError_InvalidSend { get; }"}</code> | Count of invalid send network errors. |
| <Link id="m-altanetworkerror-none" /><code>{"ulong AltaNetworkError_None { get; }"}</code> | Count of sends that reported no error. |
| <Link id="m-altanetworkerror-timeout" /><code>{"ulong AltaNetworkError_Timeout { get; }"}</code> | Count of timeout network errors. |
| <Link id="m-altanetworkerror-unexpected" /><code>{"ulong AltaNetworkError_Unexpected { get; }"}</code> | Count of unexpected network errors. |
| <Link id="m-altanetworkerror-wrongconnection" /><code>{"ulong AltaNetworkError_WrongConnection { get; }"}</code> | Count of wrong connection network errors. |
| <Link id="m-averageping" /><code>{"float AveragePing { get; }"}</code> | Average ping across players. |
| <Link id="m-babucount" /><code>{"int BabuCount { get; }"}</code> | Spawned babus. |
| <Link id="m-bytespersecond" /><code>{"float BytesPerSecond { get; }"}</code> | Network bytes per second, as of the last `Cache`. |
| <Link id="m-chunksloadedcount" /><code>{"int ChunksLoadedCount { get; }"}</code> | Loaded chunks. |
| <Link id="m-cpu" /><code>{"float CPU { get; }"}</code> | Process CPU use. |
| <Link id="m-customdata" /><code>{"object CustomData { get; set; }"}</code> | Free slot for extra data to send along. |
| <Link id="m-failedpackets" /><code>{"ulong FailedPackets { get; }"}</code> | Packets that failed to send. |
| <Link id="m-firebugcount" /><code>{"int FirebugCount { get; }"}</code> | Spawned firebugs. |
| <Link id="m-fleet" /><code>{"string Fleet { get; }"}</code> | The server's fleet name. |
| <Link id="m-floodedpackets" /><code>{"ulong FloodedPackets { get; }"}</code> | Packets dropped for flooding. |
| <Link id="m-fps" /><code>{"float FPS { get; }"}</code> | Average server frame rate since the last reset. |
| <Link id="m-goteracount" /><code>{"int GoteraCount { get; }"}</code> | Spawned goteras. |
| <Link id="m-incomingpacketspersecond" /><code>{"float IncomingPacketsPerSecond { get; }"}</code> | Incoming packets per second, as of the last `Cache`. |
| <Link id="m-linkwithentitiescount" /><code>{"int LinkWithEntitiesCount { get; }"}</code> | Entity links that currently hold an entity. |
| <Link id="m-messagesperconnectioncount" /><code>{"float MessagesPerConnectionCount { get; }"}</code> | Average messages per connection per send. |
| <Link id="m-networkentitiescount" /><code>{"int NetworkEntitiesCount { get; }"}</code> | Spawned network entities. |
| <Link id="m-networkingsending" /><code>{"float NetworkingSending { get; }"}</code> | Average ms spent sending. |
| <Link id="m-networkprefabscount" /><code>{"int NetworkPrefabsCount { get; }"}</code> | Spawned network prefabs. |
| <Link id="m-networkrigidbodiesawakecount" /><code>{"int NetworkRigidbodiesAwakeCount { get; }"}</code> | Network rigidbodies that are awake. |
| <Link id="m-networkrigidbodiescount" /><code>{"int NetworkRigidbodiesCount { get; }"}</code> | Spawned network rigidbodies. |
| <Link id="m-outgoingpacketspersecond" /><code>{"float OutgoingPacketsPerSecond { get; }"}</code> | Outgoing packets per second, as of the last `Cache`. |
| <Link id="m-outgoingqueuesize" /><code>{"int OutgoingQueueSize { get; }"}</code> | Size of the socket's outgoing queue. |
| <Link id="m-phantomcount" /><code>{"int PhantomCount { get; }"}</code> | Spawned phantoms. |
| <Link id="m-platform" /><code>{"string Platform { get; }"}</code> | Always "pc". |
| <Link id="m-playercount" /><code>{"int PlayerCount { get; }"}</code> | Players on the server. |
| <Link id="m-prepareforwrite" /><code>{"Dictionary<string, "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{"> PrepareForWrite { get; }"}</code> | Per-type timers for preparing entities to be written. |
| <Link id="m-queuelimitpackets" /><code>{"ulong QueueLimitPackets { get; }"}</code> | Packets dropped for hitting the queue limit. |
| <Link id="m-ram" /><code>{"long RAM { get; }"}</code> | Process memory use. |
| <Link id="m-receiving" /><code><Link to="/game-api/types/global-q-r/receivingmetrics">{"ReceivingMetrics"}</Link>{" Receiving { get; }"}</code> | Metrics for received data. |
| <Link id="m-region" /><code>{"string Region { get; }"}</code> | The server's region. |
| <Link id="m-reliableoverflowdisconnects" /><code>{"ulong ReliableOverflowDisconnects { get; }"}</code> | Players disconnected for overflowing the reliable packet buffer. |
| <Link id="m-sentpackets" /><code>{"ulong SentPackets { get; }"}</code> | Packets sent. |
| <Link id="m-serialization" /><code>{"Dictionary<string, "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{"> Serialization { get; }"}</code> | Per-type serialization timers. |
| <Link id="m-serializetoconnectionsms" /><code>{"float SerializeToConnectionsMs { get; }"}</code> | Average ms spent serializing to connections. |
| <Link id="m-servertransportversion" /><code>{"string ServerTransportVersion { get; }"}</code> | Network transport package version, or "Unknown". |
| <Link id="m-spriggullcount" /><code>{"int SpriggullCount { get; }"}</code> | Spawned spriggulls. |
| <Link id="m-timesinceserverstart" /><code>{"float TimeSinceServerStart { get; }"}</code> | Seconds from creation to the last `Cache`. |
| <Link id="m-totalpreparationcount" /><code>{"float TotalPreparationCount { get; }"}</code> | Total entries across the prepare timers. |
| <Link id="m-totalprepareduration" /><code>{"float TotalPrepareDuration { get; }"}</code> | Ms spent preparing entity serialization. |
| <Link id="m-totalserialization" /><code>{"float TotalSerialization { get; }"}</code> | Average ms of scene serialization. |
| <Link id="m-totalserializationcount" /><code>{"float TotalSerializationCount { get; }"}</code> | Total entries across the serialization timers. |
| <Link id="m-totalserializationduration" /><code>{"float TotalSerializationDuration { get; }"}</code> | Ms spent serializing entities. |
| <Link id="m-turabadacount" /><code>{"int TurabadaCount { get; }"}</code> | Spawned turabadas. |
| <Link id="m-uintpooledarrayrequestedcount" /><code>{"int UintPooledArrayRequestedCount { get; }"}</code> | Pooled `uint` arrays currently borrowed. |
| <Link id="m-updatemodules" /><code>{"Dictionary<string, "}<Link to="/game-api/types/global-t-x/updatemoduleinfo">{"UpdateModuleInfo"}</Link>{"> UpdateModules { get; }"}</code> | Timing info for every update module, by name. |
| <Link id="m-wyrmcount" /><code>{"int WyrmCount { get; }"}</code> | Spawned wyrms. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cache" /><code>{"void Cache()"}</code> | Stores the current time and caches the networking profiler values. Call before reading. |
| <Link id="m-resetall" /><code>{"void ResetAll()"}</code> | Clears all averages and timers. Called after each send. |

## Used in

Members of other types that take, return or hold a `ServerProfilingData`:

[`ServerDiagnosticsManager.diagnostics`](/game-api/types/global-s/serverdiagnosticsmanager#m-diagnostics), [`ServerDiagnosticsManager.ServerProfile`](/game-api/types/global-s/serverdiagnosticsmanager#m-serverprofile).
