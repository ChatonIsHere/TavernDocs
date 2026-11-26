---
title: "WipeManager"
description: "class WipeManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WipeManager

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`SingletonBehaviour<WipeManager>`](/game-api/types/assembly-other/singletonbehaviour-t), [`ISavable<WipeManagerData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<WipeManagerData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`WipeManager`](/game-api/types/global-t-x/wipemanager), [`WipeManagerData`](/game-api/types/global-t-x/wipemanagerdata)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"WipeManager()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-chunkstowipe" /><code>{"private HashSet<string> chunksToWipe"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-chunkstoprewipe" /><code>{"static IEnumerable<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> ChunksToPreWipe() (iterator)"}</code> |
| <Link id="m-markneedingprewipeoperation" /><code>{"static void MarkNeedingPreWipeOperation("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |
