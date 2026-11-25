---
title: "EntitySerializer"
description: "class EntitySerializer in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EntitySerializer

A **class** in `Root.Township`, `Alta.Networking`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Derived types** [`SerializedEnumerable`](/game-api/types/alta-networking/serializedenumerable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EntitySerializer("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-networking/inetworkserialized">{"INetworkSerialized"}</Link>{"[] behaviours)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-authorityplayer" /><code><Link to="/game-api/types/global-p/player">{"Player"}</Link>{" AuthorityPlayer"}</code> |  |
| <Link id="m-isauthoritative" /><code>{"bool IsAuthoritative"}</code> |  |
| <Link id="m-prepareduration" /><code>{"static "}<Link to="/game-api/types/alta-networking/accumulativeaveragenumber">{"AccumulativeAverageNumber"}</Link>{" PrepareDuration"}</code> |  |
| <Link id="m-serializationduration" /><code>{"static "}<Link to="/game-api/types/alta-networking/accumulativeaveragenumber">{"AccumulativeAverageNumber"}</Link>{" SerializationDuration"}</code> |  |
| <Link id="m-behaviours" /><code>{"private "}<Link to="/game-api/types/alta-networking/inetworkserialized">{"INetworkSerialized"}</Link>{"[] behaviours"}</code> |  |
| <Link id="m-chunker" /><code>{"private "}<Link to="/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" chunker"}</code> |  |
| <Link id="m-data" /><code>{"private "}<Link to="/game-api/types/alta-networking/entitystreamerdata">{"EntityStreamerData"}</Link>{" data"}</code> |  |
| <Link id="m-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> |  |
| <Link id="m-fulldata" /><code>{"private "}<Link to="/game-api/types/alta-networking/entitystreamerdata">{"EntityStreamerData"}</Link>{" fullData"}</code> |  |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-resendcount" /><code>{"private int resendCount"}</code> |  |
| <Link id="m-sharedwriter" /><code>{"private static "}<Link to="/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" sharedWriter"}</code> |  |
| <Link id="m-timer" /><code>{"private static Stopwatch timer"}</code> |  |
| <Link id="m-unchangedhalfcheckcount" /><code>{"private const int UnchangedHalfCheckCount"}</code> |  |
| <Link id="m-unchangedresend" /><code>{"private const int UnchangedResend"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-databitcount" /><code>{"uint DataBitCount { get; }"}</code> |  |
| <Link id="m-identifier" /><code>{"uint Identifier { get; private set; }"}</code> |  |
| <Link id="m-issending" /><code>{"bool IsSending { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-readentity" /><code>{"static event "}<Link to="/game-api/types/alta-networking/serializedentityhandler">{"SerializedEntityHandler"}</Link>{" ReadEntity"}</code> |  |
| <Link id="m-wroteentity" /><code>{"static event "}<Link to="/game-api/types/alta-networking/serializedentityhandler">{"SerializedEntityHandler"}</Link>{" WroteEntity"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isentityspawnedfor" /><code>{"bool IsEntitySpawnedFor("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-markdataaschanged" /><code>{"void MarkDataAsChanged()"}</code> |  |
| <Link id="m-readdatafromstream" /><code>{"void ReadDataFromStream("}<Link to="/game-api/types/assembly-other/streamreader">{"StreamReader"}</Link>{" reader, uint messageSize)"}</code> |  |
| <Link id="m-readfulldatafromstream" /><code>{"void ReadFullDataFromStream("}<Link to="/game-api/types/assembly-other/streamreader">{"StreamReader"}</Link>{" reader, uint messageSize)"}</code> |  |
| <Link id="m-releasearrays" /><code>{"void ReleaseArrays()"}</code> |  |
| <Link id="m-serializedata" /><code>{"void SerializeData(bool isOffFrame)"}</code> |  |
| <Link id="m-serializefulldata" /><code>{"void SerializeFullData()"}</code> |  |
| <Link id="m-writedataintostream" /><code>{"void WriteDataIntoStream("}<Link to="/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" writer)"}</code> |  |
| <Link id="m-writefulldataintostream" /><code>{"void WriteFullDataIntoStream("}<Link to="/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" writer)"}</code> |  |
| <Link id="m-readfromstreaminternal" /><code>{"private void ReadFromStreamInternal("}<Link to="/game-api/types/assembly-other/streamreader">{"StreamReader"}</Link>{" reader, bool isFull, uint messageSize)"}</code> |  |
| <Link id="m-serializedatainternal" /><code>{"private void SerializeDataInternal(bool isFull, "}<Link to="/game-api/types/alta-networking/entitystreamerdata">{"EntityStreamerData"}</Link>{" data, bool isOffFrame)"}</code> |  |
| <Link id="m-setupdataarrays" /><code>{"private void SetupDataArrays()"}</code> |  |
| <Link id="m-writeintostreaminternal" /><code>{"private void WriteIntoStreamInternal("}<Link to="/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" writer, "}<Link to="/game-api/types/alta-networking/entitystreamerdata">{"EntityStreamerData"}</Link>{" data)"}</code> |  |

## Used in

Members of other types that take, return or hold a `EntitySerializer`:

[`IEntitySerialized.Serializer`](/game-api/types/alta-networking/ientityserialized#m-serializer), [`EntityManager.GetClientSerialized`](/game-api/types/alta-networking/entitymanager#m-getclientserialized), [`EntityManager.GetEntityWithSerializer`](/game-api/types/alta-networking/entitymanager#m-getentitywithserializer), [`EntityManager.GetServerSerialized`](/game-api/types/alta-networking/entitymanager#m-getserverserialized), [`EntityManager.MarkSerialized`](/game-api/types/alta-networking/entitymanager#m-markserialized), [`IEntityManager.MarkSerialized`](/game-api/types/alta-networking/ientitymanager#m-markserialized), [`SceneSerializer.UpdateEntityData`](/game-api/types/alta-networking/sceneserializer#m-updateentitydata), [`SerializedEnumerable.Current`](/game-api/types/alta-networking/serializedenumerable#m-current-2), [`SerializedEnumerable.GetEnumerator`](/game-api/types/alta-networking/serializedenumerable#m-getenumerator), [`SerializingEntityHandler.BeginInvoke`](/game-api/types/alta-networking/serializingentityhandler#m-begininvoke), [`SerializingEntityHandler.Invoke`](/game-api/types/alta-networking/serializingentityhandler#m-invoke), [`NetworkEntity.serializer`](/game-api/types/alta-networking/networkentity#m-serializer), [`NetworkEntity.Serializer`](/game-api/types/alta-networking/networkentity#m-serializer-2), [`NetworkEntityLink.MarkSerialized`](/game-api/types/alta-networking/networkentitylink#m-markserialized), [`NetworkEntityLink.Serializer`](/game-api/types/alta-networking/networkentitylink#m-serializer), [`NetworkScene.MarkSerialized`](/game-api/types/alta-networking/networkscene#m-markserialized), [`SerializedEntityHandler.BeginInvoke`](/game-api/types/alta-networking/serializedentityhandler#m-begininvoke), [`SerializedEntityHandler.Invoke`](/game-api/types/alta-networking/serializedentityhandler#m-invoke), [`StreamAuthorityHelper.CheckReadPermission`](/game-api/types/alta-networking/streamauthorityhelper#m-checkreadpermission), [`LocalNetworkScene.MarkSerialized`](/game-api/types/global-i-l/localnetworkscene#m-markserialized), [`LocalNetworkScene.SerializeEntity`](/game-api/types/global-i-l/localnetworkscene#m-serializeentity).
