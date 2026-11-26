---
title: "OperationPart"
description: "Cave generator part that fills a layer with an operation on two other plugin layers, cell by cell."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OperationPart

A **class** in `Root.Township`, `Alta.Caves.PluginParts`.

Cave generator part that fills a layer with an operation on two other plugin layers, cell by cell.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapGeneratorPart`](/mod/game-api/types/alta-world-generation/mapgeneratorpart)
- **Derived types** [`OperationPartInstance`](/mod/game-api/types/alta-world-generation/operationpartinstance)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OperationPart()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-a" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" a"}</code> | <span className="api-desc">Backing field for `A`.</span> |
| <Link id="m-b" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" b"}</code> | <span className="api-desc">Backing field for `B`.</span> |
| <Link id="m-operationtype" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" operationType"}</code> | <span className="api-desc">Backing field for `OperationType`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-a-2" /><code><Link to="/mod/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" A { get; }"}</code> | <span className="api-desc">First input plugin. When unset, the part's own plugin is used.</span> |
| <Link id="m-b-2" /><code><Link to="/mod/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" B { get; }"}</code> | <span className="api-desc">Second input plugin. When unset, the part's own plugin is used.</span> |
| <Link id="m-operationtype-2" /><code><Link to="/mod/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" "}<Link to="/mod/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" { get; }"}</code> | <span className="api-desc">The operation applied to A and B.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getinstance" /><code>{"override "}<Link to="/mod/game-api/types/alta-world-generation/ipartinstance">{"IPartInstance"}</Link>{" GetInstance("}<Link to="/mod/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin)"}</code> | <span className="api-desc">Creates the `OperationPartInstance` that does the work.</span> |

## Used in

Members of other types that take, return or hold a `OperationPart`:

<div className="api-used-in">

[`OperationPartInstance.OperationPartInstance`](/mod/game-api/types/alta-world-generation/operationpartinstance#m-ctor).

</div>
