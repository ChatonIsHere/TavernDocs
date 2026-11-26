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
| <Link id="m-ctor" /><code>{"TriangularDistributionInt()"}</code> | Creates a `TriangularDistributionInt` with default values. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maximum" /><code>{"private int maximum"}</code> | Largest value. |
| <Link id="m-minimum" /><code>{"private int minimum"}</code> | Smallest value. |
| <Link id="m-mode" /><code>{"private int mode"}</code> | Most likely value. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-randomvalue" /><code>{"int RandomValue { get; }"}</code> | A new random integer from the distribution each time it's read. |

## Used in

Members of other types that take, return or hold a `TriangularDistributionInt`:

[`DarknessSpawnerSettings.spawnCount`](/mod/game-api/types/global-c-d/darknessspawnersettings#m-spawncount).
