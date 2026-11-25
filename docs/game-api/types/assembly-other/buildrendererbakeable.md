---
title: "BuildRendererBakeable"
description: "abstract class BuildRendererBakeable in Alta.Build."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BuildRendererBakeable

An **abstract class** in `Alta.Build`, no namespace.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererBakeable`](/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Derived types** [`SkinnedMeshPlatformQualityController`](/game-api/types/alta-customization/skinnedmeshplatformqualitycontroller), [`FlattenAndCleanEmptyAtBakeTime`](/game-api/types/global-e-h/flattenandcleanemptyatbaketime), [`ForcedAtlasDefinition`](/game-api/types/global-e-h/forcedatlasdefinition), [`MeshColorBaker`](/game-api/types/global-m-o/meshcolorbaker), [`PlatformComponents`](/game-api/types/global-p/platformcomponents), [`PlatformDistanceLODModifier`](/game-api/types/global-p/platformdistancelodmodifier), [`PlatformLODController`](/game-api/types/global-p/platformlodcontroller), [`PlatformLODModifier`](/game-api/types/global-p/platformlodmodifier), [`PlatformMeshController`](/game-api/types/global-p/platformmeshcontroller), [`PlatformObjects`](/game-api/types/global-p/platformobjects)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected BuildRendererBakeable()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-sortingorder" /><code>{"virtual int SortingOrder { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-bake" /><code>{"abstract void Bake(bool isSaving)"}</code> |
| <Link id="m-bakebuildbakeables" /><code>{"static void BakeBuildBakeables(GameObject target, bool isSaving)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> |

</details>
