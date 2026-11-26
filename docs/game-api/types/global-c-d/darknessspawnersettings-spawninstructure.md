---
title: "DarknessSpawnerSettings.SpawnInstructure"
description: "A point and surface normal found for one darkness spawn."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DarknessSpawnerSettings.SpawnInstructure

A **private struct** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A point and surface normal found for one darkness spawn.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Nested in** [`DarknessSpawnerSettings`](/game-api/types/global-c-d/darknessspawnersettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawnInstructure(Vector3 position, Vector3 normal)"}</code> | Creates a `DarknessSpawnerSettings.SpawnInstructure` from `position` and `normal`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-normal" /><code>{"Vector3 normal"}</code> | Surface normal at the hit; the spawn is turned to it. |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | Where the spawn goes. |

## Used in

Members of other types that take, return or hold a `SpawnInstructure`:

[`DarknessSpawnerSettings.SpawnForPlayer`](/game-api/types/global-c-d/darknessspawnersettings#m-spawnforplayer-2).
