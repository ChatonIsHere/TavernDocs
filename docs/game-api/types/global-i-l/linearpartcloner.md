---
title: "LinearPartCloner"
description: "Networked, saved part that clones its last copy in a row with a fixed offset and rotation, up to a count."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LinearPartCloner

A **class** in `Root.Township`, no namespace.

Networked, saved part that clones its last copy in a row with a fixed offset and rotation, up to a count. The server syncs the count to clients.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<LinearPartClonerData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<LinearPartClonerData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`LinearPartClonerData`](/game-api/types/global-i-l/linearpartclonerdata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LinearPartCloner()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isoffsetrelativetolast" /><code>{"private bool isOffsetRelativeToLast"}</code> | When true the offset is in the last copy's local space, otherwise added to its local position. |
| <Link id="m-last" /><code>{"private Transform last"}</code> | The latest copy, cloned for the next one. Nothing in this file sets it first, so `template` looks unused. |
| <Link id="m-offset" /><code>{"private Vector3 offset"}</code> | Position offset from one copy to the next. |
| <Link id="m-rotation" /><code>{"private Vector3 rotation"}</code> | Extra rotation (Euler) for each copy. |
| <Link id="m-savedata" /><code>{"private "}<Link to="/game-api/types/global-i-l/linearpartclonerdata">{"LinearPartClonerData"}</Link>{" saveData"}</code> | Saved data holding the count. |
| <Link id="m-spawnedcount" /><code>{"private int spawnedCount"}</code> | How many parts exist, counting the original. |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | Method sync for the count (`SyncCount`). |
| <Link id="m-template" /><code>{"private Transform template"}</code> | Not read in this file. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the count sync. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the current count to a joining player. |
| <Link id="m-spawn" /><code>{"void Spawn(int count)"}</code> | Sets the count and clones copies until it is reached. Server: also sends the count to clients. Copies are hidden and not saved. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: respawns copies on a prefab instance when the count changed. |
| <Link id="m-regenerate" /><code>{"private void Regenerate()"}</code> | Editor context menu: respawns copies on a prefab instance. |
| <Link id="m-synccount" /><code>{"private void SyncCount("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes the count (1 to 255) or, on a client, reads it and spawns copies. |

</details>

## Used in

Members of other types that take, return or hold a `LinearPartCloner`:

[`LinearPartClonerPart.cloners`](/game-api/types/global-i-l/linearpartclonerpart#m-cloners).
