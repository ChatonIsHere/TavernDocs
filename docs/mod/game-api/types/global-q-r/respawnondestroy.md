---
title: "RespawnOnDestroy"
description: "Server: when a child entity is destroyed in play, respawns a saved copy after a random delay and parents it back under this entity."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RespawnOnDestroy

A **class** in `Root.Township`, the global namespace.

Server: when a child entity is destroyed in play, respawns a saved copy after a random delay and parents it back under this entity.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<RespawnOnDestroySaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<RespawnOnDestroySaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`RespawnOnDestroySaveData`](/mod/game-api/types/global-q-r/respawnondestroysavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RespawnOnDestroy()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maximumtimetorespawn" /><code>{"private float maximumTimeToRespawn"}</code> | <span className="api-desc">Longest respawn delay in seconds.</span> |
| <Link id="m-minimumtimetorespawn" /><code>{"private float minimumTimeToRespawn"}</code> | <span className="api-desc">Shortest respawn delay in seconds.</span> |
| <Link id="m-respawnentry" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" respawnEntry"}</code> | <span className="api-desc">Pending respawn on the timeline.</span> |
| <Link id="m-respawnobject" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/savablesaveddynamicobject">{"SavableSavedDynamicObject"}</Link>{" respawnObject"}</code> | <span className="api-desc">Saved copy of the object to respawn. In this code it's only set from save data.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Subscribes to the destroy event of every child entity.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkrespawn" /><code>{"private void CheckRespawn("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Schedules a respawn on the timeline when a child is destroyed, but not when it's only unloaded.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Cancels a pending respawn.</span> |
| <Link id="m-respawn" /><code>{"private void Respawn()"}</code> | <span className="api-desc">Spawns the saved object, initializes it as server, watches it again and parents it here.</span> |

</details>
