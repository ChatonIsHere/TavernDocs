---
title: "PositionProvider"
description: "A saved position (local or world) that logic can move."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PositionProvider

A **class** in `Root.Township`, `Alta.Logic`.

A saved position (local or world) that logic can move.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<PositionProviderSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<PositionProviderSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase), [`IBuildRendererBakeable`](/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Derived types** [`PositionProviderSaveData`](/game-api/types/alta-items/positionprovidersavedata)
- **Documented in** [Other systems](/game-api/game-systems/other-systems)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PositionProvider()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> |
| <Link id="m-islocalposition" /><code>{"private bool isLocalPosition"}</code> |
| <Link id="m-ismoving" /><code>{"private bool isMoving"}</code> |
| <Link id="m-positionset" /><code>{"private "}<Link to="/game-api/types/global-p/positionhandler">{"PositionHandler"}</Link>{" positionSet"}</code> |
| <Link id="m-updateposition" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updatePosition"}</code> |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-ibuildrendererbakeable-sortingorder" /><code>{"private int IBuildRendererBakeable.SortingOrder { get; }"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |
| <Link id="m-setup-2" /><code>{"void Setup(bool isLocalPosition, bool isMoving)"}</code> |

<details>
<summary>5 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-bake" /><code>{"private void IBuildRendererBakeable.Bake(bool isSaving)"}</code> |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> |
| <Link id="m-updateposition-2" /><code>{"private void UpdatePosition()"}</code> |

</details>
