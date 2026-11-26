---
title: "EntitySerializer"
description: "Writes and reads an entity's streamed state: the combined bits of all its INetworkSerialized behaviours."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EntitySerializer

A **class** in `Root.Township`, `Alta.Networking`.

Writes and reads an entity's streamed state: the combined bits of all its `INetworkSerialized` behaviours. The side that owns the state writes it when something changed and resends it a limited number of times. Get it from `NetworkEntity.Serializer`.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Derived types** [`SerializedEnumerable`](/mod/game-api/types/alta-networking/serializedenumerable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EntitySerializer("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/mod/game-api/types/alta-networking/inetworkserialized">{"INetworkSerialized"}</Link>{"[] behaviours)"}</code> | <span className="api-desc">Creates an `EntitySerializer` from `entity` and `behaviours`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-authorityplayer" /><code><Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" AuthorityPlayer"}</code> | <span className="api-desc">The player who owns the state (their own body), or null.</span> |
| <Link id="m-isauthoritative" /><code>{"bool IsAuthoritative"}</code> | <span className="api-desc">True if this side writes the state.</span> |
| <Link id="m-prepareduration" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragenumber">{"AccumulativeAverageNumber"}</Link>{" PrepareDuration"}</code> | <span className="api-desc">Shared timing average for the prepare step.</span> |
| <Link id="m-serializationduration" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragenumber">{"AccumulativeAverageNumber"}</Link>{" SerializationDuration"}</code> | <span className="api-desc">Shared timing average for the write step.</span> |

<details className="api-private">
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-behaviours" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/inetworkserialized">{"INetworkSerialized"}</Link>{"[] behaviours"}</code> | <span className="api-desc">The entity's `INetworkSerialized` behaviours, serialized in this order.</span> |
| <Link id="m-chunker" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" chunker"}</code> | <span className="api-desc">The entity's chunker, taken from it as an `IChunkedEntity`.</span> |
| <Link id="m-data" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/entitystreamerdata">{"EntityStreamerData"}</Link>{" data"}</code> | <span className="api-desc">Buffer for regular (delta) updates, with its bit count and unchanged count.</span> |
| <Link id="m-entity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | <span className="api-desc">The network entity this serializer writes.</span> |
| <Link id="m-fulldata" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/entitystreamerdata">{"EntityStreamerData"}</Link>{" fullData"}</code> | <span className="api-desc">Buffer for full updates sent to players who need the whole state.</span> |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> | <span className="api-desc">Whether the entity was enabled at the last serialize. Disabled entities don't send.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger. Logs when a behaviour's `MaximumBits` is too small for what it wrote.</span> |
| <Link id="m-resendcount" /><code>{"private int resendCount"}</code> | <span className="api-desc">Sends since the data last changed. Reset by `MarkDataAsChanged`.</span> |
| <Link id="m-sharedwriter" /><code>{"private static "}<Link to="/mod/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" sharedWriter"}</code> | <span className="api-desc">One stream writer shared by every serializer to fill buffers.</span> |
| <Link id="m-timer" /><code>{"private static Stopwatch timer"}</code> | <span className="api-desc">Shared stopwatch used to time prepare and serialize for the profiling averages.</span> |
| <Link id="m-unchangedhalfcheckcount" /><code>{"private const int UnchangedHalfCheckCount"}</code> | <span className="api-desc">After 10 unchanged writes, off-frame serialization is skipped.</span> |
| <Link id="m-unchangedresend" /><code>{"private const int UnchangedResend"}</code> | <span className="api-desc">After 30 sends with no change, `IsSending` turns false and the entity stops being resent.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-databitcount" /><code>{"uint DataBitCount { get; }"}</code> | <span className="api-desc">Size in bits of the last written delta data.</span> |
| <Link id="m-identifier" /><code>{"uint Identifier { get; private set; }"}</code> | <span className="api-desc">The entity's identifier.</span> |
| <Link id="m-issending" /><code>{"bool IsSending { get; }"}</code> | <span className="api-desc">True while the entity is enabled and the data has been sent fewer than 30 times since it last changed.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-readentity" /><code>{"static event "}<Link to="/mod/game-api/types/alta-networking/serializedentityhandler">{"SerializedEntityHandler"}</Link>{" ReadEntity"}</code> | <span className="api-desc">Raised for every entity state read. Called very often.</span> |
| <Link id="m-wroteentity" /><code>{"static event "}<Link to="/mod/game-api/types/alta-networking/serializedentityhandler">{"SerializedEntityHandler"}</Link>{" WroteEntity"}</code> | <span className="api-desc">Raised for every entity state written. Called very often.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isentityspawnedfor" /><code>{"bool IsEntitySpawnedFor("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">True if the entity has been spawned for the given player.</span> |
| <Link id="m-markdataaschanged" /><code>{"void MarkDataAsChanged()"}</code> | <span className="api-desc">Forces the state to be written and sent again.</span> |
| <Link id="m-readdatafromstream" /><code>{"void ReadDataFromStream("}<Link to="/mod/game-api/types/assembly-other/streamreader">{"StreamReader"}</Link>{" reader, uint messageSize)"}</code> | <span className="api-desc">Reads delta state into the behaviours from a network stream.</span> |
| <Link id="m-readfulldatafromstream" /><code>{"void ReadFullDataFromStream("}<Link to="/mod/game-api/types/assembly-other/streamreader">{"StreamReader"}</Link>{" reader, uint messageSize)"}</code> | <span className="api-desc">Reads full state into the behaviours from a network stream.</span> |
| <Link id="m-releasearrays" /><code>{"void ReleaseArrays()"}</code> | <span className="api-desc">Returns the data buffers to the pool. The serializer can't be used after.</span> |
| <Link id="m-serializedata" /><code>{"void SerializeData(bool isOffFrame)"}</code> | <span className="api-desc">Writes the delta state into the internal buffer if a behaviour reports a change.</span> |
| <Link id="m-serializefulldata" /><code>{"void SerializeFullData()"}</code> | <span className="api-desc">Writes the full state (for newly spawned players) into the internal buffer.</span> |
| <Link id="m-writedataintostream" /><code>{"void WriteDataIntoStream("}<Link to="/mod/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" writer)"}</code> | <span className="api-desc">Copies the delta buffer into an outgoing stream.</span> |
| <Link id="m-writefulldataintostream" /><code>{"void WriteFullDataIntoStream("}<Link to="/mod/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" writer)"}</code> | <span className="api-desc">Copies the full buffer into an outgoing stream.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-readfromstreaminternal" /><code>{"private void ReadFromStreamInternal("}<Link to="/mod/game-api/types/assembly-other/streamreader">{"StreamReader"}</Link>{" reader, bool isFull, uint messageSize)"}</code> | <span className="api-desc">Reads every behaviour's data from the stream, marks data changed if not authoritative, and fires `ReadEntity`.</span> |
| <Link id="m-serializedatainternal" /><code>{"private void SerializeDataInternal(bool isFull, "}<Link to="/mod/game-api/types/alta-networking/entitystreamerdata">{"EntityStreamerData"}</Link>{" data, bool isOffFrame)"}</code> | <span className="api-desc">Asks behaviours whether they changed, writes them into the buffer if so, and fires `WroteEntity`. Skips off-frame writes once unchanged 10 times.</span> |
| <Link id="m-setupdataarrays" /><code>{"private void SetupDataArrays()"}</code> | <span className="api-desc">Sizes the regular and full data buffers from the behaviours' `MaximumBits` and takes them from the array pool.</span> |
| <Link id="m-writeintostreaminternal" /><code>{"private void WriteIntoStreamInternal("}<Link to="/mod/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" writer, "}<Link to="/mod/game-api/types/alta-networking/entitystreamerdata">{"EntityStreamerData"}</Link>{" data)"}</code> | <span className="api-desc">Copies the buffered bits into the outgoing stream.</span> |

</details>

## Used in

Members of other types that take, return or hold a `EntitySerializer`:

<div className="api-used-in">

[`IEntitySerialized.Serializer`](/mod/game-api/types/alta-networking/ientityserialized#m-serializer), [`EntityManager.GetClientSerialized`](/mod/game-api/types/alta-networking/entitymanager#m-getclientserialized), [`EntityManager.GetEntityWithSerializer`](/mod/game-api/types/alta-networking/entitymanager#m-getentitywithserializer), [`EntityManager.GetServerSerialized`](/mod/game-api/types/alta-networking/entitymanager#m-getserverserialized), [`EntityManager.MarkSerialized`](/mod/game-api/types/alta-networking/entitymanager#m-markserialized), [`IEntityManager.MarkSerialized`](/mod/game-api/types/alta-networking/ientitymanager#m-markserialized), [`SceneSerializer.UpdateEntityData`](/mod/game-api/types/alta-networking/sceneserializer#m-updateentitydata), [`SerializedEnumerable.Current`](/mod/game-api/types/alta-networking/serializedenumerable#m-current-2), [`SerializedEnumerable.GetEnumerator`](/mod/game-api/types/alta-networking/serializedenumerable#m-getenumerator), [`SerializingEntityHandler.BeginInvoke`](/mod/game-api/types/alta-networking/serializingentityhandler#m-begininvoke), [`SerializingEntityHandler.Invoke`](/mod/game-api/types/alta-networking/serializingentityhandler#m-invoke), [`NetworkEntity.serializer`](/mod/game-api/types/alta-networking/networkentity#m-serializer), [`NetworkEntity.Serializer`](/mod/game-api/types/alta-networking/networkentity#m-serializer-2), [`NetworkEntityLink.MarkSerialized`](/mod/game-api/types/alta-networking/networkentitylink#m-markserialized), [`NetworkEntityLink.Serializer`](/mod/game-api/types/alta-networking/networkentitylink#m-serializer), [`NetworkScene.MarkSerialized`](/mod/game-api/types/alta-networking/networkscene#m-markserialized), [`SerializedEntityHandler.BeginInvoke`](/mod/game-api/types/alta-networking/serializedentityhandler#m-begininvoke), [`SerializedEntityHandler.Invoke`](/mod/game-api/types/alta-networking/serializedentityhandler#m-invoke), [`StreamAuthorityHelper.CheckReadPermission`](/mod/game-api/types/alta-networking/streamauthorityhelper#m-checkreadpermission), [`LocalNetworkScene.MarkSerialized`](/mod/game-api/types/global-i-l/localnetworkscene#m-markserialized), [`LocalNetworkScene.SerializeEntity`](/mod/game-api/types/global-i-l/localnetworkscene#m-serializeentity).

</div>
