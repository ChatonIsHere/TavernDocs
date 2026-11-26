---
title: "SkinnedMeshPlatformQualityController"
description: "Build bake step that sets a skinned mesh renderer's bone quality on chosen platforms."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkinnedMeshPlatformQualityController

A **class** in `Root.Township`, `Alta.Customization`.

Build bake step that sets a skinned mesh renderer's bone quality on chosen platforms.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`BuildRendererBakeable`](/game-api/types/assembly-other/buildrendererbakeable)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SkinnedMeshPlatformQualityController()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-targetplatforms" /><code>{"private "}<Link to="/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" targetPlatforms"}</code> | Platforms the setting applies to. |
| <Link id="m-targetquality" /><code>{"private SkinQuality targetQuality"}</code> | Bone quality to set. Default 2 bones. |
| <Link id="m-targetrenderer" /><code>{"private SkinnedMeshRenderer targetRenderer"}</code> | Renderer to change. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"override void Bake(bool isSaving)"}</code> | If the current platform is in `targetPlatforms`, sets the renderer's skin quality. |
