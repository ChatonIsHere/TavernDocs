---
title: "BasicDynamicPath"
description: "Networked object placed along an edge of the generated forest path network."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicDynamicPath

A **class** in `Root.Township`, no namespace.

Networked object placed along an edge of the generated forest path network. Saves the edge's endpoints so it can find the same edge again on load.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IDynamicPath`](/game-api/types/global-i-l/idynamicpath), [`ISavable<BasicDynamicPathSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<BasicDynamicPathSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`BasicDynamicPathSaveData`](/game-api/types/global-a-b/basicdynamicpathsavedata), [`PopulationPath`](/game-api/types/global-p/populationpath)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BasicDynamicPath()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-edge" /><code><Link to="/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{" "}<Link to="/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{" { get; private set; }"}</code> | The forest path edge this object belongs to. |
| <Link id="m-forest" /><code><Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" Forest { get; private set; }"}</code> | The forest generation the edge comes from. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize("}<Link to="/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{" edge)"}</code> | Sets the edge and gets the forest generation at its start point (blocks on the generator). |
