---
title: "MessageProcessor"
description: "static class MessageProcessor in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MessageProcessor

A **static class** in `Root.Township`, `Alta.Networking.Internal`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-messagelogger" /><code>{"static Logger MessageLogger"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-messagereader" /><code>{"private static "}<Link to="/game-api/types/assembly-other/streamreader">{"StreamReader"}</Link>{" messageReader"}</code> |  |
| <Link id="m-receivebuffer" /><code>{"private static readonly uint[] receiveBuffer"}</code> |  |
| <Link id="m-receivebuffersize" /><code>{"private const int receiveBufferSize"}</code> |  |
| <Link id="m-size" /><code>{"private static readonly ushort[] size"}</code> |  |
| <Link id="m-ushortbytesize" /><code>{"private const int UShortByteSize"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-processsinglemessagefromdata" /><code>{"static int ProcessSingleMessageFromData("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, ArraySegment<byte> data, "}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel, out "}<Link to="/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" messageType)"}</code> |  |
| <Link id="m-handlemessage" /><code>{"private static bool HandleMessage("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" type, "}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel)"}</code> |  |
