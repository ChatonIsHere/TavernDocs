---
title: "RespawnOnDestroy"
description: "Server: when a child entity is destroyed in play, respawns a saved copy after a random delay and parents it back under this entity."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RespawnOnDestroy

A **class** in `Root.Township`, no namespace.

Server: when a child entity is destroyed in play, respawns a saved copy after a random delay and parents it back under this entity.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<RespawnOnDestroySaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<RespawnOnDestroySaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`RespawnOnDestroySaveData`](/game-api/types/global-q-r/respawnondestroysavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RespawnOnDestroy()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maximumtimetorespawn" /><code>{"private float maximumTimeToRespawn"}</code> | Longest respawn delay in seconds. |
| <Link id="m-minimumtimetorespawn" /><code>{"private float minimumTimeToRespawn"}</code> | Shortest respawn delay in seconds. |
| <Link id="m-respawnentry" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" respawnEntry"}</code> | Pending respawn on the timeline. |
| <Link id="m-respawnobject" /><code>{"private "}<Link to="/game-api/types/alta-world/savablesaveddynamicobject">{"SavableSavedDynamicObject"}</Link>{" respawnObject"}</code> | Saved copy of the object to respawn. In this code it's only set from save data. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Subscribes to the destroy event of every child entity. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkrespawn" /><code>{"private void CheckRespawn("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Schedules a respawn on the timeline when a child is destroyed, but not when it's only unloaded. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Cancels a pending respawn. |
| <Link id="m-respawn" /><code>{"private void Respawn()"}</code> | Spawns the saved object, initializes it as server, watches it again and parents it here. |

</details>
