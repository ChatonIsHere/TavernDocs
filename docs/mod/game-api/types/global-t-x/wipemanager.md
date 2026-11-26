---
title: "WipeManager"
description: "Saved singleton that remembers which chunks need a pre-wipe pass."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WipeManager

A **class** in `Root.Township`, the global namespace.

Saved singleton that remembers which chunks need a pre-wipe pass. `ServerWipeManager` loads and processes those chunks during a wipe.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`SingletonBehaviour<WipeManager>`](/mod/game-api/types/assembly-other/singletonbehaviour-t), [`ISavable<WipeManagerData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<WipeManagerData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`WipeManager`](/mod/game-api/types/global-t-x/wipemanager), [`WipeManagerData`](/mod/game-api/types/global-t-x/wipemanagerdata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WipeManager()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chunkstowipe" /><code>{"private HashSet<string> chunksToWipe"}</code> | Saved set of chunk identifiers to process before a wipe. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Logger for this class. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-chunkstoprewipe" /><code>{"static IEnumerable<"}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> ChunksToPreWipe() (iterator)"}</code> | Yields the loaded `Chunk` for each marked identifier, logging any it can't find. Empty if there's no instance. |
| <Link id="m-markneedingprewipeoperation" /><code>{"static void MarkNeedingPreWipeOperation("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Adds a chunk's identifier to the pre-wipe list. `TradeVendor` and `CommunalStorage` call it. |
