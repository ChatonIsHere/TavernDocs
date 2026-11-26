---
title: "FlattenAndCleanEmptyAtBakeTime"
description: "Build step that flattens a prefab's hierarchy: children move up to this root and empty transforms are deleted."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FlattenAndCleanEmptyAtBakeTime

A **class** in `Root.Township`, no namespace.

Build step that flattens a prefab's hierarchy: children move up to this root and empty transforms are deleted. Runs late (order 100).

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`BuildRendererBakeable`](/game-api/types/assembly-other/buildrendererbakeable)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FlattenAndCleanEmptyAtBakeTime()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-sortingorder" /><code>{"override int SortingOrder { get; }"}</code> | 100, so it runs after most bake steps. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"override void Bake(bool isSaving)"}</code> | Flattens the hierarchy under this transform. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-flatten" /><code>{"private static void Flatten(Transform transform, Transform root)"}</code> | Recursively bakes `IPointerPrefabBakable` components, reparents objects with components to the root and destroys empty ones. Stops at `IIgnoreForStaticFlatten`. |

</details>
