---
title: "MessageProcessor"
description: "Reads single messages out of received packet data and runs the connection's handler for each message type."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MessageProcessor

A **static class** in `Root.Township`, `Alta.Networking.Internal`.

Reads single messages out of received packet data and runs the connection's handler for each message type. Used by the connection receivers on both sides.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-messagelogger" /><code>{"static Logger MessageLogger"}</code> | The `MessageDebug` logger that traces every message read and written. |

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for errors. |
| <Link id="m-messagereader" /><code>{"private static "}<Link to="/game-api/types/assembly-other/streamreader">{"StreamReader"}</Link>{" messageReader"}</code> | Shared reader over `receiveBuffer`. |
| <Link id="m-receivebuffer" /><code>{"private static readonly uint[] receiveBuffer"}</code> | Shared buffer the message bytes are copied into before reading. |
| <Link id="m-receivebuffersize" /><code>{"private const int receiveBufferSize"}</code> | Length of `receiveBuffer` (2048 entries). |
| <Link id="m-size" /><code>{"private static readonly ushort[] size"}</code> | One-entry buffer the length prefix is copied into. |
| <Link id="m-ushortbytesize" /><code>{"private const int UShortByteSize"}</code> | Size of the length prefix, 2 bytes. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-processsinglemessagefromdata" /><code>{"static int ProcessSingleMessageFromData("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, ArraySegment<byte> data, "}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel, out "}<Link to="/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" messageType)"}</code> | Reads a 2 byte length, then one message with a 5 bit type, handles it and returns the bytes used. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handlemessage" /><code>{"private static bool HandleMessage("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" type, "}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel)"}</code> | Finds the connection's handler for the message type and runs it, logging unsupported types and handler exceptions. |

</details>
