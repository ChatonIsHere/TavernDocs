---
title: "BuildRendererBakeable"
description: "Base for components that bake renderer setup at build time and then remove themselves."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BuildRendererBakeable

An **abstract class** in `Alta.Build`, no namespace.

Base for components that bake renderer setup at build time and then remove themselves. `BakeBuildBakeables` runs them; `StaticObjectCombiner` calls it.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererBakeable`](/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Derived types** [`SkinnedMeshPlatformQualityController`](/game-api/types/alta-customization/skinnedmeshplatformqualitycontroller), [`FlattenAndCleanEmptyAtBakeTime`](/game-api/types/global-e-h/flattenandcleanemptyatbaketime), [`ForcedAtlasDefinition`](/game-api/types/global-e-h/forcedatlasdefinition), [`MeshColorBaker`](/game-api/types/global-m-o/meshcolorbaker), [`PlatformComponents`](/game-api/types/global-p/platformcomponents), [`PlatformDistanceLODModifier`](/game-api/types/global-p/platformdistancelodmodifier), [`PlatformLODController`](/game-api/types/global-p/platformlodcontroller), [`PlatformLODModifier`](/game-api/types/global-p/platformlodmodifier), [`PlatformMeshController`](/game-api/types/global-p/platformmeshcontroller), [`PlatformObjects`](/game-api/types/global-p/platformobjects)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected BuildRendererBakeable()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

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
| <Link id="m-sortingorder" /><code>{"virtual int SortingOrder { get; }"}</code> | Bake order; lower goes first (1 by default). |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"abstract void Bake(bool isSaving)"}</code> | Does this component's bake. Implemented by subclasses. |
| <Link id="m-bakebuildbakeables" /><code>{"static void BakeBuildBakeables(GameObject target, bool isSaving)"}</code> | Unpacks the target's prefabs, bakes every `IBuildRendererBakeable` under it in `SortingOrder` (removing each after), then runs post-bake hooks. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> | Destroys this component after baking. |

</details>
