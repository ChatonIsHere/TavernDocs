---
title: "Visibility"
description: "Network behaviour that turns a set of mesh renderers on or off from a hashed VisibilityData asset, saved with the entity and synced to players when they join."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Visibility

A **class** in `Root.Township`, `Alta.Scrapper`.

Network behaviour that turns a set of mesh renderers on or off from a hashed `VisibilityData` asset, saved with the entity and synced to players when they join.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<VisibilitySaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<VisibilitySaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`VisibilitySaveData`](/game-api/types/alta-crafting/visibilitysavedata)
- **Attributes** `ScrapperArgument`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Visibility()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code>{"private "}<Link to="/game-api/types/alta-crafting/visibilitydata">{"VisibilityData"}</Link>{" data"}</code> | The visibility asset in use. If a save has none, load picks a random one. |
| <Link id="m-meshrenderers" /><code>{"private MeshRenderer[] meshRenderers"}</code> | Renderers it shows or hides. |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | The sync for the asset. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the sync on `SyncScrapper`. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the current asset to the joining player. |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads the asset by hash; remote clients take the read value. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applydata" /><code>{"private void ApplyData()"}</code> | Sets every renderer's `enabled` to the asset's value. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Does nothing. |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Message handler: serializes the asset and applies it on remote clients. |

</details>
