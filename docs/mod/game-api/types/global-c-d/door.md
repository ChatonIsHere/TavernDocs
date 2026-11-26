---
title: "Door"
description: "Base for networked doors with a saved open/closed state that the server syncs to players."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Door

An **abstract class** in `Root.Township`, the global namespace.

Base for networked doors with a saved open/closed state that the server syncs to players. Subclasses implement `HandleChange` to animate it.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<DoorSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<DoorSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`DoorSaveData`](/mod/game-api/types/global-c-d/doorsavedata), [`SlidingDoor`](/mod/game-api/types/global-s/slidingdoor)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected Door()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isopen" /><code>{"private bool isOpen"}</code> | <span className="api-desc">Backing field for `IsOpen`; also the saved value.</span> |
| <Link id="m-sync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | <span className="api-desc">Method sync used for the open state.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isopen-2" /><code>{"bool IsOpen { get; }"}</code> | <span className="api-desc">Whether the door is currently open.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Creates the method sync for the open state.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends the current open state to a joining player.</span> |
| <Link id="m-setopen" /><code>{"void SetOpen(bool isOpen)"}</code> | <span className="api-desc">Server: sets the open state, syncs it to the chunks and calls `HandleChange` if it changed.</span> |
| <Link id="m-handlechange" /><code>{"protected abstract void HandleChange()"}</code> | <span className="api-desc">Called when the open state changes, on the server in `SetOpen` and on clients when a sync arrives.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Reads or writes the open state and calls `HandleChange` when a read changes it.</span> |

</details>
