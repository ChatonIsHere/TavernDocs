---
title: "ShootArguments"
description: "Network payload for a shot from a bow or Shooter: the projectile entity, where it was released and how hard."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShootArguments

A **struct** in `Root.Township`, the global namespace.

Network payload for a shot from a bow or `Shooter`: the projectile entity, where it was released and how hard. Sent with a `MethodSyncStruct` in both directions.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShootArguments("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" shot, float strength)"}</code> | Creates a `ShootArguments` from `shot` and `strength`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code><Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk"}</code> | Chunk the position is relative to. The server uses the projectile's chunk, a client the chunk the local player is in. |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | World position of the projectile when it was shot. |
| <Link id="m-rotation" /><code>{"Quaternion rotation"}</code> | Rotation of the projectile, compressed. The constructor also applies the compressed value to the projectile so both sides match. |
| <Link id="m-strength" /><code>{"float strength"}</code> | Shot strength from 0 to 1, sent with 0.001 precision. |
| <Link id="m-target" /><code>{"uint target"}</code> | Entity id of the projectile being shot. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads the target id, chunk and position, compressed rotation and strength (0 to 1). |

## Used in

Members of other types that take, return or hold a `ShootArguments`:

[`BowString.syncShoot`](/mod/game-api/types/global-a-b/bowstring#m-syncshoot), [`Shooter.syncShoot`](/mod/game-api/types/global-s/shooter#m-syncshoot), [`Shooter.SyncShoot`](/mod/game-api/types/global-s/shooter#m-syncshoot-2).
