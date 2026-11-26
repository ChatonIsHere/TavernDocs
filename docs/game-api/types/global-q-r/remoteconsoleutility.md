---
title: "RemoteConsoleUtility"
description: "Packs NLog log events into byte buffers for sending to a remote console; used by ClientCommandHandler and ClientLogSender."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RemoteConsoleUtility

A **static class** in `Root.Township`, no namespace.

Packs NLog log events into byte buffers for sending to a remote console; used by `ClientCommandHandler` and `ClientLogSender`.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for oversized messages. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serializelogevent" /><code>{"static int SerializeLogEvent(LogEventInfo log, byte[] buffer, int offset)"}</code> | Writes a 2-byte length, timestamp ticks, level and UTF-8 message into the buffer. Returns bytes written, or -1 if the message is too long. |
