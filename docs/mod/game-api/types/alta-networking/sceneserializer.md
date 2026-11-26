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

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SceneSerializer("}<Link to="/mod/game-api/types/alta-networking/inetworksceneinternal">{"INetworkSceneInternal"}</Link>{" networkScene, "}<Link to="/mod/game-api/types/alta-networking/entitymanager">{"EntityManager"}</Link>{" entityManager)"}</code> | <span className="api-desc">Creates a `SceneSerializer` from `networkScene` and `entityManager`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-messagesperconnection" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" MessagesPerConnection"}</code> | <span className="api-desc">Running average of messages sent per connection per pass.</span> |
| <Link id="m-serializationtimems" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" SerializationTimeMs"}</code> | <span className="api-desc">Running average time spent preparing entity data.</span> |
| <Link id="m-serializetoconnectionsms" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" SerializeToConnectionsMs"}</code> | <span className="api-desc">Running average time to write and send to all connections.</span> |
| <Link id="m-writingentity" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/serializingentityhandler">{"SerializingEntityHandler"}</Link>{" WritingEntity"}</code> | <span className="api-desc">Static debug hook called for every entity written.</span> |

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-connections" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{"> connections"}</code> | <span className="api-desc">Reused list of the connections to send to this pass.</span> |
| <Link id="m-entitymanager" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/entitymanager">{"EntityManager"}</Link>{" entityManager"}</code> | <span className="api-desc">Where the serialized entities come from.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Logger for this class.</span> |
| <Link id="m-networkscene" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/inetworksceneinternal">{"INetworkSceneInternal"}</Link>{" networkScene"}</code> | <span className="api-desc">The scene being serialized.</span> |
| <Link id="m-serializeframeindex" /><code>{"private int serializeFrameIndex"}</code> | <span className="api-desc">Counter that staggers which entities get an on frame.</span> |
| <Link id="m-timer" /><code>{"private static Stopwatch timer"}</code> | <span className="api-desc">Stopwatch for the serialization timing stats.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-serializationchannel" /><code><Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" SerializationChannel { get; set; }"}</code> | <span className="api-desc">Channel the serialize messages go out on.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialsyncentities" /><code>{"void InitialSyncEntities("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" target)"}</code> | <span className="api-desc">Server: sends a joining player a sync message for every embedded scene entity, then destroy messages for missing ones.</span> |
| <Link id="m-prepareserializeentities" /><code>{"void PrepareSerializeEntities(bool isServer)"}</code> | <span className="api-desc">Has each serializer capture its data for this pass, using the server or client set.</span> |
| <Link id="m-sendserialized" /><code>{"void SendSerialized("}<Link to="/mod/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" socket)"}</code> | <span className="api-desc">Writes and sends entity data to every connection on the socket, split over messages (logs an error at 1000).</span> |
| <Link id="m-serializeread" /><code>{"void SerializeRead("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/mod/game-api/types/assembly-other/streamreader">{"StreamReader"}</Link>{" stream)"}</code> | <span className="api-desc">Reads a serialize message and hands each entity's bits to its serializer. Skips unknown entities and data the sender may not write.</span> |
| <Link id="m-serializewrite" /><code>{"void SerializeWrite("}<Link to="/mod/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, ref int startIndex)"}</code> | <span className="api-desc">Writes serializers into one message up to `MaxBitsPerSerializationMessage`. Sets `startIndex` to where the next message resumes, or -1 when done.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updateentitydata" /><code>{"private void UpdateEntityData(IEnumerable<"}<Link to="/mod/game-api/types/alta-networking/entityserializer">{"EntitySerializer"}</Link>{"> serializers)"}</code> | <span className="api-desc">Runs each entity serializer's `SerializeData`, with three passes in four counted as off frames so idle entities update less often.</span> |

</details>

## Used in

Members of other types that take, return or hold a `SceneSerializer`:

<div className="api-used-in">

[`INetworkSceneInternal.SceneSerializer`](/mod/game-api/types/alta-networking/inetworksceneinternal#m-sceneserializer), [`NetworkScene.Alta.Networking.INetworkSceneInternal.SceneSerializer`](/mod/game-api/types/alta-networking/networkscene#m-alta-networking-inetworksceneinternal-sceneserializer), [`NetworkScene.sceneSerializer`](/mod/game-api/types/alta-networking/networkscene#m-sceneserializer), [`LocalNetworkScene.Alta.Networking.INetworkSceneInternal.SceneSerializer`](/mod/game-api/types/global-i-l/localnetworkscene#m-alta-networking-inetworksceneinternal-sceneserializer).

</div>
