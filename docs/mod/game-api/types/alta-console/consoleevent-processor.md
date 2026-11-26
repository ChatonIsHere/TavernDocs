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

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Nested in** [`ConsoleEvent`](/mod/game-api/types/alta-console/consoleevent)
- **Inherits or implements** `IDisposable`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Processor()"}</code> | <span className="api-desc">Creates a `ConsoleEvent.Processor` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cancel" /><code>{"private CancellationTokenSource cancel"}</code> | <span className="api-desc">Token source that stops the background task.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | <span className="api-desc">Cancels the background task's token.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-processqueue" /><code>{"private static void ProcessQueue()"}</code> | <span className="api-desc">The background loop: raises `Invoked` for each queued message and logs the message rate every 10 seconds.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Processor`:

<div className="api-used-in">

[`ConsoleEvent.processor`](/mod/game-api/types/alta-console/consoleevent#m-processor).

</div>
