---
title: "BasicDynamicPath"
description: "Networked object placed along an edge of the generated forest path network."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicDynamicPath

A **class** in `Root.Township`, the global namespace.

Networked object placed along an edge of the generated forest path network. Saves the edge's endpoints so it can find the same edge again on load.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`IDynamicPath`](/mod/game-api/types/global-i-l/idynamicpath), [`ISavable<BasicDynamicPathSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<BasicDynamicPathSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`BasicDynamicPathSaveData`](/mod/game-api/types/global-a-b/basicdynamicpathsavedata), [`PopulationPath`](/mod/game-api/types/global-p/populationpath)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BasicDynamicPath()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-edge" /><code><Link to="/mod/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{" "}<Link to="/mod/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{" { get; private set; }"}</code> | <span className="api-desc">The forest path edge this object belongs to.</span> |
| <Link id="m-forest" /><code><Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" Forest { get; private set; }"}</code> | <span className="api-desc">The forest generation the edge comes from.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize("}<Link to="/mod/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{" edge)"}</code> | <span className="api-desc">Sets the edge and gets the forest generation at its start point (blocks on the generator).</span> |
