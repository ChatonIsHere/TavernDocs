---
title: "DarknessSpawnerSettings.SpawnInstructure"
description: "A point and surface normal found for one darkness spawn."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DarknessSpawnerSettings.SpawnInstructure

A **private struct** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A point and surface normal found for one darkness spawn.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Nested in** [`DarknessSpawnerSettings`](/mod/game-api/types/global-c-d/darknessspawnersettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawnInstructure(Vector3 position, Vector3 normal)"}</code> | <span className="api-desc">Creates a `DarknessSpawnerSettings.SpawnInstructure` from `position` and `normal`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-normal" /><code>{"Vector3 normal"}</code> | <span className="api-desc">Surface normal at the hit; the spawn is turned to it.</span> |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | <span className="api-desc">Where the spawn goes.</span> |

## Used in

Members of other types that take, return or hold a `SpawnInstructure`:

<div className="api-used-in">

[`DarknessSpawnerSettings.SpawnForPlayer`](/mod/game-api/types/global-c-d/darknessspawnersettings#m-spawnforplayer-2).

</div>
