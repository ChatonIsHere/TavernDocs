---
title: "EntitySpawnedHandler"
description: "delegate EntitySpawnedHandler in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EntitySpawnedHandler

A **delegate** in `Root.Township`, `Alta.Networking`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"EntitySpawnedHandler(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |

## Used in

Members of other types that take, return or hold a `EntitySpawnedHandler`:

[`ClientSpawnManager.entitySpawnedListeners`](/game-api/types/alta-networking/clientspawnmanager#m-entityspawnedlisteners), [`ClientSpawnManager.RunSpawnEvent`](/game-api/types/alta-networking/clientspawnmanager#m-runspawnevent), [`ClientSpawnManager.SpawnEvent`](/game-api/types/alta-networking/clientspawnmanager#m-spawnevent), [`ClientSpawnManager.WaitForSpawn`](/game-api/types/alta-networking/clientspawnmanager#m-waitforspawn), [`ServerSpawnManager.WaitForSpawn`](/game-api/types/alta-networking/serverspawnmanager#m-waitforspawn), [`SpawnManager.WaitForSpawn`](/game-api/types/alta-networking/spawnmanager#m-waitforspawn), [`LocalSpawnManager.WaitForSpawn`](/game-api/types/global-i-l/localspawnmanager#m-waitforspawn).
