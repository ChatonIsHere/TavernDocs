---
title: "CommonPrefabs"
description: "Global settings asset with shortcuts to prefabs and items used everywhere: pouch, coin, pages and the player template."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CommonPrefabs

A **class** in `Root.Township`, no namespace.

Global settings asset with shortcuts to prefabs and items used everywhere: pouch, coin, pages and the player template. Read through the static properties.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`GlobalSettings<CommonPrefabs>`](/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`CommonPrefabs`](/game-api/types/global-c-d/commonprefabs), [`CommonPrefabs.Create`](/game-api/types/global-c-d/commonprefabs-create)
- **Nested types** [`Create`](/game-api/types/global-c-d/commonprefabs-create)
- **Attributes** `GlobalSettings`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CommonPrefabs()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-blurshader" /><code>{"private Shader blurShader"}</code> | Backing field for `BlurShader`. |
| <Link id="m-coinprefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" coinPrefab"}</code> | Backing field for `CoinPrefab`. |
| <Link id="m-duplicatepageitem" /><code>{"private "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" duplicatePageItem"}</code> | Backing field for `DuplicatePageItem`. |
| <Link id="m-pageitem" /><code>{"private "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" pageItem"}</code> | Backing field for `PageItem`. |
| <Link id="m-playertemplate" /><code>{"private "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" playerTemplate"}</code> | Backing field for `PlayerTemplate`. |
| <Link id="m-pouchdocksettings" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{" pouchDockSettings"}</code> | Backing field for `PouchDockSettings`. |
| <Link id="m-pouchitem" /><code>{"private "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" pouchItem"}</code> | Backing field for `PouchItem`; `PouchPrefab` also reads its prefab. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-blurshader-2" /><code>{"static Shader BlurShader { get; }"}</code> | The blur shader. |
| <Link id="m-coinprefab-2" /><code>{"static "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" CoinPrefab { get; }"}</code> | The coin prefab. |
| <Link id="m-duplicatepageitem-2" /><code>{"static "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" DuplicatePageItem { get; }"}</code> | Item for a duplicate page. |
| <Link id="m-pageitem-2" /><code>{"static "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" PageItem { get; }"}</code> | Item for a page. |
| <Link id="m-playertemplate-2" /><code>{"static "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" PlayerTemplate { get; }"}</code> | The player prefab template. |
| <Link id="m-pouchdocksettings-2" /><code>{"static "}<Link to="/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{" PouchDockSettings { get; }"}</code> | Dock settings used by pouches. |
| <Link id="m-pouchitem-2" /><code>{"static "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" PouchItem { get; }"}</code> | The pouch item. Docking it is ignored by several systems, such as repair boxes. |
| <Link id="m-pouchprefab" /><code>{"static "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" PouchPrefab { get; }"}</code> | Network prefab of the pouch item, used by `SpawnHelper.SpawnPouchOrPickup`. |
