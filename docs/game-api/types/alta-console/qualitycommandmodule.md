---
title: "QualityCommandModule"
description: "Console module quality: LOD bias and chunk streaming distance multipliers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# QualityCommandModule

A **class** in `Root.Township`, `Alta.Console.Commands`.

Console module `quality`: LOD bias and chunk streaming distance multipliers.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Attributes** `Module`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"QualityCommandModule()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this module. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setdynamicloaddistance" /><code>{"static void SetDynamicLoadDistance(float loadMultiplier = 1)"}</code> | Server: `quality dynamic-load-multiplier` sets the streaming multiplier for dynamic chunk load distance. |
| <Link id="m-setlodbias" /><code>{"static void SetLODBias(float lodbias)"}</code> | `quality lod-bias`: sets Unity's LOD bias, clamped to 0.001 to 10. |
| <Link id="m-setstaticloaddistance" /><code>{"static void SetStaticLoadDistance(float loadMultiplier = 1)"}</code> | Server: `quality static-load-multiplier` sets the streaming multiplier for static chunk load distance. |
