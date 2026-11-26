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
| <Link id="m-ctor" /><code>{"WoodcutSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-treeprefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" treePrefab"}</code> | Backing field for `TreePrefab`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-treeprefab-2" /><code><Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" TreePrefab { get; }"}</code> | The network prefab used for woodcut trees. |
