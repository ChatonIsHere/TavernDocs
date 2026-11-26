---
title: "ClientLogSender"
description: "Streams the server's console log to a remote console client over TCP."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClientLogSender

A **class** in `Root.Township`, no namespace.

Streams the server's console log to a remote console client over TCP. One is made per `ClientHandler` connection. Server.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Documented in** [Remote console](/game-api/console-and-utilities/remote-console)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ClientLogSender()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> | False once `Close` is called, which ends the send thread. |
| <Link id="m-logevents" /><code>{"private ConcurrentQueue<LogEventInfo> logEvents"}</code> | Thread-safe queue of log events waiting to be sent. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-logsender" /><code>{"private Socket logSender"}</code> | The accepted socket logs are sent on. The listener is on port 1759. |
| <Link id="m-receivedevent" /><code>{"private ManualResetEvent receivedEvent"}</code> | Signal that wakes the send thread when a log is queued. |
| <Link id="m-sendbuffer" /><code>{"private byte[] sendBuffer"}</code> | 64 KB buffer each log event is serialized into before sending. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-close" /><code>{"void Close()"}</code> | Stops the send thread, unhooks from the console log target and closes the socket. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handleconsolelog" /><code>{"private void HandleConsoleLog(LogEventInfo logEvent)"}</code> | Queues a log event from `ServerConsoleLogTarget.LogSentRaw` and wakes the send thread. |
| <Link id="m-processlogs" /><code>{"private void ProcessLogs()"}</code> | Background thread loop that waits for queued log events and sends them all. |
| <Link id="m-sendlogtoclient" /><code>{"private void SendLogToClient(LogEventInfo log)"}</code> | Serializes one log event and sends it on the accepted socket. Errors are ignored. |
| <Link id="m-startsendinglogs" /><code>{"private void StartSendingLogs(IAsyncResult result)"}</code> | Accept callback: keeps the accepted socket and closes the listener. |

</details>

## Used in

Members of other types that take, return or hold a `ClientLogSender`:

[`ClientHandler.LogSender`](/game-api/types/global-c-d/clienthandler#m-logsender).
