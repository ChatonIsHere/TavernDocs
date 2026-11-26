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

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AverageNumber()"}</code> | Creates an `AverageNumber` with default values. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-max" /><code>{"private double max"}</code> | Backing field for `Max`. |
| <Link id="m-min" /><code>{"private double min"}</code> | Backing field for `Min`. |
| <Link id="m-numberofvalues" /><code>{"private int numberOfValues"}</code> | Backing field for `NumberOfValues`. |
| <Link id="m-total" /><code>{"private double total"}</code> | Backing field for `Total`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-average" /><code>{"double Average { get; }"}</code> | Total divided by count, or 0 when nothing is recorded. |
| <Link id="m-max-2" /><code>{"double Max { get; }"}</code> | Largest recorded value, or 0 when nothing is recorded. |
| <Link id="m-min-2" /><code>{"double Min { get; }"}</code> | Smallest recorded value, or 0 when nothing is recorded. Only updated when a value isn't a new max, so it can stay at `double.MaxValue`. |
| <Link id="m-numberofvalues-2" /><code>{"int NumberOfValues { get; }"}</code> | How many values have been recorded since the last reset. |
| <Link id="m-total-2" /><code>{"double Total { get; }"}</code> | Sum of all recorded values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-recordnumber" /><code>{"void RecordNumber(double value)"}</code> | Adds a value to the total and count and updates max, or min if it isn't a new max. |
| <Link id="m-reset" /><code>{"void Reset()"}</code> | Clears the total and count and resets min and max to their extremes. |

## Used in

Members of other types that take, return or hold a `AverageNumber`:

[`AgentUpdater.SortingAgentsTimeMs`](/game-api/types/alta-intelligence/agentupdater#m-sortingagentstimems), [`AgentUpdater.UpdatingAgentsTimeMs`](/game-api/types/alta-intelligence/agentupdater#m-updatingagentstimems), [`AccumulativeAverageCount.counts`](/game-api/types/alta-networking/accumulativeaveragecount#m-counts), [`AccumulativeAverageNumber.duration`](/game-api/types/alta-networking/accumulativeaveragenumber#m-duration), [`SceneSerializer.MessagesPerConnection`](/game-api/types/alta-networking/sceneserializer#m-messagesperconnection), [`SceneSerializer.SerializationTimeMs`](/game-api/types/alta-networking/sceneserializer#m-serializationtimems), [`SceneSerializer.SerializeToConnectionsMs`](/game-api/types/alta-networking/sceneserializer#m-serializetoconnectionsms), [`NetworkManager.ReceivingMs`](/game-api/types/alta-networking/networkmanager#m-receivingms), [`NetworkManager.SendingMs`](/game-api/types/alta-networking/networkmanager#m-sendingms), [`ServerPacketReceiver.ProcessingReliableMs`](/game-api/types/alta-networking/serverpacketreceiver#m-processingreliablems), [`ServerPacketReceiver.ProcessingUnreliableMs`](/game-api/types/alta-networking/serverpacketreceiver#m-processingunreliablems), [`ServerPacketReceiver.ReceivingMs`](/game-api/types/alta-networking/serverpacketreceiver#m-receivingms), [`ServerPacketReceiver.ReliableMessagesPerFrame`](/game-api/types/alta-networking/serverpacketreceiver#m-reliablemessagesperframe), [`ServerPacketReceiver.UnreliableMessagesPerFrame`](/game-api/types/alta-networking/serverpacketreceiver#m-unreliablemessagesperframe), [`LlapiMetric.ProcessIncomingClient`](/game-api/types/assembly-other/llapimetric#m-processincomingclient), [`LlapiMetric.ProcessIncomingServer`](/game-api/types/assembly-other/llapimetric#m-processincomingserver), [`LlapiMetric.ProcessOutgoingClient`](/game-api/types/assembly-other/llapimetric#m-processoutgoingclient), [`LlapiMetric.ProcessOutgoingServer`](/game-api/types/assembly-other/llapimetric#m-processoutgoingserver), [`LlapiMetric.SendAverage`](/game-api/types/assembly-other/llapimetric#m-sendaverage), [`FPSCounter.FPSRecord`](/game-api/types/global-e-h/fpscounter#m-fpsrecord), [`UpdateModule.duration`](/game-api/types/global-t-x/updatemodule#m-duration), [`UpdateModuleInfo.duration`](/game-api/types/global-t-x/updatemoduleinfo#m-duration), [`UpdateModuleInfo.UpdateModuleInfo`](/game-api/types/global-t-x/updatemoduleinfo#m-ctor).
