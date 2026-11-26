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
| <Link id="m-ctor" /><code>{"ApplyElement()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-element" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/element">{"Element"}</Link>{" element"}</code> | <span className="api-desc">Backing field for `Element`.</span> |
| <Link id="m-operationtype" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" operationType"}</code> | <span className="api-desc">Backing field for `OperationType`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-element-2" /><code><Link to="/mod/game-api/types/alta-world-generation/element">{"Element"}</Link>{" "}<Link to="/mod/game-api/types/alta-world-generation/element">{"Element"}</Link>{" { get; }"}</code> | <span className="api-desc">The element whose chance is used. When unset, the plugin's own element is used.</span> |
| <Link id="m-operationtype-2" /><code><Link to="/mod/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" "}<Link to="/mod/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" { get; }"}</code> | <span className="api-desc">How the element chance combines with each cell (multiply by default).</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getinstance" /><code>{"override "}<Link to="/mod/game-api/types/alta-world-generation/ipartinstance">{"IPartInstance"}</Link>{" GetInstance("}<Link to="/mod/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin)"}</code> | <span className="api-desc">Creates the `ApplyElementInstance` that does the work.</span> |

## Used in

Members of other types that take, return or hold a `ApplyElement`:

<div className="api-used-in">

[`ApplyElementInstance.ApplyElementInstance`](/mod/game-api/types/alta-world-generation/applyelementinstance#m-ctor).

</div>
