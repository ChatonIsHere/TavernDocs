---
title: "ClientCommandHandler"
description: "class ClientCommandHandler in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClientCommandHandler

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Nested types** [`ReceivedMessage`](/game-api/types/global-c-d/clientcommandhandler-receivedmessage)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClientCommandHandler(Socket socketToClient, "}<Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{" userInfo)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-commandhandlers" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-q-r/remoteconsolecommandtype">{"RemoteConsoleCommandType"}</Link>{", "}<Link to="/game-api/types/global-e-h/handlecommand">{"HandleCommand"}</Link>{"> commandHandlers"}</code> |  |
| <Link id="m-currentmessage" /><code>{"private "}<Link to="/game-api/types/global-c-d/clientcommandhandler-receivedmessage">{"ClientCommandHandler.ReceivedMessage"}</Link>{" currentMessage"}</code> |  |
| <Link id="m-hasclosed" /><code>{"private bool hasClosed"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-receivebuffer" /><code>{"private byte[] receiveBuffer"}</code> |  |
| <Link id="m-receivethread" /><code>{"private Thread receiveThread"}</code> |  |
| <Link id="m-sendbuffer" /><code>{"private byte[] sendBuffer"}</code> |  |
| <Link id="m-sockettoclient" /><code>{"private Socket socketToClient"}</code> |  |
| <Link id="m-userinfo" /><code>{"private "}<Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{" userInfo"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-disconnected" /><code>{"event Action Disconnected"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addhandler" /><code>{"void AddHandler("}<Link to="/game-api/types/global-q-r/remoteconsolecommandtype">{"RemoteConsoleCommandType"}</Link>{" type, "}<Link to="/game-api/types/global-e-h/handlecommand">{"HandleCommand"}</Link>{" handler)"}</code> |  |
| <Link id="m-close" /><code>{"void Close()"}</code> |  |
| <Link id="m-endsend" /><code>{"private void EndSend(IAsyncResult result)"}</code> |  |
| <Link id="m-handle" /><code>{"private void Handle(int size, byte messageType, byte[] data)"}</code> |  |
| <Link id="m-handleconsolecommand" /><code>{"private void HandleConsoleCommand(byte[] buffer, int received)"}</code> |  |
| <Link id="m-handleconsolelog" /><code>{"private void HandleConsoleLog(LogEventInfo logInfo)"}</code> |  |
| <Link id="m-handlemodupload" /><code>{"private void HandleModUpload(byte[] buffer, int received)"}</code> |  |
| <Link id="m-handlereceivedcommand" /><code>{"private void HandleReceivedCommand(byte[] data, int packetLength)"}</code> |  |
| <Link id="m-receiveconsoleinput" /><code>{"private void ReceiveConsoleInput()"}</code> |  |
| <Link id="m-sendbuffer-2" /><code>{"private void SendBuffer("}<Link to="/game-api/types/global-q-r/remoteconsoleresponsetype">{"RemoteConsoleResponseType"}</Link>{" type, int length)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ClientCommandHandler`:

[`ClientCommandHandler.ReceivedMessage.handler`](/game-api/types/global-c-d/clientcommandhandler-receivedmessage#m-handler), [`ClientCommandHandler.ReceivedMessage.ReceivedMessage`](/game-api/types/global-c-d/clientcommandhandler-receivedmessage#m-ctor), [`ClientHandler.CommandHandler`](/game-api/types/global-c-d/clienthandler#m-commandhandler).
