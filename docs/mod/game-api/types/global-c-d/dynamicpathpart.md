---
title: "DynamicPathPart"
description: "Generation part that, during dynamic generation on a forest node map, spawns a network prefab at its position and initialises it with the node's edge as a..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DynamicPathPart

A **class** in `Root.Township`, the global namespace.

Generation part that, during dynamic generation on a forest node map, spawns a network prefab at its position and initialises it with the node's edge as a dynamic path.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`GeneratablePart`](/mod/game-api/types/global-e-h/generatablepart)
- **Attributes** `AddComponentMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DynamicPathPart()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-prefab" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" prefab"}</code> | <span className="api-desc">Pipeline that picks the network prefab to spawn.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generatedynamic" /><code>{"override void GenerateDynamic("}<Link to="/mod/game-api/types/global-e-h/generationcore">{"GenerationCore"}</Link>{" core)"}</code> | <span className="api-desc">Gets a prefab from the pipeline, spawns it in the best location chunk and calls `IDynamicPath.Initialize` with the edge.</span> |
