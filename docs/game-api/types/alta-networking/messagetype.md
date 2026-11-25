---
title: "MessageType"
description: "The kind of a connection-level network message: joining, spawning, entity updates, scene sync, voice and so on."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MessageType

An **enum** in `Root.Township`, `Alta.Networking`.

The kind of a connection-level network message: joining, spawning, entity updates, scene sync, voice and so on. Each has a handler on the receiving connection.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Derived types** [`MessageStatistics`](/game-api/types/alta-networking/messagestatistics)
- **Documented in** [Connection messages](/game-api/networking/messages#messagetype)

## Values

| Member | What it is |
| --- | --- |
| <Link id="m-clientisreadytospawn" /><code>{"ClientIsReadyToSpawn = 11"}</code> |  |
| <Link id="m-confirmservercontrol" /><code>{"ConfirmServerControl = 13"}</code> |  |
| <Link id="m-connectionpauserequest" /><code>{"ConnectionPauseRequest = 17"}</code> |  |
| <Link id="m-debug" /><code>{"Debug = 1"}</code> |  |
| <Link id="m-entitydestroyed" /><code>{"EntityDestroyed = 21"}</code> |  |
| <Link id="m-entityinternal" /><code>{"EntityInternal = 24"}</code> |  |
| <Link id="m-entitymissing" /><code>{"EntityMissing = 22"}</code> |  |
| <Link id="m-entitymoved" /><code>{"EntityMoved = 23"}</code> |  |
| <Link id="m-error" /><code>{"Error = 2"}</code> |  |
| <Link id="m-filecacherequest" /><code>{"FileCacheRequest = 26"}</code> |  |
| <Link id="m-initialentityserialize" /><code>{"InitialEntitySerialize = 29"}</code> |  |
| <Link id="m-none" /><code>{"None = 0"}</code> |  |
| <Link id="m-ping" /><code>{"Ping = 6"}</code> |  |
| <Link id="m-requestjoin" /><code>{"RequestJoin = 9"}</code> |  |
| <Link id="m-requestjoinresponse" /><code>{"RequestJoinResponse = 10"}</code> |  |
| <Link id="m-requestservercontrol" /><code>{"RequestServerControl = 12"}</code> |  |
| <Link id="m-sceneentitysync" /><code>{"SceneEntitySync = 25"}</code> |  |
| <Link id="m-sceneserialize" /><code>{"SceneSerialize = 28"}</code> |  |
| <Link id="m-servercontrolmessage" /><code>{"ServerControlMessage = 15"}</code> |  |
| <Link id="m-serverdiagnostics" /><code>{"ServerDiagnostics = 4"}</code> |  |
| <Link id="m-serverstatus" /><code>{"ServerStatus = 7"}</code> |  |
| <Link id="m-spawnentity" /><code>{"SpawnEntity = 20"}</code> |  |
| <Link id="m-voicechat" /><code>{"VoiceChat = 30"}</code> |  |

## Used in

Members of other types that take, return or hold a `MessageType`:

[`Connection.ClearHandler`](/game-api/types/alta-networking/connection#m-clearhandler), [`Connection.HasHandler`](/game-api/types/alta-networking/connection#m-hashandler), [`Connection.messageHandlers`](/game-api/types/alta-networking/connection#m-messagehandlers), [`Connection.Send`](/game-api/types/alta-networking/connection#m-send), [`Connection.SetHandler`](/game-api/types/alta-networking/connection#m-sethandler), [`Connection.TryGetMessageHandler`](/game-api/types/alta-networking/connection#m-trygetmessagehandler), [`FakeSocket.SendToAll`](/game-api/types/alta-networking/fakesocket#m-sendtoall), [`FakeSocket.SendToPlayers`](/game-api/types/alta-networking/fakesocket#m-sendtoplayers), [`MessageProcessor.HandleMessage`](/game-api/types/alta-networking/messageprocessor#m-handlemessage), [`MessageProcessor.ProcessSingleMessageFromData`](/game-api/types/alta-networking/messageprocessor#m-processsinglemessagefromdata), [`OutgoingPacketManager.Send`](/game-api/types/alta-networking/outgoingpacketmanager#m-send), [`OutgoingPacketManager.SendWithQueued`](/game-api/types/alta-networking/outgoingpacketmanager#m-sendwithqueued-2), [`OutgoingPacketManager.SerializeToWriter`](/game-api/types/alta-networking/outgoingpacketmanager#m-serializetowriter), [`OutgoingPacketManager.StartSerialize`](/game-api/types/alta-networking/outgoingpacketmanager#m-startserialize), [`OutgoingPacketManager.StopSerialize`](/game-api/types/alta-networking/outgoingpacketmanager#m-stopserialize), [`ISocket.SendToAll`](/game-api/types/alta-networking/isocket#m-sendtoall), [`ISocket.SendToPlayers`](/game-api/types/alta-networking/isocket#m-sendtoplayers), [`Socket.SendToAll`](/game-api/types/alta-networking/socket#m-sendtoall), [`Socket.SendToPlayers`](/game-api/types/alta-networking/socket#m-sendtoplayers), [`MessageStatistics.MessageStatistics`](/game-api/types/alta-networking/messagestatistics#m-ctor), [`MessageTypeStatistic.messageType`](/game-api/types/alta-networking/messagetypestatistic#m-messagetype), [`MessageTypeStatistic.MessageType`](/game-api/types/alta-networking/messagetypestatistic#m-messagetype-2).
