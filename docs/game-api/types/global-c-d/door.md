---
title: "Door"
description: "Base for networked doors with a saved open/closed state that the server syncs to players."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Door

An **abstract class** in `Root.Township`, no namespace.

Base for networked doors with a saved open/closed state that the server syncs to players. Subclasses implement `HandleChange` to animate it.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<DoorSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<DoorSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`DoorSaveData`](/game-api/types/global-c-d/doorsavedata), [`SlidingDoor`](/game-api/types/global-s/slidingdoor)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected Door()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isopen" /><code>{"private bool isOpen"}</code> | Backing field for `IsOpen`; also the saved value. |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | Method sync used for the open state. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isopen-2" /><code>{"bool IsOpen { get; }"}</code> | Whether the door is currently open. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the method sync for the open state. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the current open state to a joining player. |
| <Link id="m-setopen" /><code>{"void SetOpen(bool isOpen)"}</code> | Server: sets the open state, syncs it to the chunks and calls `HandleChange` if it changed. |
| <Link id="m-handlechange" /><code>{"protected abstract void HandleChange()"}</code> | Called when the open state changes, on the server in `SetOpen` and on clients when a sync arrives. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes the open state and calls `HandleChange` when a read changes it. |

</details>
