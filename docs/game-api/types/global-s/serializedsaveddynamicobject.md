---
title: "SerializedSavedDynamicObject"
description: "class SerializedSavedDynamicObject in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SerializedSavedDynamicObject

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`SavedDynamicObject`](/game-api/types/alta-world/saveddynamicobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SerializedSavedDynamicObject(List<uint[]> savingData, uint sizeBytes, uint prefabHash, "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning = null)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isinitialized" /><code>{"private bool isInitialized"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-serializeddata" /><code>{"private uint[] serializedData"}</code> |  |
| <Link id="m-versioning" /><code>{"private uint[] versioning"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-versioning-2" /><code><Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" Versioning { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getfromstring" /><code>{"static "}<Link to="/game-api/types/global-s/serializedsaveddynamicobject">{"SerializedSavedDynamicObject"}</Link>{" GetFromString(string value)"}</code> |  |
| <Link id="m-getsaveof" /><code>{"static "}<Link to="/game-api/types/global-s/serializedsaveddynamicobject">{"SerializedSavedDynamicObject"}</Link>{" GetSaveOf("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> |  |
| <Link id="m-getversion" /><code>{"override "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" GetVersion()"}</code> |  |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> |  |
| <Link id="m-load" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Load(Transform parent, Vector3 localPosition, Quaternion localRotation, "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk, "}<Link to="/game-api/types/game-other-namespaces/savemode">{"SaveMode"}</Link>{" saveMode)"}</code> |  |
| <Link id="m-loadinto" /><code>{"void LoadInto("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" existing, "}<Link to="/game-api/types/game-other-namespaces/savemode">{"SaveMode"}</Link>{" saveMode)"}</code> |  |
| <Link id="m-loadintoprefablessentity" /><code>{"void LoadIntoPrefablessEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-savefromprefablessentity" /><code>{"static "}<Link to="/game-api/types/global-s/serializedsaveddynamicobject">{"SerializedSavedDynamicObject"}</Link>{" SaveFromPrefablessEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-spawnfromstring" /><code>{"static "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" SpawnFromString(string value, "}<Link to="/game-api/types/game-other-namespaces/savemode">{"SaveMode"}</Link>{" saveMode)"}</code> |  |
| <Link id="m-load-2" /><code>{"private void Load("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" existing, Transform parent, Vector3 localPosition, Quaternion localRotation, "}<Link to="/game-api/types/game-other-namespaces/savemode">{"SaveMode"}</Link>{" saveMode)"}</code> |  |
| <Link id="m-spawn" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Spawn()"}</code> |  |

## Used in

Members of other types that take, return or hold a `SerializedSavedDynamicObject`:

[`NonHashedData.dynamicData`](/game-api/types/global-m-o/nonhasheddata#m-dynamicdata), [`NonHashedData.DynamicData`](/game-api/types/global-m-o/nonhasheddata#m-dynamicdata-2), [`PlayerPostboxStorage.Push`](/game-api/types/global-p/playerpostboxstorage#m-push), [`PositionedNetworkPrefab.savedDynamicObject`](/game-api/types/global-p/positionednetworkprefab#m-saveddynamicobject), [`PostboxManager.TradeVendorData.Entities`](/game-api/types/global-p/postboxmanager-tradevendordata#m-entities), [`PostboxManager.TradeVendorData.items`](/game-api/types/global-p/postboxmanager-tradevendordata#m-items), [`SetPieceData.dynamicData`](/game-api/types/global-s/setpiecedata#m-dynamicdata), [`SetPieceData.DynamicData`](/game-api/types/global-s/setpiecedata#m-dynamicdata-2).
