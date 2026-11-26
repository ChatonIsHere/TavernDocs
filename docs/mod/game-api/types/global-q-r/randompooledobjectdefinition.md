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
| <Link id="m-ctor" /><code>{"RandomPooledObjectDefinition()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-definitions" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/randompooledobjectdefinition-pooledobjectelement">{"RandomPooledObjectDefinition.PooledObjectElement"}</Link>{"[] definitions"}</code> | <span className="api-desc">Pooled definitions with their weights.</span> |
| <Link id="m-totalweight" /><code>{"private int totalWeight"}</code> | <span className="api-desc">Sum of all weights, set by `InitializePool`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-get" /><code>{"override "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" Get(Vector3 position, Quaternion rotation)"}</code> | <span className="api-desc">Meant to pick a definition by weight and get an object from it. The roll is cast to int before scaling, so it almost always picks the first entry with weight above 0.</span> |
| <Link id="m-initializepool" /><code>{"override void InitializePool()"}</code> | <span className="api-desc">Initializes every listed definition's pool and totals their weights.</span> |
