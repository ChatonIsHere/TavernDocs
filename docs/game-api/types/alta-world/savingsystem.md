---
title: "SavingSystem"
description: "static class SavingSystem in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SavingSystem

A **static class** in `Root.Township`, `Alta.Saving`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Nested types** [`Reinitialize_Saving`](/game-api/types/alta-world/savingsystem-reinitialize_saving), [`SavingSetup`](/game-api/types/alta-world/savingsystem-savingsetup), [`VersionSetup`](/game-api/types/alta-world/savingsystem-versionsetup)

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-isavabletype" /><code>{"private static readonly Type ISavableType"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-savingsetups" /><code>{"private static Dictionary<Type, "}<Link to="/game-api/types/alta-world/savingsystem-savingsetup">{"SavingSystem.SavingSetup"}</Link>{"> savingSetups"}</code> |
| <Link id="m-savingtypes" /><code>{"private static Dictionary<uint, "}<Link to="/game-api/types/alta-world/savingsystem-savingsetup">{"SavingSystem.SavingSetup"}</Link>{"> savingTypes"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-isloadingplayersave" /><code>{"static bool IsLoadingPlayerSave { get; set; }"}</code> |
| <Link id="m-latestchunkversioning" /><code>{"static "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" LatestChunkVersioning { get; private set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-getsetupofdata" /><code>{"static "}<Link to="/game-api/types/alta-world/savingsystem-savingsetup">{"SavingSystem.SavingSetup"}</Link>{" GetSetupOfData("}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" data)"}</code> |
| <Link id="m-load-2" /><code>{"static bool Load("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning, uint hash, out "}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" data)"}</code> |
| <Link id="m-readbasic" /><code>{"static T ReadBasic<T>(uint[] data, int bytes, "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" versioning)"}</code> |
| <Link id="m-readmissing" /><code>{"static void ReadMissing("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-reinitialize" /><code>{"static void Reinitialize()"}</code> |
| <Link id="m-serialize" /><code>{"static List<"}<Link to="/game-api/types/global-i-l/isavingcontext">{"ISavingContext"}</Link>{"> Serialize("}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" networkEntity, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childrenSerializer, bool isAccumulatingContexts = false)"}</code> |
| <Link id="m-serialize-2" /><code>{"static void Serialize("}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-world/isavablesavebase">{"ISavableSaveBase"}</Link>{" savable)"}</code> |
| <Link id="m-serializeempty" /><code>{"static void SerializeEmpty("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning)"}</code> |
| <Link id="m-writebasic" /><code>{"static ValueTuple<int, uint[]> WriteBasic<T>(T data)"}</code> |

<details>
<summary>5 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-load" /><code>{"private static bool Load("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" networkEntity, uint hash, "}<Link to="/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childrenSerializer, bool isAccumulatingContexts, ref List<"}<Link to="/game-api/types/global-i-l/isavingcontext">{"ISavingContext"}</Link>{"> contexts)"}</code> |
| <Link id="m-load-3" /><code>{"private static bool Load("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning, "}<Link to="/game-api/types/alta-world/isavablesavebase">{"ISavableSaveBase"}</Link>{" savable, uint hash, "}<Link to="/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childrenSerializer)"}</code> |
| <Link id="m-migrate" /><code>{"private static "}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate("}<Link to="/game-api/types/alta-world/savingsystem-savingsetup">{"SavingSystem.SavingSetup"}</Link>{" setup, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, uint version, "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" versioning)"}</code> |
| <Link id="m-read" /><code>{"private static "}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Read("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-world/isavablesavebase">{"ISavableSaveBase"}</Link>{" savable, "}<Link to="/game-api/types/alta-world/savingsystem-savingsetup">{"SavingSystem.SavingSetup"}</Link>{" setup, uint version, "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" versioning)"}</code> |
| <Link id="m-write" /><code>{"private static void Write("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-world/isavablesavebase">{"ISavableSaveBase"}</Link>{" savable, "}<Link to="/game-api/types/alta-world/savingsystem-savingsetup">{"SavingSystem.SavingSetup"}</Link>{" setup, "}<Link to="/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childrenSerializer)"}</code> |

</details>
