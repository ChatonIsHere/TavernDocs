---
title: "AverageNumber"
description: "Keeps a running total, count, min and max of recorded numbers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AverageNumber

A **class** in `Alta.Core.Runtime`, `Alta.Core.Runtime`.

Keeps a running total, count, min and max of recorded numbers. Used for simple stats and timing.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AverageNumber()"}</code> | <span className="api-desc">Creates an `AverageNumber` with default values.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-max" /><code>{"private double max"}</code> | <span className="api-desc">Backing field for `Max`.</span> |
| <Link id="m-min" /><code>{"private double min"}</code> | <span className="api-desc">Backing field for `Min`.</span> |
| <Link id="m-numberofvalues" /><code>{"private int numberOfValues"}</code> | <span className="api-desc">Backing field for `NumberOfValues`.</span> |
| <Link id="m-total" /><code>{"private double total"}</code> | <span className="api-desc">Backing field for `Total`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-average" /><code>{"double Average { get; }"}</code> | <span className="api-desc">Total divided by count, or 0 when nothing is recorded.</span> |
| <Link id="m-max-2" /><code>{"double Max { get; }"}</code> | <span className="api-desc">Largest recorded value, or 0 when nothing is recorded.</span> |
| <Link id="m-min-2" /><code>{"double Min { get; }"}</code> | <span className="api-desc">Smallest recorded value, or 0 when nothing is recorded. Only updated when a value isn't a new max, so it can stay at `double.MaxValue`.</span> |
| <Link id="m-numberofvalues-2" /><code>{"int NumberOfValues { get; }"}</code> | <span className="api-desc">How many values have been recorded since the last reset.</span> |
| <Link id="m-total-2" /><code>{"double Total { get; }"}</code> | <span className="api-desc">Sum of all recorded values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-recordnumber" /><code>{"void RecordNumber(double value)"}</code> | <span className="api-desc">Adds a value to the total and count and updates max, or min if it isn't a new max.</span> |
| <Link id="m-reset" /><code>{"void Reset()"}</code> | <span className="api-desc">Clears the total and count and resets min and max to their extremes.</span> |

## Used in

Members of other types that take, return or hold a `AverageNumber`:

<div className="api-used-in">

[`AgentUpdater.SortingAgentsTimeMs`](/mod/game-api/types/alta-intelligence/agentupdater#m-sortingagentstimems), [`AgentUpdater.UpdatingAgentsTimeMs`](/mod/game-api/types/alta-intelligence/agentupdater#m-updatingagentstimems), [`AccumulativeAverageCount.counts`](/mod/game-api/types/alta-networking/accumulativeaveragecount#m-counts), [`AccumulativeAverageNumber.duration`](/mod/game-api/types/alta-networking/accumulativeaveragenumber#m-duration), [`SceneSerializer.MessagesPerConnection`](/mod/game-api/types/alta-networking/sceneserializer#m-messagesperconnection), [`SceneSerializer.SerializationTimeMs`](/mod/game-api/types/alta-networking/sceneserializer#m-serializationtimems), [`SceneSerializer.SerializeToConnectionsMs`](/mod/game-api/types/alta-networking/sceneserializer#m-serializetoconnectionsms), [`NetworkManager.ReceivingMs`](/mod/game-api/types/alta-networking/networkmanager#m-receivingms), [`NetworkManager.SendingMs`](/mod/game-api/types/alta-networking/networkmanager#m-sendingms), [`ServerPacketReceiver.ProcessingReliableMs`](/mod/game-api/types/alta-networking/serverpacketreceiver#m-processingreliablems), [`ServerPacketReceiver.ProcessingUnreliableMs`](/mod/game-api/types/alta-networking/serverpacketreceiver#m-processingunreliablems), [`ServerPacketReceiver.ReceivingMs`](/mod/game-api/types/alta-networking/serverpacketreceiver#m-receivingms), [`ServerPacketReceiver.ReliableMessagesPerFrame`](/mod/game-api/types/alta-networking/serverpacketreceiver#m-reliablemessagesperframe), [`ServerPacketReceiver.UnreliableMessagesPerFrame`](/mod/game-api/types/alta-networking/serverpacketreceiver#m-unreliablemessagesperframe), [`LlapiMetric.ProcessIncomingClient`](/mod/game-api/types/assembly-other/llapimetric#m-processincomingclient), [`LlapiMetric.ProcessIncomingServer`](/mod/game-api/types/assembly-other/llapimetric#m-processincomingserver), [`LlapiMetric.ProcessOutgoingClient`](/mod/game-api/types/assembly-other/llapimetric#m-processoutgoingclient), [`LlapiMetric.ProcessOutgoingServer`](/mod/game-api/types/assembly-other/llapimetric#m-processoutgoingserver), [`LlapiMetric.SendAverage`](/mod/game-api/types/assembly-other/llapimetric#m-sendaverage), [`FPSCounter.FPSRecord`](/mod/game-api/types/global-e-h/fpscounter#m-fpsrecord), [`UpdateModule.duration`](/mod/game-api/types/global-t-x/updatemodule#m-duration), [`UpdateModuleInfo.duration`](/mod/game-api/types/global-t-x/updatemoduleinfo#m-duration), [`UpdateModuleInfo.UpdateModuleInfo`](/mod/game-api/types/global-t-x/updatemoduleinfo#m-ctor).

</div>
