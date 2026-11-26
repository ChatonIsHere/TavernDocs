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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Nested in** [`SparkSecondaryDetector`](/game-api/types/alta-items/sparksecondarydetector)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-effectiveness" /><code>{"float effectiveness"}</code> | Hit effectiveness from 0 to 1, which sets the chance of starting a fire. |
| <Link id="m-point" /><code>{"Vector3 point"}</code> | World position of the spark; sent relative to the detector, within 10 units. |

## Used in

Members of other types that take, return or hold a `SparkArgument`:

[`SparkSecondaryDetector.syncSpark`](/game-api/types/alta-items/sparksecondarydetector#m-syncspark), [`SparkSecondaryDetector.SyncSpark`](/game-api/types/alta-items/sparksecondarydetector#m-syncspark-2).
