---
title: "ClientLogSender"
description: "class ClientLogSender in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClientLogSender

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Documented in** [Remote console](/game-api/console-and-utilities/remote-console)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ClientLogSender()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> |
| <Link id="m-logevents" /><code>{"private ConcurrentQueue<LogEventInfo> logEvents"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-logsender" /><code>{"private Socket logSender"}</code> |
| <Link id="m-receivedevent" /><code>{"private ManualResetEvent receivedEvent"}</code> |
| <Link id="m-sendbuffer" /><code>{"private byte[] sendBuffer"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-close" /><code>{"void Close()"}</code> |

<details>
<summary>4 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-handleconsolelog" /><code>{"private void HandleConsoleLog(LogEventInfo logEvent)"}</code> |
| <Link id="m-processlogs" /><code>{"private void ProcessLogs()"}</code> |
| <Link id="m-sendlogtoclient" /><code>{"private void SendLogToClient(LogEventInfo log)"}</code> |
| <Link id="m-startsendinglogs" /><code>{"private void StartSendingLogs(IAsyncResult result)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `ClientLogSender`:

[`ClientHandler.LogSender`](/game-api/types/global-c-d/clienthandler#m-logsender).
