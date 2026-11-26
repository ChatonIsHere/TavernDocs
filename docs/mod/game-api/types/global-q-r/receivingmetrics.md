---
title: "ReceivingMetrics"
description: "Old read-only view of the incoming packet averages kept by ServerPacketReceiver, marked obsolete in favour of the new analytics system."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ReceivingMetrics

A **class** in `Root.Township`, the global namespace.

Old read-only view of the incoming packet averages kept by `ServerPacketReceiver`, marked obsolete in favour of the new analytics system.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Attributes** `Obsolete`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ReceivingMetrics()"}</code> | <span className="api-desc">Creates a `ReceivingMetrics` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-networktransportms" /><code>{"float NetworkTransportMs { get; }"}</code> | <span className="api-desc">Average milliseconds spent receiving packets from the transport.</span> |
| <Link id="m-reliablems" /><code>{"float ReliableMs { get; }"}</code> | <span className="api-desc">Average milliseconds spent processing reliable messages.</span> |
| <Link id="m-reliablereceived" /><code>{"float ReliableReceived { get; }"}</code> | <span className="api-desc">Average reliable messages received per frame.</span> |
| <Link id="m-unreliablems" /><code>{"float UnreliableMs { get; }"}</code> | <span className="api-desc">Average milliseconds spent processing unreliable messages.</span> |
| <Link id="m-unreliablereceived" /><code>{"float UnreliableReceived { get; }"}</code> | <span className="api-desc">Average unreliable messages received per frame.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-reset" /><code>{"void Reset()"}</code> | <span className="api-desc">Clears all five averages in `ServerPacketReceiver`.</span> |

## Used in

Members of other types that take, return or hold a `ReceivingMetrics`:

<div className="api-used-in">

[`ServerProfilingData.Receiving`](/mod/game-api/types/global-s/serverprofilingdata#m-receiving).

</div>
