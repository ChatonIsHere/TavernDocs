---
title: "CommonPrefabs"
description: "Global settings asset with shortcuts to prefabs and items used everywhere: pouch, coin, pages and the player template."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CommonPrefabs

A **class** in `Root.Township`, the global namespace.

Global settings asset with shortcuts to prefabs and items used everywhere: pouch, coin, pages and the player template. Read through the static properties.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`GlobalSettings<CommonPrefabs>`](/mod/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`CommonPrefabs`](/mod/game-api/types/global-c-d/commonprefabs), [`CommonPrefabs.Create`](/mod/game-api/types/global-c-d/commonprefabs-create)
- **Nested types** [`Create`](/mod/game-api/types/global-c-d/commonprefabs-create)
- **Attributes** `GlobalSettings`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CommonPrefabs()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-blurshader" /><code>{"private Shader blurShader"}</code> | <span className="api-desc">Backing field for `BlurShader`.</span> |
| <Link id="m-coinprefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" coinPrefab"}</code> | <span className="api-desc">Backing field for `CoinPrefab`.</span> |
| <Link id="m-duplicatepageitem" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" duplicatePageItem"}</code> | <span className="api-desc">Backing field for `DuplicatePageItem`.</span> |
| <Link id="m-pageitem" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" pageItem"}</code> | <span className="api-desc">Backing field for `PageItem`.</span> |
| <Link id="m-playertemplate" /><code>{"private "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" playerTemplate"}</code> | <span className="api-desc">Backing field for `PlayerTemplate`.</span> |
| <Link id="m-pouchdocksettings" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{" pouchDockSettings"}</code> | <span className="api-desc">Backing field for `PouchDockSettings`.</span> |
| <Link id="m-pouchitem" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" pouchItem"}</code> | <span className="api-desc">Backing field for `PouchItem`; `PouchPrefab` also reads its prefab.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-blurshader-2" /><code>{"static Shader BlurShader { get; }"}</code> | <span className="api-desc">The blur shader.</span> |
| <Link id="m-coinprefab-2" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" CoinPrefab { get; }"}</code> | <span className="api-desc">The coin prefab.</span> |
| <Link id="m-duplicatepageitem-2" /><code>{"static "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" DuplicatePageItem { get; }"}</code> | <span className="api-desc">Item for a duplicate page.</span> |
| <Link id="m-pageitem-2" /><code>{"static "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" PageItem { get; }"}</code> | <span className="api-desc">Item for a page.</span> |
| <Link id="m-playertemplate-2" /><code>{"static "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" PlayerTemplate { get; }"}</code> | <span className="api-desc">The player prefab template.</span> |
| <Link id="m-pouchdocksettings-2" /><code>{"static "}<Link to="/mod/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{" PouchDockSettings { get; }"}</code> | <span className="api-desc">Dock settings used by pouches.</span> |
| <Link id="m-pouchitem-2" /><code>{"static "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" PouchItem { get; }"}</code> | <span className="api-desc">The pouch item. Docking it is ignored by several systems, such as repair boxes.</span> |
| <Link id="m-pouchprefab" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" PouchPrefab { get; }"}</code> | <span className="api-desc">Network prefab of the pouch item, used by `SpawnHelper.SpawnPouchOrPickup`.</span> |
