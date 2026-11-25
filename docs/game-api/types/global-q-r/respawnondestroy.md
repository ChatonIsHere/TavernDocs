---
title: "RespawnOnDestroy"
description: "class RespawnOnDestroy in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RespawnOnDestroy

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<RespawnOnDestroySaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<RespawnOnDestroySaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`RespawnOnDestroySaveData`](/game-api/types/global-q-r/respawnondestroysavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RespawnOnDestroy()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-maximumtimetorespawn" /><code>{"private float maximumTimeToRespawn"}</code> |  |
| <Link id="m-minimumtimetorespawn" /><code>{"private float minimumTimeToRespawn"}</code> |  |
| <Link id="m-respawnentry" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" respawnEntry"}</code> |  |
| <Link id="m-respawnobject" /><code>{"private "}<Link to="/game-api/types/alta-world/savablesaveddynamicobject">{"SavableSavedDynamicObject"}</Link>{" respawnObject"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-checkrespawn" /><code>{"private void CheckRespawn("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-respawn" /><code>{"private void Respawn()"}</code> |  |
