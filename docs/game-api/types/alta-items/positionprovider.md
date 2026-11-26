---
title: "PositionProvider"
description: "Server: outputs this object's position (world or local) through a position event once on spawn, and again whenever it moves if set to."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PositionProvider

A **class** in `Root.Township`, `Alta.Logic`.

Server: outputs this object's position (world or local) through a position event once on spawn, and again whenever it moves if set to. Saves its two settings.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<PositionProviderSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<PositionProviderSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase), [`IBuildRendererBakeable`](/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Derived types** [`PositionProviderSaveData`](/game-api/types/alta-items/positionprovidersavedata)
- **Documented in** [Other systems](/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PositionProvider()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | This object's transform, cached on spawn. |
| <Link id="m-islocalposition" /><code>{"private bool isLocalPosition"}</code> | Send the local position instead of the world position. |
| <Link id="m-ismoving" /><code>{"private bool isMoving"}</code> | Keep sending the position as the object moves. |
| <Link id="m-positionset" /><code>{"private "}<Link to="/game-api/types/global-p/positionhandler">{"PositionHandler"}</Link>{" positionSet"}</code> | Event the position is sent through. |
| <Link id="m-updateposition" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updatePosition"}</code> | Handle for the per-frame `UpdatePosition` call. |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ibuildrendererbakeable-sortingorder" /><code>{"private int IBuildRendererBakeable.SortingOrder { get; }"}</code> | Bake order; always 0. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: caches the transform and runs `Setup`. |
| <Link id="m-setup-2" /><code>{"void Setup(bool isLocalPosition, bool isMoving)"}</code> | One overload sends the position now and starts watching for movement if `isMoving`; the other just sets `isLocalPosition` and `isMoving`. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"private void IBuildRendererBakeable.Bake(bool isSaving)"}</code> | Empty build bake hook. |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> | Empty build bake hook. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Stops the per-frame position check. |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> | One overload sends the position now and starts watching for movement if `isMoving`; the other just sets `isLocalPosition` and `isMoving`. |
| <Link id="m-updateposition-2" /><code>{"private void UpdatePosition()"}</code> | Each frame, sends the position again if the transform changed. |

</details>
