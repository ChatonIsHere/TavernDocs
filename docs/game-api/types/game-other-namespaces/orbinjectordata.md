---
title: "OrbInjectorData"
description: "One tutorial orb placement: the chunk to put it in and how to spawn it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OrbInjectorData

A **struct** in `Root.Township`, `ATT.MicroTutorial`.

One tutorial orb placement: the chunk to put it in and how to spawn it. Listed in `MicroTutorialFaceOrbSpawnSettings` and read by the server's `MicroTutorialOrbInjector`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-chunkidentifier" /><code>{"string ChunkIdentifier"}</code> | Identifier of the chunk the orb spawns in. The orb spawns when that chunk fully loads and despawns when it unloads. |
| <Link id="m-spawndata" /><code><Link to="/game-api/types/game-other-namespaces/orbspawndata">{"OrbSpawnData"}</Link>{" SpawnData"}</code> | What to spawn and where in the chunk. |

## Used in

Members of other types that take, return or hold a `OrbInjectorData`:

[`MicroTutorialFaceOrbSpawnSettings.allOrbInjectorData`](/game-api/types/game-other-namespaces/microtutorialfaceorbspawnsettings#m-allorbinjectordata), [`MicroTutorialFaceOrbSpawnSettings.GetAllOrbInjectorData`](/game-api/types/game-other-namespaces/microtutorialfaceorbspawnsettings#m-getallorbinjectordata), [`MicroTutorialOrbInjector.SetupOrbSpawnData`](/game-api/types/game-other-namespaces/microtutorialorbinjector#m-setuporbspawndata).
