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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-chunkidentifier" /><code>{"string ChunkIdentifier"}</code> | <span className="api-desc">Identifier of the chunk the orb spawns in. The orb spawns when that chunk fully loads and despawns when it unloads.</span> |
| <Link id="m-spawndata" /><code><Link to="/mod/game-api/types/game-other-namespaces/orbspawndata">{"OrbSpawnData"}</Link>{" SpawnData"}</code> | <span className="api-desc">What to spawn and where in the chunk.</span> |

## Used in

Members of other types that take, return or hold a `OrbInjectorData`:

<div className="api-used-in">

[`MicroTutorialFaceOrbSpawnSettings.allOrbInjectorData`](/mod/game-api/types/game-other-namespaces/microtutorialfaceorbspawnsettings#m-allorbinjectordata), [`MicroTutorialFaceOrbSpawnSettings.GetAllOrbInjectorData`](/mod/game-api/types/game-other-namespaces/microtutorialfaceorbspawnsettings#m-getallorbinjectordata), [`MicroTutorialOrbInjector.SetupOrbSpawnData`](/mod/game-api/types/game-other-namespaces/microtutorialorbinjector#m-setuporbspawndata).

</div>
