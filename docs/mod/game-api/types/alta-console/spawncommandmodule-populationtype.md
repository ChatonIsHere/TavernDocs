---
title: "SpawnCommandModule.PopulationType"
description: "Shape of the population area the spawn population command spawns: disk, sphere or directional."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnCommandModule.PopulationType

An **enum** in `Root.Township`, `Alta.Console.Commands`.

Shape of the population area the `spawn population` command spawns: disk, sphere or directional. Each picks a different built-in prefab.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Nested in** [`SpawnCommandModule`](/mod/game-api/types/alta-console/spawncommandmodule)

## Values

| Member |
| --- |
| <Link id="m-directional" /><code>{"Directional = 2"}</code> |
| <Link id="m-disk" /><code>{"Disk = 0"}</code> |
| <Link id="m-sphere" /><code>{"Sphere = 1"}</code> |

## Used in

Members of other types that take, return or hold a `PopulationType`:

[`SpawnCommandModule.SpawnPopulation`](/mod/game-api/types/alta-console/spawncommandmodule#m-spawnpopulation).
