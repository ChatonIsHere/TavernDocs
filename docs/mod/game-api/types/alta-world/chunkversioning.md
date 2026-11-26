---
title: "ChunkVersioning"
description: "The set of save format versions a chunk was written with: a map from save type hash to version number."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkVersioning

A **class** in `Root.Township`, `Alta.Saving`.

The set of save format versions a chunk was written with: a map from save type hash to version number. `SavingSystem.LatestChunkVersioning` holds the current one; each chunk save stores the versioning it used.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChunkVersioning()"}</code> | <span className="api-desc">Creates a `ChunkVersioning` from `version`.</span> |
| <Link id="m-ctor-2" /><code>{"ChunkVersioning(string version)"}</code> | <span className="api-desc">Creates a `ChunkVersioning` from `version`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hashversions" /><code>{"Dictionary<uint, uint> HashVersions { get; }"}</code> | <span className="api-desc">Map from a save type's hash to its version.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add(uint hash, uint version)"}</code> | <span className="api-desc">Adds a hash and version. Logs an error and keeps the old value if the hash is already there.</span> |
| <Link id="m-equals" /><code>{"override bool Equals(object otherObject)"}</code> | <span className="api-desc">True unless a hash in both sets has a different version. Hashes only in one set are ignored.</span> |
| <Link id="m-fromstring" /><code>{"void FromString(string value)"}</code> | <span className="api-desc">Loads from the comma text form made by `ToString` (count, then hash and version pairs).</span> |
| <Link id="m-getarray" /><code>{"uint[] GetArray()"}</code> | <span className="api-desc">Returns hash and version pairs as one flat array.</span> |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> | <span className="api-desc">Hash built from all hash and version pairs.</span> |
| <Link id="m-loadarray" /><code>{"void LoadArray(uint[] elements)"}</code> | <span className="api-desc">Adds hash and version pairs from a flat array made by `GetArray`.</span> |
| <Link id="m-op-equality" /><code>{"static bool op_Equality("}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" first, "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" second)"}</code> | <span className="api-desc">Same as `Equals`, with null handling.</span> |
| <Link id="m-op-inequality" /><code>{"static bool op_Inequality("}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" first, "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" second)"}</code> | <span className="api-desc">Opposite of `==`.</span> |
| <Link id="m-read" /><code>{"void Read(BinaryReader reader, int index = 0)"}</code> | <span className="api-desc">Replaces the contents from a binary reader (count, then pairs).</span> |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Reads or writes the pairs through an Alta `Stream`.</span> |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">Text form: the count, then each hash and version, all comma separated.</span> |
| <Link id="m-write" /><code>{"void Write(BinaryWriter writer)"}</code> | <span className="api-desc">Writes the count and pairs to a binary writer.</span> |

## Used in

Members of other types that take, return or hold a `ChunkVersioning`:

<div className="api-used-in">

[`DynamicChunkContentManager.LoadSerializeEmbeddedEntity`](/mod/game-api/types/alta-world/dynamicchunkcontentmanager#m-loadserializeembeddedentity), [`DynamicChunkContentManager.LoadSerializeEntity`](/mod/game-api/types/alta-world/dynamicchunkcontentmanager#m-loadserializeentity), [`DynamicChunkContentManager.LoadSingle`](/mod/game-api/types/alta-world/dynamicchunkcontentmanager#m-loadsingle), [`SavedDynamicObject.GetVersion`](/mod/game-api/types/alta-world/saveddynamicobject#m-getversion), [`SavedDynamicObject.Spawn`](/mod/game-api/types/alta-world/saveddynamicobject#m-spawn), [`SavedDynamicObject.SpawnOwned`](/mod/game-api/types/alta-world/saveddynamicobject#m-spawnowned), [`StreamerHelper.SerializeEmpty`](/mod/game-api/types/alta-world/streamerhelper#m-serializeempty), [`StreamerHelper.SerializePrefab`](/mod/game-api/types/alta-world/streamerhelper#m-serializeprefab), [`StreamerHelper.WritePositionlessPrefab`](/mod/game-api/types/alta-world/streamerhelper#m-writepositionlessprefab), [`NetworkPrefab.SaveSerialize`](/mod/game-api/types/alta-networking/networkprefab#m-saveserialize), [`NetworkPrefab.SaveSerializeEmpty`](/mod/game-api/types/alta-networking/networkprefab#m-saveserializeempty), [`NetworkPrefab.SaveSerializeEntity`](/mod/game-api/types/alta-networking/networkprefab#m-saveserializeentity), [`SavingSystem.LatestChunkVersioning`](/mod/game-api/types/alta-world/savingsystem#m-latestchunkversioning), [`SavingSystem.Load`](/mod/game-api/types/alta-world/savingsystem#m-load), [`SavingSystem.Migrate`](/mod/game-api/types/alta-world/savingsystem#m-migrate), [`SavingSystem.Read`](/mod/game-api/types/alta-world/savingsystem#m-read), [`SavingSystem.ReadBasic`](/mod/game-api/types/alta-world/savingsystem#m-readbasic), [`SavingSystem.Serialize`](/mod/game-api/types/alta-world/savingsystem#m-serialize), [`SavingSystem.SerializeEmpty`](/mod/game-api/types/alta-world/savingsystem#m-serializeempty), [`SavingSystem.VersionSetup.Serialize`](/mod/game-api/types/alta-world/savingsystem-versionsetup#m-serialize), [`SavingSystem.VersionSetup.serializer`](/mod/game-api/types/alta-world/savingsystem-versionsetup#m-serializer), [`ChunkSaveFormat.Version.ChunkVersioning`](/mod/game-api/types/alta-utilities/chunksaveformat-version#m-chunkversioning), [`ChunkSaveFormat.Version.Version`](/mod/game-api/types/alta-utilities/chunksaveformat-version#m-ctor-2), [`PlayerSave.PrefabChunkVersioning`](/mod/game-api/types/alta-utilities/playersave#m-prefabchunkversioning), [`ClassSerializationHelper.Prepare`](/mod/game-api/types/global-c-d/classserializationhelper#m-prepare), [`ClassSerializationHelper.Finalize<T>.BeginInvoke`](/mod/game-api/types/global-c-d/classserializationhelper-finalize-t#m-begininvoke), [`ClassSerializationHelper.Finalize<T>.Invoke`](/mod/game-api/types/global-c-d/classserializationhelper-finalize-t#m-invoke), [`ClassSerializationHelper.MemberHandler<T>.BeginInvoke`](/mod/game-api/types/global-c-d/classserializationhelper-memberhandler-t#m-begininvoke), [`ClassSerializationHelper.MemberHandler<T>.EndInvoke`](/mod/game-api/types/global-c-d/classserializationhelper-memberhandler-t#m-endinvoke), [`ClassSerializationHelper.MemberHandler<T>.Invoke`](/mod/game-api/types/global-c-d/classserializationhelper-memberhandler-t#m-invoke), [`ClassSerializer<T>.ClassSerializer<T>`](/mod/game-api/types/global-c-d/classserializer-t#m-ctor), [`ClassSerializer<T>.sync`](/mod/game-api/types/global-c-d/classserializer-t#m-sync), [`PlayerController.SerializeHands`](/mod/game-api/types/global-p/playercontroller#m-serializehands), [`PlayerController.SerializeInteractor`](/mod/game-api/types/global-p/playercontroller#m-serializeinteractor), [`SerializedSavedDynamicObject.GetVersion`](/mod/game-api/types/global-s/serializedsaveddynamicobject#m-getversion), [`SerializedSavedDynamicObject.SerializedSavedDynamicObject`](/mod/game-api/types/global-s/serializedsaveddynamicobject#m-ctor), [`SerializedSavedDynamicObject.Versioning`](/mod/game-api/types/global-s/serializedsaveddynamicobject#m-versioning-2), [`TypeSerializationHelper.BitSerialization.Serialize`](/mod/game-api/types/global-t-x/typeserializationhelper-bitserialization#m-serialize), [`TypeSerializationHelper.BoolSerialization.Serialize`](/mod/game-api/types/global-t-x/typeserializationhelper-boolserialization#m-serialize), [`TypeSerializationHelper.ColorSerialization.Serialize`](/mod/game-api/types/global-t-x/typeserializationhelper-colorserialization#m-serialize), [`TypeSerializationHelper.DateTimeSerialization.Serialize`](/mod/game-api/types/global-t-x/typeserializationhelper-datetimeserialization#m-serialize), [`TypeSerializationHelper.EnumSerialization<T>.Serialize`](/mod/game-api/types/global-t-x/typeserializationhelper-enumserialization-t#m-serialize), [`TypeSerializationHelper.FailedTypeSerialization.Handle`](/mod/game-api/types/global-t-x/typeserializationhelper-failedtypeserialization#m-handle), [`TypeSerializationHelper.FailedTypeSerialization.HandleArray`](/mod/game-api/types/global-t-x/typeserializationhelper-failedtypeserialization#m-handlearray), [`TypeSerializationHelper.FailedTypeSerialization.Serialize`](/mod/game-api/types/global-t-x/typeserializationhelper-failedtypeserialization#m-serialize), [`TypeSerializationHelper.FloatBitsSerialization.Serialize`](/mod/game-api/types/global-t-x/typeserializationhelper-floatbitsserialization#m-serialize), [`TypeSerializationHelper.FloatPrecisionSerialization.Serialize`](/mod/game-api/types/global-t-x/typeserializationhelper-floatprecisionserialization#m-serialize), [`TypeSerializationHelper.FloatSerialization.Serialize`](/mod/game-api/types/global-t-x/typeserializationhelper-floatserialization#m-serialize), [`TypeSerializationHelper.HashedSerialization<T>.Serialize`](/mod/game-api/types/global-t-x/typeserializationhelper-hashedserialization-t#m-serialize), [`TypeSerializationHelper.IntSerialization.Serialize`](/mod/game-api/types/global-t-x/typeserializationhelper-intserialization#m-serialize), [`TypeSerializationHelper.ITypeSerialization.Handle`](/mod/game-api/types/global-t-x/typeserializationhelper-itypeserialization#m-handle), [`TypeSerializationHelper.ITypeSerialization.HandleArray`](/mod/game-api/types/global-t-x/typeserializationhelper-itypeserialization#m-handlearray), [`TypeSerializationHelper.LogicManagerSetSerialization.Serialize`](/mod/game-api/types/global-t-x/typeserializationhelper-logicmanagersetserialization#m-serialize), [`TypeSerializationHelper.LogicValueDataSerialization<T>.Serialize`](/mod/game-api/types/global-t-x/typeserializationhelper-logicvaluedataserialization-t#m-serialize), [`TypeSerializationHelper.NetworkPrefabSerialization.Serialize`](/mod/game-api/types/global-t-x/typeserializationhelper-networkprefabserialization#m-serialize), [`TypeSerializationHelper.QuaternionSerialization.Serialize`](/mod/game-api/types/global-t-x/typeserializationhelper-quaternionserialization#m-serialize), [`TypeSerializationHelper.SaveDataSerialization<T>.Serialize`](/mod/game-api/types/global-t-x/typeserializationhelper-savedataserialization-t#m-serialize), [`TypeSerializationHelper.SaveDataSerialization<T>.SerializeExt`](/mod/game-api/types/global-t-x/typeserializationhelper-savedataserialization-t#m-serializeext), [`TypeSerializationHelper.StringSerialization.Serialize`](/mod/game-api/types/global-t-x/typeserializationhelper-stringserialization#m-serialize), [`TypeSerializationHelper.SubClassSerialization<T>.Serialize`](/mod/game-api/types/global-t-x/typeserializationhelper-subclassserialization-t#m-serialize) and 9 more.

</div>
