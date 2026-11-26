---
title: "ClientCommandHandler"
description: "Server side handler for one remote console connection: reads framed commands from the socket on its own thread, runs console commands and streams log output..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClientCommandHandler

A **class** in `Root.Township`, no namespace.

Server side handler for one remote console connection: reads framed commands from the socket on its own thread, runs console commands and streams log output back. Created by `ClientHandler`.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Nested types** [`ReceivedMessage`](/game-api/types/global-c-d/clientcommandhandler-receivedmessage)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClientCommandHandler(Socket socketToClient, "}<Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{" userInfo)"}</code> | Creates a `ClientCommandHandler` from `socketToClient` and `userInfo`. |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-commandhandlers" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-q-r/remoteconsolecommandtype">{"RemoteConsoleCommandType"}</Link>{", "}<Link to="/game-api/types/global-e-h/handlecommand">{"HandleCommand"}</Link>{"> commandHandlers"}</code> | Handlers by command type: console command and mod upload are added in the constructor. |
| <Link id="m-currentmessage" /><code>{"private "}<Link to="/game-api/types/global-c-d/clientcommandhandler-receivedmessage">{"ClientCommandHandler.ReceivedMessage"}</Link>{" currentMessage"}</code> | The message being read from the socket, reused for each message. |
| <Link id="m-hasclosed" /><code>{"private bool hasClosed"}</code> | Set by `Close` to stop the receive loop. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-receivebuffer" /><code>{"private byte[] receiveBuffer"}</code> | Buffer for raw socket reads. |
| <Link id="m-receivethread" /><code>{"private Thread receiveThread"}</code> | Background thread running `ReceiveConsoleInput`. |
| <Link id="m-sendbuffer" /><code>{"private byte[] sendBuffer"}</code> | Buffer for outgoing log messages. |
| <Link id="m-sockettoclient" /><code>{"private Socket socketToClient"}</code> | The remote console client's socket. |
| <Link id="m-userinfo" /><code>{"private "}<Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{" userInfo"}</code> | The connected user and their permissions, used in logs. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-disconnected" /><code>{"event Action Disconnected"}</code> | Raised when the remote console connection closes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addhandler" /><code>{"void AddHandler("}<Link to="/game-api/types/global-q-r/remoteconsolecommandtype">{"RemoteConsoleCommandType"}</Link>{" type, "}<Link to="/game-api/types/global-e-h/handlecommand">{"HandleCommand"}</Link>{" handler)"}</code> | Registers the handler for a remote console command type. |
| <Link id="m-close" /><code>{"void Close()"}</code> | Stops receiving, unhooks the log stream and closes the socket. |

<details>
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-endsend" /><code>{"private void EndSend(IAsyncResult result)"}</code> | Completes an async socket send. |
| <Link id="m-handle" /><code>{"private void Handle(int size, byte messageType, byte[] data)"}</code> | Looks up and runs the handler for a received message type; logs an error for unknown types. |
| <Link id="m-handleconsolecommand" /><code>{"private void HandleConsoleCommand(byte[] buffer, int received)"}</code> | Decodes a command string and runs it through `CommandService` on the main thread. |
| <Link id="m-handleconsolelog" /><code>{"private void HandleConsoleLog(LogEventInfo logInfo)"}</code> | Serialises a log event and sends it to the remote console. |
| <Link id="m-handlemodupload" /><code>{"private void HandleModUpload(byte[] buffer, int received)"}</code> | Writes uploaded C# text to `UploadedMod.cs` in the mods folder. |
| <Link id="m-handlereceivedcommand" /><code>{"private void HandleReceivedCommand(byte[] data, int packetLength)"}</code> | Feeds received bytes into the current message and processes each complete message. |
| <Link id="m-receiveconsoleinput" /><code>{"private void ReceiveConsoleInput()"}</code> | Receive loop run on `receiveThread`; ends when the socket closes, then raises `Disconnected`. |
| <Link id="m-sendbuffer-2" /><code>{"private void SendBuffer("}<Link to="/game-api/types/global-q-r/remoteconsoleresponsetype">{"RemoteConsoleResponseType"}</Link>{" type, int length)"}</code> | Writes the length and response type header into `sendBuffer` and sends it. |

</details>

## Used in

Members of other types that take, return or hold a `ClientCommandHandler`:

[`ClientCommandHandler.ReceivedMessage.handler`](/game-api/types/global-c-d/clientcommandhandler-receivedmessage#m-handler), [`ClientCommandHandler.ReceivedMessage.ReceivedMessage`](/game-api/types/global-c-d/clientcommandhandler-receivedmessage#m-ctor), [`ClientHandler.CommandHandler`](/game-api/types/global-c-d/clienthandler#m-commandhandler).
