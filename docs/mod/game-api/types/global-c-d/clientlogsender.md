---
title: "ClientLogSender"
description: "Streams the server's console log to a remote console client over TCP."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClientLogSender

A **class** in `Root.Township`, the global namespace.

Streams the server's console log to a remote console client over TCP. One is made per `ClientHandler` connection. Server.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Documented in** [Remote console](/mod/game-api/console-and-utilities/remote-console)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClientLogSender()"}</code> | <span className="api-desc">Creates a `ClientLogSender` with default values.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> | <span className="api-desc">False once `Close` is called, which ends the send thread.</span> |
| <Link id="m-logevents" /><code>{"private ConcurrentQueue<LogEventInfo> logEvents"}</code> | <span className="api-desc">Thread-safe queue of log events waiting to be sent.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-logsender" /><code>{"private Socket logSender"}</code> | <span className="api-desc">The accepted socket logs are sent on. The listener is on port 1759.</span> |
| <Link id="m-receivedevent" /><code>{"private ManualResetEvent receivedEvent"}</code> | <span className="api-desc">Signal that wakes the send thread when a log is queued.</span> |
| <Link id="m-sendbuffer" /><code>{"private byte[] sendBuffer"}</code> | <span className="api-desc">64 KB buffer each log event is serialized into before sending.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-close" /><code>{"void Close()"}</code> | <span className="api-desc">Stops the send thread, unhooks from the console log target and closes the socket.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handleconsolelog" /><code>{"private void HandleConsoleLog(LogEventInfo logEvent)"}</code> | <span className="api-desc">Queues a log event from `ServerConsoleLogTarget.LogSentRaw` and wakes the send thread.</span> |
| <Link id="m-processlogs" /><code>{"private void ProcessLogs()"}</code> | <span className="api-desc">Background thread loop that waits for queued log events and sends them all.</span> |
| <Link id="m-sendlogtoclient" /><code>{"private void SendLogToClient(LogEventInfo log)"}</code> | <span className="api-desc">Serializes one log event and sends it on the accepted socket. Errors are ignored.</span> |
| <Link id="m-startsendinglogs" /><code>{"private void StartSendingLogs(IAsyncResult result)"}</code> | <span className="api-desc">Accept callback: keeps the accepted socket and closes the listener.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ClientLogSender`:

<div className="api-used-in">

[`ClientHandler.LogSender`](/mod/game-api/types/global-c-d/clienthandler#m-logsender).

</div>
