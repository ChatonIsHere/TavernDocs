---
title: "ClientCommandHandler.ReceivedMessage"
description: "class ClientCommandHandler.ReceivedMessage in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClientCommandHandler.ReceivedMessage

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Nested in** [`ClientCommandHandler`](/game-api/types/global-c-d/clientcommandhandler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ReceivedMessage("}<Link to="/game-api/types/global-c-d/clientcommandhandler">{"ClientCommandHandler"}</Link>{" handler)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-headersize" /><code>{"const int HeaderSize"}</code> |  |
| <Link id="m-maxmessagesize" /><code>{"const int MaxMessageSize"}</code> |  |
| <Link id="m-handler" /><code>{"private "}<Link to="/game-api/types/global-c-d/clientcommandhandler">{"ClientCommandHandler"}</Link>{" handler"}</code> |  |
| <Link id="m-hasreadmessagesize" /><code>{"private bool hasReadMessageSize"}</code> |  |
| <Link id="m-lefttoread" /><code>{"private int leftToRead"}</code> |  |
| <Link id="m-messagesizesize" /><code>{"private const int MessageSizeSize"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code>{"byte[] Data { get; set; }"}</code> |  |
| <Link id="m-index" /><code>{"int Index { get; set; }"}</code> |  |
| <Link id="m-isfullyread" /><code>{"bool IsFullyRead { get; set; }"}</code> |  |
| <Link id="m-messagesize" /><code>{"int MessageSize { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-process" /><code>{"void Process()"}</code> |  |
| <Link id="m-read" /><code>{"int Read(byte[] data, int offset, int packetLength)"}</code> |  |
| <Link id="m-clear" /><code>{"private void Clear()"}</code> |  |
| <Link id="m-readmessagesize" /><code>{"private void ReadMessageSize()"}</code> |  |

## Used in

Members of other types that take, return or hold a `ReceivedMessage`:

[`ClientCommandHandler.currentMessage`](/game-api/types/global-c-d/clientcommandhandler#m-currentmessage).
