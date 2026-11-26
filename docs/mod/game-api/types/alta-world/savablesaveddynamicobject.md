---
title: "SavableSavedDynamicObject"
description: "A saved entity in a form that can be stored inside other save data, with the chunk versioning it was saved under."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SavableSavedDynamicObject

A **class** in `Root.Township`, `Alta.Chunks`.

A saved entity in a form that can be stored inside other save data, with the chunk versioning it was saved under. Used by `RespawnOnDestroy` and `SentGift`.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SavableSavedDynamicObject()"}</code> | Creates a `SavableSavedDynamicObject` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-chunkversioning" /><code>{"uint[] chunkVersioning"}</code> | The chunk versioning at save time, so the data loads correctly later. |
| <Link id="m-data" /><code>{"uint[] data"}</code> | The entity's saved data, all chunks joined into one array. |
| <Link id="m-hash" /><code>{"uint hash"}</code> | Prefab hash of the saved entity. |
| <Link id="m-messagesizeinbytes" /><code>{"uint messageSizeInBytes"}</code> | Size of the saved data in bytes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-op-implicit" /><code>{"static "}<Link to="/mod/game-api/types/alta-world/savablesaveddynamicobject">{"SavableSavedDynamicObject"}</Link>{" op_Implicit("}<Link to="/mod/game-api/types/alta-world/saveddynamicobject">{"SavedDynamicObject"}</Link>{" savedDynamicObject)"}</code> | Converts a `SavedDynamicObject`, joining its data and stamping the latest chunk versioning. |
| <Link id="m-spawn" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Spawn()"}</code> | Spawns the saved entity again, using the stored versioning. |
| <Link id="m-spawnowned" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" SpawnOwned()"}</code> | Spawns the saved entity again as an owned object, using the stored versioning. |

## Used in

Members of other types that take, return or hold a `SavableSavedDynamicObject`:

[`RespawnOnDestroy.respawnObject`](/mod/game-api/types/global-q-r/respawnondestroy#m-respawnobject), [`RespawnOnDestroySaveData.respawnObject`](/mod/game-api/types/global-q-r/respawnondestroysavedata#m-respawnobject), [`SentGift.toSpawn`](/mod/game-api/types/global-s/sentgift#m-tospawn), [`SentGiftData.toSpawn`](/mod/game-api/types/global-s/sentgiftdata#m-tospawn).
