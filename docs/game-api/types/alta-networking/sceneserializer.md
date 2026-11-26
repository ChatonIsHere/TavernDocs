---
title: "SceneSerializer"
description: "Sends and reads the regular state updates of every EntitySerializer in a network scene, packing as many as fit into each SceneSerialize message."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SceneSerializer

A **class** in `Root.Township`, `Alta.Networking.Internal`.

Sends and reads the regular state updates of every `EntitySerializer` in a network scene, packing as many as fit into each `SceneSerialize` message. The server writes per connection.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SceneSerializer("}<Link to="/game-api/types/alta-networking/inetworksceneinternal">{"INetworkSceneInternal"}</Link>{" networkScene, "}<Link to="/game-api/types/alta-networking/entitymanager">{"EntityManager"}</Link>{" entityManager)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-messagesperconnection" /><code>{"static "}<Link to="/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" MessagesPerConnection"}</code> | Running average of messages sent per connection per pass. |
| <Link id="m-serializationtimems" /><code>{"static "}<Link to="/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" SerializationTimeMs"}</code> | Running average time spent preparing entity data. |
| <Link id="m-serializetoconnectionsms" /><code>{"static "}<Link to="/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" SerializeToConnectionsMs"}</code> | Running average time to write and send to all connections. |
| <Link id="m-writingentity" /><code>{"static "}<Link to="/game-api/types/alta-networking/serializingentityhandler">{"SerializingEntityHandler"}</Link>{" WritingEntity"}</code> | Static debug hook called for every entity written. |

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-connections" /><code>{"private List<"}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{"> connections"}</code> | Reused list of the connections to send to this pass. |
| <Link id="m-entitymanager" /><code>{"private "}<Link to="/game-api/types/alta-networking/entitymanager">{"EntityManager"}</Link>{" entityManager"}</code> | Where the serialized entities come from. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-networkscene" /><code>{"private "}<Link to="/game-api/types/alta-networking/inetworksceneinternal">{"INetworkSceneInternal"}</Link>{" networkScene"}</code> | The scene being serialized. |
| <Link id="m-serializeframeindex" /><code>{"private int serializeFrameIndex"}</code> | Counter that staggers which entities get an on frame. |
| <Link id="m-timer" /><code>{"private static Stopwatch timer"}</code> | Stopwatch for the serialization timing stats. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-serializationchannel" /><code><Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" SerializationChannel { get; set; }"}</code> | Channel the serialize messages go out on. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialsyncentities" /><code>{"void InitialSyncEntities("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" target)"}</code> | Server: sends a joining player a sync message for every embedded scene entity, then destroy messages for missing ones. |
| <Link id="m-prepareserializeentities" /><code>{"void PrepareSerializeEntities(bool isServer)"}</code> | Has each serializer capture its data for this pass, using the server or client set. |
| <Link id="m-sendserialized" /><code>{"void SendSerialized("}<Link to="/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" socket)"}</code> | Writes and sends entity data to every connection on the socket, split over messages (logs an error at 1000). |
| <Link id="m-serializeread" /><code>{"void SerializeRead("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/assembly-other/streamreader">{"StreamReader"}</Link>{" stream)"}</code> | Reads a serialize message and hands each entity's bits to its serializer. Skips unknown entities and data the sender may not write. |
| <Link id="m-serializewrite" /><code>{"void SerializeWrite("}<Link to="/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" stream, "}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, ref int startIndex)"}</code> | Writes serializers into one message up to `MaxBitsPerSerializationMessage`. Sets `startIndex` to where the next message resumes, or -1 when done. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updateentitydata" /><code>{"private void UpdateEntityData(IEnumerable<"}<Link to="/game-api/types/alta-networking/entityserializer">{"EntitySerializer"}</Link>{"> serializers)"}</code> | Runs each entity serializer's `SerializeData`, with three passes in four counted as off frames so idle entities update less often. |

</details>

## Used in

Members of other types that take, return or hold a `SceneSerializer`:

[`INetworkSceneInternal.SceneSerializer`](/game-api/types/alta-networking/inetworksceneinternal#m-sceneserializer), [`NetworkScene.Alta.Networking.INetworkSceneInternal.SceneSerializer`](/game-api/types/alta-networking/networkscene#m-alta-networking-inetworksceneinternal-sceneserializer), [`NetworkScene.sceneSerializer`](/game-api/types/alta-networking/networkscene#m-sceneserializer), [`LocalNetworkScene.Alta.Networking.INetworkSceneInternal.SceneSerializer`](/game-api/types/global-i-l/localnetworkscene#m-alta-networking-inetworksceneinternal-sceneserializer).
