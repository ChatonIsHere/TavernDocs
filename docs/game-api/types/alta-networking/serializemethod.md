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

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SerializeMethod(object object, IntPtr method)"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, AsyncCallback callback, object object)"}</code> | Standard delegate method for async invoke. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Standard delegate method for async invoke. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Calls the handler. |

## Used in

Members of other types that take, return or hold a `SerializeMethod`:

[`BaseSync.reader`](/game-api/types/alta-networking/basesync#m-reader), [`BaseSync.writer`](/game-api/types/alta-networking/basesync#m-writer), [`ClientSync.OnClientRead`](/game-api/types/alta-networking/clientsync#m-onclientread), [`ClientSync.OnClientWrite`](/game-api/types/alta-networking/clientsync#m-onclientwrite), [`ClientSync.OnServerRead`](/game-api/types/alta-networking/clientsync#m-onserverread), [`ClientSync.OnServerReadAndRelay`](/game-api/types/alta-networking/clientsync#m-onserverreadandrelay), [`ClientSync.OnServerWrite`](/game-api/types/alta-networking/clientsync#m-onserverwrite), [`ControlledWriteSync.ControlledWriteSync`](/game-api/types/alta-networking/controlledwritesync#m-ctor), [`ControlledWriteSync.SendToChunks`](/game-api/types/alta-networking/controlledwritesync#m-sendtochunks), [`ControlledWriteSync.SendToPlayer`](/game-api/types/alta-networking/controlledwritesync#m-sendtoplayer), [`EntityMessageHandler.ClearHandler`](/game-api/types/alta-networking/entitymessagehandler#m-clearhandler), [`EntityMessageHandler.messageHandlers`](/game-api/types/alta-networking/entitymessagehandler#m-messagehandlers), [`EntityMessageHandler.SendToChunks`](/game-api/types/alta-networking/entitymessagehandler#m-sendtochunks), [`EntityMessageHandler.SendToPlayer`](/game-api/types/alta-networking/entitymessagehandler#m-sendtoplayer), [`EntityMessageHandler.SetHandler`](/game-api/types/alta-networking/entitymessagehandler#m-sethandler), [`InternalMessage.SendToPlayers`](/game-api/types/alta-networking/internalmessage#m-sendtoplayers), [`InternalMessage.SendToServer`](/game-api/types/alta-networking/internalmessage#m-sendtoserver), [`InternalMessage.writeMethod`](/game-api/types/alta-networking/internalmessage#m-writemethod), [`ISync.OnClientRead`](/game-api/types/alta-networking/isync#m-onclientread), [`ISync.OnClientWrite`](/game-api/types/alta-networking/isync#m-onclientwrite), [`ISync.OnServerRead`](/game-api/types/alta-networking/isync#m-onserverread), [`ISync.OnServerReadAndRelay`](/game-api/types/alta-networking/isync#m-onserverreadandrelay), [`ISync.OnServerWrite`](/game-api/types/alta-networking/isync#m-onserverwrite), [`MethodSync.MethodSync`](/game-api/types/alta-networking/methodsync#m-ctor), [`MethodSyncClass<T>.Handler`](/game-api/types/alta-networking/methodsyncclass-t#m-handler), [`MethodSyncStruct<T>.Handler`](/game-api/types/alta-networking/methodsyncstruct-t#m-handler), [`ServerSync.OnClientRead`](/game-api/types/alta-networking/serversync#m-onclientread), [`ServerSync.OnClientWrite`](/game-api/types/alta-networking/serversync#m-onclientwrite), [`ServerSync.OnServerRead`](/game-api/types/alta-networking/serversync#m-onserverread), [`ServerSync.OnServerReadAndRelay`](/game-api/types/alta-networking/serversync#m-onserverreadandrelay), [`ServerSync.OnServerWrite`](/game-api/types/alta-networking/serversync#m-onserverwrite), [`Sync.defaultHandler`](/game-api/types/alta-networking/sync#m-defaulthandler), [`Sync.Handler`](/game-api/types/alta-networking/sync#m-handler), [`Sync.Sync`](/game-api/types/alta-networking/sync#m-ctor-2), [`Sync<T>.Handler`](/game-api/types/alta-networking/sync-t#m-handler), [`ThrottledMethodSync.handler`](/game-api/types/alta-networking/throttledmethodsync#m-handler), [`ThrottledMethodSync.ThrottledMethodSync`](/game-api/types/alta-networking/throttledmethodsync#m-ctor), [`PlayerStateBase.baseSyncHandler`](/game-api/types/alta-player/playerstatebase#m-basesynchandler), [`PlayerStateBase.baseTransitionRequestHandler`](/game-api/types/alta-player/playerstatebase#m-basetransitionrequesthandler), [`ClassSerializer<T>.Handler`](/game-api/types/global-c-d/classserializer-t#m-handler).
