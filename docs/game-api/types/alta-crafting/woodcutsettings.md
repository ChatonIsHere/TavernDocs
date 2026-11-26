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

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`GlobalSettings<WoodcutSettings>`](/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`WoodcutSettings`](/game-api/types/alta-crafting/woodcutsettings)
- **Attributes** `CreateAssetMenu`, `GlobalSettings`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"WoodcutSettings()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-treeprefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" treePrefab"}</code> | Backing field for `TreePrefab`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-treeprefab-2" /><code><Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" TreePrefab { get; }"}</code> | The network prefab used for woodcut trees. |
