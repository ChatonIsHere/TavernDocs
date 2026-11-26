---
title: "OrbSpawnData"
description: "Where to spawn a micro tutorial orb and which tutorial it starts."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OrbSpawnData

A **struct** in `Root.Township`, `ATT.MicroTutorial`.

Where to spawn a micro tutorial orb and which tutorial it starts. Part of an orb injector entry.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-spawnpoint" /><code>{"Vector3 SpawnPoint"}</code> | World position of the orb. |
| <Link id="m-tutorial" /><code><Link to="/mod/game-api/types/game-other-namespaces/microtutorialsettings">{"MicroTutorialSettings"}</Link>{" Tutorial"}</code> | Tutorial settings the orb starts. |

## Used in

Members of other types that take, return or hold a `OrbSpawnData`:

[`MicroTutorialOrbInjector.orbSpawnDataByChunk`](/mod/game-api/types/game-other-namespaces/microtutorialorbinjector#m-orbspawndatabychunk), [`OrbInjectorData.SpawnData`](/mod/game-api/types/game-other-namespaces/orbinjectordata#m-spawndata).
