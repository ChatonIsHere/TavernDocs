---
title: "SerializedSavedDynamicObject"
description: "A saved object (prefab hash plus its serialized state) in a form Unity can serialize, with the chunk versioning it was saved under."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SerializedSavedDynamicObject

A **class** in `Root.Township`, no namespace.

A saved object (prefab hash plus its serialized state) in a form Unity can serialize, with the chunk versioning it was saved under. Used for postboxes, set pieces and spawn strings.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`SavedDynamicObject`](/game-api/types/alta-world/saveddynamicobject)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SerializedSavedDynamicObject(List<uint[]> savingData, uint sizeBytes, uint prefabHash, "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning = null)"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isinitialized" /><code>{"private bool isInitialized"}</code> | True once the serialized arrays have been unpacked into `data` and `Versioning`. Not serialized. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-serializeddata" /><code>{"private uint[] serializedData"}</code> | The saved entity's bytes packed as `uint` words, so Unity can serialize them. |
| <Link id="m-versioning" /><code>{"private uint[] versioning"}</code> | The chunk versioning array the data was saved with; `Initialize` rebuilds `Versioning` from it. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-versioning-2" /><code><Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" Versioning { get; private set; }"}</code> | The chunk versioning the data was saved under. Defaults to the latest. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getfromstring" /><code>{"static "}<Link to="/game-api/types/global-s/serializedsaveddynamicobject">{"SerializedSavedDynamicObject"}</Link>{" GetFromString(string value)"}</code> | Parses a spawn string: comma separated numbers (prefab hash, byte size, data) with optional versioning after a `\|`. |
| <Link id="m-getsaveof" /><code>{"static "}<Link to="/game-api/types/global-s/serializedsaveddynamicobject">{"SerializedSavedDynamicObject"}</Link>{" GetSaveOf("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> | Saves a prefab's current state under the latest versioning. |
| <Link id="m-getversion" /><code>{"override "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" GetVersion()"}</code> | The chunk versioning the data was saved under. |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> | Rebuilds the working data and versioning after Unity deserialization. Safe to call more than once. |
| <Link id="m-load" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Load(Transform parent, Vector3 localPosition, Quaternion localRotation, "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk, "}<Link to="/game-api/types/game-other-namespaces/savemode">{"SaveMode"}</Link>{" saveMode)"}</code> | Obsolete: spawns the object and loads into it, but spawns network entities twice. Use `LoadInto`. |
| <Link id="m-loadinto" /><code>{"void LoadInto("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" existing, "}<Link to="/game-api/types/game-other-namespaces/savemode">{"SaveMode"}</Link>{" saveMode)"}</code> | Server: loads the saved state into an existing entity, initializes it and sets its save mode. |
| <Link id="m-loadintoprefablessentity" /><code>{"void LoadIntoPrefablessEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Loads saved state into an entity that has no prefab, such as a scene object. |
| <Link id="m-savefromprefablessentity" /><code>{"static "}<Link to="/game-api/types/global-s/serializedsaveddynamicobject">{"SerializedSavedDynamicObject"}</Link>{" SaveFromPrefablessEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Saves an entity that has no prefab, with a prefab hash of 0. |
| <Link id="m-spawnfromstring" /><code>{"static "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" SpawnFromString(string value, "}<Link to="/game-api/types/game-other-namespaces/savemode">{"SaveMode"}</Link>{" saveMode)"}</code> | Spawns an object from a spawn string. Returns null and logs on failure. Used by `spawn string` and trade commands. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-load-2" /><code>{"private void Load("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" existing, Transform parent, Vector3 localPosition, Quaternion localRotation, "}<Link to="/game-api/types/game-other-namespaces/savemode">{"SaveMode"}</Link>{" saveMode)"}</code> | Obsolete: spawns the object and loads into it, but spawns network entities twice. Use `LoadInto`. |
| <Link id="m-spawn" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Spawn()"}</code> | Spawns a fresh entity of the saved prefab hash through the spawn manager. Used by the obsolete `Load`. |

</details>

## Used in

Members of other types that take, return or hold a `SerializedSavedDynamicObject`:

[`NonHashedData.dynamicData`](/game-api/types/global-m-o/nonhasheddata#m-dynamicdata), [`NonHashedData.DynamicData`](/game-api/types/global-m-o/nonhasheddata#m-dynamicdata-2), [`PlayerPostboxStorage.Push`](/game-api/types/global-p/playerpostboxstorage#m-push), [`PositionedNetworkPrefab.savedDynamicObject`](/game-api/types/global-p/positionednetworkprefab#m-saveddynamicobject), [`PostboxManager.TradeVendorData.Entities`](/game-api/types/global-p/postboxmanager-tradevendordata#m-entities), [`PostboxManager.TradeVendorData.items`](/game-api/types/global-p/postboxmanager-tradevendordata#m-items), [`SetPieceData.dynamicData`](/game-api/types/global-s/setpiecedata#m-dynamicdata), [`SetPieceData.DynamicData`](/game-api/types/global-s/setpiecedata#m-dynamicdata-2).
