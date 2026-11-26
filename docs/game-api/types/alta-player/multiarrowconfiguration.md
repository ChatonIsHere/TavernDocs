---
title: "MultiArrowConfiguration"
description: "Settings for the multi-arrow bow skill (BowMultiArrowShot): where the extra arrows sit and how hard they hit."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MultiArrowConfiguration

A **class** in `Root.Township`, `Alta.Progression.Skills`.

Settings for the multi-arrow bow skill (`BowMultiArrowShot`): where the extra arrows sit and how hard they hit.

- **Listed in** [Players and characters](/game-api/types/alta-player)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MultiArrowConfiguration()"}</code> | Creates a `MultiArrowConfiguration` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-arrowdamagemultiplier" /><code>{"private float arrowDamageMultiplier"}</code> | Backing field for `ArrowDamageMultiplier`. |
| <Link id="m-arrowoffsets" /><code>{"private Vector3[] arrowOffsets"}</code> | Backing field for `ArrowOffsets`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-arrowdamagemultiplier-2" /><code>{"float ArrowDamageMultiplier { get; }"}</code> | Damage multiplier for the extra arrows (default 1). |
| <Link id="m-arrowoffsets-2" /><code>{"Vector3[] ArrowOffsets { get; }"}</code> | Local offset of each extra arrow; one arrow per entry. |

## Used in

Members of other types that take, return or hold a `MultiArrowConfiguration`:

[`BowMultiArrowShot.arrowConfiguration`](/game-api/types/alta-player/bowmultiarrowshot#m-arrowconfiguration).
