---
title: "ConnectionReceiveSettings"
description: "Global settings for how a client spreads processing of received reliable messages over frames."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConnectionReceiveSettings

A **class** in `Root.Township`, `Alta.Networking.Internal`.

Global settings for how a client spreads processing of received reliable messages over frames. Servers always process straight away.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`GlobalSettings<ConnectionReceiveSettings>`](/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`ConnectionReceiveSettings`](/game-api/types/alta-networking/connectionreceivesettings), [`ConnectionReceiveSettings.Create`](/game-api/types/alta-networking/connectionreceivesettings-create)
- **Nested types** [`Create`](/game-api/types/alta-networking/connectionreceivesettings-create)
- **Attributes** `GlobalSettings`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ConnectionReceiveSettings()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-maxprocessingallowance" /><code>{"private float maxProcessingAllowance"}</code> |
| <Link id="m-maxreliablemessageperframe" /><code>{"private int maxReliableMessagePerFrame"}</code> |
| <Link id="m-maxreliablemessageprocessingdurationms" /><code>{"private float maxReliableMessageProcessingDurationMs"}</code> |
| <Link id="m-minallowancetoprocess" /><code>{"private float minAllowanceToProcess"}</code> |
| <Link id="m-minreliablemessageperframe" /><code>{"private int minReliableMessagePerFrame"}</code> |
| <Link id="m-processingpercent" /><code>{"private float processingPercent"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-maxprocessingallowance-2" /><code>{"float MaxProcessingAllowance { get; set; }"}</code> | Most milliseconds of processing the timed receiver can save up. |
| <Link id="m-maxreliablemessageprocessingdurationms-2" /><code>{"float MaxReliableMessageProcessingDurationMs { get; set; }"}</code> | Not read anywhere else in this build. |
| <Link id="m-maxreliablemessagesperframe" /><code>{"int MaxReliableMessagesPerFrame { get; }"}</code> | The counted receiver queues messages after this many in a frame (default 20). |
| <Link id="m-minallowancetoprocess-2" /><code>{"float MinAllowanceToProcess { get; set; }"}</code> | The timed receiver queues messages while its allowance is below this many milliseconds. |
| <Link id="m-minreliablemessageperframe-2" /><code>{"int MinReliableMessagePerFrame { get; set; }"}</code> | Not read anywhere else in this build. |
| <Link id="m-processingpercent-2" /><code>{"float ProcessingPercent { get; set; }"}</code> | Share of each frame's time the timed receiver may spend processing (default 0.1). |

## Used in

Members of other types that take, return or hold a `ConnectionReceiveSettings`:

[`TimedQueuedConnectionReceiver.settings`](/game-api/types/alta-networking/timedqueuedconnectionreceiver#m-settings).
