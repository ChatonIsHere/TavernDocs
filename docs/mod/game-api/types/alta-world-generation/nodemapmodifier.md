---
title: "NodeMapModifier"
description: "Base for a component that changes the forest generator's node map before it is used."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NodeMapModifier

An **abstract class** in `Root.Township`, `Alta.Forests`.

Base for a component that changes the forest generator's node map before it is used.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`CutoutPathModifier`](/mod/game-api/types/alta-world-generation/cutoutpathmodifier), [`ForestAttributeEvaluator`](/mod/game-api/types/alta-world-generation/forestattributeevaluator), [`ForestCliffEvaluator`](/mod/game-api/types/alta-world-generation/forestcliffevaluator), [`ForestConnectivityIncreaser`](/mod/game-api/types/alta-world-generation/forestconnectivityincreaser), [`ForestPathAttributeLerper`](/mod/game-api/types/alta-world-generation/forestpathattributelerper), [`ForestSpaceEvaluator`](/mod/game-api/types/alta-world-generation/forestspaceevaluator), [`LandBridgeModifier`](/mod/game-api/types/alta-world-generation/landbridgemodifier), [`BiomeSphereGenerator`](/mod/game-api/types/global-a-b/biomespheregenerator)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected NodeMapModifier()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactivecache" /><code>{"bool IsActiveCache { get; set; }"}</code> | Whether the component was active and enabled when the generator collected modifiers; inactive ones are skipped. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-finishinitialize" /><code>{"virtual Task FinishInitialize()"}</code> | Async setup hook run before modifying. Finishes at once by default. |
| <Link id="m-modify" /><code>{"abstract void Modify("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> | Changes the forest's node map. Implement in subclasses. |

## Used in

Members of other types that take, return or hold a `NodeMapModifier`:

[`ForestGenerator.nodeMapModifiers`](/mod/game-api/types/alta-world-generation/forestgenerator#m-nodemapmodifiers).
