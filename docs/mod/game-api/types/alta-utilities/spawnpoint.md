---
title: "SpawnPoint"
description: "A plain position and rotation pair for spawning something."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnPoint

A **struct** in `Root.Township`, `Alta.Utilities`.

A plain position and rotation pair for spawning something.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-position" /><code>{"Vector3 Position"}</code> | <span className="api-desc">World position to spawn at.</span> |
| <Link id="m-rotation" /><code>{"Quaternion Rotation"}</code> | <span className="api-desc">Rotation to spawn with.</span> |

## Used in

Members of other types that take, return or hold a `SpawnPoint`:

<div className="api-used-in">

[`Domain.GetPlayerEntryPoint`](/mod/game-api/types/game-other-namespaces/domain#m-getplayerentrypoint), [`Domain.playerEntryPoints`](/mod/game-api/types/game-other-namespaces/domain#m-playerentrypoints), [`Domain.RegisterPlayerEntry`](/mod/game-api/types/game-other-namespaces/domain#m-registerplayerentry), [`Domain.spawnPoint`](/mod/game-api/types/game-other-namespaces/domain#m-spawnpoint), [`Domain.SpawnPoint`](/mod/game-api/types/game-other-namespaces/domain#m-spawnpoint-2), [`Player.SpawnNewControllerAtPointInChunk`](/mod/game-api/types/global-p/player#m-spawnnewcontrolleratpointinchunk).

</div>
