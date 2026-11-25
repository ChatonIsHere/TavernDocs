---
title: "SceneSerializer"
description: "class SceneSerializer in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SceneSerializer

A **class** in `Root.Township`, `Alta.Networking.Internal`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SceneSerializer("}<Link to="/game-api/types/alta-networking/inetworksceneinternal">{"INetworkSceneInternal"}</Link>{" networkScene, "}<Link to="/game-api/types/alta-networking/entitymanager">{"EntityManager"}</Link>{" entityManager)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-messagesperconnection" /><code>{"static "}<Link to="/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" MessagesPerConnection"}</code> |  |
| <Link id="m-serializationtimems" /><code>{"static "}<Link to="/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" SerializationTimeMs"}</code> |  |
| <Link id="m-serializetoconnectionsms" /><code>{"static "}<Link to="/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" SerializeToConnectionsMs"}</code> |  |
| <Link id="m-writingentity" /><code>{"static "}<Link to="/game-api/types/alta-networking/serializingentityhandler">{"SerializingEntityHandler"}</Link>{" WritingEntity"}</code> |  |
| <Link id="m-connections" /><code>{"private List<"}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{"> connections"}</code> |  |
| <Link id="m-entitymanager" /><code>{"private "}<Link to="/game-api/types/alta-networking/entitymanager">{"EntityManager"}</Link>{" entityManager"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-networkscene" /><code>{"private "}<Link to="/game-api/types/alta-networking/inetworksceneinternal">{"INetworkSceneInternal"}</Link>{" networkScene"}</code> |  |
| <Link id="m-serializeframeindex" /><code>{"private int serializeFrameIndex"}</code> |  |
| <Link id="m-timer" /><code>{"private static Stopwatch timer"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-serializationchannel" /><code><Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" SerializationChannel { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialsyncentities" /><code>{"void InitialSyncEntities("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" target)"}</code> |  |
| <Link id="m-prepareserializeentities" /><code>{"void PrepareSerializeEntities(bool isServer)"}</code> |  |
| <Link id="m-sendserialized" /><code>{"void SendSerialized("}<Link to="/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" socket)"}</code> |  |
| <Link id="m-serializeread" /><code>{"void SerializeRead("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/assembly-other/streamreader">{"StreamReader"}</Link>{" stream)"}</code> |  |
| <Link id="m-serializewrite" /><code>{"void SerializeWrite("}<Link to="/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" stream, "}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, ref int startIndex)"}</code> |  |
| <Link id="m-updateentitydata" /><code>{"private void UpdateEntityData(IEnumerable<"}<Link to="/game-api/types/alta-networking/entityserializer">{"EntitySerializer"}</Link>{"> serializers)"}</code> |  |

## Used in

Members of other types that take, return or hold a `SceneSerializer`:

[`INetworkSceneInternal.SceneSerializer`](/game-api/types/alta-networking/inetworksceneinternal#m-sceneserializer), [`NetworkScene.Alta.Networking.INetworkSceneInternal.SceneSerializer`](/game-api/types/alta-networking/networkscene#m-alta-networking-inetworksceneinternal-sceneserializer), [`NetworkScene.sceneSerializer`](/game-api/types/alta-networking/networkscene#m-sceneserializer), [`LocalNetworkScene.Alta.Networking.INetworkSceneInternal.SceneSerializer`](/game-api/types/global-i-l/localnetworkscene#m-alta-networking-inetworksceneinternal-sceneserializer).
