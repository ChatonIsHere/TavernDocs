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

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`GlobalSettings<ConnectionReceiveSettings>`](/mod/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`ConnectionReceiveSettings`](/mod/game-api/types/alta-networking/connectionreceivesettings), [`ConnectionReceiveSettings.Create`](/mod/game-api/types/alta-networking/connectionreceivesettings-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-networking/connectionreceivesettings-create)
- **Attributes** `GlobalSettings`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ConnectionReceiveSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maxprocessingallowance" /><code>{"private float maxProcessingAllowance"}</code> | <span className="api-desc">Timed receiver: the most milliseconds of processing allowance that can build up (default 5).</span> |
| <Link id="m-maxreliablemessageperframe" /><code>{"private int maxReliableMessagePerFrame"}</code> | <span className="api-desc">Counted receiver: reliable messages processed per frame before the rest are queued (default 20).</span> |
| <Link id="m-maxreliablemessageprocessingdurationms" /><code>{"private float maxReliableMessageProcessingDurationMs"}</code> | <span className="api-desc">Timed receiver: time budget in ms for reliable messages per frame (default 5).</span> |
| <Link id="m-minallowancetoprocess" /><code>{"private float minAllowanceToProcess"}</code> | <span className="api-desc">Timed receiver: packets are queued while the allowance is below this many ms (default 2).</span> |
| <Link id="m-minreliablemessageperframe" /><code>{"private int minReliableMessagePerFrame"}</code> | <span className="api-desc">Timed receiver: reliable messages to process per frame even when over budget (default 5).</span> |
| <Link id="m-processingpercent" /><code>{"private float processingPercent"}</code> | <span className="api-desc">Timed receiver: share of each frame's time added to the processing allowance (default 0.1).</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-maxprocessingallowance-2" /><code>{"float MaxProcessingAllowance { get; set; }"}</code> | <span className="api-desc">Most milliseconds of processing the timed receiver can save up.</span> |
| <Link id="m-maxreliablemessageprocessingdurationms-2" /><code>{"float MaxReliableMessageProcessingDurationMs { get; set; }"}</code> | <span className="api-desc">Not read anywhere else in this build.</span> |
| <Link id="m-maxreliablemessagesperframe" /><code>{"int MaxReliableMessagesPerFrame { get; }"}</code> | <span className="api-desc">The counted receiver queues messages after this many in a frame (default 20).</span> |
| <Link id="m-minallowancetoprocess-2" /><code>{"float MinAllowanceToProcess { get; set; }"}</code> | <span className="api-desc">The timed receiver queues messages while its allowance is below this many milliseconds.</span> |
| <Link id="m-minreliablemessageperframe-2" /><code>{"int MinReliableMessagePerFrame { get; set; }"}</code> | <span className="api-desc">Not read anywhere else in this build.</span> |
| <Link id="m-processingpercent-2" /><code>{"float ProcessingPercent { get; set; }"}</code> | <span className="api-desc">Share of each frame's time the timed receiver may spend processing (default 0.1).</span> |

## Used in

Members of other types that take, return or hold a `ConnectionReceiveSettings`:

<div className="api-used-in">

[`TimedQueuedConnectionReceiver.settings`](/mod/game-api/types/alta-networking/timedqueuedconnectionreceiver#m-settings).

</div>
