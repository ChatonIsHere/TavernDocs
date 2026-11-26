---
title: "OptimizationManager.QualitySetting"
description: "One quality level for OptimizationManager: LOD bias and shadow settings applied together."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OptimizationManager.QualitySetting

A **private struct** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

One quality level for `OptimizationManager`: LOD bias and shadow settings applied together.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Nested in** [`OptimizationManager`](/mod/game-api/types/global-m-o/optimizationmanager)

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lodbias" /><code>{"private float lodBias"}</code> | Value for `QualitySettings.lodBias`. |
| <Link id="m-shadowdistance" /><code>{"private float shadowDistance"}</code> | Value for `QualitySettings.shadowDistance`. |
| <Link id="m-shadowresolution" /><code>{"private ShadowResolution shadowResolution"}</code> | Value for `QualitySettings.shadowResolution`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"void Apply()"}</code> | Writes the LOD bias, shadow resolution and shadow distance to Unity's `QualitySettings`. |

## Used in

Members of other types that take, return or hold a `QualitySetting`:

[`OptimizationManager.qualityLevels`](/mod/game-api/types/global-m-o/optimizationmanager#m-qualitylevels).
