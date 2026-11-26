---
title: "ApplyElement"
description: "Cave generator part that combines every cell of a layer with the biome's chance for an element."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ApplyElement

A **class** in `Root.Township`, `Alta.Caves.PluginParts`.

Cave generator part that combines every cell of a layer with the biome's chance for an element.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapGeneratorPart`](/mod/game-api/types/alta-world-generation/mapgeneratorpart)
- **Derived types** [`ApplyElementInstance`](/mod/game-api/types/alta-world-generation/applyelementinstance)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ApplyElement()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-element" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/element">{"Element"}</Link>{" element"}</code> | Backing field for `Element`. |
| <Link id="m-operationtype" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" operationType"}</code> | Backing field for `OperationType`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-element-2" /><code><Link to="/mod/game-api/types/alta-world-generation/element">{"Element"}</Link>{" "}<Link to="/mod/game-api/types/alta-world-generation/element">{"Element"}</Link>{" { get; }"}</code> | The element whose chance is used. When unset, the plugin's own element is used. |
| <Link id="m-operationtype-2" /><code><Link to="/mod/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" "}<Link to="/mod/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" { get; }"}</code> | How the element chance combines with each cell (multiply by default). |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getinstance" /><code>{"override "}<Link to="/mod/game-api/types/alta-world-generation/ipartinstance">{"IPartInstance"}</Link>{" GetInstance("}<Link to="/mod/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin)"}</code> | Creates the `ApplyElementInstance` that does the work. |

## Used in

Members of other types that take, return or hold a `ApplyElement`:

[`ApplyElementInstance.ApplyElementInstance`](/mod/game-api/types/alta-world-generation/applyelementinstance#m-ctor).
