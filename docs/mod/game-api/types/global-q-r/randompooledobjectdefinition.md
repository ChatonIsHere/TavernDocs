---
title: "RandomPooledObjectDefinition"
description: "Pooled object definition asset that picks one of several pooled definitions by weight each time an object is requested."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RandomPooledObjectDefinition

A **class** in `Root.Township`, the global namespace.

Pooled object definition asset that picks one of several pooled definitions by weight each time an object is requested.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** [`PooledObjectDefinitionBase`](/mod/game-api/types/global-p/pooledobjectdefinitionbase)
- **Nested types** [`PooledObjectElement`](/mod/game-api/types/global-q-r/randompooledobjectdefinition-pooledobjectelement)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RandomPooledObjectDefinition()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-definitions" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/randompooledobjectdefinition-pooledobjectelement">{"RandomPooledObjectDefinition.PooledObjectElement"}</Link>{"[] definitions"}</code> | Pooled definitions with their weights. |
| <Link id="m-totalweight" /><code>{"private int totalWeight"}</code> | Sum of all weights, set by `InitializePool`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-get" /><code>{"override "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" Get(Vector3 position, Quaternion rotation)"}</code> | Meant to pick a definition by weight and get an object from it. The roll is cast to int before scaling, so it almost always picks the first entry with weight above 0. |
| <Link id="m-initializepool" /><code>{"override void InitializePool()"}</code> | Initializes every listed definition's pool and totals their weights. |
