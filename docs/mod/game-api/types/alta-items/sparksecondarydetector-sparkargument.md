---
title: "SparkSecondaryDetector.SparkArgument"
description: "Message the wielding client sends when its tool strikes sparks."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SparkSecondaryDetector.SparkArgument

A **private struct** in `Root.Township`, `Alta.Impact`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Message the wielding client sends when its tool strikes sparks. The server then simulates sparks for fire at that point.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Nested in** [`SparkSecondaryDetector`](/mod/game-api/types/alta-items/sparksecondarydetector)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-effectiveness" /><code>{"float effectiveness"}</code> | <span className="api-desc">Hit effectiveness from 0 to 1, which sets the chance of starting a fire.</span> |
| <Link id="m-point" /><code>{"Vector3 point"}</code> | <span className="api-desc">World position of the spark; sent relative to the detector, within 10 units.</span> |

## Used in

Members of other types that take, return or hold a `SparkArgument`:

<div className="api-used-in">

[`SparkSecondaryDetector.syncSpark`](/mod/game-api/types/alta-items/sparksecondarydetector#m-syncspark), [`SparkSecondaryDetector.SyncSpark`](/mod/game-api/types/alta-items/sparksecondarydetector#m-syncspark-2).

</div>
