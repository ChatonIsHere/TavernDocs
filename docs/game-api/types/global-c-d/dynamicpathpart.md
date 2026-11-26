---
title: "DynamicPathPart"
description: "Generation part that, during dynamic generation on a forest node map, spawns a network prefab at its position and initialises it with the node's edge as a..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DynamicPathPart

A **class** in `Root.Township`, no namespace.

Generation part that, during dynamic generation on a forest node map, spawns a network prefab at its position and initialises it with the node's edge as a dynamic path.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`GeneratablePart`](/game-api/types/global-e-h/generatablepart)
- **Attributes** `AddComponentMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DynamicPathPart()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-prefab" /><code>{"private "}<Link to="/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" prefab"}</code> | Pipeline that picks the network prefab to spawn. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generatedynamic" /><code>{"override void GenerateDynamic("}<Link to="/game-api/types/global-e-h/generationcore">{"GenerationCore"}</Link>{" core)"}</code> | Gets a prefab from the pipeline, spawns it in the best location chunk and calls `IDynamicPath.Initialize` with the edge. |
