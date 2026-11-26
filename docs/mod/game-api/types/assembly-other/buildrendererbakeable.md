---
title: "BuildRendererBakeable"
description: "Base for components that bake renderer setup at build time and then remove themselves."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BuildRendererBakeable

An **abstract class** in `Alta.Build`, the global namespace.

Base for components that bake renderer setup at build time and then remove themselves. `BakeBuildBakeables` runs them; `StaticObjectCombiner` calls it.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererBakeable`](/mod/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)
- **Derived types** [`SkinnedMeshPlatformQualityController`](/mod/game-api/types/alta-customization/skinnedmeshplatformqualitycontroller), [`FlattenAndCleanEmptyAtBakeTime`](/mod/game-api/types/global-e-h/flattenandcleanemptyatbaketime), [`ForcedAtlasDefinition`](/mod/game-api/types/global-e-h/forcedatlasdefinition), [`MeshColorBaker`](/mod/game-api/types/global-m-o/meshcolorbaker), [`PlatformComponents`](/mod/game-api/types/global-p/platformcomponents), [`PlatformDistanceLODModifier`](/mod/game-api/types/global-p/platformdistancelodmodifier), [`PlatformLODController`](/mod/game-api/types/global-p/platformlodcontroller), [`PlatformLODModifier`](/mod/game-api/types/global-p/platformlodmodifier), [`PlatformMeshController`](/mod/game-api/types/global-p/platformmeshcontroller), [`PlatformObjects`](/mod/game-api/types/global-p/platformobjects)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected BuildRendererBakeable()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

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
| <Link id="m-sortingorder" /><code>{"virtual int SortingOrder { get; }"}</code> | <span className="api-desc">Bake order; lower goes first (1 by default).</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"abstract void Bake(bool isSaving)"}</code> | <span className="api-desc">Does this component's bake. Implemented by subclasses.</span> |
| <Link id="m-bakebuildbakeables" /><code>{"static void BakeBuildBakeables(GameObject target, bool isSaving)"}</code> | <span className="api-desc">Unpacks the target's prefabs, bakes every `IBuildRendererBakeable` under it in `SortingOrder` (removing each after), then runs post-bake hooks.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> | <span className="api-desc">Destroys this component after baking.</span> |

</details>
