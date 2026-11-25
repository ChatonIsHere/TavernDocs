---
title: "Door"
description: "abstract class Door in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Door

An **abstract class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<DoorSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<DoorSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`DoorSaveData`](/game-api/types/global-c-d/doorsavedata), [`SlidingDoor`](/game-api/types/global-s/slidingdoor)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected Door()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-isopen" /><code>{"private bool isOpen"}</code> |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-isopen-2" /><code>{"bool IsOpen { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |
| <Link id="m-setopen" /><code>{"void SetOpen(bool isOpen)"}</code> |
| <Link id="m-handlechange" /><code>{"protected abstract void HandleChange()"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |

</details>
