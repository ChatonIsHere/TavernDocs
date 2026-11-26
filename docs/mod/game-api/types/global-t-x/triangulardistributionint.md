---
title: "TriangularDistributionInt"
description: "Serializable random integer setting with a triangular distribution between a minimum and maximum, peaking at the mode."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TriangularDistributionInt

A **class** in `Root.Township`, the global namespace.

Serializable random integer setting with a triangular distribution between a minimum and maximum, peaking at the mode.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TriangularDistributionInt()"}</code> | <span className="api-desc">Creates a `TriangularDistributionInt` with default values.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maximum" /><code>{"private int maximum"}</code> | <span className="api-desc">Largest value.</span> |
| <Link id="m-minimum" /><code>{"private int minimum"}</code> | <span className="api-desc">Smallest value.</span> |
| <Link id="m-mode" /><code>{"private int mode"}</code> | <span className="api-desc">Most likely value.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-randomvalue" /><code>{"int RandomValue { get; }"}</code> | <span className="api-desc">A new random integer from the distribution each time it's read.</span> |

## Used in

Members of other types that take, return or hold a `TriangularDistributionInt`:

<div className="api-used-in">

[`DarknessSpawnerSettings.spawnCount`](/mod/game-api/types/global-c-d/darknessspawnersettings#m-spawncount).

</div>
