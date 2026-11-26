---
title: "PluginList"
description: "Asset listing the cave generation plugins to run."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PluginList

A **class** in `Root.Township`, `Alta.Caves`.

Asset listing the cave generation plugins to run. `GenerationBase` makes an instance of each in order.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`PluginList.Create`](/mod/game-api/types/alta-world-generation/pluginlist-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-world-generation/pluginlist-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PluginList()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-plugins" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{"> plugins"}</code> | Backing field for `Plugins`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-plugins-2" /><code>{"List<"}<Link to="/mod/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{"> Plugins { get; }"}</code> | The plugins in run order. |

## Used in

Members of other types that take, return or hold a `PluginList`:

[`GenerationBase.pluginList`](/mod/game-api/types/alta-world-generation/generationbase#m-pluginlist), [`GenerationBase.PluginList`](/mod/game-api/types/alta-world-generation/generationbase#m-pluginlist-2), [`IGenerator.PluginList`](/mod/game-api/types/alta-world-generation/igenerator#m-pluginlist).
