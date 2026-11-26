---
title: "SerializeMethod"
description: "Handler for a network message: gets the sending or receiving player and the stream, and both reads and writes the message with the same calls."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SerializeMethod

A **delegate** in `Root.Township`, `Alta.Networking`.

Handler for a network message: gets the sending or receiving player and the stream, and both reads and writes the message with the same calls. The generic version also gets a typed argument.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SerializeMethod(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, AsyncCallback callback, object object)"}</code> | Standard delegate method for async invoke. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Standard delegate method for async invoke. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Calls the handler. |

## Used in

Members of other types that take, return or hold a `SerializeMethod`:

[`BaseSync.reader`](/mod/game-api/types/alta-networking/basesync#m-reader), [`BaseSync.writer`](/mod/game-api/types/alta-networking/basesync#m-writer), [`ClientSync.OnClientRead`](/mod/game-api/types/alta-networking/clientsync#m-onclientread), [`ClientSync.OnClientWrite`](/mod/game-api/types/alta-networking/clientsync#m-onclientwrite), [`ClientSync.OnServerRead`](/mod/game-api/types/alta-networking/clientsync#m-onserverread), [`ClientSync.OnServerReadAndRelay`](/mod/game-api/types/alta-networking/clientsync#m-onserverreadandrelay), [`ClientSync.OnServerWrite`](/mod/game-api/types/alta-networking/clientsync#m-onserverwrite), [`ControlledWriteSync.ControlledWriteSync`](/mod/game-api/types/alta-networking/controlledwritesync#m-ctor), [`ControlledWriteSync.SendToChunks`](/mod/game-api/types/alta-networking/controlledwritesync#m-sendtochunks), [`ControlledWriteSync.SendToPlayer`](/mod/game-api/types/alta-networking/controlledwritesync#m-sendtoplayer), [`EntityMessageHandler.ClearHandler`](/mod/game-api/types/alta-networking/entitymessagehandler#m-clearhandler), [`EntityMessageHandler.messageHandlers`](/mod/game-api/types/alta-networking/entitymessagehandler#m-messagehandlers), [`EntityMessageHandler.SendToChunks`](/mod/game-api/types/alta-networking/entitymessagehandler#m-sendtochunks), [`EntityMessageHandler.SendToPlayer`](/mod/game-api/types/alta-networking/entitymessagehandler#m-sendtoplayer), [`EntityMessageHandler.SetHandler`](/mod/game-api/types/alta-networking/entitymessagehandler#m-sethandler), [`InternalMessage.SendToPlayers`](/mod/game-api/types/alta-networking/internalmessage#m-sendtoplayers), [`InternalMessage.SendToServer`](/mod/game-api/types/alta-networking/internalmessage#m-sendtoserver), [`InternalMessage.writeMethod`](/mod/game-api/types/alta-networking/internalmessage#m-writemethod), [`ISync.OnClientRead`](/mod/game-api/types/alta-networking/isync#m-onclientread), [`ISync.OnClientWrite`](/mod/game-api/types/alta-networking/isync#m-onclientwrite), [`ISync.OnServerRead`](/mod/game-api/types/alta-networking/isync#m-onserverread), [`ISync.OnServerReadAndRelay`](/mod/game-api/types/alta-networking/isync#m-onserverreadandrelay), [`ISync.OnServerWrite`](/mod/game-api/types/alta-networking/isync#m-onserverwrite), [`MethodSync.MethodSync`](/mod/game-api/types/alta-networking/methodsync#m-ctor), [`MethodSyncClass<T>.Handler`](/mod/game-api/types/alta-networking/methodsyncclass-t#m-handler), [`MethodSyncStruct<T>.Handler`](/mod/game-api/types/alta-networking/methodsyncstruct-t#m-handler), [`ServerSync.OnClientRead`](/mod/game-api/types/alta-networking/serversync#m-onclientread), [`ServerSync.OnClientWrite`](/mod/game-api/types/alta-networking/serversync#m-onclientwrite), [`ServerSync.OnServerRead`](/mod/game-api/types/alta-networking/serversync#m-onserverread), [`ServerSync.OnServerReadAndRelay`](/mod/game-api/types/alta-networking/serversync#m-onserverreadandrelay), [`ServerSync.OnServerWrite`](/mod/game-api/types/alta-networking/serversync#m-onserverwrite), [`Sync.defaultHandler`](/mod/game-api/types/alta-networking/sync#m-defaulthandler), [`Sync.Handler`](/mod/game-api/types/alta-networking/sync#m-handler), [`Sync.Sync`](/mod/game-api/types/alta-networking/sync#m-ctor-2), [`Sync<T>.Handler`](/mod/game-api/types/alta-networking/sync-t#m-handler), [`ThrottledMethodSync.handler`](/mod/game-api/types/alta-networking/throttledmethodsync#m-handler), [`ThrottledMethodSync.ThrottledMethodSync`](/mod/game-api/types/alta-networking/throttledmethodsync#m-ctor), [`PlayerStateBase.baseSyncHandler`](/mod/game-api/types/alta-player/playerstatebase#m-basesynchandler), [`PlayerStateBase.baseTransitionRequestHandler`](/mod/game-api/types/alta-player/playerstatebase#m-basetransitionrequesthandler), [`ClassSerializer<T>.Handler`](/mod/game-api/types/global-c-d/classserializer-t#m-handler).
