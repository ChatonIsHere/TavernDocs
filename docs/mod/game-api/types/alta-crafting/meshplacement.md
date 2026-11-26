---
title: "MeshPlacement"
description: "Network behaviour that sets a part's mesh, material and local transform from a hashed MeshPlacementData asset, saved with the entity and synced to players..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MeshPlacement

A **class** in `Root.Township`, `Alta.Scrapper`.

Network behaviour that sets a part's mesh, material and local transform from a hashed `MeshPlacementData` asset, saved with the entity and synced to players when they join.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<MeshPlacementSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<MeshPlacementSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`MeshPlacementSaveData`](/mod/game-api/types/alta-crafting/meshplacementsavedata)
- **Attributes** `ScrapperArgument`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MeshPlacement()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/meshplacementdata">{"MeshPlacementData"}</Link>{" data"}</code> | The placement asset in use, set on load. |
| <Link id="m-meshfilter" /><code>{"private MeshFilter meshFilter"}</code> | Mesh filter that gets the mesh. |
| <Link id="m-meshrenderer" /><code>{"private MeshRenderer meshRenderer"}</code> | Renderer that gets the material. |
| <Link id="m-sync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | The sync for the asset. |
| <Link id="m-transform" /><code>{"private Transform transform"}</code> | Transform that gets the local scale, rotation and position. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the sync on `SyncScrapper`. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the current asset to the joining player. |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads the asset by hash; remote clients take the read value. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applydata" /><code>{"private void ApplyData()"}</code> | Applies the asset's scale, rotation, position, mesh and material. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Does nothing. |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Message handler: serializes the asset and applies it on remote clients. |

</details>
