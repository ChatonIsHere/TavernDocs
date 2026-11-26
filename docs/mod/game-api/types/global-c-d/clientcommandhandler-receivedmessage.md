---
title: "ClientCommandHandler.ReceivedMessage"
description: "Buffer that rebuilds one length-prefixed message from a ClientCommandHandler socket stream: a 4-byte size, a 1-byte type, then the payload."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClientCommandHandler.ReceivedMessage

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Buffer that rebuilds one length-prefixed message from a `ClientCommandHandler` socket stream: a 4-byte size, a 1-byte type, then the payload.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Nested in** [`ClientCommandHandler`](/mod/game-api/types/global-c-d/clientcommandhandler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ReceivedMessage("}<Link to="/mod/game-api/types/global-c-d/clientcommandhandler">{"ClientCommandHandler"}</Link>{" handler)"}</code> | <span className="api-desc">Creates a `ClientCommandHandler.ReceivedMessage` from `handler`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-headersize" /><code>{"const int HeaderSize"}</code> | <span className="api-desc">Bytes before the payload: 4 for the size and 1 for the type.</span> |
| <Link id="m-maxmessagesize" /><code>{"const int MaxMessageSize"}</code> | <span className="api-desc">Size of the receive buffer, 65535.</span> |

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handler" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/clientcommandhandler">{"ClientCommandHandler"}</Link>{" handler"}</code> | <span className="api-desc">The `ClientCommandHandler` that gets finished messages.</span> |
| <Link id="m-hasreadmessagesize" /><code>{"private bool hasReadMessageSize"}</code> | <span className="api-desc">Whether the size header has been read.</span> |
| <Link id="m-lefttoread" /><code>{"private int leftToRead"}</code> | <span className="api-desc">Bytes still to come, including the type byte.</span> |
| <Link id="m-messagesizesize" /><code>{"private const int MessageSizeSize"}</code> | <span className="api-desc">Bytes in the size field, 4.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code>{"byte[] Data { get; set; }"}</code> | <span className="api-desc">Receive buffer, 65535 bytes.</span> |
| <Link id="m-index" /><code>{"int Index { get; set; }"}</code> | <span className="api-desc">Write position in `Data`.</span> |
| <Link id="m-isfullyread" /><code>{"bool IsFullyRead { get; set; }"}</code> | <span className="api-desc">True once the whole message has arrived.</span> |
| <Link id="m-messagesize" /><code>{"int MessageSize { get; set; }"}</code> | <span className="api-desc">Payload size read from the header.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-process" /><code>{"void Process()"}</code> | <span className="api-desc">Hands the type byte and payload to the handler, logs any exception to the console, then clears.</span> |
| <Link id="m-read" /><code>{"int Read(byte[] data, int offset, int packetLength)"}</code> | <span className="api-desc">Copies bytes from a received packet into the buffer. Returns how many were used, so the rest can start the next message.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"private void Clear()"}</code> | <span className="api-desc">Resets the buffer for the next message.</span> |
| <Link id="m-readmessagesize" /><code>{"private void ReadMessageSize()"}</code> | <span className="api-desc">Reads the payload size from the first 4 bytes.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ReceivedMessage`:

<div className="api-used-in">

[`ClientCommandHandler.currentMessage`](/mod/game-api/types/global-c-d/clientcommandhandler#m-currentmessage).

</div>
