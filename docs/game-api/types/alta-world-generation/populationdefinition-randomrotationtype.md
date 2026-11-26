---
title: "PopulationDefinition.RandomRotationType"
description: "Private: how GetRandomRotation turns spawned items: Y (random spin around the up axis) or XYZ (fully random)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PopulationDefinition.RandomRotationType

An **private enum** in `Root.Township`, `Alta.Populations`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private: how `GetRandomRotation` turns spawned items: Y (random spin around the up axis) or XYZ (fully random).

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Nested in** [`PopulationDefinition`](/game-api/types/alta-world-generation/populationdefinition)

## Values

| Member |
| --- |
| <Link id="m-xyz" /><code>{"XYZ = 1"}</code> |
| <Link id="m-y" /><code>{"Y = 0"}</code> |

## Used in

Members of other types that take, return or hold a `RandomRotationType`:

[`PopulationDefinition.randomRotationType`](/game-api/types/alta-world-generation/populationdefinition#m-randomrotationtype).
