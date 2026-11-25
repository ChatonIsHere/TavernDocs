---
title: "ConnectionReceiveSettings"
description: "class ConnectionReceiveSettings in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConnectionReceiveSettings

A **class** in `Root.Township`, `Alta.Networking.Internal`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`GlobalSettings<ConnectionReceiveSettings>`](/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`ConnectionReceiveSettings`](/game-api/types/alta-networking/connectionreceivesettings), [`ConnectionReceiveSettings.Create`](/game-api/types/alta-networking/connectionreceivesettings-create)
- **Nested types** [`Create`](/game-api/types/alta-networking/connectionreceivesettings-create)
- **Attributes** `GlobalSettings`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ConnectionReceiveSettings()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-maxprocessingallowance" /><code>{"private float maxProcessingAllowance"}</code> |  |
| <Link id="m-maxreliablemessageperframe" /><code>{"private int maxReliableMessagePerFrame"}</code> |  |
| <Link id="m-maxreliablemessageprocessingdurationms" /><code>{"private float maxReliableMessageProcessingDurationMs"}</code> |  |
| <Link id="m-minallowancetoprocess" /><code>{"private float minAllowanceToProcess"}</code> |  |
| <Link id="m-minreliablemessageperframe" /><code>{"private int minReliableMessagePerFrame"}</code> |  |
| <Link id="m-processingpercent" /><code>{"private float processingPercent"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-maxprocessingallowance-2" /><code>{"float MaxProcessingAllowance { get; set; }"}</code> |  |
| <Link id="m-maxreliablemessageprocessingdurationms-2" /><code>{"float MaxReliableMessageProcessingDurationMs { get; set; }"}</code> |  |
| <Link id="m-maxreliablemessagesperframe" /><code>{"int MaxReliableMessagesPerFrame { get; }"}</code> |  |
| <Link id="m-minallowancetoprocess-2" /><code>{"float MinAllowanceToProcess { get; set; }"}</code> |  |
| <Link id="m-minreliablemessageperframe-2" /><code>{"int MinReliableMessagePerFrame { get; set; }"}</code> |  |
| <Link id="m-processingpercent-2" /><code>{"float ProcessingPercent { get; set; }"}</code> |  |

## Used in

Members of other types that take, return or hold a `ConnectionReceiveSettings`:

[`TimedQueuedConnectionReceiver.settings`](/game-api/types/alta-networking/timedqueuedconnectionreceiver#m-settings).
