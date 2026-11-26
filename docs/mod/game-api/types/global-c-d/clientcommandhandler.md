---
title: "ClientCommandHandler"
description: "Server side handler for one remote console connection: reads framed commands from the socket on its own thread, runs console commands and streams log output..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClientCommandHandler

A **class** in `Root.Township`, the global namespace.

Server side handler for one remote console connection: reads framed commands from the socket on its own thread, runs console commands and streams log output back. Created by `ClientHandler`.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Nested types** [`ReceivedMessage`](/mod/game-api/types/global-c-d/clientcommandhandler-receivedmessage)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClientCommandHandler(Socket socketToClient, "}<Link to="/mod/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{" userInfo)"}</code> | <span className="api-desc">Creates a `ClientCommandHandler` from `socketToClient` and `userInfo`.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-commandhandlers" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-q-r/remoteconsolecommandtype">{"RemoteConsoleCommandType"}</Link>{", "}<Link to="/mod/game-api/types/global-e-h/handlecommand">{"HandleCommand"}</Link>{"> commandHandlers"}</code> | <span className="api-desc">Handlers by command type: console command and mod upload are added in the constructor.</span> |
| <Link id="m-currentmessage" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/clientcommandhandler-receivedmessage">{"ClientCommandHandler.ReceivedMessage"}</Link>{" currentMessage"}</code> | <span className="api-desc">The message being read from the socket, reused for each message.</span> |
| <Link id="m-hasclosed" /><code>{"private bool hasClosed"}</code> | <span className="api-desc">Set by `Close` to stop the receive loop.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-receivebuffer" /><code>{"private byte[] receiveBuffer"}</code> | <span className="api-desc">Buffer for raw socket reads.</span> |
| <Link id="m-receivethread" /><code>{"private Thread receiveThread"}</code> | <span className="api-desc">Background thread running `ReceiveConsoleInput`.</span> |
| <Link id="m-sendbuffer" /><code>{"private byte[] sendBuffer"}</code> | <span className="api-desc">Buffer for outgoing log messages.</span> |
| <Link id="m-sockettoclient" /><code>{"private Socket socketToClient"}</code> | <span className="api-desc">The remote console client's socket.</span> |
| <Link id="m-userinfo" /><code>{"private "}<Link to="/mod/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{" userInfo"}</code> | <span className="api-desc">The connected user and their permissions, used in logs.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-disconnected" /><code>{"event Action Disconnected"}</code> | <span className="api-desc">Raised when the remote console connection closes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addhandler" /><code>{"void AddHandler("}<Link to="/mod/game-api/types/global-q-r/remoteconsolecommandtype">{"RemoteConsoleCommandType"}</Link>{" type, "}<Link to="/mod/game-api/types/global-e-h/handlecommand">{"HandleCommand"}</Link>{" handler)"}</code> | <span className="api-desc">Registers the handler for a remote console command type.</span> |
| <Link id="m-close" /><code>{"void Close()"}</code> | <span className="api-desc">Stops receiving, unhooks the log stream and closes the socket.</span> |

<details className="api-private">
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-endsend" /><code>{"private void EndSend(IAsyncResult result)"}</code> | <span className="api-desc">Completes an async socket send.</span> |
| <Link id="m-handle" /><code>{"private void Handle(int size, byte messageType, byte[] data)"}</code> | <span className="api-desc">Looks up and runs the handler for a received message type; logs an error for unknown types.</span> |
| <Link id="m-handleconsolecommand" /><code>{"private void HandleConsoleCommand(byte[] buffer, int received)"}</code> | <span className="api-desc">Decodes a command string and runs it through `CommandService` on the main thread.</span> |
| <Link id="m-handleconsolelog" /><code>{"private void HandleConsoleLog(LogEventInfo logInfo)"}</code> | <span className="api-desc">Serialises a log event and sends it to the remote console.</span> |
| <Link id="m-handlemodupload" /><code>{"private void HandleModUpload(byte[] buffer, int received)"}</code> | <span className="api-desc">Writes uploaded C# text to `UploadedMod.cs` in the mods folder.</span> |
| <Link id="m-handlereceivedcommand" /><code>{"private void HandleReceivedCommand(byte[] data, int packetLength)"}</code> | <span className="api-desc">Feeds received bytes into the current message and processes each complete message.</span> |
| <Link id="m-receiveconsoleinput" /><code>{"private void ReceiveConsoleInput()"}</code> | <span className="api-desc">Receive loop run on `receiveThread`; ends when the socket closes, then raises `Disconnected`.</span> |
| <Link id="m-sendbuffer-2" /><code>{"private void SendBuffer("}<Link to="/mod/game-api/types/global-q-r/remoteconsoleresponsetype">{"RemoteConsoleResponseType"}</Link>{" type, int length)"}</code> | <span className="api-desc">Writes the length and response type header into `sendBuffer` and sends it.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ClientCommandHandler`:

<div className="api-used-in">

[`ClientCommandHandler.ReceivedMessage.handler`](/mod/game-api/types/global-c-d/clientcommandhandler-receivedmessage#m-handler), [`ClientCommandHandler.ReceivedMessage.ReceivedMessage`](/mod/game-api/types/global-c-d/clientcommandhandler-receivedmessage#m-ctor), [`ClientHandler.CommandHandler`](/mod/game-api/types/global-c-d/clienthandler#m-commandhandler).

</div>
