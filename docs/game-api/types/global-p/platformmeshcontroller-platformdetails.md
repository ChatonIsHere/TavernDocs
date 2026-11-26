---
title: "PlatformMeshController.PlatformDetails"
description: "A mesh and material swap for one platform, applied by PlatformMeshController on bake and in Awake."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformMeshController.PlatformDetails

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A mesh and material swap for one platform, applied by `PlatformMeshController` on bake and in `Awake`.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Nested in** [`PlatformMeshController`](/game-api/types/global-p/platformmeshcontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlatformDetails()"}</code> | Creates a `PlatformMeshController.PlatformDetails` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isaplyingnullmaterial" /><code>{"bool isAplyingNullMaterial"}</code> | If true, sets the material to null when no replacement material is given. |
| <Link id="m-isaplyingnullmesh" /><code>{"bool isAplyingNullMesh"}</code> | If true, sets the mesh to null when no replacement mesh is given. |
| <Link id="m-replacementmaterial" /><code>{"Material replacementMaterial"}</code> | The material to use on this platform. |
| <Link id="m-replacementmesh" /><code>{"Mesh replacementMesh"}</code> | The mesh to use on this platform. |
| <Link id="m-targetplatform" /><code><Link to="/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" targetPlatform"}</code> | The platform this swap is for. |

## Used in

Members of other types that take, return or hold a `PlatformDetails`:

[`PlatformMeshController.replacements`](/game-api/types/global-p/platformmeshcontroller#m-replacements).
