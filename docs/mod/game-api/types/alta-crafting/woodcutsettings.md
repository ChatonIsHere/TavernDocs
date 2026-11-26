---
title: "WoodcutSettings"
description: "Global settings asset for woodcutting, read through WoodcutSettings.Instance."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WoodcutSettings

A **class** in `Root.Township`, `Alta.Woodcutting`.

Global settings asset for woodcutting, read through `WoodcutSettings.Instance`. Holds the tree network prefab.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`GlobalSettings<WoodcutSettings>`](/mod/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`WoodcutSettings`](/mod/game-api/types/alta-crafting/woodcutsettings)
- **Attributes** `CreateAssetMenu`, `GlobalSettings`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WoodcutSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-treeprefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" treePrefab"}</code> | <span className="api-desc">Backing field for `TreePrefab`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-treeprefab-2" /><code><Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" TreePrefab { get; }"}</code> | <span className="api-desc">The network prefab used for woodcut trees.</span> |
