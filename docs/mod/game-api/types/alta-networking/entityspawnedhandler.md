---
title: "EntitySpawnedHandler"
description: "Callback given a NetworkEntity once it has spawned."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EntitySpawnedHandler

A **delegate** in `Root.Township`, `Alta.Networking`.

Callback given a `NetworkEntity` once it has spawned. Used with `WaitForSpawn` to act on an entity as soon as it exists on the client.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EntitySpawnedHandler(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `EntitySpawnedHandler`:

[`ClientSpawnManager.entitySpawnedListeners`](/mod/game-api/types/alta-networking/clientspawnmanager#m-entityspawnedlisteners), [`ClientSpawnManager.RunSpawnEvent`](/mod/game-api/types/alta-networking/clientspawnmanager#m-runspawnevent), [`ClientSpawnManager.SpawnEvent`](/mod/game-api/types/alta-networking/clientspawnmanager#m-spawnevent), [`ClientSpawnManager.WaitForSpawn`](/mod/game-api/types/alta-networking/clientspawnmanager#m-waitforspawn), [`ServerSpawnManager.WaitForSpawn`](/mod/game-api/types/alta-networking/serverspawnmanager#m-waitforspawn), [`SpawnManager.WaitForSpawn`](/mod/game-api/types/alta-networking/spawnmanager#m-waitforspawn), [`LocalSpawnManager.WaitForSpawn`](/mod/game-api/types/global-i-l/localspawnmanager#m-waitforspawn).
