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

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChunkVersioning()"}</code> | Creates a `ChunkVersioning` from `version`. |
| <Link id="m-ctor-2" /><code>{"ChunkVersioning(string version)"}</code> | Creates a `ChunkVersioning` from `version`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hashversions" /><code>{"Dictionary<uint, uint> HashVersions { get; }"}</code> | Map from a save type's hash to its version. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add(uint hash, uint version)"}</code> | Adds a hash and version. Logs an error and keeps the old value if the hash is already there. |
| <Link id="m-equals" /><code>{"override bool Equals(object otherObject)"}</code> | True unless a hash in both sets has a different version. Hashes only in one set are ignored. |
| <Link id="m-fromstring" /><code>{"void FromString(string value)"}</code> | Loads from the comma text form made by `ToString` (count, then hash and version pairs). |
| <Link id="m-getarray" /><code>{"uint[] GetArray()"}</code> | Returns hash and version pairs as one flat array. |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> | Hash built from all hash and version pairs. |
| <Link id="m-loadarray" /><code>{"void LoadArray(uint[] elements)"}</code> | Adds hash and version pairs from a flat array made by `GetArray`. |
| <Link id="m-op-equality" /><code>{"static bool op_Equality("}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" first, "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" second)"}</code> | Same as `Equals`, with null handling. |
| <Link id="m-op-inequality" /><code>{"static bool op_Inequality("}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" first, "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" second)"}</code> | Opposite of `==`. |
| <Link id="m-read" /><code>{"void Read(BinaryReader reader, int index = 0)"}</code> | Replaces the contents from a binary reader (count, then pairs). |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes the pairs through an Alta `Stream`. |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Text form: the count, then each hash and version, all comma separated. |
| <Link id="m-write" /><code>{"void Write(BinaryWriter writer)"}</code> | Writes the count and pairs to a binary writer. |

## Used in

Members of other types that take, return or hold a `ChunkVersioning`:

[`DynamicChunkContentManager.LoadSerializeEmbeddedEntity`](/game-api/types/alta-world/dynamicchunkcontentmanager#m-loadserializeembeddedentity), [`DynamicChunkContentManager.LoadSerializeEntity`](/game-api/types/alta-world/dynamicchunkcontentmanager#m-loadserializeentity), [`DynamicChunkContentManager.LoadSingle`](/game-api/types/alta-world/dynamicchunkcontentmanager#m-loadsingle), [`SavedDynamicObject.GetVersion`](/game-api/types/alta-world/saveddynamicobject#m-getversion), [`SavedDynamicObject.Spawn`](/game-api/types/alta-world/saveddynamicobject#m-spawn), [`SavedDynamicObject.SpawnOwned`](/game-api/types/alta-world/saveddynamicobject#m-spawnowned), [`StreamerHelper.SerializeEmpty`](/game-api/types/alta-world/streamerhelper#m-serializeempty), [`StreamerHelper.SerializePrefab`](/game-api/types/alta-world/streamerhelper#m-serializeprefab), [`StreamerHelper.WritePositionlessPrefab`](/game-api/types/alta-world/streamerhelper#m-writepositionlessprefab), [`NetworkPrefab.SaveSerialize`](/game-api/types/alta-networking/networkprefab#m-saveserialize), [`NetworkPrefab.SaveSerializeEmpty`](/game-api/types/alta-networking/networkprefab#m-saveserializeempty), [`NetworkPrefab.SaveSerializeEntity`](/game-api/types/alta-networking/networkprefab#m-saveserializeentity), [`SavingSystem.LatestChunkVersioning`](/game-api/types/alta-world/savingsystem#m-latestchunkversioning), [`SavingSystem.Load`](/game-api/types/alta-world/savingsystem#m-load), [`SavingSystem.Migrate`](/game-api/types/alta-world/savingsystem#m-migrate), [`SavingSystem.Read`](/game-api/types/alta-world/savingsystem#m-read), [`SavingSystem.ReadBasic`](/game-api/types/alta-world/savingsystem#m-readbasic), [`SavingSystem.Serialize`](/game-api/types/alta-world/savingsystem#m-serialize), [`SavingSystem.SerializeEmpty`](/game-api/types/alta-world/savingsystem#m-serializeempty), [`SavingSystem.VersionSetup.Serialize`](/game-api/types/alta-world/savingsystem-versionsetup#m-serialize), [`SavingSystem.VersionSetup.serializer`](/game-api/types/alta-world/savingsystem-versionsetup#m-serializer), [`ChunkSaveFormat.Version.ChunkVersioning`](/game-api/types/alta-utilities/chunksaveformat-version#m-chunkversioning), [`ChunkSaveFormat.Version.Version`](/game-api/types/alta-utilities/chunksaveformat-version#m-ctor-2), [`PlayerSave.PrefabChunkVersioning`](/game-api/types/alta-utilities/playersave#m-prefabchunkversioning), [`ClassSerializationHelper.Prepare`](/game-api/types/global-c-d/classserializationhelper#m-prepare), [`ClassSerializationHelper.Finalize<T>.BeginInvoke`](/game-api/types/global-c-d/classserializationhelper-finalize-t#m-begininvoke), [`ClassSerializationHelper.Finalize<T>.Invoke`](/game-api/types/global-c-d/classserializationhelper-finalize-t#m-invoke), [`ClassSerializationHelper.MemberHandler<T>.BeginInvoke`](/game-api/types/global-c-d/classserializationhelper-memberhandler-t#m-begininvoke), [`ClassSerializationHelper.MemberHandler<T>.EndInvoke`](/game-api/types/global-c-d/classserializationhelper-memberhandler-t#m-endinvoke), [`ClassSerializationHelper.MemberHandler<T>.Invoke`](/game-api/types/global-c-d/classserializationhelper-memberhandler-t#m-invoke), [`ClassSerializer<T>.ClassSerializer<T>`](/game-api/types/global-c-d/classserializer-t#m-ctor), [`ClassSerializer<T>.sync`](/game-api/types/global-c-d/classserializer-t#m-sync), [`PlayerController.SerializeHands`](/game-api/types/global-p/playercontroller#m-serializehands), [`PlayerController.SerializeInteractor`](/game-api/types/global-p/playercontroller#m-serializeinteractor), [`SerializedSavedDynamicObject.GetVersion`](/game-api/types/global-s/serializedsaveddynamicobject#m-getversion), [`SerializedSavedDynamicObject.SerializedSavedDynamicObject`](/game-api/types/global-s/serializedsaveddynamicobject#m-ctor), [`SerializedSavedDynamicObject.Versioning`](/game-api/types/global-s/serializedsaveddynamicobject#m-versioning-2), [`TypeSerializationHelper.BitSerialization.Serialize`](/game-api/types/global-t-x/typeserializationhelper-bitserialization#m-serialize), [`TypeSerializationHelper.BoolSerialization.Serialize`](/game-api/types/global-t-x/typeserializationhelper-boolserialization#m-serialize), [`TypeSerializationHelper.ColorSerialization.Serialize`](/game-api/types/global-t-x/typeserializationhelper-colorserialization#m-serialize), [`TypeSerializationHelper.DateTimeSerialization.Serialize`](/game-api/types/global-t-x/typeserializationhelper-datetimeserialization#m-serialize), [`TypeSerializationHelper.EnumSerialization<T>.Serialize`](/game-api/types/global-t-x/typeserializationhelper-enumserialization-t#m-serialize), [`TypeSerializationHelper.FailedTypeSerialization.Handle`](/game-api/types/global-t-x/typeserializationhelper-failedtypeserialization#m-handle), [`TypeSerializationHelper.FailedTypeSerialization.HandleArray`](/game-api/types/global-t-x/typeserializationhelper-failedtypeserialization#m-handlearray), [`TypeSerializationHelper.FailedTypeSerialization.Serialize`](/game-api/types/global-t-x/typeserializationhelper-failedtypeserialization#m-serialize), [`TypeSerializationHelper.FloatBitsSerialization.Serialize`](/game-api/types/global-t-x/typeserializationhelper-floatbitsserialization#m-serialize), [`TypeSerializationHelper.FloatPrecisionSerialization.Serialize`](/game-api/types/global-t-x/typeserializationhelper-floatprecisionserialization#m-serialize), [`TypeSerializationHelper.FloatSerialization.Serialize`](/game-api/types/global-t-x/typeserializationhelper-floatserialization#m-serialize), [`TypeSerializationHelper.HashedSerialization<T>.Serialize`](/game-api/types/global-t-x/typeserializationhelper-hashedserialization-t#m-serialize), [`TypeSerializationHelper.IntSerialization.Serialize`](/game-api/types/global-t-x/typeserializationhelper-intserialization#m-serialize), [`TypeSerializationHelper.ITypeSerialization.Handle`](/game-api/types/global-t-x/typeserializationhelper-itypeserialization#m-handle), [`TypeSerializationHelper.ITypeSerialization.HandleArray`](/game-api/types/global-t-x/typeserializationhelper-itypeserialization#m-handlearray), [`TypeSerializationHelper.LogicManagerSetSerialization.Serialize`](/game-api/types/global-t-x/typeserializationhelper-logicmanagersetserialization#m-serialize), [`TypeSerializationHelper.LogicValueDataSerialization<T>.Serialize`](/game-api/types/global-t-x/typeserializationhelper-logicvaluedataserialization-t#m-serialize), [`TypeSerializationHelper.NetworkPrefabSerialization.Serialize`](/game-api/types/global-t-x/typeserializationhelper-networkprefabserialization#m-serialize), [`TypeSerializationHelper.QuaternionSerialization.Serialize`](/game-api/types/global-t-x/typeserializationhelper-quaternionserialization#m-serialize), [`TypeSerializationHelper.SaveDataSerialization<T>.Serialize`](/game-api/types/global-t-x/typeserializationhelper-savedataserialization-t#m-serialize), [`TypeSerializationHelper.SaveDataSerialization<T>.SerializeExt`](/game-api/types/global-t-x/typeserializationhelper-savedataserialization-t#m-serializeext), [`TypeSerializationHelper.StringSerialization.Serialize`](/game-api/types/global-t-x/typeserializationhelper-stringserialization#m-serialize), [`TypeSerializationHelper.SubClassSerialization<T>.Serialize`](/game-api/types/global-t-x/typeserializationhelper-subclassserialization-t#m-serialize) and 9 more.
