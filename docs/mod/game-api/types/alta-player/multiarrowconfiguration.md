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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MultiArrowConfiguration()"}</code> | <span className="api-desc">Creates a `MultiArrowConfiguration` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-arrowdamagemultiplier" /><code>{"private float arrowDamageMultiplier"}</code> | <span className="api-desc">Backing field for `ArrowDamageMultiplier`.</span> |
| <Link id="m-arrowoffsets" /><code>{"private Vector3[] arrowOffsets"}</code> | <span className="api-desc">Backing field for `ArrowOffsets`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-arrowdamagemultiplier-2" /><code>{"float ArrowDamageMultiplier { get; }"}</code> | <span className="api-desc">Damage multiplier for the extra arrows (default 1).</span> |
| <Link id="m-arrowoffsets-2" /><code>{"Vector3[] ArrowOffsets { get; }"}</code> | <span className="api-desc">Local offset of each extra arrow; one arrow per entry.</span> |

## Used in

Members of other types that take, return or hold a `MultiArrowConfiguration`:

<div className="api-used-in">

[`BowMultiArrowShot.arrowConfiguration`](/mod/game-api/types/alta-player/bowmultiarrowshot#m-arrowconfiguration).

</div>
