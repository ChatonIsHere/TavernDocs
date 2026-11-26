---
title: "ConsoleEvent.Processor"
description: "Background task that takes queued console event messages and raises each event's Invoked."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConsoleEvent.Processor

A **class** in `Root.Township`, `Alta.Console`.

Background task that takes queued console event messages and raises each event's `Invoked`. One shared instance runs for all events.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Nested in** [`ConsoleEvent`](/game-api/types/alta-console/consoleevent)
- **Inherits or implements** `IDisposable`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Processor()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cancel" /><code>{"private CancellationTokenSource cancel"}</code> | Token source that stops the background task. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | Cancels the background task's token. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-processqueue" /><code>{"private static void ProcessQueue()"}</code> | The background loop: raises `Invoked` for each queued message and logs the message rate every 10 seconds. |

</details>

## Used in

Members of other types that take, return or hold a `Processor`:

[`ConsoleEvent.processor`](/game-api/types/alta-console/consoleevent#m-processor).
