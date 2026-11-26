---
title: "ReceivingMetrics"
description: "Old read-only view of the incoming packet averages kept by ServerPacketReceiver, marked obsolete in favour of the new analytics system."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ReceivingMetrics

A **class** in `Root.Township`, no namespace.

Old read-only view of the incoming packet averages kept by `ServerPacketReceiver`, marked obsolete in favour of the new analytics system.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Attributes** `Obsolete`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ReceivingMetrics()"}</code> | Creates a `ReceivingMetrics` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-networktransportms" /><code>{"float NetworkTransportMs { get; }"}</code> | Average milliseconds spent receiving packets from the transport. |
| <Link id="m-reliablems" /><code>{"float ReliableMs { get; }"}</code> | Average milliseconds spent processing reliable messages. |
| <Link id="m-reliablereceived" /><code>{"float ReliableReceived { get; }"}</code> | Average reliable messages received per frame. |
| <Link id="m-unreliablems" /><code>{"float UnreliableMs { get; }"}</code> | Average milliseconds spent processing unreliable messages. |
| <Link id="m-unreliablereceived" /><code>{"float UnreliableReceived { get; }"}</code> | Average unreliable messages received per frame. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-reset" /><code>{"void Reset()"}</code> | Clears all five averages in `ServerPacketReceiver`. |

## Used in

Members of other types that take, return or hold a `ReceivingMetrics`:

[`ServerProfilingData.Receiving`](/game-api/types/global-s/serverprofilingdata#m-receiving).
