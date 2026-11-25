---
title: "MeshPlacement"
description: "class MeshPlacement in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MeshPlacement

A **class** in `Root.Township`, `Alta.Scrapper`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<MeshPlacementSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<MeshPlacementSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`MeshPlacementSaveData`](/game-api/types/alta-crafting/meshplacementsavedata)
- **Attributes** `ScrapperArgument`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MeshPlacement()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-data" /><code>{"private "}<Link to="/game-api/types/alta-crafting/meshplacementdata">{"MeshPlacementData"}</Link>{" data"}</code> |
| <Link id="m-meshfilter" /><code>{"private MeshFilter meshFilter"}</code> |
| <Link id="m-meshrenderer" /><code>{"private MeshRenderer meshRenderer"}</code> |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> |
| <Link id="m-transform" /><code>{"private Transform transform"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-applydata" /><code>{"private void ApplyData()"}</code> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |

</details>
