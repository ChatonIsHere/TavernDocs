---
title: "ClientCommandHandler.ReceivedMessage"
description: "Buffer that rebuilds one length-prefixed message from a ClientCommandHandler socket stream: a 4-byte size, a 1-byte type, then the payload."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClientCommandHandler.ReceivedMessage

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Buffer that rebuilds one length-prefixed message from a `ClientCommandHandler` socket stream: a 4-byte size, a 1-byte type, then the payload.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Nested in** [`ClientCommandHandler`](/game-api/types/global-c-d/clientcommandhandler)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ReceivedMessage("}<Link to="/game-api/types/global-c-d/clientcommandhandler">{"ClientCommandHandler"}</Link>{" handler)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-headersize" /><code>{"const int HeaderSize"}</code> | Bytes before the payload: 4 for the size and 1 for the type. |
| <Link id="m-maxmessagesize" /><code>{"const int MaxMessageSize"}</code> | Size of the receive buffer, 65535. |

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handler" /><code>{"private "}<Link to="/game-api/types/global-c-d/clientcommandhandler">{"ClientCommandHandler"}</Link>{" handler"}</code> | The `ClientCommandHandler` that gets finished messages. |
| <Link id="m-hasreadmessagesize" /><code>{"private bool hasReadMessageSize"}</code> | Whether the size header has been read. |
| <Link id="m-lefttoread" /><code>{"private int leftToRead"}</code> | Bytes still to come, including the type byte. |
| <Link id="m-messagesizesize" /><code>{"private const int MessageSizeSize"}</code> | Bytes in the size field, 4. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code>{"byte[] Data { get; set; }"}</code> | Receive buffer, 65535 bytes. |
| <Link id="m-index" /><code>{"int Index { get; set; }"}</code> | Write position in `Data`. |
| <Link id="m-isfullyread" /><code>{"bool IsFullyRead { get; set; }"}</code> | True once the whole message has arrived. |
| <Link id="m-messagesize" /><code>{"int MessageSize { get; set; }"}</code> | Payload size read from the header. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-process" /><code>{"void Process()"}</code> | Hands the type byte and payload to the handler, logs any exception to the console, then clears. |
| <Link id="m-read" /><code>{"int Read(byte[] data, int offset, int packetLength)"}</code> | Copies bytes from a received packet into the buffer. Returns how many were used, so the rest can start the next message. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"private void Clear()"}</code> | Resets the buffer for the next message. |
| <Link id="m-readmessagesize" /><code>{"private void ReadMessageSize()"}</code> | Reads the payload size from the first 4 bytes. |

</details>

## Used in

Members of other types that take, return or hold a `ReceivedMessage`:

[`ClientCommandHandler.currentMessage`](/game-api/types/global-c-d/clientcommandhandler#m-currentmessage).
