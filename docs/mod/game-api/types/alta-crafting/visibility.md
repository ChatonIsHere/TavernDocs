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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<VisibilitySaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<VisibilitySaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`VisibilitySaveData`](/mod/game-api/types/alta-crafting/visibilitysavedata)
- **Attributes** `ScrapperArgument`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Visibility()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/visibilitydata">{"VisibilityData"}</Link>{" data"}</code> | <span className="api-desc">The visibility asset in use. If a save has none, load picks a random one.</span> |
| <Link id="m-meshrenderers" /><code>{"private MeshRenderer[] meshRenderers"}</code> | <span className="api-desc">Renderers it shows or hides.</span> |
| <Link id="m-sync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | <span className="api-desc">The sync for the asset.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the sync on `SyncScrapper`.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends the current asset to the joining player.</span> |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads the asset by hash; remote clients take the read value.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applydata" /><code>{"private void ApplyData()"}</code> | <span className="api-desc">Sets every renderer's `enabled` to the asset's value.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Message handler: serializes the asset and applies it on remote clients.</span> |

</details>
