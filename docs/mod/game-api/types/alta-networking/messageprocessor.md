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

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-messagelogger" /><code>{"static Logger MessageLogger"}</code> | <span className="api-desc">The `MessageDebug` logger that traces every message read and written.</span> |

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for errors.</span> |
| <Link id="m-messagereader" /><code>{"private static "}<Link to="/mod/game-api/types/assembly-other/streamreader">{"StreamReader"}</Link>{" messageReader"}</code> | <span className="api-desc">Shared reader over `receiveBuffer`.</span> |
| <Link id="m-receivebuffer" /><code>{"private static readonly uint[] receiveBuffer"}</code> | <span className="api-desc">Shared buffer the message bytes are copied into before reading.</span> |
| <Link id="m-receivebuffersize" /><code>{"private const int receiveBufferSize"}</code> | <span className="api-desc">Length of `receiveBuffer` (2048 entries).</span> |
| <Link id="m-size" /><code>{"private static readonly ushort[] size"}</code> | <span className="api-desc">One-entry buffer the length prefix is copied into.</span> |
| <Link id="m-ushortbytesize" /><code>{"private const int UShortByteSize"}</code> | <span className="api-desc">Size of the length prefix, 2 bytes.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-processsinglemessagefromdata" /><code>{"static int ProcessSingleMessageFromData("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, ArraySegment<byte> data, "}<Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel, out "}<Link to="/mod/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" messageType)"}</code> | <span className="api-desc">Reads a 2 byte length, then one message with a 5 bit type, handles it and returns the bytes used.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handlemessage" /><code>{"private static bool HandleMessage("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" type, "}<Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel)"}</code> | <span className="api-desc">Finds the connection's handler for the message type and runs it, logging unsupported types and handler exceptions.</span> |

</details>
