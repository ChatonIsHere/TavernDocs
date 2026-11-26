---
title: "SavingSystem"
description: "Static core of entity saving: maps each savable type to its versioned save data classes (from SaveStructure), writes and reads them with sizes and migrates..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SavingSystem

A **static class** in `Root.Township`, `Alta.Saving`.

Static core of entity saving: maps each savable type to its versioned save data classes (from `[SaveStructure]`), writes and reads them with sizes and migrates old versions to the latest.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Nested types** [`Reinitialize_Saving`](/game-api/types/alta-world/savingsystem-reinitialize_saving), [`SavingSetup`](/game-api/types/alta-world/savingsystem-savingsetup), [`VersionSetup`](/game-api/types/alta-world/savingsystem-versionsetup)

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isavabletype" /><code>{"private static readonly Type ISavableType"}</code> | The open `ISavable<>` type, used to check each savable implements its latest data version. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-savingsetups" /><code>{"private static Dictionary<Type, "}<Link to="/game-api/types/alta-world/savingsystem-savingsetup">{"SavingSystem.SavingSetup"}</Link>{"> savingSetups"}</code> | Saving setup for each savable type. |
| <Link id="m-savingtypes" /><code>{"private static Dictionary<uint, "}<Link to="/game-api/types/alta-world/savingsystem-savingsetup">{"SavingSystem.SavingSetup"}</Link>{"> savingTypes"}</code> | Saving setup for each type hash. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isloadingplayersave" /><code>{"static bool IsLoadingPlayerSave { get; set; }"}</code> | True while a player character is loading its save; heat sources check it. |
| <Link id="m-latestchunkversioning" /><code>{"static "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" LatestChunkVersioning { get; private set; }"}</code> | Latest version of every save type, written with new saves. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getsetupofdata" /><code>{"static "}<Link to="/game-api/types/alta-world/savingsystem-savingsetup">{"SavingSystem.SavingSetup"}</Link>{" GetSetupOfData("}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" data)"}</code> | Gets the saving setup for a save data object from its `[SaveStructure]` type. |
| <Link id="m-load-2" /><code>{"static bool Load("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning, uint hash, out "}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" data)"}</code> | Reads one block by its hash; the entity overloads find or add the component and apply the data. Returns false if the hash is unknown. |
| <Link id="m-readbasic" /><code>{"static T ReadBasic<T>(uint[] data, int bytes, "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" versioning)"}</code> | Reads a `BasicSaveData` object from raw data with the given versioning. |
| <Link id="m-readmissing" /><code>{"static void ReadMissing("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Skips a block whose type isn't known, using its stored size. |
| <Link id="m-reinitialize" /><code>{"static void Reinitialize()"}</code> | Rebuilds the setups from every `[SaveStructure]` class in this game assembly only, then the latest versioning. |
| <Link id="m-serialize" /><code>{"static List<"}<Link to="/game-api/types/global-i-l/isavingcontext">{"ISavingContext"}</Link>{"> Serialize("}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" networkEntity, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childrenSerializer, bool isAccumulatingContexts = false)"}</code> | Writes or reads all savable blocks of an entity or one savable, each tagged by type hash and ended by a 0. |
| <Link id="m-serialize-2" /><code>{"static void Serialize("}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-world/isavablesavebase">{"ISavableSaveBase"}</Link>{" savable)"}</code> | Writes or reads all savable blocks of an entity or one savable, each tagged by type hash and ended by a 0. |
| <Link id="m-serializeempty" /><code>{"static void SerializeEmpty("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning)"}</code> | Reads past all blocks of an entity without applying them. |
| <Link id="m-writebasic" /><code>{"static ValueTuple<int, uint[]> WriteBasic<T>(T data)"}</code> | Writes a `BasicSaveData` object to raw data with the latest versioning. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-load" /><code>{"private static bool Load("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" networkEntity, uint hash, "}<Link to="/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childrenSerializer, bool isAccumulatingContexts, ref List<"}<Link to="/game-api/types/global-i-l/isavingcontext">{"ISavingContext"}</Link>{"> contexts)"}</code> | Reads one block by its hash; the entity overloads find or add the component and apply the data. Returns false if the hash is unknown. |
| <Link id="m-load-3" /><code>{"private static bool Load("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning, "}<Link to="/game-api/types/alta-world/isavablesavebase">{"ISavableSaveBase"}</Link>{" savable, uint hash, "}<Link to="/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childrenSerializer)"}</code> | Reads one block by its hash; the entity overloads find or add the component and apply the data. Returns false if the hash is unknown. |
| <Link id="m-migrate" /><code>{"private static "}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate("}<Link to="/game-api/types/alta-world/savingsystem-savingsetup">{"SavingSystem.SavingSetup"}</Link>{" setup, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, uint version, "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" versioning)"}</code> | Reads data written in an old version and calls `Migrate` step by step up to the latest. Returns null if a step fails. |
| <Link id="m-read" /><code>{"private static "}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Read("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-world/isavablesavebase">{"ISavableSaveBase"}</Link>{" savable, "}<Link to="/game-api/types/alta-world/savingsystem-savingsetup">{"SavingSystem.SavingSetup"}</Link>{" setup, uint version, "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" versioning)"}</code> | Reads one sized block and migrates it, then skips or backtracks if the bits read don't match the stored size, logging an error. |
| <Link id="m-write" /><code>{"private static void Write("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-world/isavablesavebase">{"ISavableSaveBase"}</Link>{" savable, "}<Link to="/game-api/types/alta-world/savingsystem-savingsetup">{"SavingSystem.SavingSetup"}</Link>{" setup, "}<Link to="/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childrenSerializer)"}</code> | Writes one savable's latest save data, preceded by its size in bits; logs an error on failure. |

</details>
