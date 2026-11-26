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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapGeneratorPart`](/game-api/types/alta-world-generation/mapgeneratorpart)
- **Derived types** [`OperationPartInstance`](/game-api/types/alta-world-generation/operationpartinstance)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"OperationPart()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-a" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" a"}</code> | Backing field for `A`. |
| <Link id="m-b" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" b"}</code> | Backing field for `B`. |
| <Link id="m-operationtype" /><code>{"private "}<Link to="/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" operationType"}</code> | Backing field for `OperationType`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-a-2" /><code><Link to="/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" A { get; }"}</code> | First input plugin. When unset, the part's own plugin is used. |
| <Link id="m-b-2" /><code><Link to="/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" B { get; }"}</code> | Second input plugin. When unset, the part's own plugin is used. |
| <Link id="m-operationtype-2" /><code><Link to="/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" "}<Link to="/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" { get; }"}</code> | The operation applied to A and B. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getinstance" /><code>{"override "}<Link to="/game-api/types/alta-world-generation/ipartinstance">{"IPartInstance"}</Link>{" GetInstance("}<Link to="/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin)"}</code> | Creates the `OperationPartInstance` that does the work. |

## Used in

Members of other types that take, return or hold a `OperationPart`:

[`OperationPartInstance.OperationPartInstance`](/game-api/types/alta-world-generation/operationpartinstance#m-ctor).
