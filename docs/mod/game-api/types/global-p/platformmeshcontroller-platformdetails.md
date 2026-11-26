---
title: "PlatformMeshController.PlatformDetails"
description: "A mesh and material swap for one platform, applied by PlatformMeshController on bake and in Awake."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformMeshController.PlatformDetails

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A mesh and material swap for one platform, applied by `PlatformMeshController` on bake and in `Awake`.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Nested in** [`PlatformMeshController`](/mod/game-api/types/global-p/platformmeshcontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlatformDetails()"}</code> | <span className="api-desc">Creates a `PlatformMeshController.PlatformDetails` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isaplyingnullmaterial" /><code>{"bool isAplyingNullMaterial"}</code> | <span className="api-desc">If true, sets the material to null when no replacement material is given.</span> |
| <Link id="m-isaplyingnullmesh" /><code>{"bool isAplyingNullMesh"}</code> | <span className="api-desc">If true, sets the mesh to null when no replacement mesh is given.</span> |
| <Link id="m-replacementmaterial" /><code>{"Material replacementMaterial"}</code> | <span className="api-desc">The material to use on this platform.</span> |
| <Link id="m-replacementmesh" /><code>{"Mesh replacementMesh"}</code> | <span className="api-desc">The mesh to use on this platform.</span> |
| <Link id="m-targetplatform" /><code><Link to="/mod/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" targetPlatform"}</code> | <span className="api-desc">The platform this swap is for.</span> |

## Used in

Members of other types that take, return or hold a `PlatformDetails`:

<div className="api-used-in">

[`PlatformMeshController.replacements`](/mod/game-api/types/global-p/platformmeshcontroller#m-replacements).

</div>
